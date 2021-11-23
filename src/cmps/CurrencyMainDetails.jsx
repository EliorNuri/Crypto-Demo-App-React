import React from 'react';
import utilService from '../services/utilService';
import { IoTrendingUpOutline, IoTrendingDown } from "react-icons/io5";


function CurrencyMainDetails({coin}) {

    //24 Hours Trend
    const elCoinTrend = utilService.checkIsTrendDescent(coin) ?
        (<span className="icon-wrapper trend trend-descent"><IoTrendingDown /></span>) :
        (<span className="icon-wrapper trend trend-ascent"><IoTrendingUpOutline /></span>);
        
    return (
        <React.Fragment>
            <div className="crypto-currency-img" style={{ backgroundImage: `url(${coin.image})` }}></div>
            <div>{coin.name}/{utilService.formatToUpperCase(coin.symbol)}</div>
            {elCoinTrend}
        </React.Fragment>
    )
}

export default CurrencyMainDetails;
