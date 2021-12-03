/* Create a view to get total_price of ALL restaurants with rating greater than 3 */

CREATE VIEW View_1 AS
SELECT  r.restaurant_id, r.restaurant_name, o.total_price
FROM restaurant AS r
INNER JOIN `order` AS o 
ON r.restaurant_id= o.restaurant_id
WHERE 
r.restaurant_ID = 
		(SELECT Restaurant_ID 
	     FROM RestaurantRatingTable
         WHERE Rating > 3
         ) 
GROUP BY r.restaurant_id
ORDER BY r.restaurant_id;

/* Create a view to rank ALL restaurants based on total_price*/
CREATE VIEW View_3 AS
 SELECT r.restaurant_id, r.restaurant_name, o.total_price,
 RANK()
 OVER (ORDER BY total_price DESC) AS Rank_Num
FROM restaurant AS r
INNER JOIN `order` AS o 
ON r.restaurant_id= o.restaurant_id
GROUP BY r.restaurant_id, total_price
ORDER BY Rank_Num;

/*Create a view to summarize driver rating, restaurant rating, AVG(delivery charge), 
SUM(total price) against every restaurant */

CREATE VIEW View_2 AS
SELECT o.restaurant_id, ROUND(AVG(o.delivery_charge),2) AS Avg_delivery_charge, ROUND(o.total_price,2) AS total_price, 
COUNT(o.order_id) AS number_of_orders, AVG(r.Rating) AS Avg_Restaurant_Rating, AVG(d.Rating) AS Avg_Driver_Rating
FROM `order` AS o
INNER JOIN RestaurantRatingTable AS r
ON o.restaurant_id=r.Restaurant_ID
INNER JOIN DriverRatingTable AS d
ON o.driver_id=d.Driver_ID
GROUP BY r.restaurant_id
ORDER BY r.restaurant_id;




