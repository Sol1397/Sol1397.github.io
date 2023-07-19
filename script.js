// Chave de API e segredo
const apiKey = '8d207c60-4d6d-4468-867e-ed57237b7043';
const apiSecret = '65de1f818be32aa7ffa5f666b699382eae58b36d6ea3549c4282a36b52d9f104f2ac877ce763e4f7040cec02dea75896d459645623d7b2deff71ff437c58adeb07eebcdd659c11581acfbd00b2a15a439f862b43f167acc1de9afac03871e94a0ab08e4e73d41525f99af381eb23fafcm';

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
