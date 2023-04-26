drop schema public cascade;
create schema public;

create table users(
    id serial primary key,
    email text,
    name varchar(100),
    gender varchar(1),
    age integer,
    password varchar(100),
    profileImage text
);

create table communities(
    comId serial primary key,
    comName varchar(100),
    createdByWhom integer references users(id),
    timeCreated TIMESTAMP,
    category varchar(100),
    communityProfileImage text
);

create table posts(
    postId serial primary key,
    comId integer references communities(comId),
    postTitle varchar(100),
    createdByWhom integer references users(id),
    timeCreated TIMESTAMP,
    votes integer,
    postImage text
);

create table comments(
    commentId serial primary key,
    createdByWhom integer references users(id),
    parentComment integer,
    writtenText varchar,
    timeCreated TIMESTAMP,
    votes integer,
    postId integer references posts(postid)
);

create table votePosts(
    postId integer references posts(postId),
    userId integer references users(id)
);

create table voteComments(
    commentId integer references comments(commentId),
    userId integer references users(id)
);

create table communityUser(
    userId integer references users(id),
    comId integer references communities(comId)
);