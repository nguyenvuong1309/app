import { useEmployeeHistoryStore } from "../hooks";
import { employeeHistorySchema } from "../schemas";
import { propertyInformationSchema } from "../pages/form_steps/property_info/schemas/PropertyInfo.schema";
import { useEmployeeReviewStore } from "../hooks/ReviewStore";
import {
  Stepper as MuiStepper,
  Step,
  StepButton,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router";
import { tenantInfoSchema } from "../pages/form_steps/tenant_info/schemas/TenantInfo.schema";
import { propertyTimeSchema } from "../pages/form_steps/property_time/schemas/PropertyTime.schema";
import { usePropertyInfoStore } from "../pages/form_steps/property_info/hooks/useStore";
import { useTenantInfoStore } from "../pages/form_steps/tenant_info/hooks/useStore";
import { usePropertyTimeStore } from "../pages/form_steps/property_time/hooks/useStore";
import { useRentMoneyStore } from "../pages/form_steps/rent_money/hooks/useStore";
import { rentMoneySchema } from "../pages/form_steps/rent_money/schemas/RentMoney.schema";
import { useLeasesReviewStore } from "../pages/form_steps/leases_review/hooks/useStore";
import { reviewLeasesSchema } from "../pages/form_steps/leases_review/schemas/ReviewLeases.schema";
export const Stepper = () => {
  const { pathname } = useLocation();

  const { formData: propertyInformationFormData } = usePropertyInfoStore();
  const { formData: propertyTimeFormData } = usePropertyTimeStore();
  const { formData: tenantInfoFormData } = useTenantInfoStore();
  const { formData: rentMoneyFormData } = useRentMoneyStore();
  const { formData: leasesReviewFormData } = useLeasesReviewStore();
  const {
    formData: employeeReviewFormData,
    isSubmitted: isEmployeeReviewSubmitted,
  } = useEmployeeReviewStore();

  const { success: propertyInformationSuccess } =
    propertyInformationSchema.safeParse(propertyInformationFormData);

  const { success: propertyTimeSuccess } =
    propertyTimeSchema.safeParse(propertyTimeFormData);

  const { success: tenantInfoSuccess } =
    tenantInfoSchema.safeParse(tenantInfoFormData);

  const { success: rentMoneySuccess } =
    rentMoneySchema.safeParse(rentMoneyFormData);

  const { success: leasesReviewSuccess } =
    reviewLeasesSchema.safeParse(leasesReviewFormData);

  const steps = [
    {
      href: "/landlord/leases-builder/property-information",
      label: "Property Information",
      success: propertyInformationSuccess,
    },
    {
      href: "/landlord/leases-builder/property-time",
      label: "Property Time",
      success: propertyTimeSuccess,
    },
    {
      href: "/landlord/leases-builder/tenant-info",
      label: "Tenant Information",
      success: tenantInfoSuccess,
    },
    {
      href: "/landlord/leases-builder/rent-money",
      label: "Rent Money",
      success: rentMoneySuccess,
    },
    {
      href: "/landlord/leases-builder/leases-review",
      label: "Leases Review",
      success: leasesReviewSuccess,
    },
  ];

  const activeStep = steps.findIndex((item) => item.href === pathname);

  return (
    <MuiStepper nonLinear activeStep={activeStep}>
      {steps.map((step) => (
        <Step key={step.href}>
          <StepButton
            color="inherit"
            href={step.href}
            optional={
              !step.success &&
              isEmployeeReviewSubmitted && (
                <Typography variant="caption" color="error">
                  {`Invalid form data. Please check the form and try again.`}
                </Typography>
              )
            }
          >
            {step.label}
          </StepButton>
        </Step>
      ))}
    </MuiStepper>
  );
};
