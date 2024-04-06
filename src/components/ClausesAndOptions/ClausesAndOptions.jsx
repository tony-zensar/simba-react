import { useState } from "react";
import "./clauses-options.scss";

export const ClausesAndOptions = ({ template }) => {

    const [optionSelected, setOptionsSelected] = useState({
        sectionId: -1,
        subSectionId: -1,
        labelId: -1
    })

    const optionSelectHandler = (type, itemId) => {

        if (type === "section") {
            setOptionsSelected({
                sectionId: itemId,
                subSectionId: -1,
                labelId: -1
            })
        } else if (type === "subSection") {
            setOptionsSelected({
                ...optionSelected, subSectionId: itemId, labelId: -1

            })

        } else {
            setOptionsSelected({
                ...optionSelected, labelId: itemId

            })

        }

    }





    return <div className="template-option-groups">
        {template.optionGroups.map(({ title, id: sectionId, options }, index) => {
            return <div style={{ width: "100%" }}>
                <div className="template-options level-1">
                    <p onClick={() => optionSelectHandler("section", sectionId)} className={`${optionSelected.sectionId === sectionId ? "active" : ""}`} >{title}</p>
                    <div className="template-options level-2">
                        {options?.map(({ summary, id: subSectionId, clauses }) => {
                            return <>
                                <p onClick={() => optionSelectHandler("subSection", subSectionId)} className={`${optionSelected.subSectionId === subSectionId ? "active" : ""}`}>{summary}</p>
                                <div className="template-options level-3">
                                    {clauses?.map(({ label, id: labelId }) => {
                                        return <p onClick={() => optionSelectHandler("label", labelId)} className={`${optionSelected.labelId === labelId ? "active" : ""}`}>{label} </p>
                                    })}
                                </div>
                            </>
                        })}
                    </div>

                    <div className="divider" />
                </div>
            </div>
        })}


        {/* <div className="divider" /> */}
    </div>












}