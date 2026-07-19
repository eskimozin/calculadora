import PropTypes from "prop-types";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import resources from "../../data/resources.js";
import {suggestionOptionsForKicks, suggestionsOptionsForReal, suggestionsOptionsForSubs} from "../../data/config.js";
import ValueInputField from "./ValueInputField.jsx";
import ClearFormButton from "./ClearFormButton.jsx";
import links from "../../data/links.js";

const ValueToTimeForm = ({values, onValueChange, clearValues}) => {
  return (
    <form className={"m-0 d-flex flex-column gap-3"} onSubmit={(e) => e.preventDefault()}>
      <ValueInputField
        description={`${resources.valDonation} pix aumenta ${resources.donationInTimeMinutes === 1 ? "um" : resources.donationInTimeMinutes} minuto no timer.`}
        titleNode={<span className={"d-block pb-2 fs-5 fw-semibold text-warning-emphasis"}>Valor que você deseja doar via PIX</span>}
        inputProps={{
          prefix: 'R$ ',
          decimalSeparator: ',',
          decimalScale: 2,
          fixedDecimalScale: true,
          name: "pix",
          id: "pix",
          value: values.pix,
          onChange: onValueChange,
          placeholder: "Ex: 50"
        }}
        suggestionOptions={[...suggestionsOptionsForReal]}
        onSuggestionSelect={(val) => onValueChange("pix", val)}
        contributeLink={links.pix}
      />
      
      <ValueInputField
        description={`${resources.valSubs} ${resources.valSubs > 1 ? "subs na Kick aumentam" : "sub na Kick aumenta"} ${resources.subsInTimeMinutes} minutos no timer.`}
        titleNode={<span className={"d-block pb-2 fs-5 fw-semibold"}>Contribuir com Subs</span>}
        inputProps={{
          name: "subs",
          id: "subs",
          value: values.subs,
          onChange: onValueChange,
          placeholder: "Ex: 10"
        }}
        suggestionOptions={[...suggestionsOptionsForSubs]}
        onSuggestionSelect={(val) => onValueChange("subs", val)}
        formatSuggestionText={(text) => `${text} subs`}
        contributeLink={links.subsKick}
      />
      
      {
        resources.valKicks !== -1 && (
          <ValueInputField
            description={`${resources.valKicks} ${resources.valKicks > 1 ? "kicks aumentam" : "kick (bit para a Kick) aumenta"} ${resources.kicksInTimeMinutes} minutos no timer.`}
            titleNode={
              <div className={"d-flex align-items-center gap-1 pb-2 fs-5 fw-semibold"}>
                Contribuir com Kicks
                <OverlayTrigger overlay={
                  <Tooltip>
                <span className={"text-sm lh-base d-block text-balance"}>
                  Um {'"Kick"'} funciona como uma moeda para a {resources["streamPlatformName"] ?? "plataforma"} e é semelhante à um bit para a Twitch.
                </span>
                  </Tooltip>}>
                  <div className={"d-flex rounded-circle bg-body-secondary border align-items-center justify-content-center"} style={{minHeight: 20, minWidth: 22}}>
                    <div className={"d-flex align-items-center justify-content-center"}>
                      <span className={"text-sm"}>?</span>
                    </div>
                  </div>
                </OverlayTrigger>
              </div>
            }
            inputProps={{
              name: "kicks",
              id: "kicks",
              value: values.kicks,
              onChange: onValueChange,
              placeholder: "Ex: 1000"
            }}
            suggestionOptions={[...suggestionOptionsForKicks]}
            onSuggestionSelect={(val) => onValueChange("kicks", val)}
            formatSuggestionText={(text) => `${parseInt(text).toLocaleString("pt-br")} kicks`}
            footerNode={<p className={"m-0 text-sm pt-1 text-danger-emphasis"}>É necessário no mínimo {resources.minCountKicks} {resources.minCountKicks > 1 ? "kicks" : "bit"} para ser contado no timer.</p>}
            contributeLink={links.kicksKick}
          />
        )
      }
      
      <ClearFormButton onClick={clearValues}/>
    </form>
  );
};

ValueToTimeForm.propTypes = {
  values: PropTypes.object.isRequired,
  onValueChange: PropTypes.func.isRequired,
  clearValues: PropTypes.func.isRequired
}

export default ValueToTimeForm;
