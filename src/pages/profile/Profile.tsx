import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { MessageCircle, MoreHorizontal, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PATH from "../../config/path";
import { Navbar } from "../../../src/components/layout/HomeLayout/components/Navbar";
import { useAppSelector } from "../../store_new";
import { USER } from "../../utils";
import { UserProfile } from "../editprofile/UserProfile.type";
import { HomeHeaderBar } from "../../layout/HomeHeaderBar";

export const ProfilePage: React.FC = () => {
  const user = useAppSelector((state: any) => state.auth.user);
  const [userData, setUserData] = useState<UserProfile | null>(null);

  const navigate = useNavigate();
  useEffect(() => {
    const userDataLocal: UserProfile = JSON.parse(
      localStorage.getItem(USER) || "{}"
    );
    setUserData(userDataLocal);
  }, []);
  return (
    <div className="flex min-h-screen w-screen flex-col">
      <div className="h-20 w-full" />
      <div className="flex flex-1 flex-col">
        <HomeHeaderBar />
        <div className="max-w-2xl mx-auto p-6 min-w-[600px]">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-teal-700">Profile</h1>
            <Button
              variant="outline"
              className="text-teal-600 border-teal-600 rounded-sm"
              onClick={() => navigate(PATH.EDIT_PROFILE)}
            >
              Edit Profile
            </Button>
          </div>
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img src="https://github.com/shadcn.png" alt="Profile avatar" />
            </div>
            <h2 className="text-2xl font-bold mb-1">{userData?.username}</h2>
            <p className="text-gray-600 mb-4">{userData?.type}</p>

            <div className="flex gap-3">
              <Button className="bg-teal-600 hover:bg-teal-700">
                <Plus className="w-4 h-4 mr-2" />
                Connect
              </Button>
              <Button variant="outline" className="border-gray-300">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
              </Button>
              <Button variant="outline" className="border-gray-300">
                <MoreHorizontal className="w-4 h-4" />
                More
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">About</h3>

            <div className="flex items-start space-x-3">
              <div className="mt-1 p-2 bg-gray-100 rounded-md">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="9" r="2.5" strokeWidth="2" />
                </svg>
              </div>
              <p className="text-gray-600">{userData?.address}</p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="mt-1 p-2 bg-gray-100 rounded-md">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="2"
                    strokeWidth="2"
                  />
                  <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" />
                </svg>
              </div>
              <p className="text-gray-600">{userData?.addition_details}</p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="mt-1 p-2 bg-gray-100 rounded-md">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 20.5c4.5 0 8-3.5 8-8s-3.5-8-8-8-8 3.5-8 8 3.5 8 8 8z"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 15.5c2.5 0 4.5-2 4.5-4.5S14.5 6.5 12 6.5 7.5 8.5 7.5 11s2 4.5 4.5 4.5z"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="text-gray-600">Speaks English, Mandarin, Spanish</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
