
## ternaries

Ternários são bem importantes para a parte  `renderização condicional`  do React, pois ele permite que consigamos renderizar JSX de forma condicional, adicionar classes de forma condicional, mudar estados de forma condicional, entre outros.

### Exemplo de ternário em JSX

```javascript
return (
  <>
    {condicao ?
      <p> Atende a condição </p>
    :
      <p> Não atende a condição </p>
    }
  </>
)
```

Nesse caso dou uma menção honrosa ao operador  `&&`, que nos permite renderizar de forma condicional também, mas sem a necessidade do  `:`, ou seja, de um  `else`:

```javascript
return (
  <>
    {condicao &&
      <p> Esse JSX só vai renderizar se a condição for verdadeira </p>
    }
  </>
)
```

### Exemplo de ternário em classes CSS

```bash
return (
 <button className={condicional ? "classe-com-condicional" : "classe-sem-condicional"}>
    Meu botão
  </button>
)
```

### Exemplo de ternário em mudança de estado

```php
const [curso, setCurso] = useState({ nome: "React com Typescript", completado: false });
…
setCurso({
  nome: "React com Typescript",
  completado: false,
  completado: condicao ? true : false
})
```

## destructuring

Para finalizar, o destructuring é muito útil para podermos aproveitar estados anteriores e mudarmos alguma coisa, vamos escrever o exemplo acima:

```php
const [curso, setCurso] = useState({ nome: "React com Typescript", completado: false });
…
setCurso({
  …curso,
 completado: condicao ? true : false
})
```