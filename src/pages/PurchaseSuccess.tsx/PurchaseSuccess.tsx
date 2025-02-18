import { Navbar } from "../../components/layout/HomeLayout/components/Navbar";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Printer } from "lucide-react";

interface ReceiptProps {
  companyName?: string;
  companyAddress?: string;
  companyCity?: string;
  customerName?: string;
  customerAddress?: string;
  customerCity?: string;
  amount?: number;
  gstRate?: number;
}

export const PurchaseSuccess: React.FC = ({
  companyName = "LuxOasis",
  companyAddress = "123 Company Street",
  companyCity = "Edmonton AB  T1A 2B3",
  customerName = "Customer Name",
  customerAddress = "123 Company Street",
  customerCity = "Edmonton AB  T1A 2B3",
  amount = 25.0,
  gstRate = 0.05,
}: ReceiptProps) => {
  const receiptRef = useRef<HTMLDivElement>(null);
  const gst = amount * gstRate;
  const total = amount + gst;

  const handlePrint = () => {
    if (receiptRef.current) {
      const printContents = receiptRef.current.innerHTML;
      const originalContents = document.body.innerHTML;

      document.body.innerHTML = `
        <style>
          @media print {
            body {
              padding: 0;
              margin: 0;
            }
            .no-print {
              display: none !important;
            }
            .print-content {
              max-width: 100%;
              border: 2px solid #0d9488;
              border-radius: 1.5rem;
              padding: 1.5rem;
              margin: 0;
            }
          }
        </style>
        <div class="print-content">${printContents}</div>
      `;

      window.print();
      document.body.innerHTML = originalContents;
    }
  };

  return (
    <Card
      ref={receiptRef}
      className="max-w-2xl mx-auto p-6 rounded-3xl border-teal-600 border-2"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 no-print">
          <Button variant="ghost" size="icon" className="text-teal-600">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-teal-600 rounded-full" />
            <span className="text-xl font-semibold">{companyName}</span>
          </div>
        </div>

        {/* Subscription Status */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">You are subscribed to Premium</h1>
          <div className="text-right">
            <div className="text-2xl font-bold text-teal-600">
              CAD ${amount.toFixed(2)}
            </div>
            <div className="text-sm text-gray-500">per month</div>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="grid grid-cols-2 gap-8 p-6 bg-gray-50 rounded-lg">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-6 w-6 bg-teal-600 rounded-full" />
              <span className="font-semibold">{companyName}</span>
            </div>
            <div>{companyAddress}</div>
            <div>{companyCity}</div>
          </div>
          <div>
            <div className="font-semibold mb-2">Invoice for:</div>
            <div>{customerName}</div>
            <div>{customerAddress}</div>
            <div>{customerCity}</div>
          </div>
        </div>

        {/* Description and Total */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="font-bold mb-4">Description</div>
            <div>{companyName} Premium Membership</div>
          </div>
          <div>
            <div className="font-bold mb-4">Total</div>
            <div>${amount.toFixed(2)}</div>
          </div>
        </div>

        {/* Calculations */}
        <div className="space-y-2 text-right">
          <div>Subtotal: ${amount.toFixed(2)}</div>
          <div>
            GST ({gstRate * 100}%): ${gst.toFixed(2)}
          </div>
          <div className="font-bold">TOTAL: ${total.toFixed(2)}</div>
        </div>

        {/* Terms */}
        <div className="space-y-2">
          <div className="font-bold">Terms and Conditions:</div>
          <div className="text-sm text-gray-600">
            Made payable 1st of the month, will be prorated if initiated after
            the 1st of the month.
          </div>
        </div>

        {/* Print Button */}
        <div className="flex justify-center no-print">
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white px-8"
            onClick={handlePrint}
          >
            <Printer className="mr-2 h-4 w-4" />
            Print receipt
          </Button>
        </div>
      </div>
    </Card>
  );
};
