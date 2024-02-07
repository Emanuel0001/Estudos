
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