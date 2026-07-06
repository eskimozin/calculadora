import {Suspense, useEffect, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import AOS from 'aos';

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {HashRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home.jsx";
import {baseUrl} from "./data/config.js";
import {AppContext} from "./components/AppContext/AppContext.jsx";
import Loading from "./components/Loading/Loading.jsx";

function App() {
  const [pathname, setPathname] = useState("");
  
  useEffect(() => {
    new bootstrap.Tooltip(document.body, {
      selector: '[data-toggle="tooltip"]',
    });
    
    document.querySelectorAll('a').forEach(link => {
      link.setAttribute('rel', 'noopener noreferrer');
      link.setAttribute('target', '_blank');
    });
  }, [])
  
  useEffect(() => {
    AOS.init();
  }, [])
  
  useEffect(() => {
    const targetNode = document.body;
    const config = {attributes: true, childList: true, subtree: true};
    
    const updatePathname = () => {
      setPathname(prev => {
        const newPathname = window.location.pathname.replace(`/${baseUrl}/`, "");
        return prev !== newPathname ? newPathname : prev;
      });
    };
    
    updatePathname();
    
    const observer = new MutationObserver(updatePathname);
    observer.observe(targetNode, config);
    
    return () => {
      observer.disconnect();
    }
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".overlay-appx").style.display = "none";
    }, 200);
  }, []);
  
  return (
    <AppContext value={{pathname, setPathname}}>
      <HashRouter>
        <Suspense fallback={<Loading/>}>
          <div className="App">
            <Header className="Header"/>
            <Routes>
              <Route path={`/`} element={<Home/>}/>
            </Routes>
            <Footer/>
          </div>
        </Suspense>
      </HashRouter>
    </AppContext>
  );
}

export default App;
