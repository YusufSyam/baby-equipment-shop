import { Group, Text } from "@mantine/core";
import React from "react";

export interface ICatalogSortItem {
  isActive?: boolean;
}

export const CatalogSortItem: React.FC<ICatalogSortItem> = ({
  isActive = false
}) => {
  return (
    <Text className={`${isActive ? "bg-darker-orange text-white" : "bg-white"} px-6 py-2 rounded-sm cursor-pointer`}>
      Terkait
    </Text>
  );
};

export interface ICatalogSort {}

const CatalogSort: React.FC<ICatalogSort> = ({}) => {
  return (
    <Group>
      <CatalogSortItem isActive />
      <CatalogSortItem />
      <CatalogSortItem />
    </Group>
  );
};
export default CatalogSort;
