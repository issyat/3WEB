import { Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Task from "./components/Task";
import CompletedTask from "./components/CompletedTask";
import { useState } from "react";
import { Grid2 as Grid } from "@mui/material";

function App() {

  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const handleSubmit = () => {
    const input = document.querySelector("input") as HTMLInputElement;
    setTasks([...tasks, input.value]);
    input.value = "";
  };

  const handleTaskClick = (index: number) => {
    const task = tasks[index];
    setCompletedTasks([...completedTasks, task]);
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  const hadnleTaskDelete = (index: number) => () => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  const hadnleCompletedTaskDelete = (index: number) => () => {
    completedTasks.splice(index, 1);
    setCompletedTasks([...completedTasks]);
  };
  return (
    <Grid
      container
      sx={{
        width: "fit-content",
        border: "1px solid black",
        margin: "auto",
        borderRadius: 5,
      }}
      display="flex"
      flexDirection="column"
    >
      {/* Title */}
      <Grid m={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography component="h1" variant="h4" sx={{ color: "Black", fontSize: 80, fontWeight: 800 }}>
          Daily Tasks
        </Typography>
      </Grid>
      {/* Input and Button */}
      <Grid m={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <input
          type="text"
          placeholder="Enter your Task"
          style={{ border: "1px solid black", borderRadius: "80px", height: "50px", width: "400px", padding: "3px" }}
        />
        <Grid m={2}>
          <Fab component="button" onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>

      {/* Tasks List */}
      {tasks.map((task, index) => (
        <Task key={index} title={task} onClick={() => handleTaskClick(index)} onDelete={hadnleTaskDelete(index)} index={0} />
      ))}

      {/* Completed Tasks */}
      <Typography p={2}>Completed ({completedTasks.length})</Typography>
      {completedTasks.map((task, index) => (
        <CompletedTask key={index} title={task} onDelete={hadnleCompletedTaskDelete(index)} index={0} />
      ))}
    </Grid>
  );
}

export default App;
