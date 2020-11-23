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

#### **background-color**
Especifica a cor de fundo de um elemento.
<br>
Exemplo:

```css
background-color: yellow;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0
Firefox           | 1.0 
Safari            | 1.0 
Opera             | 3.5 
<br>

#### **background-image**
Especifica uma ou mais imagens de fundo para um elemento.
<br>
Exemplo:

```css
background-image: url("https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png");
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0
Firefox           | 1.0 
Safari            | 1.0 
Opera             | 3.5 
<br>

#### **background-origin**
Especifica a posição de origem de uma imagem de fundo.
<br>
Exemplo:

```css
background-origin: padding-box;
```
Navegador         | Versão
------------------|--------
Chrome            | 4.0 
Internet Explorer | 9.0
Firefox           | 4.0 
Safari            | 3.0 
Opera             | 10.5 
<br>

#### **background-position**
Especifica a posição de uma imagem de fundo.
<br>
Exemplo:

```css
background-position: right;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0
Firefox           | 1.0 
Safari            | 1.0 
Opera             | 3.5 
<br>

#### **background-repeat**
Especifica se e como uma imagem deve ser repetida.
<br>
Exemplo:

```css
background-repeat: repeat-y;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0
Firefox           | 1.0 
Safari            | 1.0 
Opera             | 3.5 
<br>

#### **background-size**
Especifica o tamanho da imagem de fundo.
<br>
Exemplo:

```css
background-size: 300px 100px;
```
Navegador         | Versão
------------------|--------
Chrome            | 4.0/1.0 -webkit- 
Internet Explorer | 9.0
Firefox           | 4.0/3.6 -moz- 
Safari            | 4.1/3.0 -webkit-
Opera             | 10.5/10.0 -o-
<br>

#### **border**
Propriedade abreviada para border-width, borders-style e border-color.
<br>
Exemplo:

```css
border: 5px dotted blue;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0
Firefox           | 1.0 
Safari            | 1.0 
Opera             | 3.5
<br>

#### **border-bottom**
Propriedade abreviada para border-bottom-width, border-bottom-style e border-bottom-color.
<br>
Exemplo:

```css
border-bottom: double;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0
Firefox           | 1.0 
Safari            | 1.0 
Opera             | 3.5
<br>

#### **border-bottom-color**
Especifica a cor da borda inferior.
<br>
Exemplo:

```css
border-bottom-color: coral;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0
Firefox           | 1.0 
Safari            | 1.0 
Opera             | 3.5
<br>

#### **border-bottom-left-radius**
Define o raio da borda do canto esquerdo inferior. 
<br>
Exemplo:

```css
border-bottom-left-radius: 25px;
```
Navegador         | Versão
------------------|--------
Chrome            | 5.0/4.0 -webkit- 
Internet Explorer | 9.0
Firefox           | 4.0/3.0 -moz- 
Safari            | 5.0/3.1 -webkit- 
Opera             | 10.5
<br>

#### **border-bottom-left-radius**
Define o raio da borda do canto direito inferior. Se dois valores são setados, o primeiro é da borda inferior e o segundo da borda esquerda.
<br>
Exemplo:

```css
border-bottom-left-radius: 25px;
```
Navegador         | Versão
------------------|--------
Chrome            | 5.0/4.0 -webkit- 
Internet Explorer | 9.0
Firefox           | 4.0/3.0 -moz- 
Safari            | 5.0/3.1 -webkit- 
Opera             | 10.5
<br>

#### **border-bottom-right-radius**
Define o raio da borda do canto direito inferior. Se dois valores são setados, o primeiro é da borda inferior e o segundo da borda direita.
<br>
Exemplo:

```css
border-bottom-right-radius: 50px 20px;
```
Navegador         | Versão
------------------|--------
Chrome            | 5.0/4.0 -webkit- 
Internet Explorer | 9.0
Firefox           | 4.0/3.0 -moz- 
Safari            | 5.0/3.1 -webkit- 
Opera             | 10.5
<br>

#### **border-bottom-style**
Define o estilo da borda inferior.
<br>
Exemplo:

```css
border-bottom-style: dotted;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 5.5
Firefox           | 1.0 
Safari            | 1.0 
Opera             | 9.2
<br>

#### **border-bottom-width**
Define a largura da borda inferior.
<br>
Exemplo:

```css
border-bottom-width: thin;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0
Firefox           | 1.0 
Safari            | 1.0 
Opera             | 3.5
<br>

#### **border-collapse**
Define se as bordas da tabela devem ser recolhidas em uma única borda ou separadas.
<br>
Exemplo:

```css
border-collapse: separate;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 5.0
Firefox           | 1.0 
Safari            | 1.2 
Opera             | 4.0
<br>

#### **border-color**
Define a cor das quatro bordas.
<br>
Exemplo:

```css
border-color: coral;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0
Firefox           | 1.0 
Safari            | 1.0 
Opera             | 3.5
<br>

#### **border-image**
Uma abreviação para todas as propriedades border-image.
<br>
Exemplo:

```css
border-image: url(border.png) 30 round; 
```
Navegador         | Versão
------------------|--------
Chrome            | 16.0/4.0 -webkit- 
Internet Explorer | 11.0
Firefox           | 15.0/3.5 -moz- 
Safari            | 6.0/3.1 -webkit-
Opera             | 15.0/11.0 -o-
<br>

#### **border-imagem-outset**
Especifica a quantidade em que a área de imagem da borda se estende além da caixa da borda.
<br>
Exemplo:

```css
border-image-outset: 10px; 
```
Navegador         | Versão
------------------|--------
Chrome            | 15.0 
Internet Explorer | 11.0
Firefox           | 15.0 
Safari            | 6.0
Opera             | 15.0
<br>

#### **border-imagem-repeat**
Especifica se a imagem da borda deve ser repetida, arredondada ou esticada.
<br>
Exemplo:

```css
border-image-repeat: stretch; 
```
Navegador         | Versão
------------------|--------
Chrome            | 15.0 
Internet Explorer | 11.0
Firefox           | 15.0 
Safari            | 6.0
Opera             | 15.0
<br>

#### **border-imagem-slice**
Especifica como cortar a borda da imagem.
<br>
Exemplo:

```css
border-image-slice: 30%; 
```
Navegador         | Versão
------------------|--------
Chrome            | 15.0 
Internet Explorer | 11.0
Firefox           | 15.0 
Safari            | 6.0
Opera             | 15.0
<br>

#### **border-imagem-source**
Especifica o caminho para a imagem ser usada como borda.
<br>
Exemplo:

```css
border-image-source: url(border.png);  
```
Navegador         | Versão
------------------|--------
Chrome            | 15.0 
Internet Explorer | 11.0
Firefox           | 15.0 
Safari            | 6.0
Opera             | 15.0
<br>

#### **border-imagem-width**
Especifica a largura da imagem da borda.
<br>
Exemplo:

```css
border-image-width: 10px;
```
Navegador         | Versão
------------------|--------
Chrome            | 15.0 
Internet Explorer | 11.0
Firefox           | 13.0 
Safari            | 6.0
Opera             | 15.0
<br>

#### **border-left**
Uma propriedade abreviada para todas as propriedades border-left.
<br>
Exemplo:

```css
border-left: 5px solid orange;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0
Firefox           | 1.0 
Safari            | 3.5
Opera             | 1.0
<br>

#### **border-left-color**
Define a cor da borda esquerda.
<br>
Exemplo:

```css
border-left-color: green;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0
Firefox           | 1.0 
Safari            | 1.0
Opera             | 3.5
<br>

#### **border-left-style**
Define o estilo da borda da esquerda.
<br>
Exemplo:

```css
border-left-style: dotted;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 5.5
Firefox           | 1.0 
Safari            | 1.0
Opera             | 9.2
<br>

#### **border-left-width**
Define a largura da borda esquerda.
<br>
Exemplo:

```css
border-left-width: thin;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0
Firefox           | 1.0     
Safari            | 1.0
Opera             | 3.5
<br>

#### **border-radius**
Uma propriedade abreviada para as quatro propriedades border-radius.
<br>
Exemplo:

```css
border-radius: 30px;
```
Navegador         | Versão
------------------|--------
Chrome            | 5.0/4.0 -webkit- 
Internet Explorer | 9.0
Firefox           | 4.0/3.0 -moz-     
Safari            | 5.0/3.1 -webkit-
Opera             | 10.5
<br>

#### **border-right**
Uma propriedade abreviada para todas propriedades border-right.
<br>
Exemplo:

```css
border-right: 5px dotted blue;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0     
Safari            | 1.0
Opera             | 3.5
<br>

#### **border-right-color**
Especifica a cor da borda direita.
<br>
Exemplo:

```css
border-right-color: coral;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0     
Safari            | 1.0
Opera             | 3.5
<br>

#### **border-right-style**
Especifica o estilo da borda direita.
<br>
Exemplo:

```css
border-right-style: groove;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0     
Safari            | 1.0
Opera             | 3.5
<br>

#### **border-right-width**
Especifica a largura da borda direita.
<br>
Exemplo:

```css
border-right-width: thick;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0     
Safari            | 1.0
Opera             | 3.5
<br>

#### **border-spacing**
Especifica a distância entre as bordas das células adjacentes.
<br>
Exemplo:

```css
border-spacing: 15px 50px;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 8.0
Firefox           | 1.0     
Safari            | 1.0
Opera             | 4.0
<br>

#### **border-style**
Especifica o estilo das quatro bordas.
<br>
Exemplo:

```css
border-style: dotted solid double dashed;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0     
Safari            | 1.0
Opera             | 3.5
<br>

#### **border-top**
Uma propriedade abreviada para border-top-width, border-top-style e border-top-color.
<br>
Exemplo:

```css
border-top: double;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0     
Safari            | 1.0
Opera             | 3.5
<br>

#### **border-top-color**
Especifica a cor da borda superior.
<br>
Exemplo:

```css
border-top-color: deepskyblue;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0     
Safari            | 1.0
Opera             | 3.5
<br>

#### **border-top-left-radius**
Define o raio da borda do canto superior esquerdo.
<br>
Exemplo:

```css
border-top-left-radius: 50px 20px;
```
Navegador         | Versão
------------------|--------
Chrome            | 5.0/4.0 -webkit-
Internet Explorer | 9.0
Firefox           | 4.0/3.0 -moz-     
Safari            | 5.0/3.1 -webkit-
Opera             | 10.5
<br>

#### **border-top-right-radius**
Define o raio da borda do canto superior esquerdo.
<br>
Exemplo:

```css
border-top-right-radius: 25px;
```
Navegador         | Versão
------------------|--------
Chrome            | 5.0/4.0 -webkit-
Internet Explorer | 9.0
Firefox           | 4.0/3.0 -moz-     
Safari            | 5.0/3.1 -webkit-
Opera             | 10.5
<br>

#### **border-top-style**
Define o estilo da borda superior.
<br>
Exemplo:

```css
border-top-style dotted;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 5.5
Firefox           | 1.0    
Safari            | 1.0
Opera             | 9.2
<br>

#### **border-top-width**
Define a largura da borda superior.
<br>
Exemplo:

```css
border-top-width: medium;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 5.5
Firefox           | 1.0    
Safari            | 1.0
Opera             | 9.2
<br>

#### **border-width**
Define a largura das quatro bordas.
<br>
Exemplo:

```css
border-width: medium;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0    
Safari            | 1.0
Opera             | 3.5
<br>

#### **bottom**
Define a posição do elemento, a partir da parte inferior do seu elemento pai.
<br>
Exemplo:

```css
bottom: 5px;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 5.0
Firefox           | 1.0    
Safari            | 1.0
Opera             | 6.0
<br>

#### **box-decoration-break**
Define o comportamento do plano de fundo e da borda de um elemento na quebra de página ou na quebra de linha.
<br>
Exemplo:

```css
box-decoration-break: slice;
```
Navegador         | Versão
------------------|--------
Chrome            | 22.0 -webkit-
Internet Explorer | 79.0
Firefox           | 32.0    
Safari            | 6.1 -webkit-
Opera             | 11.5 -webkit-
<br>

#### **box-shadow**
Atribui uma ou mais sombras ao elemento.
<br>
Exemplo:

```css
box-shadow: 10px 10px blue;
```
Navegador         | Versão
------------------|--------
Chrome            | 10.0/ 4.0 -webkit-
Internet Explorer | 9.0
Firefox           | 4.0/3.5 -moz- 
Safari            | 5.1/3.1 -webkit-
Opera             | 10.5
<br>

#### **box-sizing**
Define como a largura e altura são calculadas, pode incluir preenchimento e bordas ou não.
<br>
Exemplo:

```css
box-sizing: border-box;
```
Navegador         | Versão
------------------|--------
Chrome            | 10.0/ 4.0 -webkit-
Internet Explorer | 8.0
Firefox           | 29.0/2.0 -moz-    
Safari            | 5.1/3.2 -webkit-
Opera             | 9.5
<br>

#### **break-after**
Especifica se uma quebra de página, coluna deve ocorrer ou não após o elemento especificado.
<br>
Exemplo:

```css
break-after: always;
```
Navegador         | Versão
------------------|--------
Chrome            | 50.0
Internet Explorer | 10.0
Firefox           | 65.0    
Safari            | 10.0
Opera             | 37.0
<br>

#### **break-before**
Especifica se uma quebra de página, coluna deve ocorrer ou não antes o elemento especificado.
<br>
Exemplo:

```css
break-before: always;
```
Navegador         | Versão
------------------|--------
Chrome            | 50.0
Internet Explorer | 10.0
Firefox           | 65.0    
Safari            | 10.0
Opera             | 37.0
<br>

#### **break-inside**
Especifica se uma quebra de página, coluna deve ocorrer ou não dentro do elemento especificado.
<br>
Exemplo:

```css
break-inside: avoid;
```
Navegador         | Versão
------------------|--------
Chrome            | 50.0
Internet Explorer | 10.0
Firefox           | 65.0    
Safari            | 10.0
Opera             | 37.0
<br>

#### **caption-side**
Especifica o posicionamento de uma legenda de tabela.
<br>
Exemplo:

```css
caption-side: bottom;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 8.0
Firefox           | 1.0    
Safari            | 1.0
Opera             | 4.0
<br>

#### **caret-color**
Especifica a cor do cursor em entradas, áreas de texto ou qualquer elemento editável.
<br>
Exemplo:

```css
caret-color: red;
```
Navegador         | Versão
------------------|--------
Chrome            | 57.0
Internet Explorer | 79.0
Firefox           | 53.0    
Safari            | 11.1
Opera             | 44.0
<br>

#### **@charset**
Especifica a codificação de carácteres usado na página de estilos.
<br>
Exemplo:

```css
@charset "UTF-8";
```
Navegador         | Versão
------------------|--------
Chrome            | 2.0
Internet Explorer | 12.0
Firefox           | 1.5    
Safari            | 4.0
Opera             | 9.0
<br>

#### **clear**
Especifica em quais lados de um elemento os elementos flutuantes não podem flutuar.
<br>
Exemplo:

```css
clear: both;
```
Navegador         | Versão
------------------|--------
Chrome            | 2.0
Internet Explorer | 12.0
Firefox           | 1.5    
Safari            | 4.0
Opera             | 9.0
<br>

#### **clip**
Permite especificar um retângulo para cortar um elemento posicionado de forma absoluta. O retângulo é especificado como quatro coordenadas, todas do canto superior esquerdo do elemento a ser recortado.
<br>
Exemplo:

```css
clip: rect(0px,60px,200px,0px);
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 8.0
Firefox           | 1.0    
Safari            | 1.0
Opera             | 7.0
<br>

#### **color**
Especifica a cor do texto.
<br>
Exemplo:

```css
color: orange;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 3.0
Firefox           | 1.0    
Safari            | 1.0
Opera             | 3.5
<br>

#### **column-count**
Especifica o número de colunas em que um elemento deve ser dividido.
<br>
Exemplo:

```css
column-count: 3;
```
Navegador         | Versão
------------------|--------
Chrome            | 50.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 52.0/2.0 -moz-    
Safari            | 9.0/3.1 -webkit- 
Opera             | 37.0/15.0 -webkit-/11.1
<br>

#### **column-fill**
Especifica como preencher as colunas, balanceadas ou não.
<br>
Exemplo:

```css
column-fill: balance;
```
Navegador         | Versão
------------------|--------
Chrome            | 50.0
Internet Explorer | 10.0
Firefox           | 52.0/13.0 -moz-    
Safari            | 1.0/7.0 -webkit- 
Opera             | 37.0
<br>

#### **column-gap**
Especifica a lacuna entre as colunas.
<br>
Exemplo:

```css
column-gap: 40px;
```
Navegador         | Versão
------------------|--------
Chrome            | 50.0
Internet Explorer | 10.0
Firefox           | 52.0/2.0 -moz-    
Safari            | 9.0/3.1 -webkit- 
Opera             | 37.0/15.0 -webkit/11.1
<br>

#### **column-rule**
Uma propriedade abreviada para todas as propriedades column-rule.
<br>
Exemplo:

```css
column-rule: 4px double #ff00ff;
```
Navegador         | Versão
------------------|--------
Chrome            | 50.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 52.0/2.0 -moz-    
Safari            | 9.0/3.1 -webkit- 
Opera             | 37.0/15.0 -webkit/11.1
<br>

#### **column-rule-color**
Especifica a cor da regra entre as colunas.
<br>
Exemplo:

```css
column-rule-color: red;
```
Navegador         | Versão
------------------|--------
Chrome            | 50.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 52.0/2.0 -moz-    
Safari            | 9.0/3.1 -webkit- 
Opera             | 37.0/15.0 -webkit/11.1
<br>

#### **column-rule-style**
Especifica a cor da regra entre as colunas.
<br>
Exemplo:

```css
column-rule-style: dotted;
```
Navegador         | Versão
------------------|--------
Chrome            | 50.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 52.0/2.0 -moz-    
Safari            | 9.0/3.1 -webkit- 
Opera             | 37.0/15.0 -webkit/11.1
<br>

#### **column-rule-width**
Especifica a cor da regra entre as colunas.
<br>
Exemplo:

```css
column-rule-width: 10px;
```
Navegador         | Versão
------------------|--------
Chrome            | 50.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 52.0/2.0 -moz-    
Safari            | 9.0/3.1 -webkit- 
Opera             | 37.0/15.0 -webkit/11.1
<br>

#### **column-span**
Especifica quantas colunas um elemento deve abranger.
<br>
Exemplo:

```css
column-span: all;
```
Navegador         | Versão
------------------|--------
Chrome            | 50.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 71.0  
Safari            | 9.0/3.1 -webkit- 
Opera             | 37.0/15.0 -webkit/11.1
<br>

#### **column-width**
Especifica a largura da coluna.
<br>
Exemplo:

```css
column-width: 50px;
```
Navegador         | Versão
------------------|--------
Chrome            | 50.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 52.0/2.0 -moz-  
Safari            | 9.0/3.1 -webkit- 
Opera             | 37.0/15.0 -webkit/11.1
<br>

#### **columns**
Uma propriedade abreviada para column-width e column-count.
<br>
Exemplo:

```css
columns: 100px 5; 
```
Navegador         | Versão
------------------|--------
Chrome            | 50.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 52.0/9.0 -moz-  
Safari            | 9.0/3.1 -webkit- 
Opera             | 37.0/15.0 -webkit/11.1
<br>

#### **content**
Usado com os pseudo-elementos: before e after, para inserir o conteúdo gerado.
<br>
Exemplo:

```css
content: " (" attr(href) ")";
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 8.0
Firefox           | 1.0   
Safari            | 1.0 
Opera             | 4.0
<br>

#### **counter-increment**
Aumenta ou diminui o valor de um ou mais contadores CSS.
<br>
Exemplo:

```css
counter-increment: my-sec-counter;
```
Navegador         | Versão
------------------|--------
Chrome            | 4.0 
Internet Explorer | 8.0
Firefox           | 2.0   
Safari            | 3.1 
Opera             | 9.6
<br>

#### **counter-reset**
Cria ou redefine um ou mais contadores CSS.
<br>
Exemplo:

```css
counter-reset: my-sec-counter;
```
Navegador         | Versão
------------------|--------
Chrome            | 4.0 
Internet Explorer | 8.0
Firefox           | 2.0   
Safari            | 3.1 
Opera             | 9.6
<br>

#### **cursor**
Especifica o cursor do mouse a ser exibido ao apontar sobre um elemento.
<br>
Exemplo:

```css
cursor: cell;
```
Navegador         | Versão
------------------|--------
Chrome            | 5.0 
Internet Explorer | 5.5
Firefox           | 4.0   
Safari            | 5.0 
Opera             | 9.6
<br>

#### **direction**
Especifica a direção do texto.
<br>
Exemplo:

```css
direction: rtl;
```
Navegador         | Versão
------------------|--------
Chrome            | 2.0 
Internet Explorer | 5.5
Firefox           | 1.0   
Safari            | 1.3 
Opera             | 9.2
<br>


#### **display**
Especifica como um determinado elemento HTML deve ser exibido.
<br>
Exemplo:

```css
display: block;
```
Navegador         | Versão
------------------|--------
Chrome            | 4.0 
Internet Explorer | 8.0 
Firefox           | 3.0   
Safari            | 3.1  
Opera             | 7.0
<br>

#### **empty-cells**
Especifica como um determinado elemento HTML deve ser exibido.
<br>
Exemplo:

```css
empty-cells: hide;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 8.0 
Firefox           | 1.0   
Safari            | 1.2  
Opera             | 4.0
<br>

#### **filter**
Define efeitos de um elemento antes dele ser exibido.
<br>
Exemplo:

```css
filter: brightness(122%);
```
Navegador         | Versão
------------------|--------
Chrome            | 53.0/18.0 -webkit- 
Internet Explorer | 13.0 
Firefox           | 35.0   
Safari            | 9.1/6.0 -webkit-  
Opera             | 40.0/15.0 -webkit-
<br>

#### **flex**
Uma propriedade abreviada para flex-grow, flex-shrink e flex-basis.
<br>
Exemplo:

```css
flex: 1;
```
Navegador         | Versão
------------------|--------
Chrome            | 29.0/21.0 -webkit- 
Internet Explorer | 11.0/10.0 -ms- 
Firefox           | 28.0/18.0 -moz-   
Safari            | 9.0/6.1 -webkit-  
Opera             | 17.0
<br>

#### **flex-basis**
Especifica o comprimento inicial de um item flexível.
<br>
Exemplo:

```css
flex-basis: 50px;
```
Navegador         | Versão
------------------|--------
Chrome            | 29.0/21.0 -webkit- 
Internet Explorer | 11.0 
Firefox           | 28.0/18.0 -moz-   
Safari            | 9.0/6.1 -webkit-  
Opera             | 17.0
<br>


#### **flex-direction**
Especifica a direção dos itens flexíveis.
<br>
Exemplo:

```css
flex-direction: row-reverse;
```
Navegador         | Versão
------------------|--------
Chrome            | 29.0/21.0 -webkit- 
Internet Explorer | 11.0 
Firefox           | 28.0/18.0 -moz-   
Safari            | 9.0/6.1 -webkit-  
Opera             | 17.0
<br>

#### **flex-flow**
Uma propriedade abreviada para as propriedades flex-direction e flex-wrap.
<br>
Exemplo:

```css
flex-flow: row-reverse wrap;
```
Navegador         | Versão
------------------|--------
Chrome            | 29.0/21.0 -webkit- 
Internet Explorer | 11.0 
Firefox           | 28.0/18.0 -moz-   
Safari            | 9.0/6.1 -webkit-  
Opera             | 17.0
<br>

#### **flex-grow**
Especifica quanto o item irá crescer em relação ao resto.
<br>
Exemplo:

```css
flex-grow: 2;
```
Navegador         | Versão
------------------|--------
Chrome            | 29.0/21.0 -webkit- 
Internet Explorer | 11.0 
Firefox           | 28.0/18.0 -moz-   
Safari            | 9.0/6.1 -webkit-  
Opera             | 17.0
<br>


#### **flex-shrink**
Especifica como o item irá encolher em relação ao resto.
<br>
Exemplo:

```css
flex-grow: 2;
```
Navegador         | Versão
------------------|--------
Chrome            | 29.0/21.0 -webkit- 
Internet Explorer | 11.0 
Firefox           | 28.0/18.0 -moz-   
Safari            | 9.0/6.1 -webkit-  
Opera             | 17.0
<br>

#### **flex-wrap**
Especifica se os itens flexíveis devem envolver ou não.
<br>
Exemplo:

```css
flex-grow: 2;
```
Navegador         | Versão
------------------|--------
Chrome            | 29.0/21.0 -webkit- 
Internet Explorer | 11.0 
Firefox           | 28.0/18.0 -moz-   
Safari            | 9.0/6.1 -webkit-  
Opera             | 17.0
<br>

#### **float**
Especifica se uma caixa deve ou não flutuar.
<br>
Exemplo:

```css
float: right;
```
Navegador         | Versão
------------------|--------
Chrome            | 29.0/21.0 -webkit- 
Internet Explorer | 11.0 
Firefox           | 28.0/18.0 -moz-   
Safari            | 9.0/6.1 -webkit-  
Opera             | 17.0
<br>

#### **font**
Uma propriedade abreviada para as propriedades font-style, font-variant, font-weight, font-size/line-height e font-family.
<br>
Exemplo:

```css
font: 15px Arial, sans-serif;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0 
Firefox           | 1.0   
Safari            | 1.0  
Opera             | 3.5
<br>

#### **@font-face**
Uma regra que permite que sites façam download e usem fontes diferentes das fontes "seguras para a web".
<br>
Exemplo:

```css
@font-face {
  font-family: myFirstFont;
  src: url(sansation_light.woff);
}
```
Navegador         | Versão
------------------|--------
Chrome            | 4.0 
Internet Explorer | 9.0 
Firefox           | 3.5   
Safari            | 3.1  
Opera             | 10.0
<br>

#### **font-family**
Especifica a familia da fonte para o texto.
<br>
Exemplo:

```css
font-family: "Times New Roman", Times, serif;
```
Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 4.0 
Firefox           | 1.0   
Safari            | 1.0  
Opera             | 3.5
<br>

#### **font-feature-settings**
Permite o controle sobre recursos tipográficos avançados em fontes OpenType.
<br>
Exemplo:

```css
font-feature-settings: "smcp" on;
```
Navegador         | Versão
------------------|--------
Chrome            | 48.0/16.0 -webkit- 
Internet Explorer | 10.0 
Firefox           | 34.0/15.0 -moz-   
Safari            | 9.1  
Opera             | 35.0/15.0 -webkit-
<br>

#### **font-kerning**
Controla o uso das informações de kerning(como as letras estão espaçadas).
<br>
Exemplo:

```css
font-kerning: normal;
```
Navegador         | Versão
------------------|--------
Chrome            | 33.0/29.0 -webkit- 
Internet Explorer | 79.0 
Firefox           | 34.0  
Safari            | 9.1/7.0 -webkit-  
Opera             | 20.1/16.0 -webkit-
<br>

#### **font-language-override**
Controla o uso de glifos específicos do idioma em uma fonte.
<br>
Exemplo:


Não possui exemplo no site.

Navegador         | Versão
------------------|--------
Chrome            | Não encontrada 
Internet Explorer | Não encontrada 
Firefox           | Não encontrada
Safari            | Não encontrada  
Opera             | Não encontrada
<br>

#### **font-size**
Especifica o tamanho da fonte do texto.
<br>
Exemplo:

```css
font-size: 150%;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0 
Internet Explorer | 5.5
Firefox           | 1.0
Safari            | 1.0  
Opera             | 7.0
<br>

#### **font-size-adjust**
Preserva a legibilidade do texto quando ocorre o fallback de fonte.
<br>
Exemplo:

```css
font-size-adjust:  0.58; 
```

Navegador         | Versão
------------------|--------
Chrome            | Não suportado
Internet Explorer | Não suportado
Firefox           | 3.0
Safari            | Não suportado
Opera             | Não suportado
<br>

#### **font-stretch**
Seleciona uma face normal, condensada ou expandida de uma família de fontes.
<br>
Exemplo:

```css
font-stretch: expanded; 
```

Navegador         | Versão
------------------|--------
Chrome            | 48.0
Internet Explorer | 9.0
Firefox           | 9.0
Safari            | 11.0
Opera             | 35.0
<br>

#### **font-style**
Especifica o estilo da fonte para o texto.
<br>
Exemplo:

```css
font-style: italic;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 7.0
<br>

#### **font-synthesis**
Controla quais fontes ausentes(negrito ou itálico) podem ser sintetizadas pelo navegador.
<br>
Exemplo:


Não possui exemplo no site.


Navegador         | Versão
------------------|--------
Chrome            | Não encontrada
Internet Explorer | Não encontrada
Firefox           | Não encontrada
Safari            | Não encontrada
Opera             | Não encontrada
<br>

#### **font-variant**
Especifica se um texto deve ser exibido ou não em uma fonte de caixa baixa.
<br>
Exemplo:

```css
font-variant: small-caps;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **font-weight**
Especifica o peso de uma fonte.
<br>
Exemplo:

```css
font-weight: bold;
```

Navegador         | Versão
------------------|--------
Chrome            | 2.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.3
Opera             | 3.5
<br>

#### **grid**
Uma propriedade abreviada para as propriedades grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns e grid-auto-flow.
<br>
Exemplo:

```css
grid: 150px;
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-area**
Especifica um nome para o item da grade ou esta propriedade é uma propriedade para as propriedades grid-row-start, grid-column-start, grid-row-end, and grid-column-end properties.
<br>
Exemplo:

```css
grid-area: myArea;
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-auto-columns**
Especifica um tamanho de coluna padrão.
<br>
Exemplo:

```css
grid-area: 50px;
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-auto-flow**
Especifica como os itens colocados automaticamente são inseridos na grade.
<br>
Exemplo:

```css
grid-area: 50px;
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-auto-rows**
Especifica um tamanho de linha padrão.   
<br>
Exemplo:

```css
grid-auto-rows: 150px;
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-column**
Uma propriedade abreviada para as propriedades grid-column-start e grim-column-end.   
<br>
Exemplo:

```css
grid-column: grid-column: 1 / span 2;
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-column-end**
Especifica onde terminar o item da grade.
<br>
Exemplo:

```css
grid-column-end: span 3;
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-column-start**
Especifica onde iniciar o item da grade.
<br>
Exemplo:

```css
grid-column-start: 2;
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-grap**
Uma propriedade abreviada para grid-row-gap e grid-column-gap propriedades.
<br>
Exemplo:

```css
grid-grap: 50px;
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-row**
Uma propriedade abreviada para as propriedades grid-row-start e grid-row-end.
<br>
Exemplo:

```css
grid-row: 1 / span 2; 
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-row-end**
Especifica onde terminar o item da grade.
<br>
Exemplo:

```css
grid-row-end: span 3; 
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-row-start**
Especifica onde iniciar o item da grade.
<br>
Exemplo:

```css
grid-row-start: 2; 
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-template**
Uma propriedade abreviada para grid-template-rows, grid-template-columns e grid-areas.
<br>
Exemplo:

```css
grid-template: 150px; 
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-template-areas**
Especifica como exibir colunas e linhas, usando nomes de grade.
<br>
Exemplo:

```css
grid-template-areas: myArea;
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-template-columns**
Especifica o tamanho das colunas, e quantas colunas em um layout de grade.
<br>
Exemplo:

```css
grid-template-columns: auto auto auto auto;
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **grid-template-rows**
Especifica o tamanho das linhas em um layout de grade.
<br>
Exemplo:

```css
grid-template-rows: 100px 300px;
```

Navegador         | Versão
------------------|--------
Chrome            | 57
Internet Explorer | 16
Firefox           | 52
Safari            | 10
Opera             | 44
<br>

#### **hanging-punctuation**
Especifica se um caractere de pontuação pode ser colocado fora da caixa de linha.
<br>
Exemplo:

```css
hanging-punctuation: first;
```

Navegador         | Versão
------------------|--------
Chrome            | Não suportado
Internet Explorer | Não suportado
Firefox           | Não suportado
Safari            | 10+
Opera             | Não suportado
<br>

#### **height**
Define a altura de um elemento.
<br>
Exemplo:

```css
height: 50px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 7.0
<br>

#### **hyphens**
Define como dividir palavras para melhorar o layout dos parágrafos.
<br>
Exemplo:

```css
hyphens: auto;
```

Navegador         | Versão
------------------|--------
Chrome            | 55.0
Internet Explorer | 79.0/10.0 -ms-
Firefox           | 43.0
Safari            | 5.1 -webkit-
Opera             | 4.0
<br>

#### **image-rendering**
Dá uma dica ao navegador sobre quais aspectos de uma imagem são mais importantes para preservar quando a imagem é redimensionada.
<br>
Exemplo:

```css
Não há exemplo no site.
```

Navegador         | Versão
------------------|--------
Chrome            | Não encontrada
Internet Explorer | Não encontrada
Firefox           | Não encontrada
Safari            | Não encontrada
Opera             | Não encontrada
<br>

#### **@import**
Permite-lhe importar uma folha de estilo para outra folha de estilo.
<br>
Exemplo:

```css
Não há exemplo no site.
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 5.5
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>


#### **isolation**
Define se um elemento deve criar um novo conteúdo de empilhamento.
<br>
Exemplo:

```css
isolation: isolate;
```

Navegador         | Versão
------------------|--------
Chrome            | 41.0
Internet Explorer | 79.0
Firefox           | 36.0
Safari            | yes
Opera             | 30.0
<br>

#### **justify-content**
Especifica o alinhamento entre os itens de um recipiente flexível quando os itens não usam todo o espaço disponível.
<br>
Exemplo:

```css
justify-content: center;
```

Navegador         | Versão
------------------|--------
Chrome            | 29.0/21.0 -webkit-
Internet Explorer | 11.0
Firefox           | 28.0/18.0 -moz-
Safari            | 9.0/6.1 -webkit-
Opera             | 17.0
<br>

#### **@keyframes**
Especifica o código de animação.
<br>
Exemplo:

```css
@keyframes mymove{
    from{top: 0px;}
    from{top: 200px;}
}
```

Navegador         | Versão
------------------|--------
Chrome            | 43.0/4.0 -webkit-
Internet Explorer | 10.0
Firefox           | 16.0/5.0 -moz-
Safari            | 9.0/4.0 -webkit-
Opera             | 30.0/15.0 -webkit-/12.0 -o-
<br>

#### **left**
Especifica a posição esquerda de um elemento posicionado.
<br>
Exemplo:

```css
left: 150px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 5.5
Firefox           | 1.0
Safari            | 1.0
Opera             | 5.0
<br>

#### **letter-spacing**
Insere ou retira espaços entre caracteres de um texto.
<br>
Exemplo:

```css
letter-spacing: 5px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **line-break**
Especifica como/se quebrar linhas.
<br>
Exemplo:

```css
Não há exemplo no site.
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **list-style**
Define todas propriedades de uma lista em uma declaração.
<br>
Exemplo:

```css
list-style: square inside url("sqpurple.gif");
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 7.0
<br>

#### **list-style-image**
Especifica uma imagem como marcador do item da lista.
<br>
Exemplo:

```css
list-style-image: url('sqpurple.gif');
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 7.0
<br>

#### **list-style-position**
Especifica a posição dos marcadores de item da lista.
<br>
Exemplo:

```css
list-style-position: inside;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **list-style-type**
Especifica o tipo de marcador de item da lista.
<br>
Exemplo:

```css
list-style-type: square;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **margin**
Define todas as propriedades de margem em uma só declaração.
<br>
Exemplo:

```css
margin: 35px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 6.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **margin-bottom**
Define a margem inferior de um elemento.
<br>
Exemplo:

```css
margin-bottom: 25px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 6.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **margin-left**
Define a margem esquerda de um elemento.
<br>
Exemplo:

```css
margin-left: 25px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 6.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **margin-right**
Define a margem direita de um elemento.
<br>
Exemplo:

```css
margin-right: 25px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 6.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **margin-top**
Define a margem superior de um elemento.
<br>
Exemplo:

```css
margin-top: 25px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 6.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **mask**
Oculta um elemento mascarando ou recortando a imagem em lugares específicos.
<br>
Exemplo:

```css
Não há exemplo.
```

Navegador         | Versão
------------------|--------
Chrome            | Não encontrada
Internet Explorer | Não encontrada
Firefox           | Não encontrada
Safari            | Não encontrada
Opera             | Não encontrada
<br>

#### **mask-type**
Especifica se um elemento de máscara é usado como luminância ou máscara alfa.
<br>
Exemplo:

```css
Não há exemplo.
```

Navegador         | Versão
------------------|--------
Chrome            | Não encontrada
Internet Explorer | Não encontrada
Firefox           | Não encontrada
Safari            | Não encontrada
Opera             | Não encontrada
<br>

#### **max-height**
Define a altura máxima de um elemento.
<br>
Exemplo:

```css
max-height: 50px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 7.0
Firefox           | 1.0
Safari            | 2.0.2
Opera             | 7.0
<br>

#### **max-width**   
Define a largura máxima de um elemento.
<br>
Exemplo:

```css
max-width: 150px;

```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 7.0
Firefox           | 1.0
Safari            | 2.0.2
Opera             | 7.0
<br>
 
#### **@media**   
Define as regras de estilo para diferentes tipos/dispositivos e tamanhos de mídia.
<br>
Exemplo:

```css
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

Navegador         | Versão
------------------|--------
Chrome            | 21
Internet Explorer | 9
Firefox           | 3.5
Safari            | 4.0
Opera             | 9.0
<br>

#### **min-height**   
Define a altura minima de um elemento.
<br>
Exemplo:

```css
min-height: 200px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 7.0
Firefox           | 3.0
Safari            | 2.0.2
Opera             | 4.0
<br>

#### **mix-blend-mode**   
Especifica como o conteúdo de um elemento deve se misturar com o elemento pai.
<br>
Exemplo:

```css
mix-blend-mode: darken;
```

Navegador         | Versão
------------------|--------
Chrome            | 41.0
Internet Explorer | 79.0
Firefox           | 32.0
Safari            | 8.0
Opera             | 35.0
<br>

#### **object-fit**   
Especifica como o conteúdo de um elemento substituído deve ser ajustado à caixa estabelecida por sua altura e largura usadas.
<br>
Exemplo:

```css
object-fit: cover;
```

Navegador         | Versão
------------------|--------
Chrome            | 31.0
Internet Explorer | 16.0
Firefox           | 36.0
Safari            | 7.1
Opera             | 19.0
<br>

#### **object-fit**   
Especifica como o conteúdo de um elemento substituído deve ser ajustado à caixa estabelecida por sua altura e largura usadas.
<br>
Exemplo:

```css
object-fit: cover;
```

Navegador         | Versão
------------------|--------
Chrome            | 31.0
Internet Explorer | 16.0
Firefox           | 36.0
Safari            | 7.1
Opera             | 19.0
<br>

#### **object-position**   
Especifica o alinhamento do elemento substituído dentro da sua caixa.
<br>
Exemplo:

```css
object-position: 5px 10%;
```

Navegador         | Versão
------------------|--------
Chrome            | 31.0
Internet Explorer | 16.0
Firefox           | 36.0
Safari            | 10.0
Opera             | 19.0
<br>

#### **opacity**   
Define o nível de opacidade de um elemento.
<br>
Exemplo:

```css
opacity: 0.5;
```

Navegador         | Versão
------------------|--------
Chrome            | 4.0
Internet Explorer | 9.0
Firefox           | 2.0
Safari            | 3.1
Opera             | 9.0
<br>

#### **order**   
Define a ordem do item flexível em relação ao resto.
<br>
Exemplo:

```css
order: 3;
```

Navegador         | Versão
------------------|--------
Chrome            | 29.0
Internet Explorer | 11.0
Firefox           | 28.0/18.0 -moz-
Safari            | 9.0/6.1 -webkit-
Opera             | 17.0
<br>

#### **orphans**   
Define o número minimo de linhas que devem ser deixadas no final de uma página quando ocorre uma quebra de página dentro de um elemento.
<br>
Exemplo:

```css
Não há exemplo no site.
```

Navegador         | Versão
------------------|--------
Chrome            | Não encontrada
Internet Explorer | Não encontrada
Firefox           | Não encontrada
Safari            | Não encontrada
Opera             | Não encontrada
<br>

#### **outline**   
Uma propriedade abreviada para as propriedades outline-width, outline-style e outline-color.
<br>
Exemplo:

```css
outline: 5px dotted green;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 8.0
Firefox           | 1.5
Safari            | 1.2
Opera             | 7.0
<br>

#### **outline-color**   
Define a cor de um contorno.
<br>
Exemplo:

```css
outline: 5px dotted green;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 8.0
Firefox           | 1.5
Safari            | 1.2
Opera             | 7.0
<br>


#### **outline-offset**   
Desloca um contorno e o desenha além da borda.
<br>
Exemplo:

```css
outline-offset: 5px dotted green;
```

Navegador         | Versão
------------------|--------
Chrome            | 4.0
Internet Explorer | 15.0
Firefox           | 3.5
Safari            | 3.1
Opera             | 10.5
<br>

#### **outline-style**   
Define o estilo de um contorno.
<br>
Exemplo:

```css
div outline-style: dotted;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 8.0
Firefox           | 1.5
Safari            | 1.2
Opera             | 7.0
<br>

#### **outline-width**   
Define a largura de um contorno.
<br>
Exemplo:

```css
div {outline-width: thick;}
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 8.0
Firefox           | 1.5
Safari            | 1.2
Opera             | 7.0
<br>

#### **overflow**   
Especifica o que acontece se o conteúdo estourar a caixa de um elemento.
<br>
Exemplo:

```css
overflow: scroll;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 7.0
<br>

#### **overflow-wrap**   
Especifica se o navegador pode ou não quebrar as linhas dentro das palavras para evitar o estouro(quando uma string é muito longa para caber na caixa que a contém).
<br>
Exemplo:

```css
Não há exemplo no site.
```

Navegador         | Versão
------------------|--------
Chrome            | Não encontrada
Internet Explorer | Não encontrada
Firefox           | Não encontrada
Safari            | Não encontrada
Opera             | Não encontrada
<br>

#### **overflow-x**   
Especifica se deve ou não cortar as bordas da esquerda/direita do conteúdo, se estourar a área de conteúdo do elemento.
<br>
Exemplo:

```css
overflow-x: scroll;
```

Navegador         | Versão
------------------|--------
Chrome            | 4.0
Internet Explorer | 9.0/8.0 -ms-
Firefox           | 3.5
Safari            | 3.0
Opera             | 9.5
<br>

#### **overflow-y**   
Especifica se deve ou não cortar as bordas superiores/inferiores do conteúdo, se estourar a área de conteúdo do elemento.
<br>
Exemplo:

```css
overflow-y: scroll;
```

Navegador         | Versão
------------------|--------
Chrome            | 4.0
Internet Explorer | 9.0/8.0 -ms-
Firefox           | 3.5
Safari            | 3.0
Opera             | 9.5
<br>

#### **overflow-y**   
Especifica se deve ou não cortar as bordas superiores/inferiores do conteúdo, se estourar a área de conteúdo do elemento.
<br>
Exemplo:

```css
overflow-y: scroll;
```

Navegador         | Versão
------------------|--------
Chrome            | 4.0
Internet Explorer | 9.0/8.0 -ms-
Firefox           | 3.5
Safari            | 3.0
Opera             | 9.5
<br>

#### **padding**   
Uma propriedade abreviada para todas as propriedades padding.
<br>
Exemplo:

```css
padding: 35px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **padding-bottom**   
Define o preenchimento inferior de um elemento.
<br>
Exemplo:

```css
padding-bottom: 25px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **padding-left**   
Define o preenchimento esquerdo de um elemento.
<br>
Exemplo:

```css
padding-left: 25px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **padding-right**   
Define o preenchimento direito de um elemento.
<br>
Exemplo:

```css
padding-right: 25px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **padding-top**   
Define o preenchimento superior de um elemento.
<br>
Exemplo:

```css
padding-top: 25px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **page-break-after**   
Define o comportamento de quebra de página após um elemento.
<br>
Exemplo:

```css
page-break-after: always;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.0
Opera             | 3.5
<br>

#### **page-break-before**   
Define o comportamento de quebra de página antes de um elemento.
<br>
Exemplo:

```css
page-break-before: always;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.2
Opera             | 7.0
<br>

#### **page-break-inside**   
Define o comportamento de quebra de página antes de um elemento.
<br>
Exemplo:

```css
page-break-inside: always;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 4.0
Firefox           | 1.0
Safari            | 1.2
Opera             | 7.0
<br>

#### **perspective**   
Dá a um elemento posicionado em 3d alguma respectiva.
<br>
Exemplo:

```css
perspective: 100px;
```

Navegador         | Versão
------------------|--------
Chrome            | 36.0/12.0 -webkit-
Internet Explorer | 10.0
Firefox           | 16.0/10.0 -moz-
Safari            | 9.0/4.0.3 -webkit-
Opera             | 23.0/15.0 -webkit-
<br>

#### **perspective-origin**   
Define em qual posição o usuário está olhando para o elemento posicionado em 3D.
<br>
Exemplo:

```css
perspective-origin: left;
```

Navegador         | Versão
------------------|--------
Chrome            | 36.0/12.0 -webkit-
Internet Explorer | 10.0
Firefox           | 16.0/10.0 -moz-
Safari            | 9.0/4.0.3 -webkit-
Opera             | 23.0/15.0 -webkit-
<br>

#### **pointer-events**   
Define se um elemento reage ou não a eventos de ponteiro.
<br>
Exemplo:

```css
pointer-events: auto;
```

Navegador         | Versão
------------------|--------
Chrome            | 2.0
Internet Explorer | 11.0
Firefox           | 3.6 
Safari            | 4.0
Opera             | 9.0
<br>

#### **position**   
Especifica o método de posicionamento usado para um elemento(estático,relativo, absoluto ou fixo).
<br>
Exemplo:

```css
position: absolute;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 7.0
Firefox           | 1.0 
Safari            | 1.0
Opera             | 4.0
<br>

#### **position**   
Especifica o método de posicionamento usado para um elemento(estático,relativo, absoluto ou fixo).
<br>
Exemplo:

```css
position: absolute;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 7.0
Firefox           | 1.0 
Safari            | 1.0
Opera             | 4.0
<br>

#### **quotes**   
Define o tipo de aspas para aspas incorporadas.
<br>
Exemplo:

```css
quotes: "'" "'";
```

Navegador         | Versão
------------------|--------
Chrome            | 11.0
Internet Explorer | 8.0
Firefox           | 1.5 
Safari            | 5.1
Opera             | 4.0
<br>

#### **resize**   
Define se e como um elemento é redimensionável pelo usuário.
<br>
Exemplo:

```css
resize: both;
```

Navegador         | Versão
------------------|--------
Chrome            | 4.0
Internet Explorer | 79.0
Firefox           | 5.0/4.0 -moz- 
Safari            | 4.0
Opera             | 15.0
<br>

#### **right**   
Especifica a posição correta de um elemento posicionado.
<br>
Exemplo:

```css
right: 150px;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 5.5
Firefox           | 1.0 
Safari            | 1.0
Opera             | 5.0
<br>

#### **scroll-behavior**   
Especifica se anima suavemente a posição de rolagem em uma caixa de rolagem, em vez de um salto direto..
<br>
Exemplo:

```css
scroll-behavior: smooth;
```

Navegador         | Versão
------------------|--------
Chrome            | 61.0
Internet Explorer | 79.0
Firefox           | 36.0 
Safari            | 14.0
Opera             | 48.0
<br>

#### **tab-size**   
Especifica a largura de um caractere de tabulação.
<br>
Exemplo:

```css
tab-size: 
```

Navegador         | Versão
------------------|--------
Chrome            | 21.0
Internet Explorer | 79.0
Firefox           | 4.0 -moz- 
Safari            | 6.1
Opera             | 15.0/10.6 -o-
<br>

#### **table-layout**   
Define o algoritmo usado para definir as células, linhas e colunas da tabela.
<br>
Exemplo:

```css
table-layout: auto;
```

Navegador         | Versão
------------------|--------
Chrome            | 14.0
Internet Explorer | 5.0
Firefox           | 1.0 
Safari            | 1.0
Opera             | 7.0
<br>

#### **text-align**   
Especifica o alinhamento horizontal do texto.
<br>
Exemplo:

```css
text-align: right;
```

Navegador         | Versão
------------------|--------
Chrome            | 1.0
Internet Explorer | 3.0
Firefox           | 1.0 
Safari            | 1.0
Opera             | 3.5
<br>

#### **text-align-last**   
Descreve como a ultima linha de um bloco ou uma linha antes de uma quebra de linha forçada é alinhada quando o alinhamento é justificado.
<br>
Exemplo:

```css
text-align-last: right;
```

Navegador         | Versão
------------------|--------
Chrome            | 47.0
Internet Explorer | 5.5
Firefox           | 49.0/12.0 -moz- 
Safari            | não suportada
Opera             | 34.0
<br>

#### **text-combine-upright**   
Especifica a combinação de varios caracteres no espaço de um único caractere.
<br>
Exemplo:

```css
Não há um exemplo no site.
```

Navegador         | Versão
------------------|--------
Chrome            | Não encontrada
Internet Explorer | Não encontrada
Firefox           | Não encontrada 
Safari            | Não encontrada
Opera             | Não encontrada
<br>
