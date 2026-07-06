import moment from "moment";
import {app} from "./config.js";

moment.locale(app["moment-locale"] ?? "pt-BR");

const resources = {
  "subathonIsEnded": false,
  "currentYear": new moment().get("year") || 2026,
  "minCountKicks": 100,
  
  "valDonation": 1,
  "valSubs": 1,
  "valKicks": 100,
  
  "donationInTimeMinutes": 1,
  "subsInTimeMinutes": 25,
  "kicksInTimeMinutes": 5,
  
  "pixIntermediatePlatformName": "Pixie",
  "streamPlatformName": "KICK"
}

export default resources;
