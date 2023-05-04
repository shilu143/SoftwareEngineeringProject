## Table Of Contents
* [Introduction](#1-introduction)
* [Overall Description](#2-overall-description)
* [Block Diagram](#3-block-diagram)
* [Software Stack](#4-software-stack)
* [Features & Requirements](#5-features--requirements)
* [Database Requirements](#6-database-requirements)
* [Implementation Details](#7-implementation-details)
* [Dataflow Diagram](#8-data-flow-diagram)
* [User Description](#9-user-description)
* [Workflow](#10-tasks-workflow)
* [Work Breakdown Structure](#11-work-breakdown-structure)

# 1. Introduction
A Software Requirements Specification (SRS) document is a comprehensive description of the intended purpose, functionality, and behavior of a software system. The primary purpose of an of this document is to provide a detailed and clear description of the software requirements to stakeholders. Requirements described in this document will be used as guidelines to develop the application.

## Document Conventions
* CFB : Campus Facility Booking application
* SRS : Software Requirements Specification
* Admin : user with administrator privileges
* Client : Intended Users of the application
* REQ: Requirement

## Project Purpose
For booking different facilities at campus such as Lecture halls, lab & lab equipment, sports facilities etc… one has to approach authorities and request for booking. This traditional booking process is time consuming and hectic. To tackle this, we want to build an advanced single booking software for all facilities that will be efficient and also will reduce the staff workload and save time.
 
Now the entire facilities booking management will be done online and on the tip of our hands. This makes the booking process easier and on the road. The application will be used by the students, faculties, clubs representatives and members.

This campus facility booking application will facilitate the following :-
* Allow teachers and students to book room for holding classes or events.
* Allow students to book usage of lab equipment.
* A web based application for admin access for the same
* Allow peers for booking tennis, badminton etc.. courts.
* Allow students to mark their presence via location based attendance system

## Project Scope
This platform provides an easy and effective way for faculties, representatives and authorities to book/reserve facilities available at the campus. The benefits of this is that the traditional booking methods (like going to the authority & request to book) are upgraded with interactive real-time booking support on the tips of your hand. Along with that this system will manage student attendance record and will save class time by automatic attendance system.
 
This will allow teachers and students to book rooms for holding classes or events, and allow students to book usage of lab equipment. A web based application for admin access will be there. Also peers can book tennis, badminton etc courts.

***

# 2. Overall Description 
## Product Perspective
Campus Facility Booking Application will be a platform where Professors will be able to book classrooms, students will be able to book lab equipment for their usage and they can also book tennis, volleyball and basketball courts. All this will be provided by the app.

## Product Features
Following Features will be provided by our Product:-

* Users will be able to log in to the app and book the relevant classes,lab equipment and play fields.
* Users will be able to see their upcoming booked classes and all their past booked classes.
* A preference order will be maintained where Bookings made by Professors will be given higher priority followed by students and club representatives.
* A web based Admin Portal will be implemented where Admin will be able to add new classrooms,lab equipment etc. to the database and can do things related to the database.
* Booking will be done after taking inputs like, number of students attending, so that the classrooms having that strength can be given to the user for booking.
* A complaint portal will also be there where any issues can be registered and which will be looked upon by the admin.
* Students will be able to mark his/her attendance via location based system.

## User Classes & Characteristics
### Physical Actors → 
*Professors* :- All the professors can book classrooms for taking classes, organizing seminars and talks.

*Students* :- All the students will be able to book lab equipment for their usage and playground fields in the available time slots.
### System Actors → 
*Admin* :- Allowed to add/delete a classroom and add/delete time slots for booking.

## Operating Environment
→ Application shall operate with any smartphone with Android version > 4.0.0

→ Web based Admin shall operate in any modern web browser

***

# 3. Block Diagram 
<img src="https://github.com/CS305-software-Engineering/App-for-campus-facility-booking/blob/main/Static%20Files/block_diagram.png" width="780" height="700">

***

# 4. Software Stack
- Android CFB app : Frontend [XML], Backend [Kotlin and Native Java]
- Web-based admin portal : Frontend [HTML, CSS, JavaScript] , Backend [NodeJS]
- Database : Firebase & Google cloud store
- Location based attendance system : Geolocation API 
***
# 5. Features & Requirements 

## System/hardware features

### User Registration : REQ1
<pre>
• <b>DESCRIPTION & PRIORITY</b>
To use the system, user first registers in the site by filling a simple form, the link of 
which is provided in the home page. 
<b>PRIORITY</b>: High
• <b>STIMULUS & RESPONSE</b>
<b>PRECONDITION</b>: User in homepage, clicked ‘register’
1. User fills the form and submit
2. Form validation checks to be passed for successful registration
3. The registration request will be approved by the Admin
4. As admin approves request the user gets registered and his account gets activated
5. User redirected to booking portal
<b>POST CONDITION</b>: The user get its account interface
</pre>

### User Login : REQ2
<pre>
• <b>DESCRIPTION & PRIORITY</b>
The user login in the login window provided in the homepage or through the login navigation link 
in the homepage to access CFB.
<b>PRIORITY</b>: High
• <b>STIMULUS & RESPONSE</b>
<b>PRECONDITION</b>: None
1. User fill login form and submit it
2. User login credentials are validated from firebase auth
3. If login info is not correct or all fields are not filled, submission fails and resubmission is required
4. If successfully submitted redirect to booking portal
<b>POST CONDITION</b>: The user get logged in
</pre>

### Search Engine : REQ3
<pre>
• <b>DESCRIPTION & PRIORITY</b>
User can search for rooms by Name, room capacity, availability & search for other facilities.
<b>PRIORITY</b>: Medium
• <b>STIMULUS & RESPONSE</b>
<b>PRECONDITION</b>: User logged in the account
1. User opt to search for campus facilities to book
2. Typing search query provides available options from database
<b>POST CONDITION</b>: user gets the required list of search query
</pre>

### Booking Facility : REQ4
<pre>
• <b>DESCRIPTION & PRIORITY</b>
After clicking to any search result, user gets directed to that facility booking window
<b>PRIORITY</b>: High
• <b>STIMULUS & RESPONSE</b>
<b>PRECONDITION</b>: User in booking window
1. User selects the time & date and clicks on book button
2. The booking request gets added to the pending queue
3. Pending requests gets resolved through pre-defined priorities
<b>POST CONDITION</b>: user gets the facility booked (if approved)
</pre>

### Location based Attendance System : REQ5
<pre>
• <b>DESCRIPTION & PRIORITY</b>
User can mark his/her attendance based on location
<b>PRIORITY</b>: Medium
• <b>STIMULUS & RESPONSE</b>
<b>PRECONDITION</b>: User in attendance window and GPS enabled on phone
1. User selects the class and clicks on mark attendance button
2. Location of the class and his/her mobile location will be verified
<b>POST CONDITION</b>: user attendance gets marked (if verified)
</pre>

### Web based admin portal : REQ6
<pre>
• <b>DESCRIPTION & PRIORITY</b>
Admin can view and alter booking data and details.
<b>PRIORITY</b>: High
• <b>STIMULUS & RESPONSE</b>
<b>PRECONDITION</b>: Admin logged into the web portal
1. Admin add/update/delete rooms and other facilities in database
2. Admin can view all bookings made
<b>POST CONDITION</b>: Database altered
</pre>

No specific hardware features and requirements.

## Functional requirements
- User shall be able to view homepage, register and login page
- User shall be able to fill form details
- The database shall be able to insert/update/delete or validate the user credentials
- Admin shall be able to access web portal via credentials
- Admin shall be able to view booking records and can alter the database
- Faculties shall be able to track student attendance record and students shall be able to mark their attendance 
- Software shall only be accessible to students and teachers

## Interface requirements
**User Interfaces** The pages shall permit complete navigation and item selection. Login interface, Register Interface, Homepage Dashboard, Web based admin Interface, Booking interface and mark attendance interface.

<img src="https://github.com/CS305-software-Engineering/App-for-campus-facility-booking/blob/main/Static%20Files/UI/login_signup_ui.png" width="780"> 

<img src="https://github.com/CS305-software-Engineering/App-for-campus-facility-booking/blob/main/Static%20Files/UI/overall_ui.png" width="780">

<img src="https://github.com/CS305-software-Engineering/App-for-campus-facility-booking/blob/main/Static%20Files/UI/admin_ui.png" width="850">


**Hardware Interfaces** No specific hardware interface. The device used to open the software should have internet access.

**Software Interfaces** A modern web browser software is required for web-based admin portal. 

**Communication Interfaces** The HTTP protocol will be used for communication between server application and client. 

## Software system attributes & Non-functional requirements
System should be secure in terms of user information, accurate in tracking user location, user friendly and robust. The system shall provide the right tools to support all its features. The system shall be available to users all the time.

**Reliability**: The system will not crash if two users book the same room at same time. In such cases room will be allocated on priority basis. Admin will set the priority for room booking.
 
**Availability**: The system will run indefinitely. A user can book rooms anytime. However the availability hours of a particular room is controlled by the admin. For new users , requests for access to the app will only be approved during the working hours time.

**Security**: The system will setup as an app based application(developed in Kotlin) that will support both android and IOS environments. In order to allow access to the app , OTP based mobile number verification system will be implemented.(Registered mobile numbers in the admin portal will get access to the app).All other related security considerations will be taken care of , by the software stack used.  

**Maintainability**: The product will be built using modular components that are independent as possible to make it easy for debugging , performance improvement and adaptation to changed environment .User interface and backend are the two main components of our application. Both components will be completely independent from each other for future modifications in UI in terms of adding new customizations or styling or making better models in our database.

**Portability**: The product is an app based application that will be supported on both android and IOS devices. The application will be written in Kotlin , with firebase authentication and cloud firestore will be used for maintaining the database. Users will be required to install the app on their mobile. Approved users will get access to the app.

***
# 6. Database Requirements
**USER** - This collection will contain all the registered users and only these users will be able to login into the system.
<pre><b>[ User_Type, Username, Email, Mobile No., Encrypted Password ]</b></pre>

**CLASSROOMS** - This collection will contain all the classrooms that can be booked. These classrooms can be booked by users for their use.
<pre><b>[ Department_Name, Room_Name, Capacity, Slots, Date, Availability_Status ]</b></pre>

**LAB EQUIPMENT** - This collection will contain all the lab equipment that can be booked. These lab equipment can be booked by users for their use.
<pre><b>[ Department_Name, Lab_Name, Equipments, Slots, Date, Availability_Status ]</b></pre>

**SPORTS COMPLEX** - This collection will have all the sports complexes that can be booked.
<pre><b>[ Sport_type, Field_name, Slots, Date, Availability_Status ]</b></pre>

**BOOKING RECORD** - This collection will have all the bookings made till now through which a particular booking can be tracked easily.
<pre><b>[ Booked_By, Booked_On, Booked_Facility_Name, Purpose_Of_Booking, Slot_Booked, Date_Booked ]</b></pre>

**COURSE RECORD** - This collection will have all the details pertaining to the courses being taken.
<pre><b>[ Course_ID, Professor, Student_ID, Room_Name, Slot, Date, Attedance_Status, Semester, Year ]</b></pre>

***
# 7. Implementation Details
## Assumptions and Dependencies
- Only slots of 1 hour can be booked for classrooms and 2 hours slots for labs & sports 
- There will be predefined priorities to resolve multiple booking requests Eg:- Priority for lecture halls → faculty > BR > club activities 
- Assuming that buildings are single floor for location based attendance system
- Booking confirmation for Faculties will be given as soon as booking is made.
- Pending booking request will be confirmed 2 hours prior to the event 
- Booking can be cancelled at max 5 hours prior to the event
- Assuming academic timetable will be be constant throughout the semester [else will be updated by admin]
- Assuming student have enabled GPS to mark his/her attendance

## Design and Implementation constraints
This application is provisioned to be built using Kotlin along with a web based admin to be built using HTML,CSS,JS & NodeJS. Also Firestore for proper data management is adopted for efficient performance and less redundancy in data. UI layout will be designed in XML.

# 8. Data Flow Diagram
<img src="https://github.com/CS305-software-Engineering/App-for-campus-facility-booking/blob/main/Static%20Files/data_flow_diagram.png" width="780" height="700">

# 9. User Description
The application will benefit the faculties of IIT Ropar to book rooms as per their convenience, students to work with lab equipment and book sports complex facilities to enjoy sports. All they need to do is to install the app and register themselves and proceed with the booking process. Also it will reduce the workload of faculties by allowing students to mark their attendance via location based attendance system.
The system shall provide a manual on how to use CFB for the understanding of the user.

# 10. Tasks Workflow

## Week 1
<pre>
• Prepare SRS document
</pre>

## Week 2
<pre>
• Design Work breakdown structure
• Setup basic application activity
• Setup login and signup activity
• Database setup and user authentication
• Preparation of design documents - HLD, LLD
</pre>

## Week 3 & 4
<pre>
• Setup booking portal for all actors
• Add booking functionality
</pre>

## Week 5
<pre>
• Design website for admin
• Add required admin functionalities
• Preparation of test plans
</pre>

## Week 6
<pre>
• Design attendance portal
• Add location based attendance system
• Overall feature Integration
</pre>

## Week 7
<pre>
• Testing of software and resolving issues/bugs
• Continuous build and deployment of software
• Final deployment of the software
</pre>
***

# 11. Work Breakdown Structure
<img src="https://github.com/CS305-software-Engineering/App-for-campus-facility-booking/blob/main/Static%20Files/wbs.png" width="1100" height="1200">