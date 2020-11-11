# HTML 5

O objetivo desse documento, em primeiro lugar é estudar o HTML 5 e documenta-lo, seus elementos e seus atributos. Aproveitando a oportunidade, disponibilizo este documento para o aprendizado de iniciantes em HTML 5.

Este documento teve como referência o site w3schools.com. Todos os códigos estão em funcionamento, qualquer erro identificado sinta-se a vontade para comunica-lo.

## HTML5 TAGS
* `<!DOCTYPE>`: Todo arquivo html deve iniciar com essa declaração, não é uma tag do HTML e tem como função informar ao browser sobre qual tipo de documento que se trata.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Bem vindo!</h1>
    </head>
    <body>
        conteúdo
    </body>
</html>
```
* `<html>`: Todo documento html é inserido dentro desta tag, quando finalizado ela é fechada. Ou seja, ela contém todos os outros elementos dentro dela. 
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Html</h1>
    </head>
    <body>
        Este site foi criado para teste.
    </body>
</html>
```
* `<head>`: É inserido entre a tag html e a do body, contém dentro dela metadatas que podem definir o titulo do documento, o estilo e scripts.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Calculadora</h1>
    </head>
    <body>
        <h2>Bem vindo usuário</h2>
        <p>Criei este site para você calcular.</p>
    </body>
</html>
```
* `<title>`: Insere um título ao documento, deve ser somente texto. É mostrado na aba da página, é necessário em documentos html. As recomendações são que não seja longo, algo entre uma ou duas palavras de tamanho entre 50 e 60 caracteres.  
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <h2>Testando</h2>
        <p>Este site foi criado para teste.</p>
    </body>
</html>
```
* `<body>`: Define o corpo do documento, contém outras tags do html como headings, paragraphs, images, hiperlink,tables,lists.
 ```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p><a href="Google.com">Conheça nosso site.</a></p>
        <h2>Testando</h2>
        <p>Este site foi criado para teste.</p>
        <h3>Olá</h3>
    </body>
</html>
```
* `<h1>` to `<h6>` : Definem os títulos, sendo 1 o principal e diminui sua relevancia conforme aumenta seu número, ou seja 6 o menos relevante ou um subtítulo. Apenas um h1 pode ser usado por página deve-se observar a hierarquia afim de uma boa estruturação e uso dessas tags.
 ```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <h2>Titulo 2</h2>
        <h3>Titulo 3</h3>
        <h4>Titulo 4</h4>
        <h5>Titulo 5</h5>
        <h6>Titulo 6</h6>
    </body>
</html>
```

* `<p>`: Define um parágrafo, o navegador adiciona uma linha em branco antes de cada elemento p.
 ```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>Um parágrafo.</p>
        <p>Outro parágrafo</p>
    </body>
</html>
```
* `<br>`: Insere uma quebra de linha, é uma tag que não tem fechamento.
 ```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>Bem</p><br><p>Vindo</p>
    </body>
</html>
```
* `<hr>`: É uma "linha" que separa conteúdos ou define uma mudança em documentos HTML.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>Bem</p><br><p>Vindo</p>
        <hr>
        <p> HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.. 
        </p>
    </body>
</html>
```
* `<!-->`...`<-->`: Utilizada para inserir comentários, não são exibidos nos navegadores. É possível utilizar para comentar seu código e pode ajuda-lo em outro momento quando você for editar seu código.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <!--
        Este é um comentário.
        -->
        <p>Bem</p><br><p>Vindo</p>
        <hr>
        <p> HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.
        </p>
    </body>
</html>
```
* `<abbr>`: Define uma abreviação ou acrônimo quando passado o mouse sobre o elemento.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <!--
        Este é um comentário.
        -->
        <p>Bem</p><br><p>Vindo</p>
        <hr>
        <p> HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. 
        </p>
        <abbr title = "World Wide Web">WWW</abbr> commonly know as the Web.
    </body>
</html>
```
* `<adress>`: Utilizado para informar o contato do autor/criador do documento ou artigo, o contato pode ser o endereço de email, URL, número do telefone...
Esse elemento geralmente está em itálico e os navegadores sempre adicionarão uma quebra de linha antes e depois de cada elemento adress.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <!--
        Este é um comentário.
        -->
        <p>Bem</p><br><p>Vindo</p>
        <hr>
        <p> HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.. 
        </p>
        <abbr title = "World Wide Web">WWW</abbr> commonly know as the Web.
        <address>
            Escrito por: Guilherme.
            Telefone: 99999999
            Cidade: São Paulo - Brasil
        </address>
    </body>
</html>
```
* `<adress>`: Transforma o texto em negrito. Deve ser utilizado como ultimo recurso, quando nenhuma outra tag é apropriada.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <!--
        Este é um comentário.
        -->
        <p>Bem</p><br><p>Vindo</p>
        <hr>
        <p>HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.
        </p>
        <abbr title = "World Wide Web">WWW</abbr> commonly know as the Web.
        <b>Texto em negrito</b>
        <address>
            Escrito por: Guilherme.
            Telefone: 99999999
            Cidade: São Paulo - Brasil
        </address>
    </body>
</html>
```
* `<bdi>`: Não é suportado em todos os navegadores, é mais utilizado no caso de línguas árabes nas quais possuem a escrita de trás para frente.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <!--
        Este é um comentário.
        -->
        <p>Bem</p><br><p>Vindo</p>
        <hr>
        <p>HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.
        </p>
        <abbr title = "World Wide Web">WWW</abbr> commonly know as the Web.
        <b>Texto em negrito</b>
        <address>
            Escrito por: Guilherme.
            Telefone: 99999999
            Cidade: São Paulo - Brasil
        </address>
        <ul>
            <li>Usuário João: 60 pontos</li>
            <li>Usuário<bdi>Maria</bdi>: 80 pontos</li>
            <li>Usuário <bdi>إيان</bdi>: 90 pontos</li>
        </ul>
    </body>
</html>
```
* `<bdo>`: Substitui a direção do texto(inverte).
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <!--
        Este é um comentário.
        -->
        <p>Bem</p><br><p>Vindo</p>
        <hr>
        <p>HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.
        </p>
        <abbr title = "World Wide Web">WWW</abbr> commonly know as the Web.
        <b>Texto em negrito</b>
        <address>
            Escrito por: Guilherme.
            Telefone: 99999999
            Cidade: São Paulo - Brasil
        </address>
        <ul>
            <li>Usuário João: 60 pontos</li>
            <li>Usuário<bdi>Maria</bdi>: 80 pontos</li>
            <li>Usuário <bdi>إيان</bdi>: 90 pontos</li>
            <bdo dir="rtl"> Texto </bdo>
        </ul>
    </body>
</html>
```
* `<cite>`: Define o título de um trabalho criativo como um livro, um poema, um som... O nome de uma pessoa não é um título de um trabalho, o texto dentro da tag fica em itálico.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <!--
        Este é um comentário.
        -->
        <p>Bem</p><br><p>Vindo</p>
        <hr>
        <p>HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.
        </p>
        <p><cite>The movie</cite> by Guilherme Arnhold.</p>
    </body>
</html>
```
* `<code>`: Essa tag é utilizada para inserir trechos de código.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <!--
        Este é um comentário.
        -->
        <p>Bem</p><br><p>Vindo</p>
        <hr>
        <p>HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.
        </p>
        <p><cite>The movie</cite> by Guilherme Arnhold.</p>
        <code>background-color</code>
    </body>
</html>
```
* `<del>`: Define o texto deletado do documento, os navegadores geralmente inserem uma linha sobre esse texto.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <!--
        Este é um comentário.
        -->
        <p>Bem</p><br><p>Vindo</p>
        <hr>
        <p>HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.
        <p> Eu gosto de <del>ler</del> <ins>música.</ins>
        </p>
    </body>
</html>
```
* `<dfn>`: Especifica um termo que será definido com o conteúdo. O pai mais proximo do dfn deve conter a explicação/definição do termo.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <!--
        Este é um comentário.
        -->
        <p>Bem</p><br><p>Vindo</p>
        <hr>
        <p>HTML(abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.
        <p> 
            <dfn>WWW</dfn>Significa em português rede de alcance mundial, também conhecida como Web ou WWW. World Wide Web é um sistema de documentos em hipermídia que são interligados e executados na Internet.
        </p>
    </body>
</html>
```
* `<em>`: É utilizada para enfatizar/destacar um texto. o conteúdo é transformado para itálico.

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <!--
        Este é um comentário.
        -->
        <p>Bem</p><br><p>Vindo</p>
        <hr>
        <p>HTML(abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.
        <p>We need <em>you</em></p>
    </body>
</html>
```
* `<i>`: Frequentemente utilizado para indicar um termo técnico, uma frase de outra língua, um nome de um návio... É utilizado quando nenhum outro elemento é apropriado, o texto é transformado em itálico.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <!--
        Este é um comentário.
        -->
        <p>Bem</p><br><p>Vindo</p>
        <hr>
        <p>HTML(abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.
        <p>We need <em>you</em></p>
    </body>
</html>
```
* `<ins>`: Insere um texto no documento, os navegadores geralmente sublinham o texto inserido. É utilizado junto com a tag del.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <!--
        Este é um comentário.
        -->
        <p>Bem</p><br><p>Vindo</p>
        <hr>
        <p>HTML(abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.
        <p>We need <em>you</em></p>
        <p>O site é <del>velho</del> <ins>novo</ins>
    </body>
</html>
``` 
* `<kbd>`: É usado para para definir uma entrada de teclado.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>Bem</p><br><p>Vindo</p>
        <p>Utilize <kbd>Ctrl</kbd> + <kbd>A </kbd>para selecionar tudo.</p>
    </body>
</html>
``` 
* `<mark>`: Marca/destaca um texto.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
    To Buy
        <ul>
            <li>
            <mark>Café</mark><br>
            </li>
            <li>
            <mark>Leite</mark><br>
            </li>
            <li>
            <mark>Frutas</mark>
            </li>
        </ul>
    </body>
</html>
```
* `<meter>`: Realiza uma medição de uma faixa conhecida. Não deve ser utilizada para mostrar o progresso, para isso temos a tag progress.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <label for="disk_c">Disk usage C:</label>
        <meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter>
    </body>
</html>
```
* `<pre>`: Define um texto pré formatado, com fonte de largura fixa preservando os espaços e quebras de linhas. O texto é exibido exatamente como no código fonte html.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <pre>O texto é formatado    exatamente como no código fonte html.
        </pre>
    </body>
</html>
```
* `<progress>`: Deve ser adicionado com a tag label para melhor visualização e acessibilidade. Representa o progresso de uma determinada tarefa.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <label for="file">Progresso:</label>
        <progress id="file" value="32" max="100"> 32% </progress>
    </body>
</html>
```
* `<q>`:É utilizado para citações curtas, coloca o texto em aspas.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <q>O que não provoca minha morte faz com que eu fique mais forte.</q>
    </body>
</html>
```
* `<rp>`: É utilizado junto com ruby para mostrar textos em navegadores que não suportam ruby, esse elemento insere parênteses ao redor do texto.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>
            <ruby>
                漢<rt><rp>(</rp>ㄏㄢˋ<rp>)</rp></rt>
            </ruby>
        </p>
    </body>
</html>
```
* `<rt>`: É utilizado junto com o elemento ruby e rp, define uma explicação ou pronuncia de caracteres do leste asiático.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>
            <ruby>
                漢<rt><rp>(</rp>ㄏㄢˋ<rp>)</rp></rt>
            </ruby>
        </p>
    </body>
</html>
```
* `<ruby>`: Essa tag especifica uma anotação ruby. Uma anotação ruby é um texto pequeno, anexado ao texto principal para indicar a pronuncia ou significado dos caracteres. É frequentemente usado em publicações japonesas.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>
            <ruby>
                漢<rt><rp>(</rp>ㄏㄢˋ<rp>)</rp></rt>
            </ruby>
        </p>
    </body>
</html>
```
* `<s>`: Especifica um texto que não é mais correto, algo que não se aplica mais(que se modificou). O texto será tachado com uma linha.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>
            <s>Bolas de futebol por apenas 50 reais.</s>
            Acabou, não temos mais disponível!
        </p>
    </body>
</html>
```
* `<samp>`: Define um texto como a saída de um programa de computador em um documento, o navegador exibe na fonte monoespaçada padrão.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>
            <s>Bolas de futebol por apenas 50 reais.</s>
            Acabou, não temos mais disponível!
        </p>
    </body>
</html>
```
* `<small>`: Define um texto pequeno.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>
            <small> Este é um pequeno texto</small>
        </p>
    </body>
</html>
```
* `<strong>`: Define um texto importante, o navegador destaca o texto em negrito. Para um texto sem importância se usa a tag b.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>
            <strong>Cuidado com o cão!</strong>
        </p>
    </body>
</html>
```
* `<sub>`: Define um texto subscrito com uma fonte pequena. 
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>
            Dióxido de carbono<sub>CO2</sub>
        </p>
    </body>
</html>
```
* `<sup>`: Define um texto sobrescrito que aparece com uma fonte pequena.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>
            World Wide Web<sup>WWW</sup>
        </p>
    </body>
</html>
```
* `<template>`: Usado com javascript, permite esconder um conteúdo ao carregar a página.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
    <button onclick="showContent()">Show hidden content</button>

        <template>
            <h2>Flower</h2>
            <img src="img_white_flower.jpg" width="214" height="204">
        </template>

        <script>
            function showContent() {
            var temp = document.getElementsByTagName("template")[0];
            var clon = temp.content.cloneNode(true);
            document.body.appendChild(clon);}
        </script>
    </body>
</html>
```
* `<time>`: Define um horário e uma data, é utilizado para que os navegadores possam adicionar lembretes de datas por meio do calendário do usuário.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p> Eu tenho uma festa para ir
        <time datetime="2020-10-24 10:00"> no dia das crianças.
        </time>
        </p>
    </body>
</html>
```
* `<u>`: Representa um texto não articulado com estilo diferente do texto normal, geralmente palavras com erros ortográficos ou nomes proprios em chinês. O conteúdo dentro da tag u, é sublinhado pelo navegador.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>não<u>mecha</u></p>
    </body>
</html>
```
* `<var>`: Define uma variavel em um programa ou uma expressão matematica. O conteúdo fica em itálico.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p><var>b</var> x <var>a</var> = 5</p>
    </body>
</html>
```
* `<wbr>`: Especifica onde em um texto poderia adicionar uma quebra de linha. Quando uma linha é muito longa, o navegador quebra automaticamente e pode quebrar em um lugar incorreto. Por isso, usa-se o wbr.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>This is a veryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryvery<wbr>longwordthatwillbreakatspecific<wbr>placeswhenthebrowserwindowisresized.</p>
        <p><b>Note:</b> The wbr element is not supported in Internet Explorer 11 (or earlier).</p>
    </body>
</html>
```
* `<form>`: É utilizada para criar uma formulário html para entradas do usuário.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <form action="/action_page.php" method="get">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"><br><br>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"><br><br>
            <input type="submit" value="Submit">
            </form>
    </body>
</html>
```
* `<input>`: Especifica onde o usuário pode inserir dados, é o elemento mais importante do form element.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <form action="/action_page.php">
            <label for="nome">Nome:</label>
            <input type="text" id="fname" name="nome"><br><br>
            <label for="sobrenome">Sobrenome:</label>
            <input type="text" id="lname" name="sobrenome"><br><br>
            <input type="submit" value="Submit">
        </form>
    </body>
</html>
```
* `<textarea>`: É utilizado para definir uma inserção de texto maior pelo usuário, como para coletar comentários.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <textarea id="linguaPortuguesa" name="linguaPortuguesa" rows="5" cols="50">
            A Língua Portuguesa é falada tanto em Portugal, quanto no Brasil e em outros diversos países ao redor do planeta. Assim sendo, falar este idioma pode abrir uma série de oportunidades  pessoais e até mesmo profissionais.
        </textarea>
    </body>
</html>
```
* `<button>`: Cria um botão para interação com o usuário.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <button type="button"> Clique aqui!</button>
    </body>
</html>
```
* `<select>`: Cria uma caixa de seleção com varias opções a serem escolhidas.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <label for="cor">Escolha uma cor:</label>
        <select name="cor" id="cor">
        <option value="branco">Branco</option>
         <option value="verde">Verde</option>
        <option value="laranja">Laranja</option>
        <option value="preto">Preto</option>
  </select>
    </body>
</html>
```
* `<optgroup>`: Separa em grupo as opções da caixa de seleção, utilizado junto com a tag select. Quando há um grande numero de opções os grupos facilitam para maneja-las.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <label for="camisa">Escolha uma camisa:</label>
        <select name="camisas" id="camisas">
            <optgroup label ="Grêmio">
                <option value="geromel">Camisa 3 - Pedro Geromel </option>
                <option value="kannemann">Camisa 4 - Walter Kannemann</option>
            </optgroup>
            <optgroup label ="Barcelona">
                <option value="messi">Camisa 10 - Lionel Messi</option>
                <option value="coutinho">Camisa 14 - Phillipe Coutinho</option>
            </optgroup>
        </select>
    </body>
</html>
```
* `<option>`: Define uma opção em uma lista de seleção. Geralmente utilizada junto com a tag select.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <label for="camisa">Escolha uma camisa:</label>
        <select name="camisas" id="camisas">
            <option value="geromel">Camisa 3 - Pedro Geromel </option>
            <option value="kannemann">Camisa 4 - Walter Kannemann</option>
         </select>
    </body>
</html>
```
* `<label>`: Cria um rótulo para os elementos
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p> Escolha a cor desejada: </p>
        <label for="cor">Cor:</label>
        <input type="color" name="cordacamisa"  id="cor">
    </body>
</html>
```
* `<fieldset>`: Desenha uma caixa em volta dos elementos, agrupa os elementos em um formulário.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <fieldset>
            <legend>Formulario</legend>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome"><br><br>
            <label for="sobrenome">Sobrenome:</label>
            <input type="text" id="sobrenome" name="sobrenome"><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br><br>
            <label for="telefone">Telefone:</label>
            <input type="telefone" id="telefone" name="telefone">
        </fieldset>
    </body>
</html>
```
* `<legend>`: Cria uma legenda para a tag fieldset.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <fieldset>
            <legend>Formulario</legend>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome"><br><br>
            <label for="sobrenome">Sobrenome:</label>
            <input type="text" id="sobrenome" name="sobrenome"><br><br>
        </fieldset>
    </body>
</html>
```
* `<datalist>`: Cria uma lista com opções pré definidas.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <label for="esportes">Escolha seu esporte:</label>
        <input list="esportes" name="esporte" id="esporte">
        <datalist id="esportes">
            <option value="Futebol">
            <option value="Volei">
            <option value="Handebol">
            <option value="Natação">
            <option value="Atletismo">
        </datalist>
    </body>
</html>
```
* `<output>`: É utilizado para representar o resultado de um cálculo.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
        <input type="range" id="a" value="50">
        +<input type="number" id="b" value="25">
        =<output name="x" for="a b"></output>
        </form>
    </body>
</html>
```
* `<iframe>`: Cria um quadro, um frame. É utilizado para incorporar outros documentos a um documento HTML. É uma boa prática incluir um atributo titulo para o frame.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
      <iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>
    </body>
</html>
```
* `<img>`: Insere uma imagem em uma página HTML, a imagem não é inserida na página e sim vinculada a ela. Esse elemento necessita dois outros elementos, o SRC que especifica o caminho da imagem e o alt que descreve a imagem caso ela não puder ser exibida.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"> 
    </body>
</html>
```
* `<map>`: Define um mapa de imagem, ou seja, uma imagem com áreas clicáveis.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
      <img src="workplace.jpg" alt="areadetrabalho" usemap="#workmap" width="400" height="379">
        <map name="workmap">
            <area shape="rect" coords="34,44,270,350" alt="computador" href="computer.htm">
            <area shape="rect" coords="290,172,333,250" alt="telefone" href="phone.htm">
            <area shape="circle" coords="337,300,44" alt="xicara de café" href="coffee.htm">
        </map>
    </body>
</html>
```
* `<canvas>`: É utilizado para desenhar gráficos por meio de scripts, a tag é transparente e é apenas um container para gráficos, é necessário um script para desenhar os gráficos. Mesmo que o navegador não suporte a tag canvas e o javascript esteja desabilitado o conteúdo será exibido.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <canvas id="myCanvas">
            Seu navegador não suporta a tag canvas
        </canvas>
        <script>
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = "#black";
            ctx.fillRect(0, 0, 100, 100);
        </script>
    </body>
</html>
```
* `<figcaption>`: Define uma legenda para uma imagem.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <figure>
            <img src="https://i2.wp.com/marketingcomcafe.com.br/wp-content/uploads/2017/12/banco-imagens-gratis.png" alt="homemprotestando" style="width:100%">
            <figcaption>Fig 1 - Um homem de máscara protestando.</figcaption>
        </figure>
    </body>
</html>
```
* `<figure>`: Especifica conteúdo independente como fotos, diagramas, ilustrações...
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <figure>
            <img src="https://i2.wp.com/marketingcomcafe.com.br/wp-content/uploads/2017/12/banco-imagens-gratis.png" alt="homemprotestando" style="width:100%">
            <figcaption>Fig 1 - Um homem de máscara protestando.</figcaption>
        </figure>
    </body>
</html>
```
* `<picture>`: Oferece maior flexibilidade para manipular imagens, podendo aumentar ou diminuir a imagem conforme a janela de visualização. A tag picture contém a tag source e img.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <picture>
            <source media="(min-width:650px)" srcset="https://i2.wp.com/marketingcomcafe.com.br/wp-content/uploads/2017/12/banco-imagens-gratis.png">
            <source media="(min-width:465px)" srcset="http://www.fundosanimais.com/imagens-imagens-lobos-jpg">
            <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
        </picture>
    </body>
</html>
```
* `<svg>`: Cria um container para gráficos vetoriais escalonaveis. Ou seja, é possível desenhar formas.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <svg width="400" height="180">
        <rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:red;stroke:black;stroke-width:5;opacity:0.5" /></svg>
     </body>
</html>
```
* `<audio>`: É usado para inserir som ao documento, o texto dentro da tag audio só é exibido quando o navegador não suportar a tag audio, esse elemento possui uma ou mais tags source.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <audio controls>
            <source src="audio.ogg" type="audio/ogg">
            <source src="audio.mp3" type="audio/mpeg">
            Seu navegador não suporta o elemento audio.
        </audio>
     </body>
</html>
```
* `<source>`: Com ela é possível especificar ao navegador arquivos alternativos conforme sua janela de visualização ou suporte, o navegador irá escolher a primeira source compatível.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <audio controls>
            <source src="audio.ogg" type="audio/ogg">
            <source src="audio.mp3" type="audio/mpeg">
            Seu navegador não suporta o elemento audio.
        </audio>
     </body>
</html>
```
* `<track>`: Especifica faixas de texto para as tags audio ou video, é usado para especificar legendas ou outros arquivos contendo texto que devem ser visiveis durante a reprodução.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <video width="320" height="240" controls>
            <source src="forrest_gump.mp4" type="video/mp4">
            <source src="forrest_gump.ogg" type="video/ogg">
            <track src="fgsubtitles_en.vtt" kind="legendas" srclang="en" label="English">
            <track src="fgsubtitles_no.vtt" kind="legendas" srclang="no" label="Norwegian">
        </video>
     </body>
</html>
``` 
* `<video>`: Usado para inserir video em um documento, essa tag contém um ou mais tag sources e o navegador escolhe a primeira que possui suporte. O texto entre a tag e o seu fechamento apenas é exibido quando o navegador não suportar essa tag.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <video width="320" height="240" controls>
            <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4">
            <source src="https://www.w3schools.com/tags/movie.ogg" type="video/ogg">
            Seu navegador não suporta a tag de video.
        </video>
     </body>
</html> 
``` 
* `<a>`: Define um hiperlink que leva o usuário a outra página, o elemento href é utilizado para indicar o destino.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <a href="https://google.com"> Visite a página do google.</a>
     </body>
</html> 
``` 
* `<link>`: Define uma relação entre o documento e um recurso externo.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <link rel="stylesheet" href="styles.css">
     </body>
</html> 
``` 
* `<nav>`: Define links de navegação, destina-se apenas ao bloco principal de links de navegação.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <nav>
            <a href="/html/">HTML</a> |
            <a href="/css/">CSS</a> |
            <a href="/js/">JavaScript</a> |
            <a href="/python/">Python</a>
        </nav>
     </body>
</html> 
``` 
* `<ul>`: Define uma lista sem organização, utilizada junto com a tag li.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <ul>
        <li>Batata</li>
        <li>Arroz</li>
        <li>Feijão</li>
        </ul>
     </body>
</html> 
``` 
* `<ol>`: Define uma lista ordenada, pode ser numérica. ou alfabética, utilizada junto com a tag li. É possível indicar em que número ou letra iniciar a lista.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <ol>
        Lista de selecionados:
        <li>João</li>
        <li>Maria</li>
        <li>Lucas</li>
        </ol>
     </body>
</html> 
``` 
* `<li>`: Define um item da lista, é utilizado com as tags ol,ul e menu.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <ol>
        Lista de selecionados:
        <li>João</li>
        <li>Maria</li>
        <li>Lucas</li>
        </ol>
     </body>
</html> 
``` 
* `<dl>`: Uma lista de descrição, é utilizada junto com dt e dd.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <dl>
        <dt>Café</dt>
        <dd>Bebida quente</dd>
        <dt>Milk</dt>
        <dd>Bebida gelada</dd>
        </dl>
     </body>
</html> 
``` 
* `<dt>`: Define um item, um nome em uma lista de descrição. 
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <dl>
        <dt>Café</dt>
        <dd>Bebida quente</dd>
        <dt>Milk</dt>
        <dd>Bebida gelada</dd>
        </dl>
     </body>
</html> 
``` 
* `<dd>`: Descreve um item ou nome e uma lista de descrição.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <dl>
        <dt>Café</dt>
        <dd>Bebida quente</dd>
        <dt>Milk</dt>
        <dd>Bebida gelada</dd>
        </dl>
     </body>
</html> 
``` 
* `<table>`: Define uma tabela HTML. É utilizada com as tags tr,th e td.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <style>
        table, th, td {
         border: 2px solid black;
        }
    </style>
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <table>
            <tr>
                <th>Mês</th>
                <th>Dia</th>
            </tr>
            <tr>
                <td>Janeiro</td>
                <td>21</td>
            </tr>
            <tr>
                <td>Feveiro</td>
                <td>28</td> 
            </tr>
        </table>
     </body>
</html> 
``` 
* `<caption>`: Define uma legenda para uma tabela.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <table>
            <caption>Mes e dia</caption>
            <tr>
                <th>Mês</th>
                <th>Dia</th>
            </tr>
            <tr>
                <td>Janeiro</td>
                <td>21</td>
            </tr>
            <tr>
                <td>Feveiro</td>
                <td>28</td> 
            </tr>
        </table>
     </body>
</html> 
``` 
* `<th>`: Cria uma célula de cabeçalho, contém informações do cabeçalho.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <style>
        table, th, td {
         border: 2px solid black;
        }
    </style>
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <table>
            <caption>Legenda</caption>
            <tr>
                <th>Mês</th>
                <th>Dia</th>
            </tr>
            <tr>
                <td>Janeiro</td>
                <td>21</td>
            </tr>
            <tr>
                <td>Feveiro</td>
                <td>28</td> 
            </tr>
        </table>
     </body>
</html> 
``` 
* `<tr>`: Define uma linha para uma tabela.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <style>
        table, th, td {
         border: 2px solid black;
        }
    </style>
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <table>
            <tr>
                <th>Mês</th>
                <th>Dia</th>
            </tr>
            <tr>
                <td>Janeiro</td>
                <td>21</td>
            </tr>
            <tr>
                <td>Feveiro</td>
                <td>28</td> 
            </tr>
        </table>
     </body>
</html> 
``` 
* `<td>`: Define uma célula de dados na tabela html.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <table>
            <tr>
                <th>Mês</th>
                <th>Dia</th>
            </tr>
            <tr>
                <td>Janeiro</td>
                <td>21</td>
            </tr>
            <tr>
                <td>Feveiro</td>
                <td>28</td> 
            </tr>
        </table>
     </body>
</html> 
``` 
* `<thead>`: É utilizada para agrupar o conteúdo do cabeçalho na tabela.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <style>
        table, th, td {
         border: 2px solid black;
        }
    </style>
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <table>
            <thead>
                <tr>
                    <th>Mês</th>
                    <th>Dia</th>
                </tr>
            </thead>
                <tr>
                    <td>Janeiro</td>
                    <td>21</td>
                </tr>       
                <tr>
                    <td>Feveiro</td>
                    <td>28</td> 
                </tr>
        </table>
     </body>
</html> 
``` 
* `<tbody>`: Agrupa o conteúdo do corpo do html em uma tabela.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <style>
        table, th, td {
         border: 2px solid black;
        }
</style>
    <body>
        <table>
            <thead>
                <tr>
                    <th>Mês</th>
                    <th>Dia</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Janeiro</td>
                    <td>21</td>
                </tr> 
            </tbody>      
                <tr>
                    <td>Feveiro</td>
                    <td>28</td> 
                </tr>
        </table>
     </body>
</html> 
``` 
* `<tfoot>`: Agrupa o conteúdo do rodapé de uma tabela html.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <style>
        table, th, td {
         border: 2px solid black;
        }
</style>
    <body>
        <table>
            <thead>
                <tr>
                    <th>Mês</th>
                    <th>Dia</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Janeiro</td>
                    <td>21</td>
                </tr> 
            </tbody> 
            <tfoot>     
                <tr>
                    <td>Feveiro</td>
                    <td>28</td> 
                </tr>
            </tfoot> 
        </table>
     </body>    
</html> 
``` 
* `<col>`: Especifica as propriedades de cada coluna, pode ser utilizado para personalizar as colunas.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <style>
        table, th, td {
         border: 2px solid black;
        }
</style>
    <body>
        <table>
            <colgroup>
                <col span="1" style="background-color:blue">
                <col style="background-color:green">
            </colgroup>
            <thead>
                <tr>
                    <th>Mês</th>
                    <th>Dia</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Janeiro</td>
                    <td>21</td>
                </tr> 
            </tbody> 
            <tfoot>     
                <tr>
                    <td>Feveiro</td>
                    <td>28</td> 
                </tr>
            </tfoot> 
        </table>
     </body>    
</html> 
``` 
* `<colgroup>`: Especifica um grupo de um ou mais colunas de uma tabela para formatar. 
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <style>
        table, th, td {
         border: 2px solid black;
        }
</style>
    <body>
        <table>
            <colgroup>
                <col span="1" style="background-color:blue">
                <col style="background-color:green">
            </colgroup>
            <thead>
                <tr>
                    <th>Mês</th>
                    <th>Dia</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Janeiro</td>
                    <td>21</td>
                </tr> 
            </tbody> 
            <tfoot>     
                <tr>
                    <td>Feveiro</td>
                    <td>28</td> 
                </tr>
            </tfoot> 
        </table>
     </body>    
</html> 
``` 
* `<style>`: É utilizada para definir um estilo CSS para um documento.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <style>
        p {color: blue;}
</style>
    <body>
       <p> Bem vindo </p>
       </body>    
</html> 
``` 
* `<div>`:  Define uma divisão, seção de um documento html. É utilizada como um container para elementos html.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <div class="div">
            <h2>Usuário</h2>
            <p> Bem vindo </p>
       </div>
       </body>    
</html> 
``` 
* `<span>`: É um container que é utilizado para marcar a parte de um texto ou documento. 
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <style>
    .div
    {
    text-align: center;
    background-color:  blue; 
    border: 5px black;
    }
    </style>
    <body>
        <p>Eu gosto da cor <span style="color:blue;font-weight:bold">azul</span> mas meu irmão prefere <span style="color:red;font-weight:bold">vermelho.</span></p>
       </body>    
</html> 
``` 
* `<header>`: Um container para um conteúdo introdutório ou um conjunto de links de navegação.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <article>
            <header>
                <h1>Cabeçalho</h1>
                <p>Criado por Guilherme</p>
                <p>Texto aqui</p>
            </header>
            <p>Lorem Ipsum dolor set amet....</p>
        </article>
    </body>    
</html> 
``` 
* `<footer>`: Define um rodapé para um documento HTML.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <article>
            <header>
                <h1>Cabeçalho</h1>
                <p>Criado por Guilherme</p>
                <p>Texto aqui</p>
            </header>
            <p>Lorem Ipsum dolor set amet....</p>
        </article>
        <footer>
            <p> Autor: Guilherme Arnhold</p>
            <a href="https://github.com/GuilhermeArnhold/Estudos-direcionados">Github</a></p>
        </footer>
    </body>    
</html> 
``` 
* `<main>`: Especifica o conteúdo principal de um arquivo. Só pode haver uma tag main no documento html.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
      <main>
        <h1>Os dois maiores times do Rio Grande do Sul</h1>
        <p> O Grêmio e o Internacional são os dois maiores times do Rio Grande do Sul.</p>
        <article>
            <h2>Grêmio</h2>
            <p> Grêmio Foot-Ball Porto Alegrense (conhecido apenas por Grêmio e cujo acrônimo é FBPA) é um clube de futebol brasileiro da cidade de Porto Alegre, no Rio Grande do Sul, fundado em 15 de setembro de 1903 por Candido Dias da Silva. Suas cores são azul, preto e branco. O clube tem como alcunhas Imortal Tricolor, Tricolor dos Pampas, Tricolor Gaúcho, Rei de Copas e Clube de Todos.
            Já foi campeão da Copa Libertadores da América em três ocasiões (o que o torna o clube brasileiro com mais conquistas nesta competição, ao lado de São Paulo e Santos) e vice em duas outras oportunidades, sendo o único clube brasileiro a ter decidido a competição em quatro décadas diferentes. É o primeiro clube fora da região Sudeste a conquistar títulos de dimensão continental e mundial, sendo campeão da América e do Mundo em 1983. Também é bicampeão da Recopa Sul-Americana, tendo conquistado este torneio em todas as vezes em que o disputou. Conquistou ainda dois Campeonatos Brasileiros da Série A, um Campeonato Brasileiro da Série B, cinco Copas do Brasil e uma Supercopa do Brasil, além de uma Copa Sul e um Campeonato Sul-Brasileiro. No âmbito estadual, já foi campeão trinta e nove vezes do Campeonato Gaúcho, uma vez da Copa FGF e uma vez da Recopa Gaúcha.
            Fonte: Wikipedia
            </p>
        </article>
        <article>
            <h2>Internacional</h2>
            <p> O Sport Club Internacional (mais conhecido como Internacional ou Inter de Porto Alegre e popularmente pelo apelido de Colorado) é um clube multiesportivo brasileiro com sede na cidade de Porto Alegre, capital do Rio Grande do Sul. Foi fundado em 4 de abril de 1909, pelos irmãos Poppe, com o objetivo de ser uma instituição democrática e sem preconceitos. Tem como suas cores o vermelho e o branco e seus torcedores são conhecidos como colorados. Seu rival histórico é o Grêmio Foot-Ball Porto Alegrense, com quem disputa o Grenal, um dos maiores clássicos do mundo. No futebol, é um dos clubes mais bem-sucedidos do Brasil e das Américas, sendo o terceiro maior campeão internacional do país, com 7 conquistas oficiais, superado somente pelo Santos e São Paulo. Dentre suas maiores glórias no futebol, destacam-se as conquistas do Mundial de Clubes da FIFA e os dois títulos da Copa Libertadores da América em 2006 e 2010, além de uma Copa Sul-Americana (invicta), dois títulos da Recopa Sul-Americana e uma Copa Suruga Bank. A nível nacional, o Colorado é considerado tricampeão, tendo vencido três títulos do Campeonato Brasileiro, sendo o terceiro de forma invicta, além de uma Copa do Brasil, um Torneio Heleno Nunes e 45 títulos do Campeonato Gaúcho (atual recordista).
            Fonte: Wikipedia
            </p>
        </article>
    </main>
    </body>    
</html> 
``` 
* `<section>`: Cria uma seção em um documento.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
      <section>
      <h2>WWW History</h2>
      <p>O desenvolvimento da World Wide Web até 1991 começou em 1980, quando o inglês Tim Berners-Lee, um funcionário contratado do CERN - Organização Europeia para a Investigação Nuclear, na Suíça, desenvolveu o ENQUIRE, um projeto usado para reconhecer e armazenar associações de informações. Cada nova página no ENQUIRE deveria estar ligada a uma página existente.</p>
      </section>
      <section>
      <h2>O ENIAC</h2>
      <p>O mais popular dos gadgets assopra as velhinhas em  14 de fevereiro (1946). Há exatos 65 anos — data em que escrevo este artigo — os pesquisadores norte-americanos John Eckert e John Mauchly, da Electronic Control Company, revelavam ao mundo o primeiro computador eletrônico digital de larga escala, também conhecido como Electronic Numerical Integrator And Computer (que em bom português quer dizer Computador e Integrador Numérico Eletrônico) ou apenas ENIAC para os mais íntimos.</p>
      </section>
    </body>    
</html> 
``` 
* `<article>`: Especifica conteúdo independente que deve fazer sentido por si só e é independente do resto do site, como exemplo podemos citar um post de um blog.
 ```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <article>
            <h2>Google Chrome</h2>
            <p>Google Chrome é um navegador desenvolvido pela google.</p>
        </article>
        <article>
            <h2>Mozilla Firefox</h2>
            <p>É um navegador open source desenvolvido pela mozilla.</p>
        </article>
        <article>
            <h2>Microsoft Edge</h2>
            <p>É um navegador desenvolvido pela Microsoft.</p>
        </article>
    </body>    
</html> 
``` 
* `<aside>`: Define um conteúdo além do conteúdo que é exibido, o conteúdo inserido deve estar indiretamente relacionado ao conteúdo circundante.
 ```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>Minha familia e eu visitamos o Epcot center, o tempo estava ótimo e o parque é maravilhoso.</p>
        <aside>
            <h4>Epcot</h4>
            <p>Epcot é o segundo dos quatro parques temáticos construídos no Walt Disney World em Bay Lake, Flórida, próximo a Orlando, Flórida, Estados Unidos.</p>
        </aside>
    </body>    
</html> 
``` 
* `<details>`: Especifica conteúo adicional que o usuário pode abrir ou fechar.
 ```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <details>
            <summary>Epcot</summary>
            <p>Epcot é o segundo dos quatro parques temáticos construídos no Walt Disney World em Bay Lake, Flórida, próximo a Orlando, Flórida, Estados Unidos.</p>
        </details>
    </body>    
</html> 
``` 
* `<dialog>`: Define uma caixa de dialogo, ideal para criar popups.
 ```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <dialog open> Bem vindo usuário</dialog>
    </body>    
</html> 
``` 
* `<summary>`: Cria um cabeçalho para os elementos da tag details, o cabeçalho quando clicado exibe o conteúdo.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <details>
            <summary>Epcot</summary>
            <p>Epcot é o segundo dos quatro parques temáticos construídos no Walt Disney World em Bay Lake, Flórida, próximo a Orlando, Flórida, Estados Unidos.</p>
        </details>
    </body>    
</html> 
``` 
* `<data>`: É usada para adicionar uma tradução compreendida por máquina para processamento de dados.  
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <ul>
            <li><data value="1001">Tomate</data></li>
            <li><data value="1002">Batata</data></li>
            <li><data value="1003">Alface</data></li>
        </ul>
    </body>    
</html> 
``` 
* `<head>`: Cria um container para metadados, é inserido entre a tag html e body.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Html 5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p> Estou estudando HTML 5</p>
    </body>    
</html> 
``` 
* `<meta>`: Define metadata sobre o documento HTML, é inserida dentro da tag HTML e especifica a codificação de caracteres, o autor do documento e as palavras chaves.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta char-set="UTF-8">
        <meta name="nome" content="Estudando HTML 5">
        <meta name="palavrachave" content="HTML">
        <meta name="autor" content="Guilherme Arnhold">
    </head>
    <body>
        <p> Estou estudando HTML 5</p>
    </body>    
</html> 
``` 
* `<base>`: Define uma URL para todas as outras URLS no documento, a tag base deve possuir juntamente com ela a tag href que faz o redirecionamento. Só pode utilizar uma vez por documento.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <base href="https://www.w3schools.com/" target="_blank">>
    </head>
    <body>
        <p><a href="tags/tag_base.asp">Página do google.</a></p>
    </body>    
</html> 
``` 
* `<script>`: Permite que seja inserido no documento HTML códigos de Javascript.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title> HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p id="teste"></p>
        <script>
            document.getElementById("teste").innerHTML = "Bem vindo ao site!";
            alert("Este é um aviso!");
        </script> 
    </body>    
</html> 
``` 
* `<noscript>`: Define um conteúdo alternativo que é exibido quando o navegador não suporta script ou o usuário desabilitou o suporte.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title> HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p id="teste"></p>
        <script>
            document.getElementById("teste").innerHTML = "Bem vindo ao site!";
            alert("Este é um aviso!");
        </script> 
        <noscript>
            Este navegador não possui suporte ao Javascript ou foi desativado pelo usuário.
        </noscript>
    </body>    
</html> 
``` 
* `<embed>`: Define um container de um recurso externo como uma página da web, uma foto ou uma música.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title> HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <embed type="image/jpg" src="https://www.hypeness.com.br/1/2018/12/imagens-surreais.jpg" width="668" height="508">
    </body>    
</html> 
``` 
* `<object>`:  Representa um ponto de integração para uma aplicação externa ou conteúdo interativo um plug-in.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title> HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <object data="https://www.hypeness.com.br/1/2018/12/imagens-surreais.jpg"></object>
    </body>    
</html> 
``` 
* `<param>`: Define parametros de um elemento object.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title> HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <object data="horse.wav">
        <param name="autoplay" value="true">
    </body>
</html> 
``` 
## Atributos HTML5
* `accept`: Especifica que tipo de arquivos o servidor aceita, só pode ser utilizada junta com a tag input.
 ```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title> HTML5</title>
        <h1>Estudando</h1>
    </head>
    <form action="/action_page.php">
        <input type="file" name="pic" accept="image/*">
        <input type="submit">
    </form>
    <body>
        <form action="/action_page.php">
            <input type="file" name="pic" accept="image/*">
            <input type="submit">
        </form>
    </body>
</html> 
``` 
* `accept-charset`: Especifica a codificação dos caracteres que são utilizados para envio do formulário. 
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title> HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <form action="/action_page.php" accept-charset="ISO-8859-1">
        Nome: <input type="text"      nome="nome"><br>
        Sobrenome: <input type="text"           name="sobrenome"><br>
        <input type="submit" value="Submit">
    </body>
</html> 
```
* `accesskey`: O atributo define uma chave para ativar ou focar o elemento. O atalho diverge conforme o navegador.
 ```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title> HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <a href="https://google.com" acesskey="t">Google</a>
        <p>No google chrome utilize: alt + acesskey</p>
     </body>
</html> 
```
* `action`: Especifica para onde enviar os dados do formulário. 
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title> HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <form action="/action_page.php" method="get">
            Nome: <input type="text" name="fname"><br><br>
            Sobrenome: <input type="text" name="lname"><br><br>
            <input type="submit" value="Submit">
        </form>
    </body>
</html> 
```
* `alt`: Possibilita uma inserção de uma informação caso a imagem não carregue devido a má conexão, um erro no atributo src... Para utllizar a tag alt é necessaria a tag img. 
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title> HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <img src="https://i2.wp.com/marketingcomcafe.com.br/wp-content/uploads/2017/12/banco-imagens-gratis.png?w=720&ssl=1" alt="Homem de capuz com mascara anonima">
    </body>
</html> 
```
* `async`: Define que o script será executado de forma assíncrona assim que for possível, só pode ser utilizado se o atributo src estiver presente, é usado para recursos externos.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <script src="demo_async.js" async></script>
    </body>
</html> 
```
* `autocomplete`: Especifica uma forma ou atributo que pode ser auto completada ou não. Pode possuir on ou off. 
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <form action="/action_page.php" method="get" autocomplete="on">
            Nome:<input type="text" name="nome"><br>
            E-mail: <input type="email" name="email"><br>
            <input type="submit">
        </form>
    </body>
</html> 
```
* `autofocus`: Quando esse atributo estiver em um elemento, o elemento ganha foco quando a página carrega, ou seja podemos usar um exemplo de um formulário, quando a página carregar o usuário não precisará selecionar a caixa de texto para escrever, pois ela já estará selecionada.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <form action="/action_page.php">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" autofocus><br><br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>
        <input type="submit">
</form>
    </body>
</html> 
```
* `autoplay`: Quando estiver presente, inicia automaticamente um video ou áudio.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <video controls autoplay>
            <source src="https://www.youtube.com/watch?v=I_OKOsbVme8&list=RDI_OKOsbVme8&start_radio=1" type="video/mp4">
            Seu navegador não suporta esse elemento de áudio.
        </video>
    </body>
</html> 
```
* `charset`: Especifica a codificação de caracteres do documento HTML quando utilizado com a tag meta, diferentemente quando usado com a tag script se refere a codificação de um arquivo externo.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p>Teste</p>
        </video>
    </body>
</html> 
```
* `checked`: É um atributo booleano, especifica que um elemento input deve ser pré selecionado quando a página carregar.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <form action="/action_page.php">
            <input type="checkbox" name="objeto" value="Bola">Eu tenho uma bola<br>
            <input type="checkbox" name="objeto" value="Carrinho" checked>Eu tenho um carrinho<br>
            <input type="submit" value="Submit">
        </form>
    </body>
</html> 
```
* `cite`: Especifica uma URL para um documento que explica a citação ou porque o texto foi inserido ou alterado.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <blockquote cite="https://pt.wikipedia.org/wiki/Google">
       Google LLC é uma empresa multinacional de serviços online e software dos Estados Unidos. O Google hospeda e desenvolve uma série de serviços e produtos baseados na internet e gera lucro principalmente através da publicidade pelo AdWords. A Google é a principal subsidiária da Alphabet Inc.
       </blockquote>
    </body>
</html> 
``` 
* `class`: Especifica um ou mais nomes de classe para o elemento, é utilizado pelo CSS e pelo JavaScript para fazer alterações nos elementos.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <blockquote cite="https://pt.wikipedia.org/wiki/Google">
       Google LLC é uma empresa multinacional de serviços online e software dos Estados Unidos. O Google hospeda e desenvolve uma série de serviços e produtos baseados na internet e gera lucro principalmente através da publicidade pelo AdWords. A Google é a principal subsidiária da Alphabet Inc.
       </blockquote>
    </body>
</html> 
``` 
* `cols`: Especifica a largura de uma área de texto. Seria a quantidade de colunas.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <textarea rows="4" cols="50">
            Microsoft Corporation é uma empresa transnacional americana com sede em Redmond, Washington, que desenvolve, fabrica, licencia, apoia e vende softwares de computador, produtos eletrônicos, computadores e serviços pessoais
        </textarea>
    </body>
</html> 
``` 
* `colspan`: Especifica o número de colunas de uma tabela.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
    <style>
        table, th, td {
        border: 1px solid black;
        }
    </style>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <table>
            <tr>
                <th>Nome</th>
                <th>Numero</th>
                <th>Email</th>
            </tr>
            <tr>
                <th>Guilherme</th>
                <th>999999999</th>
                <th>teste@gmail.com</th>
            </tr>
            <tr>
    <td colspan="3">Bem vindo</td>
  </tr>
    </body>
</html> 
``` 
* `content`: Descreve o conteúdo de um elemento html.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Free Web tutorials">
        <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    </head>
    <body>
    </body>
</html> 
``` 
* `contenditable`: Especifica quando o conteúdo de um elemento é editavel ou não.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
    <p contenteditable="true"> Este texto pode ser modificado.</p>
    <p contenteditable="false"> Este texto não pode ser modificado.
    </body>
</html> 
``` 
* `controls`: É um atributo booleano, quando verdadeiro mostra os controles de áudio.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
    <audio controls>
        <source src="horse.ogg" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
         Seu navegador não suporta a tag audio.
    </audio>
    </body>
</html> 
``` 
* `coords`: Especifica as coordenadas de uma área em um mapa, é utilizado junto com o atributo shape.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
    <audio controls>
        <source src="horse.ogg" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
         Seu navegador não suporta a tag audio.
    </audio>
    </body>
</html> 
```  
* `data`: Especifica a URL do recurso a ser usado pelo objeto. 
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <object data="https://i2.wp.com/marketingcomcafe.com.br/wp-content/uploads/2017/12/banco-imagens-gratis.png?w=720&ssl=1)" width="300" height="200"></object>
    </body>
</html> 
``` 
* `data-*`: Armazena dados personalizados privados para a página. Esse atributo permite incorporar atributos de dados personalizados em todos elementos html.
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
        <script>
            function showDetails(animal) {
            var animalType = animal.getAttribute("data-animal-type");
            alert("O " + animal.innerHTML + " é um " + animalType + ".");}
</script>
    </head>
    <body>
        <ul>
            <li onclick="showDetails(this)" id="passaro" data-animal-type="ave">Canário</li>
            <li onclick="showDetails(this)" id="salmao" data-animal-type="peixe">Salmão</li>  
            <li onclick="showDetails(this)" id="aranha" data-animal-type="aracnídeo">Escorpião-marrom</li>  
        </ul>
    </body> 
</html> 
``` 
* `datetime`: Especifica a data e a hora que o texto foi deletado/inserido.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <ins datetime="2020-10-22"> Texto.</ins>
        <del datetime="2020-10-22T10:00:00Z"> Texto deletado</del>
    </body> 
</html> 
``` 
* `default`: Atributo booleano, se o usuário não definir outra faixa a faixa que possui o default será utilizada.
 ```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" default>
            <track src="subtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
        </video>
    </body> 
</html> 
``` 
* `defer`: Atributo booleano, utilizado para executar scripts externos quando a página termina de analisar. Utilizado com o atributo src.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <script src="demo_defer.js" defer></script>
        <p id="p1">Hello World!</p>
    </body> 
</html> 
``` 
* `dir`: Especifica a direção do conteúdo do elemento
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p dir="rtl">Texto</p>
    </body>
</html>  
``` 
* `dirname`: Permite o envio da direção do texto do campo de entrada.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <form action="/action_page.php">
            <label for="fname">First name:</label>
            <input type="text" id="nome" name="nome" dirname="nome.dir">
            <input type="submit" value="Submit">
        </form>
    </body>
</html> 
``` 
* `disabled`: É um atributo booleano, quando utilizado desabilita o elemento.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <button type="button" disabled>Clique aqui!</button>
    </body>
</html> 
``` 
* `download`: Especifica que quando o usuário clicar no hiperlink, um arquivo será baixado.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <a href="/images/myw3schoolsimage.jpg" download>
        <img src="/images/myw3schoolsimage.jpg" alt="W3Schools" width="104" height="142">
        </a>
    </body>
</html> 
```
* `draggable`: Especifica quando um elemento é arrastável ou não.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
        <style>
            #div1 {
            width: 350px;
            height: 70px;
            padding: 10px;
            border: 1px solid #aaaaaa;}
        </style>
        <script>
            function allowDrop(ev) {
            ev.preventDefault();}

            function drag(ev) {
            ev.dataTransfer.setData("Text", ev.target.id);}

            function drop(ev) {
            var data = ev.dataTransfer.getData("Text");
            ev.target.appendChild(document.getElementById(data));
            ev.preventDefault();}           
        </script>
    </head>
    <body>
       <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <br>
        <p id="drag1" draggable="true" ondragstart="drag(event)">Arraste este texto para dentro do retângulo.</p>
    </body>
</html> 
```
* `enctype`: Especifica como os dados do formulário devem ser codificados quando enviados ao servidor. Só poder utilizado se o method for =post
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <form action="/action_page_binary.asp" method="post" enctype="multipart/form-data">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome"><br><br>
            <label for="sobrenome">Sobrenome:</label>
            <input type="text" id="sobrenome" name="sobrenome"><br><br>
            <input type="submit" value="Enviar">
        </form> 
    </body>
</html> 
```
* `for`: Utilizado junto com o label, especifica qual elemento do formulário um rótulo está vinculado. Quando usado com o output, especifica a relação entre o resultado do cálculo e os elementos utilizados.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <form action="/action_page_binary.asp" method="post" enctype="multipart/form-data">
            <label for="homem">Homem</label>
            <input type="radio" id="homem" name="gender" value="male"><br><br>
            <label for="mulher">Mulher</label>
            <input type="radio" id="mulher" name="gender" value="female"><br><br>
            <input type="submit" value="Submit">
        </form> 
    </body>
</html> 
```
* `form`: Especifica o formulário ao qual o elemento pertence.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <form action="/action_page.php" method="get">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome"><br><br>
            <label for="lname">Sobrenome:</label>
            <input type="text" id="sobrenome" name="sobrenome"><br><br>
            <button type="submit">Enviar</button>
            <button type="submit" formaction="/action_page2.php">Enviar para outra página</button>
        </form>
    </body>
</html> 
```  
* `formaction`: Especifica para onde enviar os dados do formulário. É utilizado somente com a tag input ou button quando o type é =submit.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <form action="/action_page.php" method="get">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome"><br><br>
            <label for="sobrenome">Sobrenome:</label>
            <input type="text" id="sobrenome" name="sobrenome"><br><br>
            <button type="submit">Enviar</button>
            <button type="submit" formaction="/action_page2.php">Enviar para outra página</button>
        </form>
    </body>
</html> 
```
* `headers`: Especifica quais são as células de cabeçalho de uma tabela.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
        <style>
            table,th,td{
                border: 2px solid black;
            }
        </style>
    </head>
    <body>
        <table>
            <tr>
                <th id="nome">Nome</th>
                <th id="telefone">Telefone</th>
                <th id="email">Email</th>
                <th id="idade">Idade</th>   
            </tr>
            <tr>
                <th headers="nome">Guilherme</th>
                <th headers="telefone">51999999999</th>
                <th headers="email">teste@gmail.com</th>
                <th headers="idade">18</th>   
            </tr>
        </table>
    </body>
</html> 
```
* `height`: Especifica a altura do elemento em pixels.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
        <style>
            table,th,td{
                border: 2px solid black;
            }
        </style>
    </head>
    <body>
        <img src="https://computerworld.com.br/wp-content/uploads/2019/10/internet-completa-50-anos.jpg)" alt="Smiley face" height="300" width="350">
    </body>
</html> 
```
* `hidden`: Atributo booleano, quando presente o elemento fica oculto.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <p hidden>Parágrafo oculto</p>
       <p> Parágrafo</p>
    </body>
</html> 
```
* `high`: Especifica o intervalo no medidor que é considerado o valor alto. Deve ser menor que o valor do atributo máximo e maior que o baixo e o minimo.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <p><label for="anna">Pontuação de Ana:</label>
        <meter id="anna" min="0" low="40" high="90" max="100" value="95"></meter></p>
        <p><label for="peter">Pontuação de Peter:</label>
        <meter id="peter" min="0" low="40" high="90" max="100" value="65"></meter></p>
        <p><label for="linda">Pontuação de Linda:</label>
        <meter id="linda" min="0" low="40" high="90" max="100" value="35"></meter>
    </body>
</html> 
```
* `href`: Quando utilizado com a tag a ou area especifica para qual página a url redireciona, quando utilizado com a tag base especifica a URL base para todos URLS de uma página. Por ultimo, com a tag link.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <p><label for="anna">Pontuação de Ana:</label>
        <meter id="anna" min="0" low="40" high="90" max="100" value="95"></meter></p>
        <p><label for="peter">Pontuação de Peter:</label>
        <meter id="peter" min="0" low="40" high="90" max="100" value="65"></meter></p>
        <p><label for="linda">Pontuação de Linda:</label>
        <meter id="linda" min="0" low="40" high="90" max="100" value="35"></meter>
    </body>
</html> 
```
* `hreflang`: Especifica a linguagem do documento linkado.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <p><a href="https://www.google.com" hreflang="pt-br">google.com</a></p>
    </body>
</html> 
```
* `http-equiv`: Fornece um cabeçalho http para informação do atributo content.  
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="refresh" content="30">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <p>Teste</p>
    </body>  
</html> 
``` 
* `id`: É utilizado para atribuir um ID para um documento HTML. O ID é utilizado para manipular o elemento por meio do Javascript e do CSS.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <h1 id="myHeader">Olá, mundo!</h1>
        <style>
        #myHeader{
            color: blue;
            backgroud: black;
        }
        </style>
    </body>  
</html> 
``` 
* `ismap`: É um atributo booleano, especifica que a imagem faz parte de um mapa de imagem do lado do servidor.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <a href="/action_page.php">
            <img src="w3html.gif" alt="W3Schools.com" width="100" height="132" ismap>
        </a>
    </body>  
</html> 
``` 
* `kind`: Especifica o tipo de trilha de texto.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            <track src="subtitles_en.vtt" kind="subtitles" srclang="en"         label="English">
            <track src="subtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
        </video>
    </body>  
</html> 
``` 
* `label`: Especifica o titulo da trilha de texto.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            <track src="subtitles_en.vtt" kind="subtitles" srclang="en"         label="English">
            <track src="subtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
        </video>
    </body>  
</html> 
``` 
* `lang`: Especifica a linguagem do conteúdo do elemento.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p lang="en"> Hello!</p>
    </body> 
</html>  
``` 
* `list`: O atributo list se refere ao elemento <datalist> que contém opções pré definidas.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <form action="/action_page.php" method="get">
        <label for="browser">Choose your browser from the list:</label>
        <input list="browsers" name="browser" id="browser">
        <datalist id="browsers">
            <option value="Edge">
            <option value="Firefox">
            <option value="Chrome">
            <option value="Opera">
            <option value="Safari">
        </datalist>
        <input type="submit">
        </form>
    </body>  
</html> 
``` 
* `loop`: É um atributo booleano, indica que toda vez que o áudio terminar, começará novamente.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <audio controls loop>
            <source src="horse.ogg" type="audio/ogg">
            <source src="horse.mp3" type="audio/mpeg">
            Seu navegador não suporta o elemento de áudio.
        </audio>
    </body>  
</html> 
``` 
* `low`:  Especifica o intervalo que é considerado um valor baixo. Utilizado o elemento <meter>.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p><label for="anna">Pontuação de Ana:</label>
        <meter id="anna" min="0" low="40" high="90" max="100" value="95"></meter></p>
        <p><label for="peter">Pontuação de Peter:</label>
        <meter id="peter" min="0" low="40" high="90" max="100" value="65"></meter></p>
        <p><label for="linda">Pontuação de Linda:</label>
        <meter id="linda" min="0" low="40" high="90" max="100" value="35"></meter></p>
    </body>  
</html> 
``` 
* `max`: Especifica o valor máximo do elemento 
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <form action="/action_page.php">
        <label for="datemax">Escolha uma data antes de 31/12/1979:</label>
        <input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br>
        <label for="datemin">Escolha uma data depois de 02/01/2000:</label>
        <input type="date" id="datemin" name="datemin" min="2000-01-02"><br><br>
        <label for="quantity">Quantidade (entre 1 e 5):</label>
        <input type="number" id="quantity" name="quantity" min="1"  max="5"><br><br>
        <input type="submit">
</form>
    </body>  
</html> 
``` 
* `maxlength`: Define o máximo de caracteres do elemento.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
    <form action="/action_page.php">
        Login: <input type="text" name="login" maxlength="15"><br>
    <input type="submit" value="Submit">
    </form>
    </body>  
</html> 
``` 
* `media`: Especifica para qual midia ou dispositivo o documento linkado é otimizado.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
    <p> Clique no sol</p>
    <img src="planets.gif" width="145" height="126" alt="Planets" usemap="#planetmap">
    <map name="planetmap">
        <area shape="rect" coords="0,0,82,126" alt="Sun"
        href="sun.htm" media="screen and (min-color-index:256)">
    </map>
    </body> 
</html>  
``` 
* `method`: Especifica como enviar dados de formulário. 
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
    <p> Clique no sol</p>
    
    </body> 
</html> 
``` 
* `min`: Especifica o valor minimo do elemento.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <p><label for="ana">Pontuação de Ana:</label>
        <meter id="ana" min="0" low="40" high="90" max="100" value="95"></meter></p>
        <p><label for="peter">Pontuação de Peter:</label>
        <meter id="peter" min="0" low="40" high="90" max="100" value="65"></meter></p><p><label for="linda">Pontuação de Linda:</label>
        <meter id="linda" min="0" low="40" high="90" max="100" value="35"></meter></p>
    </body> 
</html> 
``` 
* `multiple`: É um atributo booleano, quando presente é possível inserir ou     selecionar mais que um valor.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
    <form action="/action_page.php">
        <label for="carros">Escolha um carro:</label>
        <select name="carros" id="carros" multiple>
            <option value="volvo">Volvo</option>
            <option value="ford">Ford</option>
            <option value="volkswagen">Volkswagen</option>
            <option value="fiat">Fiat</option>
        </select>
    </body> 
</html> 
``` 
* `muted`: Atributo booleano, especifica que o áudio deve estar mutado.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <video width="320" height="240" controls muted>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Seu navegador não suporta a tag de video.
        </video>
    </body> 
</html> 
``` 
* `name`: Especifica o nome do elemento.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <button name="subject" type="submit" value="HTML">HTML</button>
        <button name="subject" type="submit" value="CSS">CSS</button>
    </body>     
</html> 
``` 
* `novalidate`: Especifica que os dados de entrada não devem ser válidados quando enviados.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <form action="/action_page.php" novalidate>
            <label for="email">Insira seu email:</label>
            <input type="email" id="email" name="email"><br><br>
            <input type="submit">
        </form>
    </body>     
</html> 
```
* `onabort`: Define um script que rodará caso o carregamento é abortado.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body onafterprint="myFunction()">
        Utilize as teclas CTRL+P para imprimir.
       <script>
            function myFunction() {
            alert("O Documento está sendo impresso.");}
       </script>
    </body>     
</html> 
```
* `onafterprint`: Dispara quando uma página é impressa ou caso a caixa de diálogo seja fechada.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body onafterprint="myFunction()">
        Utilize as teclas CTRL+P para imprimir.
       <script>
            function myFunction() {
            alert("O Documento está sendo impresso.");}
       </script>
    </body>     
</html> 
```
* `onbeforeprint`: Dispara antes da caixa de dialogo de impressão aparecer.  
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body onbeforeprint="myFunction()">
        Utilize as teclas CTRL+P para imprimir.
       <script>
            function myFunction() {
            alert("O Documento será impresso.");}
       </script>
    </body>     
</html> 
```
* `onbeforeunload`: Dispara quando o elemento será recarregado. Abre uma caixa de dialogo perguntando se o usuário tem certeza que gostaria de deixar a página. 
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body onbeforeprint="myFunction()">
        Utilize as teclas CTRL+P para imprimir.
       <script>
            function myFunction() {
            alert("O Documento será impresso.");}
       </script>
    </body>     
</html> 
```
* `onblur`: Dispara quando o elemento perde o foco.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        Insira seu nome: <input type="text" name="name" id="name" onblur="myFunction()">
        <script>
            function myFunction() {
            var x = document.getElementById("name");
             x.value = x.value.toUpperCase();}
        </script>

    </body>     
</html> 
```
* `oncanplay`: Dispara um script quando o navegador iniciar a reprodução da mídia.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <audio id="myAudio" controls oncanplay="myFunction()">
            <source src="horse.ogg" type="audio/ogg">
            <source src="horse.mp3" type="audio/mpeg">
            Seu navegador não suporta esse elemento.
        </audio>
        <script>
            function myFunction() {
            alert("Durante o áudio");}
        </script> 
    </body>     
</html> 
```
* `oncanplaythrough`: Demonstra quando o navegador pode reproduzir o audio ou video sem parar para armazenar em buffer.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <audio id="myAudio" controls oncanplay="myFunction()">
            <source src="horse.ogg" type="audio/ogg">
            <source src="horse.mp3" type="audio/mpeg">
            Seu navegador não suporta esse elemento.
        </audio>
        <script>
            function myFunction() {
            alert("Pode ser reproduzido sem parada para armazenamento em buffer.");}
        </script> 
    </body>     
</html> 
```
* `onchange`: Dispara quando o valor do elemento é modificado. 
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
       <p>Selecione um carro.</p>
        <select id="mySelect" onchange="myFunction()">
            <option value="Audi">Audi
            <option value="BMW">BMW
            <option value="Mercedes">Mercedes
            <option value="Volvo">Volvo
        </select>
        <p id="demo"></p>
        <script>
            function myFunction() {
            var x = document.getElementById("mySelect").value;
            document.getElementById("demo").innerHTML = "Você selecionou " + x;}
        </script>
    </body>     
</html> 
```
* `onclick`: Dispara quando clicado no elemento.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <button onclick="myFunction()">Clique aqui</button>
<p id="demo"></p>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Olá,mundo";
}
</script>
    </body>     
</html> 
```
* `oncontextmenu`: Dispara quando o usuário clica com o botão direito em um elemento.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
        <style>
            div {
            background: yellow;
            border: 1px solid black;
            padding: 10px;}
        </style>
    </head>
    <body>
        <div oncontextmenu="myFunction()" contextmenu="mymenu">
        <p>Clique com o botão direito na caixa!
        <script>
            function myFunction() {
            alert("Você clicou com o botão direito.");}
        </script>
    </body>     
</html> 
```
* `oncopy`: Dispara quando o usuário tenta copiar o texto.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <input type="text" oncopy="myFunction()" value="Tente copiar o texto."> <p id="demo"></p>
        <script>
            function myFunction() {
            document.getElementById("demo").innerHTML = "Você não deve copiar o texto!"}
        </script>
    </body>     
</html> 
```
* `oncuechange`: Define um script para rodar quando a sugestão muda em um elemento. 
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <video>
            <track oncuechange="alert('cue changed')" />
        </video>
    </body>     
</html> 
```
* `oncut`: Dispara quando o usuário tenta recortar o conteúdo do elemento. 
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <video>
            <track oncuechange="alert('cue changed')" />
        </video>
    </body>     
</html> 
```
* `ondblclick`: Dispara quando o usuário clicar duas vezes no elemento.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
    </head>
    <body>
        <button ondblclick="myFunction()">Clique duas vezes sobre mim</button>
        <p id="demo"></p>
        <script>
            function myFunction() {
            document.getElementById("demo").innerHTML = "Olá,mundo!";}
        </script>
    </body>   
</html> 
```
* `ondrag`: Dispara quando o elemento é arrastado.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
        <style>
        .droptarget {
            float: left; 
            width: 100px; 
            height: 35px;
            margin: 15px;
            padding: 10px;
            border: 1px solid #aaaaaa;}
</style>
    </head>
    <body>
        <p>Arraste o elemento.:</p>
        <div class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)">
        <p ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true" id="dragtarget">Me arraste!</p>
        </div>
        <div class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

        <p style="clear:both;" id="demo"></p>
        <script>
        function dragStart(event) {
            event.dataTransfer.setData("Text", event.target.id);
        }

        function dragging(event) {
            document.getElementById("demo").innerHTML = "O elemento p está sendo arrastado";
        }

        function allowDrop(event) {
            event.preventDefault();
        }

        function drop(event) {
            event.preventDefault();
            var data = event.dataTransfer.getData("Text");
            event.target.appendChild(document.getElementById(data));
            document.getElementById("demo").innerHTML = "O elemento p foi movido.";}
            </script>
    </body>   
</html> 
```
* `ondragend`:  É disparado quando o usuário termina de arrastar um elemento.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
        <style>
            .droptarget {
                float: left; 
                width: 100px; 
                height: 35px;
                margin: 15px;
                padding: 10px;
                border: 1px solid #aaaaaa;
            }
        </style>
    </head>
    <body>
        <p>Arraste os elementos entre os dois retângulos:</p>

        <div class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)">
        <p ondragstart="dragStart(event)" ondragend="dragEnd(event)" draggable="true" id="dragtarget">Me Arraste!</p>
        </div>

        <div class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

        <p style="clear:both;" id="demo"></p>

        <script>
            function dragStart(event) {
            event.dataTransfer.setData("Text", event.target.id);
            document.getElementById("demo").innerHTML = "Começado a arrastar o elemento.";
            }

        function dragEnd(event) {
            document.getElementById("demo").innerHTML = "Terminado de arrastar o elemento.";
            }

        function allowDrop(event) {
            event.preventDefault();
            }

        function drop(event) {
            event.preventDefault();
            var data = event.dataTransfer.getData("Text");
            event.target.appendChild(document.getElementById(data));
            }
        </script>
    </body>   
</html> 
```
* `ondragenter`: Dispara quando o elemento arrastável entra em uma zona.
```html 
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title>HTML5</title>
        <h1>Estudando</h1>
        <style>
            .droptarget {
                float: left; 
                width: 100px; 
                height: 35px;
                margin: 15px;
                padding: 10px;
                border: 1px solid #aaaaaa;
            }
        </style>
    </head>
    <body>
        <p>Arraste o elemento entre os dois retângulos</p>

        <div class="droptarget" ondrop="drop(event)" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)" ondragover="allowDrop(event)">
        <p ondragstart="dragStart(event)" draggable="true" id="dragtarget">Me arraste!</p>
        </div>

        <div class="droptarget" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

        <p style="clear:both;" id="demo"></p>

        <script>
            function dragStart(event) {
            event.dataTransfer.setData("Text", event.target.id);
        }

        function dragEnter(event) {
            if ( event.target.className == "droptarget" ) {
            event.target.style.border = "3px dotted red";
            document.getElementById("demo").innerHTML = "Entrou na zona";
            }
        }

        function dragLeave(event) {
        if ( event.target.className == "droptarget" ) {
            event.target.style.border = "";
            document.getElementById("demo").innerHTML = "Saiu da zona";
        }
        }

        function allowDrop(event) {
            event.preventDefault();
        }

        function drop(event) {
            event.preventDefault();
            var data = event.dataTransfer.getData("Text");
            event.target.appendChild(document.getElementById(data));
        }
        </script>
    </body>   
</html> 
```
* `ondragleave`: Dispara quando um elemento arrastavel ou uma seleção de texto deixa a zona. 
```html 
<!DOCTYPE HTML>
<html>
    <head>
        <style>
            .droptarget {
            float: left; 
            width: 100px; 
            height: 35px;
            margin: 15px;
            margin-right: 100px;
            padding: 10px;
            border: 1px solid #aaaaaa;
}
        </style>
    </head>
    <body>
        <p>Arraste o elemento entre os dois retângulos:</p>
        <div class="droptarget" ondrop="drop(event)" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)" ondragover="allowDrop(event)">
        <p ondragstart="dragStart(event)" draggable="true" id="dragtarget">Me arraste!</p>
        </div>
        <div class="droptarget" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <p style="clear:both;" id="demo"></p>
        <script>
            function dragStart(event) {
                event.dataTransfer.setData("Text", event.target.id);
                }

            function allowDrop(event) {
                event.preventDefault();
                document.getElementById("demo").innerHTML = "O elemento P está sobre a zona.";
                event.target.style.border = "4px dotted green";
            }

            function drop(event) {
                event.preventDefault();
                var data = event.dataTransfer.getData("Text");
                event.target.appendChild(document.getElementById(data));
                document.getElementById("demo").innerHTML = "O elemento p está deixando a zona";
                }
        </script>
    </body>
</html>
```
* `ondragover`: Dispara quando o elemento arrastável ou seleção de texto está sendo arrastado sobre um destino de soltar válido.
```html 
<!DOCTYPE HTML>
<html>
    <head>
        <style>
            #droptarget {
            float: left; 
            width: 200px; 
            height: 35px;
            margin: 55px;
            margin-top: 155px;
            padding: 10px;
            border: 1px solid #aaaaaa;
            }
        </style>
    </head>
    <body>
    <p ondragstart="dragStart(event)" draggable="true" id="dragtarget">Me arraste para dentro do retângulo.</p>
    <div id="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <p style="clear:both;" id="demo"></p>
    <script>
        function dragStart(event) {
            event.dataTransfer.setData("Text", event.target.id);
        }
        function allowDrop(event) {
            event.preventDefault();
            document.getElementById("demo").innerHTML = "The p element is OVER the droptarget.";
            event.target.style.border = "4px dotted green";
            }
        function drop(event) {
            event.preventDefault();
            var data = event.dataTransfer.getData("Text");
            event.target.appendChild(document.getElementById(data));
            document.getElementById("demo").innerHTML = "The p element was dropped.";
            }
    </script>
    </body>
</html>
``` 
* `ondragstart`: Dispara quando o usuário começa a arrastar um elemento ou seleção de texto.
```html 
<!DOCTYPE HTML>
<html>
	<head>
		<style>
          .droptarget {
            float: left; 
            width: 100px; 
            height: 35px;
            margin: 15px;
            padding: 10px;
            border: 1px solid #aaaaaa;
          }
		</style>
	</head>
<body>
    <p>Arraste o elemento p entre dois retângulos:</p>
    <div class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)">
    <p ondragstart="dragStart(event)" ondragend="dragEnd(event)" draggable="true" id="dragtarget">Me arraste!</p>
    </div>
    <div class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <p style="clear:both;" id="demo"></p>
        <script>
            function dragStart(event) {
            event.dataTransfer.setData("Text", event.target.id);
            document.getElementById("demo").innerHTML = "Começado a mover o elemento";
            }
            function dragEnd(event) {
            document.getElementById("demo").innerHTML = "Terminado de mover o elemento";
            }
            function allowDrop(event) {
                event.preventDefault();
            }
            function drop(event) {
                event.preventDefault();
                var data = event.dataTransfer.getData("Text");
                event.target.appendChild(document.getElementById(data));
                }
        </script>
    </body>
</html>
``` 
* `ondrop`: Dispara quando o elemento é solto em um lugar válido.
```html 
<!DOCTYPE HTML>
<html>
	<head>
		<style>
          .droptarget {
            float: left; 
            width: 100px; 
            height: 35px;
            margin: 15px;
            padding: 10px;
            border: 1px solid #aaaaaa;
          }
		</style>
	</head>
    <body>
        <p>Arraste o elemento p entre os dois retângulos</p>
        <div class="droptarget" ondrop="drop(event)" 		 					ondragover="allowDrop(event)">
        <p ondragstart="dragStart(event)" draggable="true" id="dragtarget">Drag me!<p>
        </div>
        <div class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <p style="clear:both;" id="demo"></p>
        <script>
            function dragStart(event) {
                event.dataTransfer.setData("Text", event.target.id);
                document.getElementById("demo").innerHTML = "Começado a mover o elemento";
                }
            function allowDrop(event) {
                event.preventDefault();
                }
            function drop(event) {
                event.preventDefault();
                var data = event.dataTransfer.getData("Text");
                event.target.appendChild(document.getElementById(data));
                document.getElementById("demo").innerHTML = "O elemento foi solto.";
                }
        </script>
    </body>
</html>
```  
* `ondrop`: Dispara quando o elemento é solto em um lugar válido.
```html 
<!DOCTYPE HTML>
<html>
	<head>
	</head>
    <body>
        <audio id="myAudio" controls ondurationchange="myFunction(this)">
            <source src="horse.ogg" type="audio/ogg">
            <source src="horse.mp3" type="audio/mpeg">
                Esse navegador não suporta o elemento de áudio.
        </audio>
       <script>
            function myFunction(x) {
            alert("A duração do audio é de: " + x.duration + " segundos");
            }
        </script> 
    </body>
</html>
```  
* `onemptied`: Dispara quando a lista de reprodução está vazia.
```html 
<!DOCTYPE HTML>
<html>
    <head>
    </head>
    <body>
        <video width="320" height="240" controls onemptied="onEmptied()">
            <source src="hibiscus.mp4" type="video/mp4">
        </video>    
        <script>
            function onEmptied() {
            alert("Wikitechy Video playlist is Empty!");
            }
        </script>
    </body>
</html>
``` 
* `onended`: Dispara quando o áudio ou vídeo termina. 
```html 
<!DOCTYPE HTML>
<html>
    <head>
    </head>
    <body>
        <audio id="myAudio" controls onended="myFunction()">
            <source src="horse.ogg" type="audio/ogg">
            <source src="horse.mp3" type="audio/mpeg">
            Seu navegador não suporta o elemento de áudio.
        </audio> 
        <script>
            function myFunction() {
            alert("Obrigado por ouvir.");
            }
        </script>
    </body>
</html>
``` 
* `onerror`: Dispara quando um erro ocorre durante o carregamento do vídeo.
```html 
<!DOCTYPE HTML>
<html>
    <head>
    </head>
    <body>
        <audio id="myAudio" controls onerror="myFunction()">
            <source src="horse.ogg" type="audio/ogg">
            <source src="horse.mp3" type="audio/mpeg">
            Seu navegador não suporta o elemento de áudio.
        </audio> 
        <script>
            function myFunction() {
            alert("Ocorreu um erro.");
            }
        </script> 
    </body>
</html>
``` 
* `onfocus`: Dispara no momento que o elemento obtém o foco.
```html 
<!DOCTYPE HTML>
<html>
    <head>
    </head>
    <body>
        Nome: <input type="text" id="nome" onfocus="myFunction(this.id)"><br>
        Sobrenome: <input type="text" id="sobrenome" onfocus="myFunction(this.id
        ">
        <script>
            function myFunction(x) {
            document.getElementById(x).style.background = "blue";
            }
        </script>
    </body>
</html>
``` 
* `onhashchange`: Dispara quando há mudanças na parte da âncora.
```html 
<!DOCTYPE HTML>
<html>
    <head>
    </head>
    <body>
        <p>Clique no botão!/p>
        <button onclick="changePart()">Clique aqui</button>
        <p id="demo"></p>
        <script>
            function changePart() {
                location.hash = "part5";
                var x = "The anchor part is now: " + location.hash;
                document.getElementById("demo").innerHTML = x;
                }

            function myFunction() {
                alert("The anchor part has changed!");
                }
        </script>
    </body>
</html>
``` 
* `onhashchange`: Dispara quando o elemento recebe uma entrada do usuário.
```html 
<!DOCTYPE HTML>
<html>
    <head>
    </head>
    <body>
        <p> Escreva alguma coisa. </p>
        <input type="text" id="myInput" oninput="myFunction()">
        <p id="demo"></p>
        <script>
        function myFunction() {
            var x = document.getElementById("myInput").value;
            document.getElementById("demo").innerHTML = "Você escreveu: " + x;
            }
        </script>
    </body>
</html>
``` 
