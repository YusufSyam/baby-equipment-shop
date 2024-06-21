import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import image from "../../assets/images/dummy7.jpg";

export interface ICatalogCard {}

const CatalogCard: React.FC<ICatalogCard> = ({}) => {
  return (
    <Stack className="relative border shadow-lg border-secondary gap-0 hover:border-purple cursor-pointer hover:scale-[1.005] duration-200 pb-2">
      <Group className="absolute bg-orange/85 px-2 py-1 left-1 top-1">
        <Text className="text-md font-poppins-semibold text-white">
          Pakaian
        </Text>
      </Group>
      <div className="w-full overflow-hidden">
        <img
          src={image}
          alt="Gambar Item"
          className="w-full h-full object-cover"
        />
      </div>
      <Stack className="py-1 px-3">
        <Text className="text-primary-text">Nama Item</Text>
        <Stack className="gap-0">
          <Text className="font-roboto text-dark-purple">Rp. 13.000</Text>
          <Text className="text-md text-secondary-text">15 Terjual</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default CatalogCard;
