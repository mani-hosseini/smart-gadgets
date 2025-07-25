import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/auth";

export const useLogin = (onSuccess, onError) => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess,
    onError,
  });
}; 