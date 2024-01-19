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

  