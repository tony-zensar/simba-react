import "./templates.scss"

export const TemplatesCard = ({ templateId, title, description, createdOn, lastModified, author, isFavourite, thumbnail, previewHandler }) => {
    return <div className="templates-card" onClick={() => previewHandler(templateId)} >
        <div className="templates-card__info">
            <div>
                <p className="templates-card__info-title">{title}</p>
                <p className="templates-card__info-subTitle">{description}</p>
            </div>
            <div className="templates-card__info-thumbnail">
                <img src={thumbnail} />

            </div>
        </div>
        <div className="templates-card-details">
            <p>Created<br />{createdOn}</p>
            <p>Last modified<br />{lastModified}</p>
            <p>Author<br />{author}</p>
            {isFavourite ?
                <img src="" alt="Favourite" /> : null}



        </div>
    </div>
}