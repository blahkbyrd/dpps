import Logo from "./Logo";
import Banner from "./Banner";
import Hamburger from "./Hamburger";
import Navbar from "../Utils/Navbar";

const Header = () => {
    return (
        <div className="header">
            <div className="brand-identity-container">
                <Logo color="bleu" />
                <Banner />
                <Hamburger/>
            </div>
            
          <div className="line gradient"></div>
          <Navbar />
        

        </div>
    )
}

export default Header;