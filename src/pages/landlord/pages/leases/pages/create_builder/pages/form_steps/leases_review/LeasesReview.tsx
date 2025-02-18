import { Form, Stepper } from "../../../components";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

// import { useTermsAndConditions } from "../hooks/useQueries";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./schemas/ReviewLeases.schema";
// import { useEmployeeWrapperStore } from "@/features/employee/wrapper/hooks/useStore";
import { Checkbox } from "../../../components/checkbox";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";
import { useLeasesWrapperStore } from "../../../hooks/useLeasesWrapperStore";
import { AdminHeader } from "../../../../../../../components/AdminHeader";
import { AdminSideBar } from "../../../../../../../components/AdminSidebar";
import { useState } from "react";

const Page = () => {
  // const termsAndConditionsQuery = useTermsAndConditions();
  const termsAndConditionsQuery = {
    data: [
      {
        title: "Acceptance of Terms",
        content:
          "By accessing or using app, you agree to these Terms and Conditions. If you do not agree, please do not use the application.",
      },
      {
        title: "Use of the Application",
        content:
          "You are granted a limited, non-exclusive, non-transferable license to use app for personal and educational purposes. You may not use the application for any illegal or unauthorized purpose.",
      },
      {
        title: "User Responsibilities",
        content:
          "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.",
      },
      {
        title: "Data Handling",
        content:
          "The application allows you to create, read, update, and delete employee records. We do not store any personal data beyond what is necessary for the functionality of the application. Please ensure that you have the right to use any data you input into the application.",
      },
      {
        title: "Limitation of Liability",
        content:
          "In no event shall app be liable for any direct, indirect, incidental, or consequential damages arising out of the use of or inability to use the application.",
      },
      {
        title: "Changes to Terms",
        content:
          "We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the application after any changes signifies your acceptance of the new terms.",
      },
      {
        title: "Contact Information",
        content:
          "If you have any questions about these Terms and Conditions, please contact us at foo@bar.com.",
      },
    ],
  };

  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Stack
          sx={{
            gap: 2,
            maxHeight: 400,
            overflow: "scroll",
          }}
        >
          {termsAndConditionsQuery.data?.map((item) => (
            <Box key={item.title}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1">{item.content}</Typography>
            </Box>
          ))}
        </Stack>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Checkbox<Schema>
          name="termsAndConditionsAccepted"
          label={`I accept the terms and conditions.`}
        />
      </Grid>
    </>
  );
};

type ProviderProps = {
  readOnly?: boolean;
};
const Provider = ({ readOnly }: ProviderProps) => {
  const { updateSummaryDialogOpen } = useLeasesWrapperStore();
  const { formData, updateFormData, updateIsSubmitted } = useStore();
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    console.log("🚀 ~ Provider ~ data:", data);
    updateFormData(data);
    updateSummaryDialogOpen(true);
    updateIsSubmitted(true);
  };

  const handleError = () => {
    updateIsSubmitted(true);
  };

  return (
    <Form
      schema={schema}
      slotProps={{
        submitButtonProps: { startIcon: <SendOutlinedIcon /> },
      }}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      onError={handleError}
      readOnly={readOnly}
      title={"Review Leases"}
    >
      <Page />
    </Form>
  );
};

export { Provider as LeasesReview };
