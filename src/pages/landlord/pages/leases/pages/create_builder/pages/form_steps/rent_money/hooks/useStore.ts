import { defaultValues, Schema } from "../schemas/RentMoney.schema";
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
    name: "rent-money-store",
  }
);

export { useStore, useStore as useRentMoneyStore };
