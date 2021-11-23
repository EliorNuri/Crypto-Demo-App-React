import React from 'react';
import utilService from '../services/utilService';
import CurrencyMainDetails from './CurrencyMainDetails';

function CoinBasePreview({coin}) {
    return (
        <div 
            className={`coin-basic-preview flex row center space-between`}>
            <div className="flex row center">
                <CurrencyMainDetails coin={coin} />
            </div>
            <div className="flex row center">
                <div className={utilService.checkIsTrendDescent(coin) ? 'trend-descent' : 'trend-ascent'}>
                    {utilService.formatPricePercentage(coin.market_cap_change_percentage_24h)}
                </div>
                <div className="crypto-currency-price">{utilService.formatPrice(coin.current_price)}</div>
                <div><span className="coin-rank">{coin.market_cap_rank}</span></div>
            </div>

        </div>
    )
}

export default CoinBasePreview
