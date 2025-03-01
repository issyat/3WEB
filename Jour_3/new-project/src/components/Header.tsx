import { Grid2 as Grid, Typography } from "@mui/material";

const Header = () => {
    return (
        <Grid mb={2} sx={{ bgcolor: "red", height:"100px"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Typography component={"h1"} variant="h4">Header</Typography>
        </Grid>
    );
    };

export default Header;