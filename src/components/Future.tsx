import { FC } from "react";
import Article, { DelayProp } from "./Article";
import "./scss/Article.scss";

const Future: FC<DelayProp> = ({ delay }) => {
    return <Article delay={delay}>
        <h2>So, what am i looking for?</h2>
        <p>
            I really enjoy building web interfaces and
            developing APIs for backend usage.
            I want to work with front-end frameworks like React or Vue
            and develop further in this field.
        </p>
    </Article>;
};

export default Future;