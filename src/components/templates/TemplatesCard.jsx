import moment from "moment"
import { BookmarkFilledIcon, BookmarkIcon } from "../../assets/IconList"
import { trimText } from "../../utils/commonFn"
import "./templates.scss"

export const TemplatesCard = ({ id, name, description, templateName, templateCategory, createdDate, modifiedDate, author, isBookmarked, previewHandler, type = "template" }) => {
    return <div className="templates-card" onClick={() => previewHandler(id || null)} >
        <div className="template-author-date">
            <p>{author || "Author Name"}</p>
            <p>{modifiedDate ? moment(modifiedDate).format("D MMM YYYY") : "Modified date"}</p>
            <div className="template-bookmark">
                {isBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
            </div>
        </div>

        <div className="template-details">
            <p className="template-title">{name || type === 'contract' ? "Contract name" : "Template name"}</p>
            {type === "contract" ? <p className="template-description">{trimText(templateName || "Template name", 53, true)}</p> : ""}

            <p className="template-description">{trimText(description || "Description", 53, true)}</p>
            <p className="template-created">{createdDate ? moment(createdDate).format("D MMMM YYYY") : "Created date"}</p>

        </div>



    </div>
}