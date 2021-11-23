import React, { useContext } from 'react'
import { storeContext } from '../App';
import utilService from '../services/utilService';

function MyWalletCoinPreview({ coin, strClass, idx, updateChosenCoinIdx }) {
    const { state } = useContext(storeContext);
    const currCoinData = state.coins.find((c) => {
        return c.id === coin.id
    })

    function handleClick(idx){
        updateChosenCoinIdx(idx);
    }

    return (
        <div className={`my-wallet-coin-preview-container flex column center ${strClass}`} onClick={() => { handleClick(idx) }} >
            <div className="flex row center justify-start">
                <div className="crypto-currency-img" style={{ backgroundImage: `url(${currCoinData.image})` }}></div>
                <div>{utilService.formatFirstLetterUpperCase(coin.id)}</div>
            </div>
            <div className="total-row">( {coin.count} ) coins </div>
        </div>
    )
}

export default MyWalletCoinPreview;