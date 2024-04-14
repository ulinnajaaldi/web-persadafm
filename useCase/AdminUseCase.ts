import { axiosInstanceToken } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface AdminProps {
  value: string;
  page: number;
  limit: number;
}

export const useGetAdminAll = (props: AdminProps) => {
  const { value, page, limit } = props;

  return useQuery({
    queryKey: ["admin", value, page, limit],
    queryFn: async () => {
      const response = await axiosInstanceToken.get("/v1/api/auth/admin", {
        params: {
          search: value,
          page,
          limit,
        },
      });
      return response.data;
    },
  });
};
