import { Grid, Group, Stack, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import CatalogCard, { ICatalogCard } from "./Home-CatalogCard.component";
import CatalogFilter, {
  TCategoryType,
  TPriceType
} from "./Home-CatalogFilter.section";
import CatalogSort from "./Home-CatalogSort.section";
import { dummyCatalogData } from "../../utils/const/dummy";
import { number } from "yup";

export interface IHomeCatalog {}

const HomeCatalog: React.FC<IHomeCatalog> = ({}) => {
  const [defaultData, setDefaultData] = useState(dummyCatalogData);

  const [itemList, setItemList] = useState(defaultData);
  const [categoryList, setCategory] = useState<TCategoryType[]>([
    "alat bayi",
    "makanan & minuman",
    "pakaian"
  ]);
  const [filterPrice, setFilterPrice] = useState<TPriceType>("0");
  const [filterAvailability, setfilterAvailability] = useState<string[]>([
    "alat bayi",
    "makanan & minuman",
    "pakaian"
  ]);

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

    setItemList(filteredItemList);
  }, [categoryList, filterPrice]);

  return (
    <Stack className="gap-8 mt-8 mb-8">
      <Group className="mx-8 justify-between">
        <Stack className="gap-0">
          <Text className="font-roboto-semibold text-primary-text text-[24px]">
            Jelajahi Katalog
          </Text>
          <Text className="text-secondary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          </Text>
        </Stack>
      </Group>
      <Grid className="mx-8" gutter={32} columns={24}>
        <Grid.Col span={5} className="">
          <CatalogFilter
            category={categoryList}
            setCategory={setCategory}
            filterPrice={filterPrice}
            setFilterPrice={setFilterPrice}
          />
        </Grid.Col>
        <Grid.Col span={19}>
          <Stack>
            <CatalogSort />
            <Grid gutter={16} className="">
              {itemList?.map((item: ICatalogCard, idx: number) => {
                return (
                  <Grid.Col span={3} key={idx}>
                    <CatalogCard {...item} />
                  </Grid.Col>
                );
              })}
            </Grid>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default HomeCatalog;
