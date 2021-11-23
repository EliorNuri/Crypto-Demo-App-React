import React from 'react';
import {COINS_LIST_TO_SHOW} from '../services/constatnsService';
import CoinPreview from './CoinPreview';

function CoinsList({coins, type}) {

    const elCoins = coins.slice(0,COINS_LIST_TO_SHOW).map((coin,idx) => {
        const isActiveCoin = idx === 0;
        return (<CoinPreview coin={coin} type={type} isActiveCoin={isActiveCoin} />)
    })

    return (
        <div className="coin-list-container flex column">
            {elCoins}
        </div>
    )
}

export default CoinsList
