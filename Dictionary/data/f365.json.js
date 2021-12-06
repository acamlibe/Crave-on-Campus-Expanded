window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f365","name":"get_restaurant_id","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Campus_Eats_Fall2020@craveoncampus.chsvosjncpze.us-east-2.rds.amazonaws.com","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"get_restaurant_id"},{"field":"Type","value":"Function"}],"script":"BEGIN\r\n    DECLARE restaurant_id_var INT;\r\n    \r\n\r\n    SELECT restaurant_ID INTO restaurant_id_var \r\n    FROM restaurant\r\n    WHERE Restaurant_name = restaurant_name_var;\r\n    RETURN(restaurant_id_var);\r\nEND","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"int","custom_fields":{}},{"name":"restaurant_name_var","description":null,"mode":"IN","data_type":"varchar","custom_fields":{}}],"dependencies":{"uses":[],"used_by":[]},"imported_at":"2021-12-06 15:58"};