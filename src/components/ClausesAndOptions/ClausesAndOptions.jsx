import "./clauses-options.scss";

export const ClausesAndOptions = ({ template, optionSelectHandler = null, optionSelected }) => {
    return <div className="template-option-groups">
        {template?.optionGroups.map(({ title, id: sectionId, options }, sectionIndex) => {
            return <div style={{ width: "100%" }}>
                <div className="template-options level-1">
                    <p onClick={() => optionSelectHandler("section", sectionId)} className={`${optionSelected?.sectionId === sectionId ? "active" : ""}`} >{title}</p>
                    <div className="template-options level-2">
                        {options?.map(({ summary, id: subSectionId, groupClauses }, subSectionIndex) => {
                            return <>
                                <p onClick={() => optionSelectHandler("subSection", subSectionId)} className={`${optionSelected?.subSectionId === subSectionId ? "active" : ""}`}>{summary}</p>
                                <div className="template-options level-3">
                                    {groupClauses?.map(({ label, id: labelId }, labelIndex) => {
                                        return <p onClick={() => optionSelectHandler("label", labelId, { sectionIndex, subSectionIndex, labelIndex })} className={`${optionSelected?.labelId === labelId ? "active" : ""}`}>{label} </p>
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
