import { AppShell, Button, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import Header from "./Header.layout";
import Footer from "./Footer.layout";
import { IconShoppingTroll } from "../assets/icon/Fluent";
import ConfirmationModal from "../components/ConfirmationModal.component";
import OrderCartModal from "../components/OrderCartModal.component";
// import Header from "./headers/Header.layout";

export type TPageName = "Beranda" | "";

export interface IAppLayout {
  children: JSX.Element;
  activePage?: TPageName;
  headerBackgroundType?: "normal" | "transparent";
}

const AppLayout: React.FC<IAppLayout> = ({
  children,
  activePage,
  headerBackgroundType = "transparent"
}) => {
  const [isOrderModalOpened, setIsOrderModalOpened] = useState(false);
  return (
    <Stack className="">
      <OrderCartModal
        setOpened={setIsOrderModalOpened}
        opened={isOrderModalOpened}
      ></OrderCartModal>

      <Button
        className="z-50 fixed bottom-5 right-8 w-fit bg-dark-purple/75 hover:bg-dark-purple text-white tracking-5 duration-100 rounded-sm"
        size="lg"
        leftIcon={<IconShoppingTroll size={24} color="white" />}
        onClick={() => {
          setIsOrderModalOpened(true);
        }}
      >
        Order Sekarang
      </Button>

      {/* Header */}
      <Header headerBackgroundType={headerBackgroundType} />

      {/* Children */}
      <Stack>{children}</Stack>

      <Footer />
    </Stack>
  );
};
export default AppLayout;
