import './index.css';

import {useContext} from 'react';

import ModeSelector from './ModeSelector';
import ValueToTimeForm from './ValueToTimeForm';
import TimeToValueForm from './TimeToValueForm';
import TimeDisplay from './TimeDisplay';
import ValueDisplay from './ValueDisplay';
import AnimatedComponents from "../AnimatedComponent/AnimatedComponents.jsx";

import {useLiveTimeCalculator} from './useLiveTimeCalculator.js';
import {ThemeContext} from '../AppContext/AppContext.jsx';

const LiveTimeCalculator = () => {
  const {
    calculationMode,
    setCalculationMode,
    values,
    handleValueChange,
    clearValues,
    time,
    handleTimeChange,
    clearTimes,
    totalSeconds
  } = useLiveTimeCalculator();
  
  const {resultDisplay} = useContext(ThemeContext);

  return (
    <AnimatedComponents>
      <div className="calculator-container text-white card bg-dark d-flex flex-column gap-5">
        <div className={"d-flex flex-column gap-3"}>
          <p className={"fw-semibold mb-3 text-center text-balance fs-3"} style={{lineHeight: "1.25"}}>
            <span className={"text-balance"}>{calculationMode === "toTime" && "Descubra o tempo que ele ficará em live a partir de uma forma de contribuição"}</span>
            <span className={"text-balance"}>{calculationMode === "toValue" && "Descubra quanto é necessário para ele ficar X tempo ao vivo - em dinheiros, subs e kicks"}</span>
          </p>
          <ModeSelector mode={calculationMode} onModeChange={setCalculationMode}/>
        </div>
        
        {calculationMode === 'toTime' ? (
          <AnimatedComponents>
            <div className="d-flex flex-column gap-3">
              <ValueToTimeForm values={values} onValueChange={handleValueChange} clearValues={clearValues}/>
              <div id={"result-display"} ref={resultDisplay}>
                <TimeDisplay totalSeconds={totalSeconds} values={values}/>
              </div>
            </div>
          </AnimatedComponents>
        ) : (
          <AnimatedComponents>
            <div className="d-flex flex-column gap-3">
              <TimeToValueForm time={time} onTimeChange={handleTimeChange} clearTimes={clearTimes}/>
              <div id={"result-display"} ref={resultDisplay}>
                <ValueDisplay totalSeconds={totalSeconds}/>
              </div>
            </div>
          </AnimatedComponents>
        )}
      </div>
    </AnimatedComponents>
  );
};

export default LiveTimeCalculator;
