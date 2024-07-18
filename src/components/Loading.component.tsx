import { Loader, LoaderProps, MantineSize, useMantineTheme } from "@mantine/core";
import React from 'react';

export interface ILoading {
  size?: MantineSize,
  color?: "dark-purple" | "secondary-text"
}

const Loading : React.FC<ILoading> = ({size="xl", color="dark-purple" }) => {
  const theme= useMantineTheme();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader size={size} variant="oval" color={color=="dark-purple"? theme.colors['dark-purple'][5] : theme.colors['secondary-text'][5]} />
    </div>
  );
};

export default Loading;
