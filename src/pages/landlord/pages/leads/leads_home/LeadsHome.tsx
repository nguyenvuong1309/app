"use client";

import { useState } from "react";
import { Avatar } from "../../../../../components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "../../../../../components/ui/tabs";
import { Star, Trash2 } from "lucide-react";
import PATH from "../../../../../config/path";
import { useNavigate } from "react-router-dom";

interface Lead {
  id: string;
  name: string;
  avatar: string;
  isStarred: boolean;
  isPersonal: boolean;
  isGroup: boolean;
  interestedIn: string;
  viewingAppointment?: string;
  followUpEmail?: string;
  notes?: string;
}

export const Leads: Lead[] = [
  {
    id: "1",
    name: "Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    isStarred: true,
    isPersonal: true,
    isGroup: false,
    interestedIn: "1234 Ave Street NW",
    notes: "",
  },
  {
    id: "2",
    name: "Liliana",
    avatar: "/placeholder.svg?height=40&width=40",
    isStarred: true,
    isPersonal: false,
    isGroup: true,
    interestedIn: "1234 Ave Street NW",
    viewingAppointment: "Jan 11, 2024",
    followUpEmail: "Jan 18, 2024",
    notes: "Has 3 dogs\nStay for 3 years...",
  },
  {
    id: "3",
    name: "Michelle",
    avatar: "/placeholder.svg?height=40&width=40",
    isStarred: false,
    isPersonal: true,
    isGroup: false,
    interestedIn: "1234 Ave Street NW",
    viewingAppointment: "Jan 11, 2024",
    followUpEmail: "Jan 18, 2024",
    notes: "Has 3 dogs\nStay for 3 years...",
  },
  {
    id: "4",
    name: "Bob",
    avatar: "/placeholder.svg?height=40&width=40",
    isStarred: false,
    isPersonal: false,
    isGroup: true,
    interestedIn: "1234 Ave Street NW",
    viewingAppointment: "Jan 11, 2024",
    followUpEmail: "Jan 18, 2024",
    notes: "Has 3 dogs\nStay for 3 years...",
  },
  {
    id: "5",
    name: "Ryan",
    avatar: "/placeholder.svg?height=40&width=40",
    isStarred: false,
    isPersonal: true,
    isGroup: false,
    interestedIn: "1234 Ave Street NW",
    viewingAppointment: "Jan 11, 2024",
    followUpEmail: "Jan 18, 2024",
    notes: "Has 3 dogs\nStay for 3 years...",
  },
  {
    id: "6",
    name: "Michelle",
    avatar: "/placeholder.svg?height=40&width=40",
    isStarred: false,
    isPersonal: false,
    isGroup: true,
    interestedIn: "1234 Ave Street NW",
    viewingAppointment: "Jan 11, 2024",
    followUpEmail: "Jan 18, 2024",
    notes: "Has 3 dogs\nStay for 3 years...",
  },
];

type FilterType = "all" | "starred" | "personal" | "group";

export const LeadsHome = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredLeads = Leads.filter((lead) => {
    switch (activeFilter) {
      case "starred":
        return lead.isStarred;
      case "personal":
        return lead.isPersonal;
      case "group":
        return lead.isGroup;
      default:
        return true;
    }
  });

  const onInviteLeads = () => {
    navigate(PATH.LANDLORD_LEADS_INVITE);
  };

  const onViewingAppointment = () => {
    navigate(PATH.LANDLORD_LEADS_VIEWING_APPOINTMENTS);
  };

  return (
    <div className="w-full max-w-5xl p-6">
      <h1 className="mb-6 text-2xl font-semibold text-teal-700">Leads</h1>

      <Tabs
        value={activeFilter}
        onValueChange={(value) => setActiveFilter(value as FilterType)}
        className="mb-6"
      >
        <TabsList className="grid w-[400px] grid-cols-4 rounded-full bg-gray-100 p-1">
          <TabsTrigger
            value="all"
            className="rounded-full data-[state=active]:bg-white"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="starred"
            className="rounded-full data-[state=active]:bg-white"
          >
            Starred
          </TabsTrigger>
          <TabsTrigger
            value="personal"
            className="rounded-full data-[state=active]:bg-white"
          >
            Personal
          </TabsTrigger>
          <TabsTrigger
            value="group"
            className="rounded-full data-[state=active]:bg-white"
          >
            Group
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-4">
        {filteredLeads.map((lead) => (
          <div
            key={lead.id}
            className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4"
          >
            <Avatar className="h-12 w-12">
              <img src={lead.avatar || "/placeholder.svg"} alt={lead.name} />
            </Avatar>

            <div className="flex min-w-[140px] items-center gap-2">
              <span className="text-lg font-medium">{lead.name}</span>
              {lead.isStarred && (
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              )}
            </div>

            <div className="flex flex-1 flex-wrap items-center gap-3">
              <button
                className="rounded-lg border border-gray-200 px-3 py-2"
                onClick={onInviteLeads}
              >
                <div className="text-xs text-gray-500">Interested in:</div>
                <div className="text-sm text-gray-700">{lead.interestedIn}</div>
              </button>
              {/* <div className="rounded-lg border border-gray-200 px-3 py-2">
                <div className="text-xs text-gray-500">Interested in:</div>
                <div className="text-sm text-gray-700">{lead.interestedIn}</div>
              </div> */}

              {lead.viewingAppointment ? (
                <button
                  className="rounded-lg border border-gray-200 px-3 py-2"
                  onClick={onViewingAppointment}
                >
                  <div className="text-xs text-gray-500">
                    Viewing Appointment:
                  </div>
                  <div className="text-sm text-gray-700">
                    {lead.viewingAppointment}
                  </div>
                </button>
              ) : (
                <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-600">
                  Book a viewing appointment
                </div>
              )}

              {lead.followUpEmail && (
                <div className="rounded-lg border border-gray-200 px-3 py-2">
                  <div className="text-xs text-gray-500">
                    Follow up email set on:
                  </div>
                  <div className="text-sm text-gray-700">
                    {lead.followUpEmail}
                  </div>
                </div>
              )}

              {lead.notes && (
                <div className="rounded-lg border border-gray-200 px-3 py-2">
                  <div className="text-xs text-gray-500">Add notes</div>
                  <div className="text-sm text-gray-700">{lead.notes}</div>
                </div>
              )}
            </div>

            <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
