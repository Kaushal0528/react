import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {FComponant, FirstComp}  from './components/FirstComp';
import ClassComp from './components/SecondComp';
import FuctionProps from './components/FunProps';
import ClassProp from './components/ClsProps';
import ClsState from './components/FirstState';

function App() {
  return (
    <div className="App">
      <div className="csm-logo">
        <img src={logo} alt="" width="100" />
      </div>
        <FirstComp />
        <FComponant />
        <ClassComp />
        <hr />
        <FuctionProps firstName="Kaushal" lastName="Chauhan" >
          <h1>Joined In Kellton Tech</h1>
        </FuctionProps>
        <ClassProp designation="Web developer">
          <h3>Happy To Have you.</h3>
        </ClassProp>
        <hr />
        <ClsState />
    </div>
  );
}

export default App;
