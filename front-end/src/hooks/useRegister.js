import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/auth";

export const useRegister = (onSuccess, onError) => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess,
    onError,
  });
}; 