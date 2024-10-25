
/*****************************************************************************
                            MYSQL Questions              Total Marks:- 50
******************************************************************************


Execute Below Tables and Try to solve the Questions */

CREATE DATABASE ABC;
USE ABC;
CREATE TABLE Customer (
    CustomerId INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE,
    PhoneNumber VARCHAR(15) DEFAULT 'N/A',
    Gender VARCHAR(10),
    Age INT CHECK (Age >= 18),  
    CreatedDate DATE NULL 
);

INSERT INTO Customer (FirstName, LastName, Email, Gender, Age)
VALUES
('Ramesh', 'Singh', 'john.doe@example.com', 'Male', 32),
('Sam', 'Smith', 'jane.smith@example.com', 'Female', 28),
('Kim', 'Kum', 'Kum.smith@example.com', 'Female', 28),
('Zam', 'Zum', 'Zum.smith@example.com', 'Female', 28),
('Suresh', 'Varma', 'Varma.smith@example.com', 'Female', 23),
('Mark', 'Liam', 'Liam.smith@example.com', 'Female', 21),
('Susan', 'Lee', 'Lee.smith@example.com', 'Female', 22),
('Kripan', 'Wagh', 'Wagh.smith@example.com', 'Female', 24),
('Lili', 'james', 'james.smith@example.com', 'Female', 25);


CREATE TABLE CustomerAddress (
    AddressId INT PRIMARY KEY AUTO_INCREMENT,
    CustomerId INT NOT NULL,
    AddressLine1 VARCHAR(100) NOT NULL,
    AddressLine2 VARCHAR(100),
    City VARCHAR(50) NOT NULL,
    State VARCHAR(50) NOT NULL,
    PostalCode VARCHAR(10),
    FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId) 
);

-- Insert sample data
INSERT INTO CustomerAddress (CustomerId, AddressLine1, City, State, PostalCode)
VALUES
(1, '123 Main St', 'New York', 'NY', '10001'),
(2, '456 Elm St', 'Los Angeles', 'CA', '90001'),
(9, '456 Elm St', 'Los Angeles', 'CA', '90001'),
(8, '456 Elm St', 'Los Angeles', 'CA', '90001'),
(5, '456 Elm St', 'Los Angeles', 'CA', '90001'),
(4, '456 Elm St', 'Los Angeles', 'CA', '90001'),
(3, '456 Elm St', 'Los Angeles', 'CA', '90001'),
(7, '456 Elm St', 'Los Angeles', 'CA', '90001');



CREATE TABLE Product (
    ProductId INT PRIMARY KEY AUTO_INCREMENT,
    ProductName VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL CHECK (Price > 0), 
    Stock INT DEFAULT 0
);

INSERT INTO Product (ProductName, Price, Stock)
VALUES
('Laptop', 1200.00, 50),
('Smartphone', 800.00, 30),
('Telephone', 1200.00, 50),
('Watch', 800.00, 30),
('Mouse', 1000.00, 50),
('Monitor', 1400.00, 30),
('Bycycle', 6968.00, 50),
('TV', 3256.00, 30),
('AeroPlane', 858585.00, 50),
('Jet', 6598745.00, 30);


CREATE TABLE Orders(
    OrderId INT PRIMARY KEY AUTO_INCREMENT,
    CustomerId INT NOT NULL,
    OrderDate DATE NULL,
    TotalAmount DECIMAL(10, 2) NOT NULL CHECK (TotalAmount > 0),
    FOREIGN KEY (CustomerId) REFERENCES Customer(CustomerId) ON DELETE CASCADE
);

INSERT INTO Orders (CustomerId, OrderDate, TotalAmount)
VALUES
(1, '2024-01-15', 1500.00),
(2, '2024-01-16', 800.00),
(1, '2024-01-20', 250.00),
(3, '2024-01-18', 600.00),
(2, '2024-01-19', 450.00),
(5, '2024-02-20', 250.00),
(6, '2024-03-18', 600.00),
(7, '2024-04-19', 450.00),
(8, '2024-04-4', 250.00),
(7, '2024-03-18', 600.00),
(5, '2024-06-19', 450.00),
(5, '2024-08-8', 250.00),
(9, '2024-05-3', 600.00),
(9, '2024-01-31', 450.00);


CREATE TABLE OrderProduct (
    OrderId INT NOT NULL,
    ProductId INT NOT NULL,
    Quantity INT NOT NULL DEFAULT 1 CHECK (Quantity > 0),
    PRIMARY KEY (OrderId, ProductId),
    FOREIGN KEY (OrderId) REFERENCES Orders(OrderId) ON DELETE CASCADE,
    FOREIGN KEY (ProductId) REFERENCES Product(ProductId) ON DELETE CASCADE
);

SELECT * 
FROM OrderProduct;

INSERT INTO OrderProduct (OrderId, ProductId, Quantity)
VALUES
(1, 1, 2), 
(1, 2, 1), 
(1, 3, 1),
(2, 5, 3),
(2, 6, 4),
(7, 9, 2),
(7, 9, 2),
(8, 2, 1),
(9, 2, 1); 


/*

1] Retrieve a list of all customers who have placed an order, showing their FirstName, LastName, 
   and TotalAmount from the Orders table.

2] Write a query to fetch all orders along with the ProductName and 
   Quantity for each product in the order.

3] Find the FirstName and LastName of customers who live in the city of 
   Los Angeles and have placed an order. Include the OrderDate and TotalAmount in your results.

4] List the FirstName, LastName, and AddressLine1 for customers who have placed an order in January 2024.
   
5] Get a list of CustomerId, OrderId, and the total number of products ordered by each customer.

6] List all customers along with their address information, if available.
   Show the CustomerId, FirstName, LastName, City, and State.

7] Write a query to find all customers who have never placed an order. 
   Show their FirstName, LastName, and Email.

8] Retrieve a list of all orders and display the FirstName and LastName of the customers,
   even if the customer has no associated address.

9] List all products along with the total number of orders 
   placed for each product. Include products that have never been ordered.

10] Write a query to display all FirstName, LastName, OrderId, 
    and OrderDate of customers. Ensure that customers who have not 
	placed any orders are also included in the results.

11] Retrieve a list of customers whose Email addresses contain the
    string "smith". Display their FirstName, LastName, and Email.


12] Write a query to find all customers whose FirstName starts with 
    the letter 'S'. Show the FirstName, LastName, and PhoneNumber.

13] Find all customers whose LastName ends with the letter 'm'. 
    Display their FirstName, LastName, and Email.

14] Retrieve a list of customers whose AddressLine1 contains the 
    word "Elm". Show their FirstName, LastName, and AddressLine1.


15] Write a query to display all customers whose FirstName starts 
    with 'K' or ends with 'n'. Show the FirstName, LastName, and Email.

16] List all customers who are either 28 years old or live in New York.
    Show their FirstName, LastName, Age, and City.

17] Write a query to find all products with a price between 500 and 2000. 
    Display their ProductName, Price, and Stock.

18] Retrieve a list of customers who live in either 'New York' or 'Los Angeles'.
    Show their FirstName, LastName, City, and State.

19] Write a query to display all orders placed between '2024-01-15' and '2024-03-18'.
    Show the OrderId, CustomerId, OrderDate, and TotalAmount.

20] Find all products that are either priced at 1200 or have a stock of 50. 
    Display their ProductName, Price, and Stock.



*/

-- 1] Retrieve a list of all customers who have placed an order, showing their FirstName, LastName, 
   -- and TotalAmount from the Orders table
   
SELECT c.FirstName,
	   c.LastName,
       ordrs.TotalAmount
FROM Customer as c
INNER JOIN Orders as ordrs ON ordrs.CustomerId = c.CustomerId;


-- 2] Write a query to fetch all orders along with the ProductName and 
   -- Quantity for each product in the order;
   
SELECT p.ProductName,
       op.quantity
FROM Product as p
INNER JOIN OrderProduct as op ON op.ProductId = p.ProductId;
       
-- 3]Find the FirstName and LastName of customers who live in the city of 
 --   Los Angeles and have placed an order. Include the OrderDate and TotalAmount in your results;

SELECT c.FirstName,
       c.LastName, 
       ordr.OrderDate ,
	   ordr.TotalAmount,
       ca.city
FROM Customer as c
INNER JOIN Orders as ordr ON ordr.CustomerId = c.CustomerId
INNER JOIN CustomerAddress as ca ON ca.CustomerId = c.CustomerId
WHERE city = 'Los Angeles'
   
   
