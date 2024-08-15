import { TextField } from "@mui/material";
import React, { useState } from "react";
import { customInputStyles, customMultilinesInputStyles } from "./style";
import { useDebouncedCallback } from "../../hooks/useDebounce";

interface MultilineInputProps {
  changeDetails?: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  label?: string;
  maxLength?: number;
  value?: string;
  showHelperText?: boolean;
  customStyles?: object;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const MultilineInput: React.FC<MultilineInputProps> = ({
  changeDetails = () => {},
  className = "",
  placeholder = "",
  disabled = false,
  id = "",
  label = "",
  maxLength = 0,
  value = "",
  showHelperText = false,
  customStyles = {},
  onKeyDown = () => {},
}) => {
  const [showHelper, setShowHelper] = useState(false);
  const debouncedChangeData = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      changeDetails(e);
    },
    300
  );
  return (
    <TextField
      className={className || ""}
      disabled={disabled}
      defaultValue={value}
      helperText={
        showHelperText && (value?.length || showHelper)
          ? `${value?.length || 0} / ${maxLength}`
          : ""
      }
      id={id}
      placeholder={placeholder}
      label={label}
      maxRows={5}
      minRows={4}
      multiline
      onBlur={() => setShowHelper(false)}
      onChange={debouncedChangeData}
      onFocus={() => setShowHelper(true)}
      onKeyDown={onKeyDown}
      sx={{
        ...customInputStyles,
        ...customMultilinesInputStyles,
        ...customStyles,
      }}
      variant="filled"
    />
  );
};
export default MultilineInput;
