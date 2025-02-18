import { useTenantInfoStore } from "../../../pages/form_steps/tenant_info/hooks/useStore";
import { useLeasesReviewStore } from "../../../pages/form_steps/leases_review/hooks/useStore";
import { usePropertyTimeStore } from "../../../pages/form_steps/property_time/hooks/useStore";
import { useRentMoneyStore } from "../../../pages/form_steps/rent_money/hooks/useStore";

// import { getErrorMessage } from "@/utils/getErrorMessage";
// import { showSnack } from "@/utils/showSnack";
import { useMutation } from "@tanstack/react-query";

const useCreate = () => {
  const { formData: tenantInfoFormData } = useTenantInfoStore();
  const { formData: propertyTimeFormData } = usePropertyTimeStore();
  const { formData: rentMoneyFormData } = useRentMoneyStore();
  const { formData: reviewLeasesFormData } = useLeasesReviewStore();

  return useMutation({
    // @ts-ignore
    mutationFn: () =>
      console.log({
        ...tenantInfoFormData,
        ...propertyTimeFormData,
        ...rentMoneyFormData,
        ...reviewLeasesFormData,
      }),

    onSuccess: async () => {
      // showSnack("Successful");
      console.log("🚀 ~ useCreate ~ onSuccess:");
    },
    onError: (error) => {
      console.log("🚀 ~ useCreate ~ error:", error);
      // showSnack(getErrorMessage(error), { variant: "error" });
    },
  });
};

export { useCreate };
