import { Link } from "react-router-dom";

import './menu.css';


const Menu = () => {
    return (
        <nav style={{padding: '10px 0', width: '100%', display: 'flex', flexWrap: 'wrap'}}>
            <ul>
                <li><Link to="/">General</Link></li>
                <li><Link to="/business">Business</Link></li>
                <li><Link to="/entertainment">Entertainment</Link></li>
                <li><Link to="/sports">Sports</Link></li>
                <li><Link to="/science">Science</Link></li>
                <li><Link to="/technology">Technology</Link></li>
                <li><Link to="/health">Health</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;