Quando falamos de APIs como “pontos de contato” entre aplicações, é importante notar que este contato se dá justamente através de cada uma das URLs utilizadas, que dentro do contexto da API chamamos de “rotas”.

URLs (_Uniform Resource Locator_  ou “localizador uniforme de recursos”, em tradução livre) são compostas por várias partes. Durante o último vídeo utilizamos uma dessas partes, que chamamos de  _query parameters_  ou “parâmetros de consulta”.

Vamos revisar e identificar as partes de uma URL utilizando como exemplo uma busca no site da Alura:

```bash
https://cursos.alura.com.br:443/search?query=express

```

-   `https://`  é o protocolo de comunicação utilizado.
-   `cursos.alura.com.br`  é o  **host**, composto por  **subdomínio**  (`cursos`) e  **domínio**  (`alura.com.br`).
-   `:443/`  é a porta utilizada na comunicação.  `443`  é a porta usada para conexões do tipo HTTPS e o número é normalmente suprimido na visualização padrão do navegador. No caso de conexões HTTP, a porta utilizada é a  `80`.
-   `search`  é a rota ou  _path_  (“caminho”), assim como nossa API tem as rotas  `livros`  e  `autores`. Rotas de APIs, como a que estamos trabalhando, normalmente são “abstrações” referentes aos recursos. Porém, as rotas também podem ser usadas para a localização de recursos no servidor, por exemplo,  `/pages/sobre.html`  para exibir a página  `sobre`  no navegador.
-   `?query=express`  são os  **query parameters**  ou parâmetros de busca. Note que os parâmetros de busca sempre iniciam com  `?`. Uma URL pode conter vários parâmetros encadeados, separados por  `&`. Por exemplo,  `?query=express&type=curso&formacao=node`.

URLs também podem conter  _fragments_  ou  _anchors_, comumente utilizadas em front-end como marcadores para determinadas partes de uma página e que não são enviadas ao servidor nas requisições.

A partir de agora, observe as URLs dos sites que visita e tente identificar cada uma das partes sendo utilizadas de diferentes formas!

Confira também o  [Artigo Estrutura de uma URL](https://www.alura.com.br/artigos/estrutura-url)  para se aprofundar no tema.