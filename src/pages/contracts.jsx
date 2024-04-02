import { useState } from "react"
import { ContractTabContents, ContractTabItems } from "../components"

export const Contracts = () => {
    const [activeTabName, setActiveTabName] = useState("myContracts");


    return <div style={{ padding: "40px", display: "flex", background: "#e0e1dd" }}>
        <ContractTabItems tabChangeHandler={(tab) => setActiveTabName(tab)} activeTabName={activeTabName} />
        <ContractTabContents activeTabName={activeTabName} />
    </div>





}

