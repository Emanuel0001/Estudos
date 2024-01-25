
# Resumo do Git e Seu Funcionamento:

O Git é um sistema de controle de versão distribuído, projetado para rastrear e gerenciar alterações em projetos de software. Aqui estão os principais conceitos e funcionamentos:

1.  **Repositório:**
    
    -   Um repositório Git é uma estrutura que armazena o histórico completo de um projeto.
2.  **Commits:**
    
    -   As alterações no código são registradas como "commits".
    -   Cada commit possui um identificador único (hash) e uma mensagem descritiva.
3.  **Branches:**
    
    -   Branches são ramificações no histórico do projeto, permitindo o desenvolvimento paralelo.
    -   A branch principal (geralmente "main") representa a versão estável do código.
    
## Git remote / qual é o remote do meu repositório ?

Um controle remoto no Git é um repositório comum que todos os membros da equipe usam para trocar suas alterações. Na maioria dos casos, esse repositório remoto é armazenado em um serviço de hospedagem de código como o GitHub ou em um servidor interno. Ao contrário de um repositório local, um remoto normalmente não fornece uma árvore de arquivos do estado atual do projeto.

origin git@github.com:Emanuel0001/sistema-de-usuario.git (fetch)

origin git@github.com:Emanuel0001/sistema-de-usuario.git (push)

# lista de comandos do Git

## **1. Inicializar um Novo Repositório Git:**

bashCopy code

    `git init` 

Este comando cria um novo repositório Git no diretório local, preparando-o para o controle de versão.

##  **2. Adicionar Alterações ao Índice:**

bashCopy code

    `git add .`

 

Adiciona todas as alterações no diretório de trabalho ao índice, facilitando a preparação para o próximo commit.

##  **3. Verificar o Estado Atual do Repositório:**

bashCopy code

    `git status` 

Mostra o estado atual das mudanças no repositório, destacando arquivos modificados, adicionados ou não rastreados.

##  **4. Realizar o Primeiro Commit:**

bashCopy code

`git commit -a -m "first commit"` 


Realiza um commit de todas as alterações adicionadas ao índice, fornecendo uma mensagem descritiva.

##  **5. Adicionar um Repositório Remoto:**

bashCopy code

    `git remote add origin https://link` 

Adiciona um repositório remoto chamado "origin" com o URL fornecido.

##  **6. Renomear a Branch Principal:**

bashCopy code

    `git branch -M main` 

Renomeia a branch principal para "main".

##  **7. Enviar Alterações para o Repositório Remoto:**

bashCopy code

    `git push -u origin main` 

Envia as alterações ao repositório remoto, definindo "main" como a branch padrão.

## **8. Criar e Mudar para uma Nova Branch:**

bashCopy code

    `git checkout -b "nome da branch"` 

Cria e muda para uma nova branch com o nome especificado.

##  **9. Enviar uma Nova Branch para o Repositório Remoto:**

bashCopy code

    `git push --set-upstream origin style/correcao-e-estilizacao`

 

Envia a branch local "style/correcao-e-estilizacao" para o repositório remoto e a define como upstream.

##  **10. Mudar para a Branch Principal:**

bashCopy code

    `git checkout main` 

Muda para a branch principal "main".

##  **11. Listar Todas as Branches:**

bashCopy code

    `git branch` 

Lista todas as branches no repositório, destacando a branch atual.

##  **12. Realizar Merge de uma Branch:**

bashCopy code

    `git merge style/correcao-e-estilizacao` 

Realiza o merge da branch "style/correcao-e-estilizacao" na branch atual.

##  **13. Atualizar o Repositório Local com Alterações Remotas:**

bashCopy code

    `git pull` 

Atualiza o repositório local com as mudanças do repositório remoto.

## **14. Clonar um Repositório Remoto:**

bashCopy code

    `git clone url pastaDestino` 

Clona um repositório remoto para um diretório local especificado.

##  **15. Remover Arquivos Não Rastreados do Diretório de Trabalho:**

bashCopy code

    `git clean -f` 

Remove forçadamente arquivos não rastreados do diretório de trabalho.

##  **16. Desfazer Alterações Não Confirmadas em um Arquivo:**

bashCopy code

    git checkout ./index.html

Desfaz as alterações não confirmadas no arquivo "index.html".

## **17. Exibir o Histórico de Commits:**

bashCopy code

    `git log` 

Exibe o histórico de commits do repositório, detalhando informações como autor, data e mensagem de commit.

