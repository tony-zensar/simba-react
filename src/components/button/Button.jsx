import { AddIcon } from '../../assets/IconList'
import { Icon } from '../icon/Icon'
import './button.scss'

export const Button = ({ variant = "primary", onClickHandler, label }) => {

    return <button type="button" onClick={onClickHandler} className={`btn-${variant}`}>{label}</button>
}

export const ButtonSmall = ({ label, onClick, icon }) => {
    return <button className='btn-small-light' onClick={onClick}>
        {label}
    </button>
}