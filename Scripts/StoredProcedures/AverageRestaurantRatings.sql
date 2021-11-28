USE `Campus_Eats_Fall2020`;
DROP procedure IF EXISTS `average_restaurant_ratings`;

DELIMITER $$
CREATE PROCEDURE `average_restaurant_ratings` ()
BEGIN
    SELECT AVG (RATING)
    FROM RestaurantRatingTable;
END$$

DELIMITER ;

CALL average_restaurant_ratings;