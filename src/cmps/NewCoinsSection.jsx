import React, {useContext} from 'react'
import CoinsList from './CoinsList';
import utilService from '../services/utilService';
import { storeContext } from '../App';
import {SET_ACTIVE_NEW_COIN} from '../actions/actions';

function NewCoinsSection() {
    const { state } = useContext(storeContext);
    const sortedNewCoins = utilService.sortByCreationDate(state.coins);
    return ( <CoinsList coins={sortedNewCoins} type={SET_ACTIVE_NEW_COIN} />)
}

export default NewCoinsSection
