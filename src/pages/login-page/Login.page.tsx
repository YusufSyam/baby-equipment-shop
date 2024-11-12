import { Stack, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import ConfirmationModal from "../../components/ConfirmationModal.component";
import {
  MyPasswordInput,
  MyTextInput
} from "../../components/FormInput.component";
import LoadingModal from "../../components/LoadingModal.component";
import { SmallButton } from "../../components/MyButton";
import { AuthContext } from "../../context/AuthContext.context";
import AppLayout from "../../layouts/AppLayout";
import { MAINROUTES } from "../../utils/const/routes";

export interface ILoginPage {}

export interface ILoginInput {
  username: string;
  password: string;
}

const LoginPage: React.FC<ILoginPage> = ({}) => {
  const navigate = useNavigate();
  const form = useForm<ILoginInput>();

  const { getInputProps, errors, values } = form;

  const [isLoggedInSuccessModalOpened, setIsLoggedInSuccessModalOpened] =
    useState(false);

  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const {
    login: loginFunc,
    userRole
  } = authContext;

  const loginMutation = useMutation("post-login", loginFunc, {
    onSuccess() {
      setIsLoggedInSuccessModalOpened(true);
    }
  });

  console.log(localStorage, "localStorage isLogin");

  function handleLogin() {
    loginMutation.mutate(values);
  }
  return (
    <AppLayout headerBackgroundType="normal">
      <Stack className="gap-10 mb-4">
        <LoadingModal opened={loginMutation?.isLoading} />
        <ConfirmationModal
          opened={isLoggedInSuccessModalOpened}
          setOpened={setIsLoggedInSuccessModalOpened}
          title={"Login Berhasil"}
          onSubmit={() => {
            setIsLoggedInSuccessModalOpened(false);
            
            // navigate(userRole=="BUYER"? MAINROUTES.handleBuyerAccount : MAINROUTES.adminPage);
            navigate(MAINROUTES.home)
          }}
          onClose={() => {}}
          yesButtonLabel="Konfirmasi"
        >
          <Text className="text-primary-text-500">
            Berhasil masuk sebagai {userRole === "BUYER" ? "pembeli" : "admin"}
          </Text>
        </ConfirmationModal>
        <Stack className="gap-0">
          <Text className="text-[32px] text-center font-roboto-semibold text-primary-text tracking-5 [text-shadow:_0_2px_18px_rgb(0_0_0_/_30%)]">
            Log In
          </Text>
          <Text className="text-center text-secondary-text w-1/2 self-center">
            Silahkan Log In terlebih dahulu untuk melakukan transaksi. masukkan
            username dan password yang telah anda daftarkan sebelumnya.
          </Text>
        </Stack>
        <Stack className="lg:w-1/2 sm:w-3/4 self-center bg-secondary/50 px-8 py-6 rounded-sm">
          <MyTextInput
            label="Username"
            size="md"
            placeholder="Masukkan Username"
            {...getInputProps("username")}
            error={errors["username" as keyof ILoginInput]}
          />
          <MyPasswordInput
            label="Password"
            size="md"
            placeholder="Masukkan Password"
            {...getInputProps("password")}
            error={errors["password" as keyof ILoginInput]}
          />

          <Text className="text-secondary-text">
            Belum mempunyai akun? silahkan{" "}
            <Link
              className="text-dark-purple font-semibold"
              to={MAINROUTES.register}
            >
              register
            </Link>{" "}
            terlebih dahulu
          </Text>

          <SmallButton
            className="!bg-dark-purple !rounded-sm !border-transparent !text-white !hover:bg-darker-500 mt-6"
            onClick={handleLogin}
            disabled={values?.password == null || values?.username == null}
          >
            Log In
          </SmallButton>
        </Stack>
      </Stack>
    </AppLayout>
  );
};
export default LoginPage;
