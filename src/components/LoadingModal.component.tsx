import {
  Stack,
  Text
} from "@mantine/core";
import React from "react";
import Loading from "./Loading.component";
import Modal from "./MyModal.component";

interface ILoadingModalProps {
  opened: boolean;
  title?: string;
  description?: string;
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  noButtonLabel?: string;
  yesButtonLabel?: string;
  canBeClosed?: boolean;
  setOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingModal = ({
  opened,
  description = "Dalam proses penyelesaian, silahkan tunggu..",
  setOpened=()=>{}
}: ILoadingModalProps) => {
  return (
    <Modal
      opened={opened}
      setOpened={setOpened}
      title={"Dalam Proses"}
      onClose={() => {}}
    >
      <Stack>
        <div className={`py-10`}>
          <Loading color="dark-purple" />
        </div>
        <Text className="text-lg text-secondary-text-500">{description}</Text>
      </Stack>
    </Modal>
  );
};

export default LoadingModal;
