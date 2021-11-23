import React, { useReducer, useEffect } from "react";
import { Routes, Route } from 'react-router';
import cryptoReducer, { INITIAL_STATE } from "./reducers/cryptoReducer";
import userReducer, { USERS_INITIAL_STATE } from "./reducers/userReducer";

import cryptoService from './services/cryptoService';
import { INIT_COINS_DATA, INIT_PLATFORMS,INIT_TRANSACTION_COIN } from './actions/actions';

import Navbar from "./cmps/Navbar";
import Homepage from "./views/Homepage";
import TransactionTab from "./cmps/TransactionTab";
import MyWallet from "./views/MyWallet";
import Discover from "./views/Discover";
import {TOGGLE_TRANSACTION_TAB} from './actions/actions';

export const storeContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(cryptoReducer, INITIAL_STATE);
  const [userState, userDispatch] = useReducer(userReducer, USERS_INITIAL_STATE);

  function toggleTransactionTab() {
    dispatch({type:TOGGLE_TRANSACTION_TAB})
  }

  useEffect(() => {

    async function fetchData() {
      const coins = await cryptoService.getCryptoCurrenciesData();
      const platforms = await cryptoService.getPlatformsData();

      dispatch({ type: INIT_COINS_DATA, coins })
      dispatch({ type: INIT_TRANSACTION_COIN})
      dispatch({ type: INIT_PLATFORMS, platforms })


    }

    fetchData();

  }, [])
  return (
    <div className="App container-view">
      <storeContext.Provider value={{ state, dispatch, userState, userDispatch }} >
        <div onClick={toggleTransactionTab} className={`app-screen ${state.isShowTransactionTab? 'screen-open': ''}`}></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mywallet" element={<MyWallet />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>

        <TransactionTab />
      </storeContext.Provider>
    </div>
  );
}

export default App;
