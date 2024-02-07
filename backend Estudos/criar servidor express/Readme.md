
```js
 

criando servidor http com nodejs
import http from 'http';
const PORT = 3001;

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("curso Node.js")
});


server.listen(PORT, ()=> {
    console.log(`escutando a na porta ${PORT}`)
})



const livros = []
livros.push(newbook)

O método push é uma função embutida no JavaScript que permite adicionar um elemento ou vários elementos ao final de um array existente. Ele modifica o próprio array, aumentando o seu tamanho e inserindo os novos elementos no final.8 de ago. de 2023


findIndex() O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida.




const lista = [
    {
      name: "Torre 1",
      download: "aquivo",
      ip: '192.168.0.1',
      status: "online",
    },
    {
      name: "Torre 2",
      download: "aquivo",
      ip: '192.168.0.2',
      status: "online",
    },
    {
      name: "Torre 2",
      download: "aquivo",
      ip: '192.168.0.3',
      status: "offline",
    },

    {
      name: "Torre 3",
      download: "aquivo",
      ip: '192.168.0.4',
      status: "online",
    },
    {
      name: "Torre 5",
      download: "aquivo",
      ip: '192.168.0.5',
      status: "online",
    }
    ,
    {
      name: "Torre 6",
      download: "aquivo",
      ip: '192.168.0.5',
      status: "online",
    }
  ];

app.get('/', (req, res) => {
    res.send("servidor rodando")
}) 

app.get('/listaAntenas', (req, res)=> {
   

    const total = lista.length;
    let totalOnline = 0;
    let totalOffline = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].status === "online") {
          totalOnline++;
        }
        if(lista[i].status === "offline") {
          totalOffline++
        }
      }     
    res.json({lista, total, totalOnline, totalOffline})
})

app.get('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email === "hitallosoares1@gmail.com" && password === "A12345678@&") {
        res.status(200).json({ message: 'Logado!' });
    } else {
        return res.status(401).json({ error: "Usuário ou senha inválidos" });
    }
});



```