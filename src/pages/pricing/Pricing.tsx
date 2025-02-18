import { Check } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ACCESS_TOKEN } from "../../utils/Constants";
import { HomeHeaderBar } from "../../layout/HomeHeaderBar";

interface PricingFeature {
  name: string;
  standard: boolean | string;
  pro: boolean | string;
  premium: boolean | string;
}

interface PricingCategory {
  name: string;
  features: PricingFeature[];
}

type Plan = "standard" | "pro" | "premium";

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLIC_KEY as string
);

const pricePlanList = [
  {
    _id: 1,
    name: "standard",
    image: "https://github.com/shadcn.png",
    quantity: 1,
    price: 15,
  },
  {
    _id: 2,
    name: "pro",
    image: "https://github.com/shadcn.png",
    quantity: 1,
    price: 20,
  },
  {
    _id: 3,
    name: "premium",
    image: "https://github.com/shadcn.png",
    quantity: 1,
    price: 25,
  },
];

export const Pricing = () => {
  const pricingData: PricingCategory[] = [
    {
      name: "Rental Advertising",
      features: [
        {
          name: "Oasis Listings",
          standard: "Up to 2",
          pro: "Up to 5",
          premium: "Up to 8",
        },
      ],
    },
    {
      name: "Application & Screening",
      features: [
        {
          name: "Viewing Appointments",
          standard: true,
          pro: true,
          premium: true,
        },
        {
          name: "Online Rental Applications",
          standard: true,
          pro: true,
          premium: true,
        },
      ],
    },
    {
      name: "Landlord Toolbox",
      features: [
        {
          name: "Landlord Form Pack",
          standard: false,
          pro: false,
          premium: true,
        },
        {
          name: "Maintenance Request",
          standard: false,
          pro: false,
          premium: true,
        },
        {
          name: 'Landlord\'s "My Profile"',
          standard: true,
          pro: true,
          premium: true,
        },
      ],
    },
  ];

  const [couponCode, setCouponCode] = useState("");
  const navigate = useNavigate();

  const handlePayment = (pricePlan: any) => async () => {
    const stripe = await stripePromise;

    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/api/stripe/create-checkout-session/`,
      {
        products: [pricePlan],
        couponCode: couponCode ? couponCode : null,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
        },
      }
    );

    const session = res.data;
    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });

    if (result?.error) {
      console.log("🚀 ~ handlePayment ~ result?.error:", result?.error);
    }
  };

  return (
    <div className="flex min-h-screen w-screen">
      <div className="flex flex-1 flex-col">
        <HomeHeaderBar />
        <div className="w-full max-w-7xl mx-auto p-20">
          <div className="flex justify-start items-start text-start text-2xl font-bold pb-5">
            Everything you need to professionally manage your rental property
          </div>
          <div className="grid grid-cols-4 gap-0.5">
            <div className="bg-transparent p-6" />{" "}
            <div className="bg-[#e0e0e0] p-6 relative rounded-t-[10px] overflow-hidden">
              <h3 className="text-2xl font-bold text-center">STANDARD</h3>
              <p className="text-center text-[#f16f6f] text-3xl font-semibold mt-2">
                $15/month
              </p>
            </div>
            <div className="bg-[#e0e0e0] p-6 relative rounded-t-[10px] overflow-hidden">
              <h3 className="text-2xl font-bold text-center">PRO</h3>
              <p className="text-center text-[#f16f6f] text-3xl font-semibold mt-2">
                $20/month
              </p>
            </div>
            <div className="bg-[#e0e0e0] p-6 relative rounded-t-[10px] overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-3 py-1 rounded-bl">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-center">PREMIUM</h3>
              <p className="text-center text-[#f16f6f] text-3xl font-semibold mt-2">
                $25/month
              </p>
            </div>
          </div>

          {pricingData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="grid grid-cols-4 gap-0.5 rounded-lg">
                <div className="bg-teal-600/20 p-4">
                  <h4 className="font-semibold text-gray-800">
                    {category.name}
                  </h4>
                </div>
                <div className="bg-teal-600/20 p-4" />
                <div className="bg-teal-600/20 p-4" />
                <div className="bg-teal-600/20 p-4" />
              </div>

              {category.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="grid grid-cols-4 gap-0.5">
                  <div className="bg-white p-4">
                    <span>{feature.name}</span>
                  </div>
                  <div className="bg-[#e0e0e0] p-4 flex justify-center items-center">
                    {typeof feature.standard === "string" ? (
                      feature.standard
                    ) : feature.standard ? (
                      <div className="flex justify-center items-center w-6 h-6 bg-[#128782] rounded-full">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    ) : null}
                  </div>
                  <div className="bg-[#e0e0e0] p-4 flex justify-center items-center">
                    {typeof feature.pro === "string" ? (
                      feature.pro
                    ) : feature.pro ? (
                      <div className="flex justify-center items-center w-6 h-6 bg-[#128782] rounded-full">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    ) : null}
                  </div>
                  <div className="bg-[#e0e0e0] p-4 flex justify-center items-center">
                    {typeof feature.premium === "string" ? (
                      feature.premium
                    ) : feature.premium ? (
                      <div className="flex justify-center items-center w-6 h-6 bg-[#128782] rounded-full">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="grid grid-cols-4 gap-0.5">
            <div className="p-4" />
            <div className="p-4 bg-[#e0e0e0] rounded-b-[10px] overflow-hidden">
              <Button
                onClick={handlePayment(pricePlanList[0])}
                className="w-full bg-[#127782] hover:bg-[#128782] text-white font-semibold"
              >
                Get Started
              </Button>
            </div>
            <div className="p-4 bg-[#e0e0e0] rounded-b-[10px] overflow-hidden">
              <Button
                onClick={handlePayment(pricePlanList[1])}
                className="w-full bg-[#127782] hover:bg-[#128782] text-white font-semibold"
              >
                Get Started
              </Button>
            </div>
            <div className="p-4 bg-[#e0e0e0] rounded-b-[10px] overflow-hidden">
              <Button
                onClick={handlePayment(pricePlanList[2])}
                className="w-full bg-[#127782] hover:bg-[#128782] text-white font-semibold"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
