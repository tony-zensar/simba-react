import { NAV_ITEMS, navItems } from "../../data/navItems";
import contract_icon from "../../assets/icons/contract_icon.png";

import "./nav.scss";

export const NavItems = ({ tabChangeHandler, activeTabName }) => {
    return <div className="nav">
        <h1 className="logo">
            <a className="logo-link" href="javascript:void(0);" title="Nec">
                Nec
            </a>
        </h1>

        <nav className="nav-cont">
            <ul className="nav-list-cont">
                {NAV_ITEMS.map(navItem => {
                    return (
                        <li key={navItem.id} className="nav-list">
                            <a className="nav-link nav-link-active" href="javascript:void(0);" title={navItem.title}>
                                <img className="nav-icon" src={contract_icon} alt={navItem.title} />
                                {navItem.title}
                            </a>
                        </li>
                    )}
                )}
            </ul>
        </nav>
        {navItems.map((tab) => {
            return <div className={`nav-title ${activeTabName === tab.component ? "nav-title-active" : ""}`} key={tab.component} onClick={!tab.subMenu ? () => tabChangeHandler(tab.component) : null}>
                {tab.title}
            </div>
            })
        }
    </div >
}
