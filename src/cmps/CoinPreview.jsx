import React, { useContext, useEffect } from 'react';
import CurrencyMainDetails from './CurrencyMainDetails';
import utilService from '../services/utilService';
import { storeContext } from '../App';

function CoinPreview({ coin, type, isActiveCoin }) {

    const { state, dispatch } = useContext(storeContext);
    //Init Active Coins if no activeCoin in the store exist!
    useEffect(() => {
        if (isActiveCoin) dispatch({ type, coin });

    }, [coin])


    function setCoin() {
        dispatch({ type, coin });
    }

    function isActiveCoinPreview(type,state, coin){
        return utilService.checkIsActiveCoinPreview(type,state, coin);
    }

    let isShowActiveClass = isActiveCoinPreview(type,state, coin);

    return (
        <div onClick={() => { setCoin(coin) }}
            className={`coin-basic-preview ${isShowActiveClass ? 'coin-basic-preview-active' : ''} flex row center space-between`}>
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

export default CoinPreview
