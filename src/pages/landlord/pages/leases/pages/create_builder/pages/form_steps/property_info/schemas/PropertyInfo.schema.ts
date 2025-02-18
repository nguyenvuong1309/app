import { calculatePastDate } from "../../../../../../../../../../utils";
import { regex } from "../../../../../../../../../../utils";
import validator from "validator";
import { z } from "zod";

const schema = z.object({
  FirstName: z.string().min(1).max(50),
  LastName: z.string().min(1).max(50),
  // Email: z.string().email(),
  // ContactInfo: z
  //   .string()
  //   .min(1)
  //   .refine((val) => validator.isEmail(val)),
  ContactInfo: z.string().min(1),
  PropertyAddress: z.coerce
    .date()
    .max(calculatePastDate(18))
    .min(calculatePastDate(100)),
  PropertyAddressLine2: z.string().min(1),
  City: z.string().min(1),
  Province: z.string().min(1),
  Country: z.string().min(1),
  PostalCode: z.string().min(1),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  // Email: "",
  City: "",
  ContactInfo: "Email",
  Country: "",
  FirstName: "",
  LastName: "",
  PostalCode: "",
  PropertyAddress: calculatePastDate(18),
  PropertyAddressLine2: "",
  Province: "",
};

export {
  schema,
  schema as propertyInformationSchema,
  type Schema,
  defaultValues,
};
