import {
  Checkbox,
  Divider,
  Group,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  IconCheckOutline,
  IconCloseOutline,
  IconOutward,
  IconSearchFilledRounded,
  IconWhatsappOutline
} from "../../assets/icon/Fluent";
import CircleDivider from "../../components/CircleDivider.component";
import ConfirmationModal from "../../components/ConfirmationModal.component";
import { MySearchInput } from "../../components/FormInput.component";
import LoadingModal from "../../components/LoadingModal.component";
import OrderStatusComp, {
  TOrderStatus
} from "../../components/OrderStatus.component";
import WarningModal from "../../components/WarningModal.component";
import AppLayout from "../../layouts/AppLayout";
import { formatDateNormal } from "../../utils/functions/date.function";
import {
  WhatsappMessageOpenInNewTab,
  calculateOrderTotalPrices
} from "../../utils/functions/misc.function";
import { qfFetchSellerOrders } from "../../utils/query/cartsQuery";
import { qfCancelOrder, qfCompleteOrder } from "../../utils/query/orderQuery";
import ActivityTableComponent, {
  IActivityTableAction,
  IFETableHeadingProps,
  IFETableRowColumnProps
} from "./ActivityTable.component";

export interface IAdminPage {}

export interface IOrder {
  orderId: string;
  orderStatus: "INPROCESS" | "COMPLETED" | "CANCELLED";
  totalPrice: number;
  cartList?: any[];
  cartIdList?: string[];
  buyer?: any;
  orderStatusUpdateAt?: number;
  orderDate?: Date;
}

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

export interface IActivityTableRow {
  invoice?: string;
  itemName: string;
  itemId: string;
  buyerName?: string;
  buyerId?: string;
  buyerWANumber?: string;
  status: TOrderStatus;
  buyingTime?: Date;
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

const AdminPage: React.FC<IAdminPage> = ({}) => {
  const amtDataPerPage = 10;
  const [activePage, setActivePage] = useState<number>(1);
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const {
    data: dataSellerOrders,
    refetch: refetchSellerOrders,
    isLoading: isLoadingOrder
  } = useQuery(`fetch-seller-orders`, qfFetchSellerOrders, {
    onSuccess(data) {
      setDefaultData(formatOrders(data?.data));
    }
  });

  const putCompleteOrderMutation = useMutation(
    "put-complete-order",
    qfCompleteOrder,
    {
      onSuccess() {
        console.log("sukses");
        refetchSellerOrders();
        setIsProcessItemModalOpened(false);
      }
    }
  );

  const putCancelOrderMutation = useMutation(
    "put-cancel-order",
    qfCancelOrder,
    {
      onSuccess() {
        console.log("sukses");
        refetchSellerOrders();
        setIsCancelItemModalOpened(false);
      }
    }
  );

  console.log("dataSellerOrders", dataSellerOrders);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [query] = useDebouncedValue(searchTerm, 500);

  const [defaultData, setDefaultData] = useState(
    formatOrders(dataSellerOrders?.data)
  );
  // const [defaultData, setDefaultData] = useState(dummySellerCarts);

  const [activityList, setActivityList] = useState<IOrder[]>(defaultData);

  console.log("activityList", activityList);

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
                  Nama:
                </Text>
                <Text className="text-lg text-secondary-text font-semibold">
                  {data?.buyer?.name}
                </Text>
              </Stack>
              <Stack className="gap-0">
                <Text className="text-lg font-roboto text-primary-text">
                  Nomor WA:
                </Text>
                <Text className="text-lg text-secondary-text font-semibold">
                  {data?.buyer?.phoneNumber || "-"}
                </Text>
              </Stack>
              <Stack className="gap-0">
                <Text className="text-lg font-roboto text-primary-text">
                  Invoice:
                </Text>
                <Text className="text-[14px] text-secondary-text">
                  {data?.orderId}
                </Text>
                <Text className="text-sm text-secondary-text-500">
                  Waktu Pembelian:{" "}
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
            <Text className="text-sm text-secondary-text">Chat</Text>
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
        const isDisabled = row?.status?.label !== "INPROCESS";

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

            <Text className="text-sm text-secondary-text">Selesai</Text>
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
        const isDisabled = row?.status?.label !== "INPROCESS";

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
                  color={theme?.colors["red"][5]}
                  className="bg-error/25 hover:bg-error/40 duration-100 rounded-full p-[6px] self-center"
                  onClick={() => {
                    setSelectedRow(row.id.label);
                    setIsCancelItemModalOpened(true);
                  }}
                />
              )
            }
            <Text className="text-sm text-secondary-text">Batalkan</Text>
          </Stack>
        );
      },
      onClick: () => {}
    }
  ];

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value);
    setActivePage(1);
  }

  const [isJustPending, setIsJustPending] = useState(false);

  useEffect(() => {
    let tempActivityList = defaultData;

    if (query !== "") {
      tempActivityList = tempActivityList?.filter((d: IOrder) =>
        d?.orderId?.toLowerCase()?.includes(query?.toLowerCase())
      );
    }

    if (isJustPending) {
      tempActivityList = tempActivityList?.filter(
        (d: IOrder) => d.orderStatus === "INPROCESS"
      );
    }

    tempActivityList.sort(
      (a, b) => b.orderStatusUpdateAt! - a.orderStatusUpdateAt!
    );

    setActivityList(tempActivityList);
    setActivePage(1)
  }, [query, isJustPending, defaultData]);

  const itemDetailToProcess = (
    <Group className="items-start mb-4">
      <Stack className="gap-1">
        <Text className="text-[16px] font-roboto text-primary-text">
          Detail Transaksi
        </Text>
        <Stack className="gap-0">
          <Text className="text-[14px] text-primary-text font-semibold">
            Kode Invoice:{" "}
            <span className="font-normal">
              {activityList?.[selectedRow]?.orderId}{" "}
            </span>
          </Text>
          <Text className="text-[14px] text-primary-text font-semibold">
            Pembeli:{" "}
            <span className="font-normal">
              {activityList?.[selectedRow]?.buyer?.name}{" "}
            </span>
          </Text>
          <Text className="text-[14px] text-primary-text font-semibold">
            Nomor WA Pembeli:{" "}
            <span className="font-normal">
              {activityList?.[selectedRow]?.buyer?.phoneNumber || "-"}{" "}
            </span>
          </Text>
        </Stack>
      </Stack>
      {/* <Stack className="gap-1">
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
      </Stack> */}
    </Group>
  );

  return (
    <AppLayout headerBackgroundType="normal" activePage="">
      <Stack className="mx-12 mt-4 gap-0">
        <ConfirmationModal
          setOpened={setIsProcessItemModalOpened}
          opened={isProcessItemModalOpened}
          title={"Selesaikan Proses Transaksi?"}
          onClose={() => {}}
          onSubmit={() => {
            putCompleteOrderMutation.mutate(
              activityList?.[selectedRow]?.orderId || ""
            );
            // console.log('orderId',activityList?.[selectedRow]?.orderId)
          }}
          minWidth={700}
          yesButtonLabel="Selesaikan"
        >
          <Stack>
            <Text className="text-primary-text-500 text-[14px]">
              Yakin untuk{" "}
              <span className="text-green font-bold">menyelesaikan</span> proses
              transaksi dengan detail sebagai berikut..?
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
            putCancelOrderMutation.mutate(
              activityList?.[selectedRow]?.orderId || ""
            );
          }}
          minWidth={700}
          yesButtonLabel="Batalkan"
        >
          <Stack>
            <Text className="text-primary-text-500 text-[14px]">
              Yakin untuk{" "}
              <span className="text-error font-bold">membatalkan</span> proses
              transaksi dengan detail sebagai berikut..?
            </Text>
            {itemDetailToProcess}
          </Stack>
        </WarningModal>

        <LoadingModal
          opened={
            putCompleteOrderMutation.isLoading ||
            putCancelOrderMutation.isLoading
          }
        />
        <Stack className="gap-0">
          <Text className="text-[32px] text-center font-roboto-semibold text-primary-text tracking-5 [text-shadow:_0_2px_18px_rgb(0_0_0_/_30%)]">
            Halaman Admin
          </Text>
          <Text className="text-center text-secondary-text">
            Proses atau batalkan segala transaksi / pembelian yang anda lakukan
            pada halaman ini
          </Text>
        </Stack>

        <Group className="border-2 border-b-0 border-secondary bg-secondary/50 py-4 px-6 rounded-sm mt-8 w-full self-center justify-between">
          <Text className="text-[26px] text-center font-roboto-semibold text-primary-text tracking-5 self-center">
            Daftar Order
          </Text>
          <Group className="self-center">
            <Group className="gap-8 items-center">
              {/* <IconFilterFilled
                color={theme.colors["secondary"][9]}
                className="mt-[2px]"
              /> */}
              <Group
                className="cursor-pointer gap-2"
                onClick={() => {
                  setIsJustPending(!isJustPending);
                }}
              >
                <Checkbox checked={isJustPending} color="purple.5" />
                <Text className="text-secondary-text-500 font-semibold -mt-[2px]">Dalam Proses</Text>
              </Group>
              <CircleDivider />
              <Group className="gap-2">
                <IconSearchFilledRounded
                  color={theme.colors["secondary"][9]}
                  className="mt-[2px]"
                />
                <MySearchInput
                  onChange={handleSearchChange}
                  placeholder="Cari Kode Invoice"
                  w={320}
                />
              </Group>
            </Group>
          </Group>
        </Group>
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
          actionColumnWidth="240px"
          actionColumnRounded={false}
        />
      </Stack>
    </AppLayout>
  );
};
export default AdminPage;
