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
	ScreenBack,
	ScreenContainer,
} from "./styled";
import { Keyboard } from "./Keyboard";
import { ScreenWrapper } from "./ScreenContent/styled";

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
	const laptopBottomBorderTransformStyle = useMotionTemplate`translateZ(${bottomBorderTranlateZ}px) rotateX(${bodyRotateX}deg)`;

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
			<ContentWrapper>
				<LaptopWrapper>
					<ScreenContainer
						style={{
							rotateX,
							width,
							height,
						}}
					>
						<ScreenBack>
							<BsApple />
						</ScreenBack>
						<Screen>
							<ScreenWrapper />
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
