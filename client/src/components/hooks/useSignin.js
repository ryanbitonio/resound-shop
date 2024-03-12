import ApiClient from "@/services/api-client";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const apiClient = new ApiClient("/api/user/signin");

const useSignin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: values => apiClient.post(values),
    onSuccess: data => {
      navigate("/");

      if (data && data.token) {
        localStorage.setItem("token", data.token);
      }
    },
    onError: err => {
      localStorage.removeItem("token");
      if (err.response && err.response.status === 401) {
        toast.error("The verification strategy is not valid for this account.");
      } else {
        toast.error("Couldn't find your account.");
      }
    },
  });
};

export default useSignin;
