
# APis tudo sobre 

## fecth API

- um meio natido de realizar requisições a APIS com Javascript;
- Podemos utilizar com Promise ou Async/await;
- se a requisição for GET é precio passar apenas a URL do recurso que estamos resgatando da API;
- Caso seja outro verbo, podemos configurar a requisição com: method, body e headers;
- O fetch é muito utilizado com framseworks/libs como: React, vue e Angular
re

## API# API, REST e RESTFUL

## API

Cliente (Client)
Garçom (pedidos, levar seus pedidos, para a cozinha) (API)
Cozinha (Server)

Acrônimo de Application Programming Interface (Interface de Programação de Aplicações) é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias.
- Intermediador para troca de informações.

## REST

um acrônimo para REpresentational State Transfer (Transferência de Estado Representativo).

Será feita a transferência de dados de uma maneira simbólica, figurativa, representativa, de maneira didática.

A transferência de dados, geralmente, usando o protocolo HTTP.

O REST delimita algumas obrigações nessas transferências de dados.

Resources seria então: Uma entidade ou um objeto.

### 6 NECESSIDADES (constraints) para ser RESTful

- _Uniform Interface_: Manter uma uniformidade, uma constância, um padrão na construção da interface. Nossa API precisa ser coerente para quem vai consumi-lá. Precisa fazer sentido para o cliente e não ser confusa. Logo, coisas como: o uso correto dos verbos HTTP; endpoints coerentes (todos os endpoints no plural, por exemplo); usar somente uma linguagem de comunicação (json) e não várias ao mesmo tempo; sempre enviar respostas aos clientes; são exemplos de aplicação de uma interface uniforme.

- _Client-server_: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para o smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Nos nossos cursos, temos por padrão usar tokens para as comunicações.

- _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela resquição, pode ou não ser cacheada pelo cliente.

- _Layered System_: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.

## RESTFUL

RESTful, é a aplicação dos padrões REST.

## BOAS PRÁTICAS

- Utilizar verbos HTTP para nossas requisições.
- Utilizar plural ou singular na criação dos endpoints? _NÃO IMPORTA!_ use um padrão!!
- Não deixar barra no final do endpoint
- Nunca deixe o cliente sem resposta!

### VERBOS HTTP

- GET: Receber dados de um Resource.
- POST: Enviar dados ou informações para serem processados por um Resource.
- PUT: Atualizar dados de um Resource.
- DELETE: Deletar um Resource

# STATUS DAS RESPOSTAS
## Respostas informativas

### Error - 100 Continue

- Essa resposta provisória indica que tudo ocorreu bem até agora e que o cliente deve  continuar com a requisição ou ignorar se já concluiu o que gostaria.
### Error - 101 Switching Protocol

- Esse código é enviado em resposta a um cabeçalho de solicitação Upgrade (en-US) pelo cliente, e indica o protocolo a que o servidor está alternando.
###  Error - 102 Processing (en-US) (WebDAV (en-US))

- Este código indica que o servidor recebeu e está processando a requisição, mas nenhuma resposta está disponível ainda.
### Error - 103 Early Hints

- Este código tem principalmente o objetivo de ser utilizado com o cabeçalho Link, indicando que o agente deve iniciar a pré-carregar (en-US) recursos enquanto o servidor prepara uma resposta.

### Error - 200 OK

- Estas requisição foi bem sucedida. O significado do sucesso varia de acordo com o método HTTP:
### Error - 201 Created

- A requisição foi bem sucedida e um novo recurso foi criado como resultado. Esta é uma tipica resposta enviada após uma requisição POST.
### Error - 202 Accepted

- A requisição foi recebida mas nenhuma ação foi tomada sobre ela. Isto é uma requisição não-comprometedora, o que significa que não há nenhuma maneira no HTTP para enviar uma resposta assíncrona indicando o resultado do processamento da solicitação. Isto é indicado para casos onde outro processo ou servidor lida com a requisição, ou para processamento em lote.
### Error - 203 Non-Authoritative Information

- Esse código de resposta significa que o conjunto de meta-informações retornadas não é o conjunto exato disponível no servidor de origem, mas coletado de uma cópia local ou de terceiros. Exceto essa condição, a resposta de 200 OK deve ser preferida em vez dessa resposta.
### Error - 204 No Content

- Não há conteúdo para enviar para esta solicitação, mas os cabeçalhos podem ser úteis. O user-agent pode atualizar seus cabeçalhos em cache para este recurso com os novos.
### Error - 205 Reset Content

- Esta requisição é enviada após realizanda a solicitação para informar ao user agent redefinir a visualização do documento que enviou essa solicitação.
### Error - 206 Partial Content

- Esta resposta é usada por causa do cabeçalho de intervalo enviado pelo cliente para separar o download em vários fluxos.
### Error - 207 Multi-Status (en-US) (WebDAV (en-US))

- Uma resposta Multi-Status transmite informações sobre vários recursos em situações em que vários códigos de status podem ser apropriados.
### Error - 208 Multi-Status (en-US) (WebDAV (en-US))

- Usado dentro de um elemento de resposta <dav:propstat> para evitar enumerar os membros internos de várias ligações à mesma coleção repetidamente.
### Error - 226 IM Used (en-US) (HTTP Delta encoding)

- O servidor cumpriu uma solicitação GET para o recurso e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual.

## Mensagens de redirecionamento

### Error - 300 Multiple Choice

- A requisição tem mais de uma resposta possível. User-agent ou o user deve escolher uma delas. Não há maneira padrão para escolher uma das respostas.
### Error - 301 Moved Permanently

- Esse código de resposta significa que a URI do recurso requerido mudou. Provavelmente, a nova URI será especificada na resposta.
### Error - 302 Found

- Esse código de resposta significa que a URI do recurso requerido foi mudada temporariamente. Novas mudanças na URI poderão ser feitas no futuro. Portanto, a mesma URI deve ser usada pelo cliente em requisições futuras.
### Error - 303 See Other

- O servidor manda essa resposta para instruir ao cliente buscar o recurso requisitado em outra URI com uma requisição GET.
### Error - 304 Not Modified

- Essa resposta é usada para questões de cache. Diz ao cliente que a resposta não foi modificada. Portanto, o cliente pode usar a mesma versão em cache da resposta.
### Error - 305 Use Proxy Deprecated

- Foi definida em uma versão anterior da especificação HTTP para indicar que uma resposta deve ser acessada por um proxy. Foi depreciada por questões de segurança em respeito a configuração em banda de um proxy.
### Error - 306 unused Deprecated

- Esse código de resposta não é mais utilizado, encontra-se reservado. Foi usado numa versão anterior da especificação HTTP 1.1.
### Error - 307 Temporary Redirect

- O servidor mandou essa resposta direcionando o cliente a buscar o recurso requisitado em outra URI com o mesmo método que foi utilizado na requisição original. Tem a mesma semântica do código 302 Found, com a exceção de que o user-agent não deve mudar o método HTTP utilizado: se um POST foi utilizado na primeira requisição, um POST deve ser utilizado na segunda.
### Error - 308 Permanent Redirect

- Esse código significa que o recurso agora está permanentemente localizado em outra URI, especificada pelo cabeçalho de resposta Location. Tem a mesma semântica do código de resposta HTTP 301 Moved Permanently com a exceção de que o user-agent não deve mudar o método HTTP utilizado: se um POST foi utilizado na primeira requisição, um POST deve ser utilizado na segunda.

# Respostas de erro do Cliente

### Error - 400 Bad Request

- Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.
### Error - 401 Unauthorized

- Embora o padrão HTTP especifique "unauthorized", semanticamente, essa resposta significa "unauthenticated". Ou seja, o cliente deve se autenticar para obter a resposta solicitada.
### Error - 402 Payment Required Experimental

- Este código de resposta está reservado para uso futuro. O objetivo inicial da criação deste código era usá-lo para sistemas digitais de pagamento porém ele não está sendo usado atualmente.
### Error - 403 Forbidden

- O cliente não tem direitos de acesso ao conteúdo portanto o servidor está rejeitando dar a resposta. Diferente do código 401, aqui a identidade do cliente é conhecida.
### Error - 404 Not Found

- O servidor não pode encontrar o recurso solicitado. Este código de resposta talvez seja o mais famoso devido à frequência com que acontece na web.
### Error - 405 Method Not Allowed

- O método de solicitação é conhecido pelo servidor, mas foi desativado e não pode ser usado.
### Error - 406 Not Acceptable

- Essa resposta é enviada quando o servidor da Web após realizar a negociação de conteúdo orientada pelo servidor, não encontra nenhum conteúdo seguindo os critérios fornecidos pelo agente do usuário.
### Error - 407 Proxy Authentication Required

- Semelhante ao 401 porem é necessário que a autenticação seja feita por um proxy.
### Error - 408 Request Timeout

- Esta resposta é enviada por alguns servidores em uma conexão ociosa, mesmo sem qualquer requisição prévia pelo cliente. Ela significa que o servidor gostaria de derrubar esta conexão em desuso. Esta resposta é muito usada já que alguns navegadores, como Chrome, Firefox 27+, ou IE9, usam mecanismos HTTP de pré-conexão para acelerar a navegação. Note também que alguns servidores meramente derrubam a conexão sem enviar esta mensagem.
### Error - 409 Conflict

- Esta resposta será enviada quando uma requisição conflitar com o estado atual do servidor.
### Error - 410 Gone

- Esta resposta será enviada quando o conteúdo requisitado foi permanentemente deletado do servidor, sem nenhum endereço de redirecionamento. É experado que clientes removam seus caches e links para o recurso. A especificação HTTP espera que este código de status seja usado para "serviços promocionais de tempo limitado". APIs não devem se sentir obrigadas a indicar que recursos foram removidos com este código de status.
### Error - 411 Length Required

- O servidor rejeitou a requisição porque o campo Content-Length do cabeçalho não está definido e o servidor o requer.
### Error - 412 Precondition Failed

- O cliente indicou nos seus cabeçalhos pré-condições que o servidor não atende.
### Error - 413 Payload Too Large

- A entidade requisição é maior do que os limites definidos pelo servidor; o servidor pode fechar a conexão ou retornar um campo de cabeçalho Retry-After.
### Error - 414 URI Too Long

- A URI requisitada pelo cliente é maior do que o servidor aceita para interpretar.
### Error - 415 Unsupported Media Type

- O formato de mídia dos dados requisitados não é suportado pelo servidor, então o servidor rejeita a requisição.
### Error - 416 Requested Range Not Satisfiable
- O trecho especificado pelo campo Range do cabeçalho na requisição não pode ser preenchido; é possível que o trecho esteja fora do tamanho dos dados da URI alvo.
### Error - 417 Expectation Failed
- Este código de resposta significa que a expectativa indicada pelo campo Expect do cabeçalho da requisição não pode ser satisfeita pelo servidor.
### Error - 418 I'm a teapot

- O servidor recusa a tentativa de coar café num bule de chá.
### Error - 421 Misdirected Request (en-US)

- A requisição foi direcionada a um servidor inapto a produzir a resposta. Pode ser enviado por um servidor que não está configurado para produzir respostas para a combinação de esquema ("scheme") e autoridade inclusas na URI da requisição.
### Error - 422 Unprocessable Entity (WebDAV (en-US))

- A requisição está bem formada mas inabilitada para ser seguida devido a erros semânticos.
### Error - 423 Locked (en-US) (WebDAV (en-US))

- O recurso sendo acessado está travado.
### Error - 424 Failed Dependency (en-US) (WebDAV (en-US))

- A requisição falhou devido a falha em requisição prévia.
### Error - 425 Too Early

- Indica que o servidor não está disposto a arriscar processar uma requisição que pode ser refeita.
### Error - 426 Upgrade Required

- O servidor se recusa a executar a requisição usando o protocolo corrente mas estará pronto a fazê-lo após o cliente atualizar para um protocolo diferente. O servidor envia um cabeçalho Upgrade (en-US) numa resposta 426 para indicar o(s) protocolo(s) requeridos.
### Error - 428 Precondition Required

- O servidor de origem requer que a resposta seja condicional. Feito para prevenir o problema da 'atualização perdida', onde um cliente pega o estado de um recurso (GET) , modifica-o, e o põe de volta no servidor (PUT), enquanto um terceiro modificou o estado no servidor, levando a um conflito.
### Error - 429 Too Many Requests

- O usuário enviou muitas requisições num dado tempo ("limitação de frequência").
### Error - 431 Request Header Fields Too Large

- O servidor não quer processar a requisição porque os campos de cabeçalho são muito grandes. A requisição PODE ser submetida novemente depois de reduzir o tamanho dos campos de cabeçalho.
### Error - 451 Unavailable For Legal Reasons

- O usuário requisitou um recurso ilegal, tal como uma página censurada por um governo.

# Respostas de erro do Servidor

### Error - 500 Internal Server Error

- O servidor encontrou uma situação com a qual não sabe lidar.
### Error - 501 Not Implemented

- O método da requisição não é suportado pelo servidor e não pode ser manipulado. Os únicos métodos exigidos que servidores suportem (e portanto não devem retornar este código) são GET e HEAD.
### Error - 502 Bad Gateway

- Esta resposta de erro significa que o servidor, ao trabalhar como um gateway a fim de obter uma resposta necessária para manipular a requisição, obteve uma resposta inválida.
### Error - 503 Service Unavailable

- O servidor não está pronto para manipular a requisição. Causas comuns são um servidor em manutenção ou sobrecarregado. Note que junto a esta resposta, uma página amigável explicando o problema deveria ser enviada. Estas respostas devem ser usadas para condições temporárias e o cabeçalho HTTP Retry-After: deverá, se possível, conter o tempo estimado para recuperação do serviço. O webmaster deve também tomar cuidado com os cabeçalhos relacionados com o cache que são enviados com esta resposta, já que estas respostas de condições temporárias normalmente não deveriam ser postas em cache.
### Error - 504 Gateway Timeout

- Esta resposta de erro é dada quando o servidor está atuando como um gateway e não obtém uma resposta a tempo.
### Error - 505 HTTP Version Not Supported

- A versão HTTP usada na requisição não é suportada pelo servidor.
### Error - 506 Variant Also Negotiates

- O servidor tem um erro de configuração interno: a negociação transparente de conteúdo para a requisição resulta em uma referência circular.
### Error - 507 Insufficient Storage

- O servidor tem um erro interno de configuração: o recurso variante escolhido está configurado para entrar em negociação transparente de conteúdo com ele mesmo, e portanto não é uma ponta válida no processo de negociação.
### Error - 508 Loop Detected (WebDAV (en-US))

- O servidor detectou um looping infinito ao processar a requisição.
### Error - 510 Not Extended
- Exigem-se extensões posteriores à requisição para o servidor atendê-la.
### Error - 511 Network Authentication Required
- O código de status 511 indica que o cliente precisa se autenticar para ganhar acesso à rede.

