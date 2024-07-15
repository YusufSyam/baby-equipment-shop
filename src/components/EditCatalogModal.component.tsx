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

export interface IEditCatalogModal {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  itemName: string;
  image: string;
  category: string;
  isAvailable: string;
  price: number;
  description: string;
  itemId: string;
}

export interface IEditCatalogItemInterfaces {
  itemName: string;
  price: number;
  category: string;
  isAvailable: boolean;
  description: string;
  image: File;
}

export const EditCatalogItemSchema = yup.object({
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

const EditCatalogModal: React.FC<IEditCatalogModal> = ({
  opened,
  setOpened,
  category,
  description,
  image,
  isAvailable,
  itemId,
  itemName,
  price
}) => {
  const form = useForm<IEditCatalogItemInterfaces>({
    validate: yupResolver(EditCatalogItemSchema)
  });

  const { getInputProps, errors, values, reset } = form;

  console.log('Ini valueaaaa2', values)

  useEffect(()=>{
    if(!opened){
      reset()
    }
  }, [opened])

  return (
    <ConfirmationModal
      opened={opened}
      setOpened={setOpened}
      title={"Edit Data Perlengkapan"}
      onClose={() => {}}
      yesButtonLabel="Edit"
      minWidth={800}
    >
      <Stack className="mb-4">
        <Group grow>
          <MyTextInput
            label="Nama Perlengkapan"
            size="md"
            placeholder="Masukkan nama perlengkapan bayi"
            {...getInputProps("itemName")}
            error={errors["itemName" as keyof IEditCatalogItemInterfaces]}
            defaultValue={itemName}
            required
          />
          <MyNumberInput
            label="Harga Barang (RP)"
            size="md"
            placeholder="Masukkan harga perlengkapan"
            {...getInputProps("price")}
            error={errors["price" as keyof IEditCatalogItemInterfaces]}
            defaultValue={price}
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
              // "pakaian", "makanan & minuman", "alat bayi"
              label: "Pakaian",
              value: "pakaian"
            },
            {
              label: "Makanan & minuman",
              value: "makanan & minuman"
            },
            {
              label: "alat bayi",
              value: "Alat bayi"
            },
          ]}
          {...getInputProps("category")}
          error={errors["category" as keyof IEditCatalogItemInterfaces]}
          defaultValue={category}
          required
          clearable
        />

        <Radio.Group
          name="Ketersediaan Barang"
          label="Ketersediaan Barang"
          {...getInputProps("isAvailable")}
          error={errors["isAvailable" as keyof IEditCatalogItemInterfaces]}
          defaultValue={isAvailable}
          withAsterisk
        >
          <Group mt="xs">
            <Radio color="green.5" value={"tersedia"} label="Tersedia" />
            <Radio color="red.5" value="tidak tersedia" label="Tidak Tersedia" />
          </Group>
        </Radio.Group>

        <MyTextAreaInput
          label="Deskripsi"
          size="md"
          placeholder="Masukkan deskripsi perlengkapan bayi"
          {...getInputProps("description")}
          error={errors["description" as keyof IEditCatalogItemInterfaces]}
          defaultValue={description}
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
          //   errors[`${"image" as keyof IEditCatalogItemInterfaces}.name`]
          // }

          {...getInputProps("image")}
          error={errors["image" as keyof IEditCatalogItemInterfaces]}
          defaultValue={image}
          maxSize={100_000_000}
        />
      </Stack>
    </ConfirmationModal>
  );
};
export default EditCatalogModal;