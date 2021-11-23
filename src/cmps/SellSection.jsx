import React, { useContext, useState } from 'react';
import PriceRow from './PriceRow';
import { storeContext } from '../App';
import MyCoinsList from './MyCoinsList';
import { SELL_COIN } from '../actions/actions';
import TransactionInputSection from './TransactionInputSection';
import utilService from '../services/utilService';

function SellSection() {
    const [coinToSellCount, setCoinToSellCount] = useState(0);
    let { userState: { loggedInUser: { wallet } }, userDispatch, state: { coinToSell, coins } } = useContext(storeContext);
    let { state: { transactionCoin } } = useContext(storeContext);

    function sellCoin() {
        const currentCoin = coins.find((c) => {
            return c.id === coinToSell.id
        })
        const price = currentCoin.current_price;
        userDispatch({ type: SELL_COIN, res: {coinToSell, coinToSellCount, price }});
    }

    return (
        <div className="sell-section-container">
            <PriceRow coin={transactionCoin} />
            <h4 className="xs-subtitle flex row center">My Wallet</h4>
            <TransactionInputSection ammount={utilService.formatPrice(wallet.balance)} isDisabled={true} />
            <MyCoinsList coins={wallet.coins.length ? wallet.coins : []} />
            <div className="sell-btn-container flex row center space-between">
                <input value={coinToSellCount} onChange={(e) => { setCoinToSellCount(parseInt(e.target.value)) }} type="number" />
                <div onClick={sellCoin} className="base-btn">Sell</div>
            </div>
        </div>
    )
}

export default SellSection;
