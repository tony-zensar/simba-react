
import { useState } from "react"
import { contractTemplates } from "../../data/contractTemplates"
import { templatesPreview } from "../../data/templatesPreview"
import "./contracts.scss"
import { ContractTemplateCard } from "./ContractTemplateCard"

export const ContractTemplates = ({ }) => {
    const [previewLoading, setPreviewLoading] = useState(false)

    const previewHandler = (templateId) => {
        setPreviewLoading(true)
        setTimeout(() => {
            setPreviewLoading(false)
        }, [1000])



    }
    return <div style={{ position: "relative" }}>
        <button type="button" className="contract-templates-new" >Create a new template</button>

        <div className="contract-templates">

            <div className="contract-templates__col">
                <div className="contract-templates__col__header">
                    <h4>Org templates</h4>
                    <div>
                        <label>Sort By:</label>
                        <select>
                            <option>Last modified</option>
                            <option>Favourite</option>
                        </select>
                    </div>
                </div>
                <div className="contract-templates__col-list">

                    {contractTemplates.map(template => <ContractTemplateCard {...template} previewHandler={previewHandler} />)}

                </div>
            </div>
            <div className="contract-templates__col">
                <div className="contract-templates__col__header">
                    <h4>Preview</h4>
                </div>

                <div className="contract-templates__col-preview">
                    {previewLoading ? "Loading" :
                        templatesPreview.map(({ heading, content }, index) =>
                            <div key={index}>
                                <p>{heading}</p>
                                <div>
                                    {content}
                                </div>
                            </div>
                        )
                    }
                </div>
                <button type="button" className="contract-templates__col-btn">Use selected template</button>
            </div>

        </div>
    </div>

}