// @ts-nocheck
import { AppState, Auth0Provider, useAuth0, User } from "@auth0/auth0-react";
import axios from "axios";
import React, { PropsWithChildren } from "react";
import { ACCESS_TOKEN, LANDLORD, REFRESH_TOKEN, TENANT, USER } from "../utils";
import { UserProfile } from "../pages/editprofile/UserProfile.type";
import { TYPE_LANDLORD, TYPE_TENANT } from "../config";

interface Auth0ProviderWithConfigProps {
  children: React.ReactNode;
}

export const Auth0ProviderWithHistory = ({
  children,
}: PropsWithChildren<Auth0ProviderWithConfigProps>): Element | null => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

  const onRedirectCallback = async (appState?: AppState, user?: User) => {
    try {
      const loginResponse = await axios.post(
        process.env.REACT_APP_BACKEND_API + "/api/auth/login/",
        {
          email: user?.email,
          password: user?.sub,
          type: appState?.type,
        }
      );
      if (loginResponse.data.code === 200) {
        window.location.href = "/";
        localStorage.setItem(
          ACCESS_TOKEN,
          loginResponse.data.data.access_token
        );
        localStorage.setItem(
          REFRESH_TOKEN,
          loginResponse.data.data.refresh_token
        );
        localStorage.setItem(
          USER,
          JSON.stringify(loginResponse.data.data.user)
        );
      } else {
        const body = {
          username: user?.given_name || "" + user?.family_name || "",
          password: user?.sub,
          email: user?.email,
          profile_pic: "",
          type: appState?.type,
        };
        const signupResponse = await axios.post(
          process.env.REACT_APP_BACKEND_API + "/api/auth/signup/",
          body
        );

        localStorage.setItem(
          ACCESS_TOKEN,
          signupResponse.data.data.access_token
        );
        localStorage.setItem(
          REFRESH_TOKEN,
          signupResponse.data.data.refresh_token
        );
        localStorage.setItem(
          USER,
          JSON.stringify(signupResponse.data.data.user)
        );
      }
    } catch (error) {
      const body = {
        username: user?.given_name || "" + user?.family_name || "",
        password: user?.sub,
        email: user?.email,
        profile_pic: "",
        type: appState?.type,
      };
      const signupResponse = await axios.post(
        process.env.REACT_APP_BACKEND_API + "/api/auth/signup/",
        body
      );
      localStorage.setItem(USER, JSON.stringify(signupResponse.data.data.user));
      localStorage.setItem(ACCESS_TOKEN, signupResponse.data.data.access_token);

      localStorage.setItem(
        REFRESH_TOKEN,
        signupResponse.data.data.refresh_token
      );

      window.location.href = "/";
    }
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
