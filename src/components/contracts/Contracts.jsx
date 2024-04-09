

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonSmall, PreviewPane, SortHeader, TabContent, TabItems, Tabs } from "../"
import { templatesPreview } from "../../data/templatesPreview"
import { getContractById, getContracts, getTemplateById, getTemplates } from "../../requests/requests"
import { setTemplateList, setTemplatePreview } from "../../store/actionCreators"
import { PageHeader } from "../page-utils/PageHeader"
import { TemplateConfig } from '../templates/TemplateConfig'
import { TemplatesCard } from "../templates/TemplatesCard"
import "../templates/templates.scss"
import { AddIcon, EditIcon } from "../../assets/IconList"

export const Contracts = () => {
    const [previewLoading, setPreviewLoading] = useState(false)
    const [showConfig, showConfigHandler] = useState(false)
    const [activeTab, setActiveTab] = useState(1)

    const { templateList, templatePreview } = useSelector(state => state.templatesReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        if (!templateList)
            getContracts().then(res => {
                dispatch(setTemplateList(res?.data?.items))
                return previewHandler(res?.data?.items[0]?.id)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const tabChangeHandler = (tabIndex) => {
        setActiveTab(tabIndex)
    };

    const previewHandler = (contractId) => {
        setPreviewLoading(true)
        getContractById(contractId).then(res => {
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
                                    {templateList?.map(template => <TemplatesCard {...template} previewHandler={previewHandler} type="contract" />)}
                                </div>
                            </div>
                            <PreviewPane>
                                {previewLoading ? "Loading" :

                                    <div>
                                        <p className="template-preview-heading">{templatePreview?.data?.headingLabel}</p>
                                        <div className='template-preview-content'>{templatePreview?.data?.headingContent}</div>
                                        <p className="template-preview-subheading">{templatePreview?.data?.subHeadingLabel}</p>
                                        <div className='template-preview-content'>{templatePreview?.data?.subHeadingContent}</div>
                                        <p className="template-preview-description">Description</p>
                                        <div className='template-preview-content'>{templatePreview?.data?.description}</div>
                                        <div style={{ display: "flex", flexGrow: 0, justifyContent: "flex-end", width: "100%", position: "absolute", right: "10px", top: "10px" }}>

                                            <ButtonSmall icon={<EditIcon />} onClick={() => showConfigHandler(true)} label="Edit this contract" />
                                        </div>
                                    </div>
                                }
                            </PreviewPane>
                        </div>
                    </TabContent>
                </Tabs>
            </div>
        </>
}