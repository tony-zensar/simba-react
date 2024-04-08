import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClauses, setNewTemplate } from '../../store/actionCreators';
import { ClausesAndOptions } from '../ClausesAndOptions/ClausesAndOptions';
import { Button, ClauseEditor, PreviewPane, Review, Suggestions, Summary } from '../index';
import { NameInput } from '../name-input/NameInput';
import { PageHeader } from '../page-utils/PageHeader';


export const TemplateConfig = () => {
    const { newTemplate, clauses, defaultTemplate } = useSelector(state => state.templatesReducer)
    const { templateName, clausesSelected } = newTemplate

    const [optionSelected, setOptionsSelected] = useState({
        sectionId: -1,
        subSectionId: -1,
        labelId: -1
    })

    const [reviewContract, setReviewContract] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const content = getClauses({ sectionIndex: 0, subSectionIndex: 0, labelIndex: 0 })
        setOptionsSelected({
            sectionId: 1,
            subSectionId: 8,
            labelId: 2
        })

        // dispatch(setClauses(content))
        dispatch(setNewTemplate('clausesSelected', { optionGroups: defaultTemplate.optionGroups }))


    }, [])


    const optionSelectHandler = (type, itemId, path) => {
        let updateSelections = {}
        if (type === "section") {
            updateSelections = {
                sectionId: itemId,
                subSectionId: -1,
                labelId: -1
            }
        } else if (type === "subSection") {
            updateSelections = {
                ...optionSelected, subSectionId: itemId, labelId: -1
            }

        } else {
            updateSelections = {
                ...optionSelected, labelId: itemId

            }
            const content = getClauses(path)

            // dispatch(setClauses(content))

        }
        setOptionsSelected(updateSelections)
    }

    const getClauses = ({ sectionIndex, subSectionIndex, labelIndex }) => {
        return defaultTemplate.optionGroups[sectionIndex]?.options[subSectionIndex]?.groupClauses[labelIndex]?.clauses
    }

    const addClauseHandler = (content) => {


        const clauseDetailsCpy = { ...clausesSelected }

        const optionGroup = defaultTemplate.optionGroups.find(data => data.id === optionSelected.sectionId)
        const options = optionGroup.options.find(data => data.id === optionSelected.subSectionId)
        const groupClauses = options.groupClauses.find(data => data.id === optionSelected.labelId)


        let optionGroupIndex = -1;
        let optionsIndex = -1;
        let groupClausesIndex = -1;

        optionGroupIndex = clauseDetailsCpy?.optionGroups?.findIndex(data => data.title === optionGroup.title)
        optionsIndex = clauseDetailsCpy?.optionGroups[optionGroupIndex]?.options?.findIndex(data => data.summary === options.summary)

        groupClausesIndex = clauseDetailsCpy.optionGroups[optionGroupIndex]?.options[optionsIndex]?.groupClauses?.findIndex(data => data.label === groupClauses.label)



        if (optionGroupIndex < 0) {
            clauseDetailsCpy.optionGroups.push({ title: optionGroup.title, options: [{ summary: options.summary, groupClauses: [{ label: groupClauses.label, clauses: [{ content: content }] }] }] })

            dispatch(setNewTemplate('clausesSelected', clauseDetailsCpy))
            return
        }

        if (optionsIndex < 0) {
            clauseDetailsCpy.optionGroups[optionGroupIndex].options.push({ groupClauses: [{ label: groupClauses.label, clauses: [{ content: content }] }] })
            dispatch(setNewTemplate('clausesSelected', clauseDetailsCpy))
            return
        }

        if (groupClausesIndex < 0) {
            clauseDetailsCpy.optionGroups[optionGroupIndex].options[optionsIndex].groupClauses.push({ label: groupClauses.label, clauses: [{ content: content }] })
            dispatch(setNewTemplate('clausesSelected', clauseDetailsCpy))
            return
        }

        clauseDetailsCpy.optionGroups[optionGroupIndex].options[optionsIndex].groupClauses[groupClausesIndex].clauses.push({ content: content })
        dispatch(setNewTemplate('clausesSelected', clauseDetailsCpy))
        console.log(clauseDetailsCpy)
    }

    const templateNameHandler = (e) => {
        dispatch(setNewTemplate("templateName", e.target.value))
    }

    return <div >
        <PageHeader />
        <div className='config-container'>
            <div className='config-header'>
                <NameInput onChange={templateNameHandler} value={templateName} />
                <div className='config-actions'>
                    {reviewContract ? <Button label="Create Contract" /> : <Button label="Review Contract" onClickHandler={() => setReviewContract(true)} />}
                    <Button variant='secondary' label="Save & Exit" onClickHandler={() => setReviewContract(false)} />
                </div>
            </div>
            <div style={{ display: "flex", columnGap: "24px" }}>
                <ClausesAndOptions template={defaultTemplate} optionSelectHandler={optionSelectHandler} optionSelected={optionSelected} />
                <PreviewPane>
                    {reviewContract ?
                        <>
                            <Review data={clausesSelected?.optionGroups || []} />

                        </>
                        :
                        <ClauseEditor data={clauses.map(c => c.content).toString()} addClauseHandler={addClauseHandler} />
                    }
                </PreviewPane>
                {reviewContract ? <Suggestions /> : <Summary />}



            </div>
        </div>
    </div>
}
