"use client";

import { Bell, ChevronDown, ChevronUp, Heart, Menu } from "lucide-react";
import { Button } from "../../../../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import PATH from "../../../../../../config/path";

export const PaymentHome = () => {
  const navigate = useNavigate();
  const onNavigateToSetupPayment = () => {
    navigate(PATH.LANDLORD_PAYMENT_SETUP);
  };
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

      {/* Payments Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[#4D8B97] text-2xl">Payments</h2>
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

        {/* Oasis Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold underline mb-4">Oasis</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
              <div className="h-12 w-12 rounded-lg bg-[#4D8B97]/10 flex items-center justify-center">
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
              <span className="flex-1 font-medium">8888 Avenue Street NW</span>
              <ChevronUp className="h-5 w-5 text-[#4D8B97]" />
            </div>
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
              <div className="h-12 w-12 rounded-lg bg-[#4D8B97]/10 flex items-center justify-center">
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
              <span className="flex-1 font-medium">1234 Avenue Street NW</span>
              <ChevronDown className="h-5 w-5 text-[#4D8B97]" />
            </div>
          </div>
        </div>

        {/* Promotional Message */}
        <div className="space-y-4">
          <p className="text-gray-700">
            Grow your revenue by setting up E-transfer to accept payments
            quickly, securely and easily.
          </p>
          <Button
            onClick={onNavigateToSetupPayment}
            className="bg-[#4D8B97] hover:bg-[#4D8B97]/90 text-white rounded-md px-6 py-2 text-sm font-medium"
          >
            Set up Payments
          </Button>
        </div>
      </div>
    </div>
  );
};
