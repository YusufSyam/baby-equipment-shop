import { Checkbox, Divider, Group, Radio, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import { IconFilterFilled } from "../../assets/icon/Fluent";
import { MySearchInput } from "../../components/FormInput.component";

export interface ICatalogFilter {
  category: TCategoryType[];
  setCategory: React.Dispatch<React.SetStateAction<TCategoryType[]>>;
  filterPrice: TPriceType;
  setFilterPrice: React.Dispatch<React.SetStateAction<TPriceType>>;
  filterAvailability: TAvailabilityType;
  setFilterAvailability: React.Dispatch<
    React.SetStateAction<TAvailabilityType>
  >;
}

export type TCategoryType = "pakaian" | "makanan & minuman" | "alat bayi";
export type TPriceType = "0" | "1" | "2" | "3" | "4" | "5";
export type TAvailabilityType = "semua" | "tersedia" | "tidak tersedia";

const CatalogFilter: React.FC<ICatalogFilter> = ({
  category,
  setCategory,
  filterPrice,
  setFilterPrice,
  filterAvailability,
  setFilterAvailability
}) => {
  return (
    <Stack className="gap-8">
      <Group>
        <IconFilterFilled />
        <Text>Filter</Text>
      </Group>

      <Stack className="gap-2">
        <Text>Cari</Text>
        <MySearchInput />
        <Divider className="mt-4" />
      </Stack>

      <Stack className="gap-2">
        <Text>Kategori</Text>
        <Stack>
          <Checkbox.Group
            value={category}
            onChange={(checkedCategories: TCategoryType[]) => {
              setCategory(checkedCategories);
            }}
            color="purple.5"
          >
            <Group mt="xs">
              <Checkbox color="dark-purple.5" value="pakaian" label="Pakaian" />
              <Checkbox
                color="dark-purple.5"
                value="makanan & minuman"
                label="Makanan & minuman"
              />
              <Checkbox
                color="dark-purple.5"
                value="alat bayi"
                label="Alat bayi"
              />
            </Group>
          </Checkbox.Group>
        </Stack>
        <Divider className="mt-4" />
      </Stack>
      <Stack className="gap-2">
        <Text>Harga</Text>
        <Stack>
          <Radio.Group
            value={filterPrice}
            onChange={(newValue: any) => {
              setFilterPrice(newValue);
            }}
          >
            <Stack mt="xs">
              <Radio color="purple.5" value="0" label="Semua Harga" />
              <Radio color="purple.5" value="1" label="< 50.000" />
              <Radio color="purple.5" value="2" label=">= 50.000 & <100.000" />
              <Radio color="purple.5" value="3" label=">= 100.000 & 250.000" />
              <Radio color="purple.5" value="4" label=">= 250.000 & <500.000" />
              <Radio color="purple.5" value="5" label=">= 500.000" />
            </Stack>
          </Radio.Group>
        </Stack>
      </Stack>
      <Divider className="mt-4" />
      <Stack className="gap-2">
        <Text>Ketersediaan</Text>
        <Stack>
          <Radio.Group
            value={filterAvailability}
            onChange={(newValue: any) => {
              setFilterAvailability(newValue);
            }}
          >
            <Stack mt="xs">
              <Radio color="light-purple.5" value="semua" label="Semua" />
              <Radio color="light-purple.5" value="tersedia" label="Tersedia" />
              <Radio
                color="light-purple.5"
                value="tidak tersedia"
                label="Tidak Tersedia"
              />
            </Stack>
          </Radio.Group>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default CatalogFilter;
