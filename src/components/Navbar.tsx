import { useState, useEffect } from "react";
import "./scss/Navbar.scss";
import githubIcon from "../assets/github-black.svg";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

const Navbar = () => {
    const { width } = useWindowDimensions();

    return <nav>
        <div className="container">
            <a className="logo" href="/">🎓{width > 768 ? " Damir's CV" : ""}</a>
            <section>
                <a href="/portfolio">Portfolio</a>
                <button onClick={() => { window.open("https://github.com/mitaraaa"); }}>
                    <img src={githubIcon}></img>
                    <span>Source code</span>
                </button>
            </section>
        </div>
    </nav>;
};

export default Navbar;