import {
  Group,
  Input,
  MantineColor,
  MantineSize,
  Text,
  useMantineTheme
} from "@mantine/core";
import { Dropzone, DropzoneProps } from "@mantine/dropzone";
import { useEffect, useState } from "react";
import {
  IconFileOutline
} from "../assets/icon/Fluent";

interface IDocumentInputProps
  extends Omit<DropzoneProps, "onChange" | "children" | "onDrop"> {
  error?: React.ReactNode;
  size?: MantineSize;
  value?: File;
  required?: boolean;
  withPreview?: boolean;
  onChange: (files: File | undefined) => void;
  label?: string;
  buttonLabel?: string;
  defaultUrl?: string;
  defaultName?: string;
  description?: string;
  placeholder?: string;
  withDelete?: boolean;
  color?: MantineColor;
  disabled?: boolean;
}

const DocumentInput: React.FC<IDocumentInputProps> = ({
  size = "lg",
  onChange,
  label,
  placeholder,
  value,
  required,
  disabled = false,
  accept,
  maxSize,
  defaultUrl,
  defaultName,
  error
}) => {
  if (value?.name === "undefined" || value?.size === 0) {
    value = undefined;
  }
  const [alert, setAlert] = useState("");
  const [dbFile, setDBFile] = useState<{
    defaultUrl?: string;
    defaultName?: string;
  }>({ defaultName, defaultUrl });
  useEffect(() => {
    setDBFile({ defaultName, defaultUrl });
  }, [defaultName, defaultUrl]);
  const theme = useMantineTheme();

  function handleDrop(files: File[]) {
    onChange(files[0]);
    setAlert("");
  }

  function handleReject(val: any[]) {
    setAlert(val[0]?.errors?.[0].message);
  }

  console.log("errpr", error);

  return (
    <>
      <Input.Wrapper
        size={size}
        error={alert}
        required={required}
        label={label}
        styles={{
          label: {
            color: theme.colors["primary-text"][5],
            marginBottom: "0px",
            fontSize: "14px",
            fontWeight: 400
          }
        }}
      >
        <Dropzone
          onDrop={handleDrop}
          className={
            `items-center gap-[1px] border py-8 mt-1 rounded-sm border-solid bg-secondary/50
            ${
              error == null || error == ""
                ? "border-secondary-text/50"
                : "border-error"
            }
            ` + (disabled == true ? `cursor-context-menu` : ``)
          }
          disabled={disabled}
          accept={accept}
          onReject={handleReject}
          maxSize={maxSize}
        >
          <Group className="gap-2 cursor-not-allowed mx-auto w-fit">
            <IconFileOutline
              size={32}
              color={theme.colors["secondary-text"][6]}
              className=""
            />
            <Text className="font-semibold text-secondary-text">
              {!!placeholder && (
                <Text className="text-secondary-text-500 text-lg tracking-1">
                  {value?.name || dbFile.defaultName || placeholder}
                </Text>
              )}
            </Text>
          </Group>
        </Dropzone>
        {error && <Text className="text-red text-md mt-1">{error}</Text>}
        {/* {((!!value && value?.name !== "undefined") || !!dbFile.defaultName) && (
          <Group grow spacing={"md"} className="mt-4">
            <Button
              variant="light"
              className="rounded-full bg-primary-text py-[10px] h-max text-white hover:bg-primary-text"
              onClick={onPreviewClick}
            >
              <PreviewIcon size={14} color={"white"} className="mr-2" />
              Lihat Pratinjau
            </Button>
            {withDelete && (
              <Button
                variant="light"
                className="rounded-full bg-red !important py-[10px] h-max text-white hover:bg-red"
                onClick={onDelete}
                disabled={disabled}
              >
                <DeleteOutline size={16} color={"white"} className="mr-2" />
                Hapus File
              </Button>
            )}
          </Group>
        )} */}
      </Input.Wrapper>
    </>
  );
};

export default DocumentInput;
