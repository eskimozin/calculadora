import PropTypes from "prop-types";
import Input from "../Input/Input.jsx";
import SuggestionButtons from "./SuggestionButtons.jsx";

const ValueInputField = ({
                           description,
                           titleNode,
                           inputProps,
                           suggestionOptions,
                           onSuggestionSelect,
                           formatSuggestionText,
                           footerNode,
                           contributeLink
                         }) => {
  return (
    <div className="form-group">
      <label className={"m-0"}>
        <p className={"m-0 text-sm pb-0 text-secondary-emphasis"}>{description}</p>
        {titleNode}
        <Input
          thousandSeparator="."
          decimalScale={0}
          allowNegative={false}
          decimalSeparator="-"
          maxLimit={10000000}
          type="text"
          inputMode={"numeric"}
          contributeLink={contributeLink}
          {...inputProps}
        />
      </label>
      
      {footerNode}
      
      {suggestionOptions && (
        <SuggestionButtons
          options={suggestionOptions}
          onSelect={onSuggestionSelect}
          formatText={formatSuggestionText}
        />
      )}
    </div>
  );
};

ValueInputField.propTypes = {
  description: PropTypes.node.isRequired,
  titleNode: PropTypes.node.isRequired,
  inputProps: PropTypes.object.isRequired,
  suggestionOptions: PropTypes.array,
  onSuggestionSelect: PropTypes.func,
  formatSuggestionText: PropTypes.func,
  footerNode: PropTypes.node,
  contributeLink: PropTypes.string,
};

export default ValueInputField;
