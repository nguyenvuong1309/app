import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu";
import { AlignJustify, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PATH from "../../../../config/path";
import { useAuth0 } from "@auth0/auth0-react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../../utils";

export const UserProfile: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth0();
  const onLogoutPress = () => {
    localStorage.removeItem("localUserData");
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
    navigate(PATH.LOGIN);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-3 border-2 border-[#127782] rounded-full py-1 px-3">
          <AlignJustify className="w-6 h-6 text-gray-500" />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate(PATH.PROFILE)}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate(PATH.PRICE_PLAN)}>
          Price Plan
        </DropdownMenuItem>
        {/* <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Keyboard shortcuts</DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogoutPress}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
