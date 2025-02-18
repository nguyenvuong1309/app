import { BellIcon, HeartIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { CreateOasisType } from "../create-new-oasis/schema";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

interface ViewingAvailabilitiesProps {
  next?: () => void;
  prev?: () => void;
}

const bufferTimeOptions = [
  { value: "none", label: "None" },
  { value: "15min", label: "15 minutes" },
  { value: "30min", label: "30 minutes" },
  { value: "1hour", label: "1 hour" },
];

const minimumNoticeOptions = [
  { value: "1hour", label: "1 hour" },
  { value: "2hours", label: "2 hours" },
  { value: "4hours", label: "4 hours" },
  { value: "1day", label: "1 day" },
  { value: "2days", label: "2 days" },
];

const startTimeIncrementOptions = [
  { value: "15", label: "15 minutes" },
  { value: "30", label: "30 minutes" },
  { value: "60", label: "1 hour" },
];

export const ViewingAvailabilities = ({
  next,
  prev,
}: ViewingAvailabilitiesProps) => {
  const navigate = useNavigate();

  const {
    register,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useFormContext<CreateOasisType>();

  const viewingAvailability = watch("viewingAvailability");

  const onCancelPress = () => {
    prev?.();
  };

  const handleNext = async () => {
    const isValid = await trigger("viewingAvailability");
    if (isValid) {
      next?.();
    }
  };

  return (
    <div className="min-h-screen bg-background p-10">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Wil's listings</h1>
              <h2 className="text-lg text-muted-foreground">
                Add a new listing
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <HeartIcon className="h-5 w-5 text-muted-foreground" />
              </Button>
              <Button variant="ghost" size="icon">
                <BellIcon className="h-5 w-5 text-muted-foreground" />
              </Button>
              <Button variant="outline" className="gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarFallback>W</AvatarFallback>
                </Avatar>
                <span className="sr-only">User menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl">
          <h3 className="text-lg font-semibold underline mb-6">
            Viewing Availabilities
          </h3>

          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>Buffer Time Between Viewings</Label>
                <Select
                  value={viewingAvailability.bufferTime}
                  onValueChange={(value) =>
                    setValue("viewingAvailability.bufferTime", value as any, {
                      shouldValidate: true,
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select buffer time" />
                  </SelectTrigger>
                  <SelectContent>
                    {bufferTimeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.viewingAvailability?.bufferTime && (
                  <p className="text-red-500 text-sm">
                    {errors.viewingAvailability.bufferTime.message}
                  </p>
                )}
              </div>

              <div>
                <Label>Minimum Notice Required</Label>
                <Select
                  value={viewingAvailability.minimumNotice}
                  onValueChange={(value) =>
                    setValue(
                      "viewingAvailability.minimumNotice",
                      value as any,
                      {
                        shouldValidate: true,
                      }
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select minimum notice" />
                  </SelectTrigger>
                  <SelectContent>
                    {minimumNoticeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.viewingAvailability?.minimumNotice && (
                  <p className="text-red-500 text-sm">
                    {errors.viewingAvailability.minimumNotice.message}
                  </p>
                )}
              </div>

              <div>
                <Label>Daily Viewing Limit</Label>
                <Input
                  type="number"
                  {...register("viewingAvailability.dailyLimit", {
                    valueAsNumber: true,
                  })}
                  placeholder="Enter daily limit"
                />
                {errors.viewingAvailability?.dailyLimit && (
                  <p className="text-red-500 text-sm">
                    {errors.viewingAvailability.dailyLimit.message}
                  </p>
                )}
              </div>

              <div>
                <Label>Start Time Increments</Label>
                <Select
                  value={viewingAvailability.startTimeIncrements.toString()}
                  onValueChange={(value) =>
                    setValue(
                      "viewingAvailability.startTimeIncrements",
                      parseInt(value),
                      { shouldValidate: true }
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select time increments" />
                  </SelectTrigger>
                  <SelectContent>
                    {startTimeIncrementOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.viewingAvailability?.startTimeIncrements && (
                  <p className="text-red-500 text-sm">
                    {errors.viewingAvailability.startTimeIncrements.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancelPress}
          className="px-6 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500 transition-colors"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="px-6 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};
