document.getElementById("conversionForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    const amount = parseFloat(document.getElementById("amount").value);
    const currency = document.getElementById("currency").value;
    let conversionRate;

    // Establecer las tasas de cambio
    switch (currency) {
        case "eur":
            conversionRate = 0.85; // Ejemplo: 1 USD = 0.85 EUR
            break;
        case "gbp":
            conversionRate = 0.75; // Ejemplo: 1 USD = 0.75 GBP
            break;
        case "jpy":
            conversionRate = 110; // Ejemplo: 1 USD = 110 JPY
            break;
        case "cop":
            conversionRate = 4200;
            break;
        default:
            conversionRate = 1; // Sin conversión
    }

    const convertedAmount = (amount * conversionRate).toFixed(2);
    document.getElementById("result").innerText = `Resultado: ${convertedAmount} ${currency.toUpperCase()}`;
});
