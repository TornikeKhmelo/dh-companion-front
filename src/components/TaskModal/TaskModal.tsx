import React from "react";
import CustomDialog from "../CustomDialog/CustomDialog";
import CustomInput from "../Inputs/CustomInput";
import MultilineInput from "../Inputs/MultilineInput";
import { Box } from "@mui/material";

interface TaskModalProps {
  openDialog: boolean;
  cancelCallback: () => void;
  submitCallback: () => void;
  setTitle: (value: string) => void;
  setDetails: (details: string) => void;
  title: string;
  details: string;
  dialogTitle: string;
}
const TaskModal: React.FC<TaskModalProps> = ({
  openDialog,
  cancelCallback,
  dialogTitle,
  submitCallback,
  title,
  details,
  setDetails,
  setTitle,
}) => {
  const handleChangeTeamName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const changeDetails = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setDetails(event.target.value);
  };

  const closeDialog = () => {
    setDetails("");
    setTitle("");
    cancelCallback();
  };

  return (
    <CustomDialog
      openDialog={openDialog}
      cancelCallback={closeDialog}
      dialogTitle={dialogTitle}
      submitCallback={submitCallback}
      disabledSubmit={title.length === 0}
    >
      <Box sx={{ padding: "0 16px" }}>
        <CustomInput
          label="Task Name"
          changeTaskName={handleChangeTeamName}
          value={title}
          id="taskName"
        />
        <MultilineInput
          changeDetails={changeDetails}
          placeholder="Type task details here..."
          customStyles={{
            boxShadow: "1px 1px 4px 0px #30507D40 inset",
            background: "#E8F1FD",
            mb: "16px",
          }}
          value={details}
        />
      </Box>
    </CustomDialog>
  );
};

export default TaskModal;
