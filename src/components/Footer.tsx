import { FC } from "react";
import Article, { DelayProp } from "./Article";
import "./scss/Article.scss";

const Footer: FC<DelayProp> = ({ delay }) => {
    return <Article delay={delay}>
        <span style={{ "opacity": "0.4" }}>© 2022 Damir Zhilkaidarov. All Rights Reserved.</span>
    </Article>;
};

export default Footer;