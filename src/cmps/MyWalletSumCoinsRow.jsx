import React, { useContext } from 'react'
import { storeContext } from '../App';
import utilService from '../services/utilService';

function MyWalletSumCoinsRow() {
    const { userState: { loggedInUser: { wallet: { coins: walletCoins } } } } = useContext(storeContext);
    const { state: { coins } } = useContext(storeContext);
    const uniqeCoins = utilService.removeDuplicateMyCoins(walletCoins);

    const elCoinsCalc = uniqeCoins.map((wc, idx) => {
        const { image, current_price } = coins.find((c) => { return c.id === wc.id });
        const calcSymbol = (idx !== uniqeCoins.length - 1) ? "+" : "=";

        return (<div className="flex row">
            <div className="flex column">
                <div className="flex row center row-1">
                    ( <div className="crypto-currency-img" style={{ backgroundImage: `url(${image})` }}></div>
                    <span>x</span>
                    <div>{wc.count}</div> )
                </div>
                <div className="flex column center row-2">
                    <div>{utilService.formatFirstLetterUpperCase(wc.id)}</div>
                    <div>{utilService.formatPrice(current_price)}</div>
                </div>
            </div>
            <div className="calc-symbol">{calcSymbol}</div>
        </div>);
    })
    return (
        <div className="my-wallet-sum-coins-row">
            <h2 className="sub-title">My Coins Value</h2>
            <div className="flex row center space-between">
                <div className="coins-sum-row flex row center justify-start wrap">
                    {elCoinsCalc}
                </div>
                <div className="sum-row-results">{utilService.calcSumWalletCoinsValue(uniqeCoins,coins)}</div>
            </div>
        </div>
    )
}

export default MyWalletSumCoinsRow;
