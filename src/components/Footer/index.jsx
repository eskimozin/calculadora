import './index.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Util from "../../assets/Util.jsx";
import moment from "moment";

function Footer() {
  const styles = {fontWeight: 300, fontFamily: '"Inter Tight", "Inter", sans-serif', letterSpacing: 0.20};
  const [dataBuild, setDataBuild] = useState({datetimeCreate: null});
  
  useEffect(() => {
    fetch("./register.build.json").then((response) => {
      return response.json();
    }).then((json) => {
      setDataBuild({...json});
    })
  }, []);
  
  return (
    <footer className={"footer"}>
      <div className={"text text-muted text-always-balance"}>
        <span className={"fw-light"} style={{...styles}}>Se tiver algum erro, avise os mods.</span><br/>
        <Link to={"https://github.com/gabriersdev"} className={"text-decoration-none fw-light"} style={{...styles, color: "inherit"}}>Feito com 💖 pelo Gabriel.</Link>
        <div className={"d-block mt-2 text-white text-sm"}>{dataBuild.datetimeCreate && <span>Versão de build: {Util.renderText(moment(dataBuild.datetimeCreate).utc(true).format("HH[h]mm[m] DD/MM/YYYY [UTC-03:00]"))}</span>}</div>
      </div>
    </footer>
  );
}

export {Footer};
