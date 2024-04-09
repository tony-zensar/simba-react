import moment from "moment"
import { BookmarkFilledIcon, BookmarkIcon } from "../../assets/IconList"
import { trimText } from "../../utils/commonFn"
import "./templates.scss"

export const TemplatesCard = ({ id, name, description, createdDate, modifiedDate, author, isBookmarked, previewHandler }) => {
    return <div className="templates-card" onClick={() => previewHandler(id)} >
        <div className="template-author-date">
            <p>{author}</p>
            <p>{moment(modifiedDate).format("D MMM YYYY")}</p>
            <div className="template-bookmark">
                {isBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
            </div>
        </div>

        <div className="template-details">
            <p className="template-title">{name}</p>
            <p className="template-description">{trimText(description, 53, true)}</p>
            <p className="template-created">{moment(createdDate).format("D MMMM YYYY")}</p>

        </div>



    </div>
}