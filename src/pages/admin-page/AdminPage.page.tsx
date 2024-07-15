import React, { useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import { Group, Stack, Text, useMantineTheme } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import ActivityTableComponent, {
  IActivityTableAction,
  IFETableHeadingProps,
  IFETableRowColumnProps
} from "./ActivityTable.component";
import { formatDateNormal } from "../../utils/functions/date.function";
import { dummyActivityData } from "../../utils/const/dummy";
import {
  IconCheckOutline,
  IconCloseOutline,
  IconExpandOutlinedRounded,
  IconInfoOutline,
  IconOutward,
  IconWhatsappOutline
} from "../../assets/icon/Fluent";
import { useNavigate } from "react-router-dom";
import OrderStatusComp, {
  TOrderStatus
} from "../../components/OrderStatus.component";
import { WhatsappMessageOpenInNewTab } from "../../utils/functions/misc.function";
import ConfirmationModal from "../../components/ConfirmationModal.component";
import WarningModal from "../../components/WarningModal.component";

export interface IAdminPage {}

export interface IActivityTableRow {
  invoice?: string;
  itemName: string;
  itemId: string;
  buyerName: string;
  buyerId: string;
  buyerWANumber?: string;
  status: TOrderStatus;
  buyingTime: Date;
  itemQuantity?: number;
  itemPrice?: number;
  itemTotalPrice?: number;
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

const AdminPage: React.FC<IAdminPage> = ({}) => {
  const amtDataPerPage = 10;
  const [activePage, setActivePage] = useState<number>(1);
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [query] = useDebouncedValue(searchTerm, 500);

  const [activityList, setActivityList] =
    useState<IActivityTableRow[]>(dummyActivityData);

  const [selectedRow, setSelectedRow] = useState(0);
  const [isProcessItemModalOpened, setIsProcessItemModalOpened] =
    useState(false);

  const [isCancelItemModalOpened, setIsCancelItemModalOpened] = useState(false);

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
    // {
    //   label: "1",
    //   eachButtonRounded: false,

    //   backgroundColor: "purple",
    //   // isDisabled: (row: any) => {
    //   //   return row.activity.label == "return";
    //   // },
    //   // Row disini itu row yang ada di table rows
    //   onClick: (row: any) => {
    //     setSelectedRow(row.id.label);
    //     setIsProcessItemModalOpened(true);
    //   }
    // },
    {
      label: "",
      type: "element",
      backgroundColor: "white",
      element: (row: any) => {
        return (
          <Stack
            className="gap-0 cursor-pointer"
            onClick={() => {
              WhatsappMessageOpenInNewTab(row?.buyer?.label, "");
            }}
          >
            <IconWhatsappOutline
              size={30}
              color="#25D366"
              className="self-center"
            />
            <Text className="text-sm text-primary-text">Chat</Text>
          </Stack>
        );
      },
      onClick: (row: any) => {
        setSelectedRow(row.id.label);
        setIsProcessItemModalOpened(true);
      }
    },
    {
      label: "",
      type: "element",
      backgroundColor: "white",
      element: (row: any) => {
        const isDisabled = row?.status?.label !== "pending";

        return (
          <Stack
            className={`gap-0 ${
              isDisabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {
              // Jika terdisable
              isDisabled ? (
                <IconCheckOutline
                  size={30}
                  color="white"
                  className="bg-secondary-text/60 duration-100 rounded-full p-[6px] self-center"
                />
              ) : (
                <IconCheckOutline
                  size={30}
                  color="white"
                  className="bg-green hover:bg-green/80 duration-100 rounded-full p-[6px] self-center"
                  onClick={() => {
                    setSelectedRow(row.id.label);
                    setIsProcessItemModalOpened(true);
                  }}
                />
              )
            }

            <Text className="text-sm text-primary-text">Complete</Text>
          </Stack>
        );
      },
      isDisabled: (row: any) => {
        return row?.status?.label !== "pending";
      },
      onClick: (row: any) => {
        setSelectedRow(row.id.label);
        setIsProcessItemModalOpened(true);
      }
    },
    {
      label: "",
      type: "element",
      backgroundColor: "white",
      element: (row: any) => {
        const isDisabled = row?.status?.label !== "pending";

        return (
          <Stack
            className={`gap-0 ${
              isDisabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {
              // Jika terdisable
              isDisabled ? (
                <IconCloseOutline
                  size={30}
                  color="white"
                  className="bg-secondary-text/60 duration-100 rounded-full p-[7px] self-center"
                />
              ) : (
                <IconCloseOutline
                  size={30}
                  color="white"
                  className="bg-red hover:bg-red/80 duration-100 rounded-full p-[6px] self-center"
                  onClick={() => {
                    setSelectedRow(row.id.label);
                    setIsCancelItemModalOpened(true);
                  }}
                />
              )
            }
            <Text className="text-sm text-primary-text">Cancel</Text>
          </Stack>
        );
      },
      onClick: (row: any) => {}
    }
  ];

  const itemDetailToProcess = (
    <Group className="items-start">
      <Stack className="gap-1 w-1/2">
        <Text className="text-[16px] font-roboto text-primary-text">
          Detail Transaksi
        </Text>
        <Stack className="gap-0">
          <Text className="text-[14px] text-primary-text">
            Kode Invoice: {activityList?.[selectedRow]?.invoice}
          </Text>
          <Text className="text-[14px] text-primary-text">
            Barang: {activityList?.[selectedRow]?.itemName}
          </Text>
          <Text className="text-[14px] text-primary-text">
            Pembeli: {activityList?.[selectedRow]?.buyerName}
          </Text>
          <Text className="text-[14px] text-primary-text">
            Nomor WA Pembeli: {activityList?.[selectedRow]?.buyerWANumber}
            </Text>
        </Stack>
      </Stack>
      <Stack className="gap-1">
        <Text className="text-[16px] font-roboto text-primary-text">
          Detail Harga
        </Text>
        <Stack className="gap-0">
          <Text className="text-[14px] text-primary-text">
            Harga per satuan: {activityList?.[selectedRow]?.itemPrice}
          </Text>
          <Text className="text-[14px] text-primary-text">
            Kuantitas pembelian: {activityList?.[selectedRow]?.itemQuantity}
          </Text>
          <Text className="text-white bg-secondary-text px-1 font-semibold text-xl w-fit mt-2">
            Total Harga: {activityList?.[selectedRow]?.itemTotalPrice}
          </Text>
        </Stack>
      </Stack>
    </Group>
  );

  return (
    <AppLayout headerBackgroundType="normal" activePage="">
      <Stack className="mx-12 mt-4">
        <ConfirmationModal
          setOpened={setIsProcessItemModalOpened}
          opened={isProcessItemModalOpened}
          title={"Selesaikan Proses Transaksi?"}
          onClose={() => {}}
          onSubmit={() => {
            setIsProcessItemModalOpened(false);
          }}
          minWidth={700}
          yesButtonLabel="Selesaikan"
        >
          <Stack>
            <Text className="text-primary-text-500 text-[14px]">
              Yakin untuk <span className="text-green font-bold">menyelesaikan</span>{" "}
              proses transaksi dengan detail sebagai berikut..?
            </Text>
            {itemDetailToProcess}
          </Stack>
        </ConfirmationModal>
        <WarningModal
          setOpened={setIsCancelItemModalOpened}
          opened={isCancelItemModalOpened}
          title={"Gagalkan Transaksi?"}
          onClose={() => {}}
          onSubmit={() => {
            setIsCancelItemModalOpened(false);
          }}
          minWidth={700}
          yesButtonLabel="Batalkan"
        >
          <Stack>
            <Text className="text-primary-text-500 text-[14px]">
              Yakin untuk <span className="text-error font-bold">membatalkan</span>{" "}
              proses transaksi dengan detail sebagai berikut..?
            </Text>
            {itemDetailToProcess}
          </Stack>
        </WarningModal>
        <Text className="text-[32px] font-roboto-semibold text-primary-text tracking-5 [text-shadow:_0_2px_18px_rgb(0_0_0_/_30%)]">
          Halaman Admin
        </Text>
        <ActivityTableComponent
          noDataMsg=""
          isLoading={false}
          dataPerPageAmt={amtDataPerPage}
          onSearch={() => {
            // console.log("Searching for: ", value);
          }}
          onPageChange={setActivePage}
          activePage={activePage}
          actions={actions}
          tableTitle="Deteksi Terbaru"
          tableRows={tableRows}
          tableHeadings={tableHeadings}
          withSearch={false}
          actionOrientation="horizontal"
          onProgressData={0}
          showTableHeader
          actionColumnWidth="240px"
          actionColumnRounded={false}
        />
      </Stack>
    </AppLayout>
  );
};
export default AdminPage;
