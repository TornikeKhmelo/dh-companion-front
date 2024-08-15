import { Dialog } from "@mui/material";
import React, { ReactNode } from "react";
import Title from "./Title";
import Actions from "./Actions";
import { dialogPaperStyles } from "./styles";

interface CustomDialogProps {
  cancelCallback: () => void;
  children?: ReactNode;
  customStyles?: object;
  disableOnCloseByClickOutside?: boolean;
  disabledSubmit?: boolean;
  openDialog?: boolean;
  submitCallback: () => void;
  dialogTitle?: string;
}
const CustomDialog: React.FC<CustomDialogProps> = ({
  cancelCallback,
  children,
  customStyles,
  disableOnCloseByClickOutside,
  disabledSubmit,
  openDialog,
  submitCallback,
  dialogTitle,
}) => {
  return (
    <Dialog
      disableEscapeKeyDown={disableOnCloseByClickOutside}
      open={!!openDialog}
      onClose={() => (disableOnCloseByClickOutside ? {} : cancelCallback())}
      keepMounted={false}
      PaperProps={{
        sx: { ...dialogPaperStyles, ...customStyles },
      }}
    >
      <Title closeDialog={cancelCallback} title={dialogTitle} />
      {children}
      <Actions disabled={disabledSubmit} submitCallback={submitCallback} />
    </Dialog>
  );
};
export default CustomDialog;
