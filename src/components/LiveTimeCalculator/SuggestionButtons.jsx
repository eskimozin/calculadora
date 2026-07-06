import PropTypes from "prop-types";

const SuggestionButtons = ({options, onSelect, formatText}) => {
  return (
    <div className="mt-1 d-flex flex-wrap justify-content-start align-items-center gap-1">
      {options.map((v, i) => (
        <button
          type={"button"}
          key={i}
          tabIndex={-1}
          className={"btn btn-sm btn-dark bg-body-tertiary text-body-secondary"}
          onClick={() => onSelect(v[1])}
        >
          {formatText ? formatText(v[0]) : v[0]}
        </button>
      ))}
    </div>
  );
};

SuggestionButtons.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  formatText: PropTypes.func,
};

export default SuggestionButtons;
