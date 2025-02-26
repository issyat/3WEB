import { Grid2 as Grid, Typography } from "@mui/material"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface CompletedTaskProps {
    title: string;
    index: number;
    onDelete: (index:number) => void;

}
const CompletedTask = (task: CompletedTaskProps) => {
    return (
        <Grid container spacing={20} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
            {/*Check Button */}
            <Grid size={4} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                <CheckCircleIcon />
            </Grid>
            {/*Task */}
            <Grid size={4}>
                <Typography variant={"h6"}>{task.title}</Typography>
            </Grid>
            {/*Delete Button */}
            <Grid size={4} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} onClick={() => task.onDelete(task.index)}>
                <DeleteOutlinedIcon sx={{ cursor: "pointer" }} />
            </Grid>
        </Grid>
    );
}

export default CompletedTask;