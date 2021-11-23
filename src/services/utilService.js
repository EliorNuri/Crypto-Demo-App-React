import { MS_PER_DAY } from './constatnsService';
import { SET_ACTIVE_NEW_COIN, SET_ACTIVE_TRENDING_COIN } from '../actions/actions';

async function fetchData(url) {
    let res = await fetch(url);
    let data = await res.text();
    return data;
}

function formatToUpperCase(str) {
    return str ? str.toUpperCase() : '';
}

function formatFirstLetterUpperCase(str) {
    return str ? str.substring(0, 1).toUpperCase() + str.substring(1) : '';
}

function formatPrice(price) {

    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 1, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
    });

    // formatter.format(2500); /* $2,500.00 */

    return formatter.format(price);
}

function formatCoinCount(ammount) {
    let str = (ammount === 1) ? " coin" : " coins";
    return (ammount + str);
}

function formatPricePercentage(pricePercentage) {
    let percentage = pricePercentage.toFixed(1);
    let trendSign = pricePercentage < 0 ? "" : "+";
    return trendSign + percentage + "%";
}

//One Value Per Day
function setChartData(data) {
    const DAYS_COUNT = 7; // Days Count to show
    const timePeriods = data.length; // 7 days * 24 horus = data.count = timePeriods
    let filterdData, revMyArr;

    //One Value Per Day
    filterdData = data.filter((d, idx) => {
        return idx === 0 || ((idx + 1) % Math.floor(timePeriods / DAYS_COUNT) === 0)
    });

    return filterdData.map((d, idx) => {
        let ms = Date.now();
        let date = new Date(ms - (idx * MS_PER_DAY));

        let [s, mon, day] = date.toDateString().split(" ");

        return {
            name: s + ", " + mon + " " + day,
            uv: d
        }
    })
}

function reverseArr(array) {
    return array.map((item, idx) => array[array.length - 1 - idx])
}

function sortByTrending(coins) {
    let coinsCopy = coins.map(coin => coin);
    return coinsCopy.sort((a, b) => {
        return (b.market_cap_change_percentage_24h - a.market_cap_change_percentage_24h)
    })
}

function sortByCreationDate(coins) {
    let coinsCopy = coins.map(coin => coin);
    return coinsCopy.sort((a, b) => {
        return (new Date(b.atl_date).getMilliseconds() - new Date(a.atl_date).getMilliseconds());
    })
}

function checkIsTrendDescent(coin) {
    return coin["market_cap_change_percentage_24h"] < 0;
}

function checkIsActiveCoinPreview(type, store, coin) {

    switch (type) {
        case SET_ACTIVE_NEW_COIN: {
            return checkIsSameCoin(store["activeNewCoin"], coin);
        }
        case SET_ACTIVE_TRENDING_COIN: {
            return checkIsSameCoin(store["activeTrendingCoin"], coin);
        }
        default:
            break;
    }

}

function calcSumWalletCoinsValue(walletCoints, coins) {
    let sum = 0;
    walletCoints.forEach((wc) => {
        const { current_price } = coins.find((c) => c.id === wc.id);
        sum += current_price * wc.count;
    });
    return formatPrice(sum);
}

function checkIsSameCoin(storeCoin, currCoin) {
    return storeCoin.id === currCoin.id;
}

function checkIsStoreCoinEmpty(storeCoin) {
    return Object.keys(storeCoin).length === 0;
}

function checkWalletCoinTrend(wc, currCoinData) {
    const percentage = currCoinData.current_price / wc.price;
    return [percentage >= 1, percentage];
}

function removeDuplicateMyCoins(arr) {
    var obj = {};

    arr.forEach((item) => {
        if (!obj[item.id]) obj[item.id] = item.count;
        else obj[item.id] += item.count;
    })

    return Object.keys(obj).map((id) => {
        return { id, count: obj[id] }
    })
}

function shuffle(array) {
    const copyArr = array.map((item) => item);

    for (var i = copyArr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copyArr[i];
        copyArr[i] = copyArr[j];
        copyArr[j] = temp;
    }
    return copyArr;
}

const exportedObj = {
    fetchData,
    formatToUpperCase,
    formatPrice,
    formatPricePercentage,
    setChartData,
    reverseArr,
    sortByTrending,
    sortByCreationDate,
    checkIsTrendDescent,
    checkIsActiveCoinPreview,
    formatCoinCount,
    removeDuplicateMyCoins,
    formatFirstLetterUpperCase,
    checkWalletCoinTrend,
    calcSumWalletCoinsValue,
    shuffle
}

export default exportedObj;