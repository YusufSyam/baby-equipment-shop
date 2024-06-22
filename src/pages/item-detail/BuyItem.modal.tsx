import React from "react";
import ConfirmationModal from "../../components/ConfirmationModal.component";
import { Divider, Group, Stack, Text } from "@mantine/core";
import { MyNumberInput } from "../../components/FormInput.component";

export interface IBuyItemModal {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  itemName?: string;
}

const BuyItemModal: React.FC<IBuyItemModal> = ({
  opened,
  setOpened,
  itemName = "Nama Item"
}) => {
  return (
    <ConfirmationModal
      opened={opened}
      setOpened={setOpened}
      title={"Beli Barang"}
      subTitle={`Membeli ${itemName}, tentukan kuantitas pembelian dan harga sebelum membeli`}
      onClose={() => {}}
      minWidth={700}
      yesButtonLabel="Beli"
    >
      <Stack className="gap-2 my-4">
        <Group>
          <Text className="text-primary-text">Nama Barang :</Text>
          <Text className="text-dark-purple font-semibold">{itemName}</Text>
        </Group>
        <Group>
          <Text className="text-primary-text">Kategori :</Text>
          <Text className="text-dark-purple font-semibold">Kategori</Text>
        </Group>
        <Divider className="mt-2 mb-4" />
        <Group>
          <Text className="text-primary-text">Jumlah Pembelian</Text>
          <MyNumberInput
            size="sm"
            placeholder="Jumlah Beli"
            // {...getInputProps("stock")}
            // error={errors["stock" as keyof IAddNewCatalogItemInterfaces]}
            defaultValue={""}
            min={0}
            required
          />
        </Group>

        <Stack className="gap-1 w-fit mt-2">
          <Text className="text-primary-text font-semibold">Total Harga</Text>
          <Text className="text-white bg-dark-purple px-1 font-semibold text-3xl">Rp. 15.000</Text>
        </Stack>
      </Stack>
    </ConfirmationModal>
  );
};
export default BuyItemModal;
