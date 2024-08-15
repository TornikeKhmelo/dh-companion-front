import React, { useState } from "react";
import { Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "../../img/deleteIcon.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "../../img/editIcon.svg";
import CompletedIcon from "../../img/completedIcon.svg";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TaskModal from "../TaskModal/TaskModal";

interface TaskProps {
  title: string;
  details: string;
  completed: boolean | number;
  id: number;
}

interface TaskItemProps {
  task: TaskProps;
  handleDeleteTask: (id: number) => void;
  handleUpdateTask: (id: number, title: string, details: string) => void;
  handleCompleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  handleDeleteTask,
  handleUpdateTask,
  handleCompleteTask,
}) => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  const [openModal, setOpenModal] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [title, setTitle] = useState(task?.title || "");
  const [details, setDetails] = useState(task?.details || "");

  const submitModal = () => {
    handleUpdateTask(task?.id, title, details);
    setOpenModal(false);
  };
  return (
    <Box sx={{ padding: "16px 0" }}>
      <Accordion
        defaultExpanded
        key={task?.id}
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
        sx={{
          boxShadow: "0px 2px 8px 0px #6A6CE042",
          background: "#F6FAFF",
          borderRadius: "12px !important",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            display: "flex",
            alignItems: "start",
            "& .MuiAccordionSummary-expandIconWrapper": {
              marginTop: "10px",
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Typography sx={{ mb: "16px", ml: "18px" }}>
              {task?.title}
            </Typography>
            {expanded && task?.details.length !== 0 && (
              <AccordionDetails
                sx={{
                  boxShadow: "1px 1px 4px 0px #30507D40 inset",
                  background: "#E8F1FD",
                  mb: "16px",
                }}
              >
                <Typography>{task?.details}</Typography>
              </AccordionDetails>
            )}
            <AccordionActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
              onClick={handleClick}
            >
              <Box>
                {(task?.completed === 0 || !task?.completed) && (
                  <IconButton
                    onClick={() => setOpenModal(true)}
                    color="primary"
                  >
                    <img src={EditIcon} alt="editIcon" />
                  </IconButton>
                )}
                <IconButton
                  onClick={() => handleDeleteTask(task.id)}
                  color="error"
                >
                  <img src={DeleteIcon} alt="editIcon" />
                </IconButton>
              </Box>
              <Box
                onClick={() =>
                  task?.completed === 0 || !task?.completed
                    ? handleCompleteTask(task?.id)
                    : {}
                }
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Typography variant="body2" component="span">
                  {task?.completed === 0 || !task?.completed
                    ? "Mark completed"
                    : "Completed"}
                </Typography>
                <img src={CompletedIcon} alt="editIcon" />
              </Box>
            </AccordionActions>
          </Box>
        </AccordionSummary>
      </Accordion>

      <TaskModal
        details={details}
        title={title}
        setDetails={setDetails}
        setTitle={setTitle}
        openDialog={openModal}
        cancelCallback={() => setOpenModal(false)}
        dialogTitle="Edit Task Name"
        submitCallback={submitModal}
      />
    </Box>
  );
};
export default TaskItem;
