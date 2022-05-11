var n1 = 100, n2 = 200, i, soma;
 
 soma = 0;
 
 if (n1<n2){
  for(i=n1;i<=n2;i++){
   if(i%13!=0){
    soma +=i;
   }
  }
 }else{
  for (i=n2;i<=n1;i++){
   if(i%13!=0){
    soma+=i;
   }
  }
 }
 console.log("%d\n",soma);
 
/*var nota1 = -3.5
var nota2 = 3.5
var nota3 = 11.0
var nota4 = 10.0

var notas = 0
    if (nota1 < 0 || nota1 > 10) {
        console.log("nota invalida");
    } else {
        notas = nota1;
    }

    if (nota2 < 0 || nota2 > 10) {
        console.log("nota invalida");
    } else {
        notas = nota2;
    } 
    
    
    if (nota3 < 0 || nota3 > 10) {
        console.log("nota invalida");
    } else {
        notas = nota3;
    }  if (nota4 < 0 || nota4 > 10) {
        console.log("nota invalida");
    } else {
        notas += nota4;
    }

var media = notas /2;

console.log("media = " +  media);


var num = [2.0 ,4.0 ,7.5, 8.0]
var notaExame = 6.4
   var media = (num[0]*2 + num[1]*3 + num[2]*4 + num[3]*1 )/10

console.log("Media: "+media.toFixed(1))
if(media >=7.0){
    console.log("Aluno aprovado");
} else if (media < 5.0){
    console.log("Aluno reprovado")
} else if(media >= 5.0 && media <= 6.9){
    console.log("Aluno em exame");

console.log("Nota do exame: "+notaExame);

var recalculandoMedia = (notaExame+media) /2
console.log("Media Final: "+recalculandoMedia)

}



var  a = 6.0
var b = 6.0
var c = 10.0
if (a < b){ x = a; a = b; b = x; } 
if (b < c){ x = b; b = c; c = x; } 
if (a < b){ x = a; a = b; b = x; }
if (a >= b + c) {console.log("NAO FORMA TRIANGULO");
}
if (a * a == b * b + c * c){
    console.log("TRIANGULO RETANGULO");
}

if (a * a > b * b + c * c){
console.log("TRIANGULO OBTUSANGULO");
} 
if (a * a < b * b + c * c){ console.log("TRIANGULO ACUTANGULO");
}
if (a == b && b == c){ 
   console.log("TRIANGULO EQUILATERO");
}

if (a == b || b == c){ console.log("TRIANGULO ISOSCELES");
}

/* var Hora_inicio = 7 
var minuto_inicio = 10
var hora_final = 8
var minuto_final = 9

var tempo_horatotal = 0
var tempo_minutototal = 0

tempo_horatotal = hora_final - Hora_inicio;

if (tempo_horatotal < 0)
{
    tempo_horatotal = 24 + (hora_final - Hora_inicio);
}

tempo_minutototal = minuto_final - minuto_inicio;
if (tempo_minutototal < 0)

{
tempo_minutototal = 60 + (minuto_final - minuto_inicio);
tempo_horatotal--;
}

if (Hora_inicio == hora_final && minuto_inicio == minuto_final)

{
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
}
else {console.log(`O JOGO DUROU ${tempo_horatotal} HORA(S) E ${tempo_minutototal} MINUTO(S)`);
}
var num = [1,2,3,4,5],total,media;
 var cont,totalnum;
     totalnum = 0;
     total = 0;
     media = 0;
  
        for (cont = 0; cont <= 5; cont++) {
        if (num[cont] > 0) {
          totalnum += 1;
          total += num[cont];
       }
      }
      media = total / totalnum;

     console.log(totalnum+" Valores positivos",);
     console.log(media);

    var salario = 3002,x;
    if(salario <= 2000.0) {
        console.log("Isento");
    }
    else if(salario <= 3000.0 ){
        x = (salario - 2000.0)*0.08;
        console.log("R$ "+ x);
    }
    else if( salario <= 4500.0){
        x = (salario - 3000.0)*0.18 + (1000*0.08);
        console.log("R$ "+ x);
    }
    else {
        x = (salario - 4500)*0.28 + (1500*0.18) + (1000*0.08);
        console.log("R$ "+ x);
    }  num = [1,2,3,4,5]
     var cont1, cont2,maior, posicao;
     cont2=0;
     maior=0;
    
        for(cont1=0;cont1<=100;cont1++){
            
            if(maior<num[cont1]){
                maior=num[cont1];
                posicao=cont1;
            }
        }
        console.log("%d\n%d\n",maior,posicao);



x=[2,16]

i = parseInt(x[0])
f = parseInt(x[1])

if (i < f){
    t = f - i}
else{
    t = (24 - i) + f
}
console.log(`O JOGO DUROU ${t} HORA (S)`)


var num = 8

while(num>0){
if(num%2==1){
  var impares = [] 
  impares.push(num)  
   console.log(impares[0])
}
num--

}



var B = 25
if ( A%B == 0 || B%A == 0 ) {
  console.log("Sao Multiplos")   
} else{
   console.log("Nao sao Multiplos")
}


var a = 6.0
var b = 4.0
var c = 2.0


if (a < b + c && b < a + c && c < a + b)
{
    console.log("Perimetro = ", (a + b + c).toFixed(1));
}
else
{
    console.log("Area = ", c * (a + b) / 2.toFixed(1));
}

a = 7
b = 21
c = -14
var [a,b,c] = input.split(' ').map(item => parseInt(item));
if(a>b && a>c){
    var maior = a
} else if(b>a && b>c){
    var maior = b
}else if(c>a && c>b){
    var maior = c
}

 if(a<b && a<c){
    var menor = a
} else if(b<a && b<c){
    var menor = b
}else if(c<a && c<b){
    var menor = c
} 

 if(a>b && a<c || a>c && a<b){
    var media = a
} else if(b>a && b<c || b>c && b<a){
    var media = b
}else if(c>a && c<b || c>b && b<a){
    var media = c
}
console.log(menor +"\n"+media+"\n"+maior+"\n")

console.log(a +"\n"+b+"\n"+c)

var X = 1;
var fuel=0;
var alcool=0;
var gasolina=0;
var diesel=0;
    while(X != 4) { 
         if (X == 1) {
             alcool+=1;
             
         }else if (X == 2) {
             gasolina += 1;
             
         }else if (X == 3) {
             diesel += 1;
         } else if(X==4){console.log("final")}
  
        } 
     
     console.log(`
Alcool: ${alcool}
Gasolina: ${gasolina}
Diesel: ${diesel}`)

/*
a = 6
b = 4
c = 20

if(a>b && a>c){
    var maior = a
} else if(b>a && b>c){
    var maior = b
}else if(c>a && c>b){
    var maior = b
}

 if(a<b && a<c){
    var menor = a
} else if(b<a && b<c){
    var menor = b
}else if(c<a && c<b){
    var menor = c
} 

 if(a>b && a<c ){
    var media = a
} else if(b>a && b<c){
    var media = b
}else if(c>a && c<b){
    var media = c
}
console.log(maior,menor,media)

 var a = -5

    var b = 3
    var c = 4

    if(a<b && a<c ){
        var menor = a
    }else if(b<a && b<c ){
        var menor = b
    }else if(c<b && c<a ){
        var menor = c
    }
if(menor <0 || menor > 0){
 if(a>b && a>c ){
        var maior = a
    }else if(b>a && b>c ){
        var maior = b
    }else if(c>b && c>a ){
        var maior = c
    }}
if(maior >0){
    if(a>b && a<c ){
        var meio = a
    }else if(b>a && b<c ){
        var meio = b
    }else if(c>b && c<a ){
        var meio = c
    }
}
    console.log(menor)
    console.log(meio)
    console.log(maior)
    console.log(" ")
    console.log(a)
    console.log(b)
    console.log(c)

    
   /*var renda = 3002

if (renda >=0 && renda <= 2000.00){
    console.log("Isento");
}
else if( renda>= 2000.01 && renda <= 3000.00){
    var imposto = renda * 0.08
    console.log("R$ "+ imposto.toFixed(2))
}

else if( renda>= 3000.01 && renda <= 4500.00){
    var imposto = renda * 0.18
    console.log("R$ "+ imposto.toFixed(2))
}

else if( renda>4500){
    var imposto = renda * 0.28
    console.log("R$ "+ imposto.toFixed(2))
}

var DDD = 61;
if(DDD== 61){
    console.log("Brasilia")
}
else if(DDD==71){
    console.log("Salvador")
}

else if(DDD== 11){
    console.log("Sao Paulo")
}
else if(DDD== 21){
    console.log("Rio de Janeiro")
    
}
else if(DDD== 32){
    console.log("Juiz de Fora")
}

else if(DDD== 19){
    console.log("Campinas")
}

else if(DDD== 27){
    console.log("Vitoria")
}

else if(DDD== 31){
    console.log("Belo Horizonte")
}
var A = 5
var B = 6
var C = 7
var D = 8

if(B>C && D>A && (C+D)> (A+B) && C>0 && D>0 && A%2==0){
    console.log("Valores nao aceitos")
}else {
    console.log("Valores aceitos")
}

salario = 2000.01


if(salario >= 0 && salario <= 400){
    var novoSalario = salario * 0.15 + salario
    var aumento = salario * 0.15
    console.log("Novo salario: "+novoSalario.toFixed(2))
    console.log("Reajuste ganho: "+aumento.toFixed(2))
    console.log("Em percentual: 15 %")}
    
    
    else if(salario > 400.01 && salario <= 800.00){
    var novoSalario = salario * 0.12 + salario
    var aumento = salario * 0.12
    console.log("Novo salario: "+novoSalario.toFixed(2))
    console.log("Reajuste ganho: "+aumento.toFixed(2))
    console.log("Em percentual: 12 %")}
    
    
    else if(salario >= 800.01 && salario <= 1200.00){
    var novoSalario = salario * 0.10 + salario
    var aumento = salario * 0.10
    console.log("Novo salario: "+novoSalario.toFixed(2))
    console.log("Reajuste ganho: "+aumento.toFixed(2))
    console.log("Em percentual: 10 %")}
    
    else if(salario >= 1200.01 && salario <= 2000.00){
    var novoSalario = salario * 0.07 + salario
    var aumento = salario * 0.07
    console.log("Novo salario: "+novoSalario.toFixed(2))
    console.log("Reajuste ganho: "+aumento.toFixed(2))
    console.log("Em percentual: 7 %")}
    
    else if(salario > 2000.00 ){
    var novoSalario = salario * 0.04 + salario
    var aumento = salario * 0.04
    console.log("Novo salario: "+novoSalario.toFixed(2))
    console.log("Reajuste ganho: "+aumento.toFixed(2))
    console.log("Em percentual: 4 %")}
    
var N = 576;
var x = N
var nota100 = parseInt(N/100);
N = N%100

var nota50 = parseInt(N/50);
N = N%50

var nota20 = parseInt(N/20);
N = N%20

var nota10 = parseInt(N/10);
N = N%10

var nota5 = parseInt(N/5);
N = N%5

var nota2 = parseInt(N/2);
N = N%2

var nota1 = parseInt(N/1);
N = N%1

console.log(x);
console.log(nota100+" nota(s) de R$ 100,00")
console.log(nota50+" nota(s) de R$ 50,00")
console.log(nota20+" nota(s) de R$ 20,00")
console.log(nota10+" nota(s) de R$ 100,00")
console.log(nota5+" nota(s) de R$ 5,00")
console.log(nota2+" nota(s) de R$ 2,00")
console.log(nota1+" nota(s) de R$ 1,00")




var cod = 3
var qtd = 2


function calcularPreco (cod, qtd){
 switch(cod){
 case 1: 
     console.log(`total: R$ ${(qtd * 4.00).toFixed(2)}`)
    break
 case 2: 
 console.log(`total: R$ ${(qtd * 4.50).toFixed(2)}`)
    break
 case 3:
    console.log(`total: R$ ${(qtd * 5.00).toFixed(2)}`)
     break
case 4:
    console.log(`total: R$ ${(qtd * 2.00).toFixed(2)}`)
     break
case 5:
    console.log(`total: R$ ${(qtd * 1.50).toFixed(2)}`)
    break
}}
calcularPreco(cod,qtd)


var cod = lines.shift();
var qtd = lines.shift();
function calcularPreco (cod, qtd){
 precocachorroQuente = 4.00
 precoXsalada = 4.50
 precoXBacon = 5.00
 precoTorradaSimples = 2.0
 precoRefrigerante = 1.50
 if (cod == 1){
     var total = qtd * precocachorroQuente
     console.log("total: R$"+ total.toFixed(2))
 }
 if (cod == 2){
     var total = qtd * precoXsalada
    console.log("total: R$ "+ total.toFixed(2))
 }
 if (cod == 3){
    var total = qtd * precoXBacon
     console.log("total: R$ "+ total.toFixed(2))
}
if (cod == 4){
    var total = qtd * precoTorradaSimples
    console.log("total: R$ "+ total.toFixed(2))
}
if (cod == 5){
    var total = qtd * precoRefrigerante
    console.log("total: R$ "+ total.toFixed(2))
}
}
calcularPreco(cod,qtd)


const valores = input.split("\n")
const [x1,y1] = valores[0].split(" ");
const [x2,y2] = valores[1].split(" ");

var distancia = Math.sqrt(((x2 - x1)**2 + (y2 - y1)**2),2);
console.log(distancia.toFixed(4));

let entrada = parseFloat(input)
let valor = interval(entrada)

function interval(valor){
if(valor >=0 && valor <=100){
    if (valor >= 0 && valor <= 25){
    console.log(`intervalo [0,25]`);
    } else if (valor > 25 && valor <= 50) {
        console.log(`intervalo (25,50]`);
    }  else if (valor > 50 && valor <= 75) {
        console.log(`intervalo (50,75]`);
    } else {
        console.log(`intervalo (75,100]`);
    }
   } else {
        console.log("Fora de intervalo")
    }
}
interval(valor)
 


var horas = 10;
var velocidadeMedia = 85;
var kml = 12

var resultado = horas * velocidadeMedia / kml

console.log(resultado.toFixed(3))





var distancia = 110;

var min = distancia *2
console.log(min+" minutos")

 var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salarioFixo =  lines.shift();
var vendasEfetuadas = lines.shift();
var total = salarioFixo + (vendasEfetuadas*0.15);
console.log("TOTAL = R$" + total);



var lines = input.split('\n');


var raio = parseFloat(input);
var PI = 3.14159
var area = PI * (raio*raio);
console.log("A=" + area.toFixed(4));

var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var soma = A + B
console.log("SOMA = " + soma);



 function area(raio) {
    var n = 3.14156
    var area = Math.PI * (raio * raio);
    return console.log("A=",area.toFixed(4));}
area(2,00)

let mes = ['','january','February', 'March','April','May','June','July','August','September','October','November','December']
console.log(mes[4])


function calcularPreco (cod, qtd){
 precocachorroQuente = 4.00
 precoXsalada = 4.50
 precoXBacon = 5.00
 precoTorradaSimples = 2.0
 precoRefrigerante = 1.50
 if (cod == 1){
     console.log("total: R$",qtd * precocachorroQuente)
 }
 if (cod == 2){
    console.log("total: R$",qtd * precoXsalada)
 }
 if (cod == 3){
    console.log("total: R$",qtd * precoXBacon)
}
if (cod == 4){
    console.log("total: R$",qtd * precoTorradaSimples)
}
if (cod == 5){
    console.log("total: R$",qtd * precoRefrigerante)
}
}
calcularPreco(4,3)


 var a = 10.3
var b = 3.0
var c = 5.0

delta = (b ** 2) - 4 * a * c
if (a == 0) {
    console.log("Imporssivel calcular")
}
if (delta > 0) {
    x1 = (-b + delta ** (1 / 2)) / (2 * a)
    x2 = (-b - delta ** (1 / 2)) / (2 * a)
    console.log("X1 =", x1.toFixed(5))
    console.log("X2 =", x2.toFixed(5))
   
} else {
    console.log("sem raizes reais")
} */
