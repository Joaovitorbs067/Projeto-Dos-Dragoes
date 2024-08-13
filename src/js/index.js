
        const botoesCarrossel = document.querySelectorAll(".botao");
        const imagens = document.querySelectorAll(".imagem");
        const informacoes = document.querySelectorAll(".informacoes")

    botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        desativarBotaoSelecionado();
        
        marcarBotaoSelecionado(botao);
        
        esconderImagemAtiva();
        
        mostrarImagemDeFundo(indice);
        
        escondendoAsInformacoesAtivas();
        
        mostrarInformacoes(indice);
    });
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function escondendoAsInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
