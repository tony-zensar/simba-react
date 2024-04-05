import { useEffect } from "react"
import { contractTabItems } from "../../data/contractsTabItems"
import "./contracts-tab.scss"

export const ContractTabItems = ({ tabChangeHandler, activeTabName }) => {

    return <div className="contract-tabs">
        <div className="contract-tabs-heading">Contract</div>
        {contractTabItems.map((tab, index) => {
            return <div className={`contract-tabs__title ${activeTabName === tab.component ? "contract-tabs__title-active" : ""}`} key={tab.component} onClick={!tab.subMenu ? () => tabChangeHandler(tab.component) : null}>{tab.title}

                {tab.subMenu?.length ?
                    tab.subMenu.map(subMenu => {
                        return <div className="contract-tabs__submenu" onClick={() => tabChangeHandler(subMenu.component)} key={subMenu.component}> {subMenu.title}</div>
                    })

                    : null}




            </div>


        })}
    </div >
}




