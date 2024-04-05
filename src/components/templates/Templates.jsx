
import * as React from 'react'
import { useState } from "react"
import { contractTemplates } from "../../data/contractTemplates"
import { templatesPreview } from "../../data/templatesPreview"
import { TemplateCategoryDialog } from "./TemplateCategoryDialog"
import { TemplatesCard } from "./TemplatesCard"
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { LeftArrowIcon, SearchIcon } from '../../assets/IconList'
import "./templates.scss"

export const Templates = ({ showTemplateConfig }) => {
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
        <TemplateCategoryDialog open={open} closeHandler={dialogCloseHandler} showTemplateConfig={showTemplateConfig} />


        <div className="templates" style={{ position: "relative" }}>
            <div className="templates__col">
                <div className="templates__col-header">
                    <div className='search-input'>
                        <input type='text' placeholder='Search' value="" onChange={null} />
                        <span><SearchIcon /></span>
                    </div>
                </div>

                <div className='redirect-page'>
                    <LeftArrowIcon />
                    <label>Contracts</label>
                </div>

                <div className='page-header'>
                    <label>Templates</label>
                    <button type="button" onClick={dialogOpenHandler}>Create a contract</button>
                </div>

                <div className='template-type-tab'>
                    <div className='template-type-tab-items'>
                        <div>
                            <label>My Templates</label>
                        </div>
                        <div className='active'>
                            <label>Company Templates</label>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "24px" }}>
                        <div style={{ width: "328px", flexShrink: 0 }}>
                            <div className='template-view-setting'>
                                <div className='template-view-style' >
                                    <GridViewRoundedIcon /><MenuRoundedIcon />
                                </div>
                                <div>
                                    <select>
                                        <option>Last modified</option>
                                        <option>Created On</option>
                                    </select>
                                </div>
                            </div>


                            <div className="templates-list">
                                {contractTemplates.map(template => <TemplatesCard {...template} previewHandler={previewHandler} />)}
                            </div>
                        </div>
                        <div className="template-preview">
                            {previewLoading ? "Loading" :
                                templatesPreview.map(({ type, title, content }, index) =>
                                    <div key={index}>
                                        <p className={`${type === "heading" ? 'template-preview-heading' : type === 'subheading' ? "template-preview-subheading" : "template-preview-description"}`}>{title}</p>
                                        <div className='template-preview-content'>
                                            {content}
                                        </div>
                                    </div>
                                )}
                        </div>

                    </div>
                </div>
            </div>


        </div >

    </>
}