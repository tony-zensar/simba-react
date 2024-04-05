import { useState } from 'react';
import { ContractTabContents, ContractTabItems, TemplateConfig } from "../components/index";

export const Contracts = () => {
    const [activeTabName, setActiveTabName] = useState("myContracts");
    const [showTemplateConfig, setShowTemplateConfig] = useState(false)

    return <div style={{ padding: "40px", display: "flex", background: "#e0e1dd" }}>
        {!showTemplateConfig ?
            <>
                <ContractTabItems tabChangeHandler={(tab) => setActiveTabName(tab)} activeTabName={activeTabName} />
                <ContractTabContents activeTabName={activeTabName} showTemplateConfig={setShowTemplateConfig} />
            </>
            : <div>
                <TemplateConfig closeHandler={() => setShowTemplateConfig(false)} />

            </div>}
        <smart-assistant></smart-assistant>

    </div>





}

