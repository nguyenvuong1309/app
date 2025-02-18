import { useState, useEffect } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createOasisSchema,
  CreateOasisType,
  defaultOasisValues,
} from "../create-new-oasis/schema";
import { ListTypeOasis } from "../list-type-oasis";
import { ListIncludeFeature } from "../list-include-feature";
import { ViewingAvailabilities } from "../viewing-availabilities";
import { WeeklyAvailabilites } from "../weekly-availabilities";
import { AddNewOasis } from "../add-new-oasis";
import { Navbar } from "../../../../components/layout/HomeLayout/components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ACCESS_TOKEN } from "../../../../utils/Constants";
import { OasisModel } from "../create-new-oasis/Oasis.type";
import { PropertyLocation } from "../property-location";
import { AdminSideBar } from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";

const steps = [
  {
    id: "Step 1",
    name: "Type Selection",
    fields: ["type"],
  },
  {
    id: "Step 2",
    name: "Location",
    fields: ["location"],
  },
  {
    id: "Step 3",
    name: "Features",
    fields: ["features"],
  },

  {
    id: "Step 4",
    name: "Property Details",
    fields: ["details"],
  },

  {
    id: "Step 5",
    name: "Viewing Availability",
    fields: ["viewingAvailability"],
  },

  {
    id: "Step 6",
    name: "Weekly Schedule",
    fields: ["weeklySchedule"],
  },
];

export const UpdateOasis = () => {
  const { id } = useParams<{ id: string }>();
  const [oasisData, setOasisData] = useState<CreateOasisType | null>(null);
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm<CreateOasisType>({
    resolver: zodResolver(createOasisSchema),
    defaultValues: oasisData || defaultOasisValues,
    mode: "onChange",
  });

  const {
    handleSubmit,
    trigger,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = methods;

  useEffect(() => {
    const fetchOasisData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}/api/oasis/?page=1&pageSize=50&search=&ordering=-id`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
            },
          }
        );
        const oasis: OasisModel = response.data.data.data.find(
          (item: OasisModel) => item.id === Number(id)
        );
        setValue("type", oasis?.type ?? "house");
        setValue("location.address", oasis?.address ?? "");
        setValue("features.property", oasis?.propertyFeatures ?? []);
        setValue("features.community", oasis?.communityFeatures ?? []);
        setValue("details.bedrooms", oasis?.bedrooms ?? 1);
        setValue("details.bathrooms", oasis?.bathrooms ?? 1);
        setValue(
          "details.contact.method",
          (oasis?.contactMethod as any) ?? "email"
        );
        setValue("details.contact.phone", oasis?.contactPhone ?? "0914595627");
        setValue(
          "details.contact.email",
          oasis?.contactEmail ?? "vuongnguyen123@gmail.com"
        );
        setValue("details.livingSpace", oasis?.livingSpace ?? 1);
        setValue("details.monthlyRent", Number(oasis?.monthlyRent) ?? 1);
        setValue(
          "details.securityDeposit",
          Number(oasis?.securityDeposit) ?? 1
        );
        setValue("details.leaseTerm", oasis?.leaseTerm ?? 1);
        setValue(
          "details.availableDate",
          oasis?.availableDate ? new Date(oasis.availableDate) : new Date()
        );
        setValue("details.utilities", (oasis?.utilities as any) ?? ["waste"]);
        setValue(
          "details.description",
          oasis?.description ?? " update update update "
        );
        setValue("details.notes.hidden", oasis?.hiddenNotes ?? "to do");
        setValue(
          "details.notes.authorization",
          oasis?.authorizationNotes ?? "to do"
        );
        setValue(
          "details.contact.method",
          (oasis?.contactMethod as any) ?? "email"
        );
        setValue("details.contact.phone", oasis?.contactPhone ?? "0914595627");
        setValue(
          "details.contact.email",
          oasis?.contactEmail ?? "hoangpham123@gmail.com"
        );
        setValue(
          "details.media",
          {
            files:
              (oasis?.images as any)?.map((url: string) => ({
                preview: url,
                type: "image",
              })) ?? [],
            videoTourUrl:
              oasis?.videoTourUrl ??
              "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          },
          { shouldValidate: true }
        );
        setValue(
          "viewingAvailability.bufferTime",
          (oasis?.viewingAvailability?.bufferTime as any) ?? "none"
        );
        setValue(
          "viewingAvailability.minimumNotice",
          (oasis?.viewingAvailability?.minimumNotice as any) ?? "1hour"
        );
        setValue(
          "viewingAvailability.dailyLimit",
          (oasis?.viewingAvailability?.dailyLimit as any) ?? 1
        );
        setValue(
          "viewingAvailability.startTimeIncrements",
          (oasis?.viewingAvailability?.startTimeIncrements as any) ?? 15
        );
        setValue("weeklySchedule", (oasis?.weeklySchedule as any) ?? {});
      } catch (error) {
        console.error("Error fetching oasis data:", error);
      }
    };

    fetchOasisData();
  }, [id, reset]);

  const processForm = async (data: CreateOasisType) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_API}/api/getForm/oasis/${id}/`,
        data
      );
    } catch (error) {
      console.error("Error updating oasis:", error);
    }
  };

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as Array<keyof CreateOasisType>);

    if (!output) return;

    if (currentStep < steps.length) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col">
        <AdminHeader setOpen={setOpenSidebar} />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(processForm)}>
            {currentStep === 0 && <ListTypeOasis next={next} prev={prev} />}
            {currentStep === 1 && <PropertyLocation next={next} prev={prev} />}
            {currentStep === 2 && (
              <ListIncludeFeature next={next} prev={prev} />
            )}
            {currentStep === 3 && <AddNewOasis next={next} prev={prev} />}
            {currentStep === 4 && (
              <ViewingAvailabilities next={next} prev={prev} />
            )}
            {currentStep === 5 && (
              <WeeklyAvailabilites next={next} prev={prev} />
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
