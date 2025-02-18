import { Form, Stepper } from "../../../components";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "../../../components/date-picker";

import { TextField } from "../../../components/text-field";

import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./schemas/RentMoney.schema";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";
import { AdminSideBar } from "../../../../../../../components/AdminSidebar";
import AdminHeader from "../../../../../../../components/AdminHeader";

const Page = () => {
  // const { control, setValue } = useFormContext<Schema>();
  // const state = useWatch({ control, name: "state" });

  return (
    <>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="RentAmount" label={"Rent Amount"} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="IsinCludeUtilities"
          label={"IsinCludeUtilities"}
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
    navigate("/landlord/leases-builder/leases-review");
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
      title={"Rent Money"}
    >
      <Page />
    </Form>
  );
};

export { Provider as RentMoney };
