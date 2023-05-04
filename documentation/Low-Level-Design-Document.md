## Table Of Contents
* [Introduction](#1-introduction)
* [Modules](#2-modules)
* [Database Design](#3-database-design)

# 1. Introduction

The purpose of a Low-Level Design (LLD) document is to provide a detailed description of the software design at a lower level of abstraction than the High-Level Design (HLD) document. An LLD document typically includes a more detailed description of each component of the system and how they interact with each other.

The LLD document is typically created after the HLD document, and it serves as a blueprint for the implementation phase of the software development lifecycle. The LLD document provides developers with the detailed information they need to write the code for each component of the system.

***

# 2. Modules
Below are the detailed description of the modules of our application discussed in application layer of technology architecture in high level design document.
- **Authentication Module** - This module contains all the user Authentication related methods like signing up and logging in. The Authentication module works via JWT Tokens. This module will authenticate all the users using the database.. The module will also handle options like editing one’s profile.


- **Database Management Module** - This module will be managed solely by the admin where he will manage database related tasks like adding/deleting/updating a user to the database. Also, the admin can monitor all the activity going on.

<img src="images/databaseDesign.jpeg"></img>

- **Community Module** - The major module of our application. All the community related activities will be handled by this module. The major things handled will be the credibility to post in the community and to comment under a post. All the posts and comments will be maintained in the database.

- **Search Module** - This Module will handle searching among the posts, users and communities according to title of the post, username, community name, tags, and other factors. The module will retrieve information from the database for each query.

<img src="images/interface4.jpeg"></img>

- **Posts Module** - This Module will be used for the new and existing posts, and the comments on those posts.


***


# 3. Database Design

A database includes bulk information deposited in a framework, making it easier to locate and explore relevant information. A well-designed database contains accurate and up-to-date information, allowing data to be fetched easily whenever needed.

We have implemented a database with minimum redundancy which reduces the probability of faults and discrepancies within the database.

- The CREATE SCHEMA public statement creates a new schema named "public". This schema will hold all the tables that will be created later in the script.

- Next, the script creates five tables named "users", "communities", "posts", "comments", and "communityUser".

- The "users" table has columns for the user ID, email, name, gender, age, password, and profile image. The SERIAL PRIMARY KEY statement creates an auto-incrementing ID for each new row.

- The "communities" table has columns for community ID, community name, user ID who created the community, time of creation, category (which can have multiple values), and community profile image. The SERIAL PRIMARY KEY statement creates an auto-incrementing ID for each new row, and the REFERENCES statement specifies that the createdByWhom column should reference the id column in the users table.

- The "posts" table has columns for post ID, community ID (the ID of the community to which the post belongs), post title, post body, user ID who created the post, time of creation, number of votes, and post image. The SERIAL PRIMARY KEY statement creates an auto-incrementing ID for each new row, and the REFERENCES statement specifies that the createdByWhom and comId columns should reference the id and comId columns in the users and communities tables, respectively.

- The "comments" table has columns for comment ID, user ID who created the comment, parent comment ID (if any), written text, time of creation, number of votes, and post ID to which the comment belongs. The SERIAL PRIMARY KEY statement creates an auto-incrementing ID for each new row, and the REFERENCES statement specifies that the createdByWhom and postId columns should reference the id and postId columns in the users and posts tables, respectively.

- The "votePosts" table has columns for post ID and user ID, to keep track of which user voted for which post. The REFERENCES statement specifies that the postId and userId columns should reference the postId and id columns in the posts and users tables, respectively.

- The "voteComments" table has columns for comment ID and user ID, to keep track of which user voted for which comment. The REFERENCES statement specifies that the commentId and userId columns should reference the commentId and id columns in the comments and users tables, respectively.

- The "communityUser" table has columns for user ID and community ID, to keep track of which users are members of which communities. The REFERENCES statement specifies that the userId and comId columns should reference the id and comId columns in the users and communities tables, respectively.

Overall, this script creates a schema and tables to store information related to users, communities, posts, comments, and votes in a social media application or similar platform.
***
