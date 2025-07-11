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
  
  return (
    <div className="result-section bg-body-secondary m-0">
      <span className={""}>Isso dá em tempo de live:</span>
      <h3 className={"mt-1 fs-3 fw-semibold text-success-emphasis"}>{`${formattedTime.h} horas, ${formattedTime.m} minutos e ${formattedTime.s} segundos`}</h3>
    </div>
  );
};

TimeDisplay.propTypes = {
  totalSeconds: PropTypes.number.isRequired,
}


export default TimeDisplay;