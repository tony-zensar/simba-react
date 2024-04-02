import { Contracts, Templates } from ".."

export const ContractTabContents = ({ activeTabName }) => {


    const getTabContent = (tabName) => {



        switch (tabName) {
            case "myContracts":
                return <Contracts />
            case "sharedContracts":
                return "Shared contract"

            case "templates":
                return <Templates />
            // case "favTemplates":
            //     return "Fav templates"
            // case "newTemplate":
            //     return " New templates"
            default: return 'My contract'


        }

    }

    return <div className="contract-tabs__content">{getTabContent(activeTabName)}</div>


}