import React from 'react';
import utilService from '../services/utilService';
import CurrencyMainDetails from './CurrencyMainDetails';


function TopRatedCoinPreview({ coin,idx, handleTopRatedCoinClicked, classStr = "" }) {
    

    return (
        <div className={`top-rated-coin-preview ${classStr}`} onClick={() => handleTopRatedCoinClicked(idx)}>
            <div className="top-rated-coin-preview-header flex row center justify-start">
                <CurrencyMainDetails coin={coin} />
            </div>
            <div className="crypto-currency-price">{utilService.formatPrice(coin.current_price)}</div>
            <div className={utilService.checkIsTrendDescent(coin) ? 'trend-descent' : 'trend-ascent'}>
                {utilService.formatPricePercentage(coin.market_cap_change_percentage_24h)}
            </div>
        </div>
    )
}

export default TopRatedCoinPreview
