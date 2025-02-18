import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./routes/protectedRoutes";
import Login from "./pages/landlord/Login";
import { LandlordSignUp } from "./pages/landlord/SignUp/SignUp";
import PATH from "./config/path";
import ForgetPassword from "./components/Auth/ForgetPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import VerifySignUp from "./components/Auth/SignUp/VerifySignUp";
import TenantLogin from "./pages/Tenant/Login";
import TenantSignUp from "./pages/Tenant/SignUp";
import { EditProfile, PageNotFound, Pricing } from "./pages";
import PaymentSettings from "./pages/payment-settings/PaymentSettings";
import { HomePage } from "./pages/home/home_html/Home";
import { PurchaseSuccess } from "./pages/PurchaseSuccess.tsx";
import { ProfilePage } from "./pages/profile";
import { LandlordDashboard } from "./pages/landlord/pages/dashboard/LandLord";
import { AddNewOasis } from "./pages/landlord/pages/add-new-oasis/AddNewOasis";
import {
  ListIncludeFeature,
  ListTypeOasis,
  WeeklyAvailabilites,
  ViewingAvailabilities,
  CreateNewOasis,
} from "./pages/landlord/pages";
import { UpdateOasis } from "./pages/landlord/pages/update-oasis/UpdateOasis";
import { Maintainence } from "./pages/landlord/pages/maintainence/Maintainence";
import { PropertyInformation } from "./pages/landlord/pages/leases/pages/create_builder/pages/form_steps/property_info/PropertyInformation";
import { PropertyTime } from "./pages/landlord/pages/leases/pages/create_builder/pages/form_steps/property_time/PropertyTime";
import { LeaseUpload } from "./pages/landlord/pages/leases/pages/leases/Leases";
import { TenantInfo } from "./pages/landlord/pages/leases/pages/create_builder/pages/form_steps/tenant_info/TenantInfo";
import { RentMoney } from "./pages/landlord/pages/leases/pages/create_builder/pages/form_steps/rent_money/RentMoney";
import { LeasesReview } from "./pages/landlord/pages/leases/pages/create_builder/pages/form_steps/leases_review/LeasesReview";
import { LeasesWrapper } from "./pages/landlord/pages/leases/pages/create_builder/components/FormWrapper";
import { AdminLayout } from "./layout/AdminLayout";
import {
  Leads,
  LeadsHome,
} from "./pages/landlord/pages/leads/leads_home/LeadsHome";
import { InviteLeads } from "./pages/landlord/pages/leads/invite_leads/InviteLeads";
import { ViewingAppointments } from "./pages/landlord/pages/leads/viewing_appointments/ViewingAppointments";
import { ApplicantsHome } from "./pages/landlord/applicants/pages/applicants_home/ApplicantsHome";
import { ApplicantsDetail } from "./pages/landlord/applicants/pages/applicants_detail/ApplicantsDetail";
import { TenantsHome } from "./pages/landlord/pages/tenants/pages/tenants_home/TenantsHome";

export const App = () => {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <HeaderBar />,
    //   errorElement: <PageNotFound />,
    //   children: [
    //     { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
    //     {
    //       path: "/",
    //       element: (
    //         // // @ts-ignore
    //         // <Layout
    //         //   sidebarList={items}
    //         //   // pageTitle="Landlord"
    //         //   // childPage={}
    //         // />
    //         <Navbar />
    //       ),
    //       children: [
    //         {
    //           path: PATH.LANDLORD_DASHBOARD,
    //           element: <ProtectedRoute element={<LandlordDashboard />} />,
    //         },
    //         {
    //           path: PATH.LANDLORD + PATH.CREATE_NEW_OASIS,
    //           element: <ProtectedRoute element={<CreateNewOasis />} />,
    //         },
    //         {
    //           path: PATH.LANDLORD + PATH.UPDATE_OASIS + "/:id",
    //           element: <ProtectedRoute element={<UpdateOasis />} />,
    //         },
    //       ],
    //     },
    //   ],
    // },
    { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
    { path: PATH.LOGIN, element: <Login /> },
    { path: PATH.SIGN_UP, element: <LandlordSignUp /> },
    {
      path: PATH.PRICE_PLAN,
      element: <ProtectedRoute element={<Pricing />} />,
    },
    { path: PATH.FORGET_PASSWORD, element: <ForgetPassword /> },
    { path: PATH.RESET_PASSWORD + "/:token", element: <ResetPassword /> },
    { path: PATH.VERIFY_SIGN_UP, element: <VerifySignUp /> },
    { path: PATH.TENANT_LOGIN, element: <TenantLogin /> },
    { path: PATH.TENANT_SIGN_UP, element: <TenantSignUp /> },
    {
      path: PATH.PAYMENT_SETTINGS,
      element: <ProtectedRoute element={<PaymentSettings />} />,
    },
    {
      path: PATH.PURCHASE_SUCCESS,
      element: <ProtectedRoute element={<PurchaseSuccess />} />,
    },
    {
      path: PATH.PROFILE,
      element: <ProtectedRoute element={<ProfilePage />} />,
    },
    {
      path: PATH.EDIT_PROFILE,
      element: <ProtectedRoute element={<EditProfile />} />,
    },
    {
      path: PATH.LANDLORD_DASHBOARD,
      element: <ProtectedRoute element={<LandlordDashboard />} />,
    },
    {
      path: PATH.LANDLORD + PATH.CREATE_NEW_OASIS,
      element: <ProtectedRoute element={<CreateNewOasis />} />,
    },
    {
      path: PATH.LANDLORD + PATH.ADD_NEW_OASIS,
      element: <ProtectedRoute element={<AddNewOasis />} />,
    },
    {
      path: PATH.LANDLORD + PATH.LIST_TYPE_OASIS,
      element: <ProtectedRoute element={<ListTypeOasis />} />,
    },
    {
      path: PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE,
      element: <ProtectedRoute element={<ListIncludeFeature />} />,
    },
    {
      path: PATH.LANDLORD + PATH.VIEWING_AVAILABILITY,
      element: <ProtectedRoute element={<ViewingAvailabilities />} />,
    },
    {
      path: PATH.LANDLORD + PATH.WEEKLY_AVAILABILITY,
      element: <ProtectedRoute element={<WeeklyAvailabilites />} />,
    },
    {
      path: PATH.LANDLORD + PATH.UPDATE_OASIS + "/:id",
      element: <ProtectedRoute element={<UpdateOasis />} />,
    },
    {
      path: PATH.LANDLORD_VERIFY_SIGN_UP,
      element: <ProtectedRoute element={<VerifySignUp />} />,
    },
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        {
          path: PATH.LANDLORD_MAINTENANCE,
          element: <ProtectedRoute element={<Maintainence />} />,
        },
        {
          path: PATH.LANDLORD_LEASES_BUILDER,
          element: <ProtectedRoute element={<LeaseUpload />} />,
        },
        {
          path: "/",
          element: <LeasesWrapper />,
          children: [
            {
              path: PATH.LANDLORD_LEASES_BUILDER_PROPERTY_INFORMATION,
              element: <ProtectedRoute element={<PropertyInformation />} />,
            },
            {
              path: PATH.LANDLORD_LEASES_BUILDER_PROPERTY_TIME,
              element: <ProtectedRoute element={<PropertyTime />} />,
            },
            {
              path: PATH.LANDLORD_LEASES_BUILDER_TENANT_INFO,
              element: <ProtectedRoute element={<TenantInfo />} />,
            },
            {
              path: PATH.LANDLORD_LEASES_BUILDER_RENT_MONEY,
              element: <ProtectedRoute element={<RentMoney />} />,
            },
            {
              path: PATH.LANDLORD_LEASES_BUILDER_LEASES_REVIEW,
              element: <ProtectedRoute element={<LeasesReview />} />,
            },
          ],
        },
        {
          path: PATH.LANDLORD_LEADS,
          element: <ProtectedRoute element={<LeadsHome />} />,
        },
        {
          path: PATH.LANDLORD_LEADS_INVITE,
          element: <ProtectedRoute element={<InviteLeads />} />,
        },
        {
          path: PATH.LANDLORD_LEADS_VIEWING_APPOINTMENTS,
          element: <ProtectedRoute element={<ViewingAppointments />} />,
        },
        {
          path: PATH.LANDLORD_APPLICANTS,
          element: <ProtectedRoute element={<ApplicantsHome />} />,
        },
        {
          path: PATH.LANDLORD_APPLICANTS + "/:id",
          element: <ProtectedRoute element={<ApplicantsDetail />} />,
        },
        {
          path: PATH.LANDLORD_TENANTS,
          element: <ProtectedRoute element={<TenantsHome />} />,
        },
      ],
    },
    { path: PATH.NOT_FOUND, element: <PageNotFound /> },
  ]);

  return (
    <RouterProvider router={router} />
    // <Routes>
    //   <Route
    //     path="/"
    //     element={
    //       <ProtectedRoute>
    //         <OasisRouteWrapper>
    //           <HomeLayout />
    //         </OasisRouteWrapper>
    //       </ProtectedRoute>
    //     }
    //   >
    //     <Route index element={<HomePage />} />
    //   </Route>

    //   <Route path={PATH.LOGIN} element={<Login />} />
    //   <Route path={PATH.PRICE_PLAN} element={<Pricing />} />
    //   <Route path={PATH.SIGN_UP} element={<LandlordSignUp />} />
    //   <Route path={PATH.FORGET_PASSWORD} element={<ForgetPassword />} />
    //   <Route path={PATH.RESET_PASSWORD} element={<ResetPassword />} />
    //   <Route path={PATH.VERIFY_SIGN_UP} element={<VerifySignUp />} />
    //   <Route path={PATH.TENANT_LOGIN} element={<TenantLogin />} />
    //   <Route path={PATH.TENANT_SIGN_UP} element={<TenantSignUp />} />
    //   <Route path={PATH.PAYMENT_SETTINGS} element={<PaymentSettings />} />
    //   <Route path={PATH.NOT_FOUND} element={<PageNotFound />} />
    //   <Route path={PATH.PURCHASE_SUCCESS} element={<PurchaseSuccess />} />
    //   <Route path={PATH.PROFILE} element={<ProfilePage />} />
    //   <Route path={PATH.EDIT_PROFILE} element={<EditProfile />} />
    //   <Route path={PATH.LANDLORD_DASHBOARD} element={<LandlordDashboard />} />
    //   <Route
    //     path={PATH.LANDLORD + PATH.CREATE_NEW_OASIS}
    //     element={<CreateNewOasis />}
    //   />
    //   <Route
    //     path={PATH.LANDLORD + PATH.ADD_NEW_OASIS}
    //     element={<AddNewOasis />}
    //   />
    //   <Route
    //     path={PATH.LANDLORD + PATH.LIST_TYPE_OASIS}
    //     element={<ListTypeOasis />}
    //   />
    //   <Route
    //     path={PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE}
    //     element={<ListIncludeFeature />}
    //   />
    //   <Route
    //     path={PATH.LANDLORD + PATH.VIEWING_AVAILABILITY}
    //     element={<ViewingAvailabilities />}
    //   />
    //   <Route
    //     path={PATH.LANDLORD + PATH.WEEKLY_AVAILABILITY}
    //     element={<WeeklyAvailabilites />}
    //   />
    //   {/* </Route> */}
    // </Routes>
  );
};
