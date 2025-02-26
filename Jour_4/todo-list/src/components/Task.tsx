import { Grid2 as Grid, Typography } from "@mui/material"
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

interface TaskProps {
    title: string;
    index: number;
    onClick: (index:number) => void;
    onDelete: (index:number) => void;
}

const Task = (task: TaskProps) => {
    return (
        <Grid container spacing={20} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
            {/*Check Button */}
            <Grid size={4} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} onClick={() => task.onClick(task.index)}>
                <CircleOutlinedIcon sx={{ cursor: "pointer" }} />
            </Grid>
            <Grid size={4} display={"flex"}  spacing={20} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                {/*Task */}
                <Typography variant={"h6"}>{task.title}</Typography>
            </Grid>
            {/*Delete Button */}
            <Grid size={4} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} onClick={() => task.onDelete(task.index)}>
                <DeleteOutlinedIcon sx={{ cursor: "pointer" }} />
            </Grid>
        </Grid>
    )
}

export default Task;