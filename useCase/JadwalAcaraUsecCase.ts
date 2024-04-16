import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface JadwalAcaraProps {
  value: string;
}

export const useGetJadwalAcara = (props: JadwalAcaraProps) => {
  const { value } = props;

  return useQuery({
    queryKey: ["jadwal-acara", value],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/api/jadwal-acara", {
        params: {
          search: value,
        },
      });
      return response.data;
    },
  });
};

export const useGetJadwalAcaraDetail = (id: string) => {
  return useQuery({
    queryKey: ["jadwal-acara", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/api/jadwal-acara/${id}`);
      return response.data;
    },
  });
};
