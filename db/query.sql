CREATE DATABASE likeme;

CREATE TABLE posts (
    id SERIAL, 
    titulo VARCHAR(25), 
    img VARCHAR(1000),
    descripcion VARCHAR(255), 
    likes INT
);

insert into posts (titulo,img,descripcion,likes)
values('titulo 1','img 1','imagen 1','1');