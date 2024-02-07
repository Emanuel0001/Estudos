
# Para saber mais: Funções importantes dentro do React com Javascript
## map

O map é um método MUITO importante, pois como no React existe essa combinação grandiosa entre  `reaproveitamento de código`  e  `renderização dinâmica`, o map é o método perfeito para isso, pois você consegue iterar sobre todos os itens e retornar alguma coisa no mesmo index que está sendo iterado no laço atual, ou seja:

```csharp
const tecnologias = ['React', 'Typescript', 'Javascript'];
```

Se você faz isso daqui:

```javascript
const tecnologiasComJSX = tecnologias.map(tecnologia => <li> {tecnologia} </li>)
```

Nesse caso, a variável tecnologiasComJSX será  `[<li> React </li>, <li> Typescript </li>, <li> Javascript </li>]`

Com isso transformamos todos os itens deste array em JSX!! Essa é a magia  `map`!!

## Spread Operator

O  `Spread Operator`  é muito importante para fazer atualizações em estados, pois quando queremos atualizar estados, é comum termos parte do estado que não será alterado, veja esse caso:

```bash
let curso = {
  instrutor: "Luiz Fernando",
 curso: "React com Typescript"
}
```

Caso queiramos adicionar o ano em que o curso foi lançado, podemos fazer isso:

```yaml
curso = {
  …curso,
  ano: 2021
}
```

Esse  `...curso`  dentro das chaves significa que dentro daquele novo objeto que está sendo criado terá tudo que  `curso`  tinha e o ano que faltava, ficando assim:

```yaml
{
  instrutor: "Luiz Fernando",
  curso: "React com Typescript",
  ano: 2021
}
```