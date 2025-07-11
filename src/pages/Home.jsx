import {Main} from "../components/Main";
import LiveTimeCalculator from "../components/LiveTimeCalculator/LiveTimeCalculator.jsx";
import moment from "moment";
import {Link} from "react-router-dom";
import Util from "../assets/Util.jsx";
import links from "../data/links.js";
import resources from "../data/resources.js";

function Home() {
  const iconOpenInNewPage = (
    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="" className={"text-dark"}>
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
    </svg>
  )
  
  const subathonInit = "2025-07-11T18:00:00-03:00";
  const subathonInitComponent = moment().diff(moment(subathonInit), "seconds") > 0 ? "A live está no ar!" : (Util.renderText(moment(subathonInit).format("DD/MM/YYYY [às] HH:mm [UTC]Z")));
  
  const btnDonation = "btn btn-default rounded-1 text-dark d-flex align-items-center gap-1";
  const styleBtnDonation = {backdropFilter: "blur(10px)", backgroundColor: "#FFFFFF60", border: "1px solid #FFFFFF50"};
  
  return (
    <Main className="Main">
      <div className={"d-flex flex-column gap-5"}>
        <section className={"text-center text-balance text-body"}>
          <p>A live começa em {subathonInitComponent}.</p>
          <p>Assista em <Link to={"https://twitch.tv/eskimozin"} className={"text-body"}>{Util.renderText("twitch.tv/eskimozin")}</Link></p>
        </section>
        
        <LiveTimeCalculator/>
        
        <section className={"banner-campaign p-3 rounded-2 d-flex flex-column gap-3 align-items-center text-center text-balance text-white"}>
          <h3 className={"text-dark fs-3 m-0"}>Contribua com a Eskimothon, para o Eskimo ficar 1 ano em live!</h3>
          <p>A live começa em {subathonInitComponent}.</p>
          <div className={"d-flex flex-wrap justify-content-center align-items-center gap-2"}>
            <Link to={links["livepix"]} className={btnDonation} style={styleBtnDonation}>Live Pix {iconOpenInNewPage}</Link>
            <Link to={links["subsTwitch"]} className={btnDonation} style={styleBtnDonation}>Dar subs {iconOpenInNewPage}</Link>
            <Link to={links["bitsTwitch"]} className={btnDonation} style={styleBtnDonation}>Contribuir com bits {iconOpenInNewPage}</Link>
          </div>
          <div>
            <p className={"m-0"}>{resources.valDonation} real dá {resources.donationInTimeMinutes} minuto de live, <b>{resources.valSubs} sub dá {resources.subsInTimeMinutes} minutos</b> e {resources.valBits} bits vira {resources.bitsInTimeMinutes} minutos!</p>
          </div>
        </section>
      </div>
    </Main>
  );
}

export default Home;
