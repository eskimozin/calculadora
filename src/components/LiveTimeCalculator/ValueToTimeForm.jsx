import PropTypes from "prop-types";
import Input from "../Input/Input.jsx";
import resources from "../../data/resources.js";
import {suggestionOptionsForKicks, suggestionsOptionsForReal, suggestionsOptionsForSubs} from "../../data/config.js";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const ValueToTimeForm = ({values, onValueChange, clearValues}) => {
  return (<form className={"m-0 d-flex flex-column gap-3"} onSubmit={() => {
  }}>
    <div className="form-group">
      <label>
        <p className={"m-0 text-sm pb-0 text-secondary-emphasis"}>{resources.valDonation} pix aumenta {resources.donationInTimeMinutes === 1 ? "um" : resources.donationInTimeMinutes} minuto no timer.</p>
        <span className={"d-block pb-2 fs-5 fw-semibold text-warning-emphasis"}>Valor que você deseja doar via PIX</span>
        <Input
          prefix={'R$ '}
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale={true}
          allowNegative={false}
          maxLimit={10000000}
          
          type="text"
          name="pix"
          id="pix"
          value={values.pix}
          onChange={onValueChange}
          placeholder="Ex: 50"
          inputMode={"numeric"}
        />
      </label>
      
      <div className="mt-1 d-flex flex-wrap justify-content-start align-items-center gap-1">
        {[...suggestionsOptionsForReal].map((v, i) => {
          return (<button type={"button"} key={i} tabIndex={-1} className={"btn btn-sm btn-dark bg-body-tertiary text-body-secondary"} onClick={() => {
            onValueChange("pix", v[1])
          }}>{v[0]}</button>)
        })}
      </div>
    </div>
    
    <div className="form-group">
      <label className={"m-0"}>
        <p className={"m-0 text-sm pb-0 text-secondary-emphasis"}>{resources.valSubs} {resources.valSubs > 1 ? "subs na Kick aumentam" : "sub na Kick aumenta"} {resources.subsInTimeMinutes} minutos no timer.</p>
        <span className={"d-block pb-2 fs-5 fw-semibold"}>Contribuir com Subs</span>
        <Input
          thousandSeparator="."
          decimalScale={0}
          allowNegative={false}
          decimalSeparator="-"
          maxLimit={10000000}
          
          type="text"
          value={values.subs}
          name="subs"
          id="subs"
          onChange={onValueChange}
          placeholder="Ex: 10"
          inputMode={"numeric"}
        />
      </label>
      
      <div className="mt-1 d-flex flex-wrap justify-content-start align-items-center gap-1">
        {[...suggestionsOptionsForSubs].map((v, i) => {
          return (<button type={"button"} key={i} tabIndex={-1} className={"btn btn-sm btn-dark bg-body-tertiary text-body-secondary"} onClick={() => {
            onValueChange("subs", v[1])
          }}>{v[0]} subs</button>)
        })}
      </div>
    </div>
    
    <div className="form-group">
      <label className={"m-0"}>
        <p className={"m-0 text-sm pb-0 text-secondary-emphasis"}>{resources.valKicks} {resources.valKicks > 1 ? "kicks aumentam" : "kick (bit para a Kick) aumenta"} {resources.kicksInTimeMinutes} minutos no timer.</p>
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
        <Input
          thousandSeparator="."
          decimalScale={0}
          allowNegative={false}
          decimalSeparator="-"
          maxLimit={10000000}
          
          type="text"
          value={values.kicks}
          name="kicks"
          id="kicks"
          onChange={onValueChange}
          placeholder="Ex: 1000"
          inputMode={"numeric"}
        />
      </label>
      
      <p className={"m-0 text-sm pt-1 text-danger-emphasis"}>É necessário no mínimo {resources.minCountKicks} {resources.minCountKicks > 1 ? "kicks" : "bit"} para ser contado no timer.</p>
      
      <div className="mt-1 d-flex flex-wrap justify-content-start align-items-center gap-1">
        {[...suggestionOptionsForKicks].map((v, i) => {
          return (<button type={"button"} key={i} tabIndex={-1} className={"btn btn-sm btn-dark bg-body-tertiary text-body-secondary"} onClick={() => {
            onValueChange("kicks", v[1])
          }}>{parseInt(v[0]).toLocaleString("pt-br")} kicks</button>)
        })}
      </div>
    </div>
    
    <div>
      <button type={"reset"} tabIndex={-1} className={"btn btn-secondary rounded-1 d-flex align-items-center justify-content-center gap-1"} onClick={clearValues}>
        <span className={"text-sm"}>Limpar</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
        </svg>
      </button>
    </div>
  </form>);
};

ValueToTimeForm.propTypes = {
  values: PropTypes.object.isRequired, onValueChange: PropTypes.func.isRequired, clearValues: PropTypes.func.isRequired
}

export default ValueToTimeForm;
