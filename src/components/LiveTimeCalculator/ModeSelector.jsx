import PropTypes from "prop-types";

const ModeSelector = ({mode, onModeChange}) => {
  return (
    <div className="mode-selector">
      <input
        type="radio"
        value="toTime"
        id="btn-to-time"
        checked={mode === 'toTime'}
        className={"btn-check"}
        autoComplete={"off"}
        onChange={() => onModeChange('toTime')}
      />
      <label className={"btn btn-success rounded-1 px-2.5 py-1.5"} htmlFor="btn-to-time">
        <div className={"d-flex align-items-center gap-1 flex-wrap justify-content-between"}>
          {mode === "toTime" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1" viewBox="0 0 16 16">
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
            </svg>
          )}
          <span>Valor</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
          <span>Tempo</span>
        </div>
      </label>
      <span className={"text-body-secondary"}>ou</span>
      <input
        type="radio"
        value="toValue"
        className={"btn-check"}
        autoComplete={"off"}
        id="btn-to-value"
        checked={mode === 'toValue'}
        onChange={() => onModeChange('toValue')}
      />
      <label className={"btn btn-success rounded-1 px-2.5 py-1.5"} htmlFor="btn-to-value">
        <div className={"d-flex align-items-center gap-1 flex-wrap justify-content-between"}>
          {mode === "toValue" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1" viewBox="0 0 16 16">
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
            </svg>
          )}
          <span>Tempo</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
          <span>Valor</span>
        </div>
      </label>
    </div>
  );
};

ModeSelector.propTypes = {
  mode: PropTypes.oneOf(['toValue', 'toTime']),
  onModeChange: PropTypes.func.isRequired,
}

export default ModeSelector;