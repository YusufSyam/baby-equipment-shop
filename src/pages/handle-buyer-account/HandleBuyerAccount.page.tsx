import React, { useContext, useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import { Group, Stack, Text, useMantineTheme } from "@mantine/core";
import ConfirmationModal from "../../components/ConfirmationModal.component";
import { useForm } from "@mantine/form";
import { Link, useNavigate } from "react-router-dom";
import {
  MyTextInput,
  MyPasswordInput
} from "../../components/FormInput.component";
import { SmallButton } from "../../components/MyButton";
import { MAINROUTES } from "../../utils/const/routes";
import { IconOutward, IconWhatsappOutline, IconCheckOutline, IconCloseOutline } from "../../assets/icon/Fluent";
import OrderStatusComp from "../../components/OrderStatus.component";
import { dummyActivityData } from "../../utils/const/dummy";
import { formatDateNormal } from "../../utils/functions/date.function";
import { WhatsappMessageOpenInNewTab } from "../../utils/functions/misc.function";
import ActivityTableComponent, { IFETableHeadingProps, IFETableRowColumnProps, IActivityTableAction } from "../admin-page/ActivityTable.component";
import { IActivityTableRow } from "../admin-page/AdminPage.page";
import { SELLER_WHATSAPP_NUMBER } from "../../utils/const/globalConst";
import { AuthContext } from "../../context/AuthContext.context";
import WrongPage from "../wrong-page/WrongPage.page";

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
    label: "Barang",
    sortable: true,
    textAlign: "left",
    cellKey: "item"
  },
  {
    label: "Detail Pembelian",
    sortable: true,
    textAlign: "left",
    cellKey: "buyer"
  },
  {
    label: "Harga",
    sortable: true,
    textAlign: "left",
    cellKey: "priceDetail"
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

const HandleBuyerAccount: React.FC<IHandleBuyerAccount> = ({}) => {
  const amtDataPerPage = 10;
  const [activePage, setActivePage] = useState<number>(1);
  const theme = useMantineTheme();
  const navigate = useNavigate();
  
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const {
    username,
    userRole
  } = authContext;

  // if(userRole==="SELLER"){
  //   return <WrongPage />  
  // }

  const [changePasswordModalOpened, setChangePasswordModalOpened] =
    useState(false);

  const form = useForm<IForgotPasswordInput>();

  const { getInputProps, errors, values, reset } = form;

  const [defaultData, setDefaultData] = useState(dummyActivityData);

  const [activityList, setActivityList] =
    useState<IActivityTableRow[]>(defaultData);
    
  const [selectedRow, setSelectedRow] = useState(0);

  function handleChangePassword() {} const tableRows = activityList?.map(
    (data, idx) =>
      ({
        id: {
          label: idx
        },
        no: {
          label: idx + 1
        },
        item: {
          label: data?.itemName,
          element: (
            <Group
              className="gap-1 cursor-pointer hover:text-dark-purple duration-100 w-fit"
              onClick={() => {
                navigate(`../item/${data?.itemId}`);
              }}
            >
              <Text className="text-[14px] font-roboto text-primary-text">
                {data?.itemName}
              </Text>
              <IconOutward color={theme.colors["dark-purple"][5]} size={18} />
            </Group>
          )
        },
        buyer: {
          label: data?.buyerWANumber,
          element: (
            <Stack className="gap-1">
              <Text className="text-[14px] font-roboto text-primary-text">
                Pembeli: {data?.buyerName}
              </Text>
              <Stack className="gap-0">
                <Text className="text-sm text-secondary-text-500">
                  Invoice: {data?.invoice}
                </Text>
                <Text className="text-sm text-secondary-text-500">
                  User Id: {data?.buyerId}
                </Text>
                <Text className="text-sm text-secondary-text-500">
                  Waktu Pembelian: {formatDateNormal(data?.buyingTime)}
                </Text>
              </Stack>
            </Stack>
          )
        },
        status: {
          label: data?.status,
          element: (
            <>
              <OrderStatusComp orderStatus={data?.status} />
            </>
          )
        },
        priceDetail: {
          label: data?.itemTotalPrice,
          element: (
            <Stack className="gap-1">
              <Text className="text-[16px] font-roboto text-primary-text">
                {data?.itemTotalPrice}
              </Text>
              <Stack className="gap-0">
                <Text className="text-sm text-secondary-text-500">
                  Kuantitas barang dibeli: {data?.itemQuantity}
                </Text>
                <Text className="text-sm text-secondary-text-500">
                  Harga barang per satuan: {data?.itemPrice}
                </Text>
              </Stack>
            </Stack>
          )
        }
      } as IFETableRowColumnProps)
  );

  const actions: IActivityTableAction[] = [
    {
      label: "",
      type: "element",
      backgroundColor: "white",
      element: (row: any) => {
        return (
          <Stack
            className="gap-0 cursor-pointer"
            onClick={() => {
              WhatsappMessageOpenInNewTab(SELLER_WHATSAPP_NUMBER, "Cek status pembelian. Invoice: [kode invoice]");
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
          </Stack>

          <SmallButton
            className="!bg-dark-purple !rounded-sm !border-transparent !text-white !hover:bg-darker-500 w-fit"
            // disabled={value == null}
            onClick={() => {
              setChangePasswordModalOpened(true);
            }}
          >
            Ganti Password
          </SmallButton>
        </Group>
        
        <Text className="text-[24px] font-roboto-semibold text-primary-text tracking-5 text-start">
              Riwayat Pembelian
            </Text>
        
        <ActivityTableComponent
          noDataMsg=""
          isLoading={false}
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
