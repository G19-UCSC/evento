import "bootstrap/dist/css/bootstrap.css";
import { FaEllipsisH } from "react-icons/fa";

export default function Dropdown ({ value, options }){


    return (
        <label>
          {/* {label} */}
          <FaEllipsisH />
          <select value={value} >
          <FaEllipsisH />
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
    );

}