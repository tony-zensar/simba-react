

import { useEffect, useState } from "react"
import { PageHeader } from "../page-utils/PageHeader"

import { useDispatch, useSelector } from 'react-redux'
import { ButtonSmall, PreviewPane, SortHeader, TabContent, TabItems, Tabs } from "../"
import { TemplateCategoryDialog } from "./TemplateCategoryDialog"
import { TemplateConfig } from './TemplateConfig'
import { TemplatesCard } from "./TemplatesCard"
import { templateCategories } from "../../data/templateCategories"
import { getTemplateById, getTemplateCategories, getTemplates } from "../../requests/requests"
import { clearStore, setTemplateCategories, setTemplateList, setTemplatePreview } from "../../store/actionCreators"

import "./templates.scss"
import { Oval } from "react-loader-spinner"

export const Templates = () => {
    const [previewLoading, setPreviewLoading] = useState(true)
    const [pageLoading, setPageLoading] = useState(true)

    const [showConfig, showConfigHandler] = useState(false)
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(1)
    const { templateList, templatePreview } = useSelector(state => state.templatesReducer)
    const dispatch = useDispatch()



    useEffect(() => {
        if (templateList?.length > 0) {
            return
        }
        getTemplates().then(res => {
            dispatch(setTemplateList(res?.data?.items))
            previewHandler(res?.data?.items[0]?.id)

        }).catch(err => {
            console.log(err)
            setPageLoading(false)
            setPreviewLoading(false)
        })

    }, [templateList])

    useEffect(() => {
        getTemplateCategories().then(res => {
            dispatch(setTemplateCategories(templateCategories))
        }).catch(err => {
            dispatch(setTemplateCategories(templateCategories))
        })
    }, [])

    useEffect(() => () => {
        dispatch(clearStore())
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
            setPageLoading(false)
            dispatch(setTemplatePreview(res.data))
        }).catch(err => {
            setPreviewLoading(false)
            setPageLoading(false)
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
                        {pageLoading ? <Oval wrapperClass="spinner" height={50} color="#003866" /> :
                            <div style={{ display: "flex", gap: "24px" }}>
                                <div style={{ width: "333px", flexShrink: 0 }}>
                                    <SortHeader />
                                    <div className="templates-list">
                                        {templateList?.map((template, index) => <TemplatesCard {...template} previewHandler={previewHandler} key={index} />)}
                                    </div>
                                </div>
                                <PreviewPane>
                                    {previewLoading ? <Oval wrapperClass="spinner preview-spinner" height={50} color="#003866" /> :
                                        <div>
                                            <p className="template-preview-heading">{templatePreview?.heading}</p>
                                            <div className='template-preview-content'>{templatePreview?.headingContent}</div>
                                            <p className="template-preview-subheading">{templatePreview?.subHeading}</p>
                                            <div className='template-preview-content'>{templatePreview?.subHeadingContent}</div>
                                            <p className="template-preview-description">Description</p>
                                            <div className='template-preview-content'>{templatePreview?.description}</div>
                                            <div style={{ display: "flex", flexGrow: 0, justifyContent: "flex-end", width: "100%", position: "absolute", right: "10px", top: "10px" }}>
                                                <ButtonSmall onClick={dialogOpenHandler} label="Use this template" />
                                            </div>
                                        </div>
                                    }
                                </PreviewPane>
                            </div>
                        }
                    </TabContent>
                </Tabs>
            </div >
            <TemplateCategoryDialog open={open} closeHandler={dialogCloseHandler} showConfigHandler={showConfigHandler} type="template" />
        </>
}