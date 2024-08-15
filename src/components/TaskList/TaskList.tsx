import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import { Box } from "@mui/material";

interface TaskProps {
  id: number;
  title: string;
  details: string;
  completed: number | boolean;
}

interface TaskListProps {
  taskView: boolean;
  tasks: TaskProps[];
  handleDeleteTask: (id: number) => void;
  handleUpdateTask: (id: number, title: string, details: string) => void;
  handleCompleteTask: (id: number) => void;
  searchQuery: string;
}
const TaskList: React.FC<TaskListProps> = ({
  handleCompleteTask,
  handleDeleteTask,
  handleUpdateTask,
  tasks,
  taskView,
  searchQuery,
}) => {
  const filteredTasks = tasks
    .filter((task: TaskProps) => (taskView ? !task.completed : task.completed))
    .filter(
      (task: TaskProps) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.details.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <Box sx={{ gap: 2 }}>
      {filteredTasks?.map((task: TaskProps) => (
        <TaskItem
          handleCompleteTask={handleCompleteTask}
          handleDeleteTask={handleDeleteTask}
          handleUpdateTask={handleUpdateTask}
          key={task?.id}
          task={task}
        />
      ))}
    </Box>
  );
};
export default TaskList;
