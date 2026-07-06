import {useMemo} from 'react';
import PropTypes from "prop-types";
import resources from "../../data/resources.js";

const ValueDisplay = ({totalSeconds}) => {
  const timeInMinutes = totalSeconds / 60;
  const values = useMemo(() => {
    return {
      pix: (timeInMinutes / (resources.donationInTimeMinutes / resources.valDonation)).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
      subs: Math.ceil(timeInMinutes / (resources.subsInTimeMinutes / resources.valSubs)) > 0 ? Math.ceil(timeInMinutes / (resources.subsInTimeMinutes / resources.valSubs)).toLocaleString('pt-br') : "nenhum",
      kicks: Math.ceil(timeInMinutes / (resources.kicksInTimeMinutes / resources.valKicks)) > 0 ? Math.ceil(timeInMinutes / (resources.kicksInTimeMinutes / resources.valKicks)).toLocaleString('pt-br') : "nenhum",
    };
  }, [timeInMinutes]);
  
  const subsInt = parseInt(values.subs.replace(/\./, ""));
  const kicksInt = parseInt(values.kicks.replace(/\./, ""));
  const realSnt = values.pix.replace("R$", "");
  
  return (
    <div className="result-section bg-body-secondary m-0">
      <span className={"text-balance d-block"} style={{lineHeight: "1.5"}}>Para que o eskimo fique esse tempo em live, você precisa doar:</span>
      <div className={"mt-2 fw-semibold text-white-50"}>
        <h3 className={"fs-3 m-0 text-balance"} style={{lineHeight: "1.25"}}>
          <span className={"text-warning-emphasis"}>{timeInMinutes > 0 ? realSnt : "zero"} reais</span>
          <span>{" "}ou{" "}</span>
          <span className={"text-warning-emphasis"} style={{textWrap: "nowrap"}}>{values.subs} {subsInt > 1 ? "subs" : "sub"}</span>
          <span>{" "}ou{" "}</span>
          <span className={"text-warning-emphasis"} style={{textWrap: "nowrap"}}>{values.kicks} {kicksInt > 1 ? "kicks" : "bit"}</span>
        </h3>
      </div>
      <div className={"mt-2"}>
        <details tabIndex={-1}>
          <summary className={"text-sm"}>
            Detalhes
          </summary>
          <p className={"m-0 text-sm text-body-secondary mt-1"} style={{lineHeight: "1.5"}}>
            <span>- {realSnt} reais = {(((parseFloat(realSnt.replace(/\./g, "").replace(",", ".")) || 0) / resources.valDonation) * resources.donationInTimeMinutes).toLocaleString("pt-br")} minutos. <br/></span>
            <span>- {values.subs} {subsInt > 1 ? "subs" : "sub"} = {(((subsInt || 0) / resources.valSubs) * resources.subsInTimeMinutes).toLocaleString("pt-br")} minutos. <br/></span>
            <span>- {values.kicks} {kicksInt > 1 ? "kicks" : "bit"} = {(((kicksInt || 0) / resources.valKicks) * resources.kicksInTimeMinutes).toLocaleString("pt-br")} minutos. <br/></span>
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
