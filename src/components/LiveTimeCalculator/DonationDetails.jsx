import PropTypes from "prop-types";
import resources from "../../data/resources.js";
import DonationDetailItem from "./DonationDetailItem.jsx";

const DonationDetails = ({realSnt, subs, subsInt, kicks, kicksInt}) => {
  const parsedRealSnt = parseFloat(realSnt.replace(/\./g, "").replace(",", ".")) || 0;
  
  return (
    <div className={"mt-2"}>
      <details tabIndex={-1}>
        <summary className={"text-sm"}>
          Detalhes
        </summary>
        <p className={"m-0 text-sm text-body-secondary mt-1"} style={{lineHeight: "1.5"}}>
          <DonationDetailItem
            label={`${realSnt} reais`}
            value={parsedRealSnt}
            valFactor={resources.valDonation}
            timeFactor={resources.donationInTimeMinutes}
          />
          <DonationDetailItem
            label={`${subs} ${subsInt > 1 ? "subs" : "sub"}`}
            value={subsInt || 0}
            valFactor={resources.valSubs}
            timeFactor={resources.subsInTimeMinutes}
          />
          {resources.valKicks !== -1 && (
            <DonationDetailItem
              label={`${kicks} ${kicksInt > 1 ? "kicks" : "bit"}`}
              value={kicksInt || 0}
              valFactor={resources.valKicks}
              timeFactor={resources.kicksInTimeMinutes}
              showDuration={false}
            />
          )}
        </p>
      </details>
    </div>
  );
};

DonationDetails.propTypes = {
  realSnt: PropTypes.string.isRequired,
  subs: PropTypes.string.isRequired,
  subsInt: PropTypes.number.isRequired,
  kicks: PropTypes.string.isRequired,
  kicksInt: PropTypes.number.isRequired,
};

export default DonationDetails;
