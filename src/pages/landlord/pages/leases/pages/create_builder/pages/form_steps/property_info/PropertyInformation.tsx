import { Form, Stepper } from "../../../components";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
// import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "../../../components/text-field";
// import {
//   useCities,
//   useStates,
// } from "@/features/employee/personal-info/hooks/useQueries";
import { useStore } from "./hooks/useStore";
import { defaultValues, schema, Schema } from "./schemas/PropertyInfo.schema";
// import { calculatePastDate } from "@/utils/calculatePastDate";
// import { d } from "@/utils/dictionary";
import Grid from "@mui/material/Grid2";
import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  useWatch,
} from "react-hook-form";
import { useNavigate } from "react-router";
import { Suspense, useEffect, useState } from "react";
import { FormProvider } from "react-hook-form";
import { AdminSideBar } from "../../../../../../../components/AdminSidebar";
import AdminHeader from "../../../../../../../components/AdminHeader";
import {
  Autocomplete,
  AutocompleteOption,
} from "../../../components/autocomplete";
// import {
//   Autocomplete,
//   AutocompleteOption,
// } from "@/features/form/components/controllers/autocomplete";
import { useFormContext } from "../../../context/useFormContext";
import { useContactInfo } from "../../../context/useQueries";
import { useStates } from "../../../context/useQueries";

const Page = () => {
  const statesQuery = useStates();
  const contactInfoQuery = useContactInfo();
  console.log("🚀 ~ Page ~ contactInfoQuery:", contactInfoQuery.data);

  const { control, setValue } = useFormContext<Schema>();
  const contactInfo = useWatch({ control, name: "ContactInfo" });

  const handleOptionSelect = (option: AutocompleteOption | null) => {
    console.log("🚀 ~ handleOptionSelect ~ option:", option);
    if (!option) {
      setValue("ContactInfo", "");
    }
  };

  useEffect(() => {
    setValue("ContactInfo", "Email");
  }, [contactInfo]);

  return (
    <>
      {/* <Grid size={{ xs: 4 }}>
        <TextField<any> name="firstName" label={"First Name"} />
      </Grid> */}
      <form className="max-w-3xl mx-auto p-6">
        <div className="space-y-6">
          {/* Property Owner Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Property Owner</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-4">
                <TextField<any> name="FirstName" label={"First Name"} />
                {/* <Input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border-gray-300"
              /> */}
              </div>
              <div className="md:col-span-4">
                {/* <Input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border-gray-300"
              /> */}
                <TextField<any> name="LastName" label={"Last Name"} />
              </div>
              <div className="md:col-span-4">
                {/* <Select value={formData.contactMethod} onValueChange={handleContactMethodChange}>
                <SelectTrigger className="w-full border-gray-300">
                  <SelectValue placeholder="Contact Info" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="mail">Mail</SelectItem>
                </SelectContent>
              </Select> */}
                <Grid size={{ xs: 10 }}>
                  <Autocomplete<Schema>
                    name="ContactInfo"
                    options={contactInfoQuery.data}
                    loading={contactInfoQuery.isLoading}
                    textFieldProps={{ label: "Contact Info" }}
                    onOptionSelect={handleOptionSelect}
                  />
                </Grid>
              </div>
            </div>
          </div>

          {/* Property Location Section */}
          <div>
            <h2 className="text-xl font-medium mb-4">
              Where is your property located?
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* <Input
                name="address1"
                placeholder="Property Address / PO Box"
                value={formData.address1}
                onChange={handleInputChange}
                className="w-full border-gray-300"
              /> */}
                {/* <Input
                name="address2"
                placeholder="Property Address Line 2"
                value={formData.address2}
                onChange={handleInputChange}
                className="w-full border-gray-300"
              /> */}
                <TextField<any>
                  name="PropertyAddress"
                  label={"Property Address / PO Box"}
                />
                <TextField<any>
                  name="PropertyAddressLine2"
                  label={"Property Address Line 2"}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-4">
                  {/* <Input
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border-gray-300"
                /> */}
                  <TextField<any> name="City" label={"City"} />
                </div>
                <div className="md:col-span-4">
                  {/* <Input
                  name="province"
                  placeholder="Province"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="w-full border-gray-300"
                /> */}
                  <TextField<any> name="Province" label={"Province"} />
                </div>
                <div className="md:col-span-4">
                  {/* <Input
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full border-gray-300"
                /> */}
                  <TextField<any> name="Country" label={"Country"} />
                </div>
              </div>

              <div className="md:w-1/3">
                {/* <Input
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full border-gray-300"
              /> */}
                <TextField<any> name="PostalCode" label={"Postal Code"} />
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="lastName" label={d.lastName} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <DatePicker<Schema>
          name="dateOfBirth"
          label={d.dateOfBirth}
          maxDate={calculatePastDate(18)}
          minDate={calculatePastDate(100)}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="email" label={d.email} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="phoneNumber"
          label={d.phoneNumber}
          format="phoneNumber"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="socialSecurityNumber"
          label={d.socialSecurityNumber}
          format="socialSecurity"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="state"
          options={statesQuery.data}
          loading={statesQuery.isLoading}
          textFieldProps={{ label: d.state }}
          onOptionSelect={handleOptionSelect}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        {!!state && (
          <Autocomplete<Schema>
            name="city"
            options={citiesQuery.data}
            loading={citiesQuery.isLoading}
            textFieldProps={{ label: d.city }}
          />
        )}
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="streetAddress"
          label={d.streetAddress}
          multiline
          maxRows={4}
        />
      </Grid> */}
    </>
  );
};

type ProviderProps = { readOnly?: boolean };
export const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();

  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<any> = (data) => {
    console.log("🚀 ~ Provider ~ data:", data);
    updateFormData(data as any);
    navigate("/landlord/leases-builder/property-time");
  };

  const methods = useForm();

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleError: SubmitErrorHandler<any> = (errors) => {
    console.log("🚀 ~ Provider ~ errors:", errors);
  };

  return (
    <Form
      submitButtonText={"Save and Continue"}
      slotProps={{
        submitButtonProps: { startIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData as any}
      defaultValues={defaultValues}
      onError={handleError}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={"Personal Info"}
    >
      <Page />
    </Form>
  );
};

export { Provider as PropertyInformation };
