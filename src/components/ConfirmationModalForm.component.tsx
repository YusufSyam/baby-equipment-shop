import { Group, ModalProps, Stack, Text } from "@mantine/core";
import React from "react";
import { SmallButton } from "./MyButton";
import Modal from "./MyModal.component";

interface IConfirmationModalForm {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: string | JSX.Element;
  onSubmit?: (event: React.FormEvent) => void;
  onCloseFunc?: () => void;
  noButtonLabel?: string;
  yesButtonLabel?: string;
  minWidth?: number;
  disableNoButton?: boolean;
  disableYesButton?: boolean;
  subTitle?: string;
  leftTitleIcon?: JSX.Element;
}

const ConfirmationModalForm = ({
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
  disableYesButton = false,
  subTitle = "",
  leftTitleIcon,
  ...props
}: IConfirmationModalForm & ModalProps) => {
  return (
    <Modal
      {...props}
      opened={opened}
      setOpened={setOpened}
      onCloseFunc={onCloseFunc}
      minWidth={minWidth}
      subTitle={subTitle}
      title={
        <Group className="gap-3">
          {leftTitleIcon == null ? <></> : <>{leftTitleIcon}</>}
          <Text className="text-[24px] text-primary-text-500 font-poppins-semibold">
            {title}
          </Text>
        </Group>
      }
    >
      <form onSubmit={onSubmit}>
        <Stack className="relative ">
          {typeof children === "string" ? (
            <Text className="text-lg text-secondary-text-500 ml-[48px]">
              {children}
            </Text>
          ) : (
            <>{children}</>
          )}
          <Group className="self-end gap-4">
            <SmallButton
              className="!text-dark-purple !border-dark-purple !rounded-sm"
              disabled={disableNoButton}
              onClick={() => setOpened(false)}
            >
              {noButtonLabel}
            </SmallButton>
            <SmallButton
              className="!bg-dark-purple !rounded-sm !border-transparent !text-white !hover:bg-darker-500"
              // disabled={value == null}
              disabled={disableYesButton}
              type="submit"
            >
              {yesButtonLabel}
            </SmallButton>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
};

export default ConfirmationModalForm;
