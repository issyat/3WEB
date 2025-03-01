import { Grid2 as Grid, Typography } from "@mui/material";
const Footer = () => {
    return (
        <Grid  mb={2} sx={{ bgcolor: "grey", height: "100px" }} display={"flex"} justifyContent={"center"} alignItems={"center"}>
             <Typography component={"h1"} variant="h4">Header</Typography>
        </Grid>
    );
};

export default Footer;