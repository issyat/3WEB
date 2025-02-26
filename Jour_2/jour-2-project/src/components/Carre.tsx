import { Box } from "@mui/material";

interface carre{
    color?:string;
}

const Carre = ({color="red"}:carre) => {
    return (
        <Box m={1} sx={{width:"100px",height:"100px",backgroundColor:color,border:"1px solid black"}}></Box>
    )
}

export default Carre;