import './styles.css';

import { useState, useMemo, useEffect } from 'react';

import ModeSelector from './ModeSelector';
import ValueToTimeForm from './ValueToTimeForm';
import TimeToValueForm from './TimeToValueForm';
import TimeDisplay from './TimeDisplay';
import ValueDisplay from './ValueDisplay';
import AnimatedComponents from "../AnimatedComponent/AnimatedComponents.jsx";

const LiveTimeCalculator = () => {
  const [calculationMode, setCalculationMode] = useState('toTime'); // 'toTime' or 'toValue'

  const [values, setValues] = useState({ real: '10', subs: '', bits: '' });
  const [time, setTime] = useState({ hours: '1', minutes: '', seconds: '' });

  const focusElement = (id) => {
    setTimeout(() => {
      document.getElementById(id).focus();
    }, 100);
  }

  useEffect(() => {
    if (calculationMode === 'toTime') focusElement("real");
    else if (calculationMode === 'toValue') focusElement("hours");
  }, [calculationMode])

  const handleValueChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const clearValues = () => {
    setValues({ real: '10', subs: '', bits: '' });
  }

  const handleTimeChange = (name, value) => {
    setTime(prev => ({ ...prev, [name]: value }));
  };

  const clearTimes = () => {
    setTime({ hours: '1', minutes: '', seconds: '' });
  }

  const totalSeconds = useMemo(() => {
    if (calculationMode === 'toTime') {
      const realMinutes = parseFloat(values.real) || 0;
      const subMinutes = (parseInt(values.subs) || 0) * 7;
      const bitMinutes = ((parseInt(values.bits) ? parseInt(values.bits) >= 10 ? parseInt(values.bits) : 0 : 0) / 100) * 5;
      return (realMinutes + subMinutes + bitMinutes) * 60;
    } else {
      const h = parseInt(time.hours) || 0;
      const m = parseInt(time.minutes) || 0;
      const s = parseInt(time.seconds) || 0;
      return h * 3600 + m * 60 + s;
    }
  }, [calculationMode, values, time]);

  return (
    <AnimatedComponents>
      <div className="calculator-container text-white card bg-dark d-flex flex-column gap-5">
        <div className={"d-flex flex-column gap-3"}>
          <p className={"fw-semibold mb-3 text-center text-balance fs-3"} style={{ lineHeight: "1.25" }}>
            <span className={"text-balance"}>{calculationMode === "toTime" && "Descubra o tempo que ele ficará em live a partir de uma forma de contribuição"}</span>
            <span className={"text-balance"}>{calculationMode === "toValue" && "Descubra quanto é necessário para ele ficar X tempo ao vivo - em dinheiros, subs e bits"}</span>
          </p>
          <ModeSelector mode={calculationMode} onModeChange={setCalculationMode} />
        </div>

        {calculationMode === 'toTime' ? (
          <AnimatedComponents>
            <div className="d-flex flex-column gap-3">
              <ValueToTimeForm values={values} onValueChange={handleValueChange} clearValues={clearValues} />
              <TimeDisplay totalSeconds={totalSeconds} values={values} />
            </div>
          </AnimatedComponents>
        ) : (
          <AnimatedComponents>
            <div className="d-flex flex-column gap-3">
              <TimeToValueForm time={time} onTimeChange={handleTimeChange} clearTimes={clearTimes} />
              <ValueDisplay totalSeconds={totalSeconds} />
            </div>
          </AnimatedComponents>
        )}
      </div>
    </AnimatedComponents>
  );
};

export default LiveTimeCalculator;