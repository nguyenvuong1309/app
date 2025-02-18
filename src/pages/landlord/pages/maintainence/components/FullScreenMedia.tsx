import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import { Card } from "../../../../../components/ui/card";

interface ServiceRequestProps {
  status?: "Open" | "In Progress" | "Closed";
  title?: string;
  location?: string;
  requesterName?: string;
  requesterImage?: string;
  description?: string;
}

export default function ServiceRequest({
  status = "Open",
  title = "Leaking Toilet",
  location = "Edmonton, AB T1A 2J3",
  requesterName = "Liliana",
  requesterImage = "/placeholder.svg?height=40&width=40",
  description = "A bit of water is leaking from the right side of the toilet. Happening maybe every 2 flushes and worried water may cause damage in the bathroom.",
}: ServiceRequestProps) {
  return (
    <Card className="max-w-3xl overflow-hidden border bg-white">
      <div className="flex gap-4 p-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <div className="h-[120px] w-[120px] rounded-lg bg-white p-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zQXZa8E89g64Ftf7eZ8NYWvPXOfvpn.png"
              alt="Property Logo"
              width={120}
              height={120}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-grow space-y-3">
          {/* Status and Title */}
          <div>
            <div className="text-base font-normal text-rose-500">{status}</div>
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-600">{location}</p>
          </div>

          {/* Requester */}
          <div>
            <p className="mb-1 text-sm font-medium text-gray-900">
              Requested by:
            </p>
            <div className="flex items-center gap-2">
              <img
                src={requesterImage || "/placeholder.svg"}
                alt={requesterName}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-base text-gray-900">{requesterName}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="mb-1 text-sm font-medium text-gray-900">
              Description:
            </p>
            <p className="text-sm text-gray-600">{description}</p>
          </div>

          {/* Send Request Section */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-medium text-gray-900">
              Send this request to:
            </span>
            <Select>
              <SelectTrigger className="w-[180px] border-teal-500 bg-white text-gray-500">
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
}
