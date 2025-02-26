import { Grid2 as Grid, Typography } from "@mui/material";
import React from "react";

interface SectionProps extends React.PropsWithChildren<{}> {
    title?: string;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: any;
}
const Section :React.FC<SectionProps> =({title,display,justifyContent,alignItems,flexDirection=undefined,children}) => {
    return (
        <>
            <Typography component="h1" variant="h2">
                {title}
            </Typography>
            <Grid display={display} justifyContent={justifyContent} alignItems={alignItems} flexDirection={flexDirection}   sx={{ border: "2px solid black", width: "100%",height:"400px",marginBottom:"20px"}}>
                {children}
            </Grid>
        </>
    )
}

export default Section;