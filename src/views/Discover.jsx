import React, { useContext, useState } from 'react';
import SearchInput from '../cmps/SearchInput';
import CoinBasePreview from '../cmps/CoinBasePreview';
import { storeContext } from '../App';
import utilService from '../services/utilService';
import {RiCompassDiscoverFill} from 'react-icons/ri';

function Discover() {
    const [rndNum, setRndNum] = useState(Math.random());
    const { state: { coins } } = useContext(storeContext);
    const shuffleCoins = utilService.shuffle(coins);

    const elCoinsFirstCol = shuffleCoins.slice(0,7).map((c) => {
        return (<CoinBasePreview coin={c} />);
    })
    const elCoinsSecondCol = shuffleCoins.slice(7,14).map((c) => {
        return (<CoinBasePreview coin={c} />);
    })
    function forceUpdate(){
        setRndNum(Math.random());
    }

    return (
        <div className="discover-container">
            <div className="discover-header flex row center space-between">
                <div className="content-header flex column">
                    <h1>Discover</h1>
                    <h3>explore new opportunities</h3>
                </div>
                <div className="base-btn" onClick={forceUpdate}>
                    <span className="icon-wrapper"><RiCompassDiscoverFill /></span>
                </div>
                {/* <SearchInput /> */}
            </div>
            <div className="coins-list-container flex row center space-between">
                <div>
                    {elCoinsFirstCol}
                </div>
                <div className="seprator">

                </div>
                <div>
                    {elCoinsSecondCol}
                </div>
            </div>
        </div>
    )
}

export default Discover;
