import { useMemo } from 'react';
import PropTypes from "prop-types";
import resources from "../../data/resources.js";

const ValueDisplay = ({ totalSeconds }) => {
  const timeInMinutes = totalSeconds / 60;
  const values = useMemo(() => {
    return {
      real: timeInMinutes.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      subs: Math.ceil(timeInMinutes / 7) > 0 ? Math.ceil(timeInMinutes / 7).toLocaleString('pt-br') : "nenhum",
      bits: Math.ceil((timeInMinutes / 5) * 100) ? Math.ceil((timeInMinutes / 5) * 100).toLocaleString('pt-br') : "nenhum",
    };
  }, [timeInMinutes]);

  const subsInt = parseInt(values.subs.replace(/\./, ""));
  const bitsInt = parseInt(values.bits.replace(/\./, ""));
  const realSnt = values.real.replace("R$", "");

  return (
    <div className="result-section bg-body-secondary m-0">
      <span className={"text-balance d-block"} style={{ lineHeight: "1.5" }}>Para que o eskimo fique esse tempo em live, você precisa doar:</span>
      <div className={"mt-2 fw-semibold text-white-50"}>
        <h3 className={"fs-3 m-0 text-balance"} style={{ lineHeight: "1.25" }}>
          <span className={"text-warning-emphasis"}>{timeInMinutes > 0 ? realSnt : "zero"} reais</span>
          <span>{" "}ou{" "}</span>
          <span className={"text-warning-emphasis"} style={{ textWrap: "nowrap" }}>{values.subs} {subsInt > 1 ? "subs" : "sub"}</span>
          <span>{" "}ou{" "}</span>
          <span className={"text-warning-emphasis"} style={{ textWrap: "nowrap" }}>{values.bits} {bitsInt > 1 ? "bits" : "bit"}</span>
        </h3>
      </div>
      <div className={"mt-2"}>
        <details>
          <summary className={"text-sm"}>
            Detalhes
          </summary>
          <p className={"m-0 text-sm text-body-secondary mt-1"} style={{ lineHeight: "1.5" }}>
            <span className={"d-none"}>- {realSnt} reais = {((timeInMinutes || 0) * resources.donationInTimeMinutes).toLocaleString("pt-br")} minutos. <br /></span>
            - {values.subs} {subsInt > 1 ? "subs" : "sub"} = {((subsInt || 0) * resources.subsInTimeMinutes).toLocaleString("pt-br")} minutos. <br />
            <span className={"d-none"}>- {values.bits} {bitsInt > 1 ? "bits" : "bit"} = {((bitsInt || 0) * resources.bitsInTimeMinutes).toLocaleString("pt-br")} minutos. <br /></span>
          </p>
        </details>
      </div>
    </div>
  );
};

ValueDisplay.propTypes = {
  totalSeconds: PropTypes.number.isRequired,
}

export default ValueDisplay;