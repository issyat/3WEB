import { Box, Grid2 as Grid } from "@mui/material";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    text: string;
    width?: number | string;
    height?: number | string;
}

const Card = ({ children, text, width = "100%", height = "auto" }: CardProps) => {
    return (
        <Grid
            p={0.5}
            sx={{
                bgcolor: "white",
                width: width,
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Grid
                sx={{
                    bgcolor: "rgba(236, 236, 236, 0.308)",
                    borderRadius: 10,
                    flexGrow: 1, // Ensures all cards take equal height
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    mt={2}
                    ml={2}
                    sx={{
                        color: "black",
                        p: 2,
                        bgcolor: "white",
                        fontWeight: "bold",
                        borderRadius: 10,
                        width: "fit-content",
                    }}
                >
                    {text}
                </Box>
                <Box flexGrow={1} display="flex" flexDirection="column">
                    {children}
                </Box>
            </Grid>
        </Grid>
    );
};

export default Card;
