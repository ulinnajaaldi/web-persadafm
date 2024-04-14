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
import { Textarea } from "@/components/ui/textarea";
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
  FormDescription,
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
import { Checkbox } from "@/components/ui/checkbox";
import Card from "./components/card";
import { useAdminFeature } from "./hook";
import { FaRegTrashAlt } from "react-icons/fa";

const DashboardManageAdminFeature = () => {
  const {
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
    handleNextPage,
    handlePrevPage,
    handleImageUpload,
    handleDialogClose,
    handleDialogOpen,
    mutateAdd,
    mutateEdit,
    mutateDelete,
  } = useAdminFeature();

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <h1 className="text-xl font-bold">Manage Admin</h1>
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
            Tambah Admin
          </Button>
        </div>
      </div>

      <Dialog
        open={isDialogOpen}
        onOpenChange={(isOpen) => setIsDialogOpen(isOpen)}
      >
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{isEdit ? "Edit" : "Tambah"} Admin</DialogTitle>
            <DialogDescription>
              {isEdit
                ? "Silahkan edit form berikut."
                : "Silahkan isi form berikut untuk menambahkan Admin baru."}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[50vh]">
            <Form {...form}>
              <form
                onSubmit={
                  isEdit
                    ? form.handleSubmit(() => mutateEdit())
                    : form.handleSubmit(() => mutateAdd())
                }
                className="grid gap-4 px-3"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Username"
                          className="border-bluePrimary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          className="border-bluePrimary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {isEdit ? "New Password" : "Password"}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="*********"
                          type="password"
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
        ) : data?.data.length === 0 ? (
          <p className="text-center text-gray-500">Admin tidak ditemukan</p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 gap-y-5 md:grid-cols-4">
              {data?.data.map((item: any) => (
                <div
                  key={item.id}
                  className="group relative cursor-pointer space-y-1 rounded-md border p-2 transition duration-300 ease-in-out hover:shadow-md"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleCardClick(item);
                  }}
                >
                  <h2 className="text-justify text-sm">
                    <span className="font-semibold">Username</span> /{" "}
                    {item.username}
                  </h2>
                  <p className="text-justify text-sm">
                    <span className="font-semibold">Email</span> / {item.email}
                  </p>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={(e) => {
                      e.preventDefault(),
                        e.stopPropagation(),
                        handleDelete(item);
                    }}
                    className="absolute right-2 top-1 z-30 translate-x-3 opacity-0 transition duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <FaRegTrashAlt />
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}
        {selectedItem !== "" && (
          <AlertDelete
            title="Admin"
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

export default DashboardManageAdminFeature;
