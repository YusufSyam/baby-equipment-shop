import { Group, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { IconFacebookOutline, IconInstagram } from "../assets/icon/Fluent";
import { Link } from "react-router-dom";

export interface IFooter {}

const Footer: React.FC<IFooter> = ({}) => {
  const theme = useMantineTheme();
  return (
    <Stack className="bg-secondary/50 border-t border-purple w-full py-6 mt-16 gap-1">
      <Group className="self-center">
        <Text className="text-primary-text font-semibold text-xl">
          Hubungi Kami
        </Text>
        <Group className="gap-2">
          <Link
            to={
              "https://www.facebook.com/share/qWhJ9T3s9sNK3zwu/?mibextid=qi2Omg"
            }
            target="_blank"
          >
            <IconFacebookOutline
              size={28}
              color={theme.colors["dark-purple"][5]}
              className="rounded-full cursor-pointer hover:bg-secondary duration-100"
            />
          </Link>
          <Link
            to={
              "https://www.instagram.com/dzikri_baby_shop?igsh=MXZjNHoxNjViNDZhYw=="
            }
            target="_blank"
          >
            <IconInstagram
              size={28}
              color={theme.colors["dark-purple"][5]}
              className="rounded-full cursor-pointer hover:bg-secondary duration-100"
            />
          </Link>
        </Group>
      </Group>
      <Text className="text-center text-primary-text-500 ">
        &copy; 2024 DzikryBabyshop. All rights reserved.
      </Text>
    </Stack>
  );
};
export default Footer;
