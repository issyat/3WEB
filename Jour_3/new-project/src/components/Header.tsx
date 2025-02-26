import { Grid2 as Grid } from "@mui/material";

const Header = () => {
    return (
        <Grid mb={2} sx={{ bgcolor: "red", height:"100px"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <h1>Header</h1>
        </Grid>
    );
    };

export default Header;