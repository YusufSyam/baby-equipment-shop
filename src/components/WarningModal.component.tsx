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
import { SmallButton } from "./MyButton";

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
          <Text className="text-[24px] text-primary-text-500 font-poppins-semibold">
            {title}
          </Text>
        </Group>
      }
    >
      <Stack className="relative ">
        {typeof children === "string" ? (
          <Text className="text-lg text-primary-text-500">
            {children}
          </Text>
        ) : (
          <div className="text-lg text-primary-text-500">{children}</div>
        )}
        <Group className="self-end gap-4">
          <SmallButton
            className="!text-red !border-red !rounded-sm"
            disabled={disableNoButton}
            onClick={() => setOpened(false)}
          >
            {noButtonLabel}
          </SmallButton>
          <SmallButton
            className="!bg-red !rounded-sm !border-transparent !text-white !hover:bg-darker-500"
            // disabled={value == null}
            onClick={onSubmit}
          >
            {yesButtonLabel}
          </SmallButton>
        </Group>
      </Stack>
    </Modal>
  );
};

export default WarningModal;
