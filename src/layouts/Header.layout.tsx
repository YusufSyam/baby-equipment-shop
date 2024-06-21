import { Group, Text } from "@mantine/core";
import React from "react";
import HeaderMenu from "./HeaderMenu.component";

export interface IHeader {}

const Header: React.FC<IHeader> = ({}) => {
  return (
    <Group className="absolute z-10 py-6 px-8 gap-8">
      <HeaderMenu label="Beranda" href="" />
      <HeaderMenu label="Galeri" href="" />
      <HeaderMenu label="Tentang Kami" href="" />
    </Group>
  );
};
export default Header;
