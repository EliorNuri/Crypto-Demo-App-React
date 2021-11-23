import React, { useContext , useState } from 'react';
import { storeContext } from '../App';
import utilService from '../services/utilService';
import { SiFsecure } from "react-icons/si";
import MyWalletCoinList from '../cmps/MyWalletCoinList';
import MyWalletCoinDetails from '../cmps/MyWalletCoinDetails';
import MyWalletLastMovements from '../cmps/MyWalletLastMovements';
import MyWalletSumCoinsRow from '../cmps/MyWalletSumCoinsRow';

function MyWallet() {
    const [chosenCoinIdx, setChosenCoinIdx] = useState(0);
    const { userState: { loggedInUser: { wallet: { balance, coins } } } } = useContext(storeContext);
    const uniqeCoins = utilService.removeDuplicateMyCoins(coins);

    return (
        <div className="my-wallet-container flex column">
            <div className="my-wallet-header flex row center space-between">
                <div className="content-header flex column">
                    <h1 className="flex row center justify-start">
                        <span>My Wallet </span>
                        <span className="secure-icon"> <SiFsecure /> </span>
                    </h1>
                    <h3>Secure Cryptocurrency Wallet</h3>
                </div>
                <div className="wallet-balance flex row center justify-start">
                    <span className="xs-subtitle">Current Balance: </span>
                    <span>{utilService.formatPrice(balance)}</span>
                </div>
            </div>
            <div className="my-wallet-grid">
                <MyWalletCoinList coins={uniqeCoins} activeCoinIdx={chosenCoinIdx} setChosenCoinIdx={setChosenCoinIdx} />
                <MyWalletCoinDetails coin={uniqeCoins[chosenCoinIdx]} />
                <MyWalletLastMovements  />
                <MyWalletSumCoinsRow />
            </div>
        </div>
    )
}

export default MyWallet
