import { LeftArrowIcon, SearchIcon } from "../../assets/IconList"
import "./pages.scss"

export const PageHeader = ({ value = "", onChangeHandler = null }) => {
    return <>
        <div className='search-input'>
            <div className='search-input-cont'>
                <input type='text' placeholder='Search' value="" onChange={onChangeHandler} />
                <span className="search-icon"><SearchIcon /></span>
            </div>
        </div>

        <div className='redirect-page'>
            <span className="left-icon"><LeftArrowIcon /></span>
            <label className="">Contracts</label>
        </div>

    </>
}
