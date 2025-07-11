import PropTypes from "prop-types";
import Input from "../Input/Input.jsx";

const TimeToValueForm = ({time, onTimeChange}) => {
  return (
    <div className="time-input-group m-0">
      <div className="form-group">
        <label>
          <span className={"d-block mb-1"}>Horas:</span>
          <Input
            // mask={"0000000"}
            mask={Number}
            scale={0}
            thousandsSeparator="."
            unmask={true}
            
            max={10000000}
            type="text"
            value={String(time.hours)}
            name="hours"
            onChange={onTimeChange}
            placeholder="H"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          <span className={"d-block mb-1"}>Minutos:</span>
          <Input
            // mask={"0000000"}
            mask={Number}
            scale={0}
            thousandsSeparator="."
            unmask={true}
            
            max={10000000}
            type="text"
            value={String(time.minutes)}
            name="minutes"
            onChange={onTimeChange}
            placeholder="M"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          <span className={"d-block mb-1"}>Segundos:</span>
          <Input
            // mask={"0000000"}
            mask={Number}
            scale={0}
            thousandsSeparator="."
            unmask={true}
            
            max={10000000}
            type="text"
            value={String(time.seconds)}
            name="seconds"
            onChange={onTimeChange}
            placeholder="S"
          />
        </label>
      </div>
    </div>
  );
};

TimeToValueForm.propTypes = {
  time: PropTypes.object.isRequired,
  onTimeChange: PropTypes.func.isRequired,
}

export default TimeToValueForm;