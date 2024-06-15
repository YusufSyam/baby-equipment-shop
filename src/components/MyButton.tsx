import {
  Button,
  ButtonProps,
  createPolymorphicComponent,
} from "@mantine/core";
import { forwardRef } from "react";

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...others }, ref) => (
    <Button
      variant="light"
      ref={ref}
      // className="bg-white hover:bg-white w-fit border rounded-full border-primary-text-500 text-primary-text-500"
      {...others}
      styles={{
        root: {
          backgroundColor: "#FFFFFF !important",
          width: "fit !important",
          border: "1px solid #334155 !important",
          borderRadius: "999px !important",
          color: "#334155 !important",
          fontSize: "16px",
          
          paddingTop: "8px",
          paddingBottom: "9px",
          height: "40px",
          ":disabled":{
            backgroundColor: "#deddf1 !important",
            color: "#94a3b8 !important",
          }
        }
      }}
    >
      {children}
    </Button>
  )
);

const _Button2 = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...others }, ref) => (
    <Button
      variant="light"
      ref={ref}
      // className="bg-white hover:bg-white w-fit border rounded-full border-primary-text-500 text-primary-text-500"
      {...others}
      styles={{
        root: {
          backgroundColor: "#FFFFFF !important",
          width: "fit !important",
          border: "1px solid #334155 !important",
          
          borderRadius: "999px !important",
          color: "#334155 !important",
          ":disabled": {
            backgroundColor: "#deddf1 !important",
            color: "#94a3b8 !important"
          }
        }
      }}
    >
      {children}
    </Button>
  )
);

const _Button3 = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...others }, ref) => (
    <Button
      variant="light"
      ref={ref}
      // className="bg-white hover:bg-white w-fit border rounded-full border-primary-text-500 text-primary-text-500"
      {...others}
      styles={{
        root: {
          backgroundColor: "#FFFFFF !important",
          width: "fit !important",
          border: "1px solid #334155 !important",
          borderRadius: "999px !important",
          color: "#334155 !important",
          ":disabled": {
            backgroundColor: "#deddf1 !important",
            color: "#94a3b8 !important"
          }
        }
      }}
      className="!bg-orange !rounded-md !border-transparent !text-white !hover:bg-orange"
    >
      {children}
    </Button>
  )
);

const _Button4 = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...others }, ref) => (
    <Button
      variant="light"
      ref={ref}
      // className="bg-white hover:bg-white w-fit border rounded-full border-primary-text-500 text-primary-text-500"
      {...others}
      styles={{
        root: {
          backgroundColor: "#FFFFFF !important",
          width: "fit !important",
          border: "1px solid #334155 !important",
          borderRadius: "999px !important",
          color: "#334155 !important",
          ":disabled": {
            backgroundColor: "#deddf1 !important",
            color: "#94a3b8 !important"
          }
        }
      }}
      className="!text-orange !border-white "
    >
      {children}
    </Button>
  )
);

export const SmallButton = createPolymorphicComponent<"button", ButtonProps>(
  _Button2
);
export const ModalYesButton = createPolymorphicComponent<"button", ButtonProps>(
  _Button3
);
export const ModalNoButton = createPolymorphicComponent<"button", ButtonProps>(
  _Button4
);
const MediumButton = createPolymorphicComponent<"button", ButtonProps>(_Button);

export default MediumButton;
