import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_API;

// Register user
export const register = async (userData: any) => {
  const response = await axios.post(API_URL + "/auth/register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
export const login = async (userData: any) => {
  try {
    const response = await axios.post(API_URL + "/auth/login", userData);

    // if (response.data) {
    //   await localStorage.setItem("user", JSON.stringify(response.data));
    // }

    return response.data;
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    throw error;
  }
};

// Logout user
export const logout = () => {
  localStorage.removeItem("user");
};
