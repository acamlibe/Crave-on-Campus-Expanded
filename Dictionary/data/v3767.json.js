window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v3767","name":"restaurants_with_exceptional_drivers","subtype":"VIEW","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs82292024{color:#000000;background-color:transparent;font-family:Segoe UI;font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs82292024\">VIEW</span></p></body>\r\n                </html>","script":"select `r`.`restaurant_name` AS `restaurant_name`,`r`.`location` AS `location`,round(avg(`o`.`delivery_charge`),2) AS `avg_delivery_charge` from ((`Campus_Eats_Fall2020`.`order` `o` join `Campus_Eats_Fall2020`.`restaurant` `r` on((`o`.`restaurant_id` = `r`.`restaurant_id`))) join `Campus_Eats_Fall2020`.`RestaurantRatingTable` `rrt` on((`r`.`restaurant_id` = `rrt`.`Restaurant_ID`))) where exists(select `drt`.`Driver_ID` from `Campus_Eats_Fall2020`.`DriverRatingTable` `drt` where ((`drt`.`Rating` >= 4) and (`drt`.`Driver_ID` = `o`.`driver_id`))) group by `r`.`restaurant_name`,`r`.`location` order by `r`.`restaurant_name`,`r`.`location`","summary":[{"field":"Documentation","value":{"_type":"link","name":"Campus_Eats_Fall2020@craveoncampus.chsvosjncpze.us-east-2.rds.amazonaws.com","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"restaurants_with_exceptional_drivers"},{"field":"Type","value":"View"}],"columns":[{"id":"column-34779","object_id":"column-34779","name":"restaurant_name","name_without_path":"restaurant_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34780","object_id":"column-34780","name":"location","name_without_path":"location","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34781","object_id":"column-34781","name":"avg_delivery_charge","name_without_path":"avg_delivery_charge","description":null,"is_pk":false,"is_identity":false,"data_type":"double","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2021-12-06 16:11"};