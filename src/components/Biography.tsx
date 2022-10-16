import Badge from "./Badge";
import "./scss/Article.scss";

import marker from "../assets/marker.svg";
import Article, { DelayProp } from "./Article";
import { FC } from "react";

const Biography: FC<DelayProp> = ({ delay }) => {
    return <Article delay={delay} style={{ "width": "100%" }}>
        <h2>Biography</h2>
        <div className="biography">
            <div className="year">
                <Badge name="2004"></Badge>
                <span>
                    Born in <Badge icon={marker} name="Kostanay, Kazakhstan" url="https://goo.gl/maps/P1skBnF62QCzKN1j8" color="#66C372"></Badge>
                </span>
            </div>
            <div className="year">
                <Badge name="2021"></Badge>
                <span>
                    Graduated from <Badge icon={marker} name="High School №3" url="https://goo.gl/maps/5Hf96gXLJLGwBAjb6" color="#C3667F"></Badge>
                </span>
            </div>
            <div className="year">
                <Badge name="2021"></Badge>
                <span>
                    Student of <Badge icon={marker} name="Astana IT University" url="https://goo.gl/maps/TEwMUtTW6QNB1dcw8" color="#666DC3"></Badge>
                </span>
            </div>
        </div>
    </Article>;
};

export default Biography;