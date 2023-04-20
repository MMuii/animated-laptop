import { motion } from "framer-motion";
import styled from "styled-components";
// @ts-ignore
import wallpaper from "../img/wallpaper.svg";
// @ts-ignore
import speaker from "../img/speaker.png";

export const KeyboardContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const KeyboardWrapper = styled.div`
	padding-left: 1%;
	padding-right: 1%;
	padding-top: 5%;
	display: grid;
	grid-template-columns: 10% 1fr 10%;
	gap: 1%;

	> svg {
		height: 100%;
		width: 100%;
		opacity: 0.3;
	}
`;

export const KeyboardPit = styled.div`
	box-shadow: 0px 10px 8px 10px rgba(0, 0, 0, 0.25) inset;
	padding: 5px;
	border-radius: 8px;

	> svg {
		width: 100%;
		height: min-content;
	}

	> img {
		width: 100%;
		height: 100%;
	}
`;

export const Button = styled.div`
	border-radius: 8px;
	background: black;
	width: 40px;
	height: 40px;
	color: white;
	box-shadow: 0px 10px 0px 0px rgba(250, 0, 0, 0.75);
`;

export const Touchpad = styled.div`
	border-radius: 8px;
	border: solid 1px #555;
	box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1) inset;
	margin-top: 14px;
	margin-bottom: 12px;

	&& {
		width: 35%;
		height: 100%;
	}
`;

export const BodyIndentation = styled.div`
	background: #666;
	width: 12%;
	height: 6%;
	border-radius: 8px 8px 0 0;
	z-index: 100;
`;

export const BodyIndentationFront = styled.div`
	position: absolute;
	left: 50%;
	bottom: -1.5%;
	height: 1.5%;
	width: 12%;
	transform: translateX(-50%);
	border-radius: 0 0 8px 8px;
	background: #666;
`;

export const ShadowLayer = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: black;
	border-radius: 10px;
	overflow: hidden;
`;

export const ReflectionLayer = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: black;
	border-radius: 10px;
	overflow: hidden;
`;

export const Reflection = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transform: rotateX(180deg);
	filter: blur(10px);
	background-image: url(${wallpaper});
	background-size: cover;
	border-radius: 10px;
	overflow: hidden;
`;

export const Speaker = styled.div`
	width: 100%;
	height: 100%;
	opacity: 0.3;

	background-image: url(${speaker});
	background-size: cover;
`;
