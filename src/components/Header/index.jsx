import './index.css'
import {useContext} from "react";
import {ThemeContext} from "../AppContext/AppContext.jsx";
import {app} from "../../data/config.js"
import {Link} from "react-router-dom";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

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
      
      <div
        className={"d-flex flex-wrap gap-2 align-items-center justify-content-center bg-transparent p-0 mx-auto rounded-0 w-auto"}
        style={{background: "unset", padding: 0, maxWidth: '425px', margin: '0 auto'}}
      >
        <div className={"animate-from-bottom"}>
          <h1 className={"text-balance text-center p-0 m-auto emphasis"}>{title}</h1>
        </div>
        <div className={"d-flex flex-column"}>
          <span className={"text-white-50 d-flex flex mx-auto"} style={{rotate: "90deg", width: "min-content"}}>|</span>
          <Link
            to={"https://brainmade.org/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <OverlayTrigger overlay={
              <Tooltip className={"text-small p-0"}>
                <div className={"text-black"}>
                  {
                    "Este projeto foi feito por humanos como você. Human = Good! Essa é a nossa causa."
                      .split(/(?<=[.!?])\s+/)
                      .map((sentence, index) => {
                        return (
                          <span
                            className={`fs-inherit text-balance align-items-center justify-content-center w-auto
                              ${sentence.includes("Human = Good!") ? "text-white bg-success d-inline-flex px-1" : "d-flex text-black"}
                            `}
                            key={index}
                          >
                            {sentence}
                          </span>
                        )
                      })
                  }
                </div>
              </Tooltip>
            }>
              <img
                className={"bg-transparent p-0 m-0 rounded-0 object-fit-contain"}
                src={pathname ? "../img/brain-made.svg" : "./img/brain-made.svg"}
                alt={"Logo da iniciativa \"Brain Made\" - projetos feitos por um humano"}
                style={{background: "unset", padding: 0, margin: 0, width: "80px", height: "40px"}}
              />
            </OverlayTrigger>
          </Link>
        </div>
      </div>
    </>
  )
}

export {Header}