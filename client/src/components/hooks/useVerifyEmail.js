import ApiClient from "@/services/api-client";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const apiClient = new ApiClient("/api/user/signup/verify-email");

const useVerifyEmail = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: values => apiClient.post(values),
    onSuccess: () => {
      navigate("/signin");
      toast.success("Registered Successfully!", {
        description: "You may now login your account.",
      });
    },
    onError: err => {
      console.error(err);
    },
  });
};

export default useVerifyEmail;
