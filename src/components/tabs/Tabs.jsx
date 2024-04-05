import "./tabs.scss"

export const Tabs = ({ children }) => {
    return <div className='simba-tabs'>
        {children}
    </div>
}

export const TabItems = ({ items = [], activeTab, onChangeHandler }) => {
    return <div className='simba-tab-items'>
        {
            items.map((tab, index) => {
                return <div key={tab} onClick={() => onChangeHandler(index)} className={`${activeTab === index ? 'simba-tab-active' : ""}`}>
                    <label>{tab}</label>
                </div>
            })

        }
    </div>
}

export const TabContent = ({ children }) => {
    return <div className='simba-tab-content'>
        {children}
    </div>
}

