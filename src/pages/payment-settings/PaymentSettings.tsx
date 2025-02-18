import { useState } from "react";
import { CreditCard, Mail, Globe, Tag, Wallet } from "lucide-react";
import { Button } from "./components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/Card";
import { Input } from "./components/ui/Input";
import { Label } from "./components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/Select";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { usePlanStore } from "../../store_new/payment/usePlanStore";
import { ACCESS_TOKEN } from "../../utils";

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLIC_KEY as string
);

export default function PaymentSettings() {
  const { total, subtotal, coupon, isCouponApplied, plan } = usePlanStore();
  const [cardType, setCardType] = useState("visa");

  const handlePayment = async () => {
    const stripe = await stripePromise;

    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/api/stripe/create-checkout-session/`,
      {
        products: plan,
        couponCode: coupon ? coupon.code : null,
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
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold m-6">Payment Settings</h1>
      <Card className="w-full max-w-2xl mx-auto border border-black">
        <CardHeader>
          <CardTitle className="text-3xl">Payment Settings</CardTitle>
          <CardDescription className="text-lg">
            Manage your payment information and preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg">
              Email
            </Label>
            <div className="flex">
              <Mail className="w-5 h-5 mr-2 mt-3 text-gray-500" />
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="text-lg"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardNumber" className="text-lg">
              Card Number
            </Label>
            <div className="flex">
              <CreditCard className="w-7 h-6 mr-2 mt-3 text-gray-500" />
              <Input
                id="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                className="text-lg flex-grow"
              />
              <div className="ml-2 ring-1 ring-black rounded-md">
                <Select value={cardType} onValueChange={setCardType}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Card Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-black">
                    <SelectItem value="visa">
                      <div className="flex items-center">
                        <Wallet className="w-4 h-4 mr-2" />
                        Visa
                      </div>
                    </SelectItem>
                    <SelectItem value="mastercard">
                      <div className="flex items-center">
                        <Wallet className="w-4 h-4 mr-2" />
                        Mastercard
                      </div>
                    </SelectItem>
                    <SelectItem value="amex">
                      <div className="flex items-center">
                        <Wallet className="w-4 h-4 mr-2" />
                        American Express
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate" className="text-lg">
                Expiry Date
              </Label>
              <Input
                id="expiryDate"
                type="text"
                placeholder="MM/YY"
                className="text-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc" className="text-lg">
                CVC
              </Label>
              <Input
                id="cvc"
                type="text"
                placeholder="123"
                className="text-lg"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="nameOnCard" className="text-lg">
              Name on Card
            </Label>
            <Input
              id="nameOnCard"
              type="text"
              placeholder="John Doe"
              className="text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="text-lg">
              Country/Region
            </Label>
            <div className="flex ">
              <Globe className="w-5 h-5 mr-2 mt-3 text-gray-500" />
              <div className="ml-2 ring-1 ring-black rounded-md w-full">
                <Select>
                  <SelectTrigger id="country" className="text-lg">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-black">
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="couponCode" className="text-lg">
              Coupon Code
            </Label>
            <div className="flex">
              <Tag className="w-5 h-5 mr-2 mt-3 text-gray-500" />
              <Input
                id="couponCode"
                type="text"
                placeholder="Enter coupon code"
                className="text-lg ml-2"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handlePayment}
            className="w-full text-lg transition-all duration-200 ease-in-out bg-black text-white hover:bg-primary/90 hover:scale-105 rounded-sm"
          >
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
