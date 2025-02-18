"use client";

import { Bell, Heart, Menu } from "lucide-react";
import { Button } from "../../../../../../components/ui/button";
import { Input } from "../../../../../../components/ui/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../../../components/ui/radio-group";
import { Label } from "../../../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../components/ui/select";

export const SetupPayment = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Financials</h1>
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-rose-400" />
          <Bell className="h-6 w-6 text-gray-600" />
          <div className="flex items-center gap-2 bg-white rounded-full border border-[#4D8B97] px-3 py-1.5">
            <Menu className="h-5 w-5" />
            <div className="h-8 w-8 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <h2 className="text-[#4D8B97] text-2xl">Payment</h2>
          <h3 className="text-2xl">Invite Tenants to Set up Payments</h3>
        </div>

        <div className="flex gap-8">
          {/* Tenant List */}
          <div className="w-48 space-y-4">
            {[
              { name: "Wilson", hasStart: true },
              { name: "Liliana", hasStart: true },
              { name: "Michelle", hasStart: false },
              { name: "Bob", hasStart: false },
              { name: "Ryan", hasStart: false },
              { name: "Michelle", hasStart: false },
              { name: "Bob", hasStart: false },
            ].map((tenant, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${tenant.name}`}
                      alt={tenant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-medium">{tenant.name}</span>
                  {tenant.hasStart && (
                    <svg
                      className="w-5 h-5 text-[#4D8B97]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <div className="flex-1 space-y-8">
            {/* Tenant Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-[#4D8B97]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path d="M9 22V12h6v10" />
                </svg>
                <h4 className="text-xl">Tenant Info</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Tenant's First Name" />
                <Input placeholder="Tenant's Last Name" />
              </div>

              <div className="space-y-2">
                <p className="font-medium">Send invite by:</p>
                <RadioGroup defaultValue="both" className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both">Email & Text</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email" />
                    <Label htmlFor="email">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="text" id="text" />
                    <Label htmlFor="text">Text</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Tenant's Email" />
                <Input placeholder="Tenant's Phone Number" />
              </div>
            </div>

            {/* Rental Oasis */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg
                  className="w-8 h-8 text-[#4D8B97]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <h4 className="text-xl">Rental Oasis</h4>
              </div>
              <div className="space-y-2">
                <p>Oasis tenant resides in:</p>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Oasis Address" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="address1">123 Main St</SelectItem>
                    <SelectItem value="address2">456 Oak Ave</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* E-Transfer Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-[#4D8B97]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <h4 className="text-xl">E-Transfer Info</h4>
              </div>
              <p>E-transfer email</p>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="E-transfer Email" />
                <Input placeholder="Re-enter E-transfer Email" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p>Amount Due:</p>
                  <Input placeholder="Enter amount due..." />
                </div>
                <div className="space-y-2">
                  <p>Add a memo:</p>
                  <Input placeholder="Enter a memo..." />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="bg-[#4D8B97] hover:bg-[#4D8B97]/90 text-white px-8">
                Invite
              </Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
