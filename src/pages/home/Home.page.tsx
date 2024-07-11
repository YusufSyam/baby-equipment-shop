import React from "react";
import AppLayout from "../../layouts/AppLayout";
import { Stack } from "@mantine/core";
import HomeJumbotron from "./Home-Jumbotron.section";
import HomeCatalog from "./Home-Catalog.section";
import { useScrollIntoView } from "@mantine/hooks";

export interface IHome {}

const Home: React.FC<IHome> = ({}) => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({});

  return (
    <AppLayout activePage="Beranda" headerBackgroundType="transparent">
      <Stack className="">
        <HomeJumbotron scrollIntoView={scrollIntoView} />
        <HomeCatalog targetRef={targetRef} />
      </Stack>
    </AppLayout>
  );
};
export default Home;
