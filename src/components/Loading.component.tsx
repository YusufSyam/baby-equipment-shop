import { Loader, LoaderProps, useMantineTheme } from "@mantine/core";
import React from 'react';

export interface ILoading {
  props?: LoaderProps,
  color?: "red" | "yellow"
}

const Loading : React.FC<ILoading> = ({props, color="red" }) => {
  const theme= useMantineTheme();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader {...props} size={"xl"} variant="dots" color={color=="red"? theme.colors['red'][5] : theme.colors['yellow'][5]} />
    </div>
  );
};

export default Loading;
