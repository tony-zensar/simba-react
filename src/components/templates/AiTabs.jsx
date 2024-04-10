import { useEffect, useState } from "react"
import { Oval } from "react-loader-spinner"
import { useDispatch, useSelector } from 'react-redux'
import clone from "rfdc"
import { AddIcon, StarIcon, TrashIcon } from "../../assets/IconList"
import { getAiSuggestions, getAiSummary } from "../../requests/requests"
import { setNewTemplate } from "../../store/actionCreators"
import { ButtonSmall } from "../button/Button"
import { Icon } from "../icon/Icon"


export const AiTabs = () => {
    const [activeItem, setActiveItem] = useState(1)
    const [pageLoading, setPageLoading] = useState(true)
    const { newTemplate } = useSelector(state => state.templatesReducer)

    const [suggestions, setSuggestions] = useState([])
    const [summary, setSummary] = useState([])

    const x = [
        {
            "id": "1",
            "lastModifiedTimestamp": null,
            options: [
                {
                    "groupClauses": [
                        {
                            "clauses": [
                                {
                                    "content": "<p id=\"something\">Each Partner gives an early warning to the other Partners when it\n  becomes aware of<br> any matter that could affect the achievement of\n  another Partner’s objectives stated in the<br> Schedule of Partners.<\/p>",
                                    "id": "2",
                                    "label": "Collaboration",
                                    "lastModifiedTimestamp": null,
                                    "selected": null,
                                    "summary": "Partners",
                                    "xClassName": null
                                },
                                {
                                    "content": "<p>The Partners use common information systems as set out in the\n  Partnering Information.<\/p>",
                                    "id": "3",
                                    "label": "Collaboration",
                                    "lastModifiedTimestamp": null,
                                    "selected": null,
                                    "summary": "The Partners use common information systems as set out in the Partnering Information.",
                                    "xClassName": null
                                },
                                {
                                    "content": "<p>A Partner implements a decision of the Core Group by issuing\n  instructions in accordance<br> with its Own Contracts.<\/p>",
                                    "id": "5",
                                    "label": "Collaboration",
                                    "lastModifiedTimestamp": null,
                                    "selected": null,
                                    "summary": "A Partner implements a decision of the Core Group by issuing instructions in accordance\nwith its Own Contracts.",
                                    "xClassName": null
                                },
                                {
                                    "content": "<p>The Core Group prepares and maintains a timetable showing the\n  proposed timing of the<br> contributions of the Partners. The Core\n  Group issues a copy of the timetable to the Partners<br> each time it\n  is revised. The Contractor changes its programme if it is necessary to\n  do so in<br> order to comply with the revised timetable. Each such\n  change is a compensation event which<br> may lead to reduced Prices.<\/p>",
                                    "id": "6",
                                    "label": "Collaboration",
                                    "lastModifiedTimestamp": null,
                                    "selected": null,
                                    "summary": "",
                                    "xClassName": null
                                },
                                {
                                    "content": "<p>X5.1 In these conditions of contract, unless stated as the whole of\n  the works, each reference and<br> clause relevant to<br> ‘ the\n  works, <br> ‘ Completion and<br> ‘ Completion Date<br> applies, as the\n  case may be, to either the whole of the works or any section of the works.<\/p>",
                                    "id": "7",
                                    "label": "Sectional Completion",
                                    "lastModifiedTimestamp": null,
                                    "selected": null,
                                    "summary": "",
                                    "xClassName": null
                                }
                            ],
                            "content": null,
                            "id": "2",
                            "label": "Actions",
                            "lastModifiedTimestamp": null,
                            "xClassName": null
                        }
                    ],
                    "id": "8",
                    "label": "1",
                    "lastModifiedTimestamp": null,
                    "selected": null,
                    "summary": "General",
                    "xClassName": null
                }
            ],
            "required": null,
            "selected": false,
            "summary": "honcus libero tristique dolor id et Vestibulum nulla feugiat sociis nibh. Convallis ante lorem Morbi nulla Pellentesque fringilla consequat id sociis tristique. Laoreet dolor auctor eget ac eget Curabitur cursus magna Nullam nibh",
            "title": "Core Clause",

        }
    ]
    useEffect(() => {
        if (activeItem === 1) {
            const obj = getUpdatedJson()
            setPageLoading(true)

            getAiSuggestions(obj).then(res => {
                setSuggestions(res?.data?.items)
                setPageLoading(false)

            }).catch(err => {
                console.log(err)
                setPageLoading(false)

            })
        }
        else {
            setPageLoading(true)
            getAiSummary(newTemplate?.clausesSelected?.optionGroups).then(res => {
                setSummary(res?.data)
                setPageLoading(false)

            }).catch(err => {
                console.log(err)
                setPageLoading(false)
            })
        }
    }, [activeItem])


    const getUpdatedJson = () => {
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
            pageLoading ? <Oval wrapperClass="spinner simba-tab-content ai-tab-spinner" height={50} color="#003866" /> :
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

const SuggestionItem = ({ deleteHandler, heading = "Missing clause", groupClause, option, optionGroup, desc = "This is an example description of the clauses suggested by AI that user missed in the contract. Upon clicking on accept this clause will be added into the contract, clicking on delete icon will remove this suggestion from the list of suggestions." }) => {
    const { newTemplate, defaultTemplate } = useSelector(state => state.templatesReducer)
    const dispatch = useDispatch()

    const [showDetails, showDetailsHandler] = useState(false)
    const { clausesSelected } = newTemplate
    const defaultClauses = defaultTemplate?.data

    const removeSuggestion = () => {
        showDetailsHandler(false)
        deleteHandler()
    }

    const insertClauseHandler = (section, subSection, label) => {
        const clauseDetailsCpy = clone()(clausesSelected)
        clauseDetailsCpy.optionGroups.forEach(og => {
            if (og.title === section) {
                og.options.forEach(o => {
                    if (o.summary === subSection) {
                        o.groupClauses.forEach(gc => {
                            if (gc.label === label) {
                                gc.content = getClauseFromDefaultClause(section, subSection, label)
                            }
                        })
                    }

                })
            }

        });
        dispatch(setNewTemplate('clausesSelected', clauseDetailsCpy))
        showDetailsHandler(false)

        deleteHandler()
    }

    const getClauseFromDefaultClause = (section, subSection, label) => {
        let clauses = ''
        defaultClauses?.optionGroups?.forEach(og => {
            if (og?.title === section) {
                og?.options?.forEach(o => {
                    if (o?.summary === subSection) {
                        o?.groupClauses?.forEach(gc => {
                            if (gc?.label === label) {
                                clauses = gc?.clauses?.map(c => c?.content).toString()
                            }
                        })
                    }

                })
            }
        });
        return clauses
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
                    <ButtonSmall icon={<AddIcon />} label="Add Clause" onClick={() => insertClauseHandler(optionGroup, option, groupClause)} />
                    <Icon component={<TrashIcon />} onClick={removeSuggestion} />

                </div>
            </div>
        }
    </div>




}