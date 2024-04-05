import { navItems } from "../../data/navItems"
import "./nav.scss"

export const NavItems = ({ tabChangeHandler, activeTabName }) => {
    return <div className="nav-items">
        <div className="nav-main">Contract</div>
        {
            navItems.map((tab) => {
                return <div className={`nav-title ${activeTabName === tab.component ? "nav-title-active" : ""}`} key={tab.component} onClick={!tab.subMenu ? () => tabChangeHandler(tab.component) : null}>{tab.title}

                </div>
            })
        }
    </div >
}




