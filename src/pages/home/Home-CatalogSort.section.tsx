import { Group, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { IconDownArrowNoTailOutline } from "../../assets/icon/Fluent";

export interface ICatalogSortItem {
  label: string;
  sortType: TSortBy;
  currentShortType?: TSortBy;
  onClick(e: TSortBy): void;
}

export const CatalogSortItem: React.FC<ICatalogSortItem> = ({
  sortType,
  onClick,
  label,
  currentShortType
}) => {
  return (
    <Text
      onClick={() => {
        if (currentShortType === sortType) {
          onClick("no-sort");
        } else {
          onClick(sortType);
        }
      }}
      className={`${
        sortType === currentShortType
          ? "bg-dark-purple text-white border-dark-purple"
          : "bg-white text-primary-text border-secondary"
      } px-4 py-[6px] rounded-sm cursor-pointer border font-medium shadow-md`}
    >
      {label}
    </Text>
  );
};

export interface ICatalogSort {
  sortBy: TSortBy;
  setSortBy: React.Dispatch<React.SetStateAction<TSortBy>>;
}

export type TSortBy = "price" | "newest" | "alphabet" | "no-sort" | "price-desc" | "alphabet-desc";

const CatalogSort: React.FC<ICatalogSort> = ({ setSortBy, sortBy }) => {
  function onClickSort(type: TSortBy) {
    setSortBy(type);
  }

  const theme= useMantineTheme();

  return (
    <Group className="self-end">
      {/* <CatalogSortItem onClick={onClickSort} currentShortType={sortBy} sortType="newest" label="Terbaru" /> */}
      
      <Group className="gap-[10px] mr-1">
        <IconDownArrowNoTailOutline size={15} color={theme.colors['primary-text'][5]} />
        <Text className="text-primary-text-500 font-roboto-semibold">Urutkan</Text>
      </Group>
      <CatalogSortItem
        onClick={onClickSort}
        currentShortType={sortBy}
        sortType="alphabet"
        label="A - Z"
      />
      <CatalogSortItem
        onClick={onClickSort}
        currentShortType={sortBy}
        sortType="price"
        label="Harga"
      />
      <CatalogSortItem
        onClick={onClickSort}
        currentShortType={sortBy}
        sortType="alphabet-desc"
        label="Z - A"
      />
      <CatalogSortItem
        onClick={onClickSort}
        currentShortType={sortBy}
        sortType="price-desc"
        label="Harga (Termahal)"
      />
    </Group>
  );
};
export default CatalogSort;
