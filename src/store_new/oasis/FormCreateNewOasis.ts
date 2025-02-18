import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Định nghĩa interface cho form data
interface FormData {
  [key: string]: any;
}

// Định nghĩa interface cho state của form
interface FormState {
  formData: FormData;
  step: number;
}

// Khởi tạo state ban đầu
const initialState: FormState = {
  formData: {},
  step: 1,
};

// Tạo slice cho form
const formCreateNewOasisSlice = createSlice({
  name: "formCreateNewOasis",
  initialState,
  reducers: {
    // Action để cập nhật dữ liệu form
    updateFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },

    // Action để thay đổi bước
    nextStep: (state) => {
      state.step += 1;
    },

    // Action để quay lại bước trước
    previousStep: (state) => {
      if (state.step > 1) {
        state.step -= 1;
      }
    },

    // Action để reset form
    resetForm: (state) => {
      state.formData = {};
      state.step = 1;
    },
  },
});

// Export các action
export const { updateFormData, nextStep, previousStep, resetForm } =
  formCreateNewOasisSlice.actions;

// Selector để lấy state của form
export const selectFormData = (state: RootState) =>
  state.formCreateNewOasis.formData;
export const selectFormStep = (state: RootState) =>
  state.formCreateNewOasis.step;

// Export reducer
export default formCreateNewOasisSlice.reducer;
