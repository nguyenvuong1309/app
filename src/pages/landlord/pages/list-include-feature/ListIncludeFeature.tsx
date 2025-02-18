"use client";

import { useFormContext } from "react-hook-form";
import { CreateOasisType } from "../create-new-oasis/schema";

interface ListIncludeFeatureProps {
  next?: () => void;
  prev?: () => void;
}

const propertyFeatures = [
  { id: "dishwasher", label: "Dishwasher" },
  { id: "oven", label: "Oven" },
  { id: "stove", label: "Stove" },
  { id: "microwave", label: "Microwave" },
  { id: "fridge", label: "Fridge" },
  { id: "freezer", label: "Freezer" },
  { id: "inSuiteLaundry", label: "In-suite Laundry" },
  { id: "alarm", label: "Alarm" },
  { id: "carpetedFloors", label: "Carpeted Floors" },
  { id: "luxuryVinyl", label: "Luxury Vinyl" },
  { id: "securitySystem", label: "Security system" },
  { id: "tileFlooring", label: "Tile flooring" },
  { id: "patio", label: "Patio" },
  { id: "deck", label: "Deck" },
  { id: "privateEntry", label: "Private Entry" },
] as const;

const communityFeatures = [
  { id: "bikePaths", label: "Bike paths" },
  { id: "bus", label: "Bus" },
  { id: "golfCourse", label: "Golf course" },
  { id: "lake", label: "Lake" },
  { id: "playground", label: "Playground" },
  { id: "park", label: "Park" },
  { id: "shoppingCenter", label: "Shopping Center" },
  { id: "sportsComplex", label: "Sports Complex" },
  { id: "tennisCourts", label: "Tennis Courts" },
  { id: "residentAssociation", label: "Resident Association" },
] as const;

export const ListIncludeFeature = ({ next, prev }: ListIncludeFeatureProps) => {
  const {
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useFormContext<CreateOasisType>();

  const features = watch("features");
  const formData = watch();
  const togglePropertyFeature = (featureId: string) => {
    const currentFeatures = features.property || [];
    const newFeatures = currentFeatures.includes(featureId as any)
      ? currentFeatures.filter((f) => f !== featureId)
      : [...currentFeatures, featureId];

    setValue("features.property", newFeatures as any, {
      shouldValidate: true,
    });
  };

  const toggleCommunityFeature = (featureId: string) => {
    const currentFeatures = features.community || [];
    const newFeatures = currentFeatures.includes(featureId as any)
      ? currentFeatures.filter((f) => f !== featureId)
      : [...currentFeatures, featureId];

    setValue("features.community", newFeatures as any, {
      shouldValidate: true,
    });
  };

  const handleNext = async () => {
    const isValid = await trigger("features");
    if (isValid) {
      next?.();
    }
  };

  const FeatureCheckbox = ({
    feature,
    isProperty,
  }: {
    feature: { id: string; label: string };
    isProperty: boolean;
  }) => {
    const currentFeatures = isProperty ? features.property : features.community;

    return (
      <label className="flex items-start gap-2 min-w-[200px]">
        <input
          type="checkbox"
          checked={currentFeatures?.includes(feature.id as never)}
          onChange={() =>
            isProperty
              ? togglePropertyFeature(feature.id)
              : toggleCommunityFeature(feature.id)
          }
          className="mt-1 h-5 w-5 rounded border-gray-300"
        />
        <span className="text-base">{feature.label}</span>
      </label>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Wil's listings</h1>
          <h2 className="text-2xl">Add a new listing</h2>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold underline mb-4">
            Property features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {propertyFeatures.map((feature) => (
              <FeatureCheckbox
                key={feature.id}
                feature={feature}
                isProperty={true}
              />
            ))}
          </div>
          {errors.features?.property && (
            <p className="text-red-500 mt-2">
              {errors.features.property.message}
            </p>
          )}
        </section>

        <section>
          <h3 className="text-xl font-bold underline mb-4">
            Community features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {communityFeatures.map((feature) => (
              <FeatureCheckbox
                key={feature.id}
                feature={feature}
                isProperty={false}
              />
            ))}
          </div>
          {errors.features?.community && (
            <p className="text-red-500 mt-2">
              {errors.features.community.message}
            </p>
          )}
        </section>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={prev}
            className="px-6 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500 transition-colors"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
