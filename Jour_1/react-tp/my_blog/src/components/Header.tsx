import { Box, Typography } from "@mui/material";
import logo from "../assets/icons/logo.png";
import mypic from "../assets/images/my_pic.jpg";

const Header = () => {
    return (
        <>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <Box sx={{ color: 'black', p: 2, width: "70%" }} display={"flex"} alignItems={"center"} >
                    <Box
                        component="img"
                        sx={{ width: 50, height: 50 }}
                        alt="Logo"
                        src={logo}
                    />
                    <Typography variant="h6" component="h1" ml={2} sx={{ fontFamily: "'Courier New', Courier, monospace;", fontWeight: 800, fontSize: { xs: 15, md: 20 } }}>
                        Ismailaouladtouhami@gmail.com
                    </Typography>
                </Box>
            </Box>

            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} >
                <Box sx={{ width: "70%" }}>
                    <Typography component="h1" mt={2} sx={{ fontFamily: "'Courier New', Courier, monospace;", fontWeight: 800, fontSize: { xs: 25, md: 40 } }}>
                        Hi, I'm <Box component="img" p={0.5} sx={{ width: { xs: 70, md: 90 }, height: { xs: 70, md: 90 }, borderRadius: 2, bgcolor: "white", filter: "drop-shadow(0 0 0.3rem rgb(177, 177, 177))" }} src={mypic} /> Aoulad Touhami Ismail!
                    </Typography>
                    <Typography component="h1" sx={{ fontFamily: "'Courier New', Courier, monospace;", fontWeight: 800, fontSize: { xs: 25, md: 40 } }}>
                        I'm a <Box component="span" sx={{ color: "orange" }}>software engineer</Box>, I love to learn new things and share my knowledge with others.
                    </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} p={2} sx={{ width: "70%" }}  >
                    <Box sx={{ bgcolor: "black", borderRadius: 10, p: 2, }}>
                        <Typography sx={{ color: "white", fontFamily: "'Courier New', Courier, monospace;", fontWeight: 800, fontSize: { xs: 10, md: 15 } }}>
                            Book a Call
                        </Typography>
                    </Box>
                    <Box sx={{ width:"58%" }}>
                        <Typography ml={2} sx={{ fontFamily: "'Courier New', Courier, monospace;", fontWeight: 800, fontSize: { xs: 15, md: 20 } }}>
                            Feel free to explore my portfolio and reach out -- I'd love to connect!
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Header;