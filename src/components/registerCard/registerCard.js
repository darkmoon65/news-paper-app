import './registerCard.css'
import { Link } from "react-router-dom";

const RegisterCard = () => {
    return (
        <div className="container-register-card">
            <div className="register-card">
                <h2>Ingresa tus datos</h2>
                <div>
                    <input type="text" className="form-input" placeholder="Nombre" />
                    <input type="text" className="form-input" placeholder="Apellidos" />
                </div>
                <div>
                    <input type="text" className="form-input" placeholder="Nombre de usuario" />
                </div>
                <div>
                    <input type="password" className="form-input" placeholder="Contraseña" />
                    <input type="password" className="form-input" placeholder="Repita contraseña" />
                </div>
                <div>
                    <input type="email" className="form-input" placeholder="E-mail" />
                    <input type="text" className="form-input" placeholder="Telefono" />
                    <input type="text" className="form-input" placeholder="Pais" />
                </div>
                <div>
                    <Link to="/" className="enter-button">Registrarse</Link>
                </div>
            </div>
        </div>

    )
}

export default RegisterCard;