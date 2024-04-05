import "./radio.scss"

export const CustomRadio = ({ name, value, label }) => {
    return <div className='custom-radio'>
        <input type='radio' name={name} value={value} id={value} />
        <label for={value}>{label}</label>
    </div>
}