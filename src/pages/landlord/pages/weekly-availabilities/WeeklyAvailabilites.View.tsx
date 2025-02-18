"use client";

import * as React from "react";
import { Input } from "../../../../components/ui/input";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Users, X } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { TimePickerDialog } from "../../components/TimePickerDialog";
import { DateSpecificHoursDialog } from "../../components/DateSpecificHoursDialog";
import { useFormContext } from "react-hook-form";
import {
  CreateOasisType,
  defaultOasisValues,
} from "../create-new-oasis/schema";
import axios from "axios";
import { ACCESS_TOKEN, USER } from "../../../../../src/utils";
import toast from "react-hot-toast";
import { OasisModel } from "../create-new-oasis/Oasis.type";
import { useNavigate, useParams } from "react-router-dom";
import PATH from "../../../../../src/config/path";

const timeZones = [
  "Pacific Time - US & Canada",
  "Mountain Time - US & Canada",
  "Central Time - US & Canada",
  "Eastern Time - US & Canada",
];

const timezoneOptions = [
  { value: "Pacific Time - US & Canada", label: "Pacific Time (PT)" },
  { value: "Mountain Time - US & Canada", label: "Mountain Time (MT)" },
  { value: "Central Time - US & Canada", label: "Central Time (CT)" },
  { value: "Eastern Time - US & Canada", label: "Eastern Time (ET)" },
];

const timeOptions = Array.from({ length: 24 }, (_, hour) => {
  const formattedHour = hour.toString().padStart(2, "0");
  return [
    { value: `${formattedHour}:00`, label: `${formattedHour}:00` },
    { value: `${formattedHour}:30`, label: `${formattedHour}:30` },
  ];
}).flat();

interface WeeklyAvailabilitesProps {
  next?: () => void;
  prev?: () => void;
}

export const WeeklyAvailabilites = ({
  next,
  prev,
}: WeeklyAvailabilitesProps) => {
  const {
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useFormContext<CreateOasisType>();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const weeklySchedule = watch("weeklySchedule");
  const formData = watch();

  const [selectedTimezone, setSelectedTimezone] = React.useState(
    formData.weeklySchedule.timezone || "Mountain Time - US & Canada"
  );

  const handleDayTimeChange = (
    dayIndex: number,
    start: string,
    end: string
  ) => {
    setValue(
      `weeklySchedule.schedule.${dayIndex}.times`,
      { start, end },
      { shouldValidate: true }
    );
  };

  const handleDayToggle = (day: string, dayIndex: number) => {
    const scheduleIndex = weeklySchedule.schedule.findIndex(
      (item: any) => item.day === day
    );
    if (scheduleIndex !== -1) {
      const enabled = !weeklySchedule.schedule[scheduleIndex].enabled;
      setValue(`weeklySchedule.schedule.${scheduleIndex}.enabled`, enabled, {
        shouldValidate: true,
      });

      if (enabled) {
        setValue(`weeklySchedule.schedule.${scheduleIndex}.times`, {
          start: "09:00",
          end: "17:00",
        });
      } else {
        setValue(`weeklySchedule.schedule.${scheduleIndex}.times`, {
          start: "Closed",
          end: "Closed",
        });
        setValue(`weeklySchedule.schedule.${scheduleIndex}.enabled`, false);
      }
    }
  };

  const handleAddDateSpecificHours = (
    date: Date,
    startTime: string,
    endTime: string
  ) => {
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    setValue("weeklySchedule.vacations", [
      ...weeklySchedule.vacations,
      {
        date: formattedDate,
        time: `${startTime} – ${endTime}`,
      },
    ]);
  };

  const handleRemoveVacation = (index: number) => {
    setValue(
      "weeklySchedule.vacations",
      weeklySchedule.vacations.filter((_: any, i: number) => i !== index)
    );
  };

  const updateOasis = async () => {
    const formData = watch();
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/api/getForm/oasis/${id}/`,
        {
          type: formData.type,
          propertyFeatures: formData.features.property,
          communityFeatures: formData.features.community,
          address: formData.location.address,
          bedrooms: formData.details.bedrooms,
          bathrooms: formData.details.bathrooms,
          livingSpace: formData.details.livingSpace,
          monthlyRent: formData.details.monthlyRent,
          securityDeposit: formData.details.securityDeposit,
          leaseTerm: formData.details.leaseTerm,
          availableDate: formData.details.availableDate,
          utilities: formData.details.utilities,
          description: formData.details.description,
          hiddenNotes: formData.details.notes.hidden,
          authorizationNotes: formData.details.notes.authorization,
          contactMethod: formData.details.contact.method,
          contactPhone: formData.details.contact.phone,
          contactEmail: formData.details.contact.email,
          images: formData.details.media.files.map((file: any) => file.preview),
          videoTourUrl: formData.details.media.videoTourUrl,
          viewingAvailability: formData.viewingAvailability,
          weeklySchedule: formData.weeklySchedule,
          domain_user_id: JSON.parse(localStorage.getItem(USER) || "{}")?.user
            ?.id,
          added_by_user_id: JSON.parse(localStorage.getItem(USER) || "{}")?.user
            ?.id,
          createdAt: new Date().toISOString().split("T")[0],
          updatedAt: new Date().toISOString().split("T")[0],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
          },
          withCredentials: true,
        }
      );
      toast.success("Success");
      navigate(PATH.LANDLORD_DASHBOARD);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error");
    }
  };

  const onPublishPress = async () => {
    const isValid = await trigger("weeklySchedule");
    if (!isValid) return;
    const currentUrl = window.location.href;
    const currentWeeklySchedule = watch("weeklySchedule");
    if (currentUrl.includes("update")) {
      await updateOasis();
      return;
    }
    const isChanged =
      JSON.stringify(currentWeeklySchedule) !==
      JSON.stringify(defaultOasisValues.weeklySchedule);

    if (isChanged) {
      const isValid = await trigger("weeklySchedule");
      if (!isValid) return;
    }
    const body: OasisModel = {
      id: Number(
        new Date()
          .toLocaleTimeString("en-US", { hour12: false })
          .replace(/:/g, "")
      ),
      userId: JSON.parse(localStorage.getItem(USER) || "{}")?.user?.id,
      type: formData.type,
      propertyFeatures: formData.features.property,
      communityFeatures: formData.features.community,
      address: formData.location.address,
      bedrooms: formData.details.bedrooms,
      bathrooms: formData.details.bathrooms,
      livingSpace: formData.details.livingSpace,
      monthlyRent: formData.details.monthlyRent,
      securityDeposit: formData.details.securityDeposit,
      leaseTerm: formData.details.leaseTerm,
      utilities: formData.details.utilities,
      description: formData.details.description,
      hiddenNotes: formData.details.notes.hidden,
      authorizationNotes: formData.details.notes.authorization,
      availableDate: formData.details.availableDate || new Date(),
      contactMethod: formData.details.contact.method,
      contactPhone: formData.details.contact.phone || "",
      contactEmail: formData.details.contact.email || "",
      images: formData.details.media.files.map((file: any) => file.preview),
      videoTourUrl: formData.details.media.videoTourUrl || "",
      viewingAvailability: formData.viewingAvailability,
      weeklySchedule: {
        timezone: currentWeeklySchedule.timezone,
        schedule: currentWeeklySchedule.schedule.map((day: any) => ({
          day: day.day,
          times: {
            start: day.times.start,
            end: day.times.end,
          },
          enabled: day.enabled,
        })),
        vacations: currentWeeklySchedule.vacations,
      },
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    };
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/api/getForm/oasis/`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
          },
        }
      );
      toast.success("Success", {
        position: "top-right",
      });
      navigate(PATH.LANDLORD_DASHBOARD);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error");
    }
  };

  const onCancelPress = () => {
    prev?.();
  };

  const onSelectTimezone = (value: any) => {
    setValue("weeklySchedule.timezone", value);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Wil's listings</h1>
          <h2 className="text-xl">Add a new listing</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h3 className="text-lg font-semibold underline mb-6">
              Weekly Availabilities
            </h3>
            <div className="space-y-4">
              {weeklySchedule?.schedule?.map((day, index) => (
                <div key={day.day} className="flex items-center gap-4">
                  <div className="w-24 flex items-center gap-2">
                    <Checkbox
                      checked={day.enabled}
                      onCheckedChange={(checked) =>
                        handleDayToggle(day.day, index)
                      }
                    />
                    <span className="font-medium">{day.day}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="text"
                      value={day?.times?.start}
                      readOnly
                      className="w-24"
                    />
                    <span className="text-muted-foreground">-</span>
                    <Input
                      type="text"
                      value={day?.times?.end}
                      readOnly
                      className="w-24"
                    />
                    {day.enabled && (
                      <TimePickerDialog
                        startTime={day?.times?.start}
                        endTime={day?.times?.end}
                        onTimeChange={(start, end) =>
                          handleDayTimeChange(index, start, end)
                        }
                      />
                    )}
                  </div>
                </div>
              ))}
              {errors.weeklySchedule?.schedule && (
                <p className="text-red-500 text-sm">
                  {errors.weeklySchedule.schedule.message}
                </p>
              )}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span>🌎</span>
              <Select
                value={formData.weeklySchedule.timezone}
                onValueChange={onSelectTimezone}
              >
                <SelectTrigger className="w-[240px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {timeZones.map((zone) => (
                    <SelectItem
                      key={zone}
                      value={zone}
                      // onClick={() => onSelectTimezone(zone)}
                    >
                      {zone}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {errors.weeklySchedule?.timezone && (
              <p className="text-red-500 text-sm">
                {errors.weeklySchedule.timezone.message}
              </p>
            )}
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">Upcoming Vacations</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Override your availability for specific dates when your hours
              differ from your regular weekly hours.
            </p>
            <div className="space-y-2">
              {weeklySchedule?.vacations?.map((vacation, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-md ${
                    index % 2 === 1 ? "bg-muted/50" : ""
                  }`}
                >
                  <span>{vacation.date}</span>
                  <div className="flex items-center gap-4">
                    <span>{vacation.time}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveVacation(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <DateSpecificHoursDialog onAdd={handleAddDateSpecificHours} />
          </section>
          <div className="flex justify-end gap-4">
            <button
              onClick={onCancelPress}
              className="px-6 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={onPublishPress}
              className="px-6 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
