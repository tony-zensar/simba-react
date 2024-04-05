import "./templates.scss"

export const TemplatesCard = ({ templateId, title, description, createdOn, lastModified, author, isFavourite, thumbnail, previewHandler }) => {
    return <div className="templates-card" onClick={() => previewHandler(templateId)} >
        <div className="template-author-date">
            <p>{author}</p>
            <p>{lastModified}</p>
        </div>

        <div className="template-details">
            <p className="template-title">{title}</p>
            <p className="template-description">{description}</p>
            <p className="template-created">{createdOn}</p>
        </div>



    </div>
}