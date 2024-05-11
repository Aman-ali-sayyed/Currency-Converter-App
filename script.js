async function convertCurrency() {
    const apiKey = '432cca44fbf17caa0aba1c88'; // Replace with your API key
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Check if the input fields are not empty
    if (amount.trim() === '') {
        alert('Please enter an amount.');
        return;
    }

    const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data.rates || !data.rates[toCurrency]) {
            throw new Error('Invalid currency selection.');
        }

        const exchangeRate = data.rates[toCurrency];
        const convertedAmount = (amount * exchangeRate).toFixed(2);

        // Display the converted amount
        const resultElement = document.getElementById('result');
        resultElement.textContent = `${amount} ${fromCurrency} equals ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        console.error('Error converting currency:', error);
        alert('Error converting currency. Please check your input and try again.');
    }
}
