function abrirConversao(titulo) {
    // Variáveis para os valores padrão
    var valorBTC = 62506.90;
    var valorETH = 3046.66;
    var valorADA = 0.45;
    var valorDOGE = 0.15;
    var valorUSDT = 1;

    // Abrir uma nova janela com as configurações especificadas
    var novaJanela = window.open("", "_blank", "width=400,height=350");

    // Conteúdo da nova janela
    novaJanela.document.write(`
        <html>
        <head>
            <title>Conversão de CryptoMoeda</title>
            <style>
                body { font-family: Arial, sans-serif; }
                label { display: block; margin-bottom: 5px; }
                input[type="number"] { width: 100%; padding: 5px; margin-bottom: 10px; }
                button { padding: 8px 15px; background-color: #007bff; color: #fff; border: none; cursor: pointer; }
                button:hover { background-color: #0056b3; }
            </style>
        </head>
        <body>
            <h1>Quantidade de ${titulo}</h1>
            <label for="valorCryp">Quantidade de ${titulo}:</label>
            <input type="number" id="valorCryp" step="0.01" oninput="converter(this.value, '${titulo}')">
            <label for="valorReal">Valor em Dolar:</label>
            <input type="number" id="valorDolar" step="0.01" disabled>
            <label for="valorReal">Valor em Reais:</label>
            <input type="number" id="valorReal" step="0.01" disabled>
            <script>
                function converter(valorCryp, titulo) {
                    var valorDolar;
                    if (titulo === "BTC") {
                        valorDolar = valorCryp * ${valorBTC};
                    } else if (titulo === "ETH") {
                        valorDolar = valorCryp * ${valorETH};
                    } else if (titulo === "ADA") {
                        valorDolar = valorCryp * ${valorADA};
                    } else if (titulo === "DOGE") {
                        valorDolar = valorCryp * ${valorDOGE};
                    } else if (titulo === "USDT") {
                        valorDolar = valorCryp * ${valorUSDT};
                    }

                    var valorReal = valorDolar * 5.26; // Estou considerando o dolar 5.26
                    document.getElementById("valorDolar").value = valorDolar.toFixed(2);
                    document.getElementById("valorReal").value = valorReal.toFixed(2);
                }
            </script>
        </body>
        </html>
    `);
}