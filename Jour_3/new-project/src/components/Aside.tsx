import { Grid2 as Grid, Typography } from "@mui/material";

const Aside = () => {
    return (
        <Grid  sx={{ bgcolor: "pink",height:"100%" }} display={"flex"} justifyContent={"center"} alignItems={"center"}>
             <Typography component={"h1"} variant="h4">Aside</Typography>
        </Grid>
    );
};

export default Aside;