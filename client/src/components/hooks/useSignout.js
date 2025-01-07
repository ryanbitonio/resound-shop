import ApiClient from "@/services/api-client";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const url = `${
  import.meta.env.VITE_SERVER_URL || "http://localhost:8000"
}/api/user/signout`;

const apiClient = new ApiClient(url);

const useSignout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: values => apiClient.post(values),
    onSuccess: data => {
      localStorage.removeItem("token");
      console.log("data after signout: ", data);
      navigate("/signin");
    },
    onError: err => {
      console.error("An error occurred during logout:", err);
    },
  });
};

export default useSignout;
