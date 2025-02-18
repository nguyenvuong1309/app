export type OasisModel = {
  id: number;
  userId: string;
  type: OasisType;
  propertyFeatures: PropertyFeatureType[];
  communityFeatures: CommunityFeatureType[];
  address: string;
  bedrooms: number;
  bathrooms: number;
  livingSpace: number;
  monthlyRent: number;
  securityDeposit: number;
  leaseTerm: number;
  availableDate: Date;
  utilities: string[];
  description: string;
  hiddenNotes: string;
  authorizationNotes: string;
  contactMethod: string;
  contactPhone: string;
  contactEmail: string;
  images: string[];
  videoTourUrl: string;
  viewingAvailability: ViewingAvailabilityType;
  weeklySchedule: WeeklyScheduleType;
  createdAt: string;
  updatedAt: string;
};

export type FeaturesType = {
  property: string[];
  community: string[];
};

export type MediaType = {
  files: File[];
  videoTourUrl: string;
};

export type ViewingAvailabilityType = {
  bufferTime: string;
  minimumNotice: string;
  dailyLimit: number;
  startTimeIncrements: number;
};

export type WeeklyScheduleType = {
  timezone: string;
  schedule: WeeklyScheduleItemType[];
  vacations: any;
};

export type WeeklyScheduleItemType = {
  day: any;
  times: {
    start: string;
    end: string;
  };
  enabled: boolean;
};

export type OasisType =
  | "house"
  | "apartment"
  | "condo"
  | "duplex"
  | "basement"
  | "townhouse"
  | "camper"
  | "office"
  | "acreage"
  | "cabin"
  | "spaceship"
  | "loft";

export type PropertyFeatureType =
  | "dishwasher"
  | "oven"
  | "stove"
  | "microwave"
  | "fridge"
  | "freezer"
  | "inSuiteLaundry"
  | "alarm"
  | "carpetedFloors"
  | "luxuryVinyl"
  | "securitySystem"
  | "tileFlooring"
  | "patio"
  | "deck"
  | "privateEntry";

export type CommunityFeatureType =
  | "bikePaths"
  | "bus"
  | "golfCourse"
  | "lake"
  | "playground"
  | "park"
  | "shoppingCenter"
  | "sportsComplex"
  | "tennisCourts"
  | "residentAssociation";
