import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import HistoryIcon from "../../img/historyIcon.svg";
import TaskIcon from "../../img/taskIcon.svg";

interface ButtonsGroupProps {
  disabled: boolean;
  taskView: boolean;
  setTaskView: React.Dispatch<React.SetStateAction<boolean>>;
  handleClearTasks: () => void;
}

const ButtonsGroup: React.FC<ButtonsGroupProps> = ({
  disabled,
  taskView,
  setTaskView,
  handleClearTasks,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <IconButton onClick={() => setTaskView(true)}>
          <img
            src={TaskIcon}
            alt="editIcon"
            style={{
              width: "28px",
              height: "28px",
              background: taskView ? " #6A6CE0" : "#D8D8D8",
              borderRadius: "8px",
              padding: "4px",
            }}
          />
        </IconButton>
        <IconButton onClick={() => setTaskView(false)}>
          <img
            src={HistoryIcon}
            alt="editIcon"
            style={{
              width: "28px",
              height: "28px",
              background: taskView ? "#D8D8D8" : "#6A6CE0",
              borderRadius: "8px",
              padding: "4px",
            }}
          />
        </IconButton>
      </Box>
      <Button
        sx={{
          color: "#30507D",
          textDecoration: "underline",
          "&:hover": {
            color: "#30507D",
            backgroundColor: "transparent",
            textDecoration: "underline",
          },
          "&.Mui-disabled": {
            color: "#30507D",
            backgroundColor: "transparent",
            textDecoration: "underline",
          },
        }}
        disabled={disabled}
        onClick={handleClearTasks}
      >
        {taskView ? "Clear all Tasks" : "Clear History"}
      </Button>
    </Box>
  );
};

export default ButtonsGroup;
