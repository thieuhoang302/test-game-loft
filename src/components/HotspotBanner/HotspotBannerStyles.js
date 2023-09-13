import styled from 'styled-components';
import {motion} from "framer-motion";
import {Stack, Typography} from "@mui/material";
import {COLORS} from "../../constants";

export const HeroSection = styled.section`
  height: 100vh;
  background-color: #2699FB;
  padding-top: clamp(70px, 25vh, 220px);
`;

export const ImgWrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  max-height: 700px;
  justify-content: center;
  position: relative;
`;

export const Img = styled(motion.img)`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  object-fit: cover;
  max-height: 700px;
  z-index: 1;
`;

export const Text = styled(Typography)`
  font-size: 16px;
  letter-spacing: 0.05em;
  color: white;
`;

export const TextSub = styled(Typography)`
  font-size: 16px;
  letter-spacing: 0.05em;
  color: white;
  width: 70%;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const StackCustom = styled.div`
  background-color: #D8EDFF;
  padding: 2vh;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  
  @media screen and (max-width: 1000px) {
    display: block;
    width: 100%;
  }
`;

