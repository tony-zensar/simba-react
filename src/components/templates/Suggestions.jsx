import { AddIcon, StarIcon, TrashIcon } from "../../assets/IconList"
import { ButtonSmall } from "../button/Button"
import { Icon } from "../icon/Icon"

export const Suggestions = () => {
    return <div className="suggestions">
        <div className="suggestions-title">
            <Icon component={<StarIcon />} variant="null" />
            <p>AI Suggestions</p>
        </div>

        <div className="suggestion-details">
            <label className="suggestion-details-title">Missing clause title</label>
            <p className="suggestion-details-desc">This is an example description of the clauses suggested by AI that user missed in the contract. Upon clicking on accept this clause will be added into the contract, clicking on delete icon will remove this suggestion from the list of suggestions.</p>
            <div className="suggestion-actions">
                <ButtonSmall icon={<AddIcon />} label="Add Clause" />
                <Icon component={<TrashIcon />} />

            </div>
        </div>
        <div>
            <div className="suggestion-list">
                <p>Missing clause title</p>
            </div>

            <div className="suggestion-list">
                <p>Missing clause title</p>
            </div>
        </div>



    </div>
}