import { useState } from "react"
import { EditIcon } from "../../assets/IconList"
import "./name-input.scss"
export const NameInput = ({ onChange = null, value = "Untitle contract" }) => {
    const [isEdit, setEdit] = useState(false)

    return <div className="name-input">
        {
            isEdit ?
                <input className="name-input-field" type="text" placeholder="" value={value} onChange={onChange} onBlur={() => setEdit(false)} />
                :
                <h5 className="name-input-text" onClick={() => setEdit(true)}>{value}</h5>
        }
        <div className="name-input-icon"><EditIcon onClick={() => setEdit(true)} /></div>
    </div >
}
