import React, { useEffect, useState } from "react";
import ConfirmationModal from "../../components/ConfirmationModal.component";
import {
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import { MyNumberInput } from "../../components/FormInput.component";
import { WhatsappMessageOpenInNewTab } from "../../utils/functions/misc.function";
import {
  SELLER_WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE_TEMPLATE
} from "../../utils/const/globalConst";
import { generateWhatsappTemplate } from "../../utils/functions/string";
import { IconInformationCircleOutline } from "../../assets/icon/Fluent";
import InfoNotification from "../../components/InfoNotification.component";

export interface IBuyItemModal {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  itemName?: string;
  category?: string;
  price: number;
}

const BuyItemModal: React.FC<IBuyItemModal> = ({
  opened,
  setOpened,
  itemName = "Nama Item",
  category,
  price
}) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [buyQuantity, setBuyQuantity] = useState(1);

  const theme = useMantineTheme();

  useEffect(() => {
    setTotalPrice(price * buyQuantity);
  }, [buyQuantity, price]);

  useEffect(() => {
    if (opened) {
      setBuyQuantity(1);
    }
  }, [opened]);
  return (
    <ConfirmationModal
      opened={opened}
      setOpened={setOpened}
      title={"Beli Barang"}
      subTitle={`Membeli ${itemName}, tentukan kuantitas pembelian dan harga sebelum membeli`}
      onClose={() => {}}
      minWidth={700}
      yesButtonLabel="Beli"
      onSubmit={() => {
        WhatsappMessageOpenInNewTab(
          SELLER_WHATSAPP_NUMBER,
          generateWhatsappTemplate(
            "buyerName",
            "invoiceId",
            itemName,
            price,
            buyQuantity,
            totalPrice
          )
        );
      }}
    >
      <Stack className="gap-2 my-4">
        <Group>
          <Text className="text-primary-text">Nama Barang :</Text>
          <Text className="text-dark-purple font-semibold">{itemName}</Text>
        </Group>
        <Group>
          <Text className="text-primary-text">Kategori :</Text>
          <Text className="text-dark-purple font-semibold">{category}</Text>
        </Group>
        <Divider className="mt-2 mb-4" />
        <Group>
          <Text className="text-primary-text">Jumlah Pembelian</Text>
          <MyNumberInput
            size="sm"
            placeholder="Jumlah Beli"
            // {...getInputProps("stock")}
            // error={errors["stock" as keyof IAddNewCatalogItemInterfaces]}
            onChange={(e: number) => {
              setBuyQuantity(e);
              // console.log('eeeeee', e)
            }}
            defaultValue={1}
            min={1}
            required
          />
        </Group>

        <Stack className="gap-1 w-fit mt-2 mb-6">
          <Text className="text-primary-text font-semibold">Total Harga</Text>
          <Text className="text-white bg-dark-purple px-1 font-semibold text-3xl">
            Rp. {totalPrice}
          </Text>
        </Stack>
        <InfoNotification
          information="Saat menekan tombol 'Beli', maka anda akan diarahkan untuk ke whatsapp
          untuk transaksi lebih lanjut dengan admin. Pastikan nomor whatsapp
          yang anda gunakan pada device sama dengan yang anda daftarkan pada
          akun anda."
        />
      </Stack>
    </ConfirmationModal>
  );
};
export default BuyItemModal;
