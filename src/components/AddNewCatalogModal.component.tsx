import React from "react";
import MyModal from "./MyModal.component";
import { Group, Radio, Select, Stack, Textarea } from "@mantine/core";
import { MyNumberInput, MyTextInput } from "./FormInput.component";
import ConfirmationModal from "./ConfirmationModal.component";

export interface IAddNewCatalogModal {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNewCatalogModal: React.FC<IAddNewCatalogModal> = ({
  opened,
  setOpened
}) => {
  return (
    <ConfirmationModal
      opened={opened}
      setOpened={setOpened}
      title={"Tambahkan Perlengkapan Baru"}
      onClose={() => {}}
      yesButtonLabel="Tambah"
      minWidth={600}
    >
      <Stack className="mb-4">
        <Group grow>
          <MyTextInput
            label="Nama Barang"
            size="md"
            placeholder="Masukkan nama perlengkapan bayi"
            defaultValue={""}
            required
          />
          <MyNumberInput
            label="Harga Barang"
            size="md"
            placeholder="Masukkan harga perlengkapan bayi"
            defaultValue={""}
            min={0}
            required
          />
        </Group>

        <Select
          label="Kategori Perlengkapan"
          placeholder="Pilih kategori barang"
          data={["pakaian", "makanan & minuman", "alat bayi"]}
        />

        <Radio.Group
          name="Ketersediaan Barang"
          label="Ketersediaan Barang"
          withAsterisk
        >
          <Group mt="xs">
            <Radio value="react" label="Tersedia" />
            <Radio value="svelte" label="Tidak Tersedia" />
          </Group>
        </Radio.Group>

        <Textarea
          label="Deskripsi"
          size="md"
          placeholder="Masukkan deskripsi perlengkapan bayi"
          defaultValue={""}
          required
        />
      </Stack>
    </ConfirmationModal>
  );
};
export default AddNewCatalogModal;
