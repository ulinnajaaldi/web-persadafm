import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface ProgamAcaraProps {
  value: string;
  page: number;
  limit: number;
}

export const useGetProgamAcara = (props: ProgamAcaraProps) => {
  const { value, page, limit } = props;

  return useQuery({
    queryKey: ["progam-acara", value, page, limit],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/api/progam-acara", {
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

export const useGetProgamAcaraDetail = (id: string) => {
  return useQuery({
    queryKey: ["progam-acara", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/api/progam-acara/${id}`);
      return response.data;
    },
  });
};
