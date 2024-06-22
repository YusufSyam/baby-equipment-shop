import { Group, Text } from "@mantine/core";
import React from "react";
import HeaderMenu from "./HeaderMenu.component";
import { MAINROUTES } from "../utils/const/routes";

export interface IHeader {
  headerBackgroundType?: "normal" | "transparent";
}

const Header: React.FC<IHeader> = ({
  headerBackgroundType = "transparent"
}) => {
  return (
    <Group
      className={`
    z-10 py-6 px-8 gap-8
    ${headerBackgroundType === "transparent" ? "absolute" : "bg-gradient-to-tl from-purple to-dark-purple"}`}
    >
      <HeaderMenu label="Beranda" href={MAINROUTES.home} />
      <HeaderMenu label="Galeri" href="" />
      <HeaderMenu label="Tentang Kami" href="" />
    </Group>
  );
};
export default Header;
