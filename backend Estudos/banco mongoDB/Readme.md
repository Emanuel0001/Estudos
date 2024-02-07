## Conectando o Banco MongoDB à API

Como funciona essa integração? Para utilizarmos qualquer tipo de banco de dados, seja SQL, NoSQL, normalmente precisamos realizar algumas instalações, como instalar os  _drivers_  do banco, arquivos necessários, etc. A menos que estejamos usando  _Docker_, o que não abordaremos neste curso.

No nosso caso, utilizamos o MongoDB Atlas, que cuidou da parte de instalação do banco, portanto não precisamos nos preocupar com isso. No entanto, ainda precisamos utilizar uma biblioteca que atue como intermediário entre o NodeJS e o MongoDB.

Pode surgir a pergunta: "Mas nós não já instalamos o MongoDB?" Sim, instalamos as dependências do banco. Porém, o que faremos agora é instalar outra biblioteca que será responsável por conversar com o MongoDB e realizar as operações de banco para nossa aplicação Node, assim como o  _Express_  age como biblioteca responsável pelas rotas e pelas requisições.

O nome desta biblioteca já apareceu no navegador, é  _Mongoose_. Existem outras bibliotecas que também desempenham esse papel de conectar bancos com APIs Node, mas vamos usar esta, pois é bem enxuta. Portanto, para esse momento em que o foco está na API, será mais tranquilo.

## Instalando o Mongoose

Como instalamos uma nova biblioteca? Vamos ao terminal, rodar  `npm install`, ou  `npm i`  junto ao nome  `mongoose`, e para instalar exatamente a versão que usada neste curso, escreveremos  `mongoose@7.3.4`, que é a última versão no momento atual.

É uma biblioteca pequena, portanto, deve ser instalada rapidamente. Após esse processo, podemos voltar para nossa aplicação no VS Code e fazer a conexão usando a string de conexão abaixo trazida do MongoDB Atlas e que deixamos pronta no arquivo  `app.js`.

```plaintext
// mongodb+srv://admin: <password>@cluster0.uvmwiwx.mongodb.net/?retryWrites=true&w=majority

```

Para isso, vamos acessar o explorador lateral esquerdo e criar, na pasta "src", uma nova pasta chamada "config" para armazenar os arquivos de conexão. Dentro desta, criaremos um arquivo chamado  `dbConnect.js`.

No interior deste arquivo, utilizaremos a string de conexão. Vamos cortá-la do arquivo  `app.js`, onde estava apenas guardada, e colá-la no  `dbConnect.js`  com "Ctrl+V".

Antes de mais nada, precisamos importar os métodos do  _Mongoose_  que acabamos de instalar. Para isso, escrevemos o comando abaixo na primeira linha do arquivo.

```javascript
import mongoose from "mongoose";

// mongodb+srv://admin: <password>@cluster0.uvmwiwx.mongodb.net/?retryWrites=true&w=majority

```

Com isso, podemos utilizar os métodos da biblioteca. Entre o  `import`  e o comando do MongoDB, vamos utilizar  `mongoose.connect()`, que recebe como parâmetro a nossa string de conexão, que deve estar entre aspas, pois se trata de uma string.

Para isso, vamos recortar essa string e colá-la entre os parênteses do método.

```javascript
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin: <password>@cluster0.uvmwiwx.mongodb.net/?retryWrites=true&w=majority")

```

Se observarmos esta string de conexão, ela contém algumas informações. Uma delas é  `admin:`, o nome de usuário que definimos quando criamos o banco, e a outra é  `<password>`. No lugar de  `<password>`, inseriremos o  `admin123`. O Atlas não fornece a senha na string de conexão por segurança, portanto precisamos adicioná-la.

```javascript
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin: admin123@cluster0.uvmwiwx.mongodb.net/?retryWrites=true&w=majority")

```

Adicionando essa informação no  `dbConnect.js`  _**ela irá para o GitHub**_. Se preferir, você pode omitir o arquivo  `dbConnect.js`, do GitHub e adicionar ao  `.gitignore`. Mas, por enquanto, vamos deixá-lo dessa forma para facilitar as configurações.

Existem  _**formas de proteger esses dados**_, impedindo que eles sejam enviados para o GitHub ou para o repositório. Porém, vamos abordar isso posteriormente. Por enquanto, esses dados podem ficar como estão, pois vamos fazer nossa primeira conexão.

Na string de conexão, há o  _cluster_  `cluster0`, que criamos. Temos também IDs criadas pelo MongoDB. Depois do trecho  `mongodb.net/`, devemos adicionar  `livraria`, que é o nome da nossa base de dados criada anteriormente. No final dessa instrução, temos que adicionar um ponto e vírgula.

```javascript
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin: admin123@cluster0.uvmwiwx.mongodb.net/livraria?retryWrites=true&w=majority");

```

Para exportar tudo isso, acima dessa linha, vamos adicionar nosso método  `connect()`  dentro de uma função. Então, vamos criar uma  `function`.

Uma parte interna dessa função servirá para conectar-se com o banco de dados. Portanto, ela deve ser uma  **função assíncrona**.

Portanto, antes da palavra  `function`, vamos passar a palavra-chave  _**`async`**_. As operações assíncronas já foram abordadas nos cursos disponíveis como pré-requisitos para este. É essencial não esquecer dessa palavra-chave.

Vamos chamar essa função de  `conectaNaDatabase()`. Não há necessidade de passar nenhum parâmetro nessa função, então simplesmente adicionaremos um par de parênteses e um par de chaves.

```javascript
import mongoose from "mongoose";

async function conectaNaDatabase() {

}

mongoose.connect("mongodb+srv://admin: admin123@cluster0.uvmwiwx.mongodb.net/livraria?retryWrites=true&w=majority");

```

Entre as chaves dessa função, a primeira linha será o nosso  `mongoose connect()`, portanto, vamos movê-lo para este local. Abaixo dele, temos que retornar  `return mongoose.connection`, que são métodos internos do  `mongoose`. Ele vai se conectar com a  _string_  de conexão e devolver um objeto com todas as informações que precisamos para nos conectar com o banco e realizar as operações.

Por fim, abaixo dessa função assíncrona, vamos realizar um  `export default`  da nossa função  `conectaNaDatabase`  para que possamos chamar ela em outros pontos da aplicação.

```javascript
async function conectaNaDatabase() {
  mongoose.connect("mongodb+srv://admin: admin123@cluster0.uvmwiwx.mongodb.net/livraria?retryWrites=true&w=majority");
    
  return mongoose.connection;
}

export default conectaNaDatabase;

```

Agora, podemos voltar para o nosso arquivo  `app.js`  e importar o nosso  `conectaNaDatabase`. No topo do arquivo, abaixo de  `import express`, vamos colocar  `import conectaNaDatabase from`. Ao digitar esse trecho, o próprio VSCode completará o comando com o caminho  `/.config/dbConnect`  para nós, mas sem o  `.js`  no final. Não podemos esquecer de acrescentar esse  `.js`, pois o VSCode, apesar de ser bastante proativo, pode não acrescentar isso.

```javascript
import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

// Código omitido

```

Faremos a conexão abaixo da linha da importação. Para isso, vamos criar uma constante chamada  `conexao`. Ela receberá um  `await`, lembrando que o  `conectaNaDatabase()`  é  _async_, e por isso precisa de um  `await`  para funcionar corretamente. Assim, temos  `await conectaNaDatabase()`.

```javascript
import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await conectaNaDatabase();

// Código omitido

```

Com isso, temos uma instância dessa conexão e os dados dela estarão salvos na nossa constante  `conexao`. Para gerenciar essa conexão, vamos criar dois métodos abaixo da nossa constante  `conexao`. O primeiro será  `conexao.on()`.

Normalmente, em JavaScript, os métodos que têm o nome  `on`  estão relacionados a algum evento. Portanto, podemos esperar que o primeiro parâmetro desse método seja algum tipo de evento, como um evento de conexão aberta, um evento de conexão fechada ou um evento de erro.

O primeiro parâmetro desse método será uma  _string_  com a palavra  `error`  entre aspas duplas, para que, antes de tratarmos o sucesso da conexão, possamos receber algum aviso caso a conexão não dê certo.

O segundo parâmetro será a  _arrow function_  (função seta)  `(erro) => {}`. Essa função vai receber um parâmetro chamado  `erro`  entre parênteses para capturar qualquer erro que seja recebido na nossa conexão.

Entre as chaves, informaremos um  `console.error()`  para verificar no terminal qual foi o erro ocorrido. Entre os parênteses deste, adicionaremos a string  `erro de conexão`  entre aspas duplas e seguida, adicionar vírgula e solicitar a impressão do conteúdo de  `erro`  no console.

```javascript
const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

```

Portanto, a função  `on`  será acionada se o evento que ocorrer na conexão for um erro. Lembrando que  `error`  é uma  _string_  que está em uma lista de eventos possíveis oriunda do  `mongoose`.

Se ocorrer algum erro na conexão, este será recebido como parâmetro pela função e será impresso no  `console.error()`  com uma mensagem em português.

> É interessante usar mensagens em português nos consoles para facilitar a localização no terminal.

Em seguida, o erro será retornado. Este será um erro em inglês, com mais detalhes.

Abaixo de  `conexao.on()`, precisamos adicionar mais um método, que será  `conexao.once()`.

`conexao.once()`  é um método que também aguarda por um evento específico. Neste caso, o evento será de conexão e o nome desse evento é  `"open"`, que indica uma conexão aberta.

Portanto, o primeiro parâmetro será uma  _string_  `"open"`  e o segundo será uma  _arrow function_  que não precisa receber qualquer parâmetro.

Entre as chaves desse método, ao invés de  `console.error()`, vamos usar o  `console.log("Conexão com o banco feita com sucesso")`  para sinalizar que a conexão com o banco foi bem-sucedida..

```javascript
const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

```

Agora, podemos retornar ao terminal para testar tudo o que foi criado e verificar se esta realmente se conectando ao banco de dados.

Lembre-se, para iniciar nosso servidor local, usamos o comando  `npm run dev`.

```plaintext
npm run dev

```

Veremos a mensagem "servidor escutando", indicando que o servidor foi iniciado. Abaixo dela, será impressa a mensagem "Conexão com o banco feita com sucesso".

> servidor escutando!
> 
> Conexão com o banco feita com sucesso

Isso significa que nossa biblioteca Mongoose conseguiu se conectar à  _string_  através do nosso método  `dbConnect()`  e passar essas informações para o  `app.js`. Isso também significa que a conexão foi aberta sem erros.

Para confirmar se tudo está funcionando corretamente, podemos acessar o arquivo  `dbConnect.js`  e alterar qualquer informação na nossa  _string_  de conexão. Por exemplo, vamos remover o "123" da senha, salvar as alterações e tentar novamente no terminal.

```javascript
async function conectaNaDatabase() {
  mongoose.connect("mongodb+srv://admin: admin@cluster0.uvmwiwx.mongodb.net/livraria?retryWrites=true&w=majority");
    
  return mongoose.connection;
}

```

Com isso, veremos no terminal que ocorreu um erro na conexão imediatamente após salvar o arquivo.

Se subirmos o terminal para o início das mensagens de erro, veremos que o comando lançou o método  `conexao.on()`  que havíamos definido, pois a mensagem em português "erro de conexão" foi exibida junto ao erro interno do MongoDB  `autentication failed`, indicando que a autenticação falhou.

> erro de conexão MongoServer Error: bad auth: authentication failed

Em seguida, foi apresentado o  _stack trace_, o qual não precisamos, uma vez que já sabemos o que ocorreu.

Voltando ao VS Code, vamos retornar à  _string_  de conexão, reverter as alterações com "Ctrl+Z" e salvar novamente. Com isso, a mensagem de sucesso é reexibida no terminal e tudo volta a funcionar como o esperado.

> servidor escutando!
> 
> Conexão com o banco feita com sucesso

Devemos lembrar que o MongoDB é o nosso banco de dados e o Mongoose é a biblioteca que está criando essa interface entre o MongoDB e a nossa API. Ou seja, os métodos utilizados para conectá-los são internos da biblioteca do Mongoose –  `mongoose.connect()`  via  `conexao`,  `mongoose.on()`  e  `mongoose.once()`.

Portanto, qualquer conexão com diferentes tipos de bancos de dados dependerá dessa interface, ou seja, da biblioteca que estamos usando para fazer essa conexão.



Nesta aula conhecemos os  **models**  e criamos um model para livros utilizando os métodos do Mongoose.

Vamos revisar o código do modelo e do schema correspondente.

**No arquivo  `src/models/Livro.js`**

 -   Importe o módulo  `mongoose`;
 -   Crie um esquema chamado  `livroSchema`  usando o construtor  `mongoose.Schema`;
 -   Defina as seguintes propriedades no esquema:
 -   `id`  como tipo  `mongoose.Schema.Types.ObjectId`;
    -   `titulo`  como tipo  `String`  e obrigatório;
    -   `editora`  como tipo  `String`;
    -   `preco`  como tipo  `Number`;
    -   `paginas`  como tipo  `Number`.
 -   Passe um objeto como segundo parâmetro para  `mongoose.Schema`  com a propriedade  `versionKey`  definida como  `false`;
 -   Crie um modelo chamado  `livro`  usando o método  `mongoose.model`, passando a string  `livros`  como nome da coleção e o esquema  `livroSchema`;
 -   Exporte o modelo  `livro`  como  `default`  (padrão).
```js 
import  mongoose  from  "mongoose";
       const  livroSchema  =  new  mongoose.Schema({
       id: { type:  mongoose.Schema.Types.ObjectId },
       titulo: { type:  String, required:  true },
       editora: { type:  String },
       preco: {type:  Number },
       paginas: {type:  Number },
       }, { versionKey:  false});
       
       const  livro  =  mongoose.model("livros", livroSchema);
     
       export  default  livro;
}
```
Quando desenvolvemos uma aplicação, seja uma API REST como a nossa livraria ou outros tipos de API, é normal organizarmos o código em “camadas”, ou seja, em conjuntos de código separados de acordo com sua função.

As possibilidades de organização do código em camadas dentro de uma aplicação são inúmeras e fazem parte de grandes áreas de estudo dentro da programação, como a  **arquitetura de software**.

Para nossa livraria, escolhemos como base um dos modelos clássicos de arquitetura para APIs REST, que é o  **MVC ou Model-View-Controller**. Neste curso, utilizaremos uma forma mais simplificada do MVC e não abordaremos o  _view_, que é a camada de visualização dos dados.

Agora que implementamos nossos primeiros models e controllers, vamos entender mais sobre o papel de cada um desses componentes.

## Models

Os models são responsáveis pela representação dos dados e da lógica de negócio da aplicação, ou seja, é responsabilidade do model gerenciar o relacionamento entre a API e a camada de dados, incluindo validação, armazenamento e manipulação dos dados, interação com a base de dados e suas regras.

Em nossa API, a conexão entre o model e o banco de dados está sendo feito através dos métodos da biblioteca Mongoose, como no exemplo abaixo:

```js
// importação do modelo Livro
// para ser chamado pelo controller
import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
   try {
    // controller chama o model Livro através
    // do método livro.find({})
     const listaLivros = await livro.find({});
     res.status(200).json(listaLivros);
   } catch (erro) {
     res
       .status(500)
       .json({ message: `${erro.message} - falha na requisição` });
   }
 }
};

```

Nossa API utiliza um banco MongoDB e a biblioteca Mongoose, então o código que escrevemos para criar o modelo utiliza a “sintaxe” da biblioteca. O código utilizado para definir um model varia de acordo com as diversas bibliotecas e frameworks que podem ser utilizados em uma API.

## Controllers

Os controllers atuam como intermediários entre a camada responsável pelo recebimento dos  _inputs_  de dados, que em nossa API está sendo feito através das rotas, e os models. Controllers também são a camada responsável pelo “caminho inverso”, pegando o resultado do processamento feito pelos models e “repassando” de volta.

Uma forma simplificada de ilustrar a integração entre as camadas da nossa API pode ser conferida neste diagrama:

![alt: Fluxograma de integração das camadas de uma API, no sentido da requisição HTTP até o banco de dados. A requisição HTTP é enviada para a rota /livros, que chama o controller repassando os dados da requisição para o controller Livro que processa a requisição e chama o modelo em model Livro e conecta com o banco de dados e processa a query.](https://caelum-online-public.s3.amazonaws.com/3266-nodejs-mongodb/imagem1.png)

Na imagem acima, ilustramos o fluxo da API REST usando o modelo MVC, desde a requisição HTTP até a consulta (_query_) feita ao banco de dados.

A comunicação entre as camadas de model e controller é uma caminho de ida e volta, pois o model vai repassar o resultado da consulta para o controller para que seja processada e transformada na resposta HTTP no formato adequado e com as informações esperadas![alt: Fluxograma de integração das camadas de uma API, no sentido do banco de dados até a resposta HTTP. O resultado da query com os dados vão do banco de dados até o model Livro, que processa o resultado e repassa para o controller Livro que recebe os dados e monta a resposta HTTP.](https://caelum-online-public.s3.amazonaws.com/3266-nodejs-mongodb/imagem2.png)

Para além do MVC, os conceitos de  _model_  e  _controller_  são amplamente usados em programação web, assim como a implementação e utilização de cada uma destas camadas. Você vai praticar mais com a arquitetura MVC nos próximos cursos da formação e terá contato com os models e os controllers em diversos outros tipos de API.

# **bloco try/catch** 
para “separar” os casos de sucesso das falhas no processamento das requisições.

O  `try/catch`  é uma estrutura usada justamente quando é necessário capturar e manejar erros de forma mais precisa, permitindo que os erros sejam “capturados e tratados” internamente pela função e evitando que a aplicação pare de funcionar ou que o cliente receba respostas inesperadas.

-   No  **bloco  `try`**  inserimos o código que é necessário “monitorar” para que potenciais erros sejam capturados, como operações em bases de dados ou APIs externas. Em caso de sucessos, apenas o código dentro do  `try`  é executado e seus resultados retornados para fora da função, conforme o caso.
-   No  **bloco  `catch`**  inserimos o código que vai ser executado em caso de erros ocorridos no código que está dentro do  `try`. Qualquer erro que aconteça dentro do  `try`  é automaticamente lançado para dentro do  `catch`  e recebido através do parâmetro que normalmente chamamos de  `(error)`  ou  `(e)`. Uma vez dentro do  `catch`  o erro pode ser tratado de acordo e debugado, e o lado cliente pode receber uma resposta que faça sentido.

O  `try/catch`  funciona também para captura e tratamento de possíveis erros em operações assíncronas, como as que envolvem justamente operações em bancos ou outras APIs.


## Erro em HTML?

Se ao testar alguma rota no Postman, retornar uma mensagem de erro formatada com tags HTML, similar a este exemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot DELETE /livros/64b6b49e85a04a44cad5cdb6</pre>
</body>
</html>

```

Verifique se a rota que você está testando foi adicionada corretamente ao projeto:

1.  Se está corretamente adicionada ao arquivo correto na pasta  `routes`;
2.  Se o método HTTP escolhido no Postman (por exemplo, GET) corresponde ao informado em  `router`, como  `router.get()`;
3.  Se o módulo com as rotas correspondentes foi adicionado ao ponto de entrada das rotas  `routes/index.js`.

Em bancos SQL, a avaliação de requisitos e modelagem dos dados costuma ser feita de forma adiantada com relação à aplicação, pois o SQL é, por definição, mais “estrito” com relação à estrutura de um banco, aos tipos de dados associados a cada campo e ao relacionamento entre as tabelas.

Já em um banco de objetos como o MongoDB, esta estrutura é menos rígida e pode ser atualizada de acordo com as necessidades da aplicação, então, dois documentos  `livro`  podem ser diferentes entre si sem que para isso sejam necessárias alterações significativas na base de dados.

Porém, em ambos os tipos de banco existem três tipos de relacionamentos entre dados. São eles:

1.  **Relacionamento “um para um” (one-to-one ou 1:1)**, quando um registro está conectado a somente outro registro em outro conjunto de dados.  **Exemplo**: uma pessoa registrada no sistema da nossa livraria tem somente um CPF relacionado a ela, e não é possível que duas pessoas diferentes tenham o mesmo CPF ou uma pessoa ter dois CPFs.
2.  **Relacionamento “um para muitos” (one-to-many ou 1:n)**, quando um registro pode ser conectado a mais de um registro em outro conjunto de dados.  **Exemplo**: as pessoas cadastradas em nossa livraria podem fornecer mais de um número de telefone celular, porém, cada um destes números de celular pode estar associado a apenas uma pessoa por vez.
3.  **Relacionamento “muitos para muitos” (many-to-many ou n:m)**, quando mais de um registro pode estar relacionado a mais de um registro em outro conjunto.  **Exemplo**: um livro pode ter mais de um autor, ao mesmo tempo que este mesmo autor pode ter escrito vários livros.
## Embedding

Ao contrário do SQL, o MongoDB segue o princípio de  **“dados que são acessados juntos devem ser armazenados juntos”**.

Pensando assim,  _embedding_  significa  _incorporar_  dados que são relacionados e inseri-los em um documento. É usado para simplificar as consultas (_queries_) aos dados e melhorar a performance geral das ferramentas nas consultas.

Veja abaixo um exemplo de documento  `autor`  com um array de livros incorporado ao restante dos dados. Arrays de objetos são uma forma comum de  _embedding_  de dados.

```json
{
 "_id": ObjectId("579a7256f245878acabac457c"),
 "nome": "JRR Tolkien",
 "livros": [
   {"titulo": "O Senhor dos Anéis", "paginas": 500},
   {"titulo": "O Hobbit", "paginas": 200},
   {"titulo": "O Silmarillion", "paginas": 400}
 ]
}

```

Porém, incorporar dados em um único documento pode criar documentos muito grandes, o que pode acabar prejudicando a performance da aplicação, pois um documento deve ser carregado em memória por inteiro. Além disso, pode também fazer com que novos dados sejam incorporados indefinidamente a um único objeto e aumentando o tamanho em bytes além do limite de 16 mb por documento de um  [objeto BSON](https://cursos.alura.com.br/extra/alura-mais/json-bson-entendendo-os-documentos-do-mongodb-c84).

## Referencing

_Referencing_  significa fazer referência a documentos em outra coleção. Nesse caso, os dados são guardados em coleções separadas, mas ainda é importante que mantenham vínculo entre eles. A referência é feita através de um campo específico do documento, normalmente o campo  `id`  ou equivalente.

A agregação de dados via reference visa evitar duplicação de dados (um aspecto muito importante no SQL, também chamada de “normalização de dados”) e também gerenciar o tamanho dos documentos para evitar a criação de documentos muito grandes, que prejudicariam a performance do sistema.

Por outro lado, a junção de dados via referência faz com que uma consulta se transforme em duas ou várias. Por exemplo, uma consulta aos dados de um livro resultaria em consultas tanto na coleção  `livros`  quanto na coleção  `autores`, o que consome mais recursos e pode impactar a performance de leitura.

```json
{
 "_id": ObjectId("9gPOwsIJaf5knkzpvYNlk9flz"),
 "nome": "JRR Tolkien",
 "livros": [
   ObjectId("ctstNHEEKCLwTN7gN7KgNprYb"),
   ObjectId("qdQwKNumukFzuSYh58WKLN3TV"),
   ObjectId("KNUeheO0UbtpFYwLuJpdwbD5P")
 ]
}

```

Abaixo segue um resumo dos prós e contras de cada um dos métodos.

```ruby
| 	|               	**Embedding**               	|
|:---:|:-------------------------------------------------:|
| PRO | Dados retornados em uma única consulta        	|
| PRO | atualização e exclusão de dados em única operação |
| CON | duplicação de dados                           	|
| CON | documentos maiores                            	|
| 	|              	**Referencing**              	|
| PRO | Não há duplicação de dados                    	|
| PRO | documentos menores                            	|
| CON | necessário "unir" dados de múltiplos documentos   |

```

## Quando utilizar um ou outro?

A resposta é  **depende**, pois isso passa pela prática de modelagem de dados e também pelas características de cada tipo de dado e coleção. Neste curso não vamos avançar nesse tópico, pois modelagem é um assunto para seu próprio curso.

Tanto o MongoDB quanto os gerenciadores SQL (MySQL, PostgreSQL, entre outros) têm suas próprias formações nas quais você pode aprender com mais profundidade sobre o funcionamento de cada um deles. Confira abaixo:

-   [Formação MongoDB](https://cursos.alura.com.br/formacao-mongodb);
-   [Formação SQL com PostgreSQL](https://cursos.alura.com.br/formacao-postgresql);
-   [Formação SQL com MySQL](https://cursos.alura.com.br/formacao-oracle-mysql).

# pesquisa por query
vamos descobrir como adicionar uma dessas novas funcionalidades. Para isso, implementaremos uma funcionalidade de busca para encontrarmos um livro através da editora. A  `editora`  é uma propriedade que já temos em livros e temos o registro da editora "Clássicos".

Precisamos passar um parâmetro de busca para a rota e o usar para ser processado pela API. E se vamos procurar os livros através de uma editora, significa que este processamento será realizado pelo controlador de livros, por ser uma requisição originada dos livros. Portanto, nossa busca ocorre dentro de  `livroController.js`, onde criaremos um novo método para esse processamento específico.

Ao final do código de  `livroController.js`, escreveremos o novo método, que será  `static`  (estático) e  `async`  (assíncrono), pois consultará o banco de dados. Chamaremos o método  `listarLivrosPorEditora()`  e, como sempre, ele receberá uma requisição e uma resposta, ou seja,  `(req e res)`.

> Arquivo  `livroController.js`

```js
    //código omitido

    static async listarLivrosPorEditora (req, res) {
        
    }
};

export default LivroController;

```

Essa informação da editora será recebida através de um parâmetro. Se acessarmos "src > routes >  `livroRoutes.js`", observamos que já temos alguns parâmetros, como o parâmetro  `id`, que referenciamos com dois pontos (`:id`). Mas agora trabalharemos com outro tipo de parâmetro que pode ser passado por uma rota, o chamado de  **parâmetro de  _query_  (consulta)**.

Portanto, temos o tipo de informação variável, que passamos por parâmetro da rota, e agora passaremos outro tipo de parâmetro. Antes, vamos entender como funciona o parâmetro de consulta.

Por exemplo, ao  [acessarmos o  _dashboard_  da Alura, em cursos.alura.com/dashboard](https://cursos.alura.com.br/dashboard), e clicarmos no botão de lupa, que fica no canto superior esquerdo, ao lado da logo, abrimos uma barra de busca. Se fizermos uma busca por "_express_" e clicarmos no botão "Pesquisar", ao final da barra, notaremos informações adicionais na URL na barra de endereço do navegador.

Vamos copiar essa URL, colar ao final do arquivo  `livrosRoutes.js`, no Visual Studio Code (VSC), e analisá-la melhor. O endereço começa com  `cursos.alura.com.br`. Da mesma forma que temos  `/alunos`,  `/livros`  e  `/autores`, durante uma busca, o site da Alura adiciona o  `/search`. Depois temos  `?query=express`, ou seja, o nome do parâmetro que comentamos e o termo consultado.

Portanto, o  **_query_  é um parâmetro de consulta**  que, ao passarmos uma rota com a estrutura interrogação, chave, sinal de igual e valor (`?chave=valor`), conseguimos passar esses parâmetros de consulta (_query parameters_) para a rota. Essa informação será enviada junto com a rota e o  _Express_  conseguirá capturá-la.

Deixaremos esse endereço em forma de comentário ao final do arquivo e voltaremos para  `livroController.js`, onde começamos a criar nosso método. Dentro do método, escreveremos  `const editora = req.query`, para obtermos o resultado da requisição.

Assim como  `req.params.id`  fazia referência a um valor variável que chamamos de  `id`  na rota, após o  `.query`, passaremos o nome do parâmetro  _query_. No caso da página da Alura, a  _query_  foi chamada de  `query`. No nosso caso, chamaremos esse parâmetro de  `editora`. Então, ao passarmos  `req.query.editora`.

```js
    //código omitido

    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora;
    }
};

export default LivroController;

```

Dessa forma, sempre que recebermos uma rota com estrutura na forma de  `?editora=algumaInformação`, essa informação pode ser capturada através da propriedade  `req.query.editora`. Assim podemos encadear parâmetros de  _query_.

Por exemplo, se fizermos qualquer busca no Google e analisarmos a URL, encontraremos várias sequências de chave e valor separados por igual, que estão encadeadas e separadas por um "E" comercial (`&`). A interrogação (`?`) inicia essa sequência de parâmetros e conseguimos adicionar vários parâmetros de uma vez só em uma URL, sempre separados por  `&`.

No nosso exemplo, precisamos apenas de um parâmetro, que é o nosso parâmetro de busca chamado  `editora`. Na Alura, chamaram de  `query`  e pode ser chamado de  `q`, ambos os nomes bastante comuns.

Agora, vamos iniciar o processo para fazer a busca funcionar. Já criamos a constante  `editora`  e criaremos o bloco  _try_-_catch_  para implementarmos o restante do código. Criaremos da forma que já sabemos, com o  `catch()`  recebendo o  `(erro)`.

```js
    //código omitido

    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora;
        try {
            
        } catch(erro){
            
        }
    }
};

export default LivroController;

```

Para encontrarmos o livro, criaremos a  `const livrosPorEditora`  dentro do  `try`. Escreveremos um  `await`  e usaremos métodos do Mongoose para a busca, inclusive um método que já usamos: o  `livro.find()`.

No nosso primeiro  `find`, passamos apenas um objeto vazio, porque queríamos todos os livros sem nenhum filtro. Nesse caso, queremos passar um objeto com um parâmetro de busca, que será  `{editora: editora}`.

```js
    //código omitido

static async listarLivrosPorEditora (req, res) {
    const editora = req.query.editora;
    try {
        const livrosPorEditora = await livro.find({ editora: editora });
    } catch(erro){

    }
}

```

A primeira  `editora`, que é a chave desse conjunto de chave e valor, é a propriedade  `editora`  do model  `livroSchema`. Já a segunda  `editora`  refere-se à variável com a informação que chegará via parâmetro de consulta.

O JavaScript tem um padrão no qual se a chave e o valor forem o mesmo dado, podemos passar apenas um deles, ou seja, poderíamos escrever apenas  `.find({editora})`. Entretanto, deixaremos por extenso para deixar claro que uma é a propriedade de  `livro`  e a outra é a informação da variável.

Agora, precisamos montar a resposta (`res`), codando  `res.status(200).json(livrosPorEditora)`. Consideramos o status 200, de que deu tudo certo, e estamos retornando o resultado de  `livrosPorEditora`. O Mongoose vai resolver o restante para nós.

No bloco  `catch`  de erro, deixaremos igual aos outros, pois não estamos trabalhando com manipulação de erros neste primeiro curso. Mudaremos apenas a mensagem, que será "falha na busca".

```js
//código omitido

try {
    const livrosPorEditora = await livro.find({ editora: editora });
    res.status(200).json(livrosPorEditora);
} catch (erro) {
    res.status(500).json({ message: `${erro.message} - falha na busca` });
}

//código omitido

```

Agora, da mesma forma como a Alura tem uma rota  `/search`, precisamos criar nossa rota, que entrará em  `livrosRoutes.js`. Criaremos uma nova rota do tipo  `get`, que vai ser  `rotaLivros`.

> **Ressalva importante**: O Express trabalha com precedência de rota, ou seja, as rotas são chamadas em sequência. Por exemplo, todas as rotas de  `livros`  serão chamadas na sequência que forem declaradas no nosso  `livrosRoutes.js`. Isso significa que temos que adicionar essas rotas em uma ordem de complexidade, da maior para a menor.

Ao final da rota  `routes.get("/livros", LivroController.listarLivros);`, pressionaremos "Enter" e, antes da rota  `.get("/livros/:id",`, adicionaremos nossa nova rota. Para isso, escrevemos  `routes.get("/livros/busca")`.

Assim como o recurso de busca no site do Alura, chamaremos esta nova rota de "busca". Também designaremos qual será o método chamado nesse contexto, que será o método  `listarLivrosPorEditora`  do  `LivroController`.

> Arquivo  `livrosRoutes.js`

```javascript
//código omitido

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes;

```

Nesse caso,  _como ficará a questão da precedência de rotas no Express_? Se invertermos a ordem para  `/livros/:id`  aparecer antes de  `/livros/busca`  e chamarmos uma rota que é  `/livros/busca/parâmetro`, como o Express busca as rotas em ordem, ele vai parar na rota  `/livros:id`. Assim ele considera tanto o termo  `"busca"`, quanto tudo que aparecer em seguida, como algum tipo de id, e ficará confuso.

Por isso que colocamos as rotas em ordem decrescente de complexidade. Então, se eu tivesse, por exemplo,  `/busca/autores/outroParâmetro`, esta rota deveria ser inserida antes de  `livros/:id`.

Essa é uma regra do Express. Logo, se você inverter, não vai funcionar. Essa informação é crucial quando o número de suas rotas começa a crescer, mas, por enquanto, nós só temos essa nova rota. Depois de a incluirmos, podemos realizar um teste no Postman.

Antes, verificamos no terminal se aconteceu algum erro. Estando tudo certo, podemos acessar o  _Postman_.

No Postman, faremos uma requisição GET para "localhost:3000/livros/busca" e utilizarmos a estrutura que adotamos para passar parâmetros de consulta. Primeiramente usamos o símbolo de interrogação (`?`) e passaremos  `editora=Classicos`, sendo "editora" é o nome do nosso parâmetro de busca, e "Classicos" é o valor do parâmetro.

```http
GET http://localhost:3000/livros/busca?editora=Classicos

```

> **Dica**: Se esquecemos algum dado que atribuímos, como o nome da editora, podemos abrir outra aba de requisição no Postman e fazer uma requisição GET para "localhost:3000/livros".

Funcionou! A busca retornou apenas "O Senhor dos Anéis", da editora "Classicos". Lembrando que já fizemos algumas alterações no banco de dados e deletamos o outro livro.

Se você quiser fazer mais testes, crie outros livros com a editora "Classicos", ou com outras editoras, e faça sempre a busca seguindo esse modelo de parâmetro:  `?editora=Nome`. Caso algo não funcione, você sempre pode pedir ajuda no fórum.

Com isso, concluímos nossa primeira API REST com Node.js, utilizando o Express, que é uma das ferramentas mais usuais no mercado. Essa ferramenta é capaz de realizar muito mais. Nós apenas utilizamos rotas e requisição-resposta, mas o servidor local do Express oferece outros recursos.

A tendência é que essa API cresça, e temos mais cursos que lidarão com mais funcionalidades que você poderá adicionar a essa mesma API. Então não esqueça de continuar estudando!

Livros e livrarias são excelentes para praticar com APIs. Você também pode praticar, por exemplo, com blogs e posts de blog. Enfim, é hora de praticar e adicionar funcionalidades sempre, pois essa é basicamente a nossa principal função no  _Back-end_.