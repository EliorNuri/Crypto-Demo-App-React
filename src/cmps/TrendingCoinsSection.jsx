import React, { useContext } from 'react';
import CoinsList from './CoinsList';
import utilService from '../services/utilService';
import { storeContext } from '../App';
import {SET_ACTIVE_TRENDING_COIN} from '../actions/actions';

function TrendingCoinsSection() {

    const { state } = useContext(storeContext);
    const sortedTrendingCoins = utilService.sortByTrending(state.coins);
    return (<CoinsList coins={sortedTrendingCoins} type={SET_ACTIVE_TRENDING_COIN} />)
}

export default TrendingCoinsSection;
