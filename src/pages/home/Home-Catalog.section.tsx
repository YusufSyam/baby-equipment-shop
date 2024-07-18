import {
  Button,
  Grid,
  Group,
  Pagination,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import CatalogCard, { ICatalogCard } from "./Home-CatalogCard.component";
import CatalogFilter, {
  TAvailabilityType,
  TCategoryType,
  TPriceType
} from "./Home-CatalogFilter.section";
import CatalogSort, { TSortBy } from "./Home-CatalogSort.section";
import { dummyCatalogData } from "../../utils/const/dummy";
import { number } from "yup";
import { useDebouncedValue } from "@mantine/hooks";
import { IconSearchOff } from "../../assets/icon/Fluent";
import AddNewCatalogModal from "../../components/AddNewCatalogModal.component";
import { useMutation, useQuery } from "react-query";
import { qfAddItem, qfFetchAllItems } from "../../utils/query/itemQuery";
import LoadingModal from "../../components/LoadingModal.component";
import { categoryMap } from "../../utils/const/globalConst";
import Loading from "../../components/Loading.component";

export interface IHomeCatalog {
  targetRef: React.MutableRefObject<any>;
}

function formatCatalogItem(beData: any[] = []) {
  const formatted = beData?.map((d) => {
    // const imageLinkSplit = d?.thumbnail?.split("media\\");
    // const imageLink =
    //   imageLinkSplit.length > 1
    //     ? `${BASE_URL}/uploaded-file/${imageLinkSplit[1]}`
    //     : "";

    const data: ICatalogCard = {
      id: d?.itemId,
      itemName: d?.name,
      category: d?.category,
      price: d?.price,
      description: d?.description,
      //  UBAH NANTI
      isAvailable: d?.stock > 1 ? true : false,
      soldCount: 0
    };

    return data;
  });

  return formatted;
}

const HomeCatalog: React.FC<IHomeCatalog> = ({ targetRef }) => {
  const { data, isFetching, refetch } = useQuery(
    `fetch-all-items`,
    qfFetchAllItems,
    {
      onSuccess(data) {
        setDefaultData(formatCatalogItem(data?.data || []));
      }
    }
  );

  const postAddItemMutation = useMutation("post-add-item", qfAddItem, {
    onSuccess() {
      setOpenedAddItemModal(false);
      refetch();
    }
  });

  const [defaultData, setDefaultData] = useState(
    formatCatalogItem(data?.data || [])
  );
  const theme = useMantineTheme();

  const [openedAddItemModal, setOpenedAddItemModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [query] = useDebouncedValue(searchTerm, 500);

  const [activePage, setActivePage] = useState<number>(1);
  const [pageAmt, setPageAmt] = useState(0);
  const dataPerPageAmt = 20;

  const [sortBy, setSortBy] = useState<TSortBy>("no-sort");

  const [itemList, setItemList] = useState(defaultData);

  console.log("defaultData", itemList);
  const [categoryList, setCategory] = useState<TCategoryType[]>([
    "OTHER",
    "ACCESSORIES",
    "CLOTHES"
  ]);
  const [filterPrice, setFilterPrice] = useState<TPriceType>("0");
  const [filterAvailability, setfilterAvailability] =
    useState<TAvailabilityType>("semua");

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value);
    setActivePage(1);
  }

  useEffect(() => {
    setItemList(defaultData);
  }, [defaultData]);

  useEffect(() => {
    setPageAmt(Math.round(itemList?.length / dataPerPageAmt + 0.4));
  }, [itemList]);

  useEffect(() => {
    const tempItemList = defaultData;

    let filteredItemList: ICatalogCard[] = tempItemList?.filter(
      (item: ICatalogCard) =>
        categoryList.includes(item?.category as TCategoryType)
    );

    if (filterPrice != "0") {
      let minPrice = 0;
      let maxPrice = 1000000000;

      if (filterPrice === "1") {
        maxPrice = 50000;
      } else if (filterPrice === "2") {
        minPrice = 50000;
        maxPrice = 100000;
      } else if (filterPrice === "3") {
        minPrice = 100000;
        maxPrice = 250000;
      } else if (filterPrice === "4") {
        minPrice = 250000;
        maxPrice = 500000;
      } else if (filterPrice === "5") {
        minPrice = 500000;
      }

      filteredItemList = filteredItemList?.filter(
        (item: ICatalogCard) =>
          item.price !== undefined &&
          item?.price >= minPrice &&
          item?.price < maxPrice
      );
    }

    if (filterAvailability !== "semua") {
      if (filterAvailability === "tersedia") {
        filteredItemList = filteredItemList?.filter(
          (item: ICatalogCard) => item.isAvailable === true
        );
      } else {
        filteredItemList = filteredItemList?.filter(
          (item: ICatalogCard) => item.isAvailable === false
        );
      }
    }

    if (sortBy !== "no-sort" && filteredItemList.length > 0) {
      if (sortBy === "alphabet") {
        filteredItemList = filteredItemList
          ?.slice()
          ?.sort((a: ICatalogCard, b: ICatalogCard) =>
            (a.itemName || "").localeCompare(b.itemName || "")
          );
      } else if (sortBy === "price") {
        filteredItemList = filteredItemList
          ?.slice()
          .sort(
            (a: ICatalogCard, b: ICatalogCard) =>
              (a.price || 0) - (b.price || 0)
          );
      } else if (sortBy === "alphabet-desc") {
        filteredItemList = filteredItemList
          ?.slice()
          ?.sort((a: ICatalogCard, b: ICatalogCard) =>
            (b.itemName || "").localeCompare(a.itemName || "")
          );
      } else if (sortBy === "price-desc") {
        filteredItemList = filteredItemList
          ?.slice()
          .sort(
            (a: ICatalogCard, b: ICatalogCard) =>
              (b.price || 0) - (a.price || 0)
          );
      }
    }

    if (query !== "") {
      filteredItemList = filteredItemList?.filter((d: ICatalogCard) =>
        d?.itemName?.toLowerCase()?.includes(query?.toLowerCase())
      );
    }
    setItemList(filteredItemList);
  }, [categoryList, filterPrice, filterAvailability, sortBy, query]);

  return (
    <Stack className="gap-8 mt-8 mb-8">
      <LoadingModal opened={postAddItemMutation?.isLoading} />
      <AddNewCatalogModal
        opened={openedAddItemModal}
        setOpened={setOpenedAddItemModal}
        postAddItemMutation={postAddItemMutation}
      />
      <Group className="mx-8 justify-between self-center mb-4">
        <Stack className="gap-0">
          <Text className="font-roboto-semibold text-primary-text text-[24px] text-center">
            Katalog Dzikribabyshop
          </Text>
          <Text className="text-secondary-text text-center">
            Produk-produk favorit dengan harga terbaik
          </Text>
        </Stack>
      </Group>

      <Button
        onClick={() => {
          setOpenedAddItemModal(true);
        }}
        ref={targetRef}
        className="self-end mx-12 bg-dark-purple hover:bg-dark-purple text-white tracking-5 duration-100 -mt-4 rounded-sm"
        // className="bg-darker-orange hover:bg-orange w-1/4 duration-100 mt-4"
        size="md"
      >
        Tambah Barang Baru
      </Button>
      <Grid className="mx-8" gutter={32} columns={24}>
        <Grid.Col span={5} className="">
          <CatalogFilter
            onSearch={handleSearchChange}
            category={categoryList}
            setCategory={setCategory}
            filterPrice={filterPrice}
            setFilterPrice={setFilterPrice}
            filterAvailability={filterAvailability}
            setFilterAvailability={setfilterAvailability}
          />
        </Grid.Col>
        <Grid.Col span={19}>
          <Stack className="gap-[30px] rounded-sm">
            <CatalogSort setSortBy={setSortBy} sortBy={sortBy} />
            <Grid gutter={24} className=" bg-secondary/50">
              {isFetching ? (
                <div className="w-full py-32">
                  <Loading color="secondary-text" />
                </div>
              ) : (
                <>
                  {itemList?.length <= 0 ? (
                    <Stack className="w-full p-16 pb-20">
                      <IconSearchOff
                        size={192}
                        color={theme.colors["secondary-text"][8]}
                        className="self-center"
                      />
                      <Text className="text-primary-text-500 font-semibold text-3xl text-center">
                        Maaf, produk yang Anda cari tidak ditemukan
                      </Text>
                      <Text className="text-primary-text-500 -mt-4 text-center">
                        Coba kata kunci lain atau telusuri kategori yang lain
                        untuk menemukan produk yang sesuai.
                      </Text>
                    </Stack>
                  ) : (
                    <>
                      {itemList
                        ?.slice(
                          (activePage - 1) * dataPerPageAmt,
                          (activePage - 1) * dataPerPageAmt + dataPerPageAmt
                        )
                        ?.map((item: ICatalogCard, idx: number) => {
                          return (
                            <Grid.Col span={3} key={idx}>
                              <CatalogCard {...item} />
                            </Grid.Col>
                          );
                        })}
                    </>
                  )}
                </>
              )}
            </Grid>
            <Group className="gap-0 self-center mt-2">
              <Pagination
                color={"dark-purple"}
                onChange={(e) => {
                  setActivePage(e);
                }}
                total={pageAmt}
                disabled={pageAmt == 0}
                withEdges
                styles={{
                  control: {
                    color: theme.colors["primary-text"][5],
                    borderRadius: "1px",
                    padding: "16px 14px",
                    fontSize: "16px",
                    fontWeight: "normal",
                    // backgroundColor: theme.colors['white'][5],
                    ":active": {
                      color: theme.colors["white"][5] + " !important"
                    },
                    ":hover": {
                      backgroundColor:
                        theme.colors["dark-purple"][5] + " !important",
                      color: theme.colors["white"][5]
                    },
                    ":disabled": {
                      backgroundColor: theme.colors["secondary"][8]
                    }
                  }
                }}
              />
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default HomeCatalog;
