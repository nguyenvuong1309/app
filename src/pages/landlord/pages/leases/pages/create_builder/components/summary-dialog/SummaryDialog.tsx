import { useTenantInfoStore } from "../../pages/form_steps/tenant_info/hooks/useStore";
import { useLeasesReviewStore } from "../../pages/form_steps/leases_review/hooks/useStore";
import { usePropertyTimeStore } from "../../pages/form_steps/property_time/hooks/useStore";
import { useRentMoneyStore } from "../../pages/form_steps/rent_money/hooks/useStore";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useCreate } from "./hooks/useMutations";
// import { useStore } from "@/features/employee/wrapper/hooks/useStore";
import { schema } from "./schemas/SummaryDialog.schema";
// import { getErrorMessage } from "@/utils/getErrorMessage";
// import { showSnack } from "@/utils/showSnack";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { FormEvent } from "react";
import { TenantInfo } from "../../pages/form_steps/tenant_info/TenantInfo";
import { PropertyTime } from "../../pages/form_steps/property_time/PropertyTime";
import { RentMoney } from "../../pages/form_steps/rent_money/RentMoney";
import { LeasesReview } from "../../pages/form_steps/leases_review/LeasesReview";
import { useStore } from "../../../create_builder/hooks/useLeasesWrapperStore";

const SummaryDialog = () => {
  const { summaryDialogOpen, updateSummaryDialogOpen } = useStore();
  const createMutation = useCreate();

  const { formData: tenantInfoFormData } = useTenantInfoStore();
  const { formData: leasesReviewFormData } = useLeasesReviewStore();
  const { formData: propertyTimeFormData } = usePropertyTimeStore();
  const { formData: rentMoneyFormData } = useRentMoneyStore();

  const allFormData = {
    ...tenantInfoFormData,
    ...leasesReviewFormData,
    ...propertyTimeFormData,
    ...rentMoneyFormData,
  };

  console.log("🚀 ~ SummaryDialog ~ allFormData:", allFormData);

  const handleClose = () => {
    if (!createMutation.isPending) {
      updateSummaryDialogOpen(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    console.log("🚀 ~ onSubmit ~ allFormData:", allFormData);
    e.preventDefault();
    try {
      schema.parse(allFormData);
      createMutation.mutate(undefined, { onSuccess: handleClose });
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
      // showSnack(getErrorMessage(error), { variant: "error" });
    }
  };

  return (
    <Dialog
      open={summaryDialogOpen}
      component="form"
      onSubmit={onSubmit}
      fullWidth
      maxWidth="md"
      onClose={handleClose}
    >
      <DialogTitle variant="h5">{"Confirm Information"}</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TenantInfo readOnly />
        <Divider />
        <LeasesReview readOnly />
        <Divider />
        <PropertyTime readOnly />
        <Divider />
        <RentMoney readOnly />
        <Divider />
        <LeasesReview readOnly />
        <Divider />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit">
          {"Close"}
        </Button>
        <LoadingButton
          type="submit"
          loading={createMutation.isPending}
          variant="contained"
          startIcon={<SendOutlinedIcon />}
        >
          {"Submit"}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export { SummaryDialog };
