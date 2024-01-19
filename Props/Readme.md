
## O que é Prop Drilling?

Vamos entender o que é, quando acontece e qual a solução para lidar com prop drilling dentro de uma  [**aplicação React**](https://www.alura.com.br/artigos/react-js).

**Prop drilling**  é um estágio do desenvolvimento que acontece quando precisamos obter dados que estão em várias camadas na  **árvore de componente react**. Vamos ver esse conceito funcionando na prática, passando  **props**  de um componente para outro.

![](https://www.alura.com.br/artigos/assets/propo-drilling/imagem-1.png)


## Passando props

Passamos  **informações entre componentes**  através das props, no exemplo abaixo temos um arquivo que recebe um componente  `<Painel />`  que por sua vez recebe um nome de usuário:

```
//código omitido
const username = “maria”

<Painel username={ username }/>
//código omitido 
```

Para que esse nome seja exibido na tela precisamos passar essa informação para o componente  `< Painel />`.

No arquivo onde criamos o componente  `<Painel />`  podemos receber no  **objeto prop**  a informação do nome. E para exibir o nome na página fazemos a interpolação  `props.username`.

```
export default function Painel(props) { 
   return <div>{props.username}</div>
}
```

Agora se o componente  `<Painel />`  retornasse um outro componente e esse componente precisasse da informação do username, como ficaria?

## Prop Drilling

Para resolver esse caso, teríamos que passar essa informação um nível abaixo.

```
export default function Painel( {username} ) { 
   return <div><Artigo username={username} /></div>
}
```

Esse padrão de passar uma props para outro componente que esteja mais em baixo na árvore de componentes é chamado de prop drilling.

Nesse caso estamos passando username para o componente  `<Artigo />`  mas não estamos utilizando diretamente no componente  `<Painel />`. Lidar prop drilling pode ser desafiador, em pouco tempo fica difícil para qualquer pessoa descobrir onde os dados são inicializados, onde são atualizados e onde são usados.

Então como evitamos o prop drilling?

## React Context

Um dos modos que podemos evitar prop drilling no React é através do  [**ReactContext**](https://pt-br.reactjs.org/docs/context.html), ele é uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível.

Para passar o nome para o componente  `<Painel />`, temos primeiro que criar um contexto com  **React.createContext()**. No nosso caso a referência desse contexto é o  `UserContext`.

```
export const UserContext = React.createContext()
```

E para passar os valores do componente pai para o filho temos que criar um  `provedor`  ou  **Provider**:

```
<UserContext.Provider>
   <Painel />
<UserContext.Provider />
```

Agora dizemos quais valores vamos passar para o componente  `<Painel />`  através do Provider, para isso utilizamos o  **atributo value**:

```
export const UserContext = React.createContext()

<UserContext.Provider value={username}>
   <Painel />
<UserContext.Provider />
```

E agora como recebemos esse valor?

A chamada do createContext devolve um  **objeto com dois valores**, utilizamos o primeiro o Provider, e para pegar o valor do context precisamos de um consumidor ou  **Consumer**  e para obter o username que estamos passando usamos a sintaxe de  **render prop**:

```
export default function Painel( ) { 
   return <div>
                 <UserContext.Consumer>
                      { value => <div>Bom dia, { value} </div>}
                 <UserContext.Consumer />
              </div>
}
```

Essa é uma maneira de passar props do componente pai para o componente filho evitando o prop drilling.

## Para saber mais

Com a adição do  **hook**  [**useContext**](https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext), podemos simplificar nosso código, passando o  `UserContext`  como contexto e usando somente o  `value`  dentro do retorno:

```
export default function Painel( ) { 
const value = useContext(UserContext)
   return <div>
                 Bom dia, { value } 
              </div>
}
```