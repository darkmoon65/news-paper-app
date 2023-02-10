import SuscriptionCard from "../suscriptionCard/suscriptionCard"
import './suscriptionPrice.css'

const SuscriptionPrice = () => {
    return (
        <div className="box">
            <h1>Invertir en conocimiento es la mejor decision</h1>
            <h2>Elige tu plan digital ideal</h2>

            <div className="box-prices">
                <SuscriptionCard boxType="normal" buttonType="button-blank" />
                <SuscriptionCard boxType="especial" buttonType="button-orange"/>
                <SuscriptionCard boxType="max" buttonType="button-shadow"/>
            </div>
        </div>
    )
}

export default SuscriptionPrice