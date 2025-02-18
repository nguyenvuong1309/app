import { Stepper } from "./Stepper";
import { SummaryDialog } from "./summary-dialog/SummaryDialog";
import { Divider } from "@mui/material";
import { Outlet } from "react-router";

const Page = () => {
  return (
    <>
      <SummaryDialog />
      <Stepper />
      <Divider sx={{ marginY: 2 }} />
      <Outlet />
    </>
  );
};

export { Page as LeasesWrapper };
