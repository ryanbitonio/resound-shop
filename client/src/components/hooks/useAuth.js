import ApiClient from "@/services/api-client";
import { useSuspenseQuery } from "@tanstack/react-query";


const apiClient = new ApiClient("/api/user/verify");

// Google Auth
const useAuth = () => {
  return useSuspenseQuery({
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    queryKey: ["user"],
    queryFn: apiClient.getAll,
    retry: 1,
  });
};

export default useAuth;
