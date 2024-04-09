import { Contracts, Templates, PageBody } from ".."

export const NavContent = ({ activeTabName }) => {

    const getTabContent = (tabName) => {
        switch (tabName) {
            case "myContracts":
                return <>Contracts</>
            case "sharedContracts":
                return "Shared contract"
            case "templates":
                return <Templates />
            default: return 'My contract'
        }

    }

    return <PageBody>{getTabContent(activeTabName)}</PageBody>

}