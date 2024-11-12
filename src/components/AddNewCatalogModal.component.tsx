import { Group, Radio, Stack } from "@mantine/core";
import { MIME_TYPES } from "@mantine/dropzone";
import { useForm, yupResolver } from "@mantine/form";
import React, { useEffect } from "react";
import { UseMutationResult, useMutation } from "react-query";
import * as yup from "yup";
import { qfUploadFile } from "../utils/query/files-query";
import { IPostNewItem } from "../utils/query/itemQuery";
import ConfirmationModalForm from "./ConfirmationModalForm.component";
import DocumentInput from "./DocumentInput.component";
import {
  MyNumberInput,
  MySelectInput,
  MyTextAreaInput,
  MyTextInput
} from "./FormInput.component";
import InfoNotification from "./InfoNotification.component";
import LoadingModal from "./LoadingModal.component";

export interface IAddNewCatalogModal {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  postAddItemMutation: UseMutationResult<any, unknown, IPostNewItem, unknown>;
}

export interface IAddNewCatalogItemInterfaces {
  itemName: string;
  price: number;
  category: string;
  isAvailable: string;
  description: string;
  image: File;
}

export const AddNewCatalogItemSchema = yup.object({
  itemName: yup.string().required("Input nama barang terlebih dahulu"),
  category: yup.string().required("Input kategori terlebih dahulu"),
  description: yup.string().required("Input deskripsi terlebih dahulu"),
  isAvailable: yup
    .string()
    .required("Input ketersediaan barang terlebih dahulu"),
  price: yup.number().required("Input harga terlebih dahulu"),
  image: yup
    .mixed()
    .required("Input file gambar terlebih dahulu")
    .test("fileRequired", "Input file gambar terlebih dahulu", (value) => {
      return value && value instanceof File;
    })
});

const AddNewCatalogModal: React.FC<IAddNewCatalogModal> = ({
  opened,
  setOpened,
  postAddItemMutation
}) => {
  const form = useForm<IAddNewCatalogItemInterfaces>({
    validate: yupResolver(AddNewCatalogItemSchema)
  });

  const { getInputProps, errors, values, reset, validate } = form;

  const postFileMutation = useMutation("post-upload-file", qfUploadFile, {
    onSuccess(data) {
      const fileName = data?.data;

      console.log(data, "filename");

      postAddItemMutation.mutate({
        name: values?.itemName,
        stock: values?.isAvailable ? 100000000 : 0,
        price: values?.price,
        category: values?.category,
        description: values?.description || "",
        thumbnail: fileName
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

  const handleAddNewItem = async (event: React.FormEvent) => {
    event.preventDefault();

    const validationResults  = validate();
    if (!validationResults.hasErrors) {
      console.log("FORMFORMFORM SUKSES Form values:", form.values);

      postFileMutation.mutate(values?.image);
    } else {
      console.log("FORMFORMFORM ERROR Validation errors:", validationResults );
    }
  };

  return (
    <ConfirmationModalForm
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
          styles={{
            error: {
              fontSize: "14px",
              marginTop: "4px"
            }
          }}
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
          required
        />

        <DocumentInput
          withDelete
          // {...getInputProps("image")}
          required
          accept={[MIME_TYPES.png, MIME_TYPES.jpeg]}
          label="Gambar"
          placeholder="Upload File (png atau jpg)"
          description="Ekstensi file png, jpeg atau mp4. Ukuran file maksimal 100 MB."
          // error={
          //   errors[`${"image" as keyof IAddNewCatalogItemInterfaces}.name`]
          // }

          {...getInputProps("image")}
          error={errors["image" as keyof IAddNewCatalogItemInterfaces]}
          maxSize={100_000_000}
        />
        <div className="px-2 mt-4 mb-1">

        <InfoNotification
          information="Field dengan tanda (*) wajib diisi"
          iconSize="small"
        />
        </div>
      </Stack>
    </ConfirmationModalForm>
  );
};
export default AddNewCatalogModal;
