export interface IProperty {
  id: number;
  user: string;
  domain_user_id: string;
  added_by_user_id: string;
  address: string;
  type: "house" | "apartment";
  property_features: string[];
  community_features: string[];
  bedrooms: number;
  bathrooms: number;
  living_space: number;
  monthlyRent: string;
  security_deposit: string;
  lease_term: number;
  availableDate: string;
  utilities: string[];
  description: string;
  hidden_notes: string;
  authorization_notes: string;
  contact_method: string;
  contact_phone: string;
  contact_email: string;
  images: string[];
  video_tour_url: string;
  viewing_availability: {
    bufferTime: string;
    minimumNotice: string;
    dailyLimit: number;
    startTimeIncrements: number;
  };
  weekly_schedule: {
    timezone: string;
    schedule: {
      day: string;
      times: {
        start: string;
        end: string;
      };
      enabled: boolean;
    }[];
    vacations: any[];
  };
  created_at: string;
  updated_at: string;
}
