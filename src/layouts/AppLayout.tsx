import { AppShell, Stack, Text } from "@mantine/core";
import React from "react";
import Header from "./Header.layout";
import Footer from "./Footer.layout";
// import Header from "./headers/Header.layout";

export type TPageName = "Beranda" | "";

export interface IAppLayout {
  children: JSX.Element;
  activePage?: TPageName;
  headerBackgroundType?: 'normal' | 'transparent' 
}

const AppLayout: React.FC<IAppLayout> = ({ children, activePage, headerBackgroundType='transparent' }) => {
  return (
    
    <Stack className="relative">
      {/* Header */}
      <Header headerBackgroundType={headerBackgroundType} />

      {/* Children */}
      <Stack>
        {children}
      </Stack>

      <Footer />
    </Stack>
  );
};
export default AppLayout;
