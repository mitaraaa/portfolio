import "./scss/Article.scss";

import cssIcon from "../assets/skills/css.svg";
import databaseIcon from "../assets/skills/database.svg";
import githubIcon from "../assets/skills/github.svg";
import htmlIcon from "../assets/skills/html.svg";
import jsIcon from "../assets/skills/js.svg";
import pythonIcon from "../assets/skills/python.svg";
import reactIcon from "../assets/skills/react.svg";
import Badge from "./Badge";
import Article, { DelayProp } from "./Article";
import { FC } from "react";


const Skills: FC<DelayProp> = ({ delay }) => {
    return <Article delay={delay}>
        <h2>Skills</h2>
        <div className="skills">
            <Badge icon={pythonIcon} name="Python" url="https://www.python.org/"></Badge>
            <Badge icon={htmlIcon} name="HTML" url="https://ru.wikipedia.org/wiki/HTML"></Badge>
            <Badge icon={cssIcon} name="CSS" url="https://ru.wikipedia.org/wiki/CSS"></Badge>
            <Badge icon={jsIcon} name="JavaScript" url="https://ru.wikipedia.org/wiki/JavaScript"></Badge>
            <Badge icon={githubIcon} name="Git" url="https://git-scm.com/"></Badge>
            <Badge icon={databaseIcon} name="PostgreSQL" url="https://www.postgresql.org/"></Badge>
            <Badge icon={reactIcon} name="React" url="https://reactjs.org/"></Badge>
        </div>
    </Article>;
};

export default Skills;