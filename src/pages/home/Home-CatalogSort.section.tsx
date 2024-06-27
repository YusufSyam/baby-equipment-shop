import { Group, Text } from "@mantine/core";
import React, { useState } from "react";

export interface ICatalogSortItem {
  label: string;
  sortType: TSortBy;
  currentShortType?: TSortBy;
  onClick(e:TSortBy): void;
}

export const CatalogSortItem: React.FC<ICatalogSortItem> = ({
  sortType,
  onClick,
  label,
  currentShortType
}) => {
  return (
    <Text
      onClick={()=>{
        onClick(sortType)
      }}
      className={`${
         sortType===currentShortType? "bg-dark-purple text-white border-dark-purple" : "bg-white text-primary-text border-secondary"
      } px-4 py-[6px] rounded-sm cursor-pointer border font-medium shadow-md`}
    >
      {label}
    </Text>
  );
};

export interface ICatalogSort {}

type TSortBy = "price" | "newest" | "alphabet";

const CatalogSort: React.FC<ICatalogSort> = ({}) => {
  const [sortBy, setsortBy] = useState<TSortBy>();

  function onClickSort(type:TSortBy){
    setsortBy(type)
  }
  return (
    <Group>
      {/* <CatalogSortItem onClick={onClickSort} currentShortType={sortBy} sortType="newest" label="Terbaru" /> */}
      <CatalogSortItem onClick={onClickSort} currentShortType={sortBy} sortType="alphabet" label="A - Z"  />
      <CatalogSortItem onClick={onClickSort} currentShortType={sortBy} sortType="price" label="Harga" />
    </Group>
  );
};
export default CatalogSort;
