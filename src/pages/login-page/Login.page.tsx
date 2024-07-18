import React, { useContext, useEffect, useState } from "react";
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
import { useMutation } from "react-query";
import { AuthContext } from "../../context/AuthContext.context";
import ConfirmationModal from "../../components/ConfirmationModal.component";
import LoadingModal from "../../components/LoadingModal.component";

export interface ILoginPage {}

export interface ILoginInput {
  username: string;
  password: string;
}

const LoginPage: React.FC<ILoginPage> = ({}) => {
  const navigate= useNavigate();
  const form = useForm<ILoginInput>();

  const { getInputProps, errors, values, reset } = form;

  const [isLoggedInSuccessModalOpened, setIsLoggedInSuccessModalOpened] = useState(false)
  

  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { login: loginFunc, logout: logoutFunc, isLoggedIn } = authContext;

  const loginMutation = useMutation("post-login", loginFunc, {
    onSuccess() {
      setIsLoggedInSuccessModalOpened(true)
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
            navigate(MAINROUTES.handleBuyerAccount)
          }}
          onClose={() => {}}
          yesButtonLabel="Konfirmasi"
        >
          <Text className="text-primary-text-500">
            Berhasil masuk sebagai [BUYER/SELLER].
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
        <Stack className="w-1/2 self-center bg-secondary/50 px-8 py-6 rounded-sm">
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
            <Link className="text-dark-purple font-semibold" to={MAINROUTES.register}>register</Link>{" "}
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
