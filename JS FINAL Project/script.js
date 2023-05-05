const baseCurrency = document.querySelector("#base-currency");
const amountValue = document.querySelector("#amount");
const targetCurrency = document.querySelector("#target-currency");
const convertedAmount = document.querySelector("#converted-amount");
const historicalButton = document.querySelector("#historical-rates");
const historicalResults = document.querySelector("#historical-rates-container");
const saveFavoriteButton = document.getElementById('save-favorite');
const favoriteCurrencyPairs = document.getElementById('favorite-currency-pairs');
let savedCurrencyPairs = JSON.parse(localStorage.getItem('savedCurrencyPairs')) || [];

let myHeaders = new Headers ();
myHeaders.append("apiKey", "hwJ9p1dH4JyXxvE92dSPBgFvjtQays7J");

let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  .then(response => response.json())
  .then((data) => {
    let baseCurrencyList = document.querySelector("#base-currency");
    let targetCurrencyList = document.querySelector("#target-currency");
    for (let symbol in data.symbols) {
      let option = document.createElement("option");
      option.value = symbol;
      option.text = symbol;
      baseCurrencyList.appendChild(option);
      const targetOption = option.cloneNode(true);
      targetCurrencyList.appendChild(targetOption);
    }
  })
  .catch(error => console.log('error', error));

  [baseCurrency, amountValue, targetCurrency].forEach(input=> {
    input.addEventListener('change', () => {
      const from = baseCurrency.value;
      const to = targetCurrency.value;
      const amount = amountValue.value;
  
      fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        let result = data.result;
        convertedAmount.textContent = result.toFixed(2) + " " + targetCurrency.value;
        console.log(result);
      })
      .catch(error => console.log('error', error));
    })
  })
 
  historicalButton.addEventListener("click", () => {
    const baseCurrency = document.querySelector("#base-currency").value;
    const targetCurrency = document.querySelector("#target-currency").value;
    const date = "2023-01-01";
  
  
    fetch(`https://api.apilayer.com/exchangerates_data/${date}?symbols=${targetCurrency}&base=${baseCurrency}`, requestOptions)
    .then(response => response.json())
    .then(data => {
      const rates = data.rates;
      let rate = 0;
      for (let currency in rates) {
        if(currency === targetCurrency) {
          rate = rates[currency];
          break;
        }
      }
      historicalResults.textContent = `Historical exchange rate on ${date}: 1 ${baseCurrency} = ${rate} ${targetCurrency}`;
    })
    .catch(error => console.log('error', error));
  });

  saveFavoriteButton.addEventListener("click", () => {
    const base = baseCurrency.value;
    const target = targetCurrency.value;
    const pair = `${base}/${target}`;
    if (!savedCurrencyPairs.includes(pair)) {
      savedCurrencyPairs.push(pair);
      localStorage.setItem('savedCurrencyPairs', JSON.stringify(savedCurrencyPairs));
      const button = document.createElement('button');
      button.textContent = pair;
      button.addEventListener('click', () => {
        const [newBase, newTarget] = button.textContent.split('/');
        baseCurrency.value = newBase;
        targetCurrency.value = newTarget;
      });
      favoriteCurrencyPairs.appendChild(button);
    }
  });  