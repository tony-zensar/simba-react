
import { useState } from "react"
import { contractTemplates } from "../../data/contractTemplates"
import { templatesPreview } from "../../data/templatesPreview"
import { TemplatesCard } from "./TemplatesCard"
import { TemplateCategoryDialog } from "./TemplateCategoryDialog"
import "./templates.scss"

export const Templates = ({ }) => {
    const [previewLoading, setPreviewLoading] = useState(false)
    const [open, setOpen] = useState(false);

    const dialogOpenHandler = () => {
        setOpen(() => {
            return true
        })
    }

    const dialogCloseHandler = () => {
        setOpen(() => {
            return false
        })
    }
    const previewHandler = (templateId) => {
        setPreviewLoading(true)
        setTimeout(() => {
            setPreviewLoading(false)
        }, [1000])



    }
    return <>
        <TemplateCategoryDialog open={open} closeHandler={dialogCloseHandler} />

        <div style={{ position: "relative" }}>
            <button type="button" className="templates-new" onClick={dialogOpenHandler} >Create a new template</button>

            <div className="templates">
                <div className="templates__col">
                    <div className="templates__col-header">
                        <h4>Org templates</h4>
                        <div>
                            <label>Sort By:</label>
                            <select>
                                <option>Last modified</option>
                                <option>Favourite</option>
                            </select>
                        </div>
                    </div>
                    <div className="templates__col-list">
                        {contractTemplates.map(template => <TemplatesCard {...template} previewHandler={previewHandler} />)}
                    </div>
                </div>
                <div className="templates__col">
                    <div className="templates__col-header">
                        <h4>Preview</h4>
                    </div>

                    <div className="templates__col-preview">
                        {previewLoading ? "Loading" :
                            templatesPreview.map(({ heading, content }, index) =>
                                <div key={index}>
                                    <p>{heading}</p>
                                    <div>
                                        {content}
                                    </div>
                                </div>
                            )}
                    </div>
                    <button type="button" className="templates__col-btn" onClick={dialogOpenHandler}>Use selected template</button>
                </div>

            </div>
        </div>
    </>
}