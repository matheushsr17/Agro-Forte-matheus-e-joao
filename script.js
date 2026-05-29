document.addEventListener("DOMContentLoaded", function() {
    
    // Ação 1: Rolagem suave ao clicar no botão do Banner
    const btnSaibaMais = document.getElementById("btn-saiba-mais");
    const secaoPilares = document.getElementById("pilares");

    btnSaibaMais.addEventListener("click", function() {
        secaoPilares.scrollIntoView({ behavior: "smooth" });
    });

    // Ação 2: Interceptando o envio do formulário de contato
    const formContato = document.getElementById("form-contato");

    formContato.addEventListener("submit", function(event) {
        // Evita que a página recarregue (comportamento padrão do form)
        event.preventDefault(); 

        // Captura os dados digitados
        const nome = document.getElementById("nome").
