import { AppShell, Stack, Text } from "@mantine/core";
import React from "react";
// import Header from "./headers/Header.layout";

export type TPageName = "Beranda" | "";

export interface IAppLayout {
  children: JSX.Element;
  activePage: TPageName;
}

const AppLayout: React.FC<IAppLayout> = ({ children, activePage }) => {
  return (
    
    <Stack>
      {/* Header */}

      {/* Children */}
      <Stack>
        {children}
      </Stack>
    </Stack>
  );
};
export default AppLayout;
