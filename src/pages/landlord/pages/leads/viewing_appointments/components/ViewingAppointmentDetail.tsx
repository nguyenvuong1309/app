"use client";

import { useState } from "react";
import { Button } from "../../../../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../../components/ui/dialog";
import { ScrollArea } from "../../../../../../components/ui/scroll-area";

interface ApplicationDetails {
  houseId: string;
  houseDescription: string;
  scheduledDate: string;
  appointmentTime: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  employmentStatus: string;
  pets: string;
  occupants: string;
  creditScore: string;
  income: string;
  smoker: string;
  moveReason: string;
  moveInDate: string;
  stayDuration: string;
}

export const ViewingAppointmentDetail = () => {
  const [open, setOpen] = useState(false);

  const application: ApplicationDetails = {
    houseId: "22138",
    houseDescription:
      "Beautiful air-conditioned one-bedroom basement suite @ Chappelle",
    scheduledDate: "2024-03-18",
    appointmentTime: "09:00 am",
    firstName: "Victoria",
    lastName: "Mercredi",
    email: "victoriamercredi@gmail.com",
    phoneNumber: "8259668938",
    employmentStatus: "Full-time employed",
    pets: "A dog",
    occupants: "2",
    creditScore: "Good",
    income: "155000 yearly",
    smoker: "No",
    moveReason: "Change and starting a family and just got engaged",
    moveInDate: "Change and starting a family and just got engaged",
    stayDuration: "Forever",
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* <Button
          variant="default"
          className="rounded-full bg-teal-600 px-6 hover:bg-teal-700"
        >
          View Application
        </Button> */}
        <Button
          variant="link"
          className="text-teal-600 hover:text-teal-700 p-0 h-auto"
        >
          View booking page
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] w-[90vw] max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Rental Application
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-8rem)] pr-4">
          <div className="space-y-6 p-6">
            {/* Main Info Section */}
            <div>
              <h3 className="mb-4 text-sm font-medium text-gray-900">
                Main Info
              </h3>
            </div>

            {/* House Info Section */}
            <div>
              <h3 className="mb-4 text-sm font-medium text-gray-900">
                House Info
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    House ID
                  </label>
                  <input
                    type="text"
                    value={application.houseId}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    House
                  </label>
                  <input
                    type="text"
                    value={application.houseDescription}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>
              </div>
            </div>

            {/* Appointment Information Section */}
            <div>
              <h3 className="mb-4 text-sm font-medium text-gray-900">
                Appointment Information
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Scheduled date
                  </label>
                  <input
                    type="text"
                    value={application.scheduledDate}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Appointment time
                  </label>
                  <input
                    type="text"
                    value={application.appointmentTime}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={application.firstName}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={application.lastName}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={application.email}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div>
              <h3 className="mb-4 text-sm font-medium text-gray-900">
                Additional Information
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={application.phoneNumber}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Employment status
                  </label>
                  <input
                    type="text"
                    value={application.employmentStatus}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Do you have any pets?
                  </label>
                  <input
                    type="text"
                    value={application.pets}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    How many people will be living in the property?
                  </label>
                  <input
                    type="text"
                    value={application.occupants}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Roughly what is your credit score?
                  </label>
                  <input
                    type="text"
                    value={application.creditScore}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    What is your monthly household income (before tax)?
                  </label>
                  <input
                    type="text"
                    value={application.income}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Are you or any occupants of the home a smoker?
                  </label>
                  <input
                    type="text"
                    value={application.smoker}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Why would you like to move out of your current residence?
                  </label>
                  <input
                    type="text"
                    value={application.moveReason}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    When are you looking to move in?
                  </label>
                  <input
                    type="text"
                    value={application.moveInDate}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    How long would you like to stay?
                  </label>
                  <input
                    type="text"
                    value={application.stayDuration}
                    readOnly
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="rounded-full bg-teal-600 px-8 hover:bg-teal-700">
                Approve
              </Button>
              <Button
                variant="secondary"
                className="rounded-full bg-rose-400 px-8 text-white hover:bg-rose-500"
              >
                Decline
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
