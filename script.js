const fetch = require('node-fetch'); // Se estiver usando Node.js, instale o módulo "node-fetch" antes.

// Chave de API
const apiKey = '	5e4c9b2f-9b2b-445e-8668-a991c41692d5';

// ID do corpo celeste (por exemplo, 'moon' para a Lua)
const bodyId = 'moon';

// URL da API
const apiUrl = `https://api.astronomyapi.com/v2/bodies/${bodyId}`;

// Fazer a solicitação à API para obter informações sobre o corpo celeste
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
