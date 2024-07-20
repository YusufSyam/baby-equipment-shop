import React from "react";
import AppLayout from "../../layouts/AppLayout";
import { Stack, Text, useMantineTheme } from "@mantine/core";
import { IconSearchOff } from "../../assets/icon/Fluent";
import { Link } from "react-router-dom";
import { MAINROUTES } from "../../utils/const/routes";

export interface IWrongPage {}

const WrongPage: React.FC<IWrongPage> = ({}) => {
  const theme = useMantineTheme();
  return (
    <AppLayout headerBackgroundType="normal">
      <Stack>
        <Stack className="w-full p-16 pb-20">
          <IconSearchOff
            size={192}
            color={theme.colors["secondary-text"][8]}
            className="self-center"
          />
          <Text className="text-primary-text-500 font-semibold text-3xl text-center">
            Oops! Halaman Hilang
          </Text>
          <Text className="text-primary-text-500 -mt-4 text-center">
            Halaman yang Anda cari tidak ada atau anda tidak mempunyai autorisasi untuk mengakses halaman
          </Text>
          <Text className="text-primary-text-500 -mt-4 text-center">
            Kembali ke <Link to={MAINROUTES.home} className="text-dark-purple font-semibold">beranda</Link>
          </Text>
        </Stack>
      </Stack>
    </AppLayout>
  );
};
export default WrongPage;
