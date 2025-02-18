import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import { Card } from "../../../../../components/ui/card";
import { Avatar } from "../../../../../components/ui/avatar";
import { HomeIcon } from "lucide-react";

interface ServiceRequestProps {
  status: "Open" | "In Progress" | "Closed";
  title: string;
  location: string;
  requesterName: string;
  description: string;
}

export const MaintainenceRequestItem = ({
  status = "Open",
  title = "Leaking Toilet",
  location = "Edmonton, AB T1A 2J3",
  requesterName = "Liliana",
  description = "A bit of water is leaking from the right side of the toilet. Happening maybe every 2 flushes and worried water may cause damage in the bathroom.",
}: ServiceRequestProps) => {
  return (
    <Card className="max-w-3xl p-6">
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <div className="h-24 w-24 rounded-lg bg-teal-50 p-4 dark:bg-teal-950">
            <HomeIcon className="h-full w-full text-teal-600 dark:text-teal-400" />
          </div>
        </div>

        <div className="flex-grow space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="text-sm font-medium text-teal-600 dark:text-teal-400">
                {status}
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Requested by:
            </h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <div className="h-full w-full rounded-full bg-teal-100 dark:bg-teal-900" />
              </Avatar>
              <span className="text-sm font-medium">{requesterName}</span>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Description:
            </h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          <div className="flex items-center justify-between pt-4">
            <span className="text-sm font-medium">Send this request to:</span>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select one..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plumber">Plumber</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="manager">Property Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </Card>
  );
};
