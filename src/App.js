// import LoginRegister from './Components/LoginRegister/LoginRegister';
import bg from './img/bg.png';
import './app.css';
import './styles/Layouts.css';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import React, {useState, useMemo} from "react";
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import {useGlobalContext} from './context/globalContext';

function App() {
  const orbMemo = useMemo (()=>{
    return <Orb/>
  },[])
  const[active, setActive] = useState(1)

  const global = useGlobalContext();

  const displayData = () => {
    switch(active){
      case 1: 
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3: 
        return <Income />
      case 4:
        return <Expenses />
      default :
        return <Dashboard/>
    }
  }

  return (
    <div className="app">
      <div className="background">
        <img src={bg} alt="Background" /> {/* Background image */}
      </div>
     {/* <LoginRegister/> */}
     {orbMemo}
     <div className="mainLayout">
      < Navigation active={active} setActive={setActive} />
      <main>
        {displayData()}
      </main>
      </div>
    </div>

  );
}

export default App;
