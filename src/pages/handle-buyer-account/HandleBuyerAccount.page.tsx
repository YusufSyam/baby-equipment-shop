import { Divider, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  IconOutward,
  IconWhatsappOutline
} from "../../assets/icon/Fluent";
import CircleDivider from "../../components/CircleDivider.component";
import ConfirmationModal from "../../components/ConfirmationModal.component";
import {
  MyPasswordInput,
  MyTextInput
} from "../../components/FormInput.component";
import OrderStatusComp from "../../components/OrderStatus.component";
import { AuthContext } from "../../context/AuthContext.context";
import AppLayout from "../../layouts/AppLayout";
import { SELLER_WHATSAPP_NUMBER } from "../../utils/const/globalConst";
import { formatDateNormal } from "../../utils/functions/date.function";
import {
  WhatsappMessageOpenInNewTab,
  calculateOrderTotalPrices
} from "../../utils/functions/misc.function";
import {
  qfFetchBuyerOrders
} from "../../utils/query/cartsQuery";
import ActivityTableComponent, {
  IActivityTableAction,
  IFETableHeadingProps,
  IFETableRowColumnProps
} from "../admin-page/ActivityTable.component";
import { IOrder } from "../admin-page/AdminPage.page";

export interface IHandleBuyerAccount {}

export interface IForgotPasswordInput {
  oldPassword: string;
  newPassword: string;
  rewriteNewPassword: string;
}

const tableHeadings: IFETableHeadingProps[] = [
  {
    label: "No.",
    sortable: true,
    textAlign: "center",
    cellKey: "no"
  },
  {
    label: "Pembeli",
    sortable: true,
    textAlign: "left",
    cellKey: "buyer"
  },
  {
    label: "Barang",
    sortable: true,
    textAlign: "left",
    cellKey: "item"
  },
  {
    label: "Total Harga",
    sortable: true,
    textAlign: "left",
    cellKey: "totalPrice"
  },
  {
    label: "Status",
    sortable: true,
    textAlign: "left",
    cellKey: "status"
  }
  // {
  //   label: "Keterangan",
  //   sortable: true,
  //   textAlign: "center",
  //   cellKey: "additionalInformation"
  // }
  // {
  //   label: "Aksi",
  //   sortable: true,
  //   textAlign: "center",
  //   cellKey: "action"
  // }
];


function formatOrders(beData: any[] = []) {
  const formatted = beData?.map((d) => {
    const data: IOrder = {
      orderId: d.id,
      orderStatus: d.status,
      totalPrice: calculateOrderTotalPrices(d?.carts),
      cartList: d?.carts,
      cartIdList: d?.carts?.map((c: any) => {
        return c?.id;
      }),
      buyer: d?.buyer,
      orderDate: new Date((d?.orderStatusUpdateAt || 0) * 1000),
      orderStatusUpdateAt: d?.orderStatusUpdateAt || 0
    };

    return data;
  });

  return formatted;
}

const HandleBuyerAccount: React.FC<IHandleBuyerAccount> = ({}) => {
  const amtDataPerPage = 10;
  const [activePage, setActivePage] = useState<number>(1);
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const {
    data: dataOrder,
    isLoading: isLoadingOrder
  } = useQuery(`fetch-buyer-orders`, qfFetchBuyerOrders, {
    onSuccess(data) {
      setDefaultData(formatOrders(data?.data));
    }
  });

  console.log("dataOrder", dataOrder);

  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { username, userPhoneNumber } = authContext;

  // if(userRole==="SELLER"){
  //   return <WrongPage />
  // }

  const [changePasswordModalOpened, setChangePasswordModalOpened] =
    useState(false);

  const form = useForm<IForgotPasswordInput>();

  const { getInputProps, errors, values } = form;

  const [defaultData, setDefaultData] = useState(formatOrders(dataOrder?.data));

  const [activityList, setActivityList] = useState<IOrder[]>(defaultData);

  useEffect(() => {
    setActivityList(
      defaultData?.sort(
        (a, b) => b.orderStatusUpdateAt! - a.orderStatusUpdateAt!
      )
    );
  }, [defaultData]);

  const [selectedRow, setSelectedRow] = useState(0);

  function handleChangePassword() {}

  const tableRows = activityList?.map(
    (data, idx) =>
      ({
        id: {
          label: idx
        },
        no: {
          label: idx + 1
        },
        item: {
          label: data?.orderId,
          element: (
            <Stack>
              {data?.cartList?.map((cart: any, idx: number) => {
                return (
                  <Stack>
                    <Group className="gap-4 flex-nowrap">
                      <Group
                        className="gap-1 cursor-pointer hover:text-dark-purple duration-100 w-fit"
                        onClick={() => {
                          navigate(`../item/${cart?.item?.id}`);
                        }}
                      >
                        <Text className="text-[14px] font-roboto text-primary-text">
                          {idx + 1}. {cart?.item?.name}
                        </Text>
                        <IconOutward
                          color={theme.colors["dark-purple"][5]}
                          size={16}
                        />
                      </Group>
                      <CircleDivider />
                      <Text className="text-[16px] font-roboto text-primary-text">
                        Rp. {cart?.item?.price * cart?.quantity}{" "}
                        <span className="text-sm text-secondary-text font-normal">
                          ({cart?.item?.price} x {cart?.quantity})
                        </span>
                      </Text>
                    </Group>
                    {idx !== (data?.cartList?.length || 0) - 1 && <Divider />}
                  </Stack>
                );
              })}
            </Stack>
          )
        },
        buyer: {
          label: data?.buyer?.phoneNumber,
          element: (
            <Stack className="gap-4">
              <Stack className="gap-0">
                <Text className="text-lg font-roboto text-primary-text">
                  Invoice:
                </Text>
                <Text className="text-[14px] text-secondary-text">
                  {data?.orderId}
                </Text>
                <Text className="text-sm text-secondary-text-500">
                  Waktu Pembelian:
                  {formatDateNormal(data?.orderDate || new Date())}
                </Text>
              </Stack>
            </Stack>
          )
        },
        totalPrice: {
          label: data?.totalPrice,
          element: (
            <Text className="font-roboto text-xl">Rp. {data?.totalPrice}</Text>
          )
        },
        status: {
          label: data?.orderStatus,
          element: (
            <>
              <OrderStatusComp orderStatus={data?.orderStatus} />
            </>
          )
        }
      } as IFETableRowColumnProps)
  );

  const actions: IActivityTableAction[] = [
    {
      label: "",
      type: "element",
      backgroundColor: "white",
      element: () => {
        return (
          <Stack
            className="gap-0 cursor-pointer"
            onClick={() => {
              WhatsappMessageOpenInNewTab(
                SELLER_WHATSAPP_NUMBER,
                `Cek status pembelian. Invoice: ${activityList?.[selectedRow]?.orderId}`
              );
            }}
          >
            <IconWhatsappOutline
              size={30}
              color="#25D366"
              className="self-center"
            />
            <Text className="text-sm text-secondary-text">Chat</Text>
          </Stack>
        );
      },
      onClick: (row: any) => {
        setSelectedRow(row.id.label);
      }
    }
  ];

  return (
    <AppLayout headerBackgroundType="normal">
      <Stack className="mx-12 mt-4">
        <ConfirmationModal
          opened={changePasswordModalOpened}
          setOpened={setChangePasswordModalOpened}
          title={"Ganti Password"}
          onClose={() => {}}
          onSubmit={handleChangePassword}
          disableYesButton={
            values?.newPassword == null ||
            values?.oldPassword == null ||
            values?.rewriteNewPassword == null
          }
          yesButtonLabel="Ganti Password"
        >
          <Stack className="w-full self-center bg-secondary/50 px-8 py-6 rounded-sm">
            <MyTextInput
              label="Password Lama"
              size="md"
              placeholder="Masukkan password lama"
              {...getInputProps("oldPassword")}
              error={errors["oldPassword" as keyof IForgotPasswordInput]}
              disabled
            />
            <MyPasswordInput
              label="Password Baru"
              size="md"
              placeholder="Masukkan password baru"
              {...getInputProps("newPassword")}
              error={errors["newPassword" as keyof IForgotPasswordInput]}
            />
            <MyPasswordInput
              label="Ketik Ulang Password Baru"
              size="md"
              placeholder="Ketik ulang password baru"
              {...getInputProps("rewriteNewPassword")}
              error={errors["rewriteNewPassword" as keyof IForgotPasswordInput]}
            />
          </Stack>
        </ConfirmationModal>
        <Group className="justify-between items-end mb-4">
          <Stack className="gap-0">
            <Text className="text-[30px] font-roboto-semibold text-primary-text tracking-5 [text-shadow:_0_2px_18px_rgb(0_0_0_/_30%)]">
              Selamat Datang! {username}
            </Text>
            <Text className="text-secondary-text">
              Kelola akun dan lihat riwayat pembelian di halaman ini
            </Text>
            <Text className="text-secondary-text">
              Nomor Whatsapp Terdaftar: {userPhoneNumber}
            </Text>
          </Stack>

          {/* <SmallButton
            className="!bg-dark-purple !rounded-sm !border-transparent !text-white !hover:bg-darker-500 w-fit"
            // disabled={value == null}
            onClick={() => {
              setChangePasswordModalOpened(true);
            }}
          >
            Ganti Password
          </SmallButton> */}
        </Group>

        <Text className="text-[24px] font-roboto-semibold text-primary-text tracking-5 text-start">
          Riwayat Pembelian
        </Text>

        <ActivityTableComponent
          noDataMsg=""
          isLoading={isLoadingOrder}
          dataPerPageAmt={amtDataPerPage}
          onPageChange={setActivePage}
          activePage={activePage}
          actions={actions}
          tableRows={tableRows}
          tableHeadings={tableHeadings}
          actionOrientation="horizontal"
          showTableHeader
          actionColumnWidth="150px"
          actionColumnRounded={false}
        />
      </Stack>
    </AppLayout>
  );
};
export default HandleBuyerAccount;
