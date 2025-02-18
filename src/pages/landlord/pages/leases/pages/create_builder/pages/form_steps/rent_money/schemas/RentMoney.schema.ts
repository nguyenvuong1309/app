import { z } from "zod";

const schema = z.object({
  RentAmount: z.string().min(1).max(50),
  IsinCludeUtilities: z.string().min(1).max(50),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  RentAmount: "",
  IsinCludeUtilities: "",
};

export { schema, schema as rentMoneySchema, type Schema, defaultValues };
