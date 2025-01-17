"use client";

import React from "react";
import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";

import { ROUTES_PATH } from "@/constants/routes";
import { UploadButton } from "@/lib/uploadthings";
import AlertDelete from "@/components/common/alert-delete";
import ActionChangeImage from "@/components/common/action-change-image";
import ActionLivePreview from "@/components/common/action-live-preview";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Card from "./components/card";
import { useGaleriFeature } from "./hook";

const DashboardGaleriFeature = () => {
  const {
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
  } = useGaleriFeature();

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <h1 className="text-xl font-bold">Galeri</h1>
        <div className="grid grid-cols-3 gap-5">
          <div className="relative col-span-2">
            <HiMagnifyingGlass className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <Input
              placeholder="Search"
              className="pl-8"
              defaultValue={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button className="" onClick={handleDialogOpen}>
            Tambah Galeri
          </Button>
        </div>
      </div>

      <Dialog
        open={isDialogOpen}
        onOpenChange={(isOpen) => setIsDialogOpen(isOpen)}
      >
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{isEdit ? "Edit" : "Tambah"} Galeri</DialogTitle>
            <DialogDescription>
              {isEdit
                ? "Silahn edit form berikut."
                : "Silahkan isi form berikut untuk menambahkan Galeri baru."}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[80vh]">
            <Form {...form}>
              <form
                onSubmit={
                  isEdit
                    ? form.handleSubmit(() => mutateEdit())
                    : form.handleSubmit(() => mutateAdd())
                }
                className="grid gap-4 px-3"
              >
                <div>
                  <FormItem>
                    <FormLabel>Images</FormLabel>
                  </FormItem>
                  {images === "" ? (
                    <UploadButton
                      endpoint="imageUploader"
                      onUploadBegin={handleImageUpload}
                      onClientUploadComplete={(res) => {
                        setImages(res[0].url);
                        setIsUpload(false);
                        toast({
                          title: "Image Uploaded",
                          description: "Image has been uploaded successfully",
                        });
                      }}
                      onUploadError={(error: Error) => {
                        toast({
                          title: "Image Upload Failed",
                          description: error.message,
                          variant: "destructive",
                        });
                      }}
                    />
                  ) : (
                    <div className="relative flex justify-center gap-2">
                      <Image
                        src={images || "/images/placeholder.jpg"}
                        alt="Galeri Created Image"
                        priority
                        width={400}
                        height={400}
                      />
                      <div className="flex flex-col gap-2">
                        <ActionChangeImage
                          action={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setImages("");
                          }}
                        />
                        {isEdit && (
                          <ActionLivePreview href={`${ROUTES_PATH.galeri}`} />
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Judul Galeri"
                          className="border-bluePrimary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button variant="secondary" onClick={handleDialogClose}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isPendingAdd || isUpload || isPendingEdit}
                  >
                    {isEdit
                      ? isPendingEdit
                        ? "Loading..."
                        : "Submit Edit"
                      : isPendingAdd
                        ? "Loading..."
                        : "Submit"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <ScrollArea className="h-[82vh] pr-2">
        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : data?.data.results.length === 0 ? (
          <p className="text-center text-gray-500">Galeri tidak ditemukan</p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 gap-y-5 md:grid-cols-3">
              {data?.data.results.map((item: any) => (
                <Card
                  key={item.id}
                  item={item}
                  handleCardClick={handleCardClick}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
            {data?.data.totalPages > 1 && (
              <Pagination className="mt-5 w-full">
                <PaginationContent className="flex w-full justify-between">
                  {data?.data.prevPage !== null && (
                    <PaginationItem>
                      <PaginationPrevious
                        className="cursor-pointer"
                        onClick={handlePrevPage}
                      />
                    </PaginationItem>
                  )}
                  {data?.data.nextPage !== null && (
                    <PaginationItem>
                      <PaginationNext
                        className="cursor-pointer"
                        onClick={handleNextPage}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
        {selectedItem !== "" && (
          <AlertDelete
            title="Galeri"
            isDialogDeleteOpen={isDialogDeleteOpen}
            setIsDialogDeleteOpen={setIsDialogDeleteOpen}
            mutateDelete={mutateDelete}
            isPendingDelete={isPendingDelete}
          />
        )}
      </ScrollArea>
    </div>
  );
};

export default DashboardGaleriFeature;
