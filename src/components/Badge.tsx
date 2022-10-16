import { FC } from "react";
import "./scss/Article.scss";

interface BadgeProps {
    icon?: string,
    name: string,
    url?: string,
    color?: string
}

const Badge: FC<BadgeProps> = ({ icon, name, url, color }) => {
    return <div className="badge" onClick={() => { url ? window.open(url) : null; }} style={color ? { "backgroundColor": color } : {}}>
        {icon ? <img src={icon}></img> : null}
        <span>{name}</span>
    </div>;
};

export default Badge;