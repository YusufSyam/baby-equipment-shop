import { AppShell, Button, Stack, Text } from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import Header from "./Header.layout";
import Footer from "./Footer.layout";
import { IconShoppingTroll } from "../assets/icon/Fluent";
import ConfirmationModal from "../components/ConfirmationModal.component";
import OrderCartModal from "../components/OrderCartModal.component";
import { useQuery } from "react-query";
import { qfFetchBuyerCarts, qfFetchSellerCarts } from "../utils/query/cartsQuery";
import { AuthContext } from "../context/AuthContext.context";
// import Header from "./headers/Header.layout";

export type TPageName = "Beranda" | "";

export interface IAppLayout {
  children: JSX.Element;
  activePage?: TPageName;
  headerBackgroundType?: "normal" | "transparent";
}

const AppLayout: React.FC<IAppLayout> = ({
  children,
  activePage,
  headerBackgroundType = "transparent"
}) => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { userRole } = authContext;

  const [isOrderModalOpened, setIsOrderModalOpened] = useState(false);

  const [cartList, setCartList] = useState<any[]>([]);
  const [shouldFetchBuyerCarts, setShouldFetchBuyerCarts] = useState(false);
  const [shouldFetchSellerCarts, setShouldFetchSellerCarts] = useState(false);

  const { data, isFetching, refetch } = useQuery(
    `fetch-buyer-carts`,
    qfFetchBuyerCarts,
    {
      enabled: shouldFetchBuyerCarts,
      onSuccess(data) {
        console.log("TERFETCH");
        setCartList(data?.data?.filter((cart:any)=> cart.status==='INPROCESS'));
      }
    }
  );

  const { data:dataSellerCarts, isFetching:isFetchingSellerCarts, refetch:refetchSellerCarts, } = useQuery(
    `fetch-seller-carts`,
    qfFetchSellerCarts,
    {
      enabled: shouldFetchSellerCarts,
      onSuccess(data) {
        console.log(data)
      }
    }
  );

  console.log('dataSellerCarts',dataSellerCarts)

  useEffect(() => {
    if (userRole === "BUYER") {
      setShouldFetchBuyerCarts(true);
    }else if(userRole === "SELLER")(
      setShouldFetchSellerCarts(true)
    )
  }, [userRole]);

  return (
    <Stack className="">
      {userRole === "BUYER" && (
        <>
          <OrderCartModal
            setOpened={setIsOrderModalOpened}
            opened={isOrderModalOpened}
            cartList={cartList}
            setCartList={setCartList}
            refetch={refetch}
          />
          {cartList?.length > 0 && (
            <Button
              className="z-50 fixed bottom-5 right-8 w-fit bg-dark-purple/75 hover:bg-dark-purple text-white tracking-5 duration-100 rounded-sm"
              size="lg"
              leftIcon={<IconShoppingTroll size={24} color="white" />}
              onClick={() => {
                setIsOrderModalOpened(true);
              }}
            >
              Order Sekarang ({cartList?.length})
            </Button>
          )}
        </>
      )}

      {/* Header */}
      <Header headerBackgroundType={headerBackgroundType} />

      {/* Children */}
      <Stack>{children}</Stack>

      <Footer />
    </Stack>
  );
};
export default AppLayout;
