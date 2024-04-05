import { LeftArrowIcon, SearchIcon } from "../../assets/IconList"
import "./pages.scss"

export const PageHeader = () => {
    return <>
        <div className='search-input'>
            <input type='text' placeholder='Search' value="" onChange={null} />
            <span><SearchIcon /></span>
        </div>

        <div className='redirect-page'>
            <LeftArrowIcon />
            <label>Contracts</label>
        </div>

    </>
}
