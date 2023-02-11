import { Link } from "react-router-dom";
import './detail.css'

const Detail = () => {
    return (
        <div className="content-detail">
            <div className="content-detail-items">
                <h2>Las noches de infierno en la comuna .......</h2>
                <p>Breve descripcion de la noticia</p>
                <p>Aqui va la imagen </p>
                <p>Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised
                    in the 1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <div>
                    <p>Unete a Papers News para seguir toda la actualidad </p>
                    <Link to="/suscription" className="enter-button">Suscribete</Link>
                </div>
            </div>
            <div>
                <h2>Lo mas visto</h2>
                <p>1. Un trozo del paraiso convertido en sepultura </p>
                <p>2. "Que sean libres yo pago la condena de ellos" </p>
                <p>3. "Terremotos en turquia ultima hora en directo"</p>

                <h2>Donacion</h2>
                <p>Imagen</p>
            </div>
        </div>
    )
}

export default Detail;