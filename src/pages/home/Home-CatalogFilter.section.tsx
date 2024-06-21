import { Checkbox, Divider, Group, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import { IconFilterFilled } from "../../assets/icon/Fluent";
import { MySearchInput } from "../../components/FormInput.component";

export interface ICatalogFilter {}

const CatalogFilter: React.FC<ICatalogFilter> = ({}) => {
  const [category, setCategory] = useState<string[]>([]);

  return (
    <Stack className="gap-8">
      <Group>
        <IconFilterFilled />
        <Text>Filter</Text>
      </Group>

      <Stack className="gap-2">
        <Text>Cari</Text>
        <MySearchInput />
        <Divider className="mt-4" />
      </Stack>

      <Stack className="gap-2">
        <Text>Kategori</Text>
        <Stack>
          <Checkbox.Group  value={category} onChange={setCategory}>
            <Group mt="xs">
              <Checkbox value="Pakaian" label="Pakaian" />
              <Checkbox value="Susu" label="Susu" />
              <Checkbox value="Popok" label="Popok" />
              <Checkbox value="XX" label="XX" />
              <Checkbox value="YY" label="YY" />
            </Group>
          </Checkbox.Group>
        </Stack>
        <Divider className="mt-4" />
      </Stack>
      <Stack className="gap-2">
        <Text>Harga</Text>
        <Stack>
          <Checkbox.Group  value={category} onChange={setCategory}>
            <Group mt="xs">
              <Checkbox value="Pakaian" label="< 10.000" />
              <Checkbox value="Susu" label=">= 10.000 & <25.000" />
              <Checkbox value="Popok" label=">= 25.000 & <50.000" />
              <Checkbox value="XX" label=">= 50.000 & <100.000" />
              <Checkbox value="YY" label=">= 100.000" />
            </Group>
          </Checkbox.Group>
        </Stack>
        <Divider className="mt-4" />
      </Stack>
    </Stack>
  );
};
export default CatalogFilter;
