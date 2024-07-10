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