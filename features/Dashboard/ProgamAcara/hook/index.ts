"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDebounce } from "use-debounce";

import { axiosInstanceToken } from "@/lib/axios";
import { toast } from "@/components/ui/use-toast";
import { useGetProgamAcara } from "@/useCase/ProgamAcaraUseCase";

export const useProgamAcaraFeature = () => {
  const router = useRouter();
  const [images, setImages] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isDialogDeleteOpen, setIsDialogDeleteOpen] = useState<boolean>(false);
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState(null as any);
  const [page, setPage] = useState<number>(1);
  const [limit, _] = useState<number>(32);
  const [search, setSearch] = useState<string>("");
  const [value] = useDebounce(search, 500);

  const { data, isLoading, refetch } = useGetProgamAcara({
    value,
    page,
    limit,
  });

  const formSchema = z.object({
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    content: z.string().min(2, {
      message: "Content must be at least 2 characters.",
    }),
    time: z.string().min(2, {
      message: "Time must be at least 2 characters.",
    }),
    highlight: z.boolean(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      time: "",
      highlight: false,
    },
  });

  const { mutate: mutateAdd, isPending: isPendingAdd } = useMutation({
    mutationFn: async () => {
      const response = await axiosInstanceToken.post("/v1/api/progam-acara", {
        image: images,
        title: form.getValues("title"),
        content: form.getValues("content"),
        time: form.getValues("time"),
        highlight: form.getValues("highlight"),
      });
      return response.data;
    },
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: data.message,
      });
      setIsDialogOpen(false);
      setImages("");
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
    mutationFn: async () => {
      const response = await axiosInstanceToken.put(
        `/v1/api/progam-acara/${selectedItem?.id}`,
        {
          image: images,
          title: form.getValues("title"),
          content: form.getValues("content"),
          time: form.getValues("time"),
          highlight: form.getValues("highlight"),
        },
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
        `/v1/api/progam-acara/${selectedItem?.id}`,
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
        title: selectedItem.title,
        content: selectedItem.content,
        time: selectedItem.time,
        highlight: selectedItem.highlight,
      });
      setImages(selectedItem.image);
    } else {
      form.reset({
        title: "",
        content: "",
        time: "",
        highlight: false,
      });
      setImages("");
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

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleImageUpload = () => {
    setIsUpload(true);
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
    images,
    form,
    handleDelete,
    handleCardClick,
    handleNextPage,
    handlePrevPage,
    handleImageUpload,
    handleDialogClose,
    handleDialogOpen,
    setImages,
    mutateAdd,
    mutateEdit,
    mutateDelete,
  };
};
