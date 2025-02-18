import AdminHeader from "../pages/landlord/components/AdminHeader";
import { AdminSideBar } from "../pages/landlord/components/AdminSidebar";
import { Divider } from "@mui/material";
import { Outlet } from "react-router";
import { useState } from "react";
export const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="flex min-h-screen w-full">
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col">
        <AdminHeader setOpen={setOpenSidebar} />
        <Outlet />
      </div>
    </div>
  );
};
