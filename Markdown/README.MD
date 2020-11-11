# Linguagens de marcação e Markdown
## O que são linguagens de marcação?
Linguagens de marcação são utilizadas para definir formatos, maneiras de exibição e padrões. Geralmente, não possuem estrutura de controle como as linguagens de programação. Resumidamente, elas definem a forma que um conteúdo será exibido. Utilizam tags que possuem significado para o sistema que transforma o conteúdo de tal modo.
## Quais as principais?
As principais llinguagens de marcação são: HTML,XML, XHTML e SGML.

## Markdown
### O que é o Markdown?
Desenvolvido por John Gruber e Aaron Swart em 2004 para simplificar a estruturação de um texto, o Markdown é um sistema de formatação aberto. Utiliza simbolos do teclado para estruturar um texto e pode ser processado em diversos programas como o Word ou o Openoffice Writer. 

### Para que serve?
Para escrever textos com simplicidade, legibilidade e facilidade.

### Sintaxe e estrutura
* Cabeçalhos:
``` 
# Título 
## Sub-Título 
### Sub-sub-título
```  
* Itálico: 
```
*Texto em itálico*
```
* Negrito: 
```
**Texto em negrito**
```
* Listas não-ordenadas:  
```
- Primeiro Item 
- Segundo item 
- Terceiro item
``` 
* Listas ordenadas:
```
1. Primeiro item 
2. Segundo Item 
3. Terceiro item 
```
* Sub-listas: 
```
1. Primeiro item
    - Um sub-item
    - Outro sub-item
2. Segundo item
3. Terceiro item
```
* Links:
```
O criador é [Guilherme Arnhold](https://github.com/GuilhermeArnhold/).
```
* Imagens:
```
Logo do Grêmio ![Logo do Grêmio](https://logodetimes.com/times/gremio/logo-gremio-2048.png)
```
* Citações:
```
> Esta é uma citação. Esse sinal abre e fecha.
```
* Parágrafos: Para criar parágrafos só precisa pular uma linha.
```
Resumo: A leitura e a escrita são pontes incontestáveis para que haja uma inclusão do indivíduo dentro da sociedade.

Tendo a escola à responsabilidade de sistematizar esses saberes, salienta-se que não é papel apenas do professor de língua portuguesa utilizar-se do texto para que haja uma aquisição significativa da linguagem.  
```
* Código: <br> 
`` Para uma linha de código, utilizado duas crases. ``
```
Para um bloco de código, utilizamos três crases.
```
* Tabelas: 
```
Caracter | Permissão
---------|----------
`r`      | Permissão de leitura (*read*)
`w`      | Permissão de escrita (*write*)
`x`      | Permissão de execução (*execute*)
`-`      | Permissão desabilitada
```
* Equações matemáticas:
```
As equações matemáticas são renderizadas através do MathJax.
$Y = \beta_0 + \beta_1 x + \epsilon $.
```

Notas: Caso queira converter markdown em HTML pode-se utilizar o Pandoc, um software que uma vez instalado permite que a conversão seja realizada em linha de comando.

