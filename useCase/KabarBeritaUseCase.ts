import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface KabarBeritaProps {
  value: string;
  page: number;
  limit: number;
}

export const useGetKabarBerita = (props: KabarBeritaProps) => {
  const { value, page, limit } = props;

  return useQuery({
    queryKey: ["kabar-berita", value, page, limit],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/api/kabar-berita", {
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

export const useGetKabarBeritaDetail = (id: string) => {
  return useQuery({
    queryKey: ["kabar-berita", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/api/kabar-berita/${id}`);
      return response.data;
    },
  });
};
