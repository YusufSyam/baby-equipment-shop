import React, { useEffect, useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import {
  Button,
  Grid,
  Group,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import {
  IconCategory,
  IconCheckOutline,
  IconCloseOutline,
  IconLeftArrowRounded
} from "../../assets/icon/Fluent";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import CircleDivider from "../../components/CircleDivider.component";
import image from "../../assets/images/dummy7.jpg";
import BuyItemModal from "./BuyItem.modal";
import { dummyCatalogData } from "../../utils/const/dummy";
import { ICatalogCard } from "../home/Home-CatalogCard.component";
import { toTitleCase } from "../../utils/functions/string";

export interface IItemDetail {}

const ItemDetail: React.FC<IItemDetail> = ({}) => {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { itemId } = useParams();

  const tempAllData = dummyCatalogData;
  const [currentItem, setCurrentItem] = useState<ICatalogCard>({});

  useEffect(() => {
    setCurrentItem(
      tempAllData?.find((data: ICatalogCard) => {
        return data?.id == itemId;
      }) || {}
    );
  }, []);

  const [openBuyModal, setOpenBuyModal] = useState(false);
  return (
    <AppLayout headerBackgroundType="normal">
      <Stack className="">
        {itemId}
        <BuyItemModal opened={openBuyModal} setOpened={setOpenBuyModal} />
        <Grid className=" mx-12 mt-4" columns={24}>
          <Grid.Col span={15}>
            <Stack className="gap-6">
              <Stack className="gap-1 border-b border-secondary shadow-md pb-4">
                <Group
                  className="gap-0 cursor-pointer w-fit"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  <IconLeftArrowRounded
                    color={theme.colors["dark-purple"][5]}
                    size={12}
                    className="mt-[2px]"
                  />
                  <Text className="font-semibold text-md text-dark-purple">
                    Kembali
                  </Text>
                </Group>
                <Text className="text-[32px] font-roboto-semibold text-primary-text tracking-5 [text-shadow:_0_4px_18px_rgb(0_0_0_/_40%)]">
                  {currentItem?.itemName}
                </Text>
                <Group className="mt-1 gap-4">
                  <Group className="gap-2">
                    <IconCategory
                      size={24}
                      color={theme.colors["dark-orange"][5]}
                      className=""
                    />
                    <Text className="text-primary-text">
                      {toTitleCase(currentItem?.category)}
                    </Text>
                  </Group>
                  <CircleDivider />
                  <Text className="text-primary-text">
                    <span className="font-semibold">
                      {currentItem?.soldCount}{" "}
                    </span>
                    Terjual
                  </Text>
                  <CircleDivider />
                  {currentItem?.isAvailable ? (
                    <Group className="gap-2">
                      <Text className="text-md font-roboto text-green">
                        Tersedia
                      </Text>
                      <IconCheckOutline
                        color={"white"}
                        className="bg-green p-[2px]"
                        size={16}
                      />
                    </Group>
                  ) : (
                    <Group className="gap-2">
                      <Text className="text-md font-roboto text-error">
                        Tidak Tersedia
                      </Text>
                      <IconCloseOutline
                        color={"white"}
                        className="bg-error p-[2px]"
                        size={16}
                      />
                    </Group>
                  )}
                </Group>
              </Stack>
              <Text className="text-[32px] font-roboto-bold text-dark-purple tracking-5">
                RP. {currentItem?.price}
              </Text>
              <Stack className="gap-1">
                <Text className="text-primary-text font-roboto-semibold">
                  Deskripsi Barang
                </Text>
                <Text className="text-primary-text tracking-4">
                  {currentItem?.description}
                </Text>
              </Stack>
              <Button
                className="bg-purple hover:bg-light-purple w-1/4 duration-100 mt-4"
                // className="bg-darker-orange hover:bg-orange w-1/4 duration-100 mt-4"
                size="md"
                disabled={currentItem?.isAvailable===false}
                onClick={() => {
                  setOpenBuyModal(true);
                }}
              >
                Beli
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={9} className="p-12 pt-4">
            <div className="w-full overflow-hidden border-2 border-dark-purple">
              <img
                src={currentItem?.image}
                alt="Gambar Item"
                className="w-full h-full object-cover"
              />
            </div>
          </Grid.Col>
        </Grid>
      </Stack>
    </AppLayout>
  );
};
export default ItemDetail;
