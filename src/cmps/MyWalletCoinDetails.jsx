import React, { useContext } from 'react';
import { storeContext } from '../App';
import utilService from '../services/utilService';

function MyWalletCoinDetails({ coin }) {
    const { state, userState } = useContext(storeContext);
    const { coins } = state;
    const currCoinData = coins.find((c) => { return c.id === coin.id });
    const walletCoins = userState.loggedInUser.wallet.coins;

    const elWalletCoins = walletCoins.map((wc) => {
        return (wc.id === coin.id) ? (<WalletCoinPreview wc={wc} currCoinData={currCoinData} />) : null
    })

    return (
        <div className="my-wallet-coin-details-container flex column center justify-start">
            <h2>
                {utilService.formatFirstLetterUpperCase(coin.id)}/
                {utilService.formatToUpperCase(currCoinData.symbol)}
                {" "}
                ({coin.count})
            </h2>
            <h4 className="sub-title">Current Price : {utilService.formatPrice(currCoinData.current_price)}</h4>
            {elWalletCoins}
        </div>
    )
}

export default MyWalletCoinDetails;

function WalletCoinPreview({ wc, currCoinData }) {

    const [isPositiveTrend , trendPercentage] = utilService.checkWalletCoinTrend(wc, currCoinData);

    return (<div className="wallet-coin-preview flex row center space-between">
        <div>{wc.count} {wc.count > 1 ? "Coins" : "Coin"}</div>
        <div className="wallet-coin-price-container flex row center">
            <div className={isPositiveTrend ? "trend-ascent" : "trend-descent"}>{utilService.formatPricePercentage(trendPercentage)}</div>
            <div>{utilService.formatPrice(wc.price)}</div>
        </div>
    </div>)
}
