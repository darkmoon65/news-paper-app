import {Link } from "react-router-dom";

function Menu(){
    return (
        <div id="menu">
            <ul>
                <li> <Link to="/sports"> Sports</Link> </li>
                <li> <Link to="/politics">politics</Link> </li>
                <li> <Link to="/economics">economics</Link> </li>
                <li> <Link to="/culture">culture</Link> </li>
                <li> <Link to="/current">current</Link> </li>
            </ul>
        </div>
    )
}

export default Menu;