import {Main} from "../components/Main";
import LiveTimeCalculator from "../components/LiveTimeCalculator/LiveTimeCalculator.jsx";
import moment from "moment";
import {Link} from "react-router-dom";
import Util from "../assets/Util.jsx";
import links from "../data/links.js";
import resources from "../data/resources.js";
import AnimatedComponents from "../components/AnimatedComponent/AnimatedComponents.jsx";

function Home() {
  const iconOpenInNewPage = (
    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="" className={"text-dark"}>
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
    </svg>
  )
  
  const subathonInit = "2025-07-11T18:00:00-03:00";
  const subathonInitComponent = moment().diff(moment(subathonInit), "seconds") > 0 ? <span style={{color: "inherit"}}>A live está no ar!</span> : (<span className="text-black">A live começa em {Util.renderText(moment(subathonInit).format("DD/MM/YYYY [às] HH:mm [UTC]Z"))}.</span>);
  
  const moddayInit = "2025-07-26T00:00:00-03:00";
  const moddayFinish = "2025-07-27T00:00:00-03:00";
  const moddayAnnouncementComponent = <div className={"d-block mb-3 fw-medium"}>Hoje é <span className={"text-warning"}>modday!</span> Isso significa que <span className={"text-warning"}>todos os donates feitos via <Link to={links["livepix"]} className={"text-decoration-none text-warning fw-bolder"}>LIVE PIX</Link> vão para os magnânimos moderadores</span> que ajudam a live e a comunidade :D</div>
  
  const isModday = moment().diff(moment(moddayInit), "m") >= 0 && moment().diff(moment(moddayFinish), "m") < 0;
  
  const btnDonation = "btn btn-default rounded-1 text-dark d-flex align-items-center gap-1";
  const styleBtnDonation = {backdropFilter: "blur(10px)", backgroundColor: "#FFFFFF60", border: "1px solid #FFFFFF50"};
  
  return (
    <Main className="Main">
      {
        resources["subathonIsEnded"] ? (
          <section className={"banner-campaign py-5 px-3 rounded-2 d-flex flex-column gap-3 align-items-center text-center text-balance text-black mb-1"}>
            <h3 className={"text-dark fs-3 m-0"}>A subathon de 2025 acabou. Mas ano que vem tem mais.</h3>
            <p>Fique ligado e guarde dinheiro. Entre no nosso servidor do Discord e fique ligado nas novidades da live.</p>
            <div className={"d-flex flex-wrap justify-content-center align-items-center gap-2 mb-2"}>
              <Link to={links["discordInvite"]} className={btnDonation} style={styleBtnDonation}>Clique aqui para entrar no Iglu {iconOpenInNewPage}</Link>
            </div>
          </section>
        ) : (
          <AnimatedComponents>
            <div className={"d-flex flex-column gap-5"}>
              <section className={"text-center text-balance text-body"}>
                <p>{isModday ? moddayAnnouncementComponent : subathonInitComponent}</p>
                {isModday ? <p>Doe agora mesmo em <Link to={links["livepix"]} className={"text-body text-decoration-none fw-bolder text-warning-emphasis"}>{Util.renderText(links["livepix"].replace("https://", ""))}</Link></p> : <p>Assista em <Link to={"https://twitch.tv/eskimozin"} className={"text-body"}>{Util.renderText("twitch.tv/eskimozin")}</Link></p>}
              </section>
              
              <LiveTimeCalculator/>
              
              <section className={"banner-campaign p-3 rounded-2 d-flex flex-column gap-3 align-items-center text-center text-balance"}>
                <h3 className={"text-dark fs-3 m-0"}>{isModday ? "Contribua com o modday, para que os mods não precisem morar na rua!" : "Contribua com a Eskimothon, para o Eskimo ficar 1 ano em live!"}</h3>
                <p className="text-black">{isModday ? "Doe agora mesmo pelo Live Pix!" : subathonInitComponent}</p>
                <div className={"d-flex flex-wrap justify-content-center align-items-center gap-2"}>
                  <Link to={links["livepix"]} className={btnDonation} style={styleBtnDonation}>Live Pix {iconOpenInNewPage}</Link>
                  {
                    !isModday && (
                      <>
                        <Link to={links["subsTwitch"]} className={btnDonation} style={styleBtnDonation}>Dar subs {iconOpenInNewPage}</Link>
                        <Link to={links["bitsTwitch"]} className={btnDonation} style={styleBtnDonation}>Contribuir com bits {iconOpenInNewPage}</Link>
                      </>
                    )
                  }
                </div>
                <div>
                  <p className={"m-0 text-black"}>{resources.valDonation} real dá {resources.donationInTimeMinutes} minuto de live, <b>{resources.valSubs} sub dá {resources.subsInTimeMinutes} minutos</b> e {resources.valBits} bits vira {resources.bitsInTimeMinutes} minutos!</p>
                </div>
              </section>
            </div>
          </AnimatedComponents>
        )
      }
    </Main>
  );
}

export default Home;
