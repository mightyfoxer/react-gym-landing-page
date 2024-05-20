"use client";
import ImageCard from "./imagecard";
// import Cardio from "/cardio.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const arr = ["/muscle.png", "/cardio.png", "/fitness.png"];
const Category = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div
      className={
        isMobile
          ? "flex flex-col justify-around items-center gap-4 mt-[80px]"
          : "flex justify-around gap-[31px] mt-[80px]"
      }
      id="Spécialitées"
    >
      <ImageCard image={"/muscle.png"} title="Musculation" />
      <ImageCard image={"/Train.png"} title="Cardio" />
      <ImageCard image={"/fitness.png"} title="Fitness" />
    </div>
  );
};

export default Category;
