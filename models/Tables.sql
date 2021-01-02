/**
SQL code to populate database with necessary tables
 */
create table if not exists users
(
    email      varchar(256) not null,
    first_name varchar(128) not null,
    last_name  varchar(128) not null,
    password   varchar(64)  not null comment 'SHA256 Hash',
    constraint users_email_uindex
        unique (email)
);

alter table users
    add constraint `PRIMARY`
        primary key (email);

