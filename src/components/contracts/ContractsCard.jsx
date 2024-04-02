import "./contracts.scss"
export const ContractsCard = ({ thumbnail, title = "Contract name", subTitle = "Supply short contract", description = "A descriptive, succinct summary that describes the contract" }) => {

    return <div className="contract-card">
        <div className="contract-card__thumbnail">
            <img src="" />
        </div>
        <div className="contract-card__info">
            <p className="contract-card__info-title">{title}</p>
            <p className="contract-card__info-subTitle">{subTitle}</p>
            <p className="contract-card__info-description">{description}</p>
        </div>
    </div>

}