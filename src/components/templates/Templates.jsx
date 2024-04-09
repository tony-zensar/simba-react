

import { useEffect, useState } from "react"
import { PageHeader } from "../page-utils/PageHeader"

import { useDispatch, useSelector } from 'react-redux'
import { Button, PreviewPane, SortHeader, TabContent, TabItems, Tabs } from "../"
import { TemplateCategoryDialog } from "./TemplateCategoryDialog"
import { TemplateConfig } from './TemplateConfig'
import { TemplatesCard } from "./TemplatesCard"


import { templateCategories } from "../../data/templateCategories"
import { getTemplateById, getTemplateCategories, getTemplates } from "../../requests/requests"
import { setTemplateCategories, setTemplateList, setTemplatePreview } from "../../store/actionCreators"
import "./templates.scss"

export const Templates = () => {
    const [previewLoading, setPreviewLoading] = useState(false)
    const [showConfig, showConfigHandler] = useState(false)
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(1)

    const { templateList, templatePreview } = useSelector(state => state.templatesReducer)
    const dispatch = useDispatch()



    useEffect(() => {
        if (!templateList)
            getTemplates().then(res => {
                // previewHandler(res?.data?.items[0]?.id)
                dispatch(setTemplateList(res?.data?.items))

            }).catch(err => {
                console.log(err)
            })
        getTemplateCategories().then(res => {
            dispatch(setTemplateCategories(templateCategories))
        }).catch(err => {
            dispatch(setTemplateCategories(templateCategories))
        })
    }, [templateList])

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
        // setPreviewLoading(true)
        getTemplateById(templateId).then(res => {
            setPreviewLoading(false)
            // dispatch(setTemplatePreview(res))
        }).catch(err => {
            setPreviewLoading(false)
        })
    };

    return showConfig ? <TemplateConfig closeHandler={() => showConfigHandler(false)} type="template" />
        : <>
            <PageHeader />
            <div className="templates" >
                <div className='template-header'>
                    <label>Templates</label>
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

                                    <div>
                                        <p className="template-preview-heading">{templatePreview?.data?.heading}</p>
                                        <div className='template-preview-content'>{templatePreview?.data?.subHeading}</div>
                                        {/* <p className="template-preview-subheading">{title}</p> */}
                                        {/* <div key={textIndex} className='template-preview-content'></div> */}
                                        {!previewLoading && <p className="template-preview-description">Description</p>}
                                        <div className='template-preview-content'>{templatePreview?.data?.description}</div>
                                        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                                            <Button onClickHandler={dialogOpenHandler} label="Use this template" />
                                        </div>
                                    </div>
                                }
                            </PreviewPane>
                        </div>
                    </TabContent>
                </Tabs>
            </div >
            <TemplateCategoryDialog open={open} closeHandler={dialogCloseHandler} showConfigHandler={showConfigHandler} type="template" />
        </>
}