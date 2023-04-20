import { MotionValue, useTransform } from "framer-motion";
import {
	KeyboardContainer,
	KeyboardWrapper,
	KeyboardPit,
	Touchpad,
	BodyIndentation,
	ShadowLayer,
	ReflectionLayer,
	Reflection,
	BodyIndentationFront,
	Speaker,
} from "./styled";
// @ts-ignore
import keyboard from "../img/keyboard-minified.png";

interface Props {
	scrollYProgress: MotionValue<number>;
}

export const Keyboard = ({ scrollYProgress }: Props) => {
	const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 0]);

	return (
		<KeyboardContainer>
			<KeyboardWrapper>
				<Speaker />
				<KeyboardPit>
					<img src={keyboard} />
				</KeyboardPit>
				<Speaker />
			</KeyboardWrapper>
			<Touchpad />
			<BodyIndentation />
			<ShadowLayer style={{ opacity }} />
			<ReflectionLayer style={{ opacity }}>
				<Reflection />
			</ReflectionLayer>
			<BodyIndentationFront />
		</KeyboardContainer>
	);
};
