import { z } from "zod";

// Định nghĩa schema tổng hợp
export const createOasisSchema = z.object({
  // Step 1: Loại Oasis
  type: z.enum([
    "house",
    "apartment",
    "condo",
    "duplex",
    "basement",
    "townhouse",
    "camper",
    "office",
    "acreage",
    "cabin",
    "spaceship",
    "loft",
  ]),

  // Step 2: Địa điểm
  location: z.object({
    address: z.string().min(1, "Address cannot be empty"),
    // city: z.string().min(1, "Thành phố không được để trống"),
    // province: z.string().min(1, "Tỉnh/Thành phố không được để trống"),
    // postalCode: z.string().min(1, "Mã bưu điện không được để trống"),
  }),

  // Step 3: Tính năng
  features: z.object({
    property: z
      .array(
        z.enum([
          "dishwasher",
          "oven",
          "stove",
          "microwave",
          "fridge",
          "freezer",
          "inSuiteLaundry",
          "alarm",
          "carpetedFloors",
          "luxuryVinyl",
          "securitySystem",
          "tileFlooring",
          "patio",
          "deck",
          "privateEntry",
        ])
      )
      .min(1, "Please select at least one property feature"),
    community: z
      .array(
        z.enum([
          "bikePaths",
          "bus",
          "golfCourse",
          "lake",
          "playground",
          "park",
          "shoppingCenter",
          "sportsComplex",
          "tennisCourts",
          "residentAssociation",
        ])
      )
      .min(1, "Please select at least one community feature"),
  }),

  // Step 4: Chi tiết tài sản
  details: z.object({
    bedrooms: z.number().min(1, "Bedrooms must be greater than 0"),

    bathrooms: z.number().min(1, "Bathrooms must be greater than 0"),
    livingSpace: z.number().min(1, "Living space must be greater than 0"),
    monthlyRent: z.number().min(1, "Monthly rent must be greater than 0"),
    securityDeposit: z.number().min(0, "Security deposit cannot be negative"),
    leaseTerm: z.number().min(1, "Lease term must be greater than 0"),
    availableDate: z.date().optional(),
    utilities: z.array(
      z.enum([
        "waste",
        "internet",
        "electricity",
        "gas",
        "water",
        "not included, see description",
      ])
    ),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters"),
    notes: z.object({
      authorization: z.string(),
      hidden: z.string(),
    }),
    contact: z.object({
      method: z.enum(["email", "phone", "both"]),
      phone: z.string().optional(),
      email: z.string().email("Invalid email").optional(),
    }),
    media: z.object({
      files: z
        .array(
          z.object({
            file: z.any(),
            preview: z.string(),
            type: z.enum(["image", "video"]),
          })
        )
        .min(1, "Please add at least 1 image or video"),
      videoTourUrl: z.string().url().optional(),
    }),
  }),

  // Step 5: Lịch xem nhà

  viewingAvailability: z.object({
    bufferTime: z.enum(["none", "15min", "30min", "1hour"], {
      required_error: "Please select buffer time",
    }),
    minimumNotice: z.enum(["1hour", "2hours", "4hours", "1day", "2days"], {
      required_error: "Please select minimum notice time",
    }),
    dailyLimit: z.number().min(1, "Daily limit must be greater than 0"),
    startTimeIncrements: z
      .number()
      .min(15, "Minimum time increment is 15 minutes"),
  }),

  // Step 6: Lịch hàng tuần

  weeklySchedule: z.object({
    timezone: z.string({
      required_error: "Please select timezone",
    }),
    schedule: z
      .array(
        z.object({
          day: z.enum(["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]),
          times: z.object({
            start: z.string(),
            end: z.string(),
          }),
          enabled: z.boolean(),
        })
      )
      .min(1, "Please set up weekly schedule")
      .refine((schedule: any) => schedule.some((day: any) => day.enabled), {
        message: "Please select at least one day available",
      }),
    vacations: z.array(
      z.object({
        date: z.string(),
        time: z.string(),
        unavailable: z.boolean().optional(),
      })
    ),
  }),

  // Trạng thái form
  formState: z.object({
    currentStep: z.number().min(1).max(5),
    isComplete: z.boolean(),
    lastUpdated: z.date(),
  }),
});

// Type từ schema
export type CreateOasisType = z.infer<typeof createOasisSchema>;

// Giá trị mặc định
export const defaultOasisValues: CreateOasisType = {
  type: "house",
  features: {
    property: [],
    community: [],
  },
  location: {
    address: "Ho Chi Minh",
  },
  details: {
    bedrooms: 0,
    bathrooms: 0,
    livingSpace: 0,
    monthlyRent: 0,
    securityDeposit: 0,

    leaseTerm: 0,
    utilities: [],
    description: "",
    notes: {
      authorization: "",
      hidden: "",
    },
    contact: {
      method: "email",
    },
    media: {
      files: [],
    },
  },
  viewingAvailability: {
    bufferTime: "none",
    minimumNotice: "1hour",
    dailyLimit: 20,
    startTimeIncrements: 15,
  },
  weeklySchedule: {
    timezone: "Mountain Time - US & Canada",
    schedule: [
      { day: "Sun", times: { start: "9:00", end: "17:00" }, enabled: true },
      { day: "Mon", times: { start: "9:00", end: "17:00" }, enabled: true },
      { day: "Tues", times: { start: "8:00", end: "17:00" }, enabled: true },
      { day: "Wed", times: { start: "9:00", end: "18:00" }, enabled: true },
      { day: "Thurs", times: { start: "9:00", end: "18:00" }, enabled: true },
      { day: "Fri", times: { start: "9:00", end: "20:00" }, enabled: true },
      { day: "Sat", times: { start: "Closed", end: "Closed" }, enabled: false },
    ],
    vacations: [],
  },
  formState: {
    currentStep: 1,
    isComplete: false,
    lastUpdated: new Date(),
  },
};

// Helper functions để validate từng bước
export const validateStep = (step: number, data: Partial<CreateOasisType>) => {
  switch (step) {
    case 1:
      return createOasisSchema.pick({ type: true }).safeParse(data);
    case 2:
      return createOasisSchema.pick({ features: true }).safeParse(data);
    case 3:
      return createOasisSchema.pick({ details: true }).safeParse(data);
    case 4:
      return createOasisSchema
        .pick({ viewingAvailability: true })
        .safeParse(data);
    case 5:
      return createOasisSchema.pick({ weeklySchedule: true }).safeParse(data);
    default:
      return { success: false, error: new Error("Invalid step") };
  }
};
