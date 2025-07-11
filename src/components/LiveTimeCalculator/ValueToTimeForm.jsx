import PropTypes from "prop-types";
import Input from "../Input/Input.jsx";
import resources from "../../data/resources.js";

const ValueToTimeForm = ({values, onValueChange}) => {
  return (
    <div className={"m-0"}>
      <div className="form-group">
        <label>
          Valor em R$:
          <p className={"m-0 text-sm pb-2 text-secondary-emphasis"}>{resources.valDonation} real corresponde à {resources.donationInTimeMinutes} minuto de live.</p>
          <Input
            mask={Number}
            scale={2}
            thousandsSeparator="."
            radix=","
            normalizeZeros={true}
            padFractionalZeros={true}
            unmask={true}
            type="text"
            name="real"
            value={String(values.real)}
            onChange={onValueChange}
            placeholder="Ex: 50"
            min="0"
          />
        </label>
      </div>
      <div className="form-group">
        <label className={"m-0"}>
          Quantidade de Subs:
          <p className={"m-0 text-sm pb-2 text-secondary-emphasis"}>{resources.valSubs} sub corresponde à {resources.subsInTimeMinutes} minutos de live.</p>
          <Input
            mask={"0000000"}
            thousandsSeparator="."
            scale={0}
            type="text"
            value={values.subs}
            name="subs"
            onChange={onValueChange}
            placeholder="Ex: 10"
            min="0"
          />
        </label>
      </div>
      <div className="form-group">
        <label className={"m-0"}>
          <span>Quantidade de Bits:</span>
          <p className={"m-0 text-sm pb-2 text-secondary-emphasis"}>{resources.valBits} bits corresponde à {resources.bitsInTimeMinutes} minutos de live.</p>
          <Input
            mask={"0000000"}
            thousandsSeparator="."
            scale={0}
            type="text"
            value={values.bits}
            name="bits"
            onChange={onValueChange}
            placeholder="Ex: 1000"
            min="0"
          />
        </label>
        <p className={"m-0 text-sm pt-1 text-danger-emphasis"}>É necessário no mínimo {resources.minCountBits} {resources.minCountBits > 1 ? "bits" : "bit"} para ser contado no timer.</p>
      </div>
    </div>
  );
};

ValueToTimeForm.propTypes = {
  values: PropTypes.object.isRequired,
  onValueChange: PropTypes.func.isRequired,
}

export default ValueToTimeForm;