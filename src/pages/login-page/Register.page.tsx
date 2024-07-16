import React, { useEffect, useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import { Button, Stack, Text } from "@mantine/core";
import {
  MyTextInput,
  MyPasswordInput
} from "../../components/FormInput.component";
import { useForm } from "@mantine/form";
import { SmallButton } from "../../components/MyButton";
import { Link } from "react-router-dom";
import { MAINROUTES } from "../../utils/const/routes";
import ConfirmationModal from "../../components/ConfirmationModal.component";

export interface IRegisterPage {}

export interface IRegisterInput {
  username: string;
  password: string;
  rewritePassword: string;
}

const RegisterPage: React.FC<IRegisterPage> = ({}) => {
  const form = useForm<IRegisterInput>();

  const [isRegisterSuccessModalOpened, setIsRegisterSuccessModalOpened] =
    useState(false);

  const { getInputProps, errors, values, reset } = form;

  function handleRegister() {
    // loginMutation.mutate(values);
    setIsRegisterSuccessModalOpened(true);
  }
  return (
    <AppLayout headerBackgroundType="normal">
      <Stack className="gap-10 mb-4">
        <ConfirmationModal
          opened={isRegisterSuccessModalOpened}
          setOpened={setIsRegisterSuccessModalOpened}
          title={"Register Berhasil"}
          onSubmit={() => {
            setIsRegisterSuccessModalOpened(false);
          }}
          onClose={() => {}}
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
              values?.rewritePassword == null
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
