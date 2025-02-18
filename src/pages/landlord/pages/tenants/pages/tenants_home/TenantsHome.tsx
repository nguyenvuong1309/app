"use client";

import { useState } from "react";
import { Avatar } from "../../../../../../components/ui/avatar";
import { Button } from "../../../../../../components/ui/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "../../../../../../components/ui/tabs";
import { Input } from "../../../../../../components/ui/input";
import {
  ChevronDown,
  ChevronUp,
  Search,
  SlidersHorizontal,
} from "lucide-react";

type TabType = "todo" | "payments" | "documents" | "maintenance" | "insurance";

interface Payment {
  type: string;
  datePaid: string;
  time: string;
}

interface Document {
  name: string;
  file: string;
  dateAdded: string;
  timeAdded: string;
}

interface Maintenance {
  description: string;
  serviceDate: string;
  serviceTime: string;
}

interface Insurance {
  name: string;
  file: string;
  dateAdded: string;
  timeAdded: string;
}

const payments: Payment[] = [
  { type: "Monthly Rent", datePaid: "February 1, 2024", time: "6:00 PM MDT" },
  {
    type: "Appliance Repair - Fridge",
    datePaid: "January 8, 2024",
    time: "2:00 PM MDT",
  },
  {
    type: "House Repair - Flooring Kitchen",
    datePaid: "January 4, 2024",
    time: "3:00 PM MDT",
  },
  { type: "Monthly Rent", datePaid: "December 1, 2023", time: "6:00 PM MDT" },
];

const documents: Document[] = [
  {
    name: "Relative Addendum",
    file: "Relative Addendum.PDF",
    dateAdded: "February 1, 2024",
    timeAdded: "6:00 PM MDT",
  },
  {
    name: "Parking Addendum",
    file: "Parking Addendum.PDF",
    dateAdded: "January 8, 2024",
    timeAdded: "2:00 PM MDT",
  },
  {
    name: "Pet Addendum",
    file: "Pet Addendum.PDF",
    dateAdded: "January 4, 2024",
    timeAdded: "3:00 PM MDT",
  },
  {
    name: "Lease Agreement",
    file: "Lease Agreement.PDF",
    dateAdded: "December 1, 2023",
    timeAdded: "6:00 PM MDT",
  },
];

const maintenances: Maintenance[] = [
  {
    description: "Appliance Repair --Sink Kitchen",
    serviceDate: "February 1, 2024",
    serviceTime: "6:00 PM MDT",
  },
  {
    description: "Appliance Repair - Fridge",
    serviceDate: "January 8, 2024",
    serviceTime: "2:00 PM MDT",
  },
  {
    description: "House Repair - Flooring Kitchen",
    serviceDate: "January 4, 2024",
    serviceTime: "3:00 PM MDT",
  },
  {
    description: "House Repair -- Backyard hose faucet",
    serviceDate: "December 1, 2023",
    serviceTime: "6:00 PM MDT",
  },
];

const insurances: Insurance[] = [
  {
    name: "Home Insurance Year 2023-2024",
    file: "HomeInsurance2023-24.PDF",
    dateAdded: "February 1, 2023",
    timeAdded: "6:00 PM MDT",
  },
  {
    name: "Tenant Insurance Year 2023-2024",
    file: "TenantInsurance2023-24.PDF",
    dateAdded: "January 8, 2023",
    timeAdded: "2:00 PM MDT",
  },
  {
    name: "Pet Insurance Year 2020-2024",
    file: "PetInsurance2020-24.PDF",
    dateAdded: "January 4, 2023",
    timeAdded: "3:00 PM MDT",
  },
  {
    name: "Home Insurance Year 2022-2023",
    file: "HomeInsurance2022-23.PDF",
    dateAdded: "February 1, 2022",
    timeAdded: "6:00 PM MDT",
  },
  {
    name: "Tenant Insurance Year 2022-2023",
    file: "TenantInsurance2022-23.PDF",
    dateAdded: "January 8, 2022",
    timeAdded: "2:00 PM MDT",
  },
];

export const TenantsHome = () => {
  const [activeTab, setActiveTab] = useState<TabType>("todo");
  const [expandedAddress, setExpandedAddress] = useState("8888");

  const TodoContent = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-medium">
          Unpaid Charges -- Furnace Repair
        </div>
        <Button className="rounded-full bg-teal-600 px-6 hover:bg-teal-700">
          Send private message
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-lg font-medium">Pet Addendum -- Add pet</div>
        <Button className="rounded-full bg-teal-600 px-6 hover:bg-teal-700">
          Share & Sign
        </Button>
      </div>
    </div>
  );

  const PaymentsContent = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <SlidersHorizontal className="h-5 w-5 text-gray-500" />
        <span className="text-gray-700">Filters</span>
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input placeholder="Search payments here.." className="pl-9" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="pb-4 text-left text-lg font-bold">Payment Dues</th>
              <th className="pb-4 text-left text-lg font-bold">Date Paid</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="py-4 text-gray-900">{payment.type}</td>
                <td className="py-4">
                  <div className="text-gray-900">{payment.datePaid}</div>
                  <div className="text-sm text-gray-500">{payment.time}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const DocumentsContent = () => (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <SlidersHorizontal className="h-5 w-5 text-gray-500" />
          <span className="text-gray-700">Filters</span>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input placeholder="Search documents here.." className="pl-9" />
          </div>
        </div>
        <Button className="rounded-full bg-teal-600 px-6 hover:bg-teal-700">
          Upload Documents
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="pb-4 text-left text-lg font-bold">Documents</th>
              <th className="pb-4 text-left text-lg font-bold">File</th>
              <th className="pb-4 text-left text-lg font-bold">
                Date Added / Modified
              </th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="py-4 text-gray-900">{doc.name}</td>
                <td className="py-4 text-gray-900">{doc.file}</td>
                <td className="py-4">
                  <div className="text-gray-900">{doc.dateAdded}</div>
                  <div className="text-sm text-gray-500">{doc.timeAdded}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const MaintenanceContent = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <SlidersHorizontal className="h-5 w-5 text-gray-500" />
        <span className="text-gray-700">Filters</span>
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input placeholder="Search Maintenances here.." className="pl-9" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="pb-4 text-left text-lg font-bold">Maintenances</th>
              <th className="pb-4 text-left text-lg font-bold">Service Date</th>
            </tr>
          </thead>
          <tbody>
            {maintenances.map((maintenance, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="py-4 text-gray-900">
                  {maintenance.description}
                </td>
                <td className="py-4">
                  <div className="text-gray-900">{maintenance.serviceDate}</div>
                  <div className="text-sm text-gray-500">
                    {maintenance.serviceTime}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const InsuranceContent = () => (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <SlidersHorizontal className="h-5 w-5 text-gray-500" />
          <span className="text-gray-700">Filters</span>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input placeholder="Search Insurances here.." className="pl-9" />
          </div>
        </div>
        <Button className="rounded-full bg-teal-600 px-6 hover:bg-teal-700">
          Upload Insurance Documents
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="pb-4 text-left text-lg font-bold">Insurance</th>
              <th className="pb-4 text-left text-lg font-bold">File</th>
              <th className="pb-4 text-left text-lg font-bold">
                Date Added / Modified
              </th>
            </tr>
          </thead>
          <tbody>
            {insurances.map((insurance, index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="py-4 text-gray-900">{insurance.name}</td>
                <td className="py-4 text-gray-900">{insurance.file}</td>
                <td className="py-4">
                  <div className="text-gray-900">{insurance.dateAdded}</div>
                  <div className="text-sm text-gray-500">
                    {insurance.timeAdded}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "todo":
        return <TodoContent />;
      case "payments":
        return <PaymentsContent />;
      case "documents":
        return <DocumentsContent />;
      case "maintenance":
        return <MaintenanceContent />;
      case "insurance":
        return <InsuranceContent />;
      default:
        return <TodoContent />;
    }
  };

  return (
    <div className="w-full max-w-6xl p-4 md:p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-teal-700">Active Tenants</h1>
        <Tabs defaultValue="all" className="w-full sm:w-auto">
          <TabsList className="grid w-full grid-cols-4 rounded-full bg-gray-200 p-1 sm:w-[400px]">
            <TabsTrigger
              value="all"
              className="rounded-full data-[state=active]:bg-white"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="active"
              className="rounded-full data-[state=active]:bg-white"
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="rounded-full data-[state=active]:bg-white"
            >
              Past
            </TabsTrigger>
            <TabsTrigger
              value="archived"
              className="rounded-full data-[state=active]:bg-white"
            >
              Archived
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="mb-6 space-y-4">
        <div>
          <h2 className="text-lg font-medium underline">Oasis</h2>
          <div className="mt-2 space-y-2">
            <div
              className="flex cursor-pointer items-center gap-2"
              onClick={() =>
                setExpandedAddress(expandedAddress === "8888" ? "" : "8888")
              }
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20at%2016.53.48-mlglfb4p9JhkEIwRrjim1bBkpIwcdd.png"
                alt="Property"
                className="h-8 w-8"
              />
              <span>8888 Avenue Street NW</span>
              {expandedAddress === "8888" ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>
            <div
              className="flex cursor-pointer items-center gap-2"
              onClick={() =>
                setExpandedAddress(expandedAddress === "1234" ? "" : "1234")
              }
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20at%2016.53.48-mlglfb4p9JhkEIwRrjim1bBkpIwcdd.png"
                alt="Property"
                className="h-8 w-8"
              />
              <span>1234 Avenue Street NW</span>
              {expandedAddress === "1234" ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium">Tenants</h2>
          <div className="mt-2 flex gap-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <img src="/placeholder.svg?height=40&width=40" alt="Wilson L" />
              </Avatar>
              <span>Wilson L</span>
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Liliana T"
                />
              </Avatar>
              <span>Liliana T</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8 overflow-x-auto">
            <button
              className={`border-b-2 px-1 pb-4 text-sm font-medium transition-colors hover:text-teal-600 ${
                activeTab === "todo"
                  ? "border-teal-600 text-teal-600"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab("todo")}
            >
              To Do
            </button>
            <button
              className={`border-b-2 px-1 pb-4 text-sm font-medium transition-colors hover:text-teal-600 ${
                activeTab === "payments"
                  ? "border-teal-600 text-teal-600"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab("payments")}
            >
              Payments
            </button>
            <button
              className={`border-b-2 px-1 pb-4 text-sm font-medium transition-colors hover:text-teal-600 ${
                activeTab === "documents"
                  ? "border-teal-600 text-teal-600"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab("documents")}
            >
              Documents
            </button>
            <button
              className={`border-b-2 px-1 pb-4 text-sm font-medium transition-colors hover:text-teal-600 ${
                activeTab === "maintenance"
                  ? "border-teal-600 text-teal-600"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab("maintenance")}
            >
              Maintenance (2)
            </button>
            <button
              className={`border-b-2 px-1 pb-4 text-sm font-medium transition-colors hover:text-teal-600 ${
                activeTab === "insurance"
                  ? "border-teal-600 text-teal-600"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab("insurance")}
            >
              Insurance
            </button>
          </div>
        </div>

        <div className="py-4">{renderContent()}</div>
      </div>
    </div>
  );
};
