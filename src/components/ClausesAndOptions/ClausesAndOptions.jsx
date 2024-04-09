import "./clauses-options.scss";

export const ClausesAndOptions = ({ type, optionGroups = [], optionSelectHandler = null, optionSelected }) => {
    return <div className="template-option-groups">
        {optionGroups?.map(({ title, id: sectionId, options }, sectionIndex) => {
            return <div style={{ width: "100%" }}>
                <div className="template-options level-1">
                    <p onClick={() => optionSelectHandler("section", sectionId, null, null)} className={`${optionSelected?.sectionId === sectionId ? "active" : ""}`} >{title}</p>
                    <div className="template-options level-2">
                        {options?.map(({ summary, id: subSectionId, groupClauses }, subSectionIndex) => {
                            return <>
                                <p onClick={() => optionSelectHandler("subSection", subSectionId, null, null)} className={`${optionSelected?.subSectionId === subSectionId ? "active" : ""}`}>{summary}</p>
                                <div className="template-options level-3">
                                    {groupClauses?.map(({ label, id: labelId, content }, labelIndex) => {
                                        return <p onClick={() => optionSelectHandler("label", labelId, { sectionIndex, subSectionIndex, labelIndex }, content)} className={`${optionSelected?.labelId === labelId ? "active" : ""}`}>{label} </p>
                                    })}
                                </div>
                            </>
                        })}
                    </div>


                </div>
            </div>
        })}
    </div>
}
