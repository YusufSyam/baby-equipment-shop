import {
  Button,
  Grid,
  Group,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import React, { useContext, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  IconCategory,
  IconCheckOutline,
  IconCloseOutline,
  IconLeftArrowRounded
} from "../../assets/icon/Fluent";
import CircleDivider from "../../components/CircleDivider.component";
import EditCatalogModal from "../../components/EditCatalogModal.component";
import LoadingModal from "../../components/LoadingModal.component";
import WarningModal from "../../components/WarningModal.component";
import { AuthContext } from "../../context/AuthContext.context";
import AppLayout from "../../layouts/AppLayout";
import { BASE_URL } from "../../utils/const/api";
import { categoryMap } from "../../utils/const/globalConst";
import { MAINROUTES } from "../../utils/const/routes";
import { toTitleCase } from "../../utils/functions/string";
import { qfAddCart } from "../../utils/query/cartsQuery";
import {
  qfDeleteItem,
  qfEditItem,
  qfFetchItemsById
} from "../../utils/query/itemQuery";
import { ICatalogCard } from "../home/Home-CatalogCard.component";
import BuyItemModal from "./BuyItem.modal";

export interface IItemDetail {}

function formatCatalogItem(beData: any = {}) {
  const imageLinkRaw = beData?.thumbnail?.replace(/^media[\/\\]/, "");
  const imageLink =
    imageLinkRaw !== "" ? `${BASE_URL}/uploaded-file/${imageLinkRaw}` : "";
  const data: ICatalogCard = {
    id: beData?.itemId,
    itemName: beData?.name,
    category: beData?.category,
    price: beData?.price,
    description: beData?.description,
    //  UBAH NANTI
    isAvailable: beData?.stock > 1 ? true : false,
    soldCount: 0,
    image: imageLink
  };

  return data;
}

const ItemDetail: React.FC<IItemDetail> = ({}) => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { userRole } = authContext;

  const { data, isFetching, refetch } = useQuery(
    `fetch-items-by-id`,
    () => qfFetchItemsById(itemId || ""),
    {
      onSuccess(data) {
        setCurrentItem(formatCatalogItem(data?.data || {}));
      }
    }
  );

  const queryClient = useQueryClient();

  const deleteItemMutation = useMutation("delete-Items", qfDeleteItem, {
    onSuccess() {
      queryClient.invalidateQueries("fetch-all-items");
      navigate(MAINROUTES.home);
    }
  });

  const putEditItemMutation = useMutation("put-edit-item", qfEditItem, {
    onSuccess() {
      refetch();
    }
  });

  const postCartMutation = useMutation("post-cart", qfAddCart, {
    onSuccess() {
      refetch();

      queryClient.invalidateQueries("fetch-buyer-carts");
    }
  });

  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { itemId } = useParams();

  console.log("itemId", itemId);

  const [openedEditItemModal, setOpenedEditItemModal] = useState(false);
  const [openedDeleteItemModal, setOpenedDeleteItemModal] = useState(false);

  // const tempAllData = dummyCatalogData;
  const [currentItem, setCurrentItem] = useState<ICatalogCard>(
    formatCatalogItem(data?.data || {})
  );

  // useEffect(() => {
  //   setCurrentItem(
  //     tempAllData?.find((data: ICatalogCard) => {
  //       return data?.id == itemId;
  //     }) || {}
  //   );
  // }, []);

  const [openBuyModal, setOpenBuyModal] = useState(false);
  return (
    <AppLayout headerBackgroundType="normal">
      <Stack className="mb-32">
        <LoadingModal
          opened={
            isFetching ||
            deleteItemMutation?.isLoading ||
            putEditItemMutation?.isLoading ||
            postCartMutation?.isLoading
          }
        />
        <WarningModal
          opened={openedDeleteItemModal}
          setOpened={setOpenedDeleteItemModal}
          title={"Hapus Barang"}
          onClose={() => {}}
          onSubmit={() => {
            deleteItemMutation.mutate(currentItem?.id || "");
          }}
        />

        <EditCatalogModal
          opened={openedEditItemModal}
          setOpened={setOpenedEditItemModal}
          itemId={itemId || ""}
          category={currentItem?.category || ""}
          description={currentItem?.description || ""}
          image={currentItem?.image || ""}
          itemName={currentItem?.itemName || ""}
          price={currentItem?.price || 0}
          isAvailable={
            currentItem?.isAvailable === true
              ? "tersedia"
              : "tidak tersedia" || "tersedia"
          }
          putEditItemMutation={putEditItemMutation}
        />
        <BuyItemModal
          opened={openBuyModal}
          setOpened={setOpenBuyModal}
          price={currentItem?.price || 0}
          category={currentItem?.category}
          itemName={currentItem?.itemName}
          postCartMutation={postCartMutation}
          itemId={currentItem?.id || ""}
        />
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
                <Text className="text-[32px] font-roboto-semibold text-primary-text tracking-5 [text-shadow:_0_2px_18px_rgb(0_0_0_/_30%)]">
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
                      {toTitleCase(
                        categoryMap?.[currentItem?.category || "OTHER"]
                      )}
                    </Text>
                  </Group>
                  <CircleDivider />
                  {/* <Text className="text-primary-text">
                    <span className="font-semibold">
                      {currentItem?.soldCount}{" "}
                    </span>
                    Terjual
                  </Text> 
                  <CircleDivider />*/}
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
              <Group>
                {userRole == "BUYER" && (
                  <Button
                    className="bg-purple hover:bg-light-purple duration-100 mt-4 rounded-sm"
                    // className="bg-darker-orange hover:bg-orange w-1/4 duration-100 mt-4"
                    size="md"
                    disabled={currentItem?.isAvailable === false}
                    onClick={() => {
                      setOpenBuyModal(true);
                    }}
                  >
                    Masukkan ke Keranjang
                  </Button>
                )}
                {userRole == null && (
                  <Button
                    className="bg-purple hover:bg-light-purple duration-100 mt-4 rounded-sm"
                    // className="bg-darker-orange hover:bg-orange w-1/4 duration-100 mt-4"
                    size="md"
                    onClick={() => {
                      navigate(MAINROUTES.login);
                    }}
                  >
                    Log In untuk Membeli
                  </Button>
                )}
                {userRole == "SELLER" && (
                  <Group>
                    <Button
                      className="bg-white hover:bg-white/75 border border-red text-red w-32 duration-100 mt-4 rounded-sm"
                      // className="bg-darker-orange hover:bg-orange w-1/4 duration-100 mt-4"
                      size="md"
                      onClick={() => {
                        setOpenedDeleteItemModal(true);
                      }}
                    >
                      Hapus
                    </Button>
                    <Button
                      className="bg-darker-orange hover:bg-orange w-32 duration-100 mt-4 rounded-sm"
                      // className="bg-darker-orange hover:bg-orange w-1/4 duration-100 mt-4"
                      size="md"
                      onClick={() => {
                        setOpenedEditItemModal(true);
                      }}
                    >
                      Edit
                    </Button>
                  </Group>
                )}
              </Group>
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
