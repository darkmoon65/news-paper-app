import Menu from '../menu/menu';
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Menu />
            <div className="container">
                <div className="bar">
                    <div className="title">
                        <h1>WORLD NEWS</h1>
                    </div>
                    <div className="user">
                        <Link className='suscription-button' to="/suscription">Suscribete</Link>
                        <Link className='login-button' to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

