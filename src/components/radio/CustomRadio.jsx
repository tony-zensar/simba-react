import "./radio.scss"

export const CustomRadio = ({ name, value, label, onChange = null, checked }) => {
    return <div className='custom-radio'>
        <input type='radio' name={name} value={value} id={value} onChange={onChange} checked={checked} />
        <label for={value}>{label}</label>
    </div>
}