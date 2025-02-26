import { Box, Grid2 as Grid, Typography } from "@mui/material";
import Card from "./Card";
import docker from "../assets/images/docker.png";
import flutter from "../assets/images/flutter.png";
import github from "../assets/images/github.png";
import java from "../assets/images/java.png";
import javascript from "../assets/images/javascript.png";
import python from "../assets/images/python.png";
import react from "../assets/images/react.png";
import oracle from "../assets/images/oracle.png";
import vsCode from "../assets/icons/vscode.png";

const experiences = [
  {
    title: "Full Stack Engineer at Orange",
    date: "2023 - On Site - Internship",
  },
  {
    title: "Web Application Developer at Intelcia IT Solutions",
    date: "2022 - Hybrid - Internship",
  },
  {
    title: "Mobile Application Developer at Al Omrane",
    date: "2021 - Remote - Internship",
  },
  {
    title: "Software Developer at Cours d'Appel",
    date: "2020 - On Site - Internship",
  },
];

const Experiences = () => {
  return (
    <Box display="flex" gap={2} alignItems="stretch">
    <Card text="Card 1">Content 1
      ssqfjbqsfbsqjfsbqfjqkfqs
      lsjfbqskjfbqfsqfjksq
      qsfjsqlfbskqfbsq


      sfqljfbsqjkfbjsqkfsqkfbsq

      fsqkjfbqskjfsq

      fsqkjfbsqkfksq

      fsqkjfbsqkjfsq

      fsbqjfbsqkf

      fsqjfbsqkjfksqjf
      fsqkjfbsqkfksq
      sfqljfbsqjkfbjsqkfsqkfbsq
    </Card>
    <Card text="Card 2">Content 2</Card>
    <Card text="Card 3">Content 3</Card>
</Box>
  );
};

export default Experiences;