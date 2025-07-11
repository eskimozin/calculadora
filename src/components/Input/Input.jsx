import PropTypes from "prop-types";
import {IMaskInput} from 'react-imask';

const Input = ({
                 type, value, onChange, placeholder, min, max, mask, name,
                 scale,
                 thousandsSeparator,
                 radix,
                 normalizeZeros,
                 padFractionalZeros,
                 unmask,
               }) => {
  
  const handleAccept = (value) => {
    // A função 'onChange' receberá o valor não mascarado (número puro)
    if (onChange) onChange(name, value);
  };
  
  const props = {
    type, value, placeholder, min: min ? parseInt(min) : 0, max: max ? parseInt(max) : 0, mask,
    scale,
    thousandsSeparator,
    radix,
    normalizeZeros,
    padFractionalZeros,
    unmask,
    name,
  };
  
  const inputClasses = "form-control"
  
  return (
    <IMaskInput {...props} className={inputClasses} onAccept={handleAccept}/>
  )
}

Input.propTypes = {
  type: PropTypes.any,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mask: PropTypes.any,
  name: PropTypes.string,
  
  scale: PropTypes.number,
  thousandsSeparator: PropTypes.string,
  radix: PropTypes.string,
  normalizeZeros: PropTypes.bool,
  padFractionalZeros: PropTypes.bool,
  unmask: PropTypes.bool,
}

export default Input;