

import { useEffect, useState } from "react"
import { PageHeader } from "../page-utils/PageHeader"

import { useDispatch, useSelector } from 'react-redux'
import { Button, PreviewPane, SortHeader, TabContent, TabItems, Tabs } from "../"
import { TemplateCategoryDialog } from "./TemplateCategoryDialog"
import { TemplateConfig } from './TemplateConfig'
import { TemplatesCard } from "./TemplatesCard"


import { templateCategories } from "../../data/templateCategories"
import { templatesPreview } from "../../data/templatesPreview"
import { getTemplateById, getTemplateCategories, getTemplates } from "../../requests/requests"
import { setTemplateCategories, setTemplateList, setTemplatePreview } from "../../store/actionCreators"
import "./templates.scss"

export const Templates = () => {
    const [previewLoading, setPreviewLoading] = useState(true)
    const [showConfig, showConfigHandler] = useState(false)
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(1)

    const { templateList, templatePreview } = useSelector(state => state.templatesReducer)
    const dispatch = useDispatch()

    useEffect(() => () => {
        setPreviewLoading(false)
    }, [])

    useEffect(() => {
        if (!templateList)
            getTemplates().then(res => {
                previewHandler(res?.data?.items[0]?.id)
                dispatch(setTemplateList(res?.data?.items))

            }).catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        getTemplateCategories().then(res => {
            dispatch(setTemplateCategories(templateCategories))
        }).catch(err => {
            dispatch(setTemplateCategories(templateCategories))

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
            setPreviewLoading(false)

            dispatch(setTemplatePreview(res))
        }).catch(err => {
            setPreviewLoading(false)
            console.log(err)
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

                                    <>
                                        <p className="template-preview-heading">{templatePreview?.data?.heading}</p>
                                        <div className='template-preview-content'>{templatePreview?.data?.subHeading}</div>
                                        {/* <p className="template-preview-subheading">{title}</p> */}
                                        {/* <div key={textIndex} className='template-preview-content'></div> */}
                                        {!previewLoading && <p className="template-preview-description">Description</p>}
                                        <div className='template-preview-content'>{templatePreview?.data?.description}</div>


                                    </>}
                            </PreviewPane>
                        </div>
                    </TabContent>
                </Tabs>
            </div >
            <TemplateCategoryDialog open={open} closeHandler={dialogCloseHandler} showConfigHandler={showConfigHandler} />
        </>
}