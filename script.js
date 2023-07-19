// Chave de API e segredo
const apiKey = '1308061d-67d4-45ab-9b88-ec800739e11d';
const apiSecret = '65de1f818be32aa7ffa5f666b699382eae58b36d6ea3549c4282a36b52d9f104f2ac877ce763e4f7040cec02dea75896d459645623d7b2deff71ff437c58adebb6cb9fb3df9352211095def1bea9ad50361190e411ea42243cae82daa45575fef9482d27d7ac82fb2c9d065b523cfbd5';

// URL da API
const apiUrl = 'https://api.astronomy.com/planet_position';

// Obter data atual
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0]; // Formato: AAAA-MM-DD

// Elementos HTML
const planetList = document.getElementById('planet-list');
const moonPosition = document.getElementById('moon-position');
const sunSign = document.getElementById('sun-sign');

// Função para fazer a solicitação à API
async function fetchPlanetData() {
    try {
        // Montar a URL da solicitação com os parâmetros necessários
        const url = `${apiUrl}?date=${formattedDate}&api_key=${apiKey}&api_secret=${apiSecret}`;

        // Fazer a solicitação GET à API
        const response = await fetch(url);
        const data = await response.json();

        // Extrair as informações dos planetas e do signo da resposta
        const planets = data.planets;
        const moon = data.moon;
        const sun = data.sun;

        // Atualizar a lista de planetas
        planets.forEach(planet => {
            const li = document.createElement('li');
            li.textContent = `${planet.name}: ${planet.position} radianos`;
            planetList.appendChild(li);
        });

        // Atualizar a posição da Lua
        moonPosition.textContent = `Lua: ${moon.position} radianos`;

        // Atualizar o signo do Sol
        sunSign.textContent = `Signo: ${sun.sign}`;

    } catch (error) {
        console.error('Erro ao obter dados dos planetas:', error);
    }
}

// Chamar a função para obter os dados dos planetas ao carregar a página
fetchPlanetData();
