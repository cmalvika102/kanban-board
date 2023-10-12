import React, { useState } from "react";

import Header from "./components/Header";
import Displayboard from "./components/StatusDashboard";
import UserDispBoard from "./components/UserDashboard";
import PriorityDispBoard from "./components/PriorityDashboard";
import FetchData from "./components/FetchApi";
import Select from "./components/SelectChoice"
import Display from "./components/DisplayChoice";

function App() {
  const [criteria, setCriteria] = useState({grouping: "", ordering: ""});
  const [flag, setFlag] = useState(false); 
  const [cards, setCards] = useState({});
 
  function apicallback(apiobj){
    setCards(apiobj);
  }
  function selectioncallback(group, order, flg){
    //setCards(apiobj);
    setCriteria({grouping: group, ordering: order});
    setFlag(flg);
  }
 
    return (
    <div className="App"> 
        <Header />
        <FetchData fetchcall={apicallback} />
        <Display dispflag ={setFlag} />
        { flag && <Select callbackfunc ={selectioncallback} />}
         
        {(criteria.grouping==="status") && <Displayboard  apidata ={cards} sortopt = {criteria.ordering} />}
        {(criteria.grouping==="user") && <UserDispBoard apidata ={cards} sortopt = {criteria.ordering} />}
        {(criteria.grouping==="priority") && <PriorityDispBoard apidata ={cards} sortopt = {criteria.ordering} />}
    </div>
  );
}


export default App;
