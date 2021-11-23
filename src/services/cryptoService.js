import utilSevice from './utilService';

//There is No Api Key
const BASE_URL_COINS = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=30d';
const BASE_URL_PLATFORMS = 'https://api.coingecko.com/api/v3/exchanges';

const exportedObj = {
    getCryptoCurrenciesData,
    getPlatformsData
}

async function getCryptoCurrenciesData(){
    return utilSevice.fetchData(BASE_URL_COINS);
}

async function getPlatformsData(){
    return utilSevice.fetchData(BASE_URL_PLATFORMS);
}

export default exportedObj;