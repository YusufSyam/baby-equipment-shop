import { Checkbox, Divider, Group, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import { IconFilterFilled } from "../../assets/icon/Fluent";
import { MySearchInput } from "../../components/FormInput.component";

export interface ICatalogFilter {}

export type TCategoryType = "pakaian" | "makanan & minuman" | "alat bayi";

const CatalogFilter: React.FC<ICatalogFilter> = ({}) => {
  const [category, setCategory] = useState<TCategoryType[]>([]);

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
          <Checkbox.Group
            value={category}
            onChange={(checkedCategories: TCategoryType[])=>{
              setCategory(checkedCategories)
            }}
            color="purple.5"
          >
            <Group mt="xs">
              <Checkbox color="dark-purple.5" value="pakaian" label="Pakaian" />
              <Checkbox
                color="dark-purple.5"
                value="makanan & minuman"
                label="Makanan & minuman"
              />
              <Checkbox
                color="dark-purple.5"
                value="alat bayi"
                label="Alat bayi"
              />
            </Group>
          </Checkbox.Group>
        </Stack>
        <Divider className="mt-4" />
      </Stack>
      <Stack className="gap-2">
        <Text>Harga</Text>
        <Stack>
          {/* <Checkbox.Group value={category} onChange={setCategory}>
            <Group mt="xs">
              <Checkbox value="Pakaian" label="< 10.000" />
              <Checkbox value="Susu" label=">= 10.000 & <25.000" />
              <Checkbox value="Popok" label=">= 25.000 & <50.000" />
              <Checkbox value="XX" label=">= 50.000 & <100.000" />
              <Checkbox value="YY" label=">= 100.000" />
            </Group>
          </Checkbox.Group> */}
        </Stack>
        <Divider className="mt-4" />
      </Stack>
    </Stack>
  );
};
export default CatalogFilter;
