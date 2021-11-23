import React, { useContext, useState } from 'react';
import { storeContext } from '../App';
import TopRatedCoinPreview from './TopRatedCoinPreview';
import MainChart from './MainChart';
import utilService from '../services/utilService';
import { TOP_RATED_COINS_TO_SHOW } from '../services/constatnsService';
import {SET_TRANSACTION_COIN} from '../actions/actions';
import { FaLongArrowAltRight } from "react-icons/fa";

function TopRatedCoinsList() {
    
    const [activePreviewIdx, setActivePreviewIdx] = useState(0);
    const { state, dispatch } = useContext(storeContext);
    const { coins } = state;

    function handleTopRatedCoinClicked(idx) {
        setActivePreviewIdx(idx);
        dispatch({type:SET_TRANSACTION_COIN, coin:coins[idx]});
    }

    const elTopRatedCoins = coins.length ? coins.slice(0, TOP_RATED_COINS_TO_SHOW).map((coin, idx, coins) => {
        let classStr = activePreviewIdx === idx ? 'active-top-rated ' : '';
        if (idx === coins.length - 1) classStr += "last-top-rated-preview";
        //Send Parametes As Object - TODO
        return (<TopRatedCoinPreview coin={coin} idx={idx} handleTopRatedCoinClicked={handleTopRatedCoinClicked} classStr={classStr} key={idx} />)
    }) : null;

    const elChartHeaderConversion = coins.length ? buildChartHeaderConversionTemplate(coins[activePreviewIdx]) : null;
    const elChartHeaderMoreDetails = coins.length ? buildChartHeaderDetailsTemplate(coins[activePreviewIdx]) : null;

    return (
        <div className="top-rated-list-container flex row center space-between wrap">
            {elTopRatedCoins}
            <div className="main-chart-container flex column center justify-start">
                <div className="chart-header flex row center space-between">
                    <div className="chart-header-conversion flex row center justify-start">
                        {elChartHeaderConversion}
                    </div>
                    <div className="chart-header-details flex row center justify-start">
                        {elChartHeaderMoreDetails}
                    </div>
                    <div className="base-btn flex row center">
                        Find More
                        {/* <span className="icon-wrapper">
                            <FaLongArrowAltRight />
                        </span> */}
                    </div>
                </div>
                <MainChart data={coins.length ? utilService.setChartData(coins[activePreviewIdx].sparkline_in_7d.price) : []} />

            </div>
        </div>
    )
}

export default TopRatedCoinsList;


function buildChartHeaderConversionTemplate(coin) {
    return (<React.Fragment>
        <div className="crypto-currency-img" style={{ backgroundImage: `url(${coin.image})` }}></div>
        <h2 className="conversion-section">
            {`USD/${utilService.formatToUpperCase(coin.symbol)}`}
        </h2>
    </React.Fragment>)
};

function buildChartHeaderDetailsTemplate(coin) {
    return (<React.Fragment>
        <div>
            <h6>Current Price</h6>
            <h5>{utilService.formatPrice(coin.current_price)}</h5>
        </div>
        <div>
            <h6>Price Change 24h</h6>
            <h5>{utilService.formatPricePercentage(coin.price_change_percentage_24h)}</h5>
        </div>
        <div>
            <h6>Market Change 24h</h6>
            <h5>{utilService.formatPricePercentage(coin.market_cap_change_percentage_24h)}</h5>
        </div>
        <div>
            <h6>Coin Rank</h6>
            <h5><span className="coin-rank">{coin.market_cap_rank}</span></h5>
        </div>
    </React.Fragment>)
};