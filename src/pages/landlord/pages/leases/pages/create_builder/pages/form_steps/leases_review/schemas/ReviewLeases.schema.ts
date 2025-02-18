import { z } from "zod";

const schema = z.object({
  termsAndConditionsAccepted: z.boolean().refine((val) => val === true, {
    message: `You must accept the terms and conditions.`,
  }),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  termsAndConditionsAccepted: false,
};

export { defaultValues, schema as reviewLeasesSchema, schema, type Schema };
