import { useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { BsApple } from "react-icons/bs";
import {
	Body,
	BodyContainer,
	Container,
	ContentWrapper,
	LaptopBottomBorder,
	LaptopWrapper,
	Screen,
	Screen3D,
	ScreenBack,
	ScreenContainer,
	ScreenTop,
	ScreenTopUpper,
} from "./styled";
import { Keyboard } from "./Keyboard";
import { ScreenContent } from "./ScreenContent";

const initialWidth = window.innerWidth / 6.5;
const initialHeight = window.innerHeight / 4;

const App = () => {
	const { scrollYProgress } = useScroll();
	const rotateX = useTransform(scrollYProgress, [0, 1], [-105, 0]);
	const bodyRotateX = useTransform(scrollYProgress, [0, 1], [75, 85]);
	const bottomBorderTranlateZ = useTransform(
		scrollYProgress,
		[0, 1],
		[1, -6]
	);
	const laptopBottomBorderTransformStyle = useMotionTemplate`translate3d(0, 0, ${bottomBorderTranlateZ}px) rotateX(${bodyRotateX}deg)`;

	const width = useTransform(
		scrollYProgress,
		[0, 1],
		[initialWidth, window.innerWidth]
	);
	const height = useTransform(
		scrollYProgress,
		[0, 1],
		[initialHeight, window.innerHeight]
	);

	return (
		<Container>
			<ContentWrapper id="content-wrapper">
				<LaptopWrapper id="laptop-wrapper">
					<ScreenContainer
						style={{ rotateX, width, height }}
						id="screen-container"
					>
						<ScreenBack>
							<BsApple />
						</ScreenBack>
						{/* <ScreenTop id="screen-top" /> */}
						<Screen>
							<ScreenContent scrollYProgress={scrollYProgress} />
						</Screen>
					</ScreenContainer>
					<BodyContainer
						style={{
							width,
							height,
							rotateX: bodyRotateX,
						}}
					>
						<Body>
							<Keyboard scrollYProgress={scrollYProgress} />
						</Body>
						<LaptopBottomBorder
							style={{
								transform: laptopBottomBorderTransformStyle,
							}}
						/>
					</BodyContainer>
				</LaptopWrapper>
			</ContentWrapper>
		</Container>
	);
};

export default App;
