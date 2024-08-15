import { TextField } from "@mui/material";
import React from "react";
import { customInputStyles } from "./style";

interface CustomInputProps {
  label: string;
  id: string;
  changeTaskName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onBlur?: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label = "",
  id = "",
  changeTaskName,
  value = "",
  onBlur = () => {},
}) => {
  return (
    <TextField
      autoComplete="off"
      label={label}
      id={id}
      variant="filled"
      onChange={changeTaskName}
      sx={{
        ...customInputStyles,
        minHeight: "40px",
        mb: "16px",
        border: "1px solid #6A6CE0",
        background: "#FFFEFC",
        borderRadius: "6px",
      }}
      value={value}
      onBlur={onBlur}
    />
  );
};

export default CustomInput;
