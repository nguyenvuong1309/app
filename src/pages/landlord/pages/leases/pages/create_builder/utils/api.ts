import { AutocompleteOption } from "../components/autocomplete";
import { wait } from "../../../../../../../utils";

const states = [
  {
    label: "Phone",
    value: "Phone",
    ContactInfo: [
      { label: "Phone", value: "Phone" },
      { label: "Email", value: "Email" },
    ],
  },
  {
    label: "Email",
    value: "Email",
    ContactInfo: [
      { label: "Phone", value: "Phone" },
      { label: "Email", value: "Email" },
    ],
  },
];

const getStates = async (): Promise<AutocompleteOption[]> => {
  await wait();
  return states.map((item) => ({
    label: item.label,
    value: item.value,
  }));
};

const getContactInfo = async (state: string): Promise<AutocompleteOption[]> => {
  await wait();

  return (
    states
      .find((item) => item.value === state)
      ?.ContactInfo.map((item) => ({
        label: item.label,
        value: item.value,
      })) ?? []
  );
};

export { getStates, getContactInfo };
