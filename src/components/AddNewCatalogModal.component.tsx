import React, { useEffect } from "react";
import MyModal from "./MyModal.component";
import { Group, Radio, Select, Stack, Textarea } from "@mantine/core";
import {
  MyNumberInput,
  MySelectInput,
  MyTextAreaInput,
  MyTextInput
} from "./FormInput.component";
import ConfirmationModal from "./ConfirmationModal.component";
import DocumentInput from "./DocumentInput.component";
import { MIME_TYPES } from "@mantine/dropzone";
import * as yup from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { UseMutationResult, useMutation } from "react-query";
import LoadingModal from "./LoadingModal.component";
import { qfUploadFile } from "../utils/query/files-query";
import { IPostNewItem } from "../utils/query/itemQuery";

export interface IAddNewCatalogModal {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  postAddItemMutation: UseMutationResult<any, unknown, IPostNewItem, unknown>;
}

export interface IAddNewCatalogItemInterfaces {
  itemName: string;
  price: number;
  category: string;
  isAvailable: boolean;
  description: string;
  image: File;
}

export const AddNewCatalogItemSchema = yup.object({
  itemName: yup.string().required("Input nama barang terlebih dahulu"),
  category: yup.string().required("Input kategori terlebih dahulu"),
  isAvailable: yup
    .string()
    .required("Input ketersediaan barang terlebih dahulu"),
  price: yup.number().required("Input harga terlebih dahulu"),
  image: yup
    .object({
      name: yup.string().required("Input file gambar  terlebih dahulu")
    })
    .nullable()
});

const AddNewCatalogModal: React.FC<IAddNewCatalogModal> = ({
  opened,
  setOpened,
  postAddItemMutation
}) => {
  const form = useForm<IAddNewCatalogItemInterfaces>({
    validate: yupResolver(AddNewCatalogItemSchema)
  });

  const { getInputProps, errors, values, reset, setValues } = form;

  const postFileMutation = useMutation("post-upload-file", qfUploadFile, {
    onSuccess(data) {
      const fileName = data?.data;

      // name: values?.itemName,
      // stock: values?.isAvailable? 100 : 0,
      // price: values?.price,
      // category: values?.category

      postAddItemMutation.mutate({
        name: values?.itemName,
        stock: values?.isAvailable ? 100 : 0,
        price: values?.price,
        category: values?.category,
        description: values?.description || ""
        // thumbnail: fileName,
        // thumbnail: "",
      });
    }
  });

  console.log("Ini valueaaaa", values);

  useEffect(() => {
    if (!opened) {
      reset();
    }
  }, [opened]);

  function handleAddNewItem() {
    postFileMutation.mutate(values?.image);
  }

  return (
    <ConfirmationModal
      opened={opened}
      setOpened={setOpened}
      title={"Tambahkan Perlengkapan Baru"}
      onClose={() => {}}
      yesButtonLabel="Tambah"
      minWidth={800}
      onSubmit={handleAddNewItem}
    >
      <Stack className="mb-4">
        <LoadingModal opened={postAddItemMutation?.isLoading} />
        <Group grow>
          <MyTextInput
            label="Nama Perlengkapan"
            size="md"
            placeholder="Masukkan nama perlengkapan bayi"
            {...getInputProps("itemName")}
            error={errors["itemName" as keyof IAddNewCatalogItemInterfaces]}
            defaultValue={""}
            required
          />
          <MyNumberInput
            label="Harga Barang (RP)"
            size="md"
            placeholder="Masukkan harga perlengkapan"
            {...getInputProps("price")}
            error={errors["price" as keyof IAddNewCatalogItemInterfaces]}
            defaultValue={0}
            min={0}
            // formatter={(price) => `Rp. ${price}`}
            step={1000}
            required
          />
        </Group>

        <MySelectInput
          label="Kategori Perlengkapan"
          size="md"
          placeholder="Pilih kategori barang"
          data={[
            {
              // "CLOTHES", "ACCESSORIES", "OTHER"
              label: "Pakaian",
              value: "CLOTHES"
            },
            {
              label: "Aksesoris Bayi",
              value: "ACCESSORIES"
            },
            {
              value: "OTHER",
              label: "Lain-lain"
            }
          ]}
          {...getInputProps("category")}
          error={errors["category" as keyof IAddNewCatalogItemInterfaces]}
          required
          clearable
        />

        <Radio.Group
          name="Ketersediaan Barang"
          label="Ketersediaan Barang"
          {...getInputProps("isAvailable")}
          error={errors["isAvailable" as keyof IAddNewCatalogItemInterfaces]}
          withAsterisk
        >
          <Group mt="xs">
            <Radio color="green.5" value={"tersedia"} label="Tersedia" />
            <Radio
              color="red.5"
              value="tidak tersedia"
              label="Tidak Tersedia"
            />
          </Group>
        </Radio.Group>

        <MyTextAreaInput
          label="Deskripsi"
          size="md"
          placeholder="Masukkan deskripsi perlengkapan bayi"
          {...getInputProps("description")}
          error={errors["description" as keyof IAddNewCatalogItemInterfaces]}
          defaultValue={""}
        />

        <DocumentInput
          withDelete
          // {...getInputProps("image")}
          required
          accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.mp4]}
          label="Gambar"
          placeholder="Upload File"
          description="Ekstensi file png, jpeg atau mp4. Ukuran file maksimal 100 MB."
          // error={
          //   errors[`${"image" as keyof IAddNewCatalogItemInterfaces}.name`]
          // }

          {...getInputProps("image")}
          error={errors["image" as keyof IAddNewCatalogItemInterfaces]}
          maxSize={100_000_000}
        />
      </Stack>
    </ConfirmationModal>
  );
};
export default AddNewCatalogModal;
