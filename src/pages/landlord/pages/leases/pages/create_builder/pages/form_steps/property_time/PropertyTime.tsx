import { Form } from "../../../components";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "../../../components/date-picker";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./schemas/PropertyTime.schema";
import { calculatePastDate } from "../../../../../../../../../utils";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";

const Page = () => {
  return (
    <>
      <Grid size={{ xs: 4 }}>
        <DatePicker<Schema>
          name="StartDate"
          label={"Start Date"}
          maxDate={calculatePastDate(18)}
          minDate={calculatePastDate(100)}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <DatePicker<Schema>
          name="EndDate"
          label={"End Date"}
          maxDate={calculatePastDate(18)}
          minDate={calculatePastDate(100)}
        />
      </Grid>
    </>
  );
};

type ProviderProps = { readOnly?: boolean };
const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(false);

  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    console.log("🚀 ~ Provider ~ data:", data);
    updateFormData(data);
    navigate("/landlord/leases-builder/tenant-info");
  };

  return (
    <Form
      submitButtonText={"Save and Continue"}
      slotProps={{
        submitButtonProps: { startIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={"Property Time"}
    >
      <Page />
    </Form>
  );
};

export { Provider as PropertyTime };
