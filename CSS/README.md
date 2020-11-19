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






 







