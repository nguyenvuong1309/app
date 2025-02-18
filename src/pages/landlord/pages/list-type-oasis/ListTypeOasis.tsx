import { useState, useEffect } from "react";
import {
  Home,
  Building2,
  Building,
  BuildingIcon as Buildings,
  Warehouse,
  HomeIcon,
  Car,
  Building2Icon,
  Map,
  TreePine,
  Rocket,
  LayoutTemplateIcon as LoftIcon,
} from "lucide-react";
import PATH from "../../../../config/path";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { CreateOasisType } from "../create-new-oasis/schema";

type HousingOption = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
};

const housingOptions: HousingOption[] = [
  {
    id: "house",
    label: "House",
    icon: Home,
    link: PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE,
  },
  {
    id: "apartment",
    label: "Apartment",
    icon: Building2,
    link: PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE,
  },
  {
    id: "condo",
    label: "Condo",
    icon: Building,
    link: PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE,
  },
  {
    id: "duplex",
    label: "Duplex",
    icon: Buildings,
    link: PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE,
  },
  {
    id: "basement",
    label: "Basement",
    icon: Warehouse,
    link: PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE,
  },
  {
    id: "townhouse",
    label: "Townhouse",
    icon: HomeIcon,
    link: PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE,
  },
  {
    id: "camper",
    label: "Camper/RV",
    icon: Car,
    link: PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE,
  },
  {
    id: "office",
    label: "Office Space",
    icon: Building2Icon,
    link: PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE,
  },
  {
    id: "acreage",
    label: "Acreage",
    icon: Map,
    link: PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE,
  },
  {
    id: "cabin",
    label: "Cabin",
    icon: TreePine,
    link: PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE,
  },
  {
    id: "spaceship",
    label: "Spaceship",
    icon: Rocket,
    link: PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE,
  },
  {
    id: "loft",
    label: "Loft",
    icon: LoftIcon,
    link: PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE,
  },
];

interface ListTypeOasisProps {
  next?: () => void;
  prev?: () => void;
}

export const ListTypeOasis = ({ next }: ListTypeOasisProps) => {
  const { watch, setValue } = useFormContext<CreateOasisType>();
  const selectedType = watch("type");
  useEffect(() => {
    setSelectedOption(selectedType);
  }, [selectedType]);
  const [selectedOption, setSelectedOption] = useState<string>(selectedType);

  const handleOptionClick = (option: HousingOption) => {
    console.log("🚀 ~ handleOptionClick ~ option.id:", option.id);
    const searchParams = createSearchParams({ type: option.id });
    setValue("type", option.id as any);
    next?.();
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">Wil's Oasis</h1>
        <h2 className="text-2xl mb-4">Add a new oasis</h2>
        <p className="text-lg mb-6">Which would best describe your oasis?</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {housingOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => {
                  handleOptionClick(option);
                }}
                className={`
                aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2
                transition-colors duration-200
                ${
                  selectedOption === option.id
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }
              `}
              >
                <Icon
                  className={`w-8 h-8 ${
                    selectedOption === option.id
                      ? "text-white"
                      : "text-gray-600"
                  }`}
                />
                <span className="text-sm font-medium">{option.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex justify-end mt-6">
          <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium">
            See more
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
