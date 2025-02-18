import { calculatePastDate } from "../../../../../../../../../../utils";
import { z } from "zod";

const schema = z.object({
  StartDate: z.coerce
    .date()
    .max(calculatePastDate(18))
    .min(calculatePastDate(100)),
  EndDate: z.coerce
    .date()
    .max(calculatePastDate(18))
    .min(calculatePastDate(100)),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  StartDate: calculatePastDate(18),
  EndDate: calculatePastDate(100),
};

export { schema, schema as propertyTimeSchema, type Schema, defaultValues };
