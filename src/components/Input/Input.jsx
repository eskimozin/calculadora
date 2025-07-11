import PropTypes from "prop-types";
import {NumericFormat} from 'react-number-format';
import React from 'react';

const InputComponent = (props, ref) => {
  const {onChange, name, maxLimit, ...other} = props;
  
  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values, sourceInfo) => {
        if (onChange && sourceInfo.event) {
          onChange(name, values.value);
        }
      }}
      isAllowed={(values) => {
        const { floatValue } = values;
        return floatValue < maxLimit;
      }}
      className="form-control"
    />
  );
};

InputComponent.propTypes = {
  type: PropTypes.any,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputMode: PropTypes.string,
  
  thousandSeparator: PropTypes.string,
  decimalSeparator: PropTypes.string,
  decimalScale: PropTypes.number,
  allowNegative: PropTypes.bool,
  maxLimit: PropTypes.number,
};

const Input = React.forwardRef(InputComponent);
Input.displayName = 'Input';

export default Input;