window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v3766","name":"restaurant_order_summary","subtype":"VIEW","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs82292024{color:#000000;background-color:transparent;font-family:Segoe UI;font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs82292024\">VIEW</span></p></body>\r\n                </html>","script":"select `o`.`restaurant_id` AS `restaurant_id`,round(avg(`o`.`delivery_charge`),2) AS `avg_delivery_charge`,round(`o`.`total_price`,2) AS `total_price`,count(`o`.`order_id`) AS `number_of_orders`,avg(`r`.`Rating`) AS `Avg_Restaurant_Rating`,avg(`d`.`Rating`) AS `Avg_Driver_Rating` from ((`Campus_Eats_Fall2020`.`order` `o` join `Campus_Eats_Fall2020`.`RestaurantRatingTable` `r` on((`o`.`restaurant_id` = `r`.`Restaurant_ID`))) join `Campus_Eats_Fall2020`.`DriverRatingTable` `d` on((`o`.`driver_id` = `d`.`Driver_ID`))) group by `r`.`Restaurant_ID` order by `r`.`Restaurant_ID`","summary":[{"field":"Documentation","value":{"_type":"link","name":"Campus_Eats_Fall2020@craveoncampus.chsvosjncpze.us-east-2.rds.amazonaws.com","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"restaurant_order_summary"},{"field":"Type","value":"View"}],"columns":[{"id":"column-34773","object_id":"column-34773","name":"restaurant_id","name_without_path":"restaurant_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34774","object_id":"column-34774","name":"avg_delivery_charge","name_without_path":"avg_delivery_charge","description":null,"is_pk":false,"is_identity":false,"data_type":"double","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34775","object_id":"column-34775","name":"total_price","name_without_path":"total_price","description":null,"is_pk":false,"is_identity":false,"data_type":"double","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34776","object_id":"column-34776","name":"number_of_orders","name_without_path":"number_of_orders","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34777","object_id":"column-34777","name":"Avg_Restaurant_Rating","name_without_path":"Avg_Restaurant_Rating","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34778","object_id":"column-34778","name":"Avg_Driver_Rating","name_without_path":"Avg_Driver_Rating","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2021-12-06 15:58"};