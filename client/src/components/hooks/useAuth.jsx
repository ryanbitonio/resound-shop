import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient("/api/user/verify");

const useAuth = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: apiClient.getAll,
    retry: 1,
  });
};

export default useAuth;
