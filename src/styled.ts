import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
	height: 300vh;
`;

export const ContentWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: grid;
	place-items: center;
	background: rgb(124, 121, 114);
	background: rgb(87, 85, 80);
	background: radial-gradient(
		circle,
		rgba(87, 85, 80, 1) 0%,
		rgba(0, 0, 0, 1) 100%
	);
`;

export const LaptopWrapper = styled(motion.div)`
	position: relative;
	perspective: 2500px;
`;

export const ScreenContainer = styled(motion.div)`
	position: relative;
	transform-origin: center bottom;
	transform-style: preserve-3d;
	z-index: 100;
	box-sizing: content-box;
	border-radius: 8px;

	> div:not(:last-child) {
		position: absolute;
	}
`;

export const Screen = styled(motion.div)`
	overflow: hidden;
	border-radius: 8px;
	background-color: black;
	width: 100%;
	height: 100%;
`;

export const ScreenBack = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
	transform: translateZ(-1px);
	border-radius: 8px;
	background: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);
`;

export const ScreenTop = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	transform: rotateX(90deg) translateY(-3px) translateZ(-5px);
	background: gray;

	&& {
		height: 2px;
	}
`;

export const ScreenTopUpper = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: rotateX(90deg) translateY(-3px) translateZ(2px) translateX(-50%);

	&& {
		width: calc(100% - 16px);
		height: 3px;
	}
`;

export const Screen3D = styled(motion.div)`
	position: absolute;
	border-radius: 10px;
	border: 1px solid gray;
	background: black;
	width: 100%;
	height: 100%;
`;

export const BodyContainer = styled(motion.div)`
	position: relative;
	transform-origin: center top;
	transform-style: preserve-3d;
	z-index: 2;
`;

export const LaptopBottomBorder = styled(motion.div)`
	&& {
		position: absolute;
		bottom: 0;
		height: 100%;
		width: 100%;
		height: 4%;
		border-radius: 4px 4px 0 0;
		opacity: 0.5;
		z-index: 1;

		background: rgb(131, 131, 131);
		background: linear-gradient(
			180deg,
			rgba(131, 131, 131, 1) 0%,
			rgba(162, 162, 162, 1) 50%,
			rgba(159, 159, 159, 0) 50%,
			rgba(159, 159, 159, 0) 100%
		);
	}
`;

export const Body = styled(motion.div)`
	width: 100%;
	height: 100%;
	border-radius: 10px;
	transform-origin: center top;
	background: linear-gradient(
		to bottom,
		#a9abad 0%,
		#bec0c3 52%,
		#d0d0d0 100%
	);
`;

export const Body3D = styled(motion.div)`
	position: absolute;
	border-radius: 10px;
	background: gray;
`;
