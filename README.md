## Importante:
    - Banco de dados em MySQL
    - Instale o MySQL Server na sua máquina
    - MySQL Workbench (Opcional)

## Credenciais:
    - porta utilizada: 3307
    - login: root
    - senha: admin

## Para criar o BD:
    - Vá no CMD
    - Faça login no MySQL Server: mysql -h 127.0.0.1 -P 3307 -u root -p
    - digite: "create database 'escola_ingles'";

## Alguns comandos interessantes do sequelize-cli
    - npx init
    - npx sequelize-cli db:migrate
    - npx sequelize-cli seed:generate --name demo-pessoa
    - npx sequelize-cli db:seed:all

## Alguns comandos interessantes do mySQL cli
    - use [dataTable]
    - show tables

## Criando tabelas
    - npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string
    - npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string
    - npx sequelize-cli model:create --name Turmas --atributes data_inicio:dateonly
    - npx sequelize-cli model:create --name Matriculas --attributes status:string
    
## Módulos utilizados
    - nodemon
    - express
    - body-parser
    - sequelize
    - sequelize-cli
    - path
