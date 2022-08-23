import logo from './logo.svg';
import './App.css';
import {Mentions} from "./Components/Mentions"
import {Influence} from "./Components/Influence"
import {Engagement} from "./Components/Engagement"
import {NotFound} from "./Components/NotFound"
import { Route, useHistory } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useRef } from 'react';

function App() {
  const history = useHistory();

  const ref1= useRef();
  const ref2= useRef();
  const ref3= useRef();
  const head =[{text:"By mentions",refs:ref1},{text:"By influence",refs:ref2},{text:"By engagement",refs:ref3}];

  const setTab = (link,e) =>{
    history.push(link);
    console.log(e.target.classList);
    ref1.current.classList.remove("tab-active")
    ref2.current.classList.remove("tab-active")
    ref3.current.classList.remove("tab-active")
    e.target.classList.add("tab-active")
  }

  return (
    <div className="App">
      <div className='flex-container' style={{borderBottom:"1px solid gray"}}>
        {
          head.map(({text,refs},index)=>(
            <div id={text} className={index===0?`p-30 tab tab-active`:`p-30 tab`}  ref={refs}
            onClick={(e)=>setTab(`/${text.toLowerCase().split(" ").join("-")}`,e)}
            >{text}</div>
          ))
        }
      </div>

      <Switch>
          <Route path="/by-mentions">
                <Mentions/>
          </Route>
          <Route path="/by-influence">
                <Influence/>
          </Route>
          <Route path="/by-engagement">
                  <Engagement/>
           </Route>
          <Route path="/" exact>
                  <Mentions/>
           </Route>
            <Route path="**">
                 <NotFound/>
            </Route>
          </Switch>
    </div>
  );
}

export default App;
