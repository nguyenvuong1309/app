import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from "../../config";

export const SIDEBAR_DATA = [
  {
    module_name: "Dashboard",
    module_icon: "grid",
    is_menu: true,
    is_active: true,
    module_url: "#",
    parent_id: null,
    display_order: -1,
    module_description: "Dashboard",
    created_at: "2024-06-12T00:00:44Z",
    updated_at: "2024-06-12T00:00:44Z",
    id: 45,
    submenus: [
      {
        id: 46,
        module_name: "Inbox",
        module_icon: "activity",
        is_menu: true,
        is_active: true,
        parent_id: 45,
        display_order: 0,
        module_url: "analytics",
        module_description: "Analytics",
        active: false,
      },
      {
        id: 47,
        module_name: "Oasis",
        module_icon: "activity",
        is_menu: true,
        is_active: true,
        parent_id: 45,
        display_order: 0,
        module_url: "analytics",
        module_description: "Analytics",
        active: false,
      },
      {
        id: 48,
        module_name: "Maintaince",
        module_icon: "activity",
        is_menu: true,
        is_active: true,
        parent_id: 45,
        display_order: 0,
        module_url: "analytics",
        module_description: "Analytics",
        active: false,
      },
      {
        id: 49,
        module_name: "Leases",
        module_icon: "activity",
        is_menu: true,
        is_active: true,
        parent_id: 45,
        display_order: 0,
        module_url: "analytics",
        module_description: "Analytics",
        active: false,
      },
      {
        id: 50,
        module_name: "Forms",
        module_icon: "activity",
        is_menu: true,
        is_active: true,
        parent_id: 45,
        display_order: 0,
        module_url: "analytics",
        module_description: "Analytics",
        active: false,
      },
    ],
    active: true,
    expanded: true,
  },
  {
    module_name: "Renters",
    module_icon: "grid",
    is_menu: true,
    is_active: true,
    module_url: "#",
    parent_id: null,
    display_order: -1,
    module_description: "Dashboard",
    created_at: "2024-06-12T00:00:44Z",
    updated_at: "2024-06-12T00:00:44Z",
    id: 45,
    submenus: [
      {
        id: 46,
        module_name: "Leads",
        module_icon: "activity",
        is_menu: true,
        is_active: true,
        parent_id: 45,
        display_order: 0,
        module_url: "analytics",
        module_description: "Analytics",
        active: false,
      },
      {
        id: 47,
        module_name: "Applications",
        module_icon: "activity",
        is_menu: true,
        is_active: true,
        parent_id: 45,
        display_order: 0,
        module_url: "analytics",
        module_description: "Analytics",
        active: false,
      },
      {
        id: 48,
        module_name: "Tenants",
        module_icon: "activity",
        is_menu: true,
        is_active: true,
        parent_id: 45,
        display_order: 0,
        module_url: "analytics",
        module_description: "Analytics",
        active: false,
      },
    ],
    active: true,
    expanded: true,
  },
  {
    module_name: "Financials",
    module_icon: "grid",
    is_menu: true,
    is_active: true,
    module_url: "#",
    parent_id: null,
    display_order: -1,
    module_description: "Dashboard",
    created_at: "2024-06-12T00:00:44Z",
    updated_at: "2024-06-12T00:00:44Z",
    id: 45,
    submenus: [
      {
        id: 46,
        module_name: "Payments",
        module_icon: "activity",
        is_menu: true,
        is_active: true,
        parent_id: 45,
        display_order: 0,
        module_url: "analytics",
        module_description: "Analytics",
        active: false,
      },
      {
        id: 47,
        module_name: "Expenses",
        module_icon: "activity",
        is_menu: true,
        is_active: true,
        parent_id: 45,
        display_order: 0,
        module_url: "analytics",
        module_description: "Analytics",
        active: false,
      },
      {
        id: 48,
        module_name: "Accounting",
        module_icon: "activity",
        is_menu: true,
        is_active: true,
        parent_id: 45,
        display_order: 0,
        module_url: "analytics",
        module_description: "Analytics",
        active: false,
      },
    ],
    active: true,
    expanded: true,
  },
  // {
  //   module_name: "Customer",
  //   module_icon: "AccountCircle",
  //   is_menu: true,
  //   is_active: true,
  //   module_url: "#",
  //   parent_id: null,
  //   display_order: 1,
  //   module_description: "Customer",
  //   created_at: "2024-06-12T00:00:13Z",
  //   updated_at: "2024-06-12T00:00:13Z",
  //   id: 14,
  //   submenus: [
  //     {
  //       id: 8,
  //       module_name: "Manage Customer",
  //       module_icon: "Dashboard",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 14,
  //       display_order: 0,
  //       module_url: "customers",
  //       module_description: "Manage Customer",
  //       active: false,
  //     },
  //     {
  //       id: 5,
  //       module_name: "Create Customer",
  //       module_icon: "Add",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 14,
  //       display_order: 1,
  //       module_url: "/customer/create",
  //       module_description: "Create Customer",
  //       active: false,
  //     },
  //   ],
  //   active: false,
  //   expanded: false,
  // },
  // {
  //   module_name: "Supplier",
  //   module_icon: "GroupAdd",
  //   is_menu: true,
  //   is_active: true,
  //   module_url: "#",
  //   parent_id: null,
  //   display_order: 2,
  //   module_description: "Supplier",
  //   created_at: "2024-06-12T00:00:14Z",
  //   updated_at: "2024-06-12T00:00:14Z",
  //   id: 15,
  //   submenus: [
  //     {
  //       id: 21,
  //       module_name: "Manage Supplier",
  //       module_icon: null,
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 15,
  //       display_order: 0,
  //       module_url: null,
  //       module_description: null,
  //       active: false,
  //     },
  //     {
  //       id: 20,
  //       module_name: "Create Supplier",
  //       module_icon: "Add",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 15,
  //       display_order: 1,
  //       module_url: "/suppliers/create",
  //       module_description: null,
  //       active: false,
  //     },
  //   ],
  //   active: false,
  //   expanded: false,
  // },
  // {
  //   module_name: "Purchase Order",
  //   module_icon: "Store",
  //   is_menu: true,
  //   is_active: true,
  //   module_url: "#",
  //   parent_id: null,
  //   display_order: 3,
  //   module_description: "Purchase Order",
  //   created_at: "2024-06-12T00:00:11Z",
  //   updated_at: "2024-06-12T00:00:11Z",
  //   id: 12,
  //   submenus: [
  //     {
  //       id: 7,
  //       module_name: "Manage Purchase Order",
  //       module_icon: "Dashboard",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 12,
  //       display_order: 0,
  //       module_url: "purchaseorder",
  //       module_description: "Manage Purchase Order",
  //       active: false,
  //     },
  //     {
  //       id: 1,
  //       module_name: "Create Purchase Order",
  //       module_icon: "Add",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 12,
  //       display_order: 1,
  //       module_url: "/create/po",
  //       module_description: "Create Purchase Order Trsansactions",
  //       active: false,
  //     },
  //   ],
  //   active: false,
  //   expanded: false,
  // },
  // {
  //   module_name: "Sales Order",
  //   module_icon: "ShoppingCart",
  //   is_menu: true,
  //   is_active: true,
  //   module_url: "#",
  //   parent_id: null,
  //   display_order: 4,
  //   module_description: "Sales Order",
  //   created_at: "2024-06-12T00:00:12Z",
  //   updated_at: "2024-06-12T00:00:12Z",
  //   id: 13,
  //   submenus: [
  //     {
  //       id: 6,
  //       module_name: "Manage Sales Order",
  //       module_icon: "Dashboard",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 13,
  //       display_order: 0,
  //       module_url: "salesorder",
  //       module_description: "Manage Sales Order",
  //       active: false,
  //     },
  //     {
  //       id: 2,
  //       module_name: "Create Sales Order",
  //       module_icon: "Add",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 13,
  //       display_order: 1,
  //       module_url: "createso",
  //       module_description: "Create Sales Order Trsansactions",
  //       active: false,
  //     },
  //   ],
  //   active: false,
  //   expanded: false,
  // },
  // {
  //   module_name: "Retail Sales",
  //   module_icon: "ShoppingCart",
  //   is_menu: true,
  //   is_active: true,
  //   module_url: "#",
  //   parent_id: null,
  //   display_order: 4,
  //   module_description: "Retail Sales",
  //   created_at: "2024-06-12T00:00:46Z",
  //   updated_at: "2024-06-12T00:00:46Z",
  //   id: 47,
  //   submenus: [
  //     {
  //       id: 48,
  //       module_name: "Create Retail Order",
  //       module_icon: "Add",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 47,
  //       display_order: 4,
  //       module_url: "#",
  //       module_description: "Create Retail Order",
  //       active: false,
  //     },
  //     {
  //       id: 49,
  //       module_name: "Manage Retail Order",
  //       module_icon: "Dashboard",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 47,
  //       display_order: 4,
  //       module_url: "#",
  //       module_description: "Manage Retail Order",
  //       active: false,
  //     },
  //   ],
  //   active: false,
  //   expanded: false,
  // },
  // {
  //   module_name: "Inventory",
  //   module_icon: "Inventory",
  //   is_menu: true,
  //   is_active: true,
  //   module_url: "#",
  //   parent_id: null,
  //   display_order: 5,
  //   module_description: "Inventory",
  //   created_at: "2024-06-12T00:00:15Z",
  //   updated_at: "2024-06-12T00:00:15Z",
  //   id: 16,
  //   submenus: [
  //     {
  //       id: 25,
  //       module_name: "Manage Stocks",
  //       module_icon: null,
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 16,
  //       display_order: 0,
  //       module_url: null,
  //       module_description: null,
  //       active: false,
  //     },
  //     {
  //       id: 26,
  //       module_name: "Add Stocks",
  //       module_icon: "Add",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 16,
  //       display_order: 1,
  //       module_url: null,
  //       module_description: null,
  //       active: false,
  //     },
  //   ],
  //   active: false,
  //   expanded: false,
  // },
  // {
  //   module_name: "Category",
  //   module_icon: "Category",
  //   is_menu: true,
  //   is_active: true,
  //   module_url: "#",
  //   parent_id: null,
  //   display_order: 6,
  //   module_description: "Category",
  //   created_at: "2024-06-12T00:00:43Z",
  //   updated_at: "2024-06-12T00:00:43Z",
  //   id: 44,
  //   submenus: [
  //     {
  //       id: 43,
  //       module_name: "Manage Category",
  //       module_icon: "Dashboard",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 44,
  //       display_order: 0,
  //       module_url: "category",
  //       module_description: "Manage Category",
  //       active: false,
  //     },
  //     {
  //       id: 42,
  //       module_name: "Add Category",
  //       module_icon: "Add",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 44,
  //       display_order: 1,
  //       module_url: "/form/category",
  //       module_description: "Add Category",
  //       active: false,
  //     },
  //   ],
  //   active: false,
  //   expanded: false,
  // },
  // {
  //   module_name: "Products",
  //   module_icon: "Redeem",
  //   is_menu: true,
  //   is_active: true,
  //   module_url: "#",
  //   parent_id: null,
  //   display_order: 7,
  //   module_description: "Products",
  //   created_at: "2024-06-12T00:00:18Z",
  //   updated_at: "2024-06-12T00:00:18Z",
  //   id: 19,
  //   submenus: [
  //     {
  //       id: 28,
  //       module_name: "Manage Products",
  //       module_icon: null,
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 19,
  //       display_order: 0,
  //       module_url: "/manage/product",
  //       module_description: null,
  //       active: false,
  //     },
  //     {
  //       id: 27,
  //       module_name: "Add Products",
  //       module_icon: "Add",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 19,
  //       display_order: 1,
  //       module_url: "/form/product",
  //       module_description: null,
  //       active: false,
  //     },
  //   ],
  //   active: false,
  //   expanded: false,
  // },
  // {
  //   module_name: "Invoices",
  //   module_icon: "Receipt",
  //   is_menu: true,
  //   is_active: true,
  //   module_url: "#",
  //   parent_id: null,
  //   display_order: 8,
  //   module_description: "Invoices",
  //   created_at: "2024-06-12T00:00:16Z",
  //   updated_at: "2024-06-12T00:00:16Z",
  //   id: 17,
  //   submenus: [
  //     {
  //       id: 24,
  //       module_name: "Manage Invoices",
  //       module_icon: null,
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 17,
  //       display_order: 0,
  //       module_url: null,
  //       module_description: null,
  //       active: false,
  //     },
  //     {
  //       id: 23,
  //       module_name: "Create Invoices",
  //       module_icon: "Add",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 17,
  //       display_order: 1,
  //       module_url: null,
  //       module_description: null,
  //       active: false,
  //     },
  //   ],
  //   active: false,
  //   expanded: false,
  // },
  // {
  //   module_name: "Warehouse",
  //   module_icon: "Warehouse",
  //   is_menu: true,
  //   is_active: true,
  //   module_url: "#",
  //   parent_id: null,
  //   display_order: 9,
  //   module_description: "Warehouse",
  //   created_at: "2024-06-12T00:00:35Z",
  //   updated_at: "2024-06-12T00:00:35Z",
  //   id: 36,
  //   submenus: [
  //     {
  //       id: 39,
  //       module_name: "Manage Warehouse",
  //       module_icon: "Dashboard",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 36,
  //       display_order: 0,
  //       module_url: "/manage/warehouse",
  //       module_description: "Manage Warehouse",
  //       active: true,
  //       expanded: true,
  //     },
  //     {
  //       id: 37,
  //       module_name: "Add Warehouse",
  //       module_icon: "Add",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 36,
  //       display_order: 1,
  //       module_url: "/form/warehouse",
  //       module_description: "Add Warehouse",
  //       active: false,
  //     },
  //   ],
  //   expanded: true,
  //   active: true,
  // },
  // {
  //   module_name: "Users",
  //   module_icon: "AdminPanelSettings",
  //   is_menu: true,
  //   is_active: true,
  //   module_url: "#",
  //   parent_id: null,
  //   display_order: 10,
  //   module_description: "Users",
  //   created_at: "2024-06-12T00:00:34Z",
  //   updated_at: "2024-06-12T00:00:34Z",
  //   id: 35,
  //   submenus: [
  //     {
  //       id: 34,
  //       module_name: "Manage Users",
  //       module_icon: "Dashboard",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 35,
  //       display_order: 0,
  //       module_url: "/manage/users",
  //       module_description: "Create Users",
  //       active: false,
  //     },
  //     {
  //       id: 33,
  //       module_name: "Create Users",
  //       module_icon: "Add",
  //       is_menu: true,
  //       is_active: true,
  //       parent_id: 35,
  //       display_order: 1,
  //       module_url: "/form/users",
  //       module_description: "Create Users",
  //       active: false,
  //     },
  //   ],
  //   active: false,
  //   expanded: false,
  // },
  // {
  //   module_name: "Settings",
  //   module_icon: "Settings",
  //   is_menu: true,
  //   is_active: true,
  //   module_url: "settings",
  //   parent_id: null,
  //   display_order: 13,
  //   module_description: "Settings",
  //   created_at: "2024-06-12T00:00:17Z",
  //   updated_at: "2024-06-12T00:00:17Z",
  //   id: 18,
  //   submenus: [],
  //   active: false,
  //   expanded: false,
  // },
];

export const fetchSidebar = createAsyncThunk("data/fetchSidebar", async () => {
  const response = await axios.get(`${API_URL + "/api/"}getMenus/`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  const sidebarData = response.data.data;

  const setActiveAndExpanded = (item) => {
    if (
      item.module_url &&
      window.location.pathname.indexOf(item.module_url) !== -1
    ) {
      item.active = true;
      item.expanded = true;
      return true;
    }
    if (item.submenus && item.submenus.length > 0) {
      return item.submenus.some((submenu) => setActiveAndExpanded(submenu));
    }
    return false;
  };

  sidebarData.forEach((item) => {
    if (setActiveAndExpanded(item)) {
      item.expanded = true;
    }
  });

  return sidebarData;
});

const sidebarSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    expandItem(state, action) {
      const item = state.items.find((item) => item.id == action.payload.id);
      if (item) {
        item.expanded = !item.expanded;
      }
    },
    activateItem(state, action) {
      state.items.forEach((item) => {
        item.active = false;
        item.expanded = false;
        item.submenus?.forEach((submenu) => {
          submenu.active = false;
          if (submenu.id === action.payload.item.id) {
            submenu.active = true;
          }
        });

        if (
          item.id === action.payload.item?.id ||
          item.id === action.payload.item?.parent_id
        ) {
          item.active = true;
          item.expanded = true;
        }
      });
    },
    triggerPageChange(state, action) {
      state.items.forEach((item) => {
        item.active = false;
        item.expanded = false;
        item.submenus.forEach((submenu) => {
          submenu.active = false;
          if (
            submenu.module_url &&
            window.location.pathname.indexOf(submenu.module_url) !== -1
          ) {
            submenu.active = true;
            item.active = true;
            item.expanded = true;
          }
        });

        if (
          item.module_url &&
          window.location.pathname.indexOf(item.module_url) !== -1 &&
          item.submenus.length === 0
        ) {
          item.active = true;
          item.expanded = true;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSidebar.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSidebar.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(fetchSidebar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {expandItem,activateItem,triggerPageChange}=sidebarSlice.actions;
export default sidebarSlice.reducer;