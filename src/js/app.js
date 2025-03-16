import { destinos } from "./dataset.js"; // não apague esta linha


async function carregarDados() {
    try {
        // Faz a requisição GET ao arquivo local JSON
        const resposta = await fetch([
            {
                "id": 1,
                "nome": "Aracati",
                "estado": "CE"
            },
            {
                "id": 2,
                "nome": "Bonito",
                "estado": "MS"
            },
            {
                "id": 3,
                "nome": "Guarapari",
                "estado": "ES"
            }
        ]);
        
        // Converte para JSON
        const dados = await resposta.json();

        // Seleciona o elemento da lista
        const lista = document.getElementById("lista");

        // Insere os itens no HTML
        dados.forEach(destino => {
            const item = document.createElement("li");
            item.textContent = `${destino.nome} - ${destino.estado}`;
            lista.appendChild(item);
        });

    } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
    }
}

// Chama a função para carregar os dados
carregarDados();