import { Fragment, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../../../components/ui/sheet";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ChartNoAxesCombined,
  Inbox,
  LandPlot,
  Wrench,
  File,
  FileText,
  User,
  CreditCard,
} from "lucide-react";
import { SettingsApplications } from "@mui/icons-material";
import PATH from "../../../config/path";

const adminSidebarMenuItems = [
  {
    id: "inbox",
    label: "Inbox",
    path: "/inbox",
    icon: <Inbox />,
  },
  {
    id: "oassis",
    label: "Oassis",
    path: "/landlord/dashboard",
    icon: <LandPlot />,
  },
  {
    id: "maintenance",
    label: "Maintenance",
    path: PATH.LANDLORD_MAINTENANCE,
    icon: <Wrench />,
  },
  {
    id: "lease",
    label: "Lease",
    path: PATH.LANDLORD_LEASES_BUILDER,
    icon: <File />,
  },
  {
    id: "forms",
    label: "Forms",
    path: "/forms",
    icon: <FileText />,
  },
  {
    id: "leads",
    label: "Leads",
    path: PATH.LANDLORD_LEADS,
    icon: <User />,
  },
  {
    id: "applications",
    label: "Applications",
    path: PATH.LANDLORD_APPLICANTS,
    icon: <SettingsApplications />,
  },
  {
    id: "tenants",
    label: "Tenants",
    path: PATH.LANDLORD_TENANTS,
    icon: <User />,
  },
  {
    id: "payments",
    label: "Payments",
    path: "/payments",
    icon: <CreditCard />,
  },
  {
    id: "expenses",
    label: "Expenses",
    path: "/expenses",
    icon: <CreditCard />,
  },
  {
    id: "accounting",
    label: "Accounting",
    path: "/accounting",
    icon: <CreditCard />,
  },
];

export const MenuItems = ({ setOpen }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {}, []);

  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
          }}
          className={`flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground ${
            location.pathname.includes(menuItem.path)
              ? "bg-teal-500 text-white"
              : ""
          }`}
        >
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
};

export const AdminSideBar = ({ open, setOpen }: any) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-5">
                <ChartNoAxesCombined size={30} />
                <div className="text-2xl font-extrabold">Admin Panel</div>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex cursor-pointer items-center gap-2"
        >
          <ChartNoAxesCombined size={30} />
          <div className="text-2xl font-extrabold">Admin Panel</div>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
};
