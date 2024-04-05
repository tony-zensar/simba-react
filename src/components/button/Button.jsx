import './button.scss'

export const Button = ({ variant = "primary", onClickHandler, label }) => {
    return <button type="button" onClick={onClickHandler} className={`btn-${variant}`}>{label}</button>
}