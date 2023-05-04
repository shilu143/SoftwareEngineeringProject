## Table Of Contents
- [Introduction](#1-introduction)
    - [Project Description](#11-project-description)
    - [Document Purpose](#12-document-purpose)
    - [Objectives](#13-objectives)

- [Test Items](#2-test-items)
    - [In Scope](#21-in-scope)
    - [Out Of Scope](#22-out-of-scope)

- [Test Methodology](#3-test-methodology)

- [Test Cases](#4-test-cases)
    - [Authentication](#41-authentication)
    - [Booking](#42-booking)
    - [User Bookings](#43-user-bookings)
    - [Attendance](#44-attendance)
    - [User Profile](#45-user-profile)
    - [Admin Portal](#46-admin-portal)    

- [Resource & Environment Needs](#5-resource--environment-needs)

## 1. INTRODUCTION

### 1.1 Project Description
Campus Facility Booking Application will be a platform where Professors will be able to book classrooms, students will be able to book lab equipment for their usage and they can also book tennis, volleyball and basketball courts. Also students will be able to mark their attendance for the ongoing classes. All this will be provided by the app.


### 1.2 Document Purpose
The purpose of this document is to describe the objectives, scope, resources, and methodology for the Test Plans of our Campus Facility Booking Application. The plan typically contains a detailed understanding of the eventual workflow to verify and ensure that the app meets its design specifications and other requirements.

**CONVENTIONS USED**
Acronym |   Meaning |
--- | --- |
API |	Application Program Interface |
AUT |	Application Under Test |
SRS | Software Requirement Specifications |
CFB | Campus Facility Booking |

### 1.3 Objectives
Integration Testing is done because :-
- Earlier feedback on the acceptability of the individual module will be available
- Ensure the AUT conforms to functional and non-functional requirements
- Ensure the AUT is correct with software requirements and design constraints
- Bugs/issues are identified and fixed before go live
- Scheduling of Defect fixes is flexible, and it can be overlapped with development
- Correct data flow, control flow, timing and database usage



## 2. TEST ITEMS

### 2.1 In Scope
Scope defines the features, functional or non-functional requirements of the software that will be tested. All the features of CFB which were defined in SRS are to be tested.

Features to be tested:

**1. Authentication**

- A new user should be able to sign up successfully into the app by filling all the necessary information and then verifying their mobile number by OTP verification. 
- Once mobile number is verified, he/she can log in with the same credentials only into the app.
- Existing users can directly log in into the app and once logged in, they should be kept logged in until they sign out by themselves.
- If an existing user forgets his/her password, he/she should be able to recover that using the email address submitted.
- The app should distinguish the users as students and professors(taken as input during sign up) and after logging in, the respective functionalities should be provided to them by the app.

**2. Booking**

- Logged in Users should be able to book classrooms, labs and sports complexes based on availability.
- They should be able to see all the slots of their chosen classroom, lab or sport complex for a particular chosen date.
- Selecting any available slot should proceed them to a confirmation page where they would fill their purpose of booking and complete the booking procedure.
- The slots for booking should be available for next 7 days from current date.
- For classrooms, booking a classroom by capacity should be there in which the user can select the capacity and based on that all classroom of that particular capacity only should be provided for booking.

**3. User Bookings**
- Existing Users should be able to view all their booking history. The booking history should be sorted by date and should show real time situation like 
'completed' - Bookings which have been completed ,
'ongoing' - Bookings which are currently going on ,
'upcoming' - Bookings yet to come.
- A filter should also be given so that only classroom bookings, lab bookings or sports bookings can be seen.
- In the same Booking history, an Attendance showing button for classrooms and labs should be there which can show who have attended this particular classroom or lab and should return the count. 

**4. Attendance**

- If an user is within 10 meter radius of a defined geo location of a booked classroom which is currently going on , he should be able to see that classroom available for marking attendance. For this feature to work, the GPS should be enabled on the user's mobile.
- Once marked, he should not see the same classroom again and the data should be saved , one in the attendance history of the booked room and the other in the user's attendance history.
- Later, one can view attendees of his/her booked classroom as mentioned in the User Bookings and the user should also see their all the attended classrooms.

**5. User Profile**

- Existing Users can view their profile an upload their photo and perform necessary changes.
- A change password option should also be available so that they can change his/her password by submitting previous password and new password.

**6. Admin Portal**

- A separate web portal for admin should be there where adding of a new classroom, lab and sport is provided along with altering existing classrooms, labs and sports complexes.
- Admin should also view all the users along with their booking history.
- Admin should be able to handle slot adding and deleting effectively to manage the database constraints. 


### 2.2 Out Of Scope
Out Of Scope defines the features, functional or non-functional requirements of the software that will NOT be tested

- Fused Location Provider API : Used to fetch user real time location. Need not be tested as it is third party API and is assumed to be reliable & accurate.
- Database security : Need not be tested as we are using Firebase and is assumed to be reliable.
- Communication Interfaces : The reliable HTTP protocol is used for communication between server application and client.

## 3. Test Methodology

**Unit Testing**
Unit testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

**NOTE:** We will run unit test for app activities using JUnit

**Route Testing**
We plan to use the postman's testing utility for testing all the routes that have been created for the web based admin portal.

**API Testing**
We will be testing Fused Location Provider API to fetch real time user location using script.

**Integration Testing**
The next step after unit testing, route and API testing is to do integration testing. Integration Testing where individual modules are combined and tested as a group. All modules are integrated in advance, and the entire program is tested as a whole. The purpose of this level of testing is to expose faults in the interaction between integrated units. And we will use a combination of manual methods and some automated module tests for the same.

## 4. TEST CASES

Some Test Cases - 

### 4.1 Authentication
- Precondition : User opens mobile app

Test Case #|   Test Scenario| Test Steps | Test Data | Expected Results | Actual Results | Pass/Fail |
--- | --- | --- |--- |--- |--- |--- |
|1|Check user Login with valid credentials|Go to App. Enter Emailid and Password then Click Login|Emailid = 2018csb1101@iitrpr.ac.in, Password = Test12345|User should Login into application|As Expected|Pass|
|2|Check user Login with invalid credentials |Go to App. Enter Emailid and Password then Click Login|Emailid = 2018csb1105@iitrpr.ac.in, Password = wrong |User should not Login into application|As Expected|Pass|
|3|Check user SignUp with name, email, mobile,user_type and password|Go to App then go to SignUp. Enter name, email, mobile,user_type and password, confirm password then Click SignUp|Name = Farhan Nitrate, Emailid = 2018csb1105@iitrpr.ac.in, Mobile =6265181779, Password = "------", Confirm Password = *"------" |User is successfully registered into the application after mobile verification via OTP. If wrong OTP - verification fails|As Expected|Pass|
|4|Check user SignUp with name, existing email or existing mobile, user_type and password|Go to App then go to SignUp. Enter name, email, mobile,user_type and password, confirm password then Click SignUp|Name = Raju Rastogi, Emailid = 2018csb1105@iitrpr.ac.in, Mobile =8765934562, Password = "------", Confirm Password = "------"|App prompts that user with given email id already exists|As Expected|Pass|
| 5 | Forgot Password | User clicks on forgot password and enters email to receive reset link| email="2018csb1069@iitrpr.ac.in" | Reset link is sent to the given mail id | As expected | Pass| 

### 4.2 Booking
- Precondition : User logged in and then opts to book a facility

Test Case #|   Test Scenario| Test Steps | Test Data | Expected Results | Actual Results | Pass/Fail |
--- | --- | --- |--- |--- |--- |--- |
|1|Check by Booking a classroom on a date by selecting an available slot|Click on BOOK CLASS then SEARCH CLASS BY NAME then PICK DATE, select Block,select ClassRoomName then click SEARCH and then BOOK NOW for any available slot|Date="22/04/2021", BuldingName="Ramanujan Block", ClassRoomName = CS303, Slot="12to1PM"|Selected ClassRoom should be booked for given date and selected slot|As Expected|Pass|
|2|Check by Booking a classroom by capacity and available slot.|Click on BOOK CLASS then SEARCH CLASS BY CAPACITY then select Capacity then click SEARCH -  this will fetch all the classrooms with given capacity, then PICK DATE for any of these classroom then click VIEW SLOTS and then BOOK NOW for available slots|Capacity = 150, ClassRoom=CS303, Date = 22/04/2021 Slot="12to1PM"|Selected ClassRoom of given capacity should be booked for given date and slot|As Expected|Pass|
|3|Check by Booking a Lab on a date by selecting an available slot.|Click on BOOK LAB then SEARCH BY LABORATORY NAME then PICK DATE, select Block,select Lab Name then click SEARCH and then BOOK NOW for available slots|Date = 22/04/2021, Bulding Name = Ramanujan Block, Lab Name = CSL01, Slot="12to1PM"|Selected Lab should be booked for given date and slot|As Expected|Pass|
|4|Check by Booking a sports complex on a date by selecting an available slot.|Click on BOOK SPORT then SEARCH COMPLEX BY NAME then PICK DATE, Select Sports Complex and click SEARCH then BOOK NOW for available slots|Date=22/04/2021, Sports Complex=VolleyBall Field, Slot="12to1PM"|Selected Sport Complex should be booked for given date and slot|As Expected|Pass|
5 | Book a already booked slots | user selects a booked slot(shown in red color in UI) | Facility Details="----", Date="---", Slot="12to1PM" | App prompts a toast message to choose another slot as this one is booked | As expected | Pass |
6 | Book a classroom/lab/sports whose slots are not there for chosen date | User selects date and facilty | Date="----", Facility="---" | No slots is shown as it is not there in the database for the chosen inputs| As expected | Pass |


### 4.3 User Bookings
- Precondition : User logged in and then views booking history

Test Case #|   Test Scenario | Test Steps | Test Data | Expected Results | Actual Results | Pass/Fail
----- | ----- | ----- | ----- | ----- | ----- | -----
 1 | Fetch user booking history with real time booking status| User clicks on view bookings | User utils | List of all bookings made by the current user sorted by (date, slot) is shown along with their status showing   'completed' - Bookings which have been completed , 'ongoing' - Bookings which are currently going on , 'upcoming' - Bookings yet to come| As expected | Pass 
 2 | Filter facility wise bookings | User opts to view particular type of facilities(classrooms/labs/sports) booked | type="labs" | List of all LAB bookings made by the current user sorted by (date, slot) is shown along with their status showing   'completed' - Bookings which have been completed , 'ongoing' - Bookings which are currently going on , 'upcoming' - Bookings yet to come | As expected | Pass 


### 4.4 Attendance
- Precondition : User is logged into the app

Test Case #|   Test Scenario| Test Steps | Test Data | Expected Results | Actual Results | Pass/Fail |
--- | --- | --- |--- |--- |--- |--- |
| 1 | Check if user has allowed location access | App prompts user to grant location access while using app | User denies each time | User unable to mark attendance | As expected | Pass|
| 2 | Check if user has allowed location access | App prompts user to grant location access while using app | User grants access | User able to mark attendance for ongoing activities| As expected | Pass|
| 3 | Check if user can mark multiple attendance| Fetch from database if user has already marked | User tries to mark again | User unable to mark multiple times | As expected | Pass|
| 4 | Verify app is able to track user location precisely| User opts to mark attendance while moving/stationary | User turns on location access | User able to see ongoing nearby activities | As expected | Pass|
| 5 | Check if user is able to mark attendance if he/she is within radius of 10m from facility location | User opts to mark attendance while at facility | User turns on location access | User able to see ongoing classes while at a radius of 10 meters | As expected | Pass|
| 6 | Check if user is able to view attendance record | User opts to view attendance | User utils | List of all user attendance history is shown | As expected | Pass |
| 7 | Check if user is able to view all attendees of a particular booking | User opts to view attendees | User utils | List of attendees along with the head count| As expected | Pass |

### 4.5 User Profile
- Precondition : User logged to the app and opens profile

Test Case #|   Test Scenario| Test Steps | Test Data | Expected Results | Actual Results | Pass/Fail |
--- | --- | --- |--- |--- |--- |--- |
| 1 |  Change profile image to other image by uploading from gallery | User selects a image from gallery | Image="img.png" | Image successfully updated and uploaded to database | As expected | Pass |
| 2 | Change Password from "------" to "------" | User enters old and new password | old="----a-", new="-b----" | Password changed successfully and user is able to login with updated credentials. | As expected | Pass |

### 4.6 Admin Portal
- Precondition : Admin opens website portal

Test Case #|   Test Scenario| Test Steps | Test Data | Expected Results | Actual Results | Pass/Fail |
--- | --- | --- |--- |--- |--- |--- |
| 1 | Check admin login with valid credentials | Go to website. Enter email-id and password then click Login | Email-id = admin@gmail.com, password=admin | Admin able to login to the portal | As expected | Pass |
| 2 | Check admin login with invalid credentials | Go to website. Enter email-id and password then click Login | Email-id = admin@gmail.com, password=wrong | Admin unable to login to the portal | As expected | Pass | 
| 3 | Check admin login with empty credentials | Go the website. Enter input then click login| either Email-id = "" or password="" or both | website prompts "The field is required" | As expected | Pass |
| 4 | Add a new classroom | Enter class details on the modal form | Name=CS202, BuildingName="Ramanujan Block", Department="CSE", Capacity=100, Longitude="23.6718", Latitude="80.9718" | If classroom Name does not exist in database - Classroom gets successfully added to the database. Else - current details get updated | As expected | Pass |
| 5 | Add a new Lab room| Enter lab room details on the modal form | Name=MELab, BuildingName="Satish Dhawan Block", Department="ME", Longitude="23.6718", Latitude="80.9718" | If labroom Name does not exist in database - Lab room gets successfully added to the database. Else - current details get updated | As expected | Pass |
| 6 | Add a new sports complex | Enter complex details on the modal form | Name=Volleyball Field| If complex Name does not exist in database - Complex gets successfully added to the database. Else - current details get updated | As expected | Pass |
| 7 | Edit classroom or lab room or sports complex | Enter fields to be updated | Change capacity from 100 to 50 for CS202 | Capacity updated successfully | As expected | Pass |
| 8 | Delete classroom or lab room or sports complex | Select facility to be deleted | Delete CS202 | Facility deleted successfully | As expected | Pass |
| 9 | Add upcoming slots for next 7 days | Admin opts to add upcoming slots (automatically) | Today's Date | For all classrooms/labs/sports, slots gets populated for the next seven days | As expected | Pass |
| 10 | Delete previous slots | Admin opts to delete old slots(automatically) for maintaining database | Today's Date | All previous date slots gets deleted successfully from the database | As expected | Pass | 
| 11 | Add slot for particular (date, facility)| Select date, facility and slot to be added | Date="23/04/2021", Facility="CS202", Slot="12to1PM" | Slot gets added successfully | As expected | Pass |
| 12 | View users and their booking history | Admin select a user | user email="akshat@gmail.com" | List all bookings made by this selected user | As expected | Pass |


## 5. Resource & Environment Needs

### 5.1 Testing Tools
- Demo data for testing
- Software requirements, assumptions and constraints
- Debugger and bug report generator available on Android Virtual Device  

### 5.2 Test Environment
Mentions the minimum requirements that will be used to test the Campus Facility Booking Application :-
- Smartphone with Android Version >=4.1 Jelly Bean
- GPS supported mobile
- Internet and media access

Mentions the minimum requirements that will be used to test the Web Based Admin :-
- Desktop with modern web browser like Chrome, Firefox
- Internet Access

## References
* [Wikipedia](https://en.wikipedia.org/wiki/Test_plan)
* [Link 1](https://www.softwaretestinghelp.com/how-to-write-test-plan-document-software-testing-training-day3/)
* [Link 2](https://www.professionalqa.com/test-case-vs-test-plan)