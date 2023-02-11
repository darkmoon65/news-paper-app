import { useRef } from 'react';
import Menu from '../menu/menu';
import './header.css';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const bar = useRef();
    const space = useRef();

    window.onscroll = () => {
        if(window.scrollY > 60) {
            bar.current.classList.add('fixed');
            space.current.classList.add('space');
        }
        else {
            bar.current.classList.remove('fixed');
            space.current.classList.remove('space');
        }
    }

    return (
        <header style={{width: '100%'}}>
            <Menu />
            <div ref={space}></div>
            <div className="container" ref={bar}>
                <div className="bar">
                    <div className="title">
                        <h1 onClick={() => navigate('/')} style={{cursor: 'pointer'}}>WORLD NEWS</h1>
                    </div>
                    <div className="user">
                        <Link to="/suscription">Suscribete</Link>
                        <div className='break-up' />
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

