import {useEffect, useMemo, useState} from 'react';
import resources from '../../data/resources.js';

export const useLiveTimeCalculator = () => {
  const [calculationMode, setCalculationMode] = useState('toTime'); // 'toTime' or 'toValue'
  
  const [values, setValues] = useState({pix: '10', subs: '', kicks: ''});
  const [time, setTime] = useState({hours: '1', minutes: '', seconds: ''});
  
  const focusElement = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.focus();
      else console.warn(`Unable to find element with id ${id}`);
    }, 100);
  };
  
  useEffect(() => {
    if (calculationMode === 'toTime') focusElement("pix");
    else if (calculationMode === 'toValue') focusElement("hours");
  }, [calculationMode]);
  
  const handleValueChange = (name, value) => {
    setValues(prev => ({...prev, [name]: value}));
  };
  
  const clearValues = () => {
    setValues({pix: '0', subs: '', kicks: ''});
  };
  
  const handleTimeChange = (name, value) => {
    setTime(prev => ({...prev, [name]: value}));
  };
  
  const clearTimes = () => {
    setTime({hours: '0', minutes: '', seconds: ''});
  };
  
  const totalSeconds = useMemo(() => {
    if (calculationMode === 'toTime') {
      const realMinutes = (parseFloat(values.pix) || 0) * (resources.donationInTimeMinutes / resources.valDonation);
      const subMinutes = (parseInt(values.subs) || 0) * (resources.subsInTimeMinutes / resources.valSubs);
      const bitMinutes = ((parseInt(values.kicks) ? parseInt(values.kicks) >= resources.minCountKicks ? parseInt(values.kicks) : 0 : 0) / resources.valKicks) * resources.kicksInTimeMinutes;
      return (realMinutes + subMinutes + bitMinutes) * 60;
    } else {
      const h = parseInt(time.hours) || 0;
      const m = parseInt(time.minutes) || 0;
      const s = parseInt(time.seconds) || 0;
      return h * 3600 + m * 60 + s;
    }
  }, [calculationMode, values, time]);
  
  return {
    calculationMode,
    setCalculationMode,
    values,
    handleValueChange,
    clearValues,
    time,
    handleTimeChange,
    clearTimes,
    totalSeconds
  };
};
