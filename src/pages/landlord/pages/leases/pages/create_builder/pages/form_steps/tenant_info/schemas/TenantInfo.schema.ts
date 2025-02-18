import { z } from "zod";

const schema = z.object({
  FirstName: z.string().min(1).max(50),
  LastName: z.string().min(1).max(50),
  // ContactInfo: z.string().min(1),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  FirstName: "",
  LastName: "",
  // ContactInfo: "",
};

export { schema, schema as tenantInfoSchema, type Schema, defaultValues };
