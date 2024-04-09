import { useEffect, useState } from "react"
import { AddIcon, StarIcon, TrashIcon } from "../../assets/IconList"
import { ButtonSmall } from "../button/Button"
import { Icon } from "../icon/Icon"
import { getAiSuggestions, getAiSummary } from "../../requests/requests"
import { useDispatch, useSelector } from 'react-redux';
import clone from "rfdc"


import parse from 'html-react-parser';




export const AiTabs = () => {
    const [activeItem, setActiveItem] = useState(1)

    const { newTemplate, clauses, defaultTemplate } = useSelector(state => state.templatesReducer)
    const dispatch = useDispatch()

    const [suggestions, setSuggestions] = useState([])
    const [summary, setSummary] = useState([])


    useEffect(() => {

        if (activeItem === 1) {
            const obj = updateJson()
            getAiSuggestions(obj).then(res => {
                setSuggestions(res?.data?.items)

            }).catch(err => {
                console.log(err)
            })
        }
        else {
            getAiSummary(newTemplate?.clausesSelected?.optionGroups).then(res => {
                setSummary(res?.data)

            }).catch(err => {
                console.log(err)
            })
        }
    }, [activeItem])


    const updateJson = () => {
        return newTemplate.clausesSelected.optionGroups?.map((og, ogIndex) => {
            return {
                ...og, options: og?.options?.map((o, oIndex) => {
                    return {
                        ...o, groupClauses: o?.groupClauses?.map((gc, gcIndex) => {
                            if (checkContent(gc.content)) {
                                return gc
                            }
                            return { content: gc.clauses.map(i => i).toString() }
                        })
                    }
                })
            }
        })
    }

    const checkContent = (content) => {
        const isEmpty = content.replace(/<(.|\n)*?>/g, '').trim().length === 0
        if (isEmpty) {
            return null;
        }
        return content
    }

    const deleteSuggestionHandler = (itemIndex) => {
        const suggestionsDetails = clone()(suggestions)
        suggestionsDetails.splice(itemIndex, 1)
        setSuggestions(suggestionsDetails)
    }

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
                    {suggestions?.map((s, index) => <SuggestionItem {...s} deleteHandler={() => deleteSuggestionHandler(index)} />)}
                </div>
                :
                <div className="summary">
                    <p className="summary-short">{summary?.overView}</p>
                    {summary?.summaryItems?.map(({ heading, description }) => {
                        return <div className="summary-details">
                            <label className="summary-title">{heading}</label>
                            <p className="summary-desc">{description}</p>
                        </div>
                    })}
                </div>
        }

    </div >


}
const SuggestionItem = ({ deleteHandler, heading = "Missing clause", groupClause, desc = "This is an example description of the clauses suggested by AI that user missed in the contract. Upon clicking on accept this clause will be added into the contract, clicking on delete icon will remove this suggestion from the list of suggestions." }) => {
    const [showDetails, showDetailsHandler] = useState(false)

    const removeSuggestion = () => {
        showDetailsHandler(false)
        deleteHandler()
    }

    return <div>
        {!showDetails ?
            <div className="suggestion-item" onClick={() => { showDetailsHandler(true) }}>
                <p>{heading} {groupClause}</p>
            </div> :
            <div className="suggestion-details">
                <label className="suggestion-details-title">{heading} {groupClause}</label>
                <p className="suggestion-details-desc">{desc}</p>
                <div className="suggestion-actions">
                    <ButtonSmall icon={<AddIcon />} label="Add Clause" />
                    <Icon component={<TrashIcon />} onClick={removeSuggestion} />

                </div>
            </div>
        }
    </div>




}