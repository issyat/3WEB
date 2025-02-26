import Article from "./article";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Section from "./Section";
import { Grid2 as Grid } from "@mui/material";

const LevelThree = () => {
    return (
        <>
            <Header />
            <Nav />
            <Grid container spacing={2} >
                <Grid size={6}>
                    <Section />
                    <Article />
                </Grid>
                <Grid size={6} mb={2}> 
                    <Aside />
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default LevelThree;