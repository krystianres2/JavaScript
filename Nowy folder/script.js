//TODO: Tworzymy klasę Coin zawierającą wszystkie niezbędne pola (wyświetlane później w tabeli) 
//class Coin
//TODO: Tworzymy tablicę listOfCoins, do której przypiszemy wszystkie pobrane z API coiny. 
//const listOfCoins;
let input=document.getElementById("input")
let input2=document.getElementById("input2")
let button=document.getElementById("button")
button.addEventListener("click", sprawdz);
function sprawdz(){
    let tem1=input.value;
    let tem2=input2.value;
    let tem3 = tem1+"%2B"+tem2;
    
    fetchData(tem3)
}
class Coin{
    constructor(name, country){
        
        this.name=name;
        this.country=country
    }
}
async function fetchData(xd){
    const url ='https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?location=%2B'+xd+'&radius=100';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd2f437d3ffmsh2d6fc063ae7a7fbp1b1a83jsn708210271d98',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
    displayData(JSON.parse(result))
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
// fetchData();

const mainDivElement = document.getElementById("manDiv");
const coinsTableElement = document.getElementById("coinsData");

function displayData(result){
    //TODO:Pobieramy liste/tablice obiektow typu Coin. I dodajemy wszystkie do listOfCoins.
    //Następnie przesyłamy tablicę listOfCoins do metody createTable.
    console.log(result)

    let listOfCoins=[];
    result.data.forEach(coin =>{
        const temp=new Coin(coin.name, coin.country);
        listOfCoins.push(temp);
    } )

    // createInfoBar(result.data.stats);
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
        coinsTableElement.innerHTML += 
        `
        <tr class="coinRow">
                    <td>${coin.name}</td>
                    <td>${coin.country}</td>
                </tr>
        `
        // const formattedPrice = new Intl.NumberFormat('en-US',
        //     { style: 'currency', currency: 'USD' }
        //     ).format(coin.price);
        // const formattedMarketCap = new Intl.NumberFormat('en-US',
        //     { style: 'currency', currency: 'USD' }
        //     ).format(coin.marketCap);
        // const formattedChange = parseFloat(coin.change);
        // let additionalClass;

        // if(formattedChange > 0){
        //     additionalClass = "greenText";
        // }
        // else if (formattedChange == 0){

        //     additionalClass = "";
        // }else{
        //     additionalClass = "redText";
        // }

        // coinsTableElement.innerHTML += 
        // `
        // <tr id="${coin.uuid}" class="coinRow">
        //             <td><i class="fa-regular fa-star"></i></td>
        //             <td>${coin.rank}</td>
        //             <td><img src="${coin.iconUrl}"> ${coin.name}</td>
        //             <td class="${additionalClass}">${formattedPrice}</td>
        //             <td class="${additionalClass}">${coin.change}</td>
        //             <td>${formattedMarketCap}</td>
        //         </tr>
        // `
    })
}



