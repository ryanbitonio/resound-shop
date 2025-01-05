import ApiClient from "@/services/api-client";
import { useMutation, useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient("/api/user/signup/verify-email");

const useVerifyEmail = () => {
  return useQuery({
    queryKey: ["otp"],
    queryFn: values => apiClient.getAll(values),
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export default useVerifyEmail;
