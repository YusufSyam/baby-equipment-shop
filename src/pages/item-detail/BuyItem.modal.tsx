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
import { IPostNewCart } from "../../utils/query/cartsQuery";
import { UseMutationResult, useQueryClient } from "react-query";

export interface IBuyItemModal {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  itemName?: string;
  category?: string;
  price: number;
  postCartMutation: UseMutationResult<any, unknown, IPostNewCart, unknown>;
  itemId: string;
}

const BuyItemModal: React.FC<IBuyItemModal> = ({
  opened,
  setOpened,
  itemName = "Nama Item",
  category,
  price,
  postCartMutation,
  itemId
}) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [buyQuantity, setBuyQuantity] = useState(1);
  
  const queryClient = useQueryClient();

  const theme = useMantineTheme();

  useEffect(() => {
    setTotalPrice(price * buyQuantity);
  }, [buyQuantity, price]);

  useEffect(() => {
    if (opened) {
      setBuyQuantity(1);
    }
  }, [opened]);

  function handleOrder() {
    postCartMutation.mutate({ itemId: itemId, quantity: buyQuantity });
    
    // WhatsappMessageOpenInNewTab(
    //   SELLER_WHATSAPP_NUMBER,
    //   generateWhatsappTemplate(
    //     "[buyerName]",
    //     "[invoiceId]",
    //     itemName,
    //     price,
    //     buyQuantity,
    //     totalPrice
    //   )
    // );
    setOpened(false)
  }
  return (
    <ConfirmationModal
      opened={opened}
      setOpened={setOpened}
      title={"Tambahkan ke Keranjang"}
      subTitle={`Membeli ${itemName}, tentukan kuantitas pembelian dan harga sebelum membeli`}
      onClose={() => {}}
      minWidth={700}
      yesButtonLabel="Konfirmasi"
      onSubmit={handleOrder}
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
        
      </Stack>
    </ConfirmationModal>
  );
};
export default BuyItemModal;
