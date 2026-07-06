import PropTypes from "prop-types";
import TimeInputField from "./TimeInputField.jsx";
import ClearFormButton from "./ClearFormButton.jsx";

const TimeToValueForm = ({time, onTimeChange, clearTimes}) => {
  return (
    <form className="time-input-group m-0" onSubmit={(e) => e.preventDefault()}>
      <TimeInputField
        label="Horas"
        value={time.hours}
        name="hours"
        onChange={onTimeChange}
        placeholder="H"
      />
      <TimeInputField
        label="Minutos"
        value={time.minutes}
        name="minutes"
        onChange={onTimeChange}
        onBlur={onTimeChange}
        placeholder="M"
      />
      <TimeInputField
        label="Segundos"
        value={time.seconds}
        name="seconds"
        onChange={onTimeChange}
        onBlur={onTimeChange}
        placeholder="S"
      />
      <ClearFormButton onClick={clearTimes}/>
    </form>
  );
};

TimeToValueForm.propTypes = {
  time: PropTypes.object.isRequired,
  onTimeChange: PropTypes.func.isRequired,
  clearTimes: PropTypes.func.isRequired
}

export default TimeToValueForm;
