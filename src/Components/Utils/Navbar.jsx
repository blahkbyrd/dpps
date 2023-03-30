
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    return (
        <div className='navbar'>
            <ul>
                <li className={location.pathname === "/" ? "active" : "inactive"}><Link to="/">accueil</Link></li>
                <li className={location.pathname === "/contact" ? "active" : "inactive"}><Link to="/contact">contact</Link></li>
                <li className={location.pathname === "/planning" ? "active" : "inactive"}><Link to="/planning">prendre un rdv</Link></li>
            </ul>

        </div>
    );
}

export default Navbar;