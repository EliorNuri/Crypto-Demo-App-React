import React, { useContext } from 'react';
import { storeContext } from '../App';
import utilService from '../services/utilService';
import { INIT_COIN_TO_SELL } from '../actions/actions';

function MyCoinsPreview({ coin, idx, coinToSellIdx, setCoinToSellIdx }) {
    let { state, dispatch } = useContext(storeContext);
    
    let currCoinData = state.coins.find((c) => {
        return c.id === coin.id
    });

    function setSellCoin(idx){
        setCoinToSellIdx(idx)
        dispatch({ type: INIT_COIN_TO_SELL, coin});
    }

    return (
        <div className={`my-coin-preview 
        ${idx === coinToSellIdx ? 'my-coin-preview-active' : ''} flex row center space-between`}
            onClick={() => { setSellCoin(idx) }}>
            <div className="flex row center justify-start">
                <div className="crypto-currency-img" style={{ backgroundImage: `url(${currCoinData.image})` }}></div>
                <div>{utilService.formatFirstLetterUpperCase(coin.id)}</div>
            </div>
            <div>
                {coin.count} Coins
            </div>
        </div>
    )
}

export default MyCoinsPreview
