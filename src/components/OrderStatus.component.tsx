import { Stack, Text } from "@mantine/core";
import React from "react";
import {
  IconCheckOutline,
  IconCloseOutline,
  IconShippingOutline,
  IconStopFilledRounded
} from "../assets/icon/Fluent";
import { toTitleCase } from "../utils/functions/string";

export interface IOrderStatusComp {
  orderStatus: TOrderStatus;
}

export type TOrderStatus =
  | "PAID"
  | "UNPAID"
  | "INPROCESS"
  | "CANCELLED"
  | "COMPLETED";

const OrderStatusComp: React.FC<IOrderStatusComp> = ({
  orderStatus = "INPROCESS"
}) => {
  if (orderStatus === "PAID" || orderStatus === "COMPLETED") {
    return (
      <Stack className="gap-1 w-28">
        <IconCheckOutline
          color="white"
          size={28}
          className="p-1 bg-green self-center"
        />
        <Text className="text-sm text-secondary-text-500 text-center">
          Selesai
        </Text>
      </Stack>
    );
  } else if (orderStatus === "CANCELLED") {
    return (
      <Stack className="gap-1 w-28">
        <IconCloseOutline
          color="white"
          size={28}
          className="p-1 bg-red self-center"
        />
        <Text className="text-sm text-secondary-text-500 text-center">
          Dibatalkan
        </Text>
      </Stack>
    );
  } else if (orderStatus === "INPROCESS") {
    return (
      <Stack className="gap-1 w-28">
        <IconStopFilledRounded
          color="white"
          size={28}
          className="p-1 bg-secondary-text self-center"
        />
        <Text className="text-sm text-secondary-text-500 text-center">
          {/* {toTitleCase(orderStatus)} */}
          Belum diorder
        </Text>
      </Stack>
    );
  } else {
    return (
      <Stack className="gap-1 w-28">
        <IconShippingOutline
          color="white"
          size={28}
          className="p-1 bg-darker-orange self-center"
        />
        <Text className="text-sm text-secondary-text-500 text-center">
          Dalam Proses
        </Text>
      </Stack>
    );
  }
};
export default OrderStatusComp;
