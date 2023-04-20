import { motion } from "framer-motion";
import styled from "styled-components";
// @ts-ignore
import wallpaper from "../img/wallpaper.svg";

export const ScreenWrapper = styled(motion.div)`
	position: relative;
	top: 3%;
	left: 1%;
	width: calc(100% - 2%);
	height: calc(100% - 6%);
	background: #eee;
	overflow: hidden;
	background-image: url(${wallpaper});
	background-size: cover;
`;
