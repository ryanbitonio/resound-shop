import ApiClient from "@/services/api-client";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const apiClient = new ApiClient("/api/user/signup");

const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: values => apiClient.post(values),
    onSuccess: () => {
      navigate("/signup/verify-email");
      toast.success("Check your email", {
        description: "We sent you a 6-digit verification code.",
      });
    },
    onError: err => {
      console.error(err);
      toast.error("Email is already taken. Please try another.");
    },
  });
};

export default useSignup;
