import './benefitCard.css'

const BenefitCard = (props)=> {
    return(
        <div className="benefit-card-box">
            <i class="medium material-icons">{props.icon}</i>
            <h2 className='benefit-card-item'>{props.title}</h2>
            <h4 className='benefit-card-item'>{props.content}</h4>
        </div>
    )
}

export default BenefitCard;