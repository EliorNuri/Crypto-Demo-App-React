import React, { useContext, useEffect, useState } from 'react';
import { storeContext } from '../App';
import PriceRow from './PriceRow';
import TransactionInputSection from './TransactionInputSection';
import utilService from '../services/utilService';
import { BUY_COIN } from '../actions/actions';

function BuySection() {
    let { userState: { loggedInUser: { wallet } }, userDispatch } = useContext(storeContext);
    let { state: { transactionCoin } } = useContext(storeContext);

    useEffect(() => {
        setCoinValue(transactionCoin.current_price);
    }, [transactionCoin])

    const [coinValue, setCoinValue] = useState(0);
    const [coinToBuy, setCoinToBuy] = useState(1);

    function handleCoinAmountChange(coinCount) {
        setCoinToBuy(coinCount);
        setCoinValue(coinCount * transactionCoin.current_price);
    }

    function handleCoinValueChange(val) {
        setCoinValue(val);
        setCoinToBuy(val / transactionCoin.current_price);
    }

    function buyCryptoCoin() {
        if (coinToBuy * transactionCoin.current_price > wallet.balance) return;
        userDispatch({
            type: BUY_COIN,
            coinData: { count: parseInt(coinToBuy), id:transactionCoin.id , amount: coinValue, price: transactionCoin.current_price }
        });
    }

    return (
        <div className="buy-section-container">
            <PriceRow coin={transactionCoin} />
            <h4 className="xs-subtitle flex row center">My Balance</h4>
            <TransactionInputSection ammount={utilService.formatPrice(wallet.balance)} isDisabled={true} />
            <h4 className="xs-subtitle flex row center">Coin Value</h4>
            <TransactionInputSection ammount={utilService.formatPrice(coinValue)} cb={handleCoinValueChange} isDisabled={true} />
            <h4 className="xs-subtitle flex row center">Coin Amount</h4>
            <TransactionInputSection ammount={coinToBuy} cb={handleCoinAmountChange} />
            <div onClick={buyCryptoCoin} className="base-btn">Buy {utilService.formatToUpperCase(transactionCoin.symbol)}</div>
        </div>
    )
}

export default BuySection;
