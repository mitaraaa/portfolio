import { FC, ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";
import "./scss/Article.scss";

interface ArticleProps {
    children?: ReactNode | Array<ReactNode>,
    delay?: number,
    className?: string,
    style?: CSSProperties
}

export interface DelayProp {
    delay?: number
}

const Section: FC<ArticleProps> = ({ children, delay = 0, className, style }) => {
    return <motion.article
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay }}
        className={className}
        style={style}>
        {children}
    </motion.article>;
};

export default Section;