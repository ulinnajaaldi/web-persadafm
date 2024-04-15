import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface GaleriProps {
  value: string;
  page: number;
  limit: number;
}

export const useGetGaleri = (props: GaleriProps) => {
  const { value, page, limit } = props;

  return useQuery({
    queryKey: ["galeri-image", value, page, limit],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/api/galeri-image", {
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

export const useGetGaleriDetail = (id: string) => {
  return useQuery({
    queryKey: ["galeri-image", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/api/galeri-image/${id}`);
      return response.data;
    },
  });
};
