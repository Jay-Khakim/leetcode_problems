-- 1378. Replace Employee ID With The Unique Identifier

-- Write a solution to show the unique ID of each user, If a user does not have a unique ID replace just show null.

-- Return the result table in any order.

-- The result format is in the following example.


SELECT unique_id, name 
FROM EmployeeUNI RIGHT JOIN Employees
ON EmployeeUNI.id = Employees.id






-- -- 1068. Product Sales Analysis I
-- Write a solution to report the product_name, year, and price for each sale_id in the Sales table.

-- Return the resulting table in any order.

-- The result format is in the following example.

SELECT product_name, year, price 
FROM Sales INNER JOIN Product 
ON Sales.product_id = Product.product_id




-- 1581. Customer Who Visited but Did Not Make Any Transactions
-- Write a solution to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits.

-- Return the result table sorted in any order.

-- The result format is in the following example.



select customer_id, count(*) as count_no_trans
from Visits
where visit_id not in(select visit_id from Transactions)
group by customer_id;




--197. Rising Temperature
-- Write a solution to find all dates' Id with higher temperatures compared to its previous dates (yesterday).

-- Return the result table in any order.

-- The result format is in the following example.

SELECT W1.id
FROM Weather W1
JOIN Weather W2
ON W1.recordDate = DATE_ADD(W2.recordDate, INTERVAL 1 DAY)
WHERE W1.temperature > W2.temperature;




-- id is the primary key (column with unique values) for this table.
-- Each row of this table indicates the name of an employee, their department, and the id of their manager.
-- If managerId is null, then the employee does not have a manager.
-- No employee will be the manager of themself.
 

-- Write a solution to find managers with at least five direct reports.

-- Return the result table in any order.

-- The result format is in the following example.

 

SELECT 
    e1.name
FROM 
    Employee e1
JOIN (
    SELECT managerId, COUNT(*) AS directReports
    FROM Employee
    GROUP BY managerId
    HAVING COUNT(*) >= 5
) E2 ON e1.id = E2.managerId;


-- 1661. Average Time of Process per Machine
-- There is a factory website that has several machines each running the same number of processes. Write a solution to find the average time each machine takes to complete a process.

-- The time to complete a process is the 'end' timestamp minus the 'start' timestamp. The average time is calculated by the total time to complete every process on the machine divided by the number of processes that were run.

-- The resulting table should have the machine_id along with the average time as processing_time, which should be rounded to 3 decimal places.

-- Return the result table in any order.
select a1.machine_id, round(avg(a2.timestamp-a1.timestamp), 3) as processing_time
from Activity a1 
join Activity a2
on a1.machine_id=a2.machine_id and a1.process_id=a2.process_id
and a1.activity_type = 'start' and a2.activity_type='end'
group by a1.machine_id



-- Write a solution to report the movies with an odd-numbered ID and a description that is not "boring".

-- Return the result table ordered by rating in descending order.

-- The result format is in the following example.

SELECT * FROM Cinema
Where 
    cinema.id % 2 <> 0 
    and cinema.description <> "boring"
ORDER BY rating DESC;



-- Write a solution to find the average selling price for each product. average_price should be rounded to 2 decimal places.

-- Return the result table in any order.

-- The result format is in the following example.


select p.product_id, ifnull(round(sum(p.price * u.units)/sum(u.units), 2), 0) as average_price
from Prices p 
LEFT JOIN UnitsSold u
ON p.product_id = u.product_id 
and u.purchase_date >= p.start_date
and u.purchase_date <= p.end_date
GROUP BY p.product_id


-- 1075. Project Employees I
-- Write an SQL query that reports the average experience years of all the employees for each project, rounded to 2 digits.

-- Return the result table in any order.

-- The query result format is in the following example.

SELECT p.project_id, ROUND(AVG(e.experience_years),2) AS average_years
FROM Project p LEFT JOIN Employee e
ON p.employee_id = e.employee_id
GROUP BY p.project_id


-- 1633. Percentage of Users Attended a Contest

-- Write a solution to find the percentage of the users registered in each contest rounded to two decimals.

-- Return the result table ordered by percentage in descending order. In case of a tie, order it by contest_id in ascending order.

-- The result format is in the following example.
SELECT contest_id, 
ROUND(COUNT(DISTINCT user_id) * 100 / (SELECT COUNT(user_id) FROM Users), 2) AS percentage
FROM Register
GROUP BY contest_id
ORDER BY percentage DESC, contest_id



-- 1211. Queries Quality and Percentage
-- We define query quality as:

-- The average of the ratio between query rating and its position.

-- We also define poor query percentage as:

-- The percentage of all queries with rating less than 3.

-- Write a solution to find each query_name, the quality and poor_query_percentage.

-- Both quality and poor_query_percentage should be rounded to 2 decimal places.

-- Return the result table in any order.

-- The result format is in the following example.

 
SELECT query_name, 
ROUND(AVG(rating/position),2) AS quality,
ROUND(AVG(IF(RATING<3,1,0))*100, 2) AS poor_query_percentage
FROM Queries
WHERE query_name IS NOT NULL
GROUP BY query_name


-- 1193. Monthly Transactions I
-- Write an SQL query to find for each month and country, the number of transactions and their total amount, the number of approved transactions and their total amount.

-- Return the result table in any order.

-- The query result format is in the following example.
SELECT  SUBSTR(trans_date,1,7) as month, country, count(id) as trans_count, SUM(CASE WHEN state = 'approved' then 1 else 0 END) as approved_count, SUM(amount) as trans_total_amount, SUM(CASE WHEN state = 'approved' then amount else 0 END) as approved_total_amount
FROM Transactions
GROUP BY month, country





-- 1174. Immediate Food Delivery II
-- If the customer's preferred delivery date is the same as the order date, then the order is called immediate; otherwise, it is called scheduled.

-- The first order of a customer is the order with the earliest order date that the customer made. 
-- It is guaranteed that a customer has precisely one first order.

-- Write a solution to find the percentage of immediate orders in the first orders of all customers, rounded to 2 decimal places.

-- The result format is in the following example.
WITH first_orders AS (
    SELECT customer_id, min(order_date) as min_date
    FROM delivery
    GROUP BY customer_id
)

SELECT ROUND((SUM(CASE WHEN min_date = customer_pref_delivery_date THEN 1 ELSE 0 END )/
    COUNT(DISTINCT fo.customer_id))*100, 2) immediate_percentage

FROM first_orders fo JOIN delivery d
ON fo.customer_id = d.customer_id AND fo.min_date=d.order_date





-- 1141. User Activity for the Past 30 Days I
-- Write a solution to find the daily active user count for a period of 30 days ending 2019-07-27 inclusively.
--  A user was active on someday if they made at least one activity on that day.

-- Return the result table in any order.

-- The result format is in the following example.
SELECT activity_date AS day, count(DISTINCT user_id) AS active_users
FROM Activity
WHERE activity_date BETWEEN DATE('2019-06-28') AND DATE('2019-07-27')
GROUP BY activity_date
ORDER BY activity_date;






-- 596. Classes More Than 5 Students
-- Write a solution to find all the classes that have at least five students.

-- Return the result table in any order.

-- The result format is in the following example.



SELECT class 
FROM Courses 
GROUP BY class 
HAVING COUNT(DISTINCT student) >= 5;




-- 550. Game Play Analysis IV
-- Write a solution to report the fraction of players that logged in again on the day after the day they first logged in, rounded to 2 decimal places. In other words, you need to count the number of players that logged in for at least two consecutive days starting from their first login date, then divide that number by the total number of players.

-- The result format is in the following example.

select 
    round(sum(temp)/count(distinct player_id), 2) as fraction
from 
(
  select
    player_id,
    datediff(event_date, min(event_date) over(partition by player_id)) = 1 as temp
  from 
    Activity
) as t







-- 2356. Number of Unique Subjects Taught by Each Teacher
-- Write a solution to calculate the number of unique subjects each teacher teaches in the university.

-- Return the result table in any order.

-- The result format is shown in the following example.

SELECT teacher_id, COUNT(DISTINCT subject_id ) AS cnt 
FROM Teacher
GROUP BY teacher_id






-- 619. Biggest Single Number
-- A single number is a number that appeared only once in the MyNumbers table.

-- Find the largest single number. If there is no single number, report null.

-- The result format is in the following example.
SELECT MAX(num) AS num
FROM (
    SELECT num
    FROM MyNumbers
    GROUP BY num
    HAVING COUNT(num) = 1
) AS unique_numbers;




-- 1070. Product Sales Analysis III
-- Write a solution to select the product id, year, quantity, and price for the first year of every product sold.

-- Return the resulting table in any order.

-- The result format is in the following example.
WITH FY AS (
    SELECT product_id, MIN(year) AS minyear FROM Sales 
    GROUP BY product_id 
)

SELECT s.product_id, s.year AS first_year, s.quantity, s.price
FROM Sales s 
INNER JOIN FY ON FY.product_id = s.product_id AND s.year = FY.minyear;


-- 1045. Customers Who Bought All Products
-- Write a solution to report the customer ids from the Customer table that bought all the products in the Product table.

-- Return the result table in any order.

-- The result format is in the following example.
SELECT customer_id
FROM Customer 
GROUP BY customer_id
HAVING COUNT(DISTINCT product_key) = (SELECT COUNT(product_key) FROM Product)



-- 1731. The Number of Employees Which Report to Each Employee

-- For this problem, we will consider a manager an employee who has at least 1 other employee reporting to them.

-- Write a solution to report the ids and the names of all managers, the number of employees who report directly to them, and the average age of the reports rounded to the nearest integer.

-- Return the result table ordered by employee_id.

-- The result format is in the following example.

 

SELECT mgr.employee_id, mgr.name, 
COUNT(emp.employee_id) AS reports_count, ROUND(AVG(emp.age)) AS average_age
FROM employees emp JOIN employees mgr
ON emp.reports_to = mgr.employee_id
GROUP BY employee_id
ORDER BY employee_id




-- 1789. Primary Department for Each Employee
-- Employees can belong to multiple departments. When the employee joins other departments, they need to decide which department is their primary department. Note that when an employee belongs to only one department, their primary column is 'N'.

-- Write a solution to report all the employees with their primary department. For employees who belong to one department, report their only department.

-- Return the result table in any order.

-- The result format is in the following example.
SELECT 
  employee_id, 
  department_id 
FROM 
  Employee 
WHERE 
  primary_flag = 'Y' 
UNION 

SELECT 
  employee_id, 
  department_id 
FROM 
  Employee 
GROUP BY 
  employee_id 
HAVING 
  COUNT(employee_id) = 1;


  SELECT employee_id, department_id
FROM Employee
WHERE primary_flag='Y' OR 
    employee_id in
    (SELECT employee_id
    FROM Employee
    Group by employee_id
    having count(employee_id)=1)




-- 610. Triangle Judgement
-- Report for every three line segments whether they can form a triangle.

-- Return the result table in any order.

-- The result format is in the following example.
SELECT x, y, z,
CASE WHEN x+y>z AND y+z > x AND z+x > y THEN "Yes" ELSE "No" END
AS triangle FROM Triangle

SELECT *, IF(x+y>z AND y+z>x AND z+x>y, "Yes", "No") AS triangle FROM Triangle




-- 180. Consecutive Numbers
-- Find all numbers that appear at least three times consecutively.

-- Return the result table in any order.

-- The result format is in the following example.

SELECT distinct l1.num as ConsecutiveNums
FROM
    Logs l1,
    Logs l2,
    Logs l3

WHERE
    l1.id = l2.id-1
    and l2.id = l3.id-1
    and l1.num= l2.num
    and l2.num= l3.num






-- 1164. Product Price at a Given Date
-- Write a solution to find the prices of all products on 2019-08-16. Assume the price of all products before any change is 10.

-- Return the result table in any order.

-- The result format is in the following example.

# Write your MySQL query statement below
select 
    distinct product_id,
    10 as price
from 
    products
group by
    product_id
having
    min(change_date) > "2019-08-16"

union

select 
    product_id, 
    new_price
from 
    Products 
where 
    (product_id, change_date) in(
                                select 
                                    product_id, 
                                    max(change_date) as recent_date
                                from 
                                    Products
                                where 
                                    change_date <= "2019-08-16"
                                group by 
                                    product_id
                                )




-- 608. Tree Node
-- Each node in the tree can be one of three types:

-- "Leaf": if the node is a leaf node.
-- "Root": if the node is the root of the tree.
-- "Inner": If the node is neither a leaf node nor a root node.
-- Write a solution to report the type of each node in the tree.

-- Return the result table in any order.

-- The result format is in the following example.

 

SELECT id, CASE WHEN p_id IS NULL THEN "Root"
WHEN id NOT IN (
    SELECT p_id
    FROM Tree
    WHERE p_id IS NOT NULL
) THEN "Leaf" ELSE "Inner" END AS type
FROM Tree
ORDER BY id



-- 1204. Last Person to Fit in the Bus
-- There is a queue of people waiting to board a bus. However, the bus has a weight limit of 1000 kilograms, so there may be some people who cannot board.

-- Write a solution to find the person_name of the last person that can fit on the bus without exceeding the weight limit. The test cases are generated such that the first person does not exceed the weight limit.

-- The result format is in the following example.

WITH CTS AS (
    SELECT turn, person_id, person_name, weight, SUM(weight) OVER (ORDER BY turn) AS total_weight
    FROM Queue
    ORDER BY turn
)

SELECT person_name
FROM CTS
WHERE total_weight <= 1000
ORDER BY total_weight DESC
LIMIT 1;





-- 1907. Count Salary Categories
-- Write a solution to calculate the number of bank accounts for each salary category. The salary categories are:

-- "Low Salary": All the salaries strictly less than $20000.
-- "Average Salary": All the salaries in the inclusive range [$20000, $50000].
-- "High Salary": All the salaries strictly greater than $50000.
-- The result table must contain all three categories. If there are no accounts in a category, return 0.

-- Return the result table in any order.

-- The result format is in the following example.

WITH CTS AS (
    SELECT
        CASE 
            WHEN income < 20000 THEN "Low Salary"  
            WHEN income > 50000 THEN "High Salary" 
            ELSE "Average Salary" END 
            AS category
    FROM Accounts
), 
Categories AS(
    SELECT 'Low Salary' AS category
    UNION ALL
    SELECT 'Average Salary' AS category
    UNION ALL
    SELECT 'High Salary' AS category
)
SELECT 
    Categories.category, 
    COUNT(CTS.category) AS accounts_count
FROM Categories
LEFT JOIN CTS
on Categories.category = CTS.category
GROUP BY Categories.category




-- 1978. Employees Whose Manager Left the Company|
-- Find the IDs of the employees whose salary is strictly less than $30000 and whose manager left the company. When a manager leaves the company, their information is deleted from the Employees table, but the reports still have their manager_id set to the manager that left.

-- Return the result table ordered by employee_id.

-- The result format is in the following example.


SELECT employee_id
FROM Employees
WHERE salary <30000 AND manager_id NOT IN (SELECT employee_id FROM Employees)
ORDER BY employee_id





-- 626. Exchange Seats
-- Write a solution to swap the seat id of every two consecutive students. If the number of students is odd, the id of the last student is not swapped.

-- Return the result table ordered by id in ascending order.

-- The result format is in the following example.

SELECT 
    CASE 
        WHEN id = (SELECT MAX(id) FROM seat) AND id % 2 = 1
            THEN id 
        WHEN id % 2 = 1
            THEN id + 1
        ELSE id - 1
    END AS id,
    student
FROM seat
ORDER BY id

-- 1667. Fix Names in a Table
-- Write a solution to fix the names so that only the first character is uppercase and the rest are lowercase.

-- Return the result table ordered by user_id.

-- The result format is in the following example.

SELECT user_id, 
    CONCAT(UPPER(SUBSTRING(name, 1, 1)), LCASE(SUBSTRING(name, 2))) as name
FROM Users
ORDER BY user_id



-- 1341. Movie Rating

-- Write a solution to:

-- Find the name of the user who has rated the greatest number of movies. In case of a tie, return the lexicographically smaller user name.
-- Find the movie name with the highest average rating in February 2020. In case of a tie, return the lexicographically smaller movie name.
-- The result format is in the following example.


(SELECT name AS results
FROM MovieRating JOIN Users USING(user_id)
GROUP BY name
ORDER BY COUNT(*) DESC, name
LIMIT 1)

UNION ALL

(SELECT title AS results
FROM MovieRating JOIN Movies USING(movie_id)
WHERE EXTRACT(YEAR_MONTH FROM created_at) = 202002
GROUP BY title
ORDER BY AVG(rating) DESC, title
LIMIT 1);




-- 1321. Restaurant Growth
-- You are the restaurant owner and you want to analyze a possible expansion (there will be at least one customer every day).

-- Compute the moving average of how much the customer paid in a seven days window (i.e., current day + 6 days before). average_amount should be rounded to two decimal places.

-- Return the result table ordered by visited_on in ascending order.

-- The result format is in the following example.
WITH DaySum AS (
    SELECT 
        visited_on, 
        SUM(amount) AS amount
    FROM Customer
    GROUP BY visited_on
)

SELECT 
    a.visited_on,
    SUM(b.amount) AS amount,
    ROUND(AVG(b.amount), 2) AS average_amount
FROM DaySum a, DaySum b
WHERE DATEDIFF(a.visited_on, b.visited_on) BETWEEN 0 AND 6
GROUP BY a.visited_on
HAVING COUNT(*)>6
ORDER BY a.visited_on



-- 196. Delete Duplicate Emails
-- Write a solution to delete all duplicate emails, keeping only one unique email with the smallest id.

-- For SQL users, please note that you are supposed to write a DELETE statement and not a SELECT one.

-- The result format is in the following example.

 

DELETE p1 
FROM person p1, person p2
WHERE p1.email = p2.email AND p1.id>p2.id


--Another solution
DELETE FROM Person
WHERE id NOT IN (
    SELECT min_id 
    FROM (
        SELECT MIN(id) AS min_id 
        FROM Person 
        GROUP BY Email
        ) AS a)



-- 176. Second Highest Salary
-- Write a solution to find the second highest salary from the Employee table. If there is no second highest salary, return null (return None in Pandas).

-- The result format is in the following example.

SELECT MAX(salary) AS SecondHighestSalary
FROM Employee 
WHERE salary < (SELECT MAX(salary)FROM Employee);

--Second Solution

select
(select distinct Salary 
from Employee order by salary desc 
limit 1 offset 1) 
as SecondHighestSalary;



-- 1179. Reformat Department Table
-- Reformat the table such that there is a department id column and a revenue column for each month.

-- Return the result table in any order.

-- The result format is in the following example.

SELECT Department.id,
sum(if(month='Jan',revenue,null)) as Jan_Revenue,
sum(if(month='Feb',revenue,null)) as Feb_Revenue,
sum(if(month='Mar',revenue,null)) as Mar_Revenue,
sum(if(month='Apr',revenue,null)) as Apr_Revenue,
sum(if(month='May',revenue,null)) as May_Revenue,
sum(if(month='Jun',revenue,null)) as Jun_Revenue,
sum(if(month='Jul',revenue,null)) as Jul_Revenue,
sum(if(month='Aug',revenue,null)) as Aug_Revenue,
sum(if(month='Sep',revenue,null)) as Sep_Revenue,
sum(if(month='Oct',revenue,null)) as Oct_Revenue,
sum(if(month='Nov',revenue,null)) as Nov_Revenue,
sum(if(month='Dec',revenue,null)) as Dec_Revenue
from Department 
GROUP BY id;



-- 1484. Group Sold Products By The Date
-- Write a solution to find for each date the number of different products sold and their names.

-- The sold products names for each date should be sorted lexicographically.

-- Return the result table ordered by sell_date.

-- The result format is in the following example.
SELECT
    sell_date, 
    COUNT(DISTINCT product) AS num_sold, 
    GROUP_CONCAT(
        DISTINCT product 
        ORDER BY product ASC 
        SEPARATOR ','
    ) AS products
FROM Activities 
GROUP BY sell_date 
ORDER BY sell_date ASC;



-- 1327. List the Products Ordered in a Period
-- Write a solution to get the names of products that have at least 100 units ordered in February 2020 and their amount.

-- Return the result table in any order.

-- The result format is in the following example.

SELECT p.product_name, SUM(o.unit) as unit
FROM Products p 
JOIN Orders o 
ON p.product_id = o.product_id
WHERE DATE(o.order_date) BETWEEN '2020-02-01' AND '2020-02-29'
GROUP BY o.product_id
HAVING unit >= 100


-- 1517. Find Users With Valid E-Mails
-- Write a solution to find the users who have valid emails.

-- A valid e-mail has a prefix name and a domain where:

-- The prefix name is a string that may contain letters (upper or lower case), digits, underscore '_', period '.', and/or dash '-'. The prefix name must start with a letter.
-- The domain is '@leetcode.com'.
-- Return the result table in any order.

-- The result format is in the following example.
SELECT *
FROM Users
WHERE 
    mail REGEXP '^[a-zA-Z][a-zA-Z0-9._-]*@leetcode\\.com$';






-- 602. Friend Requests II: Who Has the Most Friends
-- Write a solution to find the people who have the most friends and the most friends number.

-- The test cases are generated so that only one person has the most friends.

-- The result format is in the following example.

 


WITH CTS AS (SELECT requester_id  as friends
FROM RequestAccepted

UNION ALL

SELECT accepter_id  as friends
FROM RequestAccepted)


SELECT friends as id, COUNT( friends) as num
FROM CTS
GROUP BY id
ORDER BY num DESC
LIMIT 1
