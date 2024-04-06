import "./icon.scss"

export const Icon = ({ component, onClick = null, variant = "primary" }) => {
    return <div onClick={onClick} className={`simba-icon ${variant}`} >
        <span>{component}</span>
    </div >
}