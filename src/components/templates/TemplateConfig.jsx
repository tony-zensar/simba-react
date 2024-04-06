import { useEffect, useState } from 'react';
import { coreTemplate } from '../../data/coreTemplate';
import { ClausesAndOptions } from '../ClausesAndOptions/ClausesAndOptions';
import { Button, ClauseEditor, PreviewPane, Review } from '../index';
import { NameInput } from '../name-input/NameInput';
import { PageHeader } from '../page-utils/PageHeader';

export const TemplateConfig = ({ closeHandler }) => {
    const [clauses, setClauses] = useState([])

    const [clausesSelected, setClauseSelected] = useState({ optionGroups: [] })

    const [optionSelected, setOptionsSelected] = useState({
        sectionId: -1,
        subSectionId: -1,
        labelId: -1
    })

    const [reviewContract, setReviewContract] = useState(false)

    useEffect(() => {
        const content = getClauses({ sectionIndex: 0, subSectionIndex: 0, labelIndex: 0 })
        setOptionsSelected({
            sectionId: 1,
            subSectionId: 8,
            labelId: 2
        })
        setClauses(content)

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

            setClauses(content)

        }
        setOptionsSelected(updateSelections)
    }

    const getClauses = ({ sectionIndex, subSectionIndex, labelIndex }) => {
        return coreTemplate.optionGroups[sectionIndex]?.options[subSectionIndex]?.groupClauses[labelIndex]?.clauses
    }

    const addClauseHandler = (content) => {

        const clauseDetailsCpy = { ...clausesSelected }

        const optionGroup = coreTemplate.optionGroups.find(data => data.id === optionSelected.sectionId)
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
            setClauseSelected(clauseDetailsCpy)
            return
        }

        if (optionsIndex < 0) {
            clauseDetailsCpy.optionGroups[optionGroupIndex].options.push({ groupClauses: [{ label: groupClauses.label, clauses: [{ content: content }] }] })
            setClauseSelected(clauseDetailsCpy)
            return
        }

        if (groupClausesIndex < 0) {
            clauseDetailsCpy.optionGroups[optionGroupIndex].options[optionsIndex].groupClauses.push({ label: groupClauses.label, clauses: [{ content: content }] })
            setClauseSelected(clauseDetailsCpy)
            return
        }

        clauseDetailsCpy.optionGroups[optionGroupIndex].options[optionsIndex].groupClauses[groupClausesIndex].clauses.push({ content: content })
        setClauseSelected(clauseDetailsCpy)

    }

    return <div >
        <PageHeader />
        {/* <button onClick={closeHandler}>Go Back</button> */}
        <div className='config-container'>
            <div className='config-header'>
                <NameInput />
                <div className='config-actions'>
                    {reviewContract ? <Button label="Create Contract" /> : <Button label="Review Contract" onClickHandler={() => setReviewContract(true)} />}
                    <Button variant='secondary' label="Save & Exit" onClickHandler={() => setReviewContract(false)} />
                </div>
            </div>
            <div style={{ display: "flex", columnGap: "24px" }}>
                <ClausesAndOptions template={coreTemplate} optionSelectHandler={optionSelectHandler} optionSelected={optionSelected} />


                <PreviewPane >
                    {reviewContract ?
                        <Review data={clausesSelected?.optionGroups || []} />
                        :

                        <ClauseEditor data={clauses.map(c => c.content).toString()} addClauseHandler={addClauseHandler} />

                    }
                </PreviewPane>


            </div>

        </div>


    </div>
}