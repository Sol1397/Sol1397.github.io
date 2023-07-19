// Chave de API e segredo
const apiKey = 'b7daeecf-94a8-47b8-93d7-9a1bf9f2192a';
const apiSecret = '65de1f818be32aa7ffa5f666b699382eae58b36d6ea3549c4282a36b52d9f104f2ac877ce763e4f7040cec02dea75896d459645623d7b2deff71ff437c58adeb84171e00a56c91c017d60801abd65d1baf230f592cf26154623fe67df314b58eb19a12a7d4ec5ad37c8aa04439dd9f69';

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
