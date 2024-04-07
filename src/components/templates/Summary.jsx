import { StarIcon } from "../../assets/IconList"
import { Icon } from "../icon/Icon"

export const Summary = () => {

    return <div className="summary">
        <div className="suggestions-title">
            <Icon component={<StarIcon />} variant="null" />
            <p>AI Summary</p>
        </div>
        <p className="summary-short">This text outlines various terms and concepts related to a contractual agreement, likely in the context of construction or project management. Here's what it all means:</p>

        <div className="summary-details">
            <label className="summary-title">Accepted Programme</label>
            <p className="summary-desc">This refers to the agreed-upon project schedule, subject to change if accepted by the Project Manager.</p>
        </div>
        <div className="summary-details">
            <label className="summary-title">Accepted Programme</label>
            <p className="summary-desc">This refers to the agreed-upon project schedule, subject to change if accepted by the Project Manager.</p>
        </div>
        <div className="summary-details">
            <label className="summary-title">Accepted Programme</label>
            <p className="summary-desc">This refers to the agreed-upon project schedule, subject to change if accepted by the Project Manager.</p>
        </div>

    </div>

}