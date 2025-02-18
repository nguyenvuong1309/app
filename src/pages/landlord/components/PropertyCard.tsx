import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { IProperty } from "../../landlord/types/Property.type";

interface PropertyCardProps {
  property: IProperty;
  onEdit: (id: string) => void;
}

export function PropertyCard({ property, onEdit }: PropertyCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="overflow-hidden border rounded-lg">
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="relative w-full md:w-64 md:h-48">
          {/* <Image
            src={property.image}
            alt={property.address}
            fill
            className="object-cover rounded-md"
          /> */}
          <img
            src={
              "https://1.bp.blogspot.com/-5XN9Dc454Zg/X-HhukE0jMI/AAAAAAABsZI/4SWgLzjXovgAf1D2jyRMSBssYEuBEOVyQCLcBGAsYHQ/s1600/your-diy-guide-to-pretty-kitchen.jpg"
            }
            alt={property.id.toString()}
            className="object-cover rounded-md md:h-48"
          />
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold">{property?.address}</h2>
              {/* <p className="text-gray-600">
                {property?.city || "_city_"},{" "}
                {property?.province || "_province_"}{" "}
                {property?.postalCode || "_postalCode_"}
              </p> */}
            </div>
            <Button
              variant="outline"
              className="text-teal-600 border-teal-600"
              onClick={() => onEdit(property.id.toString())}
            >
              Edit
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="font-medium mb-1">Beds/Bath</h3>
              <p>
                {property.bedrooms} Beds | {property.bathrooms} Baths
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Availability</h3>
              <p>{property.availableDate}</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Rent</h3>
              <p className="font-semibold">
                {formatCurrency(Number(property.monthlyRent))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
