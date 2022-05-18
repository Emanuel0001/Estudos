
 

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

**Block:** Ele ocupa todo espaço da pagina, tem quebra de linha.

**Inline:** São dispostos da esquerda para direita ele sempre tem o tamanho suficiente para seu conteúdo, ignora largura e altura

**Inline-block:** Serve para ter elementos que podem ser definidos altura e largura, e que também pode estar um ao lado do outro, não tem quebra de linha.

**None:** Não vai ser renderizado, O elemento não vai ser desenhado, não tem visualização e não vai ocupar espaço.

  
## <center>DISPLAY FLEX CSS

#### 17/05/2022

Display flex surgiu para resolver problemas com criação de telas flexíveis e responsivas, onde foi arquitetado uma nova ferramenta chamada Flexbox. Tem como objetivo ajudar o desenvolvedor a criar layouts robustos e flexíveis. Com ele podemos criar um sistema unidimensional , criando linhas e colunas baseados em um único eixo.

**Display: flex:**  Faz com que os itens fiquem flexíveis

**Flex-direction: row:** – os itens são alinhados em linha

**Flex-direction: row-reverse:** em linhas porém os elementos são alinhados da direita para esquerda

**Flex-direction: column:** Os elementos são aplicados em coluna.

**Flex-direction: column-reverse:** Os elementos são aplicados em coluna porém de baixo para cima.

**Flex-wrap: wrap:** faz com que a largura do elemento seja respeitada porém tem quebra de linha

**justify-content:** center; centraliza os itens.

**Justify-content: flex-start:** por padrão, define o alinhamento ao longo do eixo principal

**Justify-content; space-around:** vai respeitar a margem, vai distribuir a margem
