import React, { useEffect, useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import { Button, Stack, Text } from "@mantine/core";
import {
  MyTextInput,
  MyPasswordInput
} from "../../components/FormInput.component";
import { useForm } from "@mantine/form";
import { SmallButton } from "../../components/MyButton";
import { Link, useNavigate } from "react-router-dom";
import { MAINROUTES } from "../../utils/const/routes";
import ConfirmationModal from "../../components/ConfirmationModal.component";
import { qfRegister } from "../../utils/query/userQuery";
import { useMutation } from "react-query";
import LoadingModal from "../../components/LoadingModal.component";
import InfoNotification from "../../components/InfoNotification.component";

export interface IRegisterPage {}

export interface IRegisterInput {
  username: string;
  password: string;
  rewritePassword: string;
  phoneNumber: string;
}

const RegisterPage: React.FC<IRegisterPage> = ({}) => {
  const form = useForm<IRegisterInput>();
  const navigate = useNavigate();

  const [isRegisterSuccessModalOpened, setIsRegisterSuccessModalOpened] =
    useState(false);

  const { getInputProps, errors, values, reset } = form;

  function handleRegister() {
    postRegister.mutate({
      username: values?.username,
      password: values?.password,
      phoneNumber: values?.phoneNumber
    });
  }

  const postRegister = useMutation("post-register-user", qfRegister, {
    onSuccess(data) {
      setIsRegisterSuccessModalOpened(true);
      console.log("dataaaaa", data);
      //   if (data?.status === "success") {
      //     refetch();
      //   } else {
      //     if (data?.error?.code === "E444") {
      //       setErrorMessage(
      //         "Mahasiswa belum terdaftar, silahkan daftarkan mahasiswa terlebih dahulu untuk melanjutkan peminjaman"
      //       );
      //     } else {
      //       setErrorMessage(data?.error?.message || "");
      //     }

      //     setOpenedErrorAddItem(true)
      //   }
    }
  });
  return (
    <AppLayout headerBackgroundType="normal">
      <Stack className="gap-10 mb-4">
        <LoadingModal opened={postRegister?.isLoading} />
        <ConfirmationModal
          opened={isRegisterSuccessModalOpened}
          setOpened={setIsRegisterSuccessModalOpened}
          title={"Register Berhasil"}
          onSubmit={() => {
            reset();
            setIsRegisterSuccessModalOpened(false);
            navigate(MAINROUTES.login);
          }}
          onClose={() => {}}
          yesButtonLabel="Konfirmasi"
        >
          <Text className="text-primary-text-500">
            Register Berhasil, silahkan menuju ke halaman Log In untuk masuk
          </Text>
        </ConfirmationModal>
        <Stack className="gap-0">
          <Text className="text-[32px] text-center font-roboto-semibold text-primary-text tracking-5 [text-shadow:_0_2px_18px_rgb(0_0_0_/_30%)]">
            Register
          </Text>
          <Text className="text-center text-secondary-text w-1/2 self-center">
            Register untuk membuat akun. Silahkan masukkan username dan password
            untuk melanjutkan
          </Text>
        </Stack>
        <Stack className="w-1/2 self-center bg-secondary/50 px-8 py-6 rounded-sm">
          <MyTextInput
            label="Username"
            size="md"
            placeholder="Masukkan Username"
            {...getInputProps("username")}
            error={errors["username" as keyof IRegisterInput]}
          />
          <MyPasswordInput
            label="Password"
            size="md"
            placeholder="Masukkan Password"
            {...getInputProps("password")}
            error={errors["password" as keyof IRegisterInput]}
          />
          <MyPasswordInput
            label="Ketik Ulang Password"
            size="md"
            placeholder="Masukkan Password"
            {...getInputProps("rewritePassword")}
            error={errors["rewritePassword" as keyof IRegisterInput]}
          />
          <MyTextInput
            label="Nomor Whatsapp"
            size="md"
            placeholder="Masukkan Nomor Whatsapp"
            {...getInputProps("phoneNumber")}
            error={errors["phoneNumber" as keyof IRegisterInput]}
          />
          <div className="m-2">

          <InfoNotification information="Masukkan no whatsapp yang diawali dengan kode negara (62). Contoh: 6287712345678" />
          </div>

          <Text className="text-secondary-text">
            Telah mempunyai akun? silahkan{" "}
            <Link
              className="text-dark-purple font-semibold"
              to={MAINROUTES.login}
            >
              Log In
            </Link>{" "}
          </Text>

          <SmallButton
            className="!bg-dark-purple !rounded-sm !border-transparent !text-white !hover:bg-darker-500 mt-6"
            onClick={handleRegister}
            disabled={
              values?.password == null ||
              values?.username == null ||
              values?.rewritePassword == null ||
              values?.password !== values?.rewritePassword ||
              values?.phoneNumber == null
            }
          >
            Register
          </SmallButton>
        </Stack>
      </Stack>
    </AppLayout>
  );
};
export default RegisterPage;
