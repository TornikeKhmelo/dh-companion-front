import { Box } from "@mui/material";
import "./App.css";
import AddNewTask from "./components/AddNewTask/AddNewTask";
import ButtonsGroup from "./components/ButtonsGroup/ButtonsGroup";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { useEffect, useState } from "react";
import axios from "axios";

interface TaskProps {
  id: number;
  title: string;
  details: string;
  completed: number | boolean;
}

function App() {
  const [taskView, setTaskView] = useState(true);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8888/tasks", {})
      .then((res) => {
        setTasks(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteTask = (id: number) => {
    axios.delete(`http://localhost:8888/tasks/${id}`).then((res) => {
      if (res.status === 200) {
        const updatedTask = tasks?.filter((item: TaskProps) => {
          return item.id !== id;
        });
        setTasks(updatedTask);
      }
    });
  };

  const handleUpdateTask = (id: number, title: string, details: string) => {
    axios
      .put(`http://localhost:8888/tasks/${id}`, { title, details })
      .then((res) => {
        if (res.status === 200) {
          const updatedTasks = tasks.map((task: TaskProps) =>
            task.id === id ? { ...task, title, details } : task
          );
          console.log(updatedTasks, "toko");
          setTasks(updatedTasks);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCompleteTask = (id: number) => {
    axios
      .put(`http://localhost:8888/tasks/${id}`, { completed: 1 })
      .then((res) => {
        if (res.status === 200) {
          const updatedTasks = tasks.map((task: TaskProps) =>
            task.id === id ? { ...task, completed: 1 } : task
          );
          setTasks(updatedTasks);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCreateTask = (title: string, details: string) => {
    const newTask = {
      title,
      details,
      completed: 0,
    };
    axios
      .post("http://localhost:8888/tasks", { existingTasks: tasks, newTask })
      .then((res) => {
        if (res.status === 201) {
          setTasks((prevTasks) => [...prevTasks, res.data]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClearTasks = () => {
    const completedStatus = taskView ? 0 : 1;
    axios
      .delete(`http://localhost:8888/tasks`, {
        params: { completed: completedStatus },
      })
      .then((res) => {
        if (res.status === 200) {
          setTasks((prevTasks) =>
            prevTasks.filter((task) => task.completed !== (taskView ? 0 : 1))
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isClearButtonDisabled = () => {
    return !tasks.some((task) => task.completed === (taskView ? 0 : 1));
  };
  const disabled = isClearButtonDisabled();
  console.log(isClearButtonDisabled);

  return (
    <Box sx={{ padding: "16px", background: "#E8F1FD", minHeight: "100vh" }}>
      <Header setSearchQuery={setSearchQuery} />
      <ButtonsGroup
        disabled={disabled}
        taskView={taskView}
        setTaskView={setTaskView}
        handleClearTasks={handleClearTasks}
      />
      <TaskList
        taskView={taskView}
        handleCompleteTask={handleCompleteTask}
        handleDeleteTask={handleDeleteTask}
        handleUpdateTask={handleUpdateTask}
        tasks={tasks}
        searchQuery={searchQuery}
      />
      <AddNewTask handleCreateTask={handleCreateTask} />
    </Box>
  );
}

export default App;
