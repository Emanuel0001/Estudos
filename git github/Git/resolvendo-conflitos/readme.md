
## Resolvendo conflitos no Merge Editor

No exemplo a seguir, nós temos duas versões de um código na branch  `main`: uma no repositório do github e outra modificação diferente no ambiente local. Ao realizarmos o  `git -push`  para a branch  `main`, ocorreu um  **conflito**  e precisamos resolvê-lo para que a atualização suba para o repositório no github corretamente, como a imagem nos apresenta:

![ ](https://cdn1.gnarususercontent.com.br/1/766890/6278fd28-f0f7-4864-96ac-111bcd929e22.png)Para solucionarmos o problema, clicamos na opção “Resolve in Merge Editor”, como no print abaixo:

![Captura de tela que apresenta um botão com o texto "Resolve in Merge Editor"](https://cdn1.gnarususercontent.com.br/1/766890/24d05f33-c997-495c-9899-79d193962ab2.png)

Após o clique, somos redirecionados para outra aba que apresenta as modificações no arquivo, vamos entender o que cada opção significa:

![Uma captura de tela representando o editor de mesclagem, uma ferramenta usada para resolver conflitos e mesclar versões de código de maneira integrada. Temos uma nova aba chamada "merging: index.html". Há a divisão da tela em três partes: Incoming, Current, Result. No canto inferior direito da tela há um botão "complete merge"](https://cdn1.gnarususercontent.com.br/1/766890/54aaf673-9ca2-422d-a21e-daa1ff78464a.png)

A tela do Visual Studio Code está dividida em três partes:

-   **Incoming (remoto)**: modificações que chegam do repositório remoto.
    
-   **Current (local)**: modificações locais.
    
-   **Result (resultado)**: resultado do  `merge`, ou seja, a resolução dos conflitos de mesclagem. É o estado atual do arquivo.
    

> Os quadrados na cor amarela em volta do código no campo “Incoming” e “Current” são  **marcadores de conflito**: exibem o conteúdo que apresenta conflito no arquivo.

## Campo Incoming

**->**  No  **campo “Incoming”,**  acima da linha de código dos marcadores de conflito no campo há outras opções que resultam na alteração do código atual:

-   **Accept Incoming**: aceita modificações oriundas do  **remoto**

![Captura de tela com o campo Incoming, Current, e o Result com o código do campo Incoming](https://cdn1.gnarususercontent.com.br/1/766890/61948d1f-45ee-40dd-91fb-93c2cd4349ac.png)

-   **Accept Combination Incoming First**: realiza a combinação com as linhas do código do repositório remoto no topo.

![Captura de tela com o campo Incoming, Current, e o Result com o código do campo Incoming e Current respectivamente](https://cdn1.gnarususercontent.com.br/1/766890/afe12393-1760-4aaa-bd3e-177a934264d1.png)

-   **Ignore:**  ignora as modificações.

## Campo Current

**->**  O campo  **“Current”**  trabalha com as modificações locais do documento.

-   **Accept Current**: Aceita a modificação local no resultado do documento
    
-   **Accept combination Current First**: Aceita a combinação local + remoto. Nos resultados a linha de código com a tag  `<h2>`  fica antes de  `<h1>`, comprovando que o código local é inserido primeiro que o remoto.
    

![Captura de tela com o campo Incoming, Current, e o Result com o código do campo Current e Incoming respectivamente](https://cdn1.gnarususercontent.com.br/1/766890/08c39d10-b080-4bce-8a84-f3aeaccfa9f3.png)

-   **Ignore**: ignora as modificações no resultado no final.

**Após selecionarmos a opção com o resultado desejado, devemos:**

1.  Salvar o arquivo
2.  Clicar no botão “complete Merge”
3.  Realizar o commit das modificações
4.  Sincronizar as modificações para realizar o push.