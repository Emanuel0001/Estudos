
 

# <center>`MEUS ESTUDOS`

## HTTP - O que é:
HTTP é um protocolo de transferência que possibilita que as pessoas que inserem a URL do seu site na Web possam ver os conteúdos e dados que nele existem. A sigla vem do inglês Hypertext Transfer Protocol.

 * Hyper text
* Documento de marcação de hipertexto
* Características: está na camada de aplicação
* Baseado em requisição e resposta \ cliente : servidor
* Opera em TCP/IP .. Retorna

### Exemplo
#### Fluxo...
          1. Usuário informa a URL
          2 . Browser gera a requisição

          GET / HTTP / 1.1
          Host: [www.google.com.br
          (http://www.google.com.br)

          3. Servidor Web gera a resposta
             HTTP/1.1 200 Ok
             <html>...
          
          4. Browser exibe a página

  
## Metodos :   Suportados pelo HTTP

#### GET / PEGA INFORMAÇÕES
	-   Os parâmetros vão diretamente na URL
	-   Buscar dados do banco / Consumir dados
	-   Utilizado todas as vezes que estamos navegando em um site através de seus links, gerando pedidos e realizado com métodos GET
	    

> **Obs:** Como a requisição é feita através da URL existe uma limitação no tamanho da mensagem enviada.  A string não pode ultrapassar mais que 255 caracteres


#### POST / CRIA INFORMAÇÕES

	-   A requisição post só pode ser gerada através de um formulário web ou através de ajax, não sendo possível gerarmos um link POST
	-   Os parâmetros vão no corpo da requisição
	-   Post usado para consultar dados

#### PUT / 
	
	-   O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.
	-   Usado para alterar dados
	-   Atualizar dados
	- Consegue alterar objetos inteiros /substituição de valores

#### PATCH / EDITA INFORMAÇÃO

	-   O método patch é possível alterar apenas um dado
	-   O método de requisição HTTP PATCH aplica modificações parciais a um recurso.
    

#### DELETE / DELETA INFORMAÇÃO
	-   O método DELETE remove um recurso específico
    
#### TRACE /
	-   O método TRACE executa um teste de chamada loop-back junto com o caminho para o recurso de destino.
    
#### OPTIONS /
	-   Cliente saber qual verbo está sendo utilizado pela aplicação

#### CONNECT /

	-   O método CONNECT estabelece um túnel para o servidor identificado pelo recurso de destino.

#### HEAD /

	-   O método HEAD solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta.

## Diferença entre HTTP / HTTPS 

####  Https:
 O protocolo HTTPS (HyperText Transfer Protocol Secure) é idêntico ao HTTP e surgiu com o intuito de substituí-lo, porém, foi adicionada uma camada do SSL (Secure Sockets Layer) ou de TLS (Transfer Layer Security), o seu sucessor.
 

 - HTTPS - Navega pela porta 443 / Conexão encriptada
 
 - Utiliza certificado SSL certificate

 - Sistema de criptografia com duas chaves
 - Chave pública / Chave privada
 - A chave pública é conhecida por todos / A chave privada é conhecida
   apenas pelo destinatário

#### Http:
  HTTP -  Usuário navega pela porta 80 / Porta insegura (man in the middle)

  

### Porque o HTTP é inseguro?

O HTTP é inseguro, pois baseia-se apenas em texto, o que possibilita a invasores interceptarem, alterarem e roubarem as informações transferidas.

  

## Man in the middle?
O man-in-the-middle é uma forma de ataque em que os dados trocados entre duas partes são de alguma forma interceptados, registrados e, possivelmente, alterados pelo atacante sem que as vítimas se apercebem
```mermaid
graph LR
A[Pessoa/ User]  -- envia requisição -->D{Atacante/ intercepta} -- envia p/servidor --> Servidor
```
##   O que é SSH ?
    
Terminal seguro / Secure SHell

	 - Permite que os usuários acessar os servidores de forma segura mesmo
	   dentro de uma rede insegura
	 - É um Protocolo de rede que utiliza criptografia para conectar duas
	   ponta
	 - Transferir dados comando e textos

Ele basicamente cria uma conexão entre dois pontos segura usando a criptografia


## Diferença entre criptografia assimétrica e simétrica?

  

### Criptografia Simétrica:
Utiliza uma chave única para cifrar e decifrar a mensagem. Nesse caso o segredo é compartilhado.
O ciframento de uma mensagem (processo em que um conteúdo é criptografado) é baseado em 2 componentes:

-   um algoritmo;
-   e uma chave de segurança.
    

O algoritmo trabalha junto com a chave, de forma que eles tornam um conteúdo sigiloso com um conjunto único de regras.

A criptografia simétrica faz uso de uma única chave, que é compartilhada entre o emissor e o destinatário de um conteúdo. Essa chave é uma cadeia própria de bits, que vai definir a forma como o algoritmo vai cifrar um conteúdo.

### Assimétrica:

A criptografia assimétrica, também conhecida como criptografia de chave pública, é baseada em 2 tipos de chaves de segurança, uma privada e a outra pública. Elas são usadas para cifrar mensagens e verificar a identidade de um usuário.

  

Resumidamente falando, a chave privada é usada para decifrar mensagens, enquanto a pública é utilizada para cifrar um conteúdo.

-   Não substitui a criptografia simétrica
    
-   Geralmente, criptografia assimétrica é usada para distribuir chaves simétricas;
    
-   A chave de criptografia utilizada para criptografar “Ch pub”, é diferente da chave de decriptografar , utilizando a “Ch priv”.
    
### Como a criptografia assimétrica pode ser usada como autenticação?

Para a autenticação do cliente, o servidor utiliza a chave pública do certificado do cliente para decriptografar os dados enviados pelo cliente

  
  

## Autenticação vs Autorização.

A autenticação e autorização são as medidas de segurança tomadas para proteger os dados no sistema de informação. Autenticação é o processo de verificação da identidade da pessoa que se aproxima do sistema. Por outro lado, Autorização é o processo de verificação dos privilégios ou lista de acesso para os quais a pessoa está autorizada.

#### Autenticação:
A autenticação é usada para verificar a identidade do usuário para permitir o acesso ao sistema. Por outro lado, a autorização determina quem deve poder acessar o que
Verifica a identidade da pessoa para conceder acesso ao sistema.

  

#### Autorização:

Verifica os privilégios ou permissões da pessoa para acessar os recursos.

  
  

-   Criar uma chave ssh ( com senha )
    
-   Colocar no GitHub
    
-   Criar dois repos
    

## Package.json:

O arquivo package.json é o ponto de partida de qualquer projeto NodeJS. Ele é responsável por descrever o seu projeto, informar as engines (versão do node e do npm), url do repositório, versão do projeto, dependências de produção e de desenvolvimento dentre outras coisas.

  

	-   Ele contém metadados sobre o seu projeto, como o título, o número de versão e as dependências.
	-   Ele também contém scripts que você pode utilizar para executar seu projeto.
	-   Um formato de representação de dados
	-   Utiliza o formato de chave e valor
	-   É leve para ser enviado por requisições
    
## Node_modules:

Module é uma coleção de funções e objetos do JavaScript que podem ser utilizados por aplicativos externos. Descrever um trecho de código como um módulo se refere menos ao que o código é do que aquilo que ele faz qualquer arquivo Node.js pode ser considerado um módulo caso suas funções e dados sejam feitos para programas externos.

-   Dividi o programa em várias partes (funções)
### O que é npm?
**npm** (gerenciador de pacotes do nó) é o gerenciador de dependências/pacotes que você obtém ao instalar o Node.js. Ele fornece uma maneira para os desenvolvedores instalarem pacotes globalmente e localmente.
### O que é npx?
O npx é pré-empacotado com o npm. Então é praticamente um padrão hoje em dia.
O npx também é uma ferramenta CLI cujo objetivo é facilitar a instalação e o gerenciamento de dependências hospedadas no registro npm.
### Diferença npm vs npx?
**npm** é o gerenciador de pacotes node, ele irá instalar na sua máquina um pacote para que você possa utiliza-lo em outros projetos sem precisar baixar novamente.

já o **npx** ele irá usar o pacote sem precisar baixar em sua máquina, sendo assim você irá instalar um pacote no seu projeto ou até mesmo usar esse pacote, sem baixar os arquivos em sua máquina.

## Merge VS REBESE 
Basicamente o **git merge** e o **git rebase** servem para a mesma coisa: **mesclar alterações de duas branches diferentes**.
#### Branches oq é?  


> Ramificação, em controle de versão e gerenciamento de configuração de software, é a duplicação de um objeto sob controle de versão.

O **merge**, na maioria das vezes, gera um novo commit, o que pode complicar o histórico, mas nunca o reescreve. (mas é mais seguro)

Já o **rebase** deixa o histórico linear e mais simples, mas alguns commits são reescritos, é muito útil para não “sujar” o histórico do repositório (mas possui mais riscos).


## Fast-Forward

Move o rótulo da branch master para o commit “feature". Por isso, o nome dessa estratégia é fast forward (em português avanço rápido), pois é simplesmente uma alteração de ponteiro.

## no-fast forward

O --no-ff sinalizador faz com que a mesclagem sempre crie um novo objeto de confirmação, mesmo que a mesclagem possa ser executada com um avanço rápido. Isso evita a perda de informações sobre a existência histórica de uma ramificação de recurso e agrupa todos os commits que juntos adicionaram o recurso.
A --no-ff opção é útil quando você deseja ter uma noção clara de sua ramificação de recurso. sem --no-ff, é impossível ver no histórico do Git quais dos objetos de confirmação juntos implementaram um recurso, você teria que ler manualmente todas.

  
  
  
  

## Rebese vs squash

**Merge Rebase:** Isso move todo o branch do recurso para começar na ponta do branch master, incorporando efetivamente todos os novos commits no master

Master A → B → C -->(F) → (G)

Feature A → B → C --> (D) → (E)

MASTER A → B → C → (F) → (G) → (D) → (E)

O **rebase** deixa o histórico linear e mais simples, mas alguns commits são reescritos, é muito útil para não “sujar” o histórico do repositório (mas possui mais riscos).

**Merge Squash:** mantém as alterações, mas omite os commits individuais do histórico

Master A → B → C

Feature A → B → C (D) → (E) |

MASTER A → B → C → (F)

  

## Git remote / qual é o remote do meu repositório ?

Um controle remoto no Git é um repositório comum que todos os membros da equipe usam para trocar suas alterações. Na maioria dos casos, esse repositório remoto é armazenado em um serviço de hospedagem de código como o GitHub ou em um servidor interno. Ao contrário de um repositório local, um remoto normalmente não fornece uma árvore de arquivos do estado atual do projeto.

origin git@github.com:Emanuel0001/sistema-de-usuario.git (fetch)

origin git@github.com:Emanuel0001/sistema-de-usuario.git (push)

  
  

## O que é uma aplicação distribuída?

Uma aplicação que executa simultaneamente em várias máquinas Um grupo de processos que executa em máquinas distintas e trabalha de forma coordenada e cooperativa para realizar uma determinada tarefa

São vários repositórios autônomos e independentes, um para cada desenvolvedor. Cada repositório possui uma área de trabalho acoplada e as operações commit e update acontecem localmente entre os dois.

  
  
  

## Arquivo de texto vs arquivos binarios

Nos arquivos **texto** os dados são representados linha à linha. Na prática é uma sequência de bytes representando caracteres. Assim, o conjunto de bytes forma um texto.

Já os arquivos **binários** são representados por uma sequência de bytes sem o conceito de quebra de linha. Ele armazena o dado literal, ou seja, não são caracteres.

**Na prática arquivos textos são abertos por editores de texto simples, enquanto que arquivos binários precisam ser abertos por programas específicos**
### Exemplo:

   #### Texto (qualquer arquivo que só armazene texto).txt, .xml, .bat
#### Binário (possuem uma codificação de bytes especifica) .doc, .exe, .zip 

## API

{“temperatura”:20, “unidade”: Celsius}

#### REST(Representational State Transfer) — Transferencia de estado representacional

-   API REST serve para a comunicação entre aplicações para estabelecer o consumo de informações de forma rápida e segura.
    
-   Utilizar API REST significa utilizar uma API para o consumo de dados em [aplicações back-end](https://blog.betrybe.com/carreira/front-end-e-back-end/), de modo que essa comunicação seja estabelecida utilizando padrões definidos no estilo arquitetural REST.
    

A API liga as diversas funções em um site de maneira que possam ser utilizadas em outras aplicações.
 ## React State

O estado ( state ) de um componente React tem uma função muito simples e específica. Ele é uma propriedade do componente onde colocamos dados que, quando mudados, devem causar uma nova renderização. Simples assim. Se deve causar mudança fica no estado, se não deve causar uma mudança, não fica.

-   State funciona como se fosse uma variável , sempre que modificado o conteúdo , os elementos que ele utiliza sofre alteração.
    
-   O state é um elemento privado, sendo assim, apenas terá acesso dentro do componente.
## O que é middleware e para que ele serve?

Middleware é um software que permite um ou mais tipos de comunicação ou conectividade entre dois ou mais aplicativos e/ou componentes de aplicativos em uma rede distribuída.

Com o middleware, os desenvolvedores podem criar aplicações com mais facilidade e eficiência, pois esse tipo de software tem o papel de conectar aplicações, dados e usuários.

Middleware é um software que fornece serviços e recursos comuns a aplicações. Gerenciamento de dados, serviços de aplicações, sistema de mensageria, autenticação e gerenciamento de APIs são recursos comumente operados por um software de middleware.

  

## O que é CORS?

CORS é o acrônimo de Cross-origin Resource Sharing (Compartilhamento de Recursos de Origem Cruzada). Na prática, ele informa aos navegadores se um determinado recurso pode ou não ser acessado.

  

Quando realizamos uma requisição a um servidor, os navegadores utilizam uma política de segurança chamada [same-origin](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) (ou mesma origem), que só autoriza a troca de informações se os envolvidos tiverem origens iguais…

Em resumo, a política same-origin exige que ambas as partes tenham a mesma origem para se comunicarem.

## O que é origem?

A origem de um website é uma composição envolvendo:

-   Protocolo;
    
-   Host;
    
-   Porta.
## Pesquisar sobre Cookies -  O que é?

Um cookie, no âmbito do protocolo de comunicação HTTP usado na Internet, é um pequeno arquivo de computador ou pacote de dados enviados por um site de Internet para o navegador do usuário, quando o utilizador visita o site. Cada vez que o usuário visita o site novamente, o navegador envia o cookie de volta para o servidor para notificar atividades prévias do usuário.

## Funcionamento

Quando o servidor deseja activar um cookie no cliente, envia uma linha no cabeçalho HTTP iniciada por Set-Cookie:A partir desse momento, consoante as opções especificadas pelo cookie, o cliente irá enviar no seu cabeçalho HTTP dos pedidos uma linha contendo os cookies relevantes, iniciada por Cookie: ....

## Quais os tipos de cookies?

Existem vários tipos de cookies. Enquanto alguns facilitam a sua vida, permitindo que você seja reconhecido mais rapidamente por sites, outros analisam o comportamento de navegação para gerar dados para serem utilizados como ferramentas de marketing por dados.

###  Cookies de sessão

Também chamado de cookie transitório, é apagado quando você fecha o navegador de internet. Ele é armazenado na memória temporária do computador e não é retido depois que o navegador é encerrado. Os cookies de sessão não coletam informações do seu computador. Eles normalmente armazenam informações na forma de uma identificação que não coleta dados pessoais do usuário.

###  Cookies persistentes

Também chamado de Cookie permanente, é armazenado em seu disco rígido até expirar (cookies persistentes são definidos com datas de expiração) ou até você excluir.

Os Cookies persistentes são usados para coletar informações de identificação sobre o usuário, como comportamento de navegação na internet ou preferências para um site específico.

## <center>TIPOS DE DISPLAY NO CSS


#### 16/05/2022


Display: Significa visualização, definir o tipo de visualização que o elemento vai ter na página, tipos block, inline, inline-block e none.

Valores mais tradicionais:
**Block:** 
>Ele ocupa todo espaço da pagina, tem quebra de linha.

**Inline:** 
>São dispostos da esquerda para direita ele sempre tem o tamanho suficiente para seu conteúdo, ignora largura e altura

**Inline-block:**
> Serve para ter elementos que podem ser definidos altura e largura, e que também pode estar um ao lado do outro, não tem quebra de linha.

**None:** 
>Não vai ser renderizado, O elemento não vai ser desenhado, não tem visualização e não vai ocupar espaço.


## <center>DISPLAY FLEX CSS


#### 17/05/2022


Display flex surgiu para resolver problemas com criação de telas flexíveis e responsivas, onde foi arquitetado uma nova ferramenta chamada Flexbox. Tem como objetivo ajudar o desenvolvedor a criar layouts robustos e flexíveis. Com ele podemos criar um sistema unidimensional , criando linhas e colunas baseados em um único eixo.
 

**Display: flex:**

 
> Faz com que os itens fiquem flexíveis

**Flex-direction: row:** 
 > Os itens são alinhados em linha

**Flex-direction: row-reverse:** 
> Em linhas porém os elementos são alinhados da direita para esquerda
  
**Flex-direction: column:** 
> Os elementos são aplicados em coluna.

**Flex-direction: column-reverse:** 
> Os elementos são aplicados em coluna porém de baixo para cima.

**Flex-wrap: wrap:** 
> faz com que a largura do elemento seja respeitada porém tem quebra de linha

  
**justify-content:**
> center; centraliza os itens.


**Justify-content: flex-start:** 
> Por padrão, define o alinhamento ao longo do eixo principal

**Justify-content; space-around:** 
> Vai respeitar a margem, vai distribuir a margem

## Async / await

#### 18/05/2022

Async e await, foram implementaas do ES2017, são sintaxe que simplifica a programação assíncrona, facilitando o fluxo de escrita, Eles trabalham com código baseado em Promises, Porém esconde as promessas para leitura fluída. Só é possível usar await quando declaramos async.

#### Exemplo:

		async function  getUser(userName) {

		let resposta = await  fetch(`https://api.com/api/user	
		/${userName}`);

		let userData = await resposta.json( );

	}

#### Diferenças entre then, async e await?

**Then:** vai executar uma função logo depois que sua tarefa terminar

**Async await:** vai dizer que sua tarefa é assíncrona e precisa de mais tempo para terminar

**Await:** vai dizer que você deve esperar a tarefa ser concluida para continuar

  
  

## Token de autenticação

#### 23/05/2022

Na autenticação por token, o usuário insere o login e senha na plataforma o que gera um token que permite que o usuario possa navegar pelos recursos do seu interesse, dentro de um prazo determinado, sem a necessidade de utilizar os dados do login novamente. A autenticação é um processo utilizado pelas plataformas para que possa ser confirmada a identidade do usuario, ela identifica quem solicita o acesso ao sistema, a fim de garantir que a pessoa está tentando entrar no servidor, é quem ela diz ser.

**O que é um token?**  Simplificando o token é uma sequência de dados que representa outra coisa, como uma identidade.

 #### Processos da autenticação por token:

		1.  O usuário envia as credenciais de acesso para o servidor;
    
		2.  O servidor faz a autenticação das credenciais e posteriormente gera um token;
    
		3.  A plataforma envia o token automaticamente para o usuário;
    
		4.  O usuário salva o token e o envia por meio de header (cabeçalho) sempre que fizer uma nova requisição;
    
		5.  A cada requisição, o servidor avalia se o token é válido ou não;
    
		6.  O servidor pode contar com um endpoint capaz de renovar o token.
		 
    

###  JSON Web Token

É um método padrão para realizar autenticação entre duas partes por meio de um token assinado que autentica uma requisição web. permite uma comunicação segura e protegida entre duas partes. Os dados são verificados com uma assinatura digital e, se forem enviados via HTTP, a criptografia mantém os dados seguros.

## Variáveis de Ambiente

#### 26/05/2022

No desenvolvimento de software, o que temos em comum são dados sensíveis, como informação do banco de dados, chaves de API’s, Secret Keys entre outras informações. Essas informações não podem ficar dando sopa por aí no repositório. Então para lidar com esse problema utilizamos variáveis de Ambiente.

### Dotenv

Dotenv é um módulo de dependência zero que carrega variáveis ​​de ambiente de um .env arquivo em process.env. O armazenamento da configuração no ambiente separado do código é baseado na metodologia The Twelve-Factor App .

**Como instalar?** 
			
				 npm install dotenv --save

**Uso:**
	 
		Crie um .env arquivo na raiz do seu projeto:

		CHAVE_NOME = " SUACHAVEAQUI "

**Como importar?**

		import 'dotenv/config'

		Const dotenv require('dotenv/config.js')

## Pesquisa Sobre Kanban

#### 02/06/2022

#### O que é Kanban?

O Kanban, uma palavra japonesa que significa cartões ou sinal, é conhecido como um método organizacional e de gestão visual que basicamente controla as tarefas de uma equipe. É um sistema ágil de gestão de produção ou de tarefas que funciona de maneira visual e dinâmica. Com ele, é possível organizar o fluxo de trabalho em colunas e cartões, de modo que toda a equipe visualize o fluxo do início ao fim, e identifique se há gargalos ou maneiras de otimizar o processo.

### Objetivo:

O kanban serve para melhorar a performance da sua empresa ou do seu trabalho priorizando a produtividade e a organização das entregas. Tem como objetivo proporcionar um trabalho mais transparente e direcionado.

### Funcionamento:

Normalmente o processo é dividido em 3 colunas, isso muda conforme as necessidades de cada projeto, adicionando mais colunas.

— **Para fazer** — — **Fazendo** — — **Feito** —

**Para fazer  :** Ficam as tarefas que precisam ser feitas

**Fazendo :** Ficam as tarefas que estão sendo feitas

**Feito :** Ficam as tarefas que já foram finalizadas.


## Seletores mais específicos e herança

```
<img>

<figure>
    <img src="img/matriz-musicdot" alt="Foto da matriz da"> 
</figure>
```
Aplicando largura de 300px para todas as tags img
	

      img {
         width: 300px;
        }

 
 para aplicarmos de forma mais especifica aplicando apenas para tag filha :
   ``

    figure img {
        width: 300px;
        }
 
**CSS - Exemplo:**

```
#matriz-musicdot {
    width: 300px;
}

```
Não é recomendado uso de id para estilização de elementos ja que o atributo faz referência única, quando queremos estilizar elementos específicos é melhor utilizar class=" ". O comportamento é o mesmo no CSS, o class foi feito para ser usado no CSS e no javaScript.

**CSS - Exemplo:**

    .matriz-musicdot {
        width: 300px;}

### Grau de especificidade de um seletor
O grau de especificidade de um seletor é algo muito importante. É a prioridade de um seletor pelo navegador. para entender estas regras ao criar seletor de tag:  pontuação se torna **1**. Quando usamos um seletor de classe sua pontuação se torna **10**. Quando usamos um seletor de id sua pontuação se torna **100**. Ao fim, o navegador soma a pontuação dos seletores aplicados à um elemento, e as propriedades com o seletor de maior pontuação são as que valem.

```
<body>
    <p class="paragrafo" id="paragrafo-rosa">Texto</p>
</body>

p { /* Pontuação 1 */
    color: blue;
}

.paragrafo { /* Pontuação 10 */
    color: red;
}

#paragrafo-rosa { /* Pontuação 100 */
    color: pink;
}
```

No exemplo acima o parágrafo vai ficar com a cor rosa porque o seletor que tem a cor rosa é o seletor de maior pontuação.

### Herança

A cascata do CSS, significa justamente a possibilidade de elementos filhos herdarem características de estilização de elementos superiores.

 exemplo a seguir:

```
<body>
    <p>Uma breve explicação de algo com um <a href="https://google.com.br">link</a> para uma referência de outra página</p>
    <figure>
        <img src="img/foto" alt="Uma foto">
        <figcaption>Uma foto</figcaption>
    </figure>
</body>

```
 Uma maneira que podemos fazer é selecionar todas as tags que contém text (`<p>`, `<a>` e `<figcaption>`) e colocar a família de fonte que queremos:

```
p {
    font-family: 'Helvetica', sans-serif;
}

a {
    font-family: 'Helvetica', sans-serif;
}

figcaption {
    font-family: 'Helvetica', sans-serif;
}
```

Ao invés de colocar essa propriedade em cada um dos elementos, podemos colocar o elemento superior a estas tags, neste caso é o `<body>`.

```
body {
    font-family: 'Helvetica', sans-serif;
}
```
##  O valor inherit

Imagine a seguinte divisão com uma imagem:

**Exemplo:**

```
<div>
    <img src="box-model.png" alt="box model">
</div>
```

```
div {
    width: 30px;
    height: 30px;
}
```

Queremos que a imagem preencha todo o espaço da `<div>`, mas as propriedades `width` e `height` não são aplicadas em cascata, sendo assim, somos obrigados a definir o tamanho da imagem manualmente:

```
img {
    width: 30px;
    height: 30px;
}
```

Esta não é uma solução sustentável, porque, caso alterarmos o tamanho da `<div>`, teremos que lembrar de alterar também o tamanho da imagem. Uma forma de resolver este problema é utilizando o valor **inherit** para as propriedades `width` e `height` da imagem:

```
img {
    width: inherit;
    height: inherit;
}
```

O valor `inherit` indica para o elemento filho que ele deve utilizar o mesmo valor presente no elemento pai, sendo assim, toda vez que o tamanho do elemento pai for alterado, automaticamente o elemento filho herdará o novo valor, facilitando assim, a manutenção do código.
