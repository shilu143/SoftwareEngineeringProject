## Table Of Contents
* [Introduction](#1-introduction)
* [Classes](#2-classes)
* [Modules](#3-modules)
* [Database Design](#4-database-design)

# 1. Introduction
The purpose of this low-level design document(LLDD) is to give the internal logical design of the actual program code. Low-level design is created based on the provided high-level design. LLD describes the class diagrams with the methods and relations between classes and program specifications. It describes the modules & proper analysis of project design so that the programmer can directly code the program from this document with minimal debugging and testing.

***

# 2. Classes
Below are the detailed description of the major classes of our application discussed in high level design document.
- **App** - The main class for our application. All the search methods will be given to the app class.
- **User** - The class will contain objects of users who will be accessing the application for booking and other facilities. All the attributes and methods have been shown in the detailed diagram.
- **Student** - This class inherits from the User class and will be able to perform all the functionalities defined for user class. 
Professor - This class also inherits from the User Class. This class will have an additional method of viewing Attendance Information so that attendance record can be maintained.
- **Classrooms** - This class will have objects of every classroom which are available for booking and will have extra attributes like capacity so that strength of the classrooms can be determined. Other methods and attributes can be seen in the class diagram.
- **Labs**- This class will have objects of every lab along with the equipment which are available for booking. Other methods and attributes can be seen in the class diagram.

- **Sports Complex** - This class will have objects of every sports complex which are available for booking. Other methods and attributes can be seen in the class diagram.
- **Booking Slots** - This class contains objects of booking slots available for booking for each classroom,labs and sports complex. Date and time are the main attributes here.
- **Booked** - This class contains objects of booked facilities. Each object will have attributes like who booked them and what is the slot. A class where objects contain the history of all bookings made.
- **Attendance**- This class contains objects of all the attendance history of a particular booking session which will be used to manage the attendance.

**Below is the detailed Class Diagram for our application**

<img src="https://github.com/CS305-software-Engineering/App-for-campus-facility-booking/blob/main/Static%20Files/Design%20Document%20Assests/class_diagram_lld.png" width="1000" height="1000"></img>

Note that all the basic get() and set() methods are included in each of the classes.  

**Below is the detailed class Diagram for admin**

<img src="https://github.com/CS305-software-Engineering/App-for-campus-facility-booking/blob/main/Static%20Files/Design%20Document%20Assests/class_diagram_admin_lld.png" width="700" height="700"></img>



***



# 3. Modules
Below are the detailed description of the modules of our application discussed in application layer of technology architecture in high level design document.
- **Authentication Module** - This module contains all the user Authentication related methods like signing up and logging in. The Authentication module will have a mobile OTP verification based signing up which will be done via Firebase Authentication. This module will authenticate all the users using the database and allow/disallow them for using the android app. The module will also handle options like updating password and editing one’s profile.

<img src="https://github.com/CS305-software-Engineering/App-for-campus-facility-booking/blob/main/Static%20Files/Design%20Document%20Assests/authentication_module.png" width="800" height="500"></img>


- **Database Management Module** - This module will be managed solely by the admin where he will manage database related tasks like adding/deleting/updating a facility to the database. Also, the admin can monitor all the booking records and attendance records.

<img src="https://github.com/CS305-software-Engineering/App-for-campus-facility-booking/blob/main/Static%20Files/Design%20Document%20Assests/database_mgmt_module.png" width="400" height="350"></img>

- **Booking Module** - The major module of our application. All the Booking related activities will be handled by this module. The major things handled will be allowing booking of facilities by showing all the available rooms in the particular slot(time and date). The module will handle confirmation of the booking made based on a priority list where Professors will be given higher priority. All the bookings will be maintained in the database.


- **Search Module** - This Module will handle searching available rooms according to room name, date, time and capacity of the rooms and also searching lab equipment and sports complex according to the requirements. The module will retrieve information from the database for each query.

<img src="https://github.com/CS305-software-Engineering/App-for-campus-facility-booking/blob/main/Static%20Files/Design%20Document%20Assests/booking and search module.png" width="700" height="500"></img>

Depicting Flow of both Search and Booking Module

- **Attendance Module** - This Module will be used for taking attendance using Google Location API which will fetch user location and will automatically mark student attendance. Also maintaining all the attendance details in the database.

<img src="https://github.com/CS305-software-Engineering/App-for-campus-facility-booking/blob/main/Static%20Files/Design%20Document%20Assests/attendance_module.png" width="600" height="400"></img>


***


# 4. Database Design
A database includes bulk information deposited in a framework, making it easier to locate and explore relevant information. A well-designed database contains accurate and up-to-date information, allowing data to be fetched easily whenever needed.
We have implemented a database with minimum redundancy which reduces the probability of faults and discrepancies within the database.
It explains the database ER mentioned in high level design document [here](https://github.com/CS305-software-Engineering/App-for-campus-facility-booking/wiki/High-Level-Design-Document#database-design).
We have created following tables in the database:

Note: All the **Bold** attributes below act as primary key.
<pre>
<b>USER - This collection will contain all the registered users and only these users will be able to login
into the system.</b>
Attributes:
User_Type :             varchar(20)    (student/faculty)
Username:               varchar(20)      
Email:                  string         (Only college Ids have access to app).
<b>Mobile No:</b>              int(10)        [Primary Key]
Encrypted Password:     string         (Auto encrypted by firebase auth).
</pre>



<pre>
<b>CLASSROOMS - This collection will contain all the classrooms that can be booked. These classrooms can be 
booked by users for their use.</b>
Department_Name :       varchar(30) 
<b>Room_Name :</b>             varchar(5)
Capacity :              int(5) 
<b>Slots :</b>                 string
<b>Date</b> :                  DateandTime
Availability_Status :   int(2)           [ 00: Booked  01: Unavailable   : 10: AcadSlots]
</pre>

<pre>
<b>LAB EQUIPMENT - This collection will contain all the lab equipment that can be booked. These lab equipment can be
booked by users for their use.</b>
Attributes:
Department_Name :           varchar(30)   
<b>Lab_Name :</b>                  varchar(20)      
Equipments :                string
<b>Slots :</b>                     string
<b>Date :</b>                      DateandTime
Availability_Status :       int(2)               [ 00: Booked  01: Unavailable   10: AcadSlots]
</pre>

<pre>
<b>SPORTS COMPLEX - This collection will have all the sports complexes that can be booked.</b>
Sport_type :            varchar(30)
<b>Field_name :</b>            varchar(20)
<b>Slots :</b>                 string
<b>Date :</b>                  DateandTime
Availability_Status :   int(2)              [ 00: Booked  01: Unavailable   10: AcadSlots]
</pre>

<pre>
<b>BOOKING RECORD - This collection will have all the bookings made till now through which a particular 
booking can be tracked easily.</b>
<b>Booking_id :</b>              int(11)    
Booked_By :               int(10)            Foreign key referenced to mobile in USER table.
Booked_On :               DateandTime
Booked_Facility_Name :    varchar(20)
Purpose_Of_Booking :      text
Slot_Booked :             string
Date_Booked :             DateandTime
</pre>

<pre>
<b>COURSE RECORD - This collection will have all the details pertaining to the courses being taken.</b>
<b>Course_ID :</b>          varchar(10)
Professor :          varchar(30)
<b>Student_ID :</b>         varchar(10)     Foreign key referenced to username in USER table.
<b>Room_Name :</b>          varchar(5)      Foreign key referenced to room_name in CLASSROOM table.
<b>Slot :</b>               string          (Among one of available slot selected from CLASSROOM table)
<b>Date :</b>               DateandTime
Attedance_Status :   bool            [present/absent]
Semester :           int(5)
Year :               int(10)
</pre>

This database might change to some extent during development process for better performance and for making future integrations to application easier.


***


## References
* [https://en.wikipedia.org/wiki/Low-level_design](https://en.wikipedia.org/wiki/Low-level_design)