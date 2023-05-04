## Table Of Contents
- [Introduction](#1-introduction)
    - [Project Description](#11-project-description)
    - [Document Purpose](#12-document-purpose)
    - [Objectives](#13-objectives)

- [Test Items](#2-test-items)
    - [In Scope](#21-in-scope)
    - [Out Of Scope](#22-out-of-scope)

- [Test Methodology](#3-test-methodology)

## 1. INTRODUCTION

### 1.1 Project Description
The platform is a social news aggregation and discussion website where registered members submit content in the form of text posts or direct links. Users can upvote or downvote posts and comments, which determines their visibility on the site, as well as participate in discussions by commenting on posts.


### 1.2 Document Purpose
The purpose of a Test Plan document is to provide a clear and comprehensive roadmap for the testing effort, ensuring that all aspects of the software are thoroughly tested and that the testing is conducted in an organized and efficient manner. It also serves as a reference point for all stakeholders involved in the project, providing a clear understanding of the testing strategy and approach.

**CONVENTIONS USED**
Acronym |   Meaning |
--- | --- |
API |	Application Program Interface |
AUT |	Application Under Test |
SRS | Software Requirement Specifications |

### 1.3 Objectives
The objectives of testing can vary depending on the specific project and software being tested, but generally include:
- Finding defects or errors: Testing helps identify defects or errors in the software, including functionality issues, performance problems, and security vulnerabilities.
- Ensuring quality: Testing ensures that the software meets the desired level of quality and reliability, and that it meets the user's needs and expectations.
- Improving user experience: Testing can help identify and fix issues that impact the user experience, such as usability problems or confusing interfaces.
- Increasing confidence: Testing can increase confidence in the software, both for the development team and for the end-users, by demonstrating that the software works as intended.
- Reducing costs: Testing can help identify and fix defects earlier in the development process, which can save time and money by avoiding costly fixes later on.

## 2. TEST ITEMS

### 2.1 In Scope
Scope defines the features, functional or non-functional requirements of the software that will be tested. All the features of the project which were defined in SRS are to be tested.

Features to be tested:

**1. Authentication**

- A new user should be able to sign up successfully into the app by filling all the necessary information.
- Existing users can directly log in into the app and once logged in, they should be kept logged in until they sign out by themselves.

**2. Posts**

- Logged in users should be able to create posts, which can include text and image content.
- They should be able to upvote or downvote the posts in accordance with their interests.
- The posts should appear from the communities the user follows.

**3. Comments**
- Existing Users should be able to comment on the posts.
- The comments should be visible beneath the posts to all the users.
- The post owner should be able to delete irrelevant comments.

**4. Community**

- If an user is logged in, they should be able to join the community of their interest.
- A registered user should also be able to create a community of their own.
- The posts under a certain community should be visible to people visiting that community, or the people who are a part of the community.

**5. User Profile**

- Existing Users can view their profile an upload their photo and perform necessary changes.
- The user should be able to see the profile of another user from posts/comments.



### 2.2 Out Of Scope (not edited from here)
Out Of Scope defines the features, functional or non-functional requirements of the software that will NOT be tested

- Fused Location Provider API : Used to fetch user real time location. Need not be tested as it is third party API and is assumed to be reliable & accurate.
- Database security : Need not be tested as we are using Firebase and is assumed to be reliable.
- Communication Interfaces : The reliable HTTP protocol is used for communication between server application and client.

## 3. Test Methodology

**Unit Testing**
Unit testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

**NOTE:** To do unit testing, we will are using jest framework

**Route Testing**
To test our routes and the API'S,we are using the Postman API's services
