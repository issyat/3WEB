import { Grid2 as Grid } from "@mui/material";
import sizeValues from "../constants/SizeValues";
const LevelOne = () => {
    return (
        <>  
            <Grid container spacing={1} columns={12} >
                {sizeValues.map((sizeValue) =>
                    (sizeValue.gridOne === 0 || sizeValue.gridTwo === 0) ? (
                        <Grid size={Math.max(sizeValue.gridOne, sizeValue.gridTwo)}color={"white"} bgcolor={"purple"}>{Math.max(sizeValue.gridOne, sizeValue.gridTwo)}</Grid>
                    ) : (
                        <>
                            <Grid size={sizeValue.gridOne} color={"white"} bgcolor={"purple"}>{sizeValue.gridOne}</Grid>
                            <Grid size={sizeValue.gridTwo} color={"white"} bgcolor={"purple"}>{sizeValue.gridTwo}</Grid>
                        </>
                    )
                )}
            </Grid>
        </>

    );
};

export default LevelOne;