import BenefitCard from "../benefitCard/benefitCard";
import './benefit.css'

const Benefit = () => {
    return (
        <div>
            <h1 className="content-benefit-title">Tu diario donde vayas</h1>
            <div className="content-benefit">
                <BenefitCard icon="person" title="Contenido Exclusivo"
                    content="Revelaciones de nuestra unidad de investigacion"
                />
                <BenefitCard icon="photo_camera" title="Nuevas experiencias"
                    content="Participa en reuniones virtuales, descubrimientos culinarios y mas"
                />
                <BenefitCard icon="play_arrow" title="Promociones"
                    content="Hasta 50% de descuento en mas de 300 establecimientos"
                />
                <BenefitCard icon="play_arrow" title="Comodidad"
                    content="Te narramos tus noticias preferidas"
                />
                <BenefitCard icon="play_arrow" title="Traductor"
                    content="Traduce tus noticias hasta en 30 idiomas"
                />
                <BenefitCard icon="play_arrow" title="Marcador"
                    content="Guarda tus articulos favoritos ilimitadamente"
                />
            </div>
        </div>

    )
}

export default Benefit;