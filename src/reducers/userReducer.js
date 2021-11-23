import {
    BUY_COIN,
    SELL_COIN
} from '../actions/actions';

export const USERS_INITIAL_STATE = {
    loggedInUser: {
        name: 'John Doe',
        wallet: {
            balance: 500000,
            coins: [
                { id: 'bitcoin', count: 2, price: 3500 },
                { id: 'ethereum', count: 5, price: 100 },
                { id: 'ethereum', count: 10, price: 400 },
                { id: 'bitcoin', count: 3, price: 4500 },
                { id: 'bitcoin', count: 2, price: 7500 },
                { id: 'solana', count: 8, price: 10 },
                { id: 'solana', count: 8, price: 1 },
                { id: 'avalanche-2', count: 100, price: 100 },

            ]
        }
    }
}

export default function userReducer(state, action) {
    switch (action.type) {
        case BUY_COIN: {
            const { coinData: { count, amount, price, id } } = action;
            let coins = [...state.loggedInUser.wallet.coins, { id, count, price }];
            let balance = state.loggedInUser.wallet.balance - amount;
            return {
                ...state,
                loggedInUser: {
                    ...state.loggedInUser,
                    wallet: {
                        ...state.loggedInUser.wallet,
                        balance,
                        coins

                    }
                }
            }
        }

        case SELL_COIN: {
            const { res: { coinToSell, coinToSellCount, price } } = action;
            let balance,coins ;
            let coinIdx = state.loggedInUser.wallet.coins.findIndex((c) => {
                return c.id === coinToSell.id
            })
            let coin = { ...state.loggedInUser.wallet.coins[coinIdx] };
            coin.count -= coinToSellCount;
            coins = [
                ...state.loggedInUser.wallet.coins.slice(0,coinIdx),
                coin,
                ...state.loggedInUser.wallet.coins.slice(coinIdx + 1),
            
            ];
            balance =  state.loggedInUser.wallet.balance + coinToSellCount * price;
            return {
                ...state,
                loggedInUser: {
                    ...state.loggedInUser,
                    wallet: {
                        ...state.loggedInUser.wallet,
                        balance,
                        coins
                    }
                }
            }
        }

        default:
            return state;
    }
}