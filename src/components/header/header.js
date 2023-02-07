import Menu from '../menu/menu';
import './header.css';

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
                        <button>Suscribe</button>
                        <div className='break-up'/>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

