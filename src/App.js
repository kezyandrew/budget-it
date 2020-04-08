import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Addtransaction from "./components/Addtransaction";
import Incomelist from "./components/Incomelist";
import Expenselist from "./components/Expenselist";
import { GlobalContextProvider } from "./components/Context/Globalstate";
import "./App.css";

function App() {
  return (
    <GlobalContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
          <Header></Header>
          <Balance></Balance>
          <Addtransaction></Addtransaction>
          <Incomelist></Incomelist>
          <Expenselist></Expenselist>
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
