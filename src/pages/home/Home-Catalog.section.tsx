import { Grid, Group, Stack, Text } from "@mantine/core";
import React from "react";
import CatalogCard from "./Home-CatalogCard.component";
import CatalogFilter from "./Home-CatalogFilter.section";
import CatalogSort from "./Home-CatalogSort.section";

export interface IHomeCatalog {}

const HomeCatalog: React.FC<IHomeCatalog> = ({}) => {
  return (
    <Stack className="gap-8 mt-8 mb-8">
      <Group className="mx-8 justify-between">
        <Stack className="gap-0">
          <Text className="font-roboto-semibold text-primary-text text-[24px]">
            Jelajahi Katalog
          </Text>
          <Text className="text-secondary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          </Text>
        </Stack>

      </Group>
      <Grid className="mx-8" gutter={32} columns={24}>
        <Grid.Col span={5} className="">
          <CatalogFilter />
        </Grid.Col>
        <Grid.Col span={19}>
          <Stack>
            <CatalogSort />
            <Grid gutter={16} className="">
              <Grid.Col span={3}>
                <CatalogCard />
              </Grid.Col>
              <Grid.Col span={3}>
                <CatalogCard />
              </Grid.Col>
              <Grid.Col span={3}>
                <CatalogCard />
              </Grid.Col>
              <Grid.Col span={3}>
                <CatalogCard />
              </Grid.Col>
              <Grid.Col span={3}>
                <CatalogCard />
              </Grid.Col>
              <Grid.Col span={3}>
                <CatalogCard />
              </Grid.Col>
              <Grid.Col span={3}>
                <CatalogCard />
              </Grid.Col>
              <Grid.Col span={3}>
                <CatalogCard />
              </Grid.Col>
              <Grid.Col span={3}>
                <CatalogCard />
              </Grid.Col>
            </Grid>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default HomeCatalog;
