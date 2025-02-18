import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createOasisSchema,
  CreateOasisType,
  defaultOasisValues,
} from "./schema";
import { ListTypeOasis } from "../list-type-oasis";
import { ListIncludeFeature } from "../list-include-feature";
import { ViewingAvailabilities } from "../viewing-availabilities";
import { WeeklyAvailabilites } from "../weekly-availabilities";
import { AddNewOasis } from "../add-new-oasis";
import { Navbar } from "../../../../components/layout/HomeLayout/components/Navbar";
import { PropertyLocation } from "../property-location";
import { AdminHeader } from "../../components/AdminHeader";
import { AdminSideBar } from "../../components/AdminSidebar";

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
    id: "Step 5",
    name: "Weekly Schedule",
    fields: ["weeklySchedule"],
  },
];

export const CreateNewOasis = () => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm<CreateOasisType>({
    resolver: zodResolver(createOasisSchema),
    defaultValues: defaultOasisValues,
    mode: "onChange",
  });

  const { handleSubmit, trigger } = methods;

  const processForm = (data: CreateOasisType) => {
    methods.reset();
  };

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as Array<keyof CreateOasisType>);

    if (!output) return;

    if (currentStep < steps.length - 1) {
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
      {/* admin sidebar */}
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col">
        {/* admin header */}
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
