
Quando estamos trabalhando em um projeto utilizando o versionamento Git e a IDE VSCode, ao adicionar ou alterar algum arquivo aparece uma sinalização ao lado do nome desses arquivos no VSCode, como podemos ver na imagem abaixo:

![Imagem com print do VSCode, da lateral esquerda que lista a estrutura de arquivos do projeto. Na imagem temos um arquivo chamado index.html com a sinalização de uma letra M ao lado direito e um arquivo chamado README.md com a sinalização de uma letra U ao lado direito.](https://cdn1.gnarususercontent.com.br/1/1221554/5afdb0f3-f5cc-46b3-88f6-0062f51cbc0c.png)

Mas o que isso significa?

-   **M**: A letra M representa o estado  _Modified_, do português modificado. Isso significa que o arquivo já existia no repositório, mas que recebeu alguma modificação que ainda não foi registrada no Git.
    
-   **U**: A letra U representa o estado  _Untracked_, do português não rastreado. Isso significa que o arquivo ainda não existia no repositório e que ainda não teve seu registro (commit) feito no Git.
    

Essa sinalização nos ajuda a entender o estado atual dos nossos arquivos do projeto no versionamento Git.