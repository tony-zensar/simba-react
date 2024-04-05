import { BookmarkFilledIcon, BookmarkIcon } from "../../assets/IconList"
import { trimText } from "../../utils/commonFn"
import "./templates.scss"

export const TemplatesCard = ({ templateId, title, description, createdOn, lastModified, author, isBookmarked, thumbnail, previewHandler }) => {
    return <div className="templates-card" onClick={() => previewHandler(templateId)} >
        <div className="template-author-date">
            <p>{author}</p>
            <p>{lastModified}</p>

            <div className="template-bookmark">
                {isBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
            </div>
        </div>

        <div className="template-details">
            <p className="template-title">{title}</p>
            <p className="template-description">{trimText(description, 53, true)}</p>
            <p className="template-created">{createdOn}</p>
        </div>



    </div>
}