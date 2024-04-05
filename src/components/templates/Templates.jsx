
import { InputAdornment, TextField, FormControl, FilledInput, FormHelperText } from '@mui/material/'
import * as React from 'react'
import { useState } from "react"
import { contractTemplates } from "../../data/contractTemplates"
import { templatesPreview } from "../../data/templatesPreview"
import { TemplateCategoryDialog } from "./TemplateCategoryDialog"
import { TemplatesCard } from "./TemplatesCard"
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
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

        <div style={{ position: "relative" }}>
            <button type="button" className="templates-new" onClick={dialogOpenHandler} >Create a new template</button>
            <div className="templates">
                <div className="templates__col">
                    <div className="templates__col-header">
                        <div className='search-input'>
                            <input type='text' placeholder='Search' value="" onChange={null} />
                            <span><SearchIcon /></span>
                        </div>
                    </div>

                    <div className='redirect-page'>
                        <KeyboardArrowLeftIcon />
                        <label>Contracts</label>
                    </div>

                    <div className='page-header'>
                        <label>Templates</label>
                    </div>

                    <div className='template-type-tab'>
                        <div className='template-type-tab-items'>
                            <div>
                                <label>My templates</label>
                            </div>
                            <div className='active'>
                                <label>Company Templates</label>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
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
                            <div style={{ padding: "48px" }}>
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

                        </div>
                    </div>
                </div>
                {/* <div className="templates__col">


                    <button type="button" className="templates__col-btn" onClick={dialogOpenHandler}>Use selected template</button>
                </div> */}

            </div >
        </div >
    </>
}