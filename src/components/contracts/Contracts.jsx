

import { useEffect, useState } from "react"
import { PageHeader } from "../page-utils/PageHeader"

import { useDispatch, useSelector } from 'react-redux'
import { Button, PreviewPane, SortHeader, TabContent, TabItems, Tabs } from "../"
import { TemplateCategoryDialog } from "../templates/TemplateCategoryDialog"
import { TemplateConfig } from '../templates/TemplateConfig'
import { TemplatesCard } from "../templates/TemplatesCard"


import { templateCategories } from "../../data/templateCategories"
import { templatesPreview } from "../../data/templatesPreview"
import { getTemplateById, getTemplateCategories, getTemplates } from "../../requests/requests"
import { setTemplateCategories, setTemplateList, setTemplatePreview } from "../../store/actionCreators"
import "../templates/templates.scss"

export const Contracts = ({ page }) => {
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
                console.log(res.data.items)
                dispatch(setTemplateList(res?.data?.items))
                previewHandler(res?.data?.items[0]?.id)
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
            dispatch(setTemplatePreview(templatesPreview))
        }).catch(err => {
            setPreviewLoading(false)
            console.log(err)
        })

    };

    return showConfig ? <TemplateConfig closeHandler={() => showConfigHandler(false)} type="contract" />
        : <>
            <PageHeader />
            <div className="templates" >
                <div className='template-header'>
                    <label>Contracts</label>
                </div>

                <Tabs>
                    <TabItems items={["My Contracts", "Company Contracts"]} onChangeHandler={tabChangeHandler} activeTab={activeTab} />
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
                                        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                                            <Button onClickHandler={() => showConfigHandler(true)} label="Edit this contract" />
                                        </div>
                                    </>
                                }
                            </PreviewPane>
                        </div>
                    </TabContent>
                </Tabs>
            </div>
        </>
}