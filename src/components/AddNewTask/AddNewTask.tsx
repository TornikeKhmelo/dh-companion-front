import React, { useState } from "react";
import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TaskModal from "../TaskModal/TaskModal";

interface AddNewTaskProps {
  handleCreateTask: (title: string, details: string) => void;
}

const AddNewTask: React.FC<AddNewTaskProps> = ({ handleCreateTask }) => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const onCloseModal = () => {
    setOpenModal(false);
    setTitle("");
    setDetails("");
  };
  const submitModal = () => {
    handleCreateTask(title, details);
    onCloseModal();
  };
  return (
    <Box>
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "fixed",
          bottom: 16,
          right: "45%",
          background: "#6A6CE0",
        }}
        onClick={() => setOpenModal(true)}
      >
        <AddIcon />
      </Fab>
      <TaskModal
        openDialog={openModal}
        dialogTitle="Create task"
        title={title}
        details={details}
        setDetails={setDetails}
        setTitle={setTitle}
        cancelCallback={onCloseModal}
        submitCallback={submitModal}
      />
    </Box>
  );
};

export default AddNewTask;
