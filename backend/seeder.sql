-- Drop the public if it exists
DROP SCHEMA IF EXISTS public CASCADE;

-- Create the new schema
CREATE SCHEMA public;

-- Create the tables in the new schema
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT,
  name VARCHAR(100),
  gender VARCHAR(1),
  age INTEGER,
  password VARCHAR(100),
  profileImage TEXT
);

CREATE TABLE communities (
  comId SERIAL PRIMARY KEY,
  comName VARCHAR(100),
  createdByWhom INTEGER REFERENCES users(id),
  timeCreated TIMESTAMP,
  category TEXT[],
  communityProfileImage TEXT
);

CREATE TABLE posts (
  postId SERIAL PRIMARY KEY,
  comId INTEGER REFERENCES communities(comId),
  postTitle VARCHAR(100),
  createdByWhom INTEGER REFERENCES users(id),
  timeCreated TIMESTAMP,
  votes INTEGER,
  postImage TEXT
);

CREATE TABLE comments (
  commentId SERIAL PRIMARY KEY,
  createdByWhom INTEGER REFERENCES users(id),
  parentComment INTEGER,
  writtenText VARCHAR,
  timeCreated TIMESTAMP,
  votes INTEGER,
  postId INTEGER REFERENCES posts(postId)
);

CREATE TABLE votePosts (
  postId INTEGER REFERENCES posts(postId),
  userId INTEGER REFERENCES users(id)
);

CREATE TABLE voteComments (
  commentId INTEGER REFERENCES comments(commentId),
  userId INTEGER REFERENCES users(id)
);

CREATE TABLE communityUser (
  userId INTEGER REFERENCES users(id),
  comId INTEGER REFERENCES communities(comId)
);
