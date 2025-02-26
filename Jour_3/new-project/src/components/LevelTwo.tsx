import { Grid2 as Grid } from "@mui/material";



const result = () => {
    const elements = [];
    for(let i=1;i<13;i++){
        for(let j=0;j<i;j++){
        elements.push(<Grid size={12/i} color={"white"} bgcolor={"green"}>{j+1}</Grid>);
        }
    }
    return elements;
}

const LevelTwo = () => {    
    return (
        <>
            <Grid container spacing={1} >
                {result()}
            </Grid>
        </>
    )
};

export default LevelTwo;
