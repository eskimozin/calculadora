import './index.css'
import {useContext} from "react";
import {ThemeContext} from "../AppContext/AppContext.jsx";
import {app} from "../../data/config.js"

function Header() {
  const {pathname} = useContext(ThemeContext);
  const {title} = app;
  
  return (
    <>
      <header className="animate-from-bottom">
        <div className={"gradient-area"}>
          <a
            href="https://www.twitch.tv/eskimozin/"
            rel="noreferrer noopener"
            data-toggle="tooltip"
            data-placement="top"
            data-bs-custom-class="custom-tooltip"
            title="Whiskimo na Twitch"
          >
            <img src={pathname ? "../img/favicon.png" : "./img/favicon.png"} alt="Imagem do Eskimozin"/>
          </a>
        </div>
      </header>
      <div className={"animate-from-bottom"} style={{maxWidth: '580px', margin: '0 auto'}}>
        <h1 className={"text-balance text-center p-0 m-0"}>{title}</h1>
      </div>
    </>
  )
}

export {Header}