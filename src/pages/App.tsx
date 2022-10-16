import "./scss/App.scss";
import About from "../components/About";
import Biography from "../components/Biography";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Future from "../components/Future";
import Languages from "../components/Languages";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";

const App = () => {
    return <div id="page">
        <div id="main">
            <Navbar></Navbar>
            <Profile delay={0}></Profile>
            <About delay={0.1}></About>
            <Skills delay={0.2}></Skills>
            <Languages delay={0.3}></Languages>
            <Biography delay={0.4}></Biography>
            <Future delay={0.5}></Future>
            <Contacts delay={0.6}></Contacts>
            <Footer delay={0.7}></Footer>
        </div>
    </div>;
};

export default App;
