import { defaultValues, Schema } from "../schemas";
import { createStore } from "../../../../../../../utils";

type State = {
  formData: Schema;
};

type Actions = {
  updateFormData: (data: State["formData"]) => void;
};

type Store = State & Actions;

export const useEmployeeHistoryStore = createStore<Store>(
  (set) => ({
    formData: defaultValues,
    updateFormData: (data) =>
      set((state) => {
        state.formData = data;
      }),
  }),
  {
    name: "employee-history-store",
  }
);

// export { useStore, useStore as useEmployeeHistoryStore };
