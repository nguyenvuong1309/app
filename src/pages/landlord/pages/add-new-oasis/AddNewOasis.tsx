import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Calendar } from "../../../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";
import { format } from "date-fns";
import {
  CalendarIcon,
  HelpCircle,
  Plus,
  Minus,
  X,
  ImageIcon,
  Film,
} from "lucide-react";
import { Textarea } from "../../../../components/ui/textarea";
import { useFormContext } from "react-hook-form";
import { CreateOasisType } from "../create-new-oasis/schema";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toggle } from "../../../../components/ui/toggle";

interface MediaFile {
  file: File;
  preview: string;
  type: "image" | "video";
}

interface AddNewOasisProps {
  next?: () => void;
  prev?: () => void;
}

export const AddNewOasis = ({ next, prev }: AddNewOasisProps) => {
  const navigate = useNavigate();
  const {
    register,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = useFormContext<CreateOasisType>();
  const formData = watch();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const details = watch("details");

  useEffect(() => {}, [details]);

  const handleDateSelect = (date: Date | undefined) => {
    setValue("details.availableDate", date, { shouldValidate: true });
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newFiles: MediaFile[] = Array.from(files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      type: file.type.startsWith("image/") ? "image" : "video",
    }));

    setValue(
      "details.media.files",
      [...(details.media.files || []), ...newFiles],
      {
        shouldValidate: true,
      }
    );

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeFile = (index: number) => {
    const currentFiles = details.media.files;
    URL.revokeObjectURL(currentFiles[index].preview);
    setValue(
      "details.media.files",
      currentFiles.filter((_, i) => i !== index),
      { shouldValidate: true }
    );
  };

  const handleNext = async () => {
    const isValid = await trigger("details");
    if (!isValid) {
      console.log("🚀 ~ handleNext ~ errors:", errors);
      // Xử lý hiển thị lỗi cho người dùng tại đây
      Object.entries(errors.details || {}).forEach(([field, error]) => {
        console.log(`Lỗi ở trường ${field}: ${error}`);
      });
    } else {
      next?.();
    }
  };

  const onCancelPress = () => {
    prev?.();
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Wil's listings</h1>
          <h2 className="text-xl">Add a new listing</h2>
        </div>
        <div className="flex items-center gap-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">
            Share some basics of your oasis
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Bedrooms</Label>
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setValue(
                      "details.bedrooms",
                      Math.max(0, details.bedrooms - 1),
                      { shouldValidate: true }
                    )
                  }
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{details.bedrooms}</span>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setValue("details.bedrooms", details.bedrooms + 1, {
                      shouldValidate: true,
                    })
                  }
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {errors.details?.bedrooms && (
              <p className="text-red-500 text-sm">
                {errors.details.bedrooms.message}
              </p>
            )}

            <div className="flex items-center justify-between">
              <Label>Bathrooms</Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setValue(
                      "details.bathrooms",
                      Math.max(0, details.bathrooms - 1)
                    )
                  }
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{details.bathrooms}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setValue("details.bathrooms", details.bathrooms + 1)
                  }
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <Label>Living Space</Label>
              <Input
                type="number"
                {...register("details.livingSpace", { valueAsNumber: true })}
                placeholder="ft²"
              />
              {errors.details?.livingSpace && (
                <p className="text-red-500 text-sm">
                  {errors.details.livingSpace.message}
                </p>
              )}
            </div>

            <div>
              <Label>Monthly Rent</Label>
              <Input
                type="number"
                {...register("details.monthlyRent", { valueAsNumber: true })}
                placeholder="$"
              />
              {errors.details?.monthlyRent && (
                <p className="text-red-500 text-sm">
                  {errors.details.monthlyRent.message}
                </p>
              )}
            </div>

            <div>
              <Label>Security Deposit</Label>
              <Input
                type="number"
                {...register("details.securityDeposit", {
                  valueAsNumber: true,
                })}
                placeholder="$"
              />
              {errors.details?.securityDeposit && (
                <p className="text-red-500 text-sm">
                  {errors.details.securityDeposit.message}
                </p>
              )}
            </div>

            <div>
              <Label>Lease Term (months)</Label>
              <Input
                type="number"
                {...register("details.leaseTerm", { valueAsNumber: true })}
              />
              {errors.details?.leaseTerm && (
                <p className="text-red-500 text-sm">
                  {errors.details.leaseTerm.message}
                </p>
              )}
            </div>

            <div>
              <Label>Availability Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    {details.availableDate
                      ? format(details.availableDate, "MMM/dd/yyyy")
                      : "MMM/DD/YYYY"}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={details.availableDate}
                    onSelect={handleDateSelect}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label>Utilities Included</Label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="waste"
                    checked={details.utilities.includes("waste")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setValue("details.utilities", [
                          ...details.utilities,
                          "waste",
                        ]);
                      } else {
                        setValue(
                          "details.utilities",
                          details.utilities.filter(
                            (utility) => utility !== "waste"
                          )
                        );
                      }
                    }}
                  />
                  <label htmlFor="waste">Waste</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="internet"
                    checked={details.utilities.includes("internet")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setValue("details.utilities", [
                          ...details.utilities,
                          "internet",
                        ]);
                      } else {
                        setValue(
                          "details.utilities",
                          details.utilities.filter(
                            (utility) => utility !== "internet"
                          )
                        );
                      }
                    }}
                  />
                  <label htmlFor="internet">Internet</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="electricity"
                    checked={details.utilities.includes("electricity")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setValue("details.utilities", [
                          ...details.utilities,
                          "electricity",
                        ]);
                      } else {
                        setValue(
                          "details.utilities",
                          details.utilities.filter(
                            (utility) => utility !== "electricity"
                          )
                        );
                      }
                    }}
                  />
                  <label htmlFor="electricity">Electricity</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="gas"
                    checked={details.utilities.includes("gas")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setValue("details.utilities", [
                          ...details.utilities,
                          "gas",
                        ]);
                      } else {
                        setValue(
                          "details.utilities",
                          details.utilities.filter(
                            (utility) => utility !== "gas"
                          )
                        );
                      }
                    }}
                  />
                  <label htmlFor="gas">Gas</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="water"
                    checked={details.utilities.includes("water")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setValue("details.utilities", [
                          ...details.utilities,
                          "water",
                        ]);
                      } else {
                        setValue(
                          "details.utilities",
                          details.utilities.filter(
                            (utility) => utility !== "water"
                          )
                        );
                      }
                    }}
                  />
                  <label htmlFor="water">Water</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="not-included"
                    checked={details.utilities.includes(
                      "not included, see description"
                    )}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setValue("details.utilities", [
                          ...details.utilities,
                          "not included, see description",
                        ]);
                      } else {
                        setValue(
                          "details.utilities",
                          details.utilities.filter(
                            (utility) =>
                              utility !== "not included, see description"
                          )
                        );
                      }
                    }}
                  />
                  <label htmlFor="not-included">
                    Not included, see description
                  </label>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Authorization Notes</span>
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent className="relative border-2 border-[#2A9D8F] bg-white p-4 rounded-2xl max-w-[300px] shadow-lg before:absolute before:bottom-[-12px] before:left-4 before:w-4 before:h-4 before:rotate-45 before:border-b-2 before:border-r-2 before:border-[#2A9D8F] before:bg-white">
                        <p className="text-sm text-black">
                          Authorization notes of Oasis that will appear when
                          prospecs apply to rent.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <Textarea
                className="mt-2"
                value={details.notes.authorization}
                onChange={(e) =>
                  setValue("details.notes.authorization", e.target.value)
                }
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">Hidden Notes</span>
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent className="relative border-2 border-[#2A9D8F] bg-white p-4 rounded-2xl max-w-[300px] shadow-lg before:absolute before:bottom-[-12px] before:left-4 before:w-4 before:h-4 before:rotate-45 before:border-b-2 before:border-r-2 before:border-[#2A9D8F] before:bg-white">
                      <p className="text-sm text-black">
                        Personal notes of Oasis that will not disclose to the
                        tenants
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <Input
              className="mt-2"
              value={details.notes.hidden}
              onChange={(e) => setValue("details.notes.hidden", e.target.value)}
            />
          </div>

          <div>
            <Label>Contact Method</Label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("details.contact.method")}
                  value="email"
                />
                Email
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("details.contact.method")}
                  value="phone"
                />
                Phone
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("details.contact.method")}
                  value="both"
                />
                Both
              </label>
            </div>
          </div>

          {(details.contact.method === "email" ||
            details.contact.method === "both") && (
            <div>
              <Label>Email</Label>
              <Input type="email" {...register("details.contact.email")} />
              {errors.details?.contact?.email && (
                <p className="text-red-500 text-sm">
                  {errors.details.contact.email.message}
                </p>
              )}
            </div>
          )}

          {(details.contact.method === "phone" ||
            details.contact.method === "both") && (
            <div>
              <Label>Phone</Label>
              <Input type="tel" {...register("details.contact.phone")} />
            </div>
          )}

          <div>
            <Label>Description of the Oasis</Label>
            <Textarea
              className="mt-2 min-h-[200px]"
              {...register("details.description")}
            />
            {errors.details?.description && (
              <p className="text-red-500 text-sm">
                {errors.details.description.message}
              </p>
            )}
          </div>

          <div>
            <Label>Video tour URL</Label>
            <Input
              type="url"
              className="mt-2"
              value={details.media.videoTourUrl}
              onChange={(e) =>
                setValue("details.media.videoTourUrl", e.target.value)
              }
            />
          </div>

          <div className="space-y-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="image/*,video/*"
              className="hidden"
              multiple
            />

            <div className="border-2 border-dashed rounded-lg p-6">
              {details?.media?.files?.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {details.media.files.map((file, index) => (
                    <div key={index} className="relative group">
                      {file.type === "image" ? (
                        <img
                          src={file.preview}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                      ) : (
                        <video
                          src={file.preview}
                          className="w-full h-40 object-cover rounded-lg"
                          controls
                        />
                      )}
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeFile(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <div className="absolute bottom-2 left-2">
                        {file.type === "image" ? (
                          <ImageIcon className="h-5 w-5 text-white drop-shadow-lg" />
                        ) : (
                          <Film className="h-5 w-5 text-white drop-shadow-lg" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center">
                  <Button
                    variant="outline"
                    className="mx-auto"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Insert photos or videos
                  </Button>
                </div>
              )}
            </div>

            {details?.media?.files?.length > 0 && (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => fileInputRef.current?.click()}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add more files
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button
          onClick={onCancelPress}
          className="px-6 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};
