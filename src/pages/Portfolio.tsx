import Article from "../components/Article";
import Badge from "../components/Badge";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Repo from "../components/Repo";
import "./scss/Portfolio.scss";

import cssIcon from "../assets/skills/css.svg";
import databaseIcon from "../assets/skills/database.svg";
import githubIcon from "../assets/skills/github.svg";
import htmlIcon from "../assets/skills/html.svg";
import jsIcon from "../assets/skills/js.svg";
import pythonIcon from "../assets/skills/python.svg";
import reactIcon from "../assets/skills/react.svg";

const Portfolio = () => {
    return <div id="page">
        <div id="main">
            <Navbar></Navbar>
            <Profile delay={0}></Profile>
            <Article delay={0.1}>
                <Repo header="shop" about="Project for WEB Development 1 course" url="https://github.com/mitaraaa/shop">
                    <Badge icon={htmlIcon} name="HTML"></Badge>
                    <Badge icon={cssIcon} name="CSS"></Badge>
                    <Badge icon={jsIcon} name="JavaScript"></Badge>
                    <Badge icon={reactIcon} name="React"></Badge>
                    <Badge icon={databaseIcon} name="PostgreSQL"></Badge>
                </Repo>
                <Repo header="aitu-telegram" about="Small utils for AITU telegram chats" url="https://github.com/mitaraaa/aitu-telegram" status="in-progress">
                    <Badge icon={jsIcon} name="JavaScript"></Badge>
                </Repo>
                <Repo header="cpphelper" about="Project for ICT / Week 10 Endterm\nUseful C++ handbook for beginners" url="https://github.com/mitaraaa/cpphelper">
                    <Badge icon={pythonIcon} name="Python"></Badge>
                </Repo>
                <Repo header="first-assignment" about="WEB Development 1 course assignment" url="https://github.com/mitaraaa/first-assignment">
                    <Badge icon={htmlIcon} name="HTML"></Badge>
                    <Badge icon={cssIcon} name="CSS"></Badge>
                </Repo>
                <Repo header="second-assignment" about="WEB Development 1 course assignment" url="https://github.com/mitaraaa/second-assignment">
                    <Badge icon={htmlIcon} name="HTML"></Badge>
                    <Badge icon={cssIcon} name="CSS"></Badge>
                </Repo>
            </Article>

            <Footer delay={0.2}></Footer>
        </div>
    </div>;
};

export default Portfolio;
