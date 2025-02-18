"use client";

import { useState } from "react";
import { Star, Home, MapPin } from "lucide-react";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";

interface Lead {
  id: string;
  name: string;
  avatar: string;
  starred?: boolean;
}

export const InviteLeads = () => {
  const [inviteMethod, setInviteMethod] = useState("emailAndText");

  const leads: Lead[] = [
    {
      id: "1",
      name: "Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      starred: true,
    },
    {
      id: "2",
      name: "Liliana",
      avatar: "/placeholder.svg?height=40&width=40",
      starred: true,
    },
    {
      id: "3",
      name: "Michelle",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    { id: "4", name: "Bob", avatar: "/placeholder.svg?height=40&width=40" },
    { id: "5", name: "Ryan", avatar: "/placeholder.svg?height=40&width=40" },
    {
      id: "6",
      name: "Michelle",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    { id: "7", name: "Bob", avatar: "/placeholder.svg?height=40&width=40" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Leads List */}
        <div className="md:col-span-4">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Leads</h2>
          <div className="space-y-3">
            {leads.map((lead) => (
              <div key={lead.id} className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={lead.avatar || "/placeholder.svg"}
                    alt={lead.name}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <span className="font-medium">{lead.name}</span>
                {lead.starred && (
                  <Star className="w-5 h-5 text-teal-600 fill-teal-600" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Lead Info Form */}
        <div className="md:col-span-8 space-y-6">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              Invite Leads to Book Viewing appointment
            </h1>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 rounded-full bg-teal-100">
                <Home className="w-6 h-6 text-teal-600" />
              </div>
              <h2 className="text-xl font-medium">Lead Info</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Input
                placeholder="Lead's First Name"
                className="border-gray-300"
              />
              <Input
                placeholder="Lead's Last Name"
                className="border-gray-300"
              />
            </div>

            <div className="space-y-4">
              <Label>Send invite by:</Label>
              <RadioGroup
                defaultValue="emailAndText"
                onValueChange={setInviteMethod}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="emailAndText" id="emailAndText" />
                  <Label htmlFor="emailAndText">Email & Text</Label>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Input
                placeholder="Lead's Email"
                type="email"
                className="border-gray-300"
              />
              <Input
                placeholder="Lead's Phone Number"
                type="tel"
                className="border-gray-300"
              />
            </div>
          </div>

          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 rounded-full bg-teal-100">
                <div className="relative">
                  <Home className="w-6 h-6 text-teal-600" />
                  <MapPin className="w-4 h-4 text-teal-600 absolute -bottom-1 -right-1" />
                </div>
              </div>
              <h2 className="text-xl font-medium">Rental Oasis</h2>
            </div>

            <div className="space-y-2">
              <Label>Oasis applying to:</Label>
              <Select>
                <SelectTrigger className="w-full border-gray-300">
                  <SelectValue placeholder="Oasis Address" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="address1">123 Oasis Street</SelectItem>
                  <SelectItem value="address2">456 Paradise Avenue</SelectItem>
                  <SelectItem value="address3">789 Eden Road</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
