import { Loader, LoaderProps, useMantineTheme } from "@mantine/core";
import React from 'react';

export interface ILoading {
  props?: LoaderProps,
  color?: "dark-purple" | "yellow"
}

const Loading : React.FC<ILoading> = ({props, color="dark-purple" }) => {
  const theme= useMantineTheme();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader {...props} size={"xl"} variant="oval" color={color=="dark-purple"? theme.colors['dark-purple'][5] : theme.colors['yellow'][5]} />
    </div>
  );
};

export default Loading;
