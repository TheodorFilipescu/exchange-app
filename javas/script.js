function convertCurrency() {
  var amount = parseFloat(document.getElementById('amount').value);
  var currency = document.getElementById('currency').value;
  var conversion = document.getElementById('conversion').value;
  var apiKey = '9330e572344a4027b9913026efc65268'; // Inlocuieste cu cheia de acces

  var url = 'https://openexchangerates.org/api/latest.json?app_id=' + apiKey;

  // Efectuează cererea către API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      var exchangeRates = data.rates;
      var convertedAmount = amount * (exchangeRates[conversion] / exchangeRates[currency]);

      document.getElementById('result').textContent = convertedAmount.toFixed(2) + ' ' + conversion;
    })
    .catch(error => {
      console.log('A apărut o eroare: ' + error);
    });
}
