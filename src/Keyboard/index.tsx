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
import keyboard from "../img/keyboard-minified2.png";
// @ts-ignore
import { ReactComponent as KeyboardSvg } from "../img/keyboard.svg";

interface Props {
	scrollYProgress: MotionValue<number>;
}

export const Keyboard = ({ scrollYProgress }: Props) => {
	const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 0]);

	// TODO - replace speakers with PNG
	return (
		<KeyboardContainer>
			<KeyboardWrapper>
				<Speaker />
				<KeyboardPit>
					{/* <KeyboardSvg /> */}
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
			<BodyIndentationFront id="indentation-front" />
		</KeyboardContainer>
	);
};
