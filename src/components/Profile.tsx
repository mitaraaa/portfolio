import "./scss/Profile.scss";

import githubIcon from "../assets/github.svg";
import telegramIcon from "../assets/telegram.svg";
import mailIcon from "../assets/mail.svg";
import photo from "../assets/me.png";
import Article, { DelayProp } from "./Article";
import { FC } from "react";


const Profile: FC<DelayProp> = ({ delay }) => {
    return <Article delay={delay} className="profile">
        <section>
            <header>
                <h1>Damir Zhilkaidarov</h1>
                <span>IT Student (Developer / Designer)</span>
            </header>
            <div className="socials">
                <a className="profile-link" href="https://github.com/mitaraaa">
                    <img src={githubIcon}></img>
                    Github
                </a>
                <a className="profile-link" href="https://t.me/mitaraaa">
                    <img src={telegramIcon}></img>
                    Telegram
                </a>
                <a className="profile-link" href="mailto://212291@astanait.edu.kz">
                    <img src={mailIcon}></img>
                    Email
                </a>
            </div>
        </section>
        <img className="profile-picture" src={photo}></img>
    </Article>;
};

export default Profile;