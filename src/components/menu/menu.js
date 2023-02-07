import { Link } from "react-router-dom";

import './menu.css';


const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">General</Link></li>
                <li><Link to="/business">Technology</Link></li>
                <li><Link to="/entertainment">Health</Link></li>
                <li><Link to="/sports">Business</Link></li>
                <li><Link to="/science">Science</Link></li>
                <li><Link to="/health">Health</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;