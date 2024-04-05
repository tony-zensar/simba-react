import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
export const SortHeader = ({ viewChangeHandler = null, sortHandler = null }) => {
    return <div className='template-view-setting'>
        <div className='template-view-style'>
            <GridViewRoundedIcon /><MenuRoundedIcon />
        </div>
        <div>
            <select onChange={sortHandler}>
                <option>Last modified</option>
                <option>Created On</option>
            </select>
        </div>
    </div>
}