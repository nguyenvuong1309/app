import { Button } from "../../../../../components/ui/button";
import { Avatar } from "../../../../../components/ui/avatar";
import {
  Calendar,
  Star,
  HelpCircle,
  Briefcase,
  PawPrint,
  Users,
  Cigarette,
  FileText,
} from "lucide-react";

interface Reference {
  name: string;
  avatar: string;
}

interface ScreeningReport {
  name: string;
  avatar: string;
  isStarred: boolean;
  appliedTo: string;
  dateRequested: string;
  creditScore: string;
  rating: string;
  cautionPoints: string[];
  moveInDate: string;
  pets: number;
  totalOccupants: number;
  smokers: string;
  references: Reference[];
}

export const ApplicantsDetail = () => {
  const report: ScreeningReport = {
    name: "Wilson",
    avatar: "/placeholder.svg?height=80&width=80",
    isStarred: true,
    appliedTo: "1234 Avenue Street NW",
    dateRequested: "2024/01/11",
    creditScore: "N/A",
    rating: "Proceed with caution",
    cautionPoints: [
      "Income is less than 2 times the rent",
      "There are more occupants than the number of bedrooms",
      "Applicant is a smoker in a non-smoking home",
    ],
    moveInDate: "February 1, 2024",
    pets: 3,
    totalOccupants: 4,
    smokers: "No",
    references: [
      {
        name: "Liliana",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Ryan",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  };

  return (
    <div className=" rounded-lg border border-gray-200 bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-teal-700">
          Applicants - Screening Report
        </h1>
        <Button variant="outline" className="text-gray-500">
          View Credit Report ($35/applicant)
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr,300px]">
        <div>
          {/* Main Applicant Info */}
          <div className="mb-8 flex gap-4">
            <Avatar className="h-20 w-20">
              <img
                src={report.avatar || "/placeholder.svg"}
                alt={report.name}
                className="rounded-full"
              />
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">{report.name}</h2>
                {report.isStarred && (
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                )}
              </div>
              <div className="mt-2 space-y-1">
                <div className="text-sm text-gray-600">
                  Applied to:{" "}
                  <span className="text-teal-600">{report.appliedTo}</span>
                </div>
                <div className="text-sm text-gray-600">
                  Date Requested: {report.dateRequested}
                </div>
              </div>
            </div>
          </div>

          {/* Credit Score & Rating */}
          <div className="mb-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">Credit Score:</span>
              <span className="text-lg">{report.creditScore}</span>
              <HelpCircle className="h-5 w-5 text-gray-400" />
            </div>
            <div>
              <span className="text-lg font-medium">LuxOasis Rating:</span>
              <span className="ml-2 rounded-full bg-yellow-100 px-4 py-1 text-yellow-700">
                {report.rating}
              </span>
            </div>
            <ul className="ml-5 list-disc space-y-2 text-gray-700">
              {report.cautionPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {/* References */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-medium">
              <Users className="h-5 w-5" />
              <span>Landlord Reference</span>
            </div>
            <div className="space-y-4">
              {report.references.map((reference, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <img
                      src={reference.avatar || "/placeholder.svg"}
                      alt={reference.name}
                      className="rounded-full"
                    />
                  </Avatar>
                  <span className="text-lg font-medium">{reference.name}</span>
                  <div className="ml-auto flex items-center gap-2">
                    <Button variant="outline" className="text-gray-500">
                      Send private message
                    </Button>
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      Call {reference.name}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Calendar className="h-6 w-6 text-teal-600" />
            <div>
              <div className="font-medium">Desired Move-In Date</div>
              <div className="text-gray-600">{report.moveInDate}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <PawPrint className="h-6 w-6 text-teal-600" />
            <div>
              <div className="font-medium">Pets</div>
              <div className="text-gray-600">{report.pets}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users className="h-6 w-6 text-teal-600" />
            <div>
              <div className="font-medium">Total Occupants</div>
              <div className="text-gray-600">{report.totalOccupants}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Cigarette className="h-6 w-6 text-teal-600" />
            <div>
              <div className="font-medium">Smokers</div>
              <div className="text-gray-600">{report.smokers}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FileText className="h-6 w-6 text-teal-600" />
            <div>
              <div className="font-medium">Documents</div>
            </div>
          </div>
        </div>
      </div>

      {/* Employment Section */}
      <div className="mt-6 flex items-center gap-2 text-lg font-medium text-gray-600">
        <Briefcase className="h-5 w-5" />
        <span>Employment</span>
      </div>
    </div>
  );
};
