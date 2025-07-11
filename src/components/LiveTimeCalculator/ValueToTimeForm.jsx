import PropTypes from "prop-types";
import Input from "../Input/Input.jsx";
import resources from "../../data/resources.js";

const ValueToTimeForm = ({values, onValueChange, clearValues}) => {
  return (<form className={"m-0"} onSubmit={() => {
  }}>
    <div className="form-group">
      <label>
        Valor em R$:
        <p className={"m-0 text-sm pb-2 text-secondary-emphasis"}>{resources.valDonation} real corresponde à {resources.donationInTimeMinutes} minuto de live.</p>
        <Input
          prefix={'R$ '}
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale={true}
          allowNegative={false}
          maxLimit={10000000}
          
          type="text"
          name="real"
          id="real"
          value={values.real}
          onChange={onValueChange}
          placeholder="Ex: 50"
          inputMode={"numeric"}
        />
      </label>
    </div>
    
    <div className="form-group">
      <label className={"m-0"}>
        Quantidade de Subs:
        <p className={"m-0 text-sm pb-2 text-secondary-emphasis"}>{resources.valSubs} sub corresponde à {resources.subsInTimeMinutes} minutos de live.</p>
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
    </div>
    
    <div className="form-group">
      <label className={"m-0"}>
        <span>Quantidade de Bits:</span>
        <p className={"m-0 text-sm pb-2 text-secondary-emphasis"}>{resources.valBits} bits corresponde à {resources.bitsInTimeMinutes} minutos de live.</p>
        <Input
          thousandSeparator="."
          decimalScale={0}
          allowNegative={false}
          decimalSeparator="-"
          maxLimit={10000000}
          
          type="text"
          value={values.bits}
          name="bits"
          id="bits"
          onChange={onValueChange}
          placeholder="Ex: 1000"
          inputMode={"numeric"}
        />
      </label>
      <p className={"m-0 text-sm pt-1 text-danger-emphasis"}>É necessário no mínimo {resources.minCountBits} {resources.minCountBits > 1 ? "bits" : "bit"} para ser contado no timer.</p>
    </div>
    
    <button type={"reset"} className={"btn btn-secondary rounded-1 d-flex align-items-center justify-content-center gap-1"} onClick={clearValues}>
      <span className={"text-sm"}>Limpar</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
      </svg>
    </button>
  </form>);
};

ValueToTimeForm.propTypes = {
  values: PropTypes.object.isRequired, onValueChange: PropTypes.func.isRequired, clearValues: PropTypes.func.isRequired
}

export default ValueToTimeForm;