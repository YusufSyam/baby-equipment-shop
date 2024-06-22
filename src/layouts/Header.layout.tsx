import { Group, Text } from "@mantine/core";
import React from "react";
import HeaderMenu from "./HeaderMenu.component";
import { MAINROUTES } from "../utils/const/routes";
import { StickerBabyGear2, StickerBabyGear3 } from "../assets/icon/Sticker";
import { IconShoppingTroll } from "../assets/icon/Fluent";

export interface IHeader {
  headerBackgroundType?: "normal" | "transparent";
}

const Header: React.FC<IHeader> = ({
  headerBackgroundType = "transparent"
}) => {
  return (
    <Group
      className={`
    z-10 py-5 px-12
    justify-between
    ${
      headerBackgroundType === "transparent"
        ? "absolute"
        : "bg-gradient-to-tl from-purple to-dark-purple shadow-xl drop-shadow-2"
    }`}
    >
      <Group className="gap-4">
        <Group className="gap-2">
          <IconShoppingTroll color="white" size={36} className="" />
          <Text className="text-[24px] font-roboto-semibold text-light-purple text-center tracking-5">
            <span className="text-white">Dzikri</span>
            babyshop
          </Text>
        </Group>
        <div className="bg-white h-6 border-l border-white"> </div>
        <HeaderMenu label="Beranda" href={MAINROUTES.home} />
        <HeaderMenu label="Galeri" href="" />
        <HeaderMenu label="Tentang Kami" href="" />
      </Group>
    </Group>
  );
};
export default Header;
