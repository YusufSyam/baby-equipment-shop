import { useMantineTheme, Grid, Text } from "@mantine/core";
import React from "react";
import { IconInformationCircleOutline } from "../assets/icon/Fluent";

export interface IInfoNotification {
  information: string;
  iconSize?: "small" | "medium";
}

const InfoNotification: React.FC<IInfoNotification> = ({
  information,
  iconSize = "medium"
}) => {
  const theme = useMantineTheme();
  return (
    <Grid className="bg-secondary/75 rounded-sm px-2 py-1" columns={24}>
      <Grid.Col span={2}>
        {iconSize === "medium" ? (
          <IconInformationCircleOutline
            color={theme.colors["dark-purple"][5]}
            size={34}
            className="w-full "
          />
        ) : (
          <IconInformationCircleOutline
            color={theme.colors["dark-purple"][5]}
            size={28}
            className="w-full "
          />
        )}
      </Grid.Col>
      <Grid.Col span={22}>
        <Text className="text-dark-purple text-[14px] text-justify">
          {information}
        </Text>
      </Grid.Col>
    </Grid>
  );
};
export default InfoNotification;
