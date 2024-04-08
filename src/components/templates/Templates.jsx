

import { useEffect, useState } from "react"
// import { templates } from "../../data/templates"
import { PageHeader } from "../page-utils/PageHeader"

import { useDispatch, useSelector } from 'react-redux'
import { Button, PreviewPane, SortHeader, TabContent, TabItems, Tabs } from "../"
import { TemplateCategoryDialog } from "./TemplateCategoryDialog"
import { TemplateConfig } from './TemplateConfig'
import { TemplatesCard } from "./TemplatesCard"


import { getTemplateById, getTemplates } from "../../requests/requests"
import { setTemplateList, setTemplatePreview } from "../../store/actionCreators"
import "./templates.scss"

export const Templates = () => {
    const [previewLoading, setPreviewLoading] = useState(true)
    const [showConfig, showConfigHandler] = useState(false)
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(1)

    const { templateList, templatePreview } = useSelector(state => state.templatesReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        getTemplates().then(res => {
            dispatch(setTemplateList(res))
            previewHandler(res[0].templateId)
        })
    }, [])

    useEffect(() => {
        if (showConfig) {
            dialogCloseHandler()
        }
    }, [showConfig])


    const dialogOpenHandler = () => {
        setOpen(() => {
            return true
        })
    };

    const dialogCloseHandler = () => {
        setOpen(() => {
            return false
        })
    };

    const tabChangeHandler = (tabIndex) => {
        setActiveTab(tabIndex)
    };

    const previewHandler = (templateId) => {
        setPreviewLoading(true)
        getTemplateById(templateId).then(res => {
            dispatch(setTemplatePreview(res))
            setPreviewLoading(false)
        })

    };

    return showConfig ? <TemplateConfig closeHandler={() => showConfigHandler(false)} />
        : <>
            <PageHeader />
            <div className="templates" >
                <div className='template-header'>
                    <label>Templates</label>
                    <Button onClickHandler={dialogOpenHandler} label="Create a contract" />
                </div>

                <Tabs>
                    <TabItems items={["My Templates", "Company Templates"]} onChangeHandler={tabChangeHandler} activeTab={activeTab} />
                    <TabContent>
                        <div style={{ display: "flex", gap: "24px" }}>
                            <div style={{ width: "333px", flexShrink: 0 }}>
                                <SortHeader />
                                <div className="templates-list">
                                    {templateList?.map(template => <TemplatesCard {...template} previewHandler={previewHandler} />)}
                                </div>
                            </div>
                            <PreviewPane>
                                {previewLoading ? "Loading" :
                                    templatePreview?.map(({ type, title, content }, index) => {
                                        const customClassName = type === "heading" ? 'template-preview-heading' : "template-preview-subheading";
                                        const updatedCustomClassName = type === "description" ? "template-preview-description" : customClassName
                                        return <div key={index}>
                                            <p className={updatedCustomClassName}>{title}</p>
                                            {content.map((text, textIndex) => {
                                                return (
                                                    <div key={textIndex} className='template-preview-content'>
                                                        {text}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    })}
                            </PreviewPane>
                        </div>
                    </TabContent>
                </Tabs>
            </div>
            <TemplateCategoryDialog open={open} closeHandler={dialogCloseHandler} showConfigHandler={showConfigHandler} />
        </>
}