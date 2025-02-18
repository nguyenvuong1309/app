"use client";

import { Avatar } from "../../../../../components/ui/avatar";
import { Button } from "../../../../../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../../../../components/ui/tabs";
import { Star } from "lucide-react";
import {
  ScrollArea,
  ScrollBar,
} from "../../../../../components/ui/scroll-area";
import PATH from "../../../../../config/path";
import { useNavigate } from "react-router-dom";
interface Applicant {
  id: string;
  name: string;
  avatar: string;
  isStarred: boolean;
  appliedTo: string;
  dateRequested: string;
}

const applicants: Applicant[] = [
  {
    id: "1",
    name: "Wilson",
    avatar: "/placeholder.svg?height=48&width=48",
    isStarred: true,
    appliedTo: "1234 Avenue Str NW",
    dateRequested: "2024/01/11",
  },
  {
    id: "2",
    name: "Liliana",
    avatar: "/placeholder.svg?height=48&width=48",
    isStarred: true,
    appliedTo: "1234 Avenue Str NW",
    dateRequested: "2024/01/11",
  },
  {
    id: "3",
    name: "Michelle",
    avatar: "/placeholder.svg?height=48&width=48",
    isStarred: false,
    appliedTo: "1234 Avenue Str NW",
    dateRequested: "2024/01/11",
  },
  {
    id: "4",
    name: "Bob",
    avatar: "/placeholder.svg?height=48&width=48",
    isStarred: false,
    appliedTo: "1234 Avenue Str NW",
    dateRequested: "2024/01/11",
  },
  {
    id: "5",
    name: "Ryan",
    avatar: "/placeholder.svg?height=48&width=48",
    isStarred: false,
    appliedTo: "1234 Avenue Str NW",
    dateRequested: "2024/01/11",
  },
  {
    id: "6",
    name: "Michelle",
    avatar: "/placeholder.svg?height=48&width=48",
    isStarred: false,
    appliedTo: "1234 Avenue Str NW",
    dateRequested: "2024/01/11",
  },
];

export const ApplicantsHome = () => {
  const navigate = useNavigate();

  const onMoveToApplicantsDetail = (id: string) => () => {
    navigate(PATH.LANDLORD_APPLICANTS + "/" + id);
  };

  return (
    <div className="w-full max-w-5xl p-4 md:p-6">
      <h1 className="mb-4 text-xl font-semibold text-teal-700 md:mb-6 md:text-2xl">
        Applicants
      </h1>

      <div className="mb-6 md:mb-8">
        <ScrollArea className="w-full">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="inline-flex w-full justify-start rounded-full bg-gray-200 p-1 sm:w-auto">
              <TabsTrigger
                value="all"
                className="min-w-24 rounded-full px-4 py-2 text-sm data-[state=active]:bg-white sm:px-8"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="starred"
                className="min-w-24 rounded-full px-4 py-2 text-sm data-[state=active]:bg-white sm:px-8"
              >
                Starred
              </TabsTrigger>
              <TabsTrigger
                value="personal"
                className="min-w-24 rounded-full px-4 py-2 text-sm data-[state=active]:bg-white sm:px-8"
              >
                Personal
              </TabsTrigger>
              <TabsTrigger
                value="group"
                className="min-w-24 rounded-full px-4 py-2 text-sm data-[state=active]:bg-white sm:px-8"
              >
                Group
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className="space-y-4">
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <img
                  src={applicant.avatar || "/placeholder.svg"}
                  alt={applicant.name}
                />
              </Avatar>

              <div className="flex items-center gap-2">
                <span className="text-base font-medium sm:text-lg">
                  {applicant.name}
                </span>
                {applicant.isStarred && (
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-sm sm:text-base">
                Applied to:{" "}
                <span className="text-teal-600">{applicant.appliedTo}</span>
              </div>
              <div className="text-xs text-gray-500 sm:text-sm">
                Date Requested: {applicant.dateRequested}
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:ml-auto sm:flex-row sm:items-center sm:gap-3">
              <Button
                variant="outline"
                className="h-9 justify-center rounded-full px-4 text-xs text-gray-500 sm:h-10 sm:px-6 sm:text-sm"
              >
                View Credit Report ($35/applicant)
              </Button>
              <Button className="h-9 justify-center rounded-full bg-teal-600 px-4 text-xs hover:bg-teal-700 sm:h-10 sm:px-6 sm:text-sm">
                View Application
              </Button>
              <Button
                variant="outline"
                className="h-9 justify-center rounded-full px-4 text-xs text-gray-500 sm:h-10 sm:px-6 sm:text-sm"
                onClick={onMoveToApplicantsDetail(applicant.id)}
              >
                Move in Renter
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
