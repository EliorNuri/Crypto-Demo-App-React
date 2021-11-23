import {
    INIT_COINS_DATA,
    SET_ACTIVE_NEW_COIN,
    SET_ACTIVE_TRENDING_COIN,
    INIT_PLATFORMS,
    INIT_TRANSACTION_COIN,
    SET_TRANSACTION_COIN,
    INIT_COIN_TO_SELL,
    TOGGLE_TRANSACTION_TAB
} from '../actions/actions';

export const INITIAL_STATE = {
    coins: [],
    platforms: [],
    activeTrendingCoin: {},
    activeNewCoin: {},
    transactionCoin: {},
    coinToSell: {},
    isShowTransactionTab:false
}

export default function cryptoReducer(state, action) {
    switch (action.type) {

        case INIT_COINS_DATA: {
            let { coins } = action;
            coins = JSON.parse(coins); // Getting String\
            return {
                ...state,
                coins
            }
        }

        case INIT_TRANSACTION_COIN: {
            const coin = state.coins[0];
            return {
                ...state,
                transactionCoin: coin,

            }
        }

        case INIT_PLATFORMS: {
            let { platforms } = action;
            platforms = JSON.parse(platforms);
            return {
                ...state,
                platforms
            }
        }

        case SET_ACTIVE_TRENDING_COIN: {
            let { coin } = action;
            return {
                ...state,
                activeTrendingCoin: coin,
                transactionCoin: coin
            }
        }

        case SET_TRANSACTION_COIN: {
            let { coin } = action;
            return {
                ...state,
                transactionCoin: coin
            }
        }


        case SET_ACTIVE_NEW_COIN: {
            let { coin } = action;
            return {
                ...state,
                activeNewCoin: coin,
                transactionCoin: coin

            }
        }

        case INIT_COIN_TO_SELL: {
            const { coin } = action;
            return {
                ...state,
                coinToSell: coin,

            }
        }

        case TOGGLE_TRANSACTION_TAB: {
            const isShowTransactionTab = !state.isShowTransactionTab ;
            return {
                ...state, 
                isShowTransactionTab
            }
        }

        default:
            return state;
    }
}