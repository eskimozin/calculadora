import {useMemo} from 'react';
import PropTypes from "prop-types";
import resources from "../../data/resources.js";
import DonationSummary from "./DonationSummary.jsx";
import DonationDetails from "./DonationDetails.jsx";

const ValueDisplay = ({totalSeconds}) => {
  const timeInMinutes = totalSeconds / 60;
  const values = useMemo(() => {
    return {
      pix: (timeInMinutes / (resources.donationInTimeMinutes / resources.valDonation)).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
      subs: Math.ceil(timeInMinutes / (resources.subsInTimeMinutes / resources.valSubs)) > 0 ? Math.ceil(timeInMinutes / (resources.subsInTimeMinutes / resources.valSubs)).toLocaleString('pt-br') : "nenhum",
      kicks: Math.ceil(timeInMinutes / (resources.kicksInTimeMinutes / resources.valKicks)) > 0 ? Math.ceil(timeInMinutes / (resources.kicksInTimeMinutes / resources.valKicks)).toLocaleString('pt-br') : "nenhum",
    };
  }, [timeInMinutes]);
  
  const subsInt = parseInt(values.subs.replace(/\./, "")) || 0;
  const kicksInt = parseInt(values.kicks.replace(/\./, "")) || 0;
  const realSnt = values.pix.replace("R$", "").trim();
  
  return (
    <div className="result-section bg-body-secondary m-0">
      <span className={"text-balance d-block"} style={{lineHeight: "1.5"}}>Para que o eskimo fique esse tempo em live, você precisa doar:</span>
      <DonationSummary
        timeInMinutes={timeInMinutes}
        realSnt={realSnt}
        subs={values.subs}
        subsInt={subsInt}
        kicks={values.kicks}
        kicksInt={kicksInt}
        hasKicks={resources.valKicks !== -1}
      />
      <DonationDetails
        realSnt={realSnt}
        subs={values.subs}
        subsInt={subsInt}
        kicks={values.kicks}
        kicksInt={kicksInt}
      />
    </div>
  );
};

ValueDisplay.propTypes = {
  totalSeconds: PropTypes.number.isRequired,
}

export default ValueDisplay;
