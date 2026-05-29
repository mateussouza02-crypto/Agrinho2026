// Aguarda o DOM estar completamente carregado para rodar os scripts com segurança
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. FUNCIONALIDADE: MODO ESCURO (Dark Mode)
       ========================================================================== */
    const btnDarkMode = document.getElementById('toggle-dark-mode');
    
    // Escuta o clique no botão para alternar a classe no elemento principal (body)
    btnDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Altera visualmente o texto interno do botão para informar o estado atual
        if(document.body.classList.contains('dark-theme')) {
            btnDarkMode.textContent = "Modo Claro";
        } else {
            btnDarkMode.textContent = "Modo Escuro";
        }
    });

    /* ==========================================================================
       2. FUNCIONALIDADE: MENSAGENS DINÂMICAS E ANIMAÇÃO
       ========================================================================== */
    const btnSaibaMais = document.getElementById('btn-saiba-mais');
    const msgDinamica = document.getElementById('mensagem-dinamica');

    // Lista de mensagens ecológicas alternáveis para gerar dinamismo no clique
    const mensagensAgro = [
        "🌱 Fato: A tecnologia de precisão economiza até 30% de água na irrigação!",
        "🚜 Fato: O plantio direto evita a erosão e armazena carbono de forma natural no solo.",
        "☀️ Fato: Mais de 60% das fazendas modernas já investem em fontes alternativas de energia."
    ];

    let indiceMensagem = 0;

    btnSaibaMais.addEventListener('click', () => {
        // Esconde temporariamente a mensagem para resetar a animação CSS
        msgDinamica.classList.remove('show');
        
        // Define o texto de forma rotativa usando o resto da divisão pelo tamanho do array
        msgDinamica.textContent = mensagensAgro[indiceMensagem];
        indiceMensagem = (indiceMensagem + 1) % mensagensAgro.length;
        
        // Pequeno delay para garantir que o navegador processe a transição suave de entrada
        setTimeout(() => {
            msgDinamica.classList.add('show');
        }, 100);
    });

    /* ==========================================================================
       3. FUNCIONALIDADE: VALIDAÇÃO SIMPLES DE FORMULÁRIO
       ========================================================================== */
    const formContato = document.getElementById('form-contato');
    const formFeedback = document.getElementById('form-feedback');

    formContato.addEventListener('submit', (evento) => {
        // Impede que a página recarregue ao submeter o formulário de forma padrão
        evento.preventDefault();

        // Captura os valores dos inputs limpando espaços em branco nas pontas
        const valorNome = document.getElementById('nome').value.trim();
        const valorEmail = document.getElementById('email').value.trim();

        // Validação condicional simples
        if (valorNome === "" || valorEmail === "") {
            formFeedback.style.color = "#d9534f"; // Vermelho de erro
            formFeedback.textContent = "⚠️ Por favor, preencha todos os campos obrigatórios.";
        } else if (!valorEmail.includes("@") || !valorEmail.includes(".")) {
            formFeedback.style.color = "#d9534f"; 
            formFeedback.textContent = "⚠️ Formato de e-mail inválido. Verifique o '@' e o ponto.";
        } else {
            // Caso de sucesso total
            formFeedback.style.color = "#2a9d8f"; // Verde de sucesso
            formFeedback.textContent = `🎉 Obrigado, ${valorNome}! Inscrição realizada com sucesso para o e-mail: ${valorEmail}.`;
            
            // Limpa os campos do formulário após o envio bem-sucedido
            formContato.reset();
        }
    });
});
