import React from 'react';
import utilService from '../services/utilService';

function PriceRow({ coin }) {
    return (
        <div className="price-row-container flex row center space-between">
            <div className="xs-subtitle">
                <span className="price-title">Price</span>
                <span className="price-percentage">{
                    (coin.price_change_percentage_24h) ?
                        utilService.formatPricePercentage(coin.price_change_percentage_24h) : 0
                }</span>
            </div>
            <span>{(coin.current_price) ?
                utilService.formatPrice(coin.current_price) : 0
            }</span>
        </div>
    )
}

export default PriceRow
