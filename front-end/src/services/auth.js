import axiosInstance from "./axiosInstance";

export const registerUser = async (data) => {
  const response = await axiosInstance.post("auth/signup", data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await axiosInstance.post("auth/login", data);
  return response.data;
}; 