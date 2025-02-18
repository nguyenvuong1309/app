import PATH from "../config/path";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAppSelector } from "../store_new";
import api from "../utils/api";
import { ReactNode } from "react";

interface Props {
  element: ReactNode;
}

export const ProtectedRoute = (props: Props): any => {
  const { element } = props;
  const { user } = useAuth0();
  const { ACCESS_TOKEN: access_token, REFRESH_TOKEN: refresh_token } =
    useAppSelector((state: any) => state.auth);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const refreshToken = async () => {
    const refreshToken = refresh_token ?? localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post("/token/refresh", {
        refresh: refreshToken,
      });
      if (res.data.status === "success") {
        localStorage.setItem(ACCESS_TOKEN, res.data.data.access_token);
        localStorage.setItem(REFRESH_TOKEN, res.data.data.refresh_token);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.log("🚀 ~ refreshToken ~ error:", error);
      setIsAuthorized(false);
    }
  };

  const auth = async () => {
    // await refreshToken();
    const token = access_token ?? localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      return;
    }
    let decoded;
    try {
      decoded = jwtDecode(token);
    } catch (error) {
      setIsAuthorized(false);
      return;
    }
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration && tokenExpiration < now) {
      await refreshToken();
    } else {
      setIsAuthorized(true);
    }
  };

  const auth0 = async () => {
    if (user) {
      setIsAuthorized(true);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      await auth();
      await auth0();
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  if (user) {
    localStorage.setItem("localUserData", JSON.stringify(user));
  }
  const localUserData = localStorage.getItem("localUserData");
  let isLoggedIn = !!localUserData || !!user || !!isAuthorized;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isLoggedIn) {
    return element;
  } else {
    return <Navigate to={PATH.LOGIN} />;
  }
};
