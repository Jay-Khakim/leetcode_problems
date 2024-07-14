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