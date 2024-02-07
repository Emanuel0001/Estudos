http headers 
no header do cabeçalho da requisição contem informacções deste reqsuição
por exemplo qual protocolo usado ----- get-post-delet
host - www.asda.as.c --- para onde ta sendo reqsuitado


Requisições e comunicações

O REST precisa que um cliente faça uma requisição para o servidor para enviar ou modificar dados. Um requisição consiste em:

Um verbo ou método HTTP, que define que tipo de operação o servidor vai realizar;
Um header, com o cabeçalho da requisição que passa informações sobre a requisição;
Um path (caminho ou rota) para o servidor, como por exemplo https://www.alura.com.br/artigos/golang-trabalhando-com-datas;
Informação no corpo da requisição, sendo esta informação opcional.


Métodos HTTP

Em aplicação REST, os métodos mais utilizados são:

O método GET é o método mais comum, geralmente é usado para solicitar que um servidor envie um recurso;
O método POST foi projetado para enviar dados de entrada para o servidor. Na prática, é frequentemente usado para suportar formulários HTML;
O método PUT edita e atualiza documentos em um servidor;
O método DELETE que como o próprio nome já diz, deleta certo dado ou coleção do servidor.

Códigos de Respostas

Cada resposta que a aplicação REST retorna, é enviado um código definindo o status da requisição. Por exemplo:

200 (OK), requisição atendida com sucesso;
201 (CREATED), objeto ou recurso criado com sucesso;
204 (NO CONTENT), objeto ou recurso deletado com sucesso;
400 (BAD REQUEST), ocorreu algum erro na requisição (podem existir inumeras causas);
404 (NOT FOUND), rota ou coleção não encontrada;
500 (INTERNAL SERVER ERROR), ocorreu algum erro no servidor.


Além da URL, requisições HTTP também precisam de portas específicas para que a comunicação ocorra com sucesso.

O que são portas? Também chamadas de portas lógicas, elas são gerenciadas pelo sistema operacional e agem como pontos onde conexões de rede acontecem. Por exemplo, a comunicação com a API que estamos desenvolvendo se dá através da porta 3000.

O número padrão de portas é 65.535. As portas são identificadas por números padronizados e muitas portas estão associadas a processos específicos, por exemplo:

5432 é usada para conexão com serviços do banco de dados PostgreSQL.
3306/3307 são usadas em conexões com o banco MySQL.
587 utilizada para conexões SMTP (Simple Mail Transfer Protocol, o protocolo de envio e recebimento de e-mails).
80 é a porta padrão de conexões HTTP, usada pelos navegadores.

biblioteca costuman ser especificas no que elas fazem
ja o framwork é um conjunto de bibliotecas

O protocolo de comunicação HTTP é baseado em requisições e respostas e na comunicação cliente-servidor.

Todo processo de requisição-resposta usando HTTP é sempre iniciado pelo lado cliente da requisição. O lado servidor da requisição nunca envia “ativamente” nenhuma resposta para o lado cliente sem ser como resultado de uma requisição.

Partes da requisição
As partes que podem compor uma requisição são:

URL, também chamado de caminho ou rota, sempre iniciado com http:// ou https://.
Header, também chamado de cabeçalho, envia informações referentes ao cliente ou ao tipo de requisição. Alguns dados enviados através dos cabeçalhos são:
host é o domínio do servidor que receberá a requisição.
User-agent identifica o cliente, por exemplo, dados do navegador de onde está saindo a requisição.
Content-Type é o formato do dado que está sendo enviado no body da requisição, por exemplo JSON, string etc. Confira a lista completa de tipos de dados e como devem ser declarados no header.
Authorization são as credenciais de autenticação para acesso a recursos protegidos.
Accept especifica o formato de retorno esperado na resposta, por exemplo, JSON.
Body ou corpo da requisição, onde são trafegados dados enviados pelo cliente para serem recebidos pelo servidor, normalmente utilizado para dados mais estruturados e em requisições POST, PUT or PATCH. O tipo de dado enviado pelo body deve ser o mesmo especificado no Content-Type, por exemplo, application/json.
Parâmetros são inseridos na URL para envio de dados específicos, muito utilizados, por exemplo, para envio de informações variáveis como termos de buscas, IDs etc.
Método HTTP, entre os aceitos pela rota, especifica o tipo de operação solicitado pelo cliente. Os mais comuns são os métodos GET, POST, PUT e DELETE. Vamos trabalhar com estes métodos com mais profundidade durante o curso.

o navegador so faz requisições do tipo GET

CRUD (Create, Read, Update, Delete) é um acrônimo para as operações mais comuns feitas em qualquer base de dados: Criar, ler, atualizar e excluir.

No dia a dia, quando falamos em CRUD normalmente também nos referimos a aplicações, APIs ou serviços responsáveis por estas operações. Além da lógica básica de GET, POST, PUT/PATCH e DELETE, as aplicações normalmente implementam um conjunto de outras funcionalidades necessárias ao CRUD, como métodos de validação, autenticação, paginação, testes, tratamento de erros etc.

Muitos serviços e aplicações complexas têm por trás algum tipo de operação de CRUD, o que faz parecer uma tarefa “simples”. Na verdade, o termo CRUD descreve apenas os tipos de operação, por outro lado a implementação pode ser muito complexa! Cada produto tem sua especificidade, além das escolhas de arquitetura e de ferramentas, ou seja, cada implementação tem um número enorme de variáveis e sempre há coisas novas a aprender e novos problemas para resolver.

Nossa implementação de CRUD é o primeiro passo, a partir daqui já vai ser possível expandir para diversas outras funcionalidades. Após finalizar o projeto deste curso, você pode continuar explorando esta API 
