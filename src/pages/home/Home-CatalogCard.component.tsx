import { Group, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import image from "../../assets/images/dummy7.jpg";
import { useNavigate } from "react-router-dom";
import { IconCheckOutline, IconCloseOutline } from "../../assets/icon/Fluent";
import { toTitleCase } from "../../utils/functions/string";

export interface ICatalogCard {
  id?: string;
  itemName?: string;
  price?: number;
  image?: string;
  isAvailable?: boolean;
  category?: string;
  soldCount?: number;
  description?: string;
}

const CatalogCard: React.FC<ICatalogCard> = ({
  id,
  category,
  image,
  isAvailable,
  itemName,
  price,
  soldCount
}) => {
  const navigate = useNavigate();
  const theme = useMantineTheme();

  return (
    <Stack
      onClick={() => {
        navigate(`item/${id}`);
      }}
      className="bg-white relative border shadow-lg border-secondary gap-0 hover:border-purple cursor-pointer hover:scale-[1.005] duration-200 pb-2"
    >
      <Group className="absolute bg-purple/75 px-2 py-1 left-1 top-1">
        <Text className="text-md font-poppins-semibold text-white">
          {toTitleCase(category)}
        </Text>
      </Group>
      <div className="w-full h-[240px] overflow-hidden">
        <img
          src={image}
          alt="Gambar Item"
          className="w-full h-full object-cover"
        />
      </div>
      <Stack className="py-1 px-3 gap-2">
        <Stack className="gap-[2px]">
          <Text className="text-primary-text">{itemName}</Text>
          {isAvailable ? (
            <Group className="gap-1">
              <Text className="text-sm font-roboto text-green">Tersedia</Text>
              <IconCheckOutline
                color={"white"}
                className="bg-green p-[2px]"
                size={14}
              />
            </Group>
          ) : (
            <Group className="gap-1">
              <Text className="text-sm font-roboto text-error">
                Tidak Tersedia
              </Text>
              <IconCloseOutline
                color={"white"}
                className="bg-error p-[2px]"
                size={14}
              />
            </Group>
          )}
        </Stack>
        <Stack className="gap-0">
          <Text className="font-roboto text-dark-purple">Rp. {price}</Text>
          <Text className="text-md text-secondary-text">
            {soldCount} Terjual
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default CatalogCard;
