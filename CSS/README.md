# CSS3

## O que é CSS?
CSS(Cascading Style Sheet) é usado para estilizar elementos que foram escritos em uma linguagem de marcação como o HTML. O CSS separa o conteúdo da representação visual do site. Pense  na decoração da sua página. Utilizando o CSS é possível alterar a cor do texto e do fundo, fonte e espaçamento entre parágrafos. Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por diante. Foi desenvolvido pela W3C(World Wide Web Consortium) em 1996 devido ao HTML não ser projetado para ter tags de formatação da página, apenas marcação.

## Como referenciar dentro do HTML
### CSS Interno: 
É colocado na seção ```<head>``` de uma determinada página, as classes e IDs são usadas para se referir ao código CSS mas só estão ativos na página especifica.
#### Vantagens:
* Apenas uma página é afetada pela página de estilos.
* Classes e IDs podem ser afetadas por stylesheet interno.
* Não há necessidade de carregar varios arquivos. HTML e CSS podem estar no mesmo arquivo.
#### Desvantagens
* Aumento do tempo de carregamento da página.
* Afeta apenas uma página, não é útil para usar o mesmo CSS em vários documentos.

#### Exemplo:
**Arquivo HTML**
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            body {
            background-color: blue;
            }
            h1 {
            color: red;
            padding: 60px;
            }
            p{
            color: white;
            }
        </style>
    </head>
    <body>
        <h1>Guilherme Arnhold</h1>
        <p>Algum texto qualquer.</p>
    </body>
</html>
```
### CSS Externo
No CSS externo, criamos um arquivo .css externo o que torna as modificações globalmente no arquivo html, diferentemente do CSS interno que é utilizado em uma página específica. Referenciamos na seção ```<head>``` o arquivo CSS.

#### Vantagens
* Tamanho menor de páginas HTML e estrutura mais limpa.
* Velocidade de carregamento mais rápida.
* O mesmo arquivo CSS pode ser usado para varias páginas.
#### Desvantagens
* Enquanto o arquivo CSS não for carregado, a página não pode ser processada corretamente.

#### Exemplo:
Para utilizar esse exemplo é necessário que seja criado um arquivo chamado stylesheet.css ou recomendo também o site https://jsfiddle.net/.<br><br>
**Arquivo HTML**
```html
<!DOCTYPE html>
<html>
    <head>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    </head>
    <body>
        <h1>Guilherme Arnhold</h1>
        <p>Algum texto qualquer.</p>
    </body>
</html>
```
**Arquivo CSS**
```css
body{
    background-color: black;
}
h1 {
color: white;
text-align: center;
}
p {
background: white;
text-align: left;
}
```
### CSS Inline
Utilizado para uma tag HTML específica, utilizar o CSS dessa forma não é recomendado pois cada tag precisa ser denominada individualmente, o que para um site é inviável. Porém, pode ser útil no caso de não ter acesso ao arquivo CSS ou precisar aplicar um estilo a um só elemento.
#### Vantagens
* Útil para testar e visualizar alterações.
* Útil para correções rápidas.
* Reduzir solicitações HTTP.
#### Desvantagens
* CSS Inline deve ser aplicado para cada elemento.
#### Exemplo:
**Arquivo HTML**
```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body style="background-color:black;">
        <h1 style="color:white;text-align: center;">Guilherme Arnhold</h1>
        <p style="color:white;text-align: left;">Algum texto qualquer.</p>
    </body>
</html>
```
## Sintaxe
É composto por três partes principais: Um seletor, uma propriedade e um valor a se aplicar. 
* O seletor é o elemento HTML que queremos aplicar a regra(div,body). 
* A propriedade é o atributo do elemento que será aplicado a regra(color,font,position).
* Valor é a característica que o elemento irá assumir(cor azul, tamanho 14).

### Propriedades: 

#### **align-content**
Modifica o comportamento da propriedade flex-wrap, ou seja, alinha linhas flexíveis.<br>
Exemplo:
```css
align-content: center;
```
Navegador         | Versão
------------------|--------
Chrome            | 21.0
Internet Explorer | 11.0
Firefox           | 28.0
Safari            | 9.0/7.0 - webkit -
Opera             | 12.1
<br>


#### **align-items**
Especifica o elemento padrão para itens dentro do contêiner flexível.<br>
Exemplo:
```css
align-items: center;
```
Navegador         | Versão
------------------|--------
Chrome            | 21.0
Internet Explorer | 11.0
Firefox           | 20.0
Safari            | 9.0/7.0 - webkit -
Opera             | 12.1
<br>

#### **align-self**
Especifica o elemento padrão para itens dentro do contêiner flexível.<br>
Exemplo:
```css
align-self: center;
```
Navegador         | Versão
------------------|--------
Chrome            | 21.0
Internet Explorer | 11.0
Firefox           | 20.0
Safari            | 9.0/7.0 - webkit -
Opera             | 12.1
<br>

#### **all**
Redefine todas as propriedades, exceto unicode-bidi e direction para seus valores iniciais ou herdados<br>
Exemplo:
```css
all: initial;
```
Navegador         | Versão
------------------|--------
Chrome            | 37.0
Internet Explorer | 79.0
Firefox           | 27.0
Safari            | 9.1
Opera             | 24.0
<br>

#### **animation**
É utilizada para animar outras propriedades do CSS como color, height, width.<br>
Exemplo:
```css
animation: mymove 5s infinite;
```
Navegador         | Versão
------------------|--------
Chrome            | 43.0/4.0 -webkit-
Internet Explorer | 10.0/5.0 -moz-
Firefox           | 16.0/5.0 -moz-
Safari            | 9.0/4.0 -webkit-
Opera             | 30.0/15.0 -webkit-/12.0 -o-
<br>

#### **animation**
Uma propriedade abreviada para todas as propriedades de animação.<br>
Exemplo:
```css
animation: mymove 5s infinite;
```
Navegador         | Versão
------------------|--------
Chrome            | 43.0/4.0 -webkit-
Internet Explorer | 10.0/5.0 -moz-
Firefox           | 16.0/5.0 -moz-
Safari            | 9.0/4.0 -webkit-
Opera             | 30.0/15.0 -webkit-/12.0 -o-
<br>

#### **animation-delay**
Especifica um delay(um tempo antes da animação começar).<br>
Exemplo:
```css
animation-delay: 2s;
```
Navegador         | Versão
------------------|--------
Chrome            | 43.0/4.0 -webkit-
Internet Explorer | 10.0/5.0 -moz-
Firefox           | 16.0/5.0 -moz-
Safari            | 9.0/4.0 -webkit-
Opera             | 30.0/15.0 -webkit-/12.0 -o-
<br>

#### **animation-direction**
Especifica quando uma animação deve ser reproduzida para frente, para trás ou em ciclos alterandos.<br>
Exemplo:
```css
animation-direction: alternate;
```
Navegador         | Versão
------------------|--------
Chrome            | 43.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 16.0/5.0 -moz-
Safari            | 9.0/4.0 -webkit-
Opera             | 30.0/15.0 -webkit-/12.0 -o-
<br>

#### **animation-duration**
Especifica quanto tempo uma animação vai levar parar completar um ciclo.<br>
Exemplo:
```css
animation-duration: 3s;
```
Navegador         | Versão
------------------|--------
Chrome            | 43.0/3.0 -webkit-
Internet Explorer | 10.0
Firefox           | 16.0/5.0 -moz-
Safari            | 9.0/4.0 -webkit-
Opera             | 30.0/15.0 -webkit-/12.0 -o-
<br>

#### **animation-fill-mode**
Especifica um estilo para o elemento quando a animação não está rodando(antes de começar,depois de terminar ou ambos).<br>
Exemplo:
```css
animation-fill-mode: forwards;
```
Navegador         | Versão
------------------|--------
Chrome            | 43.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 16.0/5.0 -moz-
Safari            | 9.0/4.0 -webkit-
Opera             | 30.0/15.0 -webkit-/12.1 12.0 -o-
<br>

#### **animation-iteration-count**
Especifica o número de vezes que uma animação deve rodar.<br>
Exemplo:
```css
animation-iteration-count: 2;
```
Navegador         | Versão
------------------|--------
Chrome            | 43.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 16.0/5.0 -moz-
Safari            | 9.0/4.0 -webkit-
Opera             | 30.0/15.0 -webkit-/12.1 12.0 -o-
<br>

#### **animation-name**
Especifica um nome para a animação @keyframe.<br>
Exemplo:
```css
animation-name: mymove;
```
Navegador         | Versão
------------------|--------
Chrome            | 43.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 16.0/5.0 -moz-
Safari            | 9.0/4.0 -webkit-
Opera             | 30.0/15.0 -webkit-/12.1 12.0 -o-
<br>

#### **animation-play-state**
Especifica quando a animação está rodando ou pausada.<br>
Exemplo:
```css
animation-play-state: paused;
```
Navegador         | Versão
------------------|--------
Chrome            | 43.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 16.0/5.0 -moz-
Safari            | 9.0/4.0 -webkit-
Opera             | 30.0/15.0 -webkit-/12.1 12.0 -o-
<br>

#### **animation-timing-function**
Especifica quando a animação está rodando ou pausada.<br>
Exemplo:
```css
animation-timing-function: ease-in; 
```
Navegador         | Versão
------------------|--------
Chrome            | 43.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 16.0/5.0 -moz-
Safari            | 9.0/4.0 -webkit-
Opera             | 30.0/15.0 -webkit-/12.1 12.0 -o-
<br>

#### **backface-visibility**
Define se a face posterior de um elemento deve ou não ser vísivel quando de frente para o usuário.<br>
Exemplo:
```css
backface-visibility: hidden; 
```
Navegador         | Versão
------------------|--------
Chrome            | 36.0/12.0 -webkit-
Internet Explorer | 10.0
Firefox           | 16.0/10.0 -moz-
Safari            | 4.0 -webkit-
Opera             | 23.0/15.0 -webkit-
<br>

#### **background**
Uma propriedade abreviada para todas as propriedades background.
<br>
Exemplo:

```css
background: red url("img_tree.gif") no-repeat fixed center; 
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0
Firefox           | 1.0 
Safari            | 1.0 
Opera             | 3.5 
<br>

#### **background-attachment**
Define se uma imagem de fundo rola com o resto da página ou é fixa.
<br>
Exemplo:

```css
background-attachment: fixed;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0
Firefox           | 1.0 
Safari            | 1.0 
Opera             | 3.5 
<br>

#### **background-blend-mode**
Especifica o modo de mesclagem de cada camada de fundo.(cor, imagem).
<br>
Exemplo:

```css
background-blend-mode: lighten;
```
Navegador         | Versão
------------------|--------
Chrome            | 35.0 
Internet Explorer | 79.0
Firefox           | 30.0 
Safari            | 7.1 
Opera             | 22.0 
<br>

#### **background-clip**
Define até onde o fundo(cor ou imagem) deve se estender dentro de um elemento.
<br>
Exemplo:

```css
background-clip: padding-box;
```
Navegador         | Versão
------------------|--------
Chrome            | 4.0 
Internet Explorer | 9.0
Firefox           | 4.0 
Safari            | 3.0 
Opera             | 10.5 
<br>


          



 







