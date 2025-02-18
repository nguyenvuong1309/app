import { Outlet } from "react-router-dom";
// import AdminSideBar from "./sidebar";
// import AdminHeader from "./header";
import { useState } from "react";
import { Navbar } from "../components/layout/HomeLayout/components/Navbar";

export const HeaderBar = () => {
  return (
    <div className="flex min-h-screen w-screen">
      {/* admin sidebar */}
      {/* <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} /> */}
      <div className="flex flex-1 flex-col">
        {/* admin header */}
        <Navbar />
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
