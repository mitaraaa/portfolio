import "./scss/Article.scss";
import arrowIcon from "../assets/arrow.png";
import Article, { DelayProp } from "./Article";
import { FC } from "react";

const About: FC<DelayProp> = ({ delay }) => {
    return <Article delay={delay}>
        <h2>About me</h2>
        <p>
            I am an freelance and full-stack developer based in Astana
            with a passion for building digital services and other stuff.
            I am very interested in developing products, starting from planning
            and designing all the way to solving real-life problems with code.
            When not online, i love hanging out with my friends. Currently,
            i am in search of inspiration for next big project.
        </p>
        <button className="goto-button" onClick={() => { window.location.href += "portfolio"; }}>
            <span>Portfolio</span>
            <img src={arrowIcon}></img>
        </button>
    </Article>;
};

export default About;