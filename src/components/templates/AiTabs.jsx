import { useState } from "react"
import { AddIcon, StarIcon, TrashIcon } from "../../assets/IconList"
import { ButtonSmall } from "../button/Button"
import { Icon } from "../icon/Icon"






export const AiTabs = () => {
    const [activeItem, setActiveItem] = useState(0)

    return <div className="suggestions-tab">
        <div className="suggestions-title suggestions-tab-items">
            <div onClick={() => setActiveItem(1)} className={activeItem === 1 ? "suggestions-tab-active" : ""} >
                <Icon component={<StarIcon />} variant="null" />
                <p>AI Suggestions</p>
            </div>
            <div onClick={() => setActiveItem(2)} className={activeItem === 2 ? "suggestions-tab-active" : ""} >
                <Icon component={<StarIcon />} variant="null" />
                <p>AI Summary</p>
            </div>

        </div>
        {
            activeItem === 1 ?
                <div className="suggestion-list">
                    <SuggestionItem />
                    <SuggestionItem />
                    <SuggestionItem />
                    <SuggestionItem />
                </div>

                :
                <div className="summary">

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



    </div >




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