"use client";
import {
  Home,
  Mail,
  FileText,
  PenToolIcon as Tool,
  Key,
  ClipboardList,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar";

const mainNavItems = [
  {
    title: "Inbox",
    icon: Mail,
    url: "#",
  },
  {
    title: "Oasis",
    icon: FileText,
    url: "#",
  },
  {
    title: "Maintenance",
    icon: Tool,
    url: "#",
  },
  {
    title: "Leases",
    icon: Key,
    url: "#",
  },
  {
    title: "Forms",
    icon: ClipboardList,
    url: "#",
  },
];

const renterItems = [
  {
    title: "Leads",
    url: "#",
  },
  {
    title: "Applicants",
    url: "#",
  },
  {
    title: "Tenants",
    url: "#",
  },
];

const financialItems = [
  {
    title: "Payments",
    url: "#",
  },
  {
    title: "Expenses",
    url: "#",
  },
  {
    title: "Accounting",
    url: "#",
  },
];

export const DashboardSidebar = () => {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#" className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-teal-600 text-white">
                  <Home className="h-4 w-4" />
                </div>
                <span className="font-semibold text-teal-600">
                  Property Dashboard
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-teal-600 font-medium">
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-teal-600 font-medium">
            Renters
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {renterItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-teal-600 font-medium">
            Financials
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {financialItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
