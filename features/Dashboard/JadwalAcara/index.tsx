"use client";

import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useFieldArray } from "react-hook-form";

import AlertDelete from "@/components/common/alert-delete";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { useJadwalAcaraFeature } from "./hook";
import { FaRegTrashCan } from "react-icons/fa6";

const DashboardJadwalAcaraFeatuer = () => {
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
    form,
    handleDelete,
    handleCardClick,
    handleDialogClose,
    handleDialogOpen,
    mutateAdd,
    mutateEdit,
    mutateDelete,
  } = useJadwalAcaraFeature();

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    //@ts-ignore
    name: "events",
  });

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <h1 className="text-xl font-bold">Jadwal Acara</h1>
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
            Tambah Jadwal Acara
          </Button>
        </div>
      </div>

      <Dialog
        open={isDialogOpen}
        onOpenChange={(isOpen) => setIsDialogOpen(isOpen)}
      >
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>{isEdit ? "Edit" : "Tambah"} Jadwal Acara</DialogTitle>
            <DialogDescription>
              {isEdit
                ? "Silahkan edit form berikut."
                : "Silahkan isi form berikut untuk menambahkan Jadwal Acara baru."}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[80vh]">
            <Form {...form}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  isEdit
                    ? // @ts-ignore
                      mutateEdit(form.getValues())
                    : // @ts-ignore
                      mutateAdd(form.getValues());
                }}
                className="grid gap-4 px-3"
              >
                <FormField
                  control={form.control}
                  name="day"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hari</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Hari"
                          className="border-bluePrimary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="grid grid-cols-12 items-start gap-2"
                  >
                    <FormField
                      control={form.control}
                      //@ts-ignore
                      name={`events.${index}.hours`}
                      render={({ field }) => (
                        <FormItem className="col-span-3">
                          <FormLabel>Jam</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="eg 06.00 - 07.00 WIB"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      //@ts-ignore
                      name={`events.${index}.name`}
                      render={({ field }) => (
                        <FormItem className="col-span-5">
                          <FormLabel>Nama Acara</FormLabel>
                          <FormControl>
                            <Input placeholder="Nama Acara" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      //@ts-ignore
                      name={`events.${index}.description`}
                      render={({ field }) => (
                        <FormItem className="col-span-3">
                          <FormLabel>
                            Keterangan{" "}
                            <span className="text-sm">(optional)</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea placeholder="Keterangan" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        remove(index);
                      }}
                      className="col-span-1 mt-2 self-center"
                      size="icon"
                      variant="destructive"
                    >
                      <FaRegTrashCan />
                    </Button>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    append({ hours: "", name: "", description: "" });
                  }}
                >
                  Tambah Jadwal
                </Button>

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
          <p className="text-center text-gray-500">
            Kabar Persada tidak ditemukan
          </p>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 gap-y-5 md:grid-cols-3">
              {data?.data.results.map((item: any) => (
                <div
                  key={item.id}
                  className="group relative flex h-[120px] cursor-pointer items-center justify-center rounded-lg border p-5"
                  onClick={() => {
                    handleCardClick(item);
                  }}
                >
                  <h5 className="text-center text-2xl font-semibold">
                    HARI {item.day}
                  </h5>
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
                    <FaRegTrashCan />
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}
        {selectedItem !== "" && (
          <AlertDelete
            title="Kabar Persada"
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

export default DashboardJadwalAcaraFeatuer;
