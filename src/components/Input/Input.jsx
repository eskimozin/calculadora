import PropTypes from "prop-types";
import {NumericFormat} from 'react-number-format';
import React from 'react';
import {Button, InputGroup, OverlayTrigger, Tooltip} from "react-bootstrap";

const InputComponent = (props, ref) => {
  const {onChange, name, maxLimit, className, ...other} = props;
  
  return (
    <InputGroup>
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values, sourceInfo) => {
          if (onChange && sourceInfo.event) {
            onChange(name, values.value);
          }
        }}
        isAllowed={(values) => {
          const {floatValue} = values;
          return floatValue < maxLimit;
        }}
        className={"form-control text-warning fs-5 fw-bold" + " " + className}
      />
      
      <Button tabIndex={-1} className="btn bg-transparent border btn-sm" onClick={() => {
        onChange(name, 0);
      }}>
        <OverlayTrigger overlay={
          <Tooltip>
            <span className={"text-sm"}>Limpar o campo</span>
          </Tooltip>
        }>
          <div className={"mb-1"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </div>
        </OverlayTrigger>
      </Button>
    </InputGroup>
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
  className: PropTypes.string,
  
  thousandSeparator: PropTypes.string,
  decimalSeparator: PropTypes.string,
  decimalScale: PropTypes.number,
  allowNegative: PropTypes.bool,
  maxLimit: PropTypes.number,
};

const Input = React.forwardRef(InputComponent);
Input.displayName = 'Input';

export default Input;
