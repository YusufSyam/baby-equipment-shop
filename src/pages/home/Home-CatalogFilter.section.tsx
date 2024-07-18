import { Checkbox, Divider, Group, Radio, Stack, Text, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";
import { IconFilterFilled, IconFilterOutlined } from "../../assets/icon/Fluent";
import { MySearchInput } from "../../components/FormInput.component";

export interface ICatalogFilter {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>)=>void;
  category: TCategoryType[];
  setCategory: React.Dispatch<React.SetStateAction<TCategoryType[]>>;
  filterPrice: TPriceType;
  setFilterPrice: React.Dispatch<React.SetStateAction<TPriceType>>;
  filterAvailability: TAvailabilityType;
  setFilterAvailability: React.Dispatch<
    React.SetStateAction<TAvailabilityType>
  >;
}

export type TCategoryType = "CLOTHES" | "ACCESSORIES" | "OTHER";
export type TPriceType = "0" | "1" | "2" | "3" | "4" | "5";
export type TAvailabilityType = "semua" | "tersedia" | "tidak tersedia";

const CatalogFilter: React.FC<ICatalogFilter> = ({
  onSearch,
  category,
  setCategory,
  filterPrice,
  setFilterPrice,
  filterAvailability,
  setFilterAvailability
}) => {
  const theme= useMantineTheme();
  return (
    <Stack className="gap-8">
      <Group className="gap-2">
        <IconFilterOutlined color={theme.colors['primary-text'][5]} />
        <Text className="text-primary-text-500 font-roboto-semibold">Filter</Text>
      </Group>
      <Stack className="gap-8">
        <Stack className="gap-2 bg-secondary/50 py-2 pb-4 px-4 rounded-sm">
          <Text>Cari</Text>
          <MySearchInput onChange={onSearch} />
        </Stack>
        {/* <Divider className="" /> */}

        <Stack className="gap-2 bg-secondary/50 py-2 pb-4 px-4 rounded-sm">
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
                <Checkbox
                  color="dark-purple.5"
                  value="CLOTHES"
                  label="Pakaian"
                />
                <Checkbox
                  color="dark-purple.5"
                  value="ACCESSORIES"
                  label="Aksesoris Bayi"
                />
                <Checkbox
                  color="dark-purple.5"
                  value="OTHER"
                  label="Lain-lain"
                />
              </Group>
            </Checkbox.Group>
          </Stack>
        </Stack>
        {/* <Divider className="" /> */}
        <Stack className="gap-2 bg-secondary/50 py-2 pb-4 px-4 rounded-sm">
          <Text>Harga</Text>
          <Stack>
            <Radio.Group
              value={filterPrice}
              onChange={(newValue: any) => {
                setFilterPrice(newValue);
              }}
            >
              <Stack mt="xs">
                <Radio color="dark-purple.5" value="0" label="Semua Harga" />
                <Radio color="dark-purple.5" value="1" label="< 50.000" />
                <Radio
                  color="dark-purple.5"
                  value="2"
                  label=">= 50.000 & <100.000"
                />
                <Radio
                  color="dark-purple.5"
                  value="3"
                  label=">= 100.000 & 250.000"
                />
                <Radio
                  color="dark-purple.5"
                  value="4"
                  label=">= 250.000 & <500.000"
                />
                <Radio color="dark-purple.5" value="5" label=">= 500.000" />
              </Stack>
            </Radio.Group>
          </Stack>
        </Stack>
        {/* <Divider className="" /> */}
        <Stack className="gap-2 bg-secondary/50 py-2 pb-4 px-4 rounded-sm">
          <Text>Ketersediaan</Text>
          <Stack>
            <Radio.Group
              value={filterAvailability}
              onChange={(newValue: any) => {
                setFilterAvailability(newValue);
              }}
            >
              <Stack mt="xs">
                <Radio color="dark-purple.5" value="semua" label="Semua" />
                <Radio
                  color="dark-purple.5"
                  value="tersedia"
                  label="Tersedia"
                />
                <Radio
                  color="dark-purple.5"
                  value="tidak tersedia"
                  label="Tidak Tersedia"
                />
              </Stack>
            </Radio.Group>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default CatalogFilter;
