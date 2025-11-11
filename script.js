const dadosImoveis = {
    'imovel1': {
        titulo: 'Zulma Comfy Home',
        descricao: 'Apartamentos de 2 e 3 Quartos',
        endereco: '📍Av Espírito Santo, 495 -  Bairro dos estados.',
        contato: '(83) 991557336'
    },
    'imovel2': {
        titulo: 'KOA Nice Living',
        descricao: 'Apartamentos com 2 e 3 quartos e unidades decoradas.',
        endereco: '📍Rua Poeta Luiz Raimundo Batista de Carvalho - Jardim Oceania',
        contato: '(83) 991557336'
    },
    'imovel3': {
        titulo: 'TERROIR PRIVATE APARTMENTS',
        descricao: 'Apartamentos de 2, 3 e 4 suítes.',
        endereco: '📍R. Av. Roberto Marques 237 - JD Aeroclube',
        contato: '(83) 991557336'
    },
    'imovel4': {
        titulo: 'Maria Cristina Residence',
        descricao: 'Últimas quatro unidades de três quartos disponíveis.',
        endereco: 'R. Com. Aristides Costa, s/n - Jd. Cidade Universiária, João Pessoa - PB, 58052-240',
        contato: '(83) 991557336'
    },
    'imovel5': {
        titulo: 'Residencial Verano',
        descricao: 'O edifício conta com piscina para momentos de lazer e está em uma localização privilegiada, no coração do Jardim Oceania, próximo à praia e com fácil acesso às principais vias da cidade.',
        endereco: '🏡 Apartamento avulso nº 402 - Jardim Oceania, João Pessoa!',
        contato: '(83) 991557336'
    }
};

function mostrarDetalhes(idImovel) {
    const imovel = dadosImoveis[idImovel];
    const modal = document.getElementById('modal-detalhes');
    const conteudo = document.getElementById('detalhes-conteudo');

    if (imovel) {
        // Monta o HTML com as informações do imóvel
        conteudo.innerHTML = `
            <h3>${imovel.titulo}</h3>
            <p><strong>Descrição:</strong> ${imovel.descricao}</p>
            <p><strong>Endereço:</strong> ${imovel.endereco}</p>
            <p><strong>Contato:</strong> ${imovel.contato}</p>
        `;
        // Exibe o modal
        modal.style.display = 'block';
    }
}

function fecharDetalhes() {
    const modal = document.getElementById('modal-detalhes');
    // Esconde o modal
    modal.style.display = 'none';
}

// Opcional: Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('modal-detalhes');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}