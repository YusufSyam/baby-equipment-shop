import { Stack, Text } from "@mantine/core";
import React from "react";

export interface IFooter {}

const Footer: React.FC<IFooter> = ({}) => {
  return (
    <Stack className="bg-secondary/50 border-t border-purple w-full py-6 mt-16">
      <Text className="text-center text-primary-text-500 ">
        &copy; 2024 DzikryBabyshop. All
        rights reserved.
      </Text>
    </Stack>
  );
};
export default Footer;
