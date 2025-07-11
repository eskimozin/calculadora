import {useMemo} from 'react';
import PropTypes from "prop-types";

const TimeDisplay = ({totalSeconds}) => {
  const formattedTime = useMemo(() => {
    if (isNaN(totalSeconds) || totalSeconds < 0) {
      return {h: 0, m: 0, s: 0};
    }
    const h = Math.floor(totalSeconds / 3600).toLocaleString('pt-br');
    const m = Math.floor((totalSeconds % 3600) / 60).toLocaleString('pt-br');
    const s = Math.floor(totalSeconds % 60).toLocaleString('pt-br');
    return {h, m, s};
  }, [totalSeconds]);
  
  const toInt = (value) => parseInt(value.replace(/\./, ""));
  const hInt = toInt(formattedTime.h);
  const mInt = toInt(formattedTime.m);
  const sInt = toInt(formattedTime.s);
  
  return (
    <div className="result-section bg-body-secondary m-0">
      <span className={""}>Isso dá em tempo de live:</span>
      <h3 className={"mt-1 fs-3 fw-semibold text-success-emphasis"}>
        {`
          ${hInt > 0 ? formattedTime.h + ` ${hInt > 1 ? "horas" : "hora"}` + `${(mInt > 0 || sInt > 0) && ","}` : ""}
          ${mInt > 0 ? formattedTime.m + ` ${mInt > 1 ? "minutos" : "minuto"}` + `${(sInt > 0) ? " e" : ""}` : ""}
          ${sInt > 0 ? formattedTime.s + ` ${sInt > 1 ? "segundos" : "segundo"}` : ""}
          ${(hInt <= 0 && mInt <= 0 && sInt <= 0) ? "nada" : ""}
        `}
      </h3>
    </div>
  );
};

TimeDisplay.propTypes = {
  totalSeconds: PropTypes.number.isRequired,
}


export default TimeDisplay;