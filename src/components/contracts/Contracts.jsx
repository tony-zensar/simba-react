

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { ButtonSmall, PreviewPane, SortHeader, TabContent, TabItems, Tabs } from "../"
import { EditIcon } from "../../assets/IconList"
import { getContractById, getContracts } from "../../requests/requests"
import { clearStore, setTemplateList, setTemplatePreview } from "../../store/actionCreators"
import { PageHeader } from "../page-utils/PageHeader"
import { TemplateConfig } from '../templates/TemplateConfig'
import { TemplatesCard } from "../templates/TemplatesCard"
import { Oval } from 'react-loader-spinner'
import "../templates/templates.scss"

export const Contracts = () => {
    const [pageLoading, setPageLoading] = useState(true)
    const [previewLoading, setPreviewLoading] = useState(true)

    const [showConfig, showConfigHandler] = useState(false)
    const [activeTab, setActiveTab] = useState(1)
    const { templateList, templatePreview, reloadPage } = useSelector(state => state.templatesReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        if (templateList?.length > 0) {
            return
        }
        setPageLoading(true)
        getContracts().then(res => {
            dispatch(setTemplateList(res?.data?.items))
            previewHandler(res?.data?.items[0]?.id)
        }).catch(err => {
            console.log(err)
            setPageLoading(false)
            setPreviewLoading(false)

        })



    }, [templateList])

    useEffect(() => () => {
        dispatch(clearStore())
    }, [])

    const tabChangeHandler = (tabIndex) => {
        setActiveTab(tabIndex)
    };

    const previewHandler = (contractId) => {
        setPreviewLoading(true)
        getContractById(contractId).then(res => {
            setPreviewLoading(false)
            setPageLoading(false)
            dispatch(setTemplatePreview(res?.data))
        }).catch(err => {
            setPreviewLoading(false)
            setPageLoading(false)
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
                        {pageLoading ? <Oval wrapperClass="spinner" height={50} color="#003866" /> :
                            <div style={{ display: "flex", gap: "24px" }}>
                                <div style={{ width: "333px", flexShrink: 0 }}>
                                    <SortHeader />
                                    <div className="templates-list">
                                        {templateList?.map((template, index) => <TemplatesCard {...template} previewHandler={previewHandler} type="contract" key={index} />)}
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

                                                <ButtonSmall icon={<EditIcon />} onClick={() => showConfigHandler(true)} label="Edit this contract" />
                                            </div>
                                        </div>
                                    }
                                </PreviewPane>
                            </div>}
                    </TabContent>
                </Tabs>
            </div>
        </>
}