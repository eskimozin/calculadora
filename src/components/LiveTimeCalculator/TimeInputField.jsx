import PropTypes from "prop-types";
import Input from "../Input/Input.jsx";

const TimeInputField = ({label, value, name, onChange, onBlur, placeholder}) => {
  return (
    <div className="form-group">
      <label>
        <span className={"d-block mb-1"}>{label}:</span>
        <Input
          thousandSeparator="."
          decimalScale={0}
          allowNegative={false}
          decimalSeparator="-"
          maxLimit={10000000}
          type="text"
          value={value}
          name={name}
          id={name}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          inputMode={"numeric"}
        />
      </label>
    </div>
  );
};

TimeInputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
};

export default TimeInputField;
