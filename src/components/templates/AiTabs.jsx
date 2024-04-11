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





    useEffect(() => {
        if (activeItem === 1) {
            const obj = getUpdatedJson()
            setPageLoading(true)
            getAiSuggestions(obj).then(res => {
                setSuggestions(res?.data)
                setPageLoading(false)

            }).catch(err => {
                console.log(err)
                setPageLoading(false)

            })
        }
        else {
            setPageLoading(true)
            getAiSummary(newTemplate?.clausesSelected?.optionGroups).then(res => {
                setSummary(res.data)
                console.log(res)
                setPageLoading(false)

            }).catch(err => {
                console.log(err)
                setPageLoading(false)
            })
        }
    }, [activeItem])


    const getUpdatedJson = () => {
        const x = clone()(newTemplate)
        const a = x.clausesSelected.optionGroups?.map((og, ogIndex) => {
            return {
                ...og, options: og?.options?.map((o, oIndex) => {
                    return {
                        ...o, groupClauses: o?.groupClauses?.map((gc, gcIndex) => {
                            if (checkContent(gc.content)) {
                                return gc
                            }
                            return { ...gc, content: null }
                        })
                    }
                })
            }
        })
        return a
    }

    const getUpdatedJson2 = () => {
        return newTemplate.clausesSelected.optionGroups?.map((og, ogIndex) => {
            if (og.title === "Core Clause")
                return {
                    ...og, options: og?.options?.map((o, oIndex) => {
                        if (o.summary === 'General')
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
                        {Array.isArray(suggestions) && suggestions?.map((s, index) => <SuggestionItem {...s} deleteHandler={() => deleteSuggestionHandler(index)} />)}
                    </div>
                    :
                    <div className="summary">
                        <p className="summary-short">{summary?.overView}</p>
                        {summary?.summary?.map(({ heading, description }) => {
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
