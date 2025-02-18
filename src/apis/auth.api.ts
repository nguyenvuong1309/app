import { toast } from "react-toastify";
import { handleError } from "../utils/functions";
import { http } from "../http";

const fetchSignUp = async (registerData: any) => {
  try {
    const { data, status } = await http.post(`auth/signup`, registerData);
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};

const fetchLogin = async (loginData: any) => {
  try {
    const res = await http.post(`auth/login/`, loginData);
    return res;
  } catch (error) {
    return handleError(error);
  }
};

const fetchVerifySignUp = async (otp: string) => {
  try {
    const formData = { otp: otp };
    const response = await http.post(`auth/verify-email`, formData);
    return response;
  } catch (error) {
    return handleError(error);
  }
};

const fetchForgetPassword = async (emailData: any) => {
  try {
    const { data, status } = await http.post(`auth/password-reset/`, emailData);
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};

const fetchResetPassword = async (dataBody: any) => {
  try {
    const { data, status } = await http.put(`auth/reset-password/`, dataBody);
    return { data, status };
  } catch (error) {
    return handleError(error);
  }
};

const fetchTenantRegister = async (registerData: any) => {
  try {
    const res = await http.post(`tenant/register/`, registerData);

    if (res.data.success) {
      toast.info(res.data.message, {
        theme: "colored",
      });

      return res.data;
    }

    return null;
  } catch (error) {
    return handleError(error);
  }
};

const fetchTenantLogin = async (loginData: any) => {
  try {
    const res = await http.post(`tenant/login/`, loginData);
    return res;
  } catch (error) {
    return handleError(error);
  }
};

export {
  fetchForgetPassword,
  fetchLogin,
  fetchResetPassword,
  fetchSignUp,
  fetchTenantLogin,
  fetchTenantRegister,
  fetchVerifySignUp,
};
