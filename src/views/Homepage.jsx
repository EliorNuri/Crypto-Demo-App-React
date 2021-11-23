import React, { useContext, useState } from 'react';
import { storeContext } from '../App';
import SearchInput from '../cmps/SearchInput';
import TopRatedCoinsList from '../cmps/TopRatedCoinsList';
import TrendingCoinsSection from '../cmps/TrendingCoinsSection';
import NewCoinsSection from '../cmps/NewCoinsSection';
import CoinsDataChart from '../cmps/CoinsDataChart';
import utilService from '../services/utilService';
import PlatformList from '../cmps/PlatformList';
import { SiFsecure } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Homepage() {
    const navigate = useNavigate();
    const { state } = useContext(storeContext);
    const { activeTrendingCoin, activeNewCoin } = state;
    let isActiveTrendingCoinSparkLineExist = activeTrendingCoin.sparkline_in_7d &&
        activeTrendingCoin.sparkline_in_7d.price.length !== 0;

    let isActiveNewCoinSparkLineExist = activeNewCoin.sparkline_in_7d &&
        activeNewCoin.sparkline_in_7d.price.length !== 0;

    function moveToDiscover(){
        navigate('/discover')
    }

    return (
        <div className="homepage-container">
            <div className="homepage-header flex row center space-between">
                <div className="content-header flex column">
                    <h1>Crypto Home</h1>
                    <h3>The Cryptocurrency Way Of Life</h3>
                </div>
                <SearchInput />
            </div>
            <TopRatedCoinsList />
            <div className="trending-section flex row align-start space-between">
                <TrendingCoinsSection />
                <div className="trending-chart flex column center justify-start">
                    <div className="flex row align-start space-between">
                        <h2>Trending</h2>
                        <div className="base-btn" onClick={moveToDiscover}>Explore Trending</div>
                    </div>
                    <CoinsDataChart data={isActiveTrendingCoinSparkLineExist ? utilService.setChartData(activeTrendingCoin.sparkline_in_7d.price) : []} />
                </div>
            </div>
            <div className="new-coins-section flex row align-start space-between">
                <div className="new-coins-chart flex column center justify-start">
                    <div className="flex row align-start space-between">
                        <h2>New Coins</h2>
                        <div className="base-btn" onClick={moveToDiscover}>Explore New Coins</div>
                    </div>
                    <CoinsDataChart data={isActiveNewCoinSparkLineExist ? utilService.setChartData(activeNewCoin.sparkline_in_7d.price) : []} />
                </div>
                <NewCoinsSection />
            </div>
            <h2 className="crypto-platform-title flex row center">
                <span>
                    Crypto Platforms
                </span>
                <span className="icon-wrapper secure-icon">
                    <SiFsecure />
                </span>
            </h2>
            <h3 className="crypto-platform-title crypto-platform-sub-title"> Highest Trust Score Platforms </h3>
            <PlatformList />
        </div>
    )
}

export default Homepage;
