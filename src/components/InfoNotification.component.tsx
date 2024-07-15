import { useMantineTheme, Grid, Text } from "@mantine/core";
import React from "react";
import { IconInformationCircleOutline } from "../assets/icon/Fluent";

export interface IInfoNotification {
  information: string;
}

const InfoNotification: React.FC<IInfoNotification> = ({information}) => {
  const theme = useMantineTheme();
  return (
    <Grid className="bg-secondary/75 rounded-sm px-2 py-1" columns={24}>
      <Grid.Col span={2}>
        <IconInformationCircleOutline
          color={theme.colors["dark-purple"][5]}
          size={34}
          className="w-full "
        />
      </Grid.Col>
      <Grid.Col span={22}>
        <Text className="text-primary-text-500 text-[14px] text-justify">
          {information}
        </Text>
      </Grid.Col>
    </Grid>
  );
};
export default InfoNotification;
