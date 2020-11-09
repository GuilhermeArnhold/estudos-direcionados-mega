# Git e GitHub

## Quais os sistemas de versionamento mais comuns?
Os sistemas mais comuns são: Git, Mercurial, Bazaar e Darcs.

* ### Git
O **Git** é um projeto de código aberto criado por Linus Torvalds, o criador do Linux. **O software mais moderno de controle de versão do mundo**, é muito utilizado por desenvolvedores pois permite que equipes de desenvolvedores trabalhem em um mesmo projeto, com **histórico de alterações no código** e **flexibilidade** podendo voltar a uma versão anterior a qualquer momento.

Sua documentação está presente em: https://www.git-scm.com/doc

* ### Mercurial
O **Mercurial** é uma ferramenta **multiplataforma de controle de versão**. Foi desenvolvido principalmente para projetos de grande porte, é **rápido** e de **performance excelente**, possui uma **extensa documentação** além de ser mais **simples** que o Git. Implementado principalmente em Python e foi desenvolvido para Linux, porém, foi portado para outros sistemas operacionais. O Mercurial utiliza linhas de comando, e suas operações utilizam a keyword **hg**(simbolo do elemento químico Mercúrio).

Sua documentação está presente em: <https://www.mercurial-scm.org/guide>

* ### Bazaar
O **Bazaar** é um sistema de controle de versão que garante facilidade, flexibilidade e fácil configuração. Pode mesclar seu trabalho com o de outras pessoas e rastrear as alterações feitas. Foi desenvolvido em Python.

Sua documentação está presente em: <http://doc.bazaar.canonical.com/bzr.2.7/en/>

* ### Darcs
O **Darcs** possui algumas diferenças dos demais, são elas: **Cada cópia do seu código-fonte é um repositório completo**, possibilitando aproveitar o poder do Darcs em qualquer rascunho de código sem afetar alterações no repositório central. **A árvore de origem não é o objeto fundamental**, mas sim o patch é o objeto fundamental. Em vez de um patch ser definido em termos da diferença entre duas árvores, **uma árvore é definida como o resultado da aplicação de um determinado conjunto de patches a uma árvore vazia**. Além disso, **esses patches podem ser reordenados sem alterar a árvore**. Isso torna muitas operações, como seleção seletiva ou fusão, muito mais naturais. 

Sua documentação está presente em: <http://darcs.net/manual/Contents.html>

## Quais os objetivos do Git?

* ```Trabalho em equipe```: Permite que um arquivo possa ser editado ao mesmo tempo por pessoas diferentes. 
* ```Criação de branchs```: Você pode ter um projeto em execução e fazer a cópia do mesmo para trabalhar em novas funcionalidades, tudo isso sem afetar o projeto em execução. 
* ```Histórico de alterações no seu código```: É possível ver o histórico de alterações no código, possibilitando uma visão do que foi alterado, quando e por quem.
*  ```Praticidade e desempenho```: Otimizado para entregar velocidade e praticidade. Todas suas funcionalidades, foram desenhadas para serem práticas.

## Como o git identifica alterações?
Na maioria das vezes, o git pega metadados do arquivo para identificar através do timestamp. Então, é possível que se for inserido um horário mais antigo ele não detecte que há uma alteração.

## Comandos do Git

* ```git init```: Cria um repositório git na pasta. 
* ```git clone```: Clona um repositório remoto já existente.
* ```git status```: Verifica os estados dos arquivos.
* ```git add texto.txt```: Adiciona um arquivo especifico.
* ```git commit```: Comita um arquivo.
* ```git rm```: Remove um arquivo.
* ```git log```: Exibe um histórico.
* ```git checkout```: Desfaz alteração no diretório local.(Este comando deve ser utilizando enquanto o arquivo não foi adicionado na staged area.)
* ```git reset```: Desfaz alteração local.(Este comando deve ser utilizando quando o arquivo já foi adicionado na staged area.)
* ```git remote add origin```: Vincula o repositório local com um repositório remoto.
* ```git remote show origin```: Mostra informações do repositório remoto.
* ```git remote rename origin teste```: Renomeia o repositório remoto.
* ```git remote rm curso-git```: Desvincula o repositório remoto.
* ```git push -u origin master```: O primeiro push deve conter nome do repositório remoto e a branch.
* ```git push```: Depois de realizar o primeiro push, pode-se utilizar o push somente dessa forma.
* ```git fetch```: Busca alterações.
* ```git tag```: Cria uma tag.
* ```git branch nova-branch```: Cria uma nova branch.
* ```git stash```: Cria um stash(um branch temporário que contém alterações não commitadas.) Utilizado quando é necessário trocar de branch sem realizar os commits.


