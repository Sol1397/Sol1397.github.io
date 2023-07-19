// Chave de API e segredo
const apiKey = 'ca88e474-98fb-4236-a1b9-2aa52bb135b4';
const apiSecret = '65de1f818be32aa7ffa5f666b699382eae58b36d6ea3549c4282a36b52d9f104f2ac877ce763e4f7040cec02dea75896d459645623d7b2deff71ff437c58adeb71a27785aa81eb9a1aaf4fee78e68985da2646cc631c490e83e05df1d3fa8fe125821e25690be5e36ba61291d945f2e5';

// URL da API
const apiUrl = 'https://api.astronomyapi.com/v2/signs';

// Elemento HTML para exibir os dados dos planetas
const planetDataElement = document.getElementById('planet-data');

// Data inicial e final (formato: AAAA-MM-DD)
const startDate = '2023-01-01';
const endDate = '2023-01-07';

// Fazer a solicitação à API para obter os dados dos planetas
fetch(`${apiUrl}?start_date=${startDate}&end_date=${endDate}`, {
  headers: {
    'Authorization': `Basic ${btoa(`${apiKey}:${apiSecret}`)}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Processar os dados dos signos
    const signs = data.signs;
    let planetHtml = '';

    signs.forEach(sign => {
      planetHtml += `<p>${sign.planet}: ${sign.sign}</p>`;
    });

    // Exibir os dados dos signos no elemento HTML
    planetDataElement.innerHTML = planetHtml;
  })
  .catch(error => {
    console.error('Erro ao obter dados dos signos:', error);
  });
