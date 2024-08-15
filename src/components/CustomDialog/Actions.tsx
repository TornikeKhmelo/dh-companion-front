import { Button, DialogActions } from "@mui/material";
import React from "react";

interface ActionsProps {
  disabled?: boolean;
  submitCallback: () => void;
}

const Actions: React.FC<ActionsProps> = ({ disabled, submitCallback }) => {
  return (
    <DialogActions>
      <Button
        variant="contained"
        onClick={submitCallback}
        disableElevation
        disabled={disabled}
        sx={{
          width: "100%",
          backgroundColor: "#6A6CE0",
          "&:hover": {
            color: "white",
            backgroundColor: "#6A6CE0",
          },
        }}
      >
        Save
      </Button>
    </DialogActions>
  );
};

export default Actions;
