import PropTypes from "prop-types";
import Input from "../Input/Input.jsx";

const TimeToValueForm = ({time, onTimeChange, clearTimes}) => {
  return (<form className="time-input-group m-0" onSubmit={() => {
  }}>
    <div className="form-group">
      <label>
        <span className={"d-block mb-1"}>Horas:</span>
        <Input
          thousandSeparator="."
          decimalScale={0}
          allowNegative={false}
          decimalSeparator="-"
          maxLimit={10000000}
          
          type="text"
          value={time.hours}
          name="hours"
          id="hours"
          onChange={onTimeChange}
          placeholder="H"
          
          inputMode={"numeric"}
        />
      </label>
    </div>
    
    <div className="form-group">
      <label>
        <span className={"d-block mb-1"}>Minutos:</span>
        <Input
          thousandSeparator="."
          decimalScale={0}
          allowNegative={false}
          decimalSeparator="-"
          maxLimit={10000000}
          
          type="text"
          value={time.minutes}
          name="minutes"
          id="minutes"
          onChange={onTimeChange}
          onBlur={onTimeChange}
          placeholder="M"
          
          inputMode={"numeric"}
        />
      </label>
    </div>
    
    <div className="form-group">
      <label>
        <span className={"d-block mb-1"}>Segundos:</span>
        <Input
          thousandSeparator="."
          decimalScale={0}
          allowNegative={false}
          decimalSeparator="-"
          maxLimit={10000000}
          
          type="text"
          value={time.seconds}
          name="seconds"
          id="seconds"
          onChange={onTimeChange}
          onBlur={onTimeChange}
          placeholder="S"
          
          inputMode={"numeric"}
        />
      </label>
    </div>
    
    <div>
      <button type={"reset"} tabIndex={-1} className={"btn btn-secondary rounded-1 d-flex align-items-center justify-content-center gap-1"} onClick={clearTimes}>
        <span className={"text-sm"}>Limpar</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
        </svg>
      </button>
    </div>
  </form>);
};

TimeToValueForm.propTypes = {
  time: PropTypes.object.isRequired, onTimeChange: PropTypes.func.isRequired, clearTimes: PropTypes.func.isRequired
}

export default TimeToValueForm;