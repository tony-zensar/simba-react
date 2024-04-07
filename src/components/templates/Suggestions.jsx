import { useState } from "react"
import { AddIcon, StarIcon, TrashIcon } from "../../assets/IconList"
import { ButtonSmall } from "../button/Button"
import { Icon } from "../icon/Icon"






export const Suggestions = () => {
    return <div className="suggestions">
        <div className="suggestions-title">
            <Icon component={<StarIcon />} variant="null" />
            <p>AI Suggestions</p>

        </div>
        <div className="suggestion-list">
            <SuggestionItem />
            <SuggestionItem />
            <SuggestionItem />
            <SuggestionItem />
        </div>


    </div>




}

const SuggestionItem = ({ title = "Missing clause title", desc = "This is an example description of the clauses suggested by AI that user missed in the contract. Upon clicking on accept this clause will be added into the contract, clicking on delete icon will remove this suggestion from the list of suggestions." }) => {
    const [showDetails, showDetailsHandler] = useState(false)

    return <div>
        {!showDetails ?
            <div className="suggestion-item" onClick={() => { showDetailsHandler(true) }}>
                <p>Missing clause title</p>
            </div> :
            <div className="suggestion-details">
                <label className="suggestion-details-title">{title}</label>
                <p className="suggestion-details-desc">{desc}</p>
                <div className="suggestion-actions">
                    <ButtonSmall icon={<AddIcon />} label="Add Clause" />
                    <Icon component={<TrashIcon />} onClick={() => showDetailsHandler(false)} />

                </div>
            </div>
        }
    </div>




}