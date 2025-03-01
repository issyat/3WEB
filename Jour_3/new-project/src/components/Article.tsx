import { Grid2 as Grid, Typography } from "@mui/material";
const Article = () => {
    return (
        <Grid  mb={2} sx={{bgcolor: "orange",height:"200px"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Typography component={"h1"} variant="h4">Article</Typography>
        </Grid>
    );
    }

export default Article;