"use client";

import type React from "react";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../../components/ui/select";
import { Input } from "../../../../../../../components/ui/input";

interface PropertyFormData {
  firstName: string;
  lastName: string;
  contactMethod: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
}

export default function PropertyForm() {
  const [formData, setFormData] = useState<PropertyFormData>({
    firstName: "",
    lastName: "",
    contactMethod: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    country: "",
    postalCode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactMethodChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      contactMethod: value,
    }));
  };

  return (
    <form className="max-w-3xl mx-auto p-6">
      <div className="space-y-6">
        {/* Property Owner Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Property Owner</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4">
              <Input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border-gray-300"
              />
            </div>
            <div className="md:col-span-4">
              <Input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border-gray-300"
              />
            </div>
            <div className="md:col-span-4">
              <Select
                value={formData.contactMethod}
                onValueChange={handleContactMethodChange}
              >
                <SelectTrigger className="w-full border-gray-300">
                  <SelectValue placeholder="Contact Info" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="mail">Mail</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Property Location Section */}
        <div>
          <h2 className="text-xl font-medium mb-4">
            Where is your property located?
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="address1"
                placeholder="Property Address / PO Box"
                value={formData.address1}
                onChange={handleInputChange}
                className="w-full border-gray-300"
              />
              <Input
                name="address2"
                placeholder="Property Address Line 2"
                value={formData.address2}
                onChange={handleInputChange}
                className="w-full border-gray-300"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4">
                <Input
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border-gray-300"
                />
              </div>
              <div className="md:col-span-4">
                <Input
                  name="province"
                  placeholder="Province"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="w-full border-gray-300"
                />
              </div>
              <div className="md:col-span-4">
                <Input
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full border-gray-300"
                />
              </div>
            </div>

            <div className="md:w-1/3">
              <Input
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
