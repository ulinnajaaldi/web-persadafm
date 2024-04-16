"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDebounce } from "use-debounce";

import { axiosInstanceToken } from "@/lib/axios";
import { toast } from "@/components/ui/use-toast";
import { useGetJadwalAcara } from "@/useCase/JadwalAcaraUsecCase";

export const useJadwalAcaraFeature = () => {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isDialogDeleteOpen, setIsDialogDeleteOpen] = useState<boolean>(false);
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState(null as any);
  const [search, setSearch] = useState<string>("");
  const [value] = useDebounce(search, 500);

  const { data, isLoading, refetch } = useGetJadwalAcara({
    value,
  });

  const EventSchema = z.object({
    hours: z.string(),
    name: z.string(),
    description: z.string(),
  });

  const JadwalAcaraSchema = z.object({
    day: z.string(),
    events: z.array(EventSchema),
  });

  const formSchema = z.object({
    jadwalAcara: JadwalAcaraSchema,
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      day: "",
      events: [],
    },
  });

  const { mutate: mutateAdd, isPending: isPendingAdd } = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstanceToken.post(
        "/v1/api/jadwal-acara",
        data,
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: data.message,
      });
      setIsDialogOpen(false);
      form.reset();
      refetch();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response.data.message,
      });
    },
  });

  const { mutate: mutateEdit, isPending: isPendingEdit } = useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstanceToken.put(
        `/v1/api/jadwal-acara/${selectedItem?.id}`,
        data,
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: data.message,
      });
      setIsDialogOpen(false);
      refetch();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response.data.message,
      });
    },
  });

  const { mutate: mutateDelete, isPending: isPendingDelete } = useMutation({
    mutationFn: async () => {
      const response = await axiosInstanceToken.delete(
        `/v1/api/jadwal-acara/${selectedItem?.id}`,
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: data.message,
      });
      setIsDialogDeleteOpen(false);
      refetch();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response.data.message,
      });
    },
  });

  useEffect(() => {
    if (selectedItem) {
      form.reset({
        day: selectedItem.day,
        events: selectedItem.events,
      });
    } else {
      form.reset({
        day: "",
        events: [],
      });
    }
  }, [selectedItem, isEdit, form]);

  const handleDelete = (item: any) => {
    setSelectedItem(item);
    setIsDialogDeleteOpen(true);
  };

  const handleCardClick = (item: any) => {
    setSelectedItem(item);
    setIsEdit(true);
    setIsDialogOpen(true);
  };

  const handleDialogClose = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setSelectedItem(null);
    setIsEdit(false);
    setIsDialogOpen(true);
  };

  return {
    router,
    isDialogOpen,
    isDialogDeleteOpen,
    isLoading,
    isPendingAdd,
    isPendingEdit,
    isPendingDelete,
    isUpload,
    isEdit,
    setSearch,
    setIsUpload,
    setIsDialogOpen,
    setIsDialogDeleteOpen,
    selectedItem,
    search,
    data,
    form,
    handleDelete,
    handleCardClick,
    handleDialogClose,
    handleDialogOpen,
    mutateAdd,
    mutateEdit,
    mutateDelete,
  };
};
