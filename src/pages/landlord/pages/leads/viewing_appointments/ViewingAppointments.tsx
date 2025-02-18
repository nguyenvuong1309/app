"use client";

import { useState } from "react";
import {
  Heart,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  Copy,
  Pencil,
  StickyNote,
  CopyIcon as Clone,
  Trash,
  Menu,
} from "lucide-react";
import { Button } from "../../../../../components/ui/button";
import { Switch } from "../../../../../components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../../components/ui/dropdown-menu";
import { ViewingAppointmentDetail } from "./components/ViewingAppointmentDetail";

interface Appointment {
  id: string;
  address: string;
  duration: number;
  type: "Private View" | "Open House";
}

export const ViewingAppointments = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const appointments: Appointment[] = [
    {
      id: "1",
      address: "1123 Plum Lane SW Edmonton",
      duration: 15,
      type: "Private View",
    },
    {
      id: "2",
      address: "1125 Plum Lane SW Edmonton",
      duration: 240,
      type: "Open House",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === appointments.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? appointments.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Viewing Appointments</h1>
        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-900"
          >
            <Heart className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-900"
          >
            <Bell className="w-6 h-6" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="rounded-full p-1 border-2 border-teal-600"
              >
                <Menu className="w-6 h-6" />
                <div className="w-8 h-8 rounded-full bg-gray-200 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="bg-teal-600 hover:bg-teal-700">
            + List New Oasis
          </Button>
        </div>
      </div>

      {/* Appointments Carousel */}
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-teal-600 text-white hover:bg-teal-700 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <div className="overflow-hidden mx-12">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {appointments.map((appointment, index) => (
              <div key={appointment.id} className="w-full flex-shrink-0 px-4">
                <div className="border rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        {appointment.address}
                      </h2>
                      <p className="text-gray-500">
                        {appointment.duration} minutes, {appointment.type}
                      </p>
                    </div>
                    <DropdownMenu
                      open={activeDropdown === appointment.id}
                      onOpenChange={(open) =>
                        setActiveDropdown(open ? appointment.id : null)
                      }
                    >
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-teal-600"
                        >
                          <Settings className="w-6 h-6" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem>
                          <Pencil className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <StickyNote className="w-4 h-4 mr-2" />
                          Add Internal Note
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Clone className="w-4 h-4 mr-2" />
                          Clone
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                        <div className="flex items-center justify-between px-2 py-2 border-t">
                          <span className="text-sm">On/Off</span>
                          <Switch />
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  {/* <Button
                    variant="link"
                    className="text-teal-600 hover:text-teal-700 p-0 h-auto"
                  >
                    View booking page
                  </Button> */}
                  <ViewingAppointmentDetail />
                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <Button
                      variant="ghost"
                      className="text-teal-600 hover:text-teal-700"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy link
                    </Button>
                    {index === 1 && (
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        Share
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-teal-600 text-white hover:bg-teal-700 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};
