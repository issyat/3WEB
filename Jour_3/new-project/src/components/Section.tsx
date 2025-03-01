import { Grid2 as Grid, Typography } from "@mui/material";


const Section =() => {
    return (
        <Grid  mb={2} sx={{bgcolor: "yellow",height:"200px"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Typography component={"h1"} variant="h4">Section</Typography>
        </Grid>
    )
}

export default Section;