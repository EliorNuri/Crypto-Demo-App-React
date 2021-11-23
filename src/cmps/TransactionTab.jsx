import React, { useContext, useState } from 'react';
import { SiWebmoney } from "react-icons/si";
import { storeContext } from '../App';

import BuySection from './BuySection';
import SellSection from './SellSection';
import utilService from '../services/utilService';

function TransactionTab() {
    const [isShowBuy, setisShowBuy] = useState(true);
    const { state: { transactionCoin, isShowTransactionTab } } = useContext(storeContext);
    const elTransactionSection = isShowBuy ? (<BuySection />) : (<SellSection />);

    return (
        <div className={`transaction-tab-container ${isShowTransactionTab? 'open-transaction-tab': ''} flex column`}>
            <h2 className="transaction-header flex row center justify-start">
                <span className="icon-wrapper">
                    <SiWebmoney />
                </span>
                <span>{`${transactionCoin.name}/${utilService.formatToUpperCase(transactionCoin.symbol)} `} </span>
            </h2>
            <h6 className="xs-subtitle">Chosen Coin</h6>
            <div className="transaction-type-container">
                <div onClick={() => setisShowBuy(true)} className={`${isShowBuy ? 'transaction-active' : ''}`}>Buy</div>
                <div onClick={() => setisShowBuy(false)} className={`${!isShowBuy ? 'transaction-active' : ''}`}>Sell</div>
            </div>
            {elTransactionSection}
        </div>
    )
}

export default TransactionTab;
