import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAuth = () => {
  const fetchUser = async () => {
    const { data } = await axios.get("http://localhost:8000/api/user/verify", {
      withCredentials: true,
    });
    return await data;
  };

  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    retry: 1,
  });
};

export default useAuth;
