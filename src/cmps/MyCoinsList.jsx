import React, { useContext, useEffect, useState } from 'react';
import { storeContext } from '../App';
import utilService from '../services/utilService';
import MyCoinsPreview from './MyCoinsPreview';
import { INIT_COIN_TO_SELL } from '../actions/actions';

function MyCoinsList({ coins }) {
    let { dispatch } = useContext(storeContext);
    const [coinToSellIdx, setCoinToSellIdx] = useState(0);
    let uniqeCoins = utilService.removeDuplicateMyCoins(coins); // Returns []

    useEffect(() =>{
        dispatch({ type: INIT_COIN_TO_SELL, coin:uniqeCoins[0]});
    },[])

    let elCoinsList = uniqeCoins.map((coin, idx) => {
        return (<MyCoinsPreview coin={coin} idx={idx} coinToSellIdx={coinToSellIdx} setCoinToSellIdx={setCoinToSellIdx} />)
    })


    return (
        <div className="my-coins-list-container">
            {elCoinsList}
        </div>
    )
}

export default MyCoinsList
