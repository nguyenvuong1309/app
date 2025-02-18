"use client";

import { Bell, ChevronRight, Heart, Menu } from "lucide-react";
import { Button } from "../../../../../../components/ui/button";
import { Checkbox } from "../../../../../../components/ui/checkbox";
import { useState, useEffect } from "react";

interface ExpenseItem {
  fixed: number;
  variable: number;
}

interface Property {
  id: string;
  address: string;
  expenses: ExpenseItem;
}

export const ExpensesHome = () => {
  const properties: Property[] = [
    {
      id: "1",
      address: "1234 Avenue Street NW",
      expenses: { fixed: 425.0, variable: 323.99 },
    },
    {
      id: "2",
      address: "5678 Avenue Street NW",
      expenses: { fixed: 425.0, variable: 323.99 },
    },
    {
      id: "3",
      address: "1234 Avenue Street NW",
      expenses: { fixed: 425.0, variable: 323.99 },
    },
    {
      id: "4",
      address: "5678 Avenue Street NW",
      expenses: { fixed: 425.0, variable: 323.99 },
    },
  ];

  // State for checkboxes
  const [selectedProperties, setSelectedProperties] = useState<Set<string>>(
    new Set()
  );
  const [selectAll, setSelectAll] = useState(false);

  // Handle select all change
  const handleSelectAllChange = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedProperties(new Set(properties.map((p) => p.id)));
    } else {
      setSelectedProperties(new Set());
    }
  };

  // Handle individual checkbox change
  const handlePropertySelect = (propertyId: string, checked: boolean) => {
    const newSelected = new Set(selectedProperties);
    if (checked) {
      newSelected.add(propertyId);
    } else {
      newSelected.delete(propertyId);
    }
    setSelectedProperties(newSelected);
  };

  // Update select all state when individual selections change
  useEffect(() => {
    setSelectAll(selectedProperties.size === properties.length);
  }, [selectedProperties]);

  const totalExpenses = properties.reduce(
    (sum, property) =>
      sum + property.expenses.fixed + property.expenses.variable,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Financials</h1>
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-rose-400" />
          <Bell className="h-6 w-6 text-gray-600" />
          <div className="flex items-center gap-2 bg-white rounded-full border border-[#4D8B97] px-3 py-1.5">
            <Menu className="h-5 w-5" />
            <div className="h-8 w-8 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Expenses Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[#4D8B97] text-2xl">Expenses</h2>
          <div className="bg-gray-200 rounded-full p-1">
            <div className="flex gap-1">
              <button className="px-4 py-1.5 rounded-full bg-white text-sm font-medium">
                All
              </button>
              <button className="px-4 py-1.5 rounded-full text-sm font-medium">
                Active
              </button>
              <button className="px-4 py-1.5 rounded-full text-sm font-medium">
                Past
              </button>
              <button className="px-4 py-1.5 rounded-full text-sm font-medium">
                Archived
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-500">
              Expenses - Total
            </div>
            <div className="text-3xl font-bold text-[#4D8B97]">
              ${totalExpenses.toFixed(2)}
            </div>
          </div>
          <Button className="bg-[#4D8B97] hover:bg-[#4D8B97]/90">
            + Add Expense
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Checkbox
              id="selectAll"
              checked={selectAll}
              onCheckedChange={(checked: boolean) =>
                handleSelectAllChange(checked)
              }
            />
            <label
              htmlFor="selectAll"
              className="text-sm font-medium cursor-pointer"
            >
              Select All
            </label>
          </div>

          {properties.map((property) => (
            <div key={property.id} className="space-y-2">
              <div className="flex items-center gap-3">
                <Checkbox
                  id={property.id}
                  checked={selectedProperties.has(property.id)}
                  onCheckedChange={(checked: boolean) =>
                    handlePropertySelect(property.id, checked)
                  }
                />
                <div className="h-10 w-10 rounded-lg bg-[#4D8B97]/10 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 21H21M6 18V9.99998M10 18V9.99998M14 18V9.99998M18 18V9.99998M21 9.99998L12 3L3 9.99998H21Z"
                      stroke="#4D8B97"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-medium flex-1">{property.address}</span>
              </div>
              <div className="ml-16 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Fixed Expenses</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#4D8B97] font-medium">
                      ${property.expenses.fixed.toFixed(2)}
                    </span>
                    <ChevronRight className="h-4 w-4 text-[#4D8B97]" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Variable Expenses</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#4D8B97] font-medium">
                      ${property.expenses.variable.toFixed(2)}
                    </span>
                    <ChevronRight className="h-4 w-4 text-[#4D8B97]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
