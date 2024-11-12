import { Button, Stack } from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { IconShoppingTroll } from "../assets/icon/Fluent";
import OrderCartModal from "../components/OrderCartModal.component";
import { AuthContext } from "../context/AuthContext.context";
import { qfFetchBuyerCarts } from "../utils/query/cartsQuery";
import Footer from "./Footer.layout";
import Header from "./Header.layout";
// import Header from "./headers/Header.layout";

export type TPageName = "Beranda" | "";

export interface IAppLayout {
  children: JSX.Element;
  activePage?: TPageName;
  headerBackgroundType?: "normal" | "transparent";
}

const AppLayout: React.FC<IAppLayout> = ({
  children,
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

  const { data, refetch, isSuccess } = useQuery(
    `fetch-buyer-carts`,
    qfFetchBuyerCarts,
    {
      enabled: shouldFetchBuyerCarts,
      onSuccess(data) {
        console.log("TERFETCH");
        setCartList(data?.data?.filter((cart:any)=> cart.status==='INPROCESS'));
        // setCartList(data?.data)
      }
    }
  );

  useEffect(()=>{
    if(isSuccess){
      setCartList(data?.data?.filter((cart:any)=> cart.status==='INPROCESS'));
    }
  }, [isSuccess])


  useEffect(() => {
    if (userRole === "BUYER") {
      setShouldFetchBuyerCarts(true);
    }
  }, [userRole]);
  
  console.log('userRole',userRole)

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
