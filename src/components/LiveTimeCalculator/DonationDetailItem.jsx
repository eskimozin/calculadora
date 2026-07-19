import PropTypes from "prop-types";
import Util from "../../assets/Util.jsx";

const DonationDetailItem = ({label, value, valFactor, timeFactor, showDuration = true}) => {
  const minutes = (value / valFactor) * timeFactor;
  return (
    <span>
      - {label} = {minutes.toLocaleString("pt-br")} minutos
      {showDuration && ` (${Util.formatFriendlyDuration(minutes)})`}
      . <br/>
    </span>
  );
};

DonationDetailItem.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired,
  valFactor: PropTypes.number.isRequired,
  timeFactor: PropTypes.number.isRequired,
  showDuration: PropTypes.bool,
};

export default DonationDetailItem;
