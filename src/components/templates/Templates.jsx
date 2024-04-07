

import { useEffect, useState } from "react"
import { contractTemplates } from "../../data/contractTemplates"
import { templatesPreview } from "../../data/templatesPreview"
import { PageHeader } from "../page-utils/PageHeader"

import { PreviewPane, SortHeader, TabItems, Tabs, TabContent, Button } from "../"
import { TemplateCategoryDialog } from "./TemplateCategoryDialog"
import { TemplateConfig } from './TemplateConfig'
import { TemplatesCard } from "./TemplatesCard"

import "./templates.scss"

export const Templates = () => {
    const [previewLoading, setPreviewLoading] = useState(false)
    const [showConfig, showConfigHandler] = useState(false)
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(1)

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
        setTimeout(() => {
            setPreviewLoading(false)
        }, [1000]);
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
                            <div style={{ width: "328px", flexShrink: 0 }}>
                                <SortHeader />
                                <div className="templates-list">
                                    {contractTemplates.map(template => <TemplatesCard {...template} previewHandler={previewHandler} />)}
                                </div>
                            </div>
                            <PreviewPane>
                                {previewLoading ? "Loading" :
                                    templatesPreview.map(({ type, title, content }, index) =>
                                        <div key={index}>
                                            <p className={`${type === "heading" ? 'template-preview-heading' : type === 'subheading' ? "template-preview-subheading" : "template-preview-description"}`}>{title}</p>
                                            <div className='template-preview-content'>
                                                {content}
                                            </div>
                                        </div>
                                    )}
                            </PreviewPane>
                        </div>
                    </TabContent>
                </Tabs>
            </div>
            <TemplateCategoryDialog open={open} closeHandler={dialogCloseHandler} showConfigHandler={showConfigHandler} />
        </>
}