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
	displayData(result);
} catch (error) {
	console.error(error);
}
}

fetchData();

function displayData(result){
    const parsedResult =JSON.parse(result);
    const listOfCoins = parsedResult.data.coins
    console.log(listOfCoins)

    const heroElement =document.getElementById("hero")
    heroElement.innerHTML += "<ol>"
    listOfCoins.forEach(coin =>{
        heroElement.innerHTML += `
            <li>
                <img width="25px" src="${coin.iconUrl}">${coin.name} Cena: ${coin.price}
            </li>
        `;
    });
    heroElement.innerHTML+= "</ol>"
    let num=1

    const bodyElement = document.getElementById("coinsTableData")
    listOfCoins.forEach(coin =>{
        bodyElement.innerHTML += `
            <tr>
                <td>${num++}</td>
                <td> <img width="25px" src="${coin.iconUrl}"></img></td>
                <td> ${coin.name}</td>
                <td> ${coin.price}</td>
                <td> ${coin.change}</td>
                <td> ${coin.marketCap}</td>
                <td> ${coin["24hVolume"]}</td>
            </tr>
        `;
    });
    
}
