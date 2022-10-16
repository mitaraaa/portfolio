import "./scss/Article.scss";

import githubIcon from "../assets/github.svg";
import telegramIcon from "../assets/telegram.svg";
import mailIcon from "../assets/mail.svg";
import phoneIcon from "../assets/phone.svg";
import Article, { DelayProp } from "./Article";
import { FC } from "react";
    
const Contacts: FC<DelayProp> = ({ delay }) => {
    return <Article delay={delay} style={{ "width": "100%" }}>
        <h2>Interested? Contant me!</h2>
        <div className="socials">
            <a href="https://github.com/mitaraaa">
                <img src={githubIcon}></img>
                @mitaraaa
            </a>
            <a href="tel://+7(705)5447323">
                <img src={phoneIcon}></img>
                +7 (705) 544 7323
            </a>
            <a href="https://t.me/mitaraaa">
                <img src={telegramIcon}></img>
                @mitaraaa
            </a>
            <a href="mailto://212291@astanait.edu.kz">
                <img src={mailIcon}></img>
                212291@astanait.edu.kz
            </a>
        </div>
    </Article>;
};

export default Contacts;