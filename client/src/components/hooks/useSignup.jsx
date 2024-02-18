import ApiClient from "@/services/api-client";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const apiClient = new ApiClient("/api/user/signup");

const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: values => apiClient.signup(values),
    onSuccess: () => {
      navigate("/signin");
      toast.success("Registered Successfully!", {
        description: "You may now login your account.",
      });
    },
    onError: err => {
      console.error(err);
      toast.error("Email is already taken. Please try another.");
    },
  });
};

export default useSignup;
