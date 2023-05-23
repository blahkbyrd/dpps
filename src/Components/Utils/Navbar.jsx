
import { useLocation } from 'react-router-dom';
import {Link} from "react-scroll";

// TODO : add easing https://www.npmjs.com/package/react-scroll

function Navbar() {
    const location = useLocation();

    return (
        <div className='navbar'>
            <ul>
                <li className={location.pathname === "/" ? "active" : "inactive"}><Link to="home" spy={true} smooth={true}>accueil</Link></li>
                <li className={location.pathname === "/" ? "active" : "inactive"}><Link to="infos" spy={true} smooth={true}>infos</Link></li>
                <li className={location.pathname === "/" ? "active" : "inactive"}><Link to="planning" spy={true} smooth={true}>rdv</Link></li>
                <li className={location.pathname === "/" ? "active" : "inactive"}><Link to="contact" spy={true} smooth={true}>contact</Link></li>
            </ul>

        </div>
    );
}

export default Navbar;