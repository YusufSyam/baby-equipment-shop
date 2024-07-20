import React, { useEffect, useState } from "react";
import ConfirmationModal from "./ConfirmationModal.component";
import { Group, Stack, Text, useMantineTheme } from "@mantine/core";
import { useMutation, useQuery } from "react-query";
import { qfDeleteCart, qfFetchAllCarts } from "../utils/query/cartsQuery";
import { IconCloseOutline, IconOutward } from "../assets/icon/Fluent";
import ActivityTableComponent, {
  IActivityTableAction,
  IFETableHeadingProps,
  IFETableRowColumnProps
} from "../pages/admin-page/ActivityTable.component";
import { formatDateNormal } from "../utils/functions/date.function";
import OrderStatusComp from "./OrderStatus.component";
import { useNavigate } from "react-router-dom";
import { categoryMap } from "../utils/const/globalConst";

export interface IOrderCartModal {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
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
    label: "Kategori",
    sortable: true,
    textAlign: "left",
    cellKey: "category"
  },
  {
    label: "Kuantitas",
    sortable: true,
    textAlign: "left",
    cellKey: "quantity"
  },
  {
    label: "Harga",
    sortable: true,
    textAlign: "left",
    cellKey: "priceDetail"
  }
];

const OrderCartModal: React.FC<IOrderCartModal> = ({ opened, setOpened }) => {
  const amtDataPerPage = 1000000000;
  const [activePage, setActivePage] = useState<number>(1);

  const { data, isFetching, refetch } = useQuery(
    `fetch-all-carts`,
    qfFetchAllCarts,
    {
      onSuccess(data) {
        setCartList(data?.data);
      }
    }
  );

  const deleteCartMutation = useMutation("delete-cart", qfDeleteCart, {
    onSuccess() {
      refetch();
    }
  });

  const navigate = useNavigate();
  const theme = useMantineTheme();

  const [cartList, setCartList] = useState<any[]>([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cartList.reduce((total, cartItem) => {
        return total + cartItem.item.price * cartItem.quantity;
      }, 0)
    );
  }, [cartList]);

  const tableRows = cartList?.map(
    (data, idx) =>
      ({
        id: {
          label: data?.cartId
        },
        no: {
          label: idx + 1
        },
        item: {
          label: data?.item?.name,
          element: (
            <Group
              className="gap-1 cursor-pointer hover:text-dark-purple duration-100 w-fit"
              onClick={() => {
                navigate(`../item/${data?.item?.id}`);
              }}
            >
              <Text className="text-[14px] font-roboto text-primary-text">
                {data?.item?.name}
              </Text>
              <IconOutward color={theme.colors["dark-purple"][5]} size={18} />
            </Group>
          )
        },
        category: {
          label: categoryMap?.[data?.item?.category]
        },
        quantity: {
          label: `x ${data?.quantity}`
        },
        priceDetail: {
          label: data?.item?.price,
          element: (
            <Stack className="gap-1">
              <Text className="text-[16px] font-roboto text-primary-text">
                {data?.item?.price * data?.quantity}
              </Text>
              <Stack className="gap-0">
                <Text className="text-sm text-secondary-text-500">
                  Kuantitas barang dibeli: {data?.quantity}
                </Text>
                <Text className="text-sm text-secondary-text-500">
                  Harga barang per satuan: {data?.item?.price}
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
          <Stack className={`gap-1 cursor-pointer`}>
            <IconCloseOutline
              size={28}
              color={theme?.colors["red"][5]}
              className="p-[6px] rounded-full bg-error/25 hover:bg-error/40 duration-100 self-center"
              onClick={() => {
                deleteCartMutation?.mutate(row.id.label);
              }}
            />
            <Text className="text-sm text-secondary-text">Hapus</Text>
          </Stack>
        );
      },
      onClick: (row: any) => {}
    }
  ];

  return (
    <ConfirmationModal
      setOpened={setOpened}
      opened={opened}
      title={"Keranjang"}
      onClose={() => {}}
      yesButtonLabel="Order"
      minWidth={800}
      disableYesButton={cartList?.length <= 0}
    >
      <Stack>
        <Text className="text-secondary-text-500">
          Daftar barang yang dimasukkan dalam keranjang. Klik tombol "order"
          untuk melakukan pembelian.
        </Text>
        <ActivityTableComponent
          noDataMsg="Cari perlengkapan bayi dan masukkan di keranjang"
          isLoading={false}
          dataPerPageAmt={amtDataPerPage}
          onPageChange={setActivePage}
          activePage={activePage}
          actions={actions}
          tableRows={tableRows}
          tableHeadings={tableHeadings}
          showPagination={false}
          actionColumnWidth="120px"
          showTableHeader
          noDataMsgHeader="Belum Ada Barang Di Keranjang"
        />
        <Group className="gap-2 w-fit mt-2 self-end mb-4 mr-4">
          <Text className="text-xl font-roboto text-secondary-text self-end">
            Total Harga : {""}
          </Text>
          <Text className="text-white bg-dark-purple font-semibold text-3xl px-4">
            Rp. {totalPrice}
          </Text>
        </Group>
        {/* <Group className="px-4 justify-between bg-dark-purple">
          <Text className="font-semibold text-3xl text-white">
            Total Harga
          </Text>
        </Group> */}
      </Stack>
    </ConfirmationModal>
  );
};
export default OrderCartModal;
