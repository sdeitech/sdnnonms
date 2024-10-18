/*
1. Create a Database
A database is like a folder that stores tables. Before creating a table, we first need to create a database.

CREATE DATABASE School;

Use School


*/

CREATE TABLE Students (
    StudentId INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Age INT,
    GradeLevel VARCHAR(10)
);


INSERT INTO Students (FirstName, LastName, Age, GradeLevel)
VALUES 
('John', 'Doe', 10, '5th'),
('Jane', 'Smith', 12, '6th'),
('Sam', 'Wilson', 11, '5th');


-- ********************************************************************************************

select *
from   Students;

-- Using Alias name to a columns



select StudentId as Id,
       FirstName as StudentFirstName,
       LastName  as StudentLName
from   Students s



-- ***********************   Order By Clause     *****************************

/*

1] When you use the SELECT statement to query data from a table, 
    the order of rows in the result set is unspecified.
    
   To sort the rows in the result set, you add the ORDER BY
   clause to the SELECT statement.

2] The following illustrates the syntax of the ORDER BY clause:


*/

select *
from   Students
order  by StudentId desc
;


select *
from   Students
order  by Age desc
;


select *
from   Students
order  by 2 asc
;

-- ghjgjgjgjg

/*

*/


-- Can use with multiple columns 

select *
from   Students
order  by Age desc ,
          Gradelevel asc
;



-- **************** Where  Clause   *************************

/*

The WHERE clause allows you to specify a search condition 
for the rows returned by a query.
The following shows the syntax of the WHERE clause:

*/

select *
from   students
where  FirstName = 'john' and Age =  10;

select *
from   students
where  StudentId = 1;




CREATE TABLE Patient (
    PatientId INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Gender VARCHAR(10),
    Age INT,
    City VARCHAR(50)
);



INSERT INTO Patient (FirstName, LastName, Gender, Age, City)
VALUES
('John', 'Doe', 'Male', 32, 'New York'),
('Jane', 'Smith', 'Female', 28, 'Los Angeles'),
('Sam', 'Wilson', 'Male', 45, 'Houston'),
('Amy', 'Brown', 'Female', 34, 'Phoenix'),
('Michael', 'Clark', 'Male', 29, 'Chicago'),
('Sara', 'Johnson', 'Female', 41, 'San Diego'),
('James', 'Miller', 'Male', 25, 'Dallas'),
('Emma', 'Davis', 'Female', 36, 'San Francisco'),
('Robert', 'Taylor', 'Male', 47, 'Austin'),
('Sophia', 'Anderson', 'Female', 23, 'Seattle'),
('David', 'Thomas', 'Male', 39, 'Denver'),
('Mia', 'Moore', 'Female', 31, 'Las Vegas'),
('Daniel', 'Jackson', 'Male', 38, 'Miami'),
('Olivia', 'Martinez', 'Female', 30, 'Orlando'),
('Noah', 'Garcia', 'Male', 27, 'Atlanta');


select *
from   Patient;


select PatientId as hfjdhdjfh,
	   FirstName
from   Patient





-- *******************  Like Operator    *************************************

/*

The LIKE operator is a logical operator that tests 
whether a string contains a specified pattern or not.

Here’s the syntax of the LIKE operator:

expression LIKE pattern ESCAPE escape_character

In this syntax, if the expression matches the pattern, 
the LIKE operator returns 1. Otherwise, it returns 0.

MySQL provides two wildcard characters for constructing
 patterns: Percentage % and underscore _ .

The percentage ( % ) wildcard matches any string of zero 
or more characters.
The underscore ( _ ) wildcard matches any single character.
For example, s% matches any string starting with the character s such as sun and six. The se_ matches any string starting with  se and is followed by any character such as see and sea.

When the pattern contains the wildcard character 
and you want to treat it as a regular character, 
you can use the ESCAPE clause.


*/

/* Example 1: Find Patients Whose First 
Name Starts with 'J' */

SELECT * 
FROM   Patient
WHERE FirstName LIKE 'ja%';


-- Example 2: Find Patients Whose Last Name Contains 'son'

SELECT * 
FROM  Patient
WHERE LastName LIKE '%son%';


-- Example 3: Find Patients Whose City Ends with 'go'

SELECT * 
FROM   Patient
WHERE City LIKE '%go';


/*Example 4: Find Female Patients Whose 
First Name Contains 'a'
*/

SELECT *
FROM  Patient
WHERE FirstName LIKE '%a%' AND Gender = 'Female';


/* Example 5: Find Patients Whose 
   Last Name Starts with 'T'
*/


SELECT * 
FROM Patient
WHERE LastName LIKE '%n';


/* Example 6: Find Patients Who Live 
in Cities Starting with 'S'
*/

SELECT * 
FROM Patient
WHERE City LIKE 'S%';


/* Find Patients Whose First Name
 Starts with 'J' and Has Exactly Four Letters
 */

SELECT * 
FROM Patient
WHERE FirstName LIKE 's__';


-- This will return: John, Jane. Explanation: The pattern 'J___' means the first character must be 'J', followed by exactly three more characters, regardless of what they are.

/* 
Find Patients Whose Last Name Has 'a' 
as the Second Character
*/

SELECT * 
FROM  Patient
WHERE LastName LIKE '_a%';


/*

This will return: Taylor, Martinez, Garcia.
Explanation: The pattern '_a%' 
means the first character can be anything,
but the second character must be 'a', 
followed by any number of characters.

*/

/* 
Find Patients Whose First Name is
Five Letters Long and Ends with 'l'
*/
 
SELECT * 
FROM   Patient
WHERE  FirstName LIKE '_____l';

/*
This will return: Emma, Sara, Olivia.
Explanation: The pattern '____a' matches names with exactly five letters where the last character is 'a'.
*/

/* 

Find Patients Whose City Starts with
Any Character, Followed by 'e' and 'n'
 
*/

SELECT *
 FROM  Patient
WHERE  City LIKE '_en%';

/*

This will return: Denver.
Explanation: The pattern '_en%' 
matches any city name where the 
second and third letters are 'e' and 'n', respectively.

*/


SELECT * FROM Patient
WHERE LastName LIKE 's__t_';


/***********************************************************************************************

Primary Key
A Primary Key is a column 
(or a set of columns) that 
uniquely identifies each record in a table. 
It ensures that the values in this column are
unique and not NULL. Every table should have a
primary key to ensure data integrity.

Example of a Primary Key
Let’s say you have a Patient table 
where each patient must have a unique ID:



CREATE TABLE Patients (
    PatientId INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Age INT,
    City VARCHAR(50)
);



Explanation:
PatientId is the primary key in this table.
PRIMARY KEY makes sure that PatientId is unique for each row and cannot be NULL.
AUTO_INCREMENT means that MySQL will automatically generate a unique value for PatientId each time a new row is added.


Foreign Key
A Foreign Key is a column (or a set of columns)
that establishes a link between
data in two tables. It enforces a relationship 
between the values in one table and the primary key 
in another table. 

The foreign key helps maintain data integrity by 
ensuring that the values in one
table correspond to valid 
records in the related table.

Example of a Foreign Key
Let’s say you also have a Appointment table 
where each appointment is linked to a patient using 
the PatientId from the Patient table. Here, 
PatientId will be a foreign key.




CREATE TABLE Appointment (
    AppointmentId INT PRIMARY KEY AUTO_INCREMENT,
    PatientId INT,
    AppointmentDate DATE,
    DoctorName VARCHAR(50),
    FOREIGN KEY (PatientId) REFERENCES Patients(PatientId)
);



Explanation:
AppointmentId is the primary key for the Appointment table.
PatientId in the Appointment table is a foreign key that references the PatientId in the Patient table.
FOREIGN KEY (PatientId) REFERENCES Patient(PatientId) establishes a
 relationship where the PatientId in the Appointment table must match a valid PatientId in the Patient table.



How Primary Key and Foreign Key Work Together
Primary Key in Patient ensures each patient has a unique ID.
Foreign Key in Appointment ensures that every appointment is linked to a valid patient.
 If you try to insert a record in Appointment with a PatientId that doesn't exist in the Patient table, MySQL will return an error.



-- Adding a patient
INSERT INTO Patients (FirstName, LastName, Age, City)
VALUES ('Aman', 'Kim', 32, 'New York'),
       ('Ron', 'Watson', 32, 'New York'),
       ('Robbin', 'J', 32, 'New York')
       ;

-- Adding an appointment for the patient with PatientId = 1
INSERT INTO Appointment (PatientId, AppointmentDate, DoctorName)
VALUES (1, '2024-10-18', 'Dr. Smith'),
(1, '2024-11-25', 'Dr. Amit'),
(2, '2024-10-21', 'Dr. Rushi'),
(3, '2024-10-30', 'Dr. Ashh');


select * from patients;
select * from Appointment;

Explanation:
The first query adds a new patient, and the PatientId will be 1 because it's auto-incremented.
The second query adds an appointment for this patient using PatientId = 1. If the PatientId doesn't exist in the Patient table, the foreign key will prevent this insertion.


This setup ensures a relational integrity between the two tables, meaning the appointments are always linked to valid patients.



/**********************  Joins ***************/

-- inner join

select *
from   patients pt
       join Appointment apt on apt.patientid = pt.patientid ;
       
       
select pt.firstname as PatientFname,
       pt.Age,
       apt.Doctorname
from   patients pt
       join Appointment apt on apt.patientid = pt.patientid ; 

-- left join

select *
from   patients pt
       left join Appointment apt on apt.patientid = pt.patientid

-- jhkjhjkh

/*
jgjjkhkj
*/



