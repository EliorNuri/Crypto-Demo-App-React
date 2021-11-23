import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { SiHomebridge } from "react-icons/si";
import { IoWalletOutline, IoStatsChartOutline, IoExitOutline } from "react-icons/io5";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FaCoins } from "react-icons/fa";
import { storeContext } from '../App';
import { TOGGLE_TRANSACTION_TAB } from '../actions/actions';

function Navbar() {
    const navigate = useNavigate();
    const {dispatch } = useContext(storeContext);

    function handleClick(path) {
        navigate(path)
    }

    function toggleTransactionTab() {
        dispatch({type:TOGGLE_TRANSACTION_TAB})
    }

    return (
        <div className="navbar-container flex column">
            <div className="profile-img"></div>
            <span className="icon-wrapper" onClick={() => { handleClick('/') }}>
                <SiHomebridge />
            </span>
            <span className="icon-wrapper" onClick={() => { handleClick('/mywallet') }}>
                <IoWalletOutline />
            </span>
            <span className="icon-wrapper" onClick={() => { handleClick('/discover') }}>
                <RiCompassDiscoverLine />
            </span>
            <span className="icon-wrapper transaction-icon" onClick={toggleTransactionTab}>
                <FaCoins />
            </span>
            <span className="icon-wrapper">
                <IoExitOutline />
            </span>
        </div>
    )
}

export default Navbar;
