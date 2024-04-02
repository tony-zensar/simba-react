import "./contracts.scss"

export const ContractTemplateCard = ({ templateId, title, description, createdOn, lastModified, author, isFavourite, thumbnail, previewHandler }) => {
    return <div className="contract-template-card" onClick={() => previewHandler(templateId)} >
        <div className="contract-template-card__info">
            <div>
                <p className="contract-template-card__info-title">{title}</p>
                <p className="contract-template-card__info-subTitle">{description}</p>
            </div>
            <div className="contract-template-card__info-thumbnail">
                <img src={thumbnail} />

            </div>
        </div>
        <div className="contract-template-card__details">
            <p>Created<br />{createdOn}</p>
            <p>Last modified<br />{lastModified}</p>
            <p>Author<br />{author}</p>
            {isFavourite ?
                <img src="" alt="Favourite" /> : null}



        </div>
    </div>
}