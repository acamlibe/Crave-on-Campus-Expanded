window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v3763","name":"person_student","subtype":"VIEW","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs82292024{color:#000000;background-color:transparent;font-family:Segoe UI;font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs82292024\">VIEW</span></p></body>\r\n                </html>","script":"select `a`.`person_id` AS `person_id`,`a`.`person_name` AS `person_name`,`a`.`person_email` AS `person_email`,`a`.`cell` AS `cell` from `Campus_Eats_Fall2020`.`person` `a` where `a`.`person_id` in (select `Campus_Eats_Fall2020`.`student`.`person_id` from `Campus_Eats_Fall2020`.`student` where (`Campus_Eats_Fall2020`.`student`.`graduation_year` = 2019))","summary":[{"field":"Documentation","value":{"_type":"link","name":"Campus_Eats_Fall2020@craveoncampus.chsvosjncpze.us-east-2.rds.amazonaws.com","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"person_student"},{"field":"Type","value":"View"}],"columns":[{"id":"column-34762","object_id":"column-34762","name":"person_id","name_without_path":"person_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34763","object_id":"column-34763","name":"person_name","name_without_path":"person_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34764","object_id":"column-34764","name":"person_email","name_without_path":"person_email","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34765","object_id":"column-34765","name":"cell","name_without_path":"cell","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2021-11-18 23:58"};