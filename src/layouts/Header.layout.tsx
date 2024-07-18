import { Group, Text } from "@mantine/core";
import React, { useContext, useState } from "react";
import HeaderMenu from "./HeaderMenu.component";
import { MAINROUTES } from "../utils/const/routes";
import { StickerBabyGear2, StickerBabyGear3 } from "../assets/icon/Sticker";
import { IconShoppingTroll } from "../assets/icon/Fluent";
import { AuthContext } from "../context/AuthContext.context";
import { useNavigate } from "react-router-dom";
import WarningModal from "../components/WarningModal.component";

export interface IHeader {
  headerBackgroundType?: "normal" | "transparent";
}

const Header: React.FC<IHeader> = ({
  headerBackgroundType = "transparent"
}) => {
  const navigate = useNavigate();
  const [isLogOutModalOpened, setIsLogOutModalOpened] = useState(false);

  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { login: loginFunc, logout: logoutFunc, isLoggedIn } = authContext;

  function handleLogOut() {
    logoutFunc();

    setIsLogOutModalOpened(false)
    navigate(MAINROUTES.home);
  }

  return (
    <Group
      className={`
    z-10 py-5 px-12
    justify-between
    w-full
    ${
      headerBackgroundType === "transparent"
        ? "absolute"
        : "bg-gradient-to-tl from-purple to-dark-purple shadow-xl drop-shadow-2"
    }`}
    >
      <WarningModal
        title={"Log Out"}
        setOpened={setIsLogOutModalOpened}
        opened={isLogOutModalOpened}
        onClose={() => {}}
        onSubmit={handleLogOut}
        yesButtonLabel="Log Out"
      >
        Anda tidak akan bisa melakukan pembelian jika log out
      </WarningModal>
      <Group className="gap-4">
        <Group className="gap-2">
          <IconShoppingTroll color="white" size={36} className="" />
          <Text className="text-[24px] font-roboto-semibold text-light-purple text-center tracking-5">
            <span className="text-white">Dzikri</span>
            babyshop
          </Text>
        </Group>
        <div className="bg-white h-6 border-l border-white"> </div>
        <HeaderMenu label="Beranda" href={MAINROUTES.home} />
        <HeaderMenu label="Galeri" href="" />
        <HeaderMenu label="Tentang Kami" href="" />
      </Group>
      <Group>
        {isLoggedIn ? (
          <>
            <HeaderMenu label="Halaman Admin" href={MAINROUTES.adminPage} />
            <HeaderMenu label="Akun" href={MAINROUTES.handleBuyerAccount} />
            <HeaderMenu label="|" href={""} />

            <Text
              onClick={() => {
                setIsLogOutModalOpened(true);
              }}
              className="text-white font-medium tracking-5 cursor-pointer"
            >
              Log Out
            </Text>
          </>
        ) : (
          <>
            <HeaderMenu label="Log In" href={MAINROUTES.login} />
          </>
        )}
      </Group>
    </Group>
  );
};
export default Header;
