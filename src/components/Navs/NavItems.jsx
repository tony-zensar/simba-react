import { NAV_ITEMS } from "../../data/navItems";
import contract_icon from "../../assets/icons/contract_icon.png";
import training_icon from "../../assets/icons/training_icon.png";
import workflow_icon from "../../assets/icons/workflow_icon.png";
import guidance_icon from "../../assets/icons/guidance_icon.png";

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
                {NAV_ITEMS.map((navItem, navIndex) => {
                    let icon = contract_icon;
                    if (navIndex === 1) {
                        icon = training_icon;
                    } else if (navIndex === 2) {
                        icon = workflow_icon;
                    } else if (navIndex === 3) {
                        icon = guidance_icon;
                    }
                    return (
                        <li key={navItem.id} className="nav-list">
                            <a className={`nav-link ${navIndex === 0 && "nav-link-active"}`} href="javascript:void(0);" title={navItem.title}>
                                <img className="nav-icon" src={icon} alt={navItem.title} />
                                <span className="nav-link-text">{navItem.title}</span>
                            </a>
                            {navItem.subMenu?.length > 0 &&
                                <nav className="nav-cont">
                                    <ul className="nav-list-cont nav-list-cont-submenu">
                                        {navItem.subMenu.map(subMenuItem => {
                                            return (
                                                <li key={subMenuItem.id} className="nav-list-submenu">
                                                    <a className={`nav-link-submenu ${activeTabName === subMenuItem.component ? "nav-link-submenu-active" : ""}`} href="javascript:void(0);" title={subMenuItem.title}
                                                        onClick={!subMenuItem.subMenu ? () => tabChangeHandler(subMenuItem.component) : null}
                                                    >
                                                        {subMenuItem.title}
                                                    </a>
                                                </li>
                                            )}
                                        )}
                                    </ul>
                                </nav>
                            }
                        </li>
                    )}
                )}
            </ul>
        </nav>
        {/* {navItems.map((tab) => {
            return <div className={`nav-title ${activeTabName === tab.component ? "nav-title-active" : ""}`} key={tab.component} onClick={!tab.subMenu ? () => tabChangeHandler(tab.component) : null}>
                {tab.title}
            </div>
            })
        } */}
    </div >
}
