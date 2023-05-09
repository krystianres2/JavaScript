//TODO: Tworzymy klasę Coin zawierającą wszystkie niezbędne pola (wyświetlane później w tabeli) 
//class Coin
//TODO: Tworzymy tablicę listOfCoins, do której przypiszemy wszystkie pobrane z API coiny. 
//const listOfCoins;
class Coin{
    constructor(uuid,name,  rank, iconUrl, price, marketCap, change){
        this.uuid=uuid;
        this.name=name;
        this.rank=rank;
        this.iconUrl=iconUrl;
        this.price=price
        this.marketCap=marketCap;
        this.change=change
    }
}
async function fetchData(){
    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'd2f437d3ffmsh2d6fc063ae7a7fbp1b1a83jsn708210271d98',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        displayData(JSON.parse(result));
    } catch (error) {
        console.error(error);
    }
    
}

async function fetchCoinDetails(coinId){
    console.log(coinId);
    const url = `https://coinranking1.p.rapidapi.com/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '92cafd2032msh75252a91a66893ap1128bdjsn75fcdc8c70ba',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
//fetchCoinDetails("Qwsogvtv82FCd");
fetchData();

const mainDivElement = document.getElementById("manDiv");
const coinsTableElement = document.getElementById("coinsData");

function displayData(result){
    //TODO:Pobieramy liste/tablice obiektow typu Coin. I dodajemy wszystkie do listOfCoins.
    //Następnie przesyłamy tablicę listOfCoins do metody createTable.
    console.log(result)

    let listOfCoins=[];
    result.data.coins.forEach(coin =>{
        const temp=new Coin(coin.uuid, coin.name, coin.rank, coin.iconUrl, coin.price, coin.marketCap, coin.change);
        listOfCoins.push(temp);
    } )

    createInfoBar(result.data.stats);
    createTable(listOfCoins);
}

function createInfoBar(stats){
    const infoBarElement = document.getElementById("infoBar");
    infoBarElement.innerHTML = `
        <span>Cryptos <a href="#">${stats.totalCoins}</a></span>
        <span>Exchanges <a href="#">${stats.totalExchanges}</a></span>
        <span>24h Volume <a href="#">${stats.total24hVolume}</a></span>    
        <span>Market Cap <a href="#">${stats.totalMarketCap}</a></span>    
    `;
}

function createTable(coinsList){
    coinsList.forEach(coin => {
        const formattedPrice = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
            ).format(coin.price);
        const formattedMarketCap = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
            ).format(coin.marketCap);
        const formattedChange = parseFloat(coin.change);
        let additionalClass;

        if(formattedChange > 0){
            additionalClass = "greenText";
        }
        else if (formattedChange == 0){
            additionalClass = "";
        }else{
            additionalClass = "redText";
        }

        coinsTableElement.innerHTML += 
        `
        <tr id="${coin.uuid}" class="coinRow">
                    <td><i class="fa-regular fa-star"></i></td>
                    <td>${coin.rank}</td>
                    <td><img src="${coin.iconUrl}"> ${coin.name}</td>
                    <td class="${additionalClass}">${formattedPrice}</td>
                    <td class="${additionalClass}">${coin.change}</td>
                    <td>${formattedMarketCap}</td>
                </tr>
        `
    })
}



