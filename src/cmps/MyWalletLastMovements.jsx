import React, { useContext } from 'react';
import { storeContext } from '../App';
import utilService from '../services/utilService';

function MyWalletLastMovements() {
    const { state, userState } = useContext(storeContext);
    const { coins } = state;
    const walletCoins = userState.loggedInUser.wallet.coins;
    const reversedWalletCoins = utilService.reverseArr(walletCoins);
    console.log(reversedWalletCoins)
    const elWalletCoins = reversedWalletCoins.slice(0,4).map((wc) => {

        const currCoinData = coins.find((c) => { return c.id === wc.id });   
        return (<LastMovementCoinPreview wc={wc} currCoinData={currCoinData} />);
    })

    return (
        <div className="my-wallet-coin-details-container flex column center justify-start">
            <h2>
                Last Movements
            </h2>
            {elWalletCoins}
        </div>
    )
}

export default MyWalletLastMovements;


function LastMovementCoinPreview({ wc, currCoinData }) {

    return (<div className="wallet-coin-movement wallet-coin-preview flex row center space-between">
        <div className="crypto-currency-img" style={{backgroundImage:`url(${currCoinData.image})`}}></div>
        <div>{wc.count} {wc.count > 1 ? "Coins" : "Coin"}</div>
        <div className="wallet-coin-price-container flex row center">
            <div>{utilService.formatPrice(wc.price)}</div>
            <div className="base-btn">Buy</div>
        </div>
    </div>)
}
