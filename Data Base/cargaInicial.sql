create database alinesJobs;

use alinesJobs;

create table usuario(
CPF int(11) PRIMARY KEY NOT NULL,
nome varchar(50) NOT NULL,
data_de_nascimento date,
telefone varchar (20),
email varchar(50),
senha VARCHAR (70) NOT NULL,
objetivo VARCHAR (50) NOT NULL,
endereco_id integer (10),
experiencia_id integer (10),
escolaridade_id integer (10),
FOREIGN KEY(endereco_id) REFERENCES endereco(id),
FOREIGN KEY(experiencia_id) REFERENCES experiencia(id),
FOREIGN KEY(escolaridade_id) REFERENCES escolaridade(id)

);


create table empresa(
CNPJ int(11) primary key NOT NULL,
nome_fantasia varchar (50)NOT NULL,
telefone varchar (20),
email varchar(50) NOT NULL,
site_URL varchar (30) NOT NULL,
senha VARCHAR (70) NOT NULL,
endereco_id integer (10),
vagas_id integer (10),
FOREIGN KEY(endereco_id) REFERENCES endereco(id)
/* FOREIGN KEY(vagas) REFERENCES vagas(id) */
);

create table vagas(
id int(10) PRIMARY KEY NOT NULL auto_increment,
cargo varchar (20) NOT NULL,
descricao varchar (200)  NOT NULL,
requisitos varchar (200) NOT NULL,
salario float (10),
empresa_id integer (10),
FOREIGN KEY(empresa_id) REFERENCES empresa(cnpj)
);

create table endereco(
id int(10) primary key NOT NULL auto_increment,
logadouro varchar (100) NOT NULL,
cep int(10) NOT NULL,
bairro varchar(50),
numero int(10) NOT NULL
);


create table experiencia(
id int (10) PRIMARY KEY NOT NULL auto_increment,
nome_empresa VARCHAR (50) NOT NULL,
cargo VARCHAR (30),
emprego_atual boolean, 
data_de_inicio DATE,
data_de_termino DATE,
descricao VARCHAR (500)
);

create table escolaridade(
id int (10) PRIMARY KEY NOT NULL auto_increment,
nivel VARCHAR (30) NOT NULL,
curso VARCHAR (50) NOT NULL,
terminou boolean,
data_de_inicio DATE,
data_de_termino DATE
);



ALTER TABLE empresa
ADD FOREIGN KEY(vagas_id) REFERENCES vagas(id); 


show tables;


