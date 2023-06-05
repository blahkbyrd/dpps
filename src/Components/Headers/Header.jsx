import Logo from "./Logo";
import Banner from "./Banner";
import Hamburger from "./Hamburger";
import Navbar from "../Utils/Navbar";


const Header = (props) => {

    if (props.size === "regular") {
        return (
            <div className="header">
                <div className="brand-identity-container">
                    <Logo color="bleu" />
                    <Banner />
                    <Hamburger />
                </div>

                <div className="line gradient"></div>
                <Navbar />
            </div>
        )
    }
    else {
        return (
            <div className="header small">
                <div className="brand-identity-container">
                    <Logo color="bleu" />
                    <Hamburger />
                    <Navbar />

                </div>
                <div className="line gradient"></div>

            </div>
        )
    }

}

export default Header;