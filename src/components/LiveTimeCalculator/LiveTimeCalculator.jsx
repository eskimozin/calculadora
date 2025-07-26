import './styles.css';

import {useState, useMemo, useEffect} from 'react';

import ModeSelector from './ModeSelector';
import ValueToTimeForm from './ValueToTimeForm';
import TimeToValueForm from './TimeToValueForm';
import TimeDisplay from './TimeDisplay';
import ValueDisplay from './ValueDisplay';
import AnimatedComponents from "../AnimatedComponent/AnimatedComponents.jsx";
import {Link} from "react-router-dom";
import links from "../../data/links.js";
import moment from "moment";

const LiveTimeCalculator = () => {
  const [calculationMode, setCalculationMode] = useState('toTime'); // 'toTime' or 'toValue'
  
  const [values, setValues] = useState({real: '10', subs: '', bits: ''});
  const [time, setTime] = useState({hours: '1', minutes: '', seconds: ''});
  
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
    setValues(prev => ({...prev, [name]: value}));
  };
  
  const clearValues = () => {
    setValues({real: '0', subs: '', bits: ''});
  }
  
  const handleTimeChange = (name, value) => {
    setTime(prev => ({...prev, [name]: value}));
  };
  
  const clearTimes = () => {
    setTime({hours: '0', minutes: '', seconds: ''});
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
  
  const moddayInit = "2025-07-26T00:00:00-03:00";
  const moddayFinish = "2025-07-27T00:00:00-03:00";
  
  const isModday = moment().diff(moment(moddayInit), "m") >= 0 && moment().diff(moment(moddayFinish), "m") < 0;
  
  return (
    <AnimatedComponents>
      <div className="">
        <div className={"bg-warning py-1 px-3 text-black"} style={{borderRadius: "7.5px 7.5px 0 0", border: ""}}></div>
        <div className={"calculator-container px-3 py-3 d-flex flex-column text-white card bg-dark d-flex flex-column gap-5 p-0"} style={{borderRadius: "0 0 5px 5px"}}>
          {
            isModday ? (
              <div className="scrolling-container">
                <div className="scrolling-text">
                  <p className={"m-0 text-white"}>Hoje é modday! Por favor doe para que os mods não tenham que morar na rua. Cada 1 real doado volta para você, pois eles garantem uma comunidade saudável, eventos maravilhosos e sempre gente boa no chat!</p>
                </div>
              </div>
            ) : (
              <div></div>
            )
          }
          <div className={"d-flex flex-column gap-3"}>
            <p className={"fw-semibold mb-3 text-center text-balance fs-3"} style={{lineHeight: "1.25"}}>
              <span className={"text-balance"}>{calculationMode === "toTime" && "Descubra o tempo que ele ficará em live a partir de uma forma de contribuição"}</span>
              <span className={"text-balance"}>{calculationMode === "toValue" && "Descubra quanto é necessário para ele ficar X tempo ao vivo - em dinheiros, subs e bits"}</span>
            </p>
            <ModeSelector mode={calculationMode} onModeChange={setCalculationMode}/>
          </div>
          
          {calculationMode === 'toTime' ? (
            <AnimatedComponents>
              <div className="d-flex flex-column gap-3 mt-2">
                <ValueToTimeForm values={values} onValueChange={handleValueChange} clearValues={clearValues}/>
                <TimeDisplay totalSeconds={totalSeconds} values={values}/>
              </div>
            </AnimatedComponents>
          ) : (
            <AnimatedComponents>
              <div className="d-flex flex-column gap-3 mt-2">
                <TimeToValueForm time={time} onTimeChange={handleTimeChange} clearTimes={clearTimes}/>
                <ValueDisplay totalSeconds={totalSeconds}/>
              </div>
            </AnimatedComponents>
          )}
        </div>
      </div>
    </AnimatedComponents>
  );
};

export default LiveTimeCalculator;