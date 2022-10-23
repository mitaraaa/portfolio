import { FC, ReactNode } from "react";
import "./scss/Article.scss";

interface RepoProps {
    header: string,
    about?: string,
    status?: "done" | "in-progress",
    url?: string,
    children?: ReactNode | Array<ReactNode>
}

const Repo: FC<RepoProps> = ({ header, about, status = "done", url, children }) => {
    return <div className="repo-card">
        <header>
            <h3 onClick={() => { url ? window.open(url) : null; }}>{header}</h3>
            <div className={"status " + status}>
                <div className="dot"></div>
                <span>{status.replace("-", " ")}</span>
            </div>
        </header>
        <p>{about}</p>
        <div className="skills">
            {children}
        </div>
    </div>;
};

export default Repo;