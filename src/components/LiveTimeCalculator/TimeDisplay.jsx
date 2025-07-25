import {useMemo} from 'react';
import PropTypes from "prop-types";

const TimeDisplay = ({totalSeconds, values}) => {
  const formattedTime = useMemo(() => {
    if (isNaN(totalSeconds) || totalSeconds < 0) {
      return {d: 0, h: 0, m: 0, s: 0};
    }
    const d = Math.floor(totalSeconds / 3600 / 24).toLocaleString('pt-br');
    const h = Math.floor((totalSeconds / 3600) % 24).toLocaleString('pt-br');
    const m = Math.floor((totalSeconds % 3600) / 60).toLocaleString('pt-br');
    const s = Math.floor(totalSeconds % 60).toLocaleString('pt-br');
    return {d, h, m, s};
  }, [totalSeconds]);
  
  const toInt = (value) => parseInt(value.toString().replace(/\./, ""));
  const dInt = toInt(formattedTime.d);
  const hInt = toInt(formattedTime.h);
  const mInt = toInt(formattedTime.m);
  const sInt = toInt(formattedTime.s);
  
  return (
    <div className="result-section bg-body-secondary m-0">
      <span className={""}>Isso dá em tempo de live:</span>
      <h3 className={"mt-1 fs-3 fw-semibold text-warning-emphasis text-balance"}>
        {`
          ${dInt > 0 ? formattedTime.d + ` ${dInt > 1 ? "dias" : "dia"}` + `${(hInt > 0 || mInt > 0 || sInt > 0) ? ", " : ""}` : ""}
          ${hInt > 0 ? formattedTime.h + ` ${hInt > 1 ? "horas" : "hora"}` + `${(mInt > 0 && sInt > 0) ? "," : (mInt > 0) ? " e" : ""}` : ""}
          ${mInt > 0 ? formattedTime.m + ` ${mInt > 1 ? "minutos" : "minuto"}` + `${(sInt > 0) ? " e" : ""}` : ""}
          ${sInt > 0 ? formattedTime.s + ` ${sInt > 1 ? "segundos" : "segundo"}` : ""}
          ${(dInt <= 0 && hInt <= 0 && mInt <= 0 && sInt <= 0) ? "nada" : ""}
        `}
      </h3>
      <div className={"mt-2"}>
        <details tabIndex={-1}>
          <summary className={"text-sm"}>
            Detalhes
          </summary>
          <p className={"m-0 text-sm text-body-secondary mt-1 text-balance"} style={{lineHeight: "1.5"}}>
            Contribuições usadas no cálculo:{" "}
            {
              values &&
              Object.entries(values).map(([key, value], i) => (
                <span key={i} className={"text-capitalize"}>{key}: {(value || 0).toLocaleString("pt-br")} {i === Object.keys(values).length - 1 ? "" : " + "}</span>
              ))
            }
          </p>
        </details>
      </div>
    </div>
  );
};

TimeDisplay.propTypes = {
  totalSeconds: PropTypes.number.isRequired,
  values: PropTypes.object.isRequired,
}


export default TimeDisplay;
