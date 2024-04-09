import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDefaultTemplate } from '../../requests/requests';
import { setClauses, setDefaultTemplate, setNewTemplate } from '../../store/actionCreators';
import { ClausesAndOptions } from '../ClausesAndOptions/ClausesAndOptions';
import { Button, ClauseEditor, PreviewPane, Review, Suggestions, Summary } from '../index';
import { NameInput } from '../name-input/NameInput';
import { PageHeader } from '../page-utils/PageHeader';
import { coreTemplate } from '../../data/coreTemplate';
import clone from "rfdc"



export const TemplateConfig = () => {
    const { newTemplate, clauses, defaultTemplate } = useSelector(state => state.templatesReducer)
    const { templateName, clausesSelected } = newTemplate

    const [optionSelected, setOptionsSelected] = useState({
        sectionId: -1,
        subSectionId: -1,
        labelId: -1
    })

    const [editorClause, setEditorClause] = useState("")
    const [reviewContract, setReviewContract] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        getDefaultTemplate().then(res => {
            dispatch(setDefaultTemplate(coreTemplate))

        }).catch(err => {
            console.log(err)
        })
    }, [])




    useEffect(() => {
        const content = getClauses({ sectionIndex: 0, subSectionIndex: 0, labelIndex: 0 })
        setOptionsSelected({
            sectionId: 1,
            subSectionId: 8,
            labelId: 2
        })

        dispatch(setClauses(content))


    }, [])



    useEffect(() => {
        if (defaultTemplate.length < 1)
            return

        const x = defaultTemplate?.data?.optionGroups?.map(og => {
            return {
                ...og, options: og?.options?.map(o => {
                    return {
                        ...o, groupClauses: o?.groupClauses?.map(gc => {
                            return { ...gc, content: gc?.clauses?.map(c => c.content).toString() }
                        })
                    }
                })
            }
        })
        // clausesSelected.length &&
        //     getEditorClauses()

        dispatch(setNewTemplate('clausesSelected', { optionGroups: x }))


    }, [defaultTemplate])




    const optionSelectHandler = (type, itemId, path, contentData) => {
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

            dispatch(setClauses(content))



        }
        setEditorClause(contentData)
        setOptionsSelected(updateSelections)
    }

    const getClauses = ({ sectionIndex, subSectionIndex, labelIndex }) => {
        return defaultTemplate?.data?.optionGroups[sectionIndex]?.options[subSectionIndex]?.groupClauses[labelIndex]?.clauses
    }

    const addClauseHandler = (content) => {
        const clauseDetailsCpy = clone()(clausesSelected)
        const optionGroup = defaultTemplate?.data?.optionGroups.find(data => data.id === optionSelected.sectionId)
        const options = optionGroup.options.find(data => data.id === optionSelected.subSectionId)
        const groupClauses = options.groupClauses.find(data => data.id === optionSelected.labelId)

        let optionGroupIndex = -1;
        let optionsIndex = -1;
        let groupClausesIndex = -1;

        optionGroupIndex = clauseDetailsCpy?.optionGroups?.findIndex(data => data.title === optionGroup.title)
        optionsIndex = clauseDetailsCpy?.optionGroups[optionGroupIndex]?.options?.findIndex(data => data.summary === options.summary)
        groupClausesIndex = clauseDetailsCpy.optionGroups[optionGroupIndex]?.options[optionsIndex]?.groupClauses?.findIndex(data => data.label === groupClauses.label)

        // if (optionGroupIndex < 0) {
        //     clauseDetailsCpy.optionGroups.push({ title: optionGroup.title, options: [{ summary: options.summary, groupClauses: [{ label: groupClauses.label, clauses: [{ content: content }] }] }] })
        //     dispatch(setNewTemplate('clausesSelected', clauseDetailsCpy))
        //     return
        // }

        // if (optionsIndex < 0) {
        //     clauseDetailsCpy.optionGroups[optionGroupIndex].options.push({ groupClauses: [{ label: groupClauses.label, clauses: [{ content: content }] }] })
        //     dispatch(setNewTemplate('clausesSelected', clauseDetailsCpy))
        //     return
        // }

        // if (groupClausesIndex < 0) {
        //     clauseDetailsCpy.optionGroups[optionGroupIndex].options[optionsIndex].groupClauses.push({ label: groupClauses.label, clauses: [{ content: content }] })
        //     dispatch(setNewTemplate('clausesSelected', clauseDetailsCpy))
        //     return
        // }

        clauseDetailsCpy.optionGroups[optionGroupIndex].options[optionsIndex].groupClauses[groupClausesIndex].content = content
        dispatch(setNewTemplate('clausesSelected', clauseDetailsCpy))
        setEditorClause(content)



    }

    const templateNameHandler = (e) => {
        dispatch(setNewTemplate("templateName", e.target.value))
    }

    const getEditorClauses = useCallback(() => {

        if (clausesSelected.length < 1) {
            return ""
        }
        const clauseDetailsCpy = clone()(clausesSelected)
        const optionGroup = defaultTemplate?.data?.optionGroups.find(data => data.id === optionSelected.sectionId)
        const options = optionGroup?.options?.find(data => data.id === optionSelected.subSectionId)
        const groupClauses = options?.groupClauses.find(data => data.id === optionSelected.labelId)

        let optionGroupIndex = -1;
        let optionsIndex = -1;
        let groupClausesIndex = -1;

        optionGroupIndex = clauseDetailsCpy?.optionGroups?.findIndex(data => data.title === optionGroup.title)
        optionsIndex = clauseDetailsCpy?.optionGroups[optionGroupIndex]?.options?.findIndex(data => data.summary === options.summary)
        groupClausesIndex = clauseDetailsCpy.optionGroups[optionGroupIndex]?.options[optionsIndex]?.groupClauses?.findIndex(data => data.label === groupClauses.label)



        if (optionGroupIndex < 0 || optionsIndex < 0 || groupClausesIndex < 0) {
            setEditorClause(clauseDetailsCpy?.optionGroups[0]?.options[0]?.groupClauses[0]?.content);
        }
        setEditorClause(clauseDetailsCpy.optionGroups[optionGroupIndex].options[optionsIndex].groupClauses[groupClausesIndex].content || "");
    }, [])

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
                <ClausesAndOptions optionGroups={clausesSelected?.optionGroups} optionSelectHandler={optionSelectHandler} optionSelected={optionSelected} />
                <PreviewPane>
                    {reviewContract ?
                        <Review data={clausesSelected?.optionGroups || []} />
                        :
                        <ClauseEditor data={editorClause} addClauseHandler={addClauseHandler} />
                    }
                </PreviewPane>
                {reviewContract ? <Suggestions /> : <Summary />}



            </div>
        </div>
    </div>
}
