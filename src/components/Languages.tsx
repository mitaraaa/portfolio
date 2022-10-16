import { FC } from "react";
import Article, { DelayProp } from "./Article";
import "./scss/Article.scss";

const Languages: FC<DelayProp> = ({ delay }) => {
    return <Article delay={delay} style={{ "width": "100%" }}>
        <h2>Languages</h2>
        <div className="languages">
            <div className="language">
                <span>English</span>
                <div className="lang-progress filled"></div>
                <div className="lang-progress filled"></div>
                <div className="lang-progress"></div>
            </div>
            <div className="language">
                <span>Russian</span>
                <div className="lang-progress filled"></div>
                <div className="lang-progress filled"></div>
                <div className="lang-progress filled"></div>
            </div>
            <div className="language">
                <span>Kazakh</span>
                <div className="lang-progress filled"></div>
                <div className="lang-progress"></div>
                <div className="lang-progress"></div>
            </div>
        </div>
    </Article >;
};

export default Languages;