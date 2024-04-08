import "./radio.scss"

export const CustomRadio = ({ name, value, label, onChange = null }) => {
    return <div className='custom-radio'>
        <input type='radio' name={name} value={value} id={value} onChange={onChange} />
        <label for={value}>{label}</label>
    </div>
}