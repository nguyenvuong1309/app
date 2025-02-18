import { UseFormReturn } from "react-hook-form";

export type FormContext<T extends Record<string, unknown>> =
  UseFormReturn<T> & {
    readOnly: boolean;
  };
