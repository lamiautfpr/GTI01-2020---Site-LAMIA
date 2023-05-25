<h1 align="center">
  <br>
  <a href="https://www.lamia.sh.utfpr.edu.br/">
    <img src="https://user-images.githubusercontent.com/26206052/86039037-3dfa0b80-ba18-11ea-9ab3-7e0696b505af.png" alt="LAMIA - Laboratório de                  Aprendizagem de Máquina e Imagens Aplicados à Indústria" width="400"></a>
<br> <br>
PORTAL LAMIA


</h1>
<p align="center">
  <a href="https://www.lamia.sh.utfpr.edu.br/">
    <img src="https://img.shields.io/badge/Follow-Lab%20Page-blue" alt="Lab">
  </a> 
</p>

<p align="center">
<b>Equipe:</b>  
<br>
Thiago Naves <a href="https://github.com/tfnaves" target="_blank"> (Naves, T. F.)</a> - Coordenador   <br>
Guilherme Veras Castagnaro Correia <a href="https://github.com/guilhermeV20" target="_blank">(Correia, G. V. C.)</a> - Membro <br>
Erik Henrique dos Santos Nascimento <a href="https://github.com/ErikHenrique09" target="_blank">(Nascimento, E. H. S.)</a> - Membro <br>
Jece Neto <a href="https://github.com/XavierJece" target="_blank">(Neto, J. X. P.)</a> - Membro  <br>
</p>

<p align="center">  
<b>Grupo</b>: <a href="https://www.lamia.sh.utfpr.edu.br/" target="_blank">LAMIA - Laboratório de Aprendizado de Máquina e Imagens Aplicados à Indústria </a> <br>
<b>Email</b>: <a href="mailto:lamia-sh@utfpr.edu.br" target="_blank">lamia-sh@utfpr.edu.br</a> <br>
<b>Organização</b>: <a href="http://portal.utfpr.edu.br" target="_blank">Universidade Tecnológica Federal do Paraná</a> <a href="http://www.utfpr.edu.br/campus/santahelena" target="_blank"> - Campus Santa Helena</a> <br>
</p>

<p align="center">
<br>
Status do Projeto: Em desenvolvimento :warning:
</p>

# Resumo
O projeto consiste em desenvolver uma portal web para fazer a divulgação e gerenciamento dos projetos realizados dentro do laboratório LAMIA.
## Objetivo
O objetivo principal do projeto LAMIA é o de estimular o aprendizado dos integrantes do laboratório em tecnologias WEB e Cloud. 

## Como Contribuir com o Projeto

1. Selecione um [issue]([https://github.com/lamiautfpr/ICT01-2019-backend-E-Battle/issues](https://github.com/lamiautfpr/GTI01-2020---Site-LAMIA/issues)) aberto que ainda não tenha ninguém designado, de preferência com a tag `important`;  
2. Coloque voce como um *Assignee* e crie um *branch* a partir do *issue* com a *branch* `qa` como origem;  
3. Clone o repositorio em sua máquina (rode o comando `npm i` para instalar as dependencias) ou faça o *fetch* da origem caso já tenha o repositorio em sua máquina;
4. Faça o *checkout* da nova *branch*;
5. Faça as alterações necessárias;
6. Rode o comando `npm run lint:fix` para formatar o código;
7. Faça o *commit* das alterações seguindo o seguinte padrão para a mensagem:  
   `type(route) Resumo do que foi feito [#issue]`
   Onde type pode ser um dos seguintes:
   - `feat`: para novas funcionalidades;
   - `fix`: para correções de bugs;
   - `doc`: para alterações na documentação;
   - `style`: para alterações que não afetam o código (espaços em branco, formatação, etc);
   - `imp`: para melhorias e refatorações de código;
   - `test`: para adição ou alteração de testes;
   - `chore`: para alterações em tarefas de build ou configuração;
   - `oth`: para outras tarefas que não incluem as anteriores (NÃO utilize esse sem a permissão de um membro líder)
8. Faça o *push* dos novos *commits* para o repositório;
9. Abra um *pull request* para a *branch* `qa` com o nome `$issue - título do isssue` e adicione na descrição informas adicionas caso necessário;
10. Espere os testes rodarem, caso algum deles falhe, corrija o problema e faça push das alterações;
11. Marque um membro líder e um membro comum para revisar o *pull request*;
12. Caso o *pull request* seja rejeitado, corrija os problemas e volte para o passo 9;
13. Caso o *pull request* seja aceito, o membro líder irá fazer o *merge* da *branch* `qa` para a *branch* `master` e fechar o *issue*.;
14. Faça o *checkout* para *branch* `qa` e faça o *pull* da origem para evitar subir a branch novamente.


## Tecnologias

O portal do LAMIA usa as seguintes tecnologias:

* [NestJS](https://nestjs.com/) - framework javascrit para criação da API
* [PostgreSQL](https://www.postgresql.org/) - banco de dados utilizado atualmente no desenvolvimento
* [Amazon AWS](https://aws.amazon.com/) - plataforma de serviços de computação em nuvem utilizada para hospedar os serviços
* [NEXTJS](https://nextjs.org/) - framweork javascrit para criação do frontend

## Citação

Se você utliza e quer citar o projeto em sua pesquisa, por favor utilize o formato de citação abaixo:

    @inproceedings{LAMIA_ict01,
      title={Portal_LAMIA},
      author={},
      journal={},
      year={}
    }
