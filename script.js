// Chave de API
const apiKey = '5e4c9b2f-9b2b-445e-8668-a991c41692d5';

// ID do corpo celeste (no caso da Lua é 'moon')
const bodyId = 'moon';

// URL da API
const apiUrl = `https://api.astronomyapi.com/v2/bodies/${bodyId}`;

// Fazer a solicitação à API para obter informações sobre a Lua
fetch(apiUrl, {
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Exibir as informações retornadas
    console.log(data);
  })
  .catch(error => {
    console.error('Erro ao obter informações:', error);
  });
