import {
  Button,
  Group,
  ModalProps,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import React from "react";
import { IconReportFilled } from "../assets/icon/Fluent";
import Modal from "./MyModal.component";

interface IWarningModal {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children?: string | JSX.Element;
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCloseFunc?: () => void;
  noButtonLabel?: string;
  yesButtonLabel?: string;
  minWidth?: number;
  disableNoButton?: boolean;
  subTitle?: string;
  leftTitleIcon?: JSX.Element;
}

const WarningModal = ({
  opened,
  setOpened,
  title,
  children = "Data yang telah dihapus tidak dapat dikembalikan.",
  onSubmit,
  noButtonLabel = "Batal",
  yesButtonLabel = "Iya",
  minWidth = 600,
  onCloseFunc = () => {},
  disableNoButton = false,
  subTitle = "",
  leftTitleIcon,
  ...props
}: IWarningModal & ModalProps) => {
  const theme = useMantineTheme();

  return (
    <Modal
      {...props}
      opened={opened}
      setOpened={setOpened}
      onCloseFunc={onCloseFunc}
      minWidth={minWidth}
      subTitle={subTitle}
      title={
        <Group className="gap-3 ">
          {leftTitleIcon == null ? (
            <IconReportFilled
              color={theme.colors["error"][5]}
              size={40}
              className=""
            />
          ) : (
            <>{leftTitleIcon}</>
          )}
          <Text className="text-[24px] text-primary-text-500 font-poppins-semibold">
            {title}
          </Text>
        </Group>
      }
    >
      <Stack className="relative ">
        {typeof children === "string" ? (
          <Text className="text-lg text-primary-text-500 ml-[48px]">
            {children}
          </Text>
        ) : (
          <div className="text-lg text-primary-text-500 ml-[48px]">{children}</div>
        )}
        <Group className="self-end mt-4 gap-6">
          <Button
            className="text-red !border-white bg-white hover:!bg-white rounded-full"
            disabled={disableNoButton}
            onClick={() => setOpened(false)}
            size="md"
          >
            {noButtonLabel}
          </Button>
          <Button
            className="bg-red !border-transparent !text-white rounded-full hover:bg-light-red duration-200"
            // disabled={value == null}
            onClick={onSubmit}
            size="md"
          >
            {yesButtonLabel}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default WarningModal;
