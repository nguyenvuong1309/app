import { defaultValues, Schema } from "../schemas/TenantInfo.schema";
import { createStore } from "../../../../../../../../../../utils";

type State = {
  formData: Schema;
};

type Actions = {
  updateFormData: (data: State["formData"]) => void;
};

type Store = State & Actions;

const useStore = createStore<Store>(
  (set) => ({
    formData: defaultValues,
    updateFormData: (data) =>
      set((state) => {
        state.formData = data;
      }),
  }),
  {
    name: "tenant-info-store",
  }
);

export { useStore, useStore as useTenantInfoStore };
