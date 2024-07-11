import {
  NumberInput as MantineNumberInput,
  TextInput as MantineTextInput,
  NumberInputProps,
  NumberInputStylesNames,
  PasswordInput,
  PasswordInputProps,
  Select,
  SelectProps,
  SelectStylesNames,
  Styles,
  TextInputProps,
  TextInputStylesNames,
  Textarea,
  TextareaProps,
  useMantineTheme
} from "@mantine/core";
import {
  DatePickerInput,
  DatePickerInputProps,
  DateTimePicker,
  DateTimePickerProps
} from "@mantine/dates";
import { useState } from "react";
import { IconCalendarLtrOutline, SearchFilled } from "../assets/icon/Fluent";

export const getDefaultStyle = (
  isFocus: boolean,
  isError: boolean
): Styles<TextInputStylesNames> | undefined => {
  const theme = useMantineTheme();
  const color = isError
    ? theme.colors.error[5]
    : theme.colors["primary-text"][5];
  const bacol = isError
    ? theme.colors.error[5]
    : isFocus
    ? theme.colors["orange"][5]
    : theme.colors["secondary"][7];
  return {
    input: {
      borderRadius: "2px",
      borderWidth: "1px",
      borderColor: bacol,
      color,
      letterSpacing: "0.01em",
      backgroundColor: theme.colors["white"][5],
      fontSize: "14px",
      marginTop: "8px"
    },
    label: {
      color,
      fontSize: "14px",
    }
  };
};

export const getDefaultStyleOld = (
  isFocus: boolean,
  isError: boolean
): Styles<TextInputStylesNames> | undefined => {
  const theme = useMantineTheme();
  const color = isError
    ? theme.colors.error[5]
    : isFocus
    ? theme.colors["primary-text"][5]
    : theme.colors["secondary-text"][7];
  return {
    input: {
      ":focus": {
        border: "2px solid",
        color
      },
      borderWidth: "2px",
      borderRadius: theme.radius.md,
      color,
      marginTop: "8px"
    },
    label: {
      fontFamily: "poppins",
      color
    },
    error: {
      marginTop: 8
    }
  };
};

export const getDefaultStyleSearch = (
  isFocus: boolean,
  isError: boolean
):
  | Styles<TextInputStylesNames | NumberInputStylesNames | SelectStylesNames>
  | undefined => {
  const theme = useMantineTheme();
  const color = isError
    ? theme.colors.error[5]
    : isFocus
    ? theme.colors["primary-text"][5]
    : theme.colors["secondary-text"][7];
  const bacol = isError
    ? theme.colors.error[5]
    : isFocus
    ? theme.colors["orange"][5]
    : theme.colors["secondary"][7];
  return {
    rightSection: {
      width: "50px"
    },
    input: {
      borderRadius: "2px",
      borderWidth: "1px",
      borderColor: bacol,
      color,
      letterSpacing: "0.01em",
      backgroundColor: theme.colors["white"][5],
      fontSize: "14px"
    },
    label: {
      fontFamily: "poppins",
      color
    },
    icon: {
      paddingLeft: "6px"
    }
  };
};

export const getDefaultStyleSearch2 = (
  isFocus: boolean,
  isError: boolean
):
  | Styles<TextInputStylesNames | NumberInputStylesNames | SelectStylesNames>
  | undefined => {
  const theme = useMantineTheme();
  const color = isError
    ? theme.colors.error[5]
    : isFocus
    ? theme.colors["primary-text"][5]
    : theme.colors["secondary-text"][7];
  return {
    rightSection: {
      width: "50px"
    },
    input: {
      borderRadius: "6px",
      padding: "24px",
      borderWidth: "0px",
      color,
      // fontWeight: 400,
      fontFamily: "poppins",
      letterSpacing: "0.01em",
      backgroundColor: theme.colors["white"][5],
      fontSize: "16px"
    },
    label: {
      fontFamily: "poppins",
      color
    },
    icon: {
      paddingLeft: "6px"
    }
  };
};

export const getDefaultStyleDatePickerInput = (
  isFocus: boolean,
  isError: boolean
):
  | Styles<TextInputStylesNames | NumberInputStylesNames | SelectStylesNames>
  | undefined => {
  const theme = useMantineTheme();
  const color = isError
    ? theme.colors.error[5]
    : isFocus
    ? theme.colors["white"][5]
    : theme.colors["white"][5];
  return {
    input: {
      // ":focus": {
      //   border: "2px solid",
      //   backgroundColor: theme.colors["green"][5],
      //   paddingRight: "36px",
      //   color
      // },
      // ":focus-within":{
      //   paddingRight: "2px",
      // },
      padding: "8px",
      paddingRight: "36px",
      borderWidth: "2px",
      borderRadius: "9999px",
      borderColor: theme.colors["green"][5],
      backgroundColor: theme.colors["green"][5],
      fontFamily: "poppins-light",
      color,
      fontWeight: 600,
      letterSpacing: "0.01em",
      ":disabled": {
        color
      }
    },
    label: {
      fontFamily: "poppins",
      color
    },
    icon: {
      paddingLeft: "6px",
      color: "white"
    }
  };
};

export const MyTextInput = ({ onFocus, onBlur, ...props }: TextInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <>
      <MantineTextInput
        className="text-primary-text"
        styles={{ ...getDefaultStyle(isFocus, !!props.error) }}
        onFocus={(e) => {
          setIsFocus(true);
          if (!!onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocus(false);
          if (!!onBlur) onBlur(e);
        }}
        {...props}
      />
    </>
  );
};

export const MyTextAreaInput = ({ onFocus, onBlur, ...props }: TextareaProps ) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <>
      <Textarea
        className="text-primary-text"
        styles={{ ...getDefaultStyle(isFocus, !!props.error) }}
        onFocus={(e) => {
          setIsFocus(true);
          if (!!onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocus(false);
          if (!!onBlur) onBlur(e);
        }}
        {...props}
      />
    </>
  );
};

export const MySelectInput = ({ onFocus, onBlur, ...props }: SelectProps ) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <>
      <Select
        className="text-primary-text"
        styles={{ ...getDefaultStyle(isFocus, !!props.error) }}
        onFocus={(e) => {
          setIsFocus(true);
          if (!!onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocus(false);
          if (!!onBlur) onBlur(e);
        }}
        {...props}
      />
    </>
  );
};

export const MyPasswordInput = ({
  onFocus,
  onBlur,
  ...props
}: PasswordInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <>
      <PasswordInput
        className="text-primary-text"
        styles={{ ...getDefaultStyle(isFocus, !!props.error) }}
        onFocus={(e) => {
          setIsFocus(true);
          if (!!onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocus(false);
          if (!!onBlur) onBlur(e);
        }}
        {...props}
      />
    </>
  );
};

export const MyNumberInput = ({
  onFocus,
  onBlur,
  ...props
}: NumberInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <MantineNumberInput
      size="lg"
      // hideControls
      styles={{ ...getDefaultStyle(isFocus, !!props.error) }}
      onFocus={(e) => {
        setIsFocus(true);
        if (!!onFocus) onFocus(e);
      }}
      onBlur={(e) => {
        setIsFocus(false);
        if (!!onBlur) onBlur(e);
      }}
      {...props}
    />
  );
};

{
  /* <DatePicker
          allowDeselect
          value={value}
          minDate={minDate}
          maxDate={maxDate}
          size="md"
          locale="id"
          onChange={(v: Date) => {
            console.log("Ini v: ", v);
            setValue(v);
          }}
          styles={{
            calendar: {
              margin: "auto"
            }
          }}
          getDayProps={(date) => {
            if (value != null && date.getTime() == value.getTime()) {
              return {
                bg: `${theme.colors["red"][5]} !important`
              };
            }

            return {};
          }}
          yearLabelFormat="[Tahun] YYYY"
        /> */
}

export const MyDatePickerInput = ({
  onFocus,
  onBlur,
  ...props
}: DatePickerInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const theme = useMantineTheme();
  return (
    <DatePickerInput
      size="md"
      styles={{ ...getDefaultStyleDatePickerInput(isFocus, !!props.error) }}
      icon={
        <IconCalendarLtrOutline
          color={theme.colors["white"][5]}
          className={`self-center`}
        />
      }
      onFocus={(e) => {
        setIsFocus(true);
        if (!!onFocus) onFocus(e);
      }}
      onBlur={(e) => {
        setIsFocus(false);
        if (!!onBlur) onBlur(e);
      }}
      {...props}
    />
  );
};

export const MyDateTimePickerInput = ({
  onFocus,
  onBlur,
  ...props
}: DateTimePickerProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <DateTimePicker
      placeholder={"Masukkan Tanggal"}
      dropdownType="modal"
      valueFormat="DD MMM YYYY hh:mm A"
      locale="id"
      clearable
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      size="md"
      styles={{ ...getDefaultStyle(isFocus, !!props.error) }}
      onFocus={(e) => {
        setIsFocus(true);
        if (!!onFocus) onFocus(e);
      }}
      onBlur={(e) => {
        setIsFocus(false);
        if (!!onBlur) onBlur(e);
      }}
      {...props}
    />
  );
};

export const MySearchInput = ({
  onFocus,
  onBlur,
  ...props
}: TextInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const theme = useMantineTheme();

  return (
    <>
      <MantineTextInput
        styles={{ ...getDefaultStyleSearch(isFocus, !!props.error) }}
        placeholder="Lorem ipsum dolor sit amet."
        // rightSection={
        //   <SearchFilled size={20} color={theme.colors["white"][7]} className="cursor-pointer bg-orange h-full w-full p-[6px] rounded-r-md" />
        // }
        onFocus={(e) => {
          setIsFocus(true);
          if (!!onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocus(false);
          if (!!onBlur) onBlur(e);
        }}
        {...props}
      />
    </>
  );
};
