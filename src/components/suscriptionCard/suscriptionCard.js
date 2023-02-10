import './suscriptionCard.css'

const SuscriptionCard = (props) => {

    return  (
        <div className={props.boxType}>
            <h1 className='item-card'>S/3</h1>
            <h2 className='item-card'>Mes</h2>
            <h3 className='item-card'>Solo el primer mes , luego s/12</h3>
            <button className={props.buttonType}>Suscribirme</button>
        </div>
    )
}

export default SuscriptionCard;