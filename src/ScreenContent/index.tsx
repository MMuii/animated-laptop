import { MotionValue, useMotionTemplate, useTransform } from "framer-motion";
import { ScreenWrapper } from "./styled";

interface Props {
	scrollYProgress: MotionValue<number>;
}

export const ScreenContent = ({ scrollYProgress }: Props) => {
	const contentY = useTransform(scrollYProgress, [0.99, 1], [3, 0]);
	const contentYStyle = useMotionTemplate`${contentY}%`;
	const contentX = useTransform(scrollYProgress, [0.99, 1], [1, 0]);
	const contentXStyle = useMotionTemplate`${contentX}%`;

	const contentWidth = useTransform(contentX, [1, 0], [2, 0]);
	const contentWidthStyle = useMotionTemplate`calc(100% - ${contentWidth}%)`;

	const contentHeight = useTransform(contentY, [3, 0], [6, 0]);
	const contentHeightStyle = useMotionTemplate`calc(100% - ${contentHeight}%)`;

	return (
		<ScreenWrapper
			style={{
				width: contentWidthStyle,
				height: contentHeightStyle,
				top: contentYStyle,
				left: contentXStyle,
			}}
		/>
	);
};
