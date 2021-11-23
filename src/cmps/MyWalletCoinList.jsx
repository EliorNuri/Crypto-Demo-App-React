import React from 'react';
import MyWalletCoinPreview from './MyWalletCoinPreview';

function MyWalletCoinList({coins, activeCoinIdx, setChosenCoinIdx}) {

    function updateChosenCoinIdx(idx){
        setChosenCoinIdx(idx);
    }

    let elCoins = coins.map((coin,idx) => {
        let strClass = activeCoinIdx === idx ? "active-tab" : '';
        return (<MyWalletCoinPreview coin={coin} strClass={strClass} idx={idx} updateChosenCoinIdx={updateChosenCoinIdx} />)
    })

    return (
        <div className="my-wallet-coin-list-container flex row justify-start align-start wrap">
            {elCoins}
        </div>
    )
}

export default MyWalletCoinList
