import { Grid2 as Grid, Typography} from "@mui/material";


const Nav = () => {
    return (
        <Grid  mb={2} sx={{ bgcolor: "cyan", height:"100px"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
             <Typography component={"h1"} variant="h4">Nav</Typography>
        </Grid>
    );
    };

export default Nav;