import { Schema } from "../../../pages/create_builder/pages/form_steps/property_info/schemas/PropertyInfo.schema";
import { getContactInfo, getStates } from "../utils/api";
import { useFormContext } from "./useFormContext";
import { useQuery } from "@tanstack/react-query";
import { useWatch } from "react-hook-form";

const useStates = () => {
  return useQuery({
    queryKey: ["ContactInfo"],
    queryFn: getStates,
  });
};

const useContactInfo = () => {
  const { control } = useFormContext<Schema>();
  const contactInfo = useWatch({ control, name: "ContactInfo" });

  console.log("🚀 ~ useContactInfo ~ contactInfo:", contactInfo);
  return useQuery({
    queryKey: ["ContactInfo", { contactInfo }],
    queryFn: () => getContactInfo(contactInfo),
  });
};

export { useStates, useContactInfo };
