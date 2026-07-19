import moment from "moment";
import {app} from "./config.js";

moment.locale(app["moment-locale"] ?? "pt-BR");

const resources = {
  "subathonInitDatetime": moment("2026-07-06T18:00:00-03:00"),
  "subathonIsEnded": false,
  "currentYear": new moment().get("year") || 2026,
  "minCountKicks": 100,
  
  "valDonation": 1,
  "valSubs": 1,
  "valKicks": -1,
  
  "donationInTimeMinutes": 1,
  "subsInTimeMinutes": 25,
  "kicksInTimeMinutes": 5,
  
  "pixIntermediatePlatformName": "Pixie",
  "streamPlatformName": "KICK"
}

export default resources;
