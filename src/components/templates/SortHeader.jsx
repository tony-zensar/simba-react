import { Grid, Table } from "../../assets/IconList"

export const SortHeader = ({ viewChangeHandler = null, sortHandler = null }) => {
    return <div className='template-view-setting'>
        <div className='template-view-style'>
            <Grid />
            <Table />
        </div>
        <div>
            <select onChange={sortHandler}>
                <option>Last modified</option>
                <option>Created On</option>
            </select>
        </div>
    </div>
}