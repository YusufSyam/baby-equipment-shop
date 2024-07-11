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
  IconExpandOutlinedRounded,
  IconInfoOutline,
  IconOutward
} from "../../assets/icon/Fluent";
import { useNavigate } from "react-router-dom";

export interface IAdminPage {}

export interface IActivityTableRow {
  itemName: string;
  itemId: string;
  buyerName: string;
  buyerId: string;
  status: string;
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
    label: "Pembeli",
    sortable: true,
    textAlign: "left",
    cellKey: "buyer"
  },
  {
    label: "Status",
    sortable: true,
    textAlign: "left",
    cellKey: "status"
  },
  {
    label: "Harga",
    sortable: true,
    textAlign: "left",
    cellKey: "priceDetail"
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
              <Text className="text-[14px] font-roboto">{data?.itemName}</Text>
              <IconOutward color={theme.colors['dark-purple'][5]} size={18} />
            </Group>
          )
        },
        buyer: {
          label: data?.buyerName,
          element: (
            <Stack className="gap-1">
              <Text className="text-[14px] font-roboto">{data?.buyerName}</Text>
              <Stack className="gap-0">
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
          label: data?.status
        },
        priceDetail: {
          label: data?.itemTotalPrice,
          element: (
            <Stack className="gap-1">
              <Text className="text-[16px] font-roboto">
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
      label: "Proses",
      eachButtonRounded: true,
      backgroundColor: "green",
      // isDisabled: (row: any) => {
      //   return row.activity.label == "return";
      // },
      // Row disini itu row yang ada di table rows
      onClick: (row: any) => {
        setSelectedRow(row.id.label);
        setIsProcessItemModalOpened(true);
      }
    }
  ];

  return (
    <AppLayout headerBackgroundType="normal" activePage="">
      <Stack className="mx-12 mt-4">
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
          actionOrientation="vertical"
          onProgressData={0}
          showTableHeader
          actionColumnWidth="200px"
        />
      </Stack>
    </AppLayout>
  );
};
export default AdminPage;
