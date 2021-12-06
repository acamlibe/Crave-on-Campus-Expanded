window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v3763","name":"most_expensive_restaurants","subtype":"VIEW","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs82292024{color:#000000;background-color:transparent;font-family:Segoe UI;font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs82292024\">VIEW</span></p></body>\r\n                </html>","script":"select `r`.`restaurant_id` AS `restaurant_id`,`r`.`restaurant_name` AS `restaurant_name`,`o`.`total_price` AS `total_price`,rank() OVER (ORDER BY `o`.`total_price` desc )  AS `Rank_Num` from (`Campus_Eats_Fall2020`.`restaurant` `r` join `Campus_Eats_Fall2020`.`order` `o` on((`r`.`restaurant_id` = `o`.`restaurant_id`))) group by `r`.`restaurant_id`,`o`.`total_price` order by `Rank_Num`","summary":[{"field":"Documentation","value":{"_type":"link","name":"Campus_Eats_Fall2020@craveoncampus.chsvosjncpze.us-east-2.rds.amazonaws.com","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"most_expensive_restaurants"},{"field":"Type","value":"View"}],"columns":[{"id":"column-34760","object_id":"column-34760","name":"restaurant_id","name_without_path":"restaurant_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34761","object_id":"column-34761","name":"restaurant_name","name_without_path":"restaurant_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34762","object_id":"column-34762","name":"total_price","name_without_path":"total_price","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34763","object_id":"column-34763","name":"Rank_Num","name_without_path":"Rank_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"unsigned bigint","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2021-12-06 15:58"};