// import { employeeAdditionalInfoSchema } from "@/features/employee/additional-info/types/schema";
// import { employeeHistorySchema } from "@/features/employee/history/types/schema";
// import { employeePersonalInfoSchema } from "@/features/employee/personal-info/types/schema";
// import { employeeReviewSchema } from "@/features/employee/review/types/schema";
// import { employeeSkillsSchema } from "@/features/employee/skills/types/schema";
import { tenantInfoSchema } from "../../../pages/form_steps/tenant_info/schemas/TenantInfo.schema";
import { propertyInformationSchema } from "../../../pages/form_steps/property_info/schemas/PropertyInfo.schema";
import { propertyTimeSchema } from "../../../pages/form_steps/property_time/schemas/PropertyTime.schema";
import { rentMoneySchema } from "../../../pages/form_steps/rent_money/schemas/RentMoney.schema";
import { reviewLeasesSchema } from "../../../pages/form_steps/leases_review/schemas/ReviewLeases.schema";
import { z } from "zod";

const schema = tenantInfoSchema
  .and(propertyInformationSchema)
  .and(propertyTimeSchema)
  .and(reviewLeasesSchema)
  .and(rentMoneySchema);

type Schema = z.infer<typeof schema>;

export { schema, type Schema };
