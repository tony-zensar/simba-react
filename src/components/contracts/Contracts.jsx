

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Button, PreviewPane, SortHeader, TabContent, TabItems, Tabs } from "../"
import { templatesPreview } from "../../data/templatesPreview"
import { getTemplateById, getTemplates } from "../../requests/requests"
import { setTemplateList, setTemplatePreview } from "../../store/actionCreators"
import { PageHeader } from "../page-utils/PageHeader"
import { TemplateConfig } from '../templates/TemplateConfig'
import { TemplatesCard } from "../templates/TemplatesCard"
import "../templates/templates.scss"

export const Contracts = () => {
    const [previewLoading, setPreviewLoading] = useState(false)
    const [showConfig, showConfigHandler] = useState(false)
    const [activeTab, setActiveTab] = useState(1)

    const { templateList, templatePreview } = useSelector(state => state.templatesReducer)
    const dispatch = useDispatch()



    useEffect(() => {
        if (!templateList)
            getTemplates().then(res => {
                dispatch(setTemplateList(res?.data?.items))
                return previewHandler(res?.data?.items[0]?.id)
            }).catch(err => {
                console.log(err)
            })
    }, [])

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