import CloseIcon from "@mui/icons-material/Close";
import { Box, DialogTitle, IconButton, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface TitleProps {
  closeDialog: () => void;
  title?: string;
  titleBadge?: ReactNode;
  titleIcon?: ReactNode;
}

const Title: React.FC<TitleProps> = ({
  closeDialog,
  title,
  titleBadge,
  titleIcon,
}) => {
  return (
    <DialogTitle>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box />
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            justifySelf: "center",
          }}
        >
          {titleIcon}
          <Typography variant="h4">{title}</Typography>
          {titleBadge}
        </Box>
        <IconButton
          onClick={() => closeDialog()}
          sx={{
            marginRight: "-8px",
            marginTop: "-8px",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </DialogTitle>
  );
};
export default Title;
