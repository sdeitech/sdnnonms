
CREATE TABLE Customer (
    CustomerId INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    PhoneNumber VARCHAR(15),
    Gender VARCHAR(10),
    Age INT,
    City VARCHAR(50),
    State VARCHAR(50),
    PostalCode VARCHAR(10),
    CreatedDate DATE
);


INSERT INTO Customer (FirstName, LastName, Email, PhoneNumber, Gender, Age, City, State, PostalCode, CreatedDate)
VALUES
('John', 'Doe', 'john.doe@example.com', '123-456-7890', 'Male', 32, 'New York', 'NY', '10001', '2024-01-01'),
('Jane', 'Smith', 'jane.smith@example.com', '987-654-3210', 'Female', 28, 'Los Angeles', 'CA', '90001', '2024-01-02'),
('Michael', 'Johnson', 'michael.j@example.com', '555-123-4567', 'Male', 45, 'Chicago', 'IL', '60601', '2024-01-03'),
('Emily', 'Davis', 'emily.davis@example.com', '555-987-6543', 'Female', 34, 'Houston', 'TX', '77001', '2024-01-04'),
('David', 'Brown', 'david.brown@example.com', '555-111-2222', 'Male', 29, 'Phoenix', 'AZ', '85001', '2024-01-05'),
('Sarah', 'Wilson', 'sarah.w@example.com', '555-333-4444', 'Female', 41, 'Philadelphia', 'PA', '19101', '2024-01-06'),
('James', 'Taylor', 'james.t@example.com', '555-555-6666', 'Male', 25, 'San Antonio', 'TX', '78201', '2024-01-07'),
('Olivia', 'Martinez', 'olivia.m@example.com', '555-777-8888', 'Female', 36, 'San Diego', 'CA', '92101', '2024-01-08'),
('Robert', 'Anderson', 'robert.a@example.com', '555-999-0000', 'Male', 47, 'Dallas', 'TX', '75201', '2024-01-09'),
('Sophia', 'Thomas', 'sophia.t@example.com', '555-222-3333', 'Female', 23, 'Austin', 'TX', '73301', '2024-01-10'),
('Emma', 'Miller', 'emma.m@example.com', '555-444-5555', 'Female', 31, 'San Francisco', 'CA', '94101', '2024-01-11'),
('Daniel', 'Garcia', 'daniel.g@example.com', '555-666-7777', 'Male', 38, 'Miami', 'FL', '33101', '2024-01-12'),
('Mia', 'Rodriguez', 'mia.r@example.com', '555-888-9999', 'Female', 30, 'Denver', 'CO', '80201', '2024-01-13'),
('Liam', 'Martinez', 'liam.m@example.com', '555-111-2223', 'Male', 28, 'Las Vegas', 'NV', '89101', '2024-01-14'),
('Isabella', 'Hernandez', 'isabella.h@example.com', '555-333-4445', 'Female', 26, 'Orlando', 'FL', '32801', '2024-01-15'),
('Noah', 'Lopez', 'noah.l@example.com', '555-555-6667', 'Male', 35, 'Seattle', 'WA', '98101', '2024-01-16'),
('Sophia', 'Gonzalez', 'sophia.g@example.com', '555-777-8889', 'Female', 24, 'Portland', 'OR', '97201', '2024-01-17'),
('William', 'Clark', 'william.c@example.com', '555-999-0001', 'Male', 46, 'Boston', 'MA', '02101', '2024-01-18'),
('Charlotte', 'Lewis', 'charlotte.l@example.com', '555-222-3334', 'Female', 29, 'Washington', 'DC', '20001', '2024-01-19'),
('Alexander', 'Young', 'alexander.y@example.com', '555-444-5556', 'Male', 40, 'Atlanta', 'GA', '30301', '2024-01-20'),
('Aiden', 'Hall', 'aiden.h@example.com', '555-666-7778', 'Male', 33, 'Sacramento', 'CA', '95801', '2024-01-21'),
('Amelia', 'Allen', 'amelia.a@example.com', '555-888-9990', 'Female', 27, 'Minneapolis', 'MN', '55401', '2024-01-22'),
('Lucas', 'King', 'lucas.k@example.com', '555-111-2224', 'Male', 31, 'Salt Lake City', 'UT', '84101', '2024-01-23'),
('Harper', 'Wright', 'harper.w@example.com', '555-333-4446', 'Female', 25, 'Tucson', 'AZ', '85701', '2024-01-24'),
('Benjamin', 'Scott', 'benjamin.s@example.com', '555-555-6668', 'Male', 38, 'Charlotte', 'NC', '28201', '2024-01-25'),
('Evelyn', 'Torres', 'evelyn.t@example.com', '555-777-8890', 'Female', 32, 'Indianapolis', 'IN', '46201', '2024-01-26'),
('Lucas', 'Baker', 'lucas.b@example.com', '555-999-0002', 'Male', 29, 'San Jose', 'CA', '95101', '2024-01-27'),
('Ava', 'Green', 'ava.g@example.com', '555-222-3335', 'Female', 26, 'Columbus', 'OH', '43201', '2024-01-28'),
('Jackson', 'Adams', 'jackson.a@example.com', '555-444-5557', 'Male', 35, 'Nashville', 'TN', '37201', '2024-01-29'),
('Ella', 'Nelson', 'ella.n@example.com', '555-666-7779', 'Female', 27, 'Kansas City', 'MO', '64101', '2024-01-30'),
('Henry', 'Carter', 'henry.c@example.com', '555-888-9991', 'Male', 42, 'Baltimore', 'MD', '21201', '2024-01-31'),
('Chloe', 'Mitchell', 'chloe.m@example.com', '555-999-0003', 'Female', 23, 'Milwaukee', 'WI', '53201', '2024-02-01'),
('Sebastian', 'Perez', 'sebastian.p@example.com', '555-111-2225', 'Male', 37, 'Oklahoma City', 'OK', '73101', '2024-02-02'),
('Avery', 'Roberts', 'avery.r@example.com', '555-333-4447', 'Female', 34, 'Louisville', 'KY', '40201', '2024-02-03'),
('Matthew', 'Turner', 'matthew.t@example.com', '555-555-6669', 'Male', 45, 'Albuquerque', 'NM', '87101', '2024-02-04'),
('Victoria', 'Parker', 'victoria.p@example.com', '555-777-8891', 'Female', 30, 'Fresno', 'CA', '93701', '2024-02-05'),
('Owen', 'Campbell', 'owen.c@example.com', '555-999-0004', 'Male', 29, 'Detroit', 'MI', '48201', '2024-02-06')



/*

Question 1:  Create a table named CustomerOrder that stores order details.             
             Ensure proper naming conventions are followed for the columns.
             
Question 2:  Insert sample data into the CustomerOrder table for 5 customers, ensuring that data types and formats are correct.

Question 3: Write a query to retrieve all customer details from the Customer table where the City is 'Dallas'.
 
Question 4: Retrieve the names and email addresses of all customers aged 30 and above.
 
Question 5: Write a query to find customers who were created after January 15, 2024.
 
Question 6: Write a query to find all customers whose first name starts with the letter 'J'.
 
Question 7: Write a query to retrieve customers whose email contains 'gmail'.
 
Question 8: Retrieve customers whose phone number ends with '1234'.
 
Question 9: Find customers whose last name contains the letter 'a' anywhere in the name.
 
Question 10: Write a query to find customers who live in cities where the name contains 'San'.
 
            


*/












