import PropTypes from "prop-types";

const DonationSummary = ({timeInMinutes, realSnt, subs, subsInt, kicks, kicksInt, hasKicks}) => {
  return (
    <div className={"mt-2 fw-semibold text-white-50"}>
      <h3 className={"fs-3 m-0 text-balance"} style={{lineHeight: "1.25"}}>
        <span className={"text-warning-emphasis"}>{timeInMinutes > 0 ? realSnt : "zero"} reais</span>
        <span>{" "}ou{" "}</span>
        <span className={"text-warning-emphasis"} style={{textWrap: "nowrap"}}>{subs} {subsInt > 1 ? "subs" : "sub"}</span>
        {
          hasKicks && (
            <>
              <span>{" "}ou{" "}</span>
              <span className={"text-warning-emphasis"} style={{textWrap: "nowrap"}}>{kicks} {kicksInt > 1 ? "kicks" : "bit"}</span>
            </>
          )
        }
      </h3>
    </div>
  );
};

DonationSummary.propTypes = {
  timeInMinutes: PropTypes.number.isRequired,
  realSnt: PropTypes.string.isRequired,
  subs: PropTypes.string.isRequired,
  subsInt: PropTypes.number.isRequired,
  kicks: PropTypes.string.isRequired,
  kicksInt: PropTypes.number.isRequired,
  hasKicks: PropTypes.bool.isRequired,
};

export default DonationSummary;
