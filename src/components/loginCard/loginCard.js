import { Link } from "react-router-dom";
import './loginCard.css'

const LoginCard = ()=> {
    return(
        <div className="login-card">
            <h2>Inicia Sesión</h2>
            <input type="text" className="form-input" placeholder="Nombre de usuario"/>
            <input type="password" className="form-input" placeholder="Contraseña"/>
            <Link to="/" className="enter-button">Ingresar</Link>
            <div>
                <span>¿Olvidaste la contraseña?</span>
                <Link to="/register" className="register-link"> Registrate </Link>
            </div>
        </div>
    )
}

export default LoginCard;