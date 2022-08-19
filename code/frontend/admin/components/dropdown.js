import "bootstrap/dist/css/bootstrap.css";

export default function Dropdown ({ label, value, options }){


    return (
        <label>
          {label}
          <select value={value} >
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
    );

}