import { create } from "zustand";
import { toast } from "react-hot-toast";
import axios from "axios";

export const usePlanStore = create((set: any, get: any) => ({
  plan: [
    {
      _id: 1,
      name: "premium",
      image: "https://github.com/shadcn.png",
      quantity: 1,
      price: 1,
    },
  ] as any,
  coupon: null as any,
  total: 0 as number,
  subtotal: 0 as number,
  isCouponApplied: false as boolean,

  getMyCoupon: async () => {
    try {
      const response = await axios.get("/coupons");
      set({ coupon: response.data });
    } catch (error) {
      console.log("🚀 ~ getMyCoupon: ~ error:", error);
    }
  },
  applyCoupon: async (code: string) => {
    try {
      const response = await axios.post("/coupons/validate", { code });
      set({ coupon: response.data, isCouponApplied: true });
      get().calculateTotals();
      toast.success("Coupon applied successfully");
    } catch (error) {
      toast.error((error as any) || "Failed to apply coupon");
    }
  },
  removeCoupon: () => {
    set({ coupon: null, isCouponApplied: false });
    get().calculateTotals();
    toast.success("Coupon removed");
  },

  getPlanItems: async () => {
    try {
      const res = await axios.get("/plan");
      set({ plan: res.data });
      get().calculateTotals();
    } catch (error) {
      set({ plan: [] });
      toast.error((error as any).response.data.message || "An error occurred");
    }
  },
  clearPlan: async () => {
    set({ plan: [], coupon: null, total: 0, subtotal: 0 });
  },
  addToPlan: async (product: any) => {
    try {
      await axios.post("/plan", { productId: product._id });
      toast.success("Product added to plan");

      set((prevState: any) => {
        const existingItem = prevState.plan.find(
          (item: any) => item._id === product._id
        );
        const newPlan = existingItem
          ? prevState.plan.map((item: any) =>
              item._id === product._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...prevState.plan, { ...product, quantity: 1 }];
        return { plan: newPlan };
      });
      get().calculateTotals();
    } catch (error) {
      toast.error((error as any).response.data.message || "An error occurred");
    }
  },
  removeFromPlan: async (productId: any) => {
    await axios.delete(`/plan`, { data: { productId } });
    set((prevState: any) => ({
      plan: prevState.plan.filter((item: any) => item._id !== productId),
    }));
    get().calculateTotals();
  },
  updateQuantity: async (productId: any, quantity: any) => {
    if (quantity === 0) {
      get().removeFromPlan(productId);
      return;
    }

    await axios.put(`/plan/${productId}`, { quantity });
    set((prevState: any) => ({
      plan: prevState.plan.map((item: any) =>
        item._id === productId ? { ...item, quantity } : item
      ),
    }));
    get().calculateTotals();
  },
  calculateTotals: () => {
    const { plan, coupon } = get();
    const subtotal = plan.reduce(
      (sum: any, item: any) => sum + item.price * item.quantity,
      0
    );
    let total = subtotal;

    if (coupon) {
      const discount = subtotal * (coupon.discountPercentage / 100);
      total = subtotal - discount;
    }

    set({ subtotal, total });
  },
}));
