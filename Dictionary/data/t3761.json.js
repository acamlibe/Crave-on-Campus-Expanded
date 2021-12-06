window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3761","name":"vehicle","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Campus_Eats_Fall2020@craveoncampus.chsvosjncpze.us-east-2.rds.amazonaws.com","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"vehicle"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34753","object_id":"column-34753","name":"vehicle_id","name_without_path":"vehicle_id","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34754","object_id":"column-34754","name":"vehicle_plate","name_without_path":"vehicle_plate","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34755","object_id":"column-34755","name":"model","name_without_path":"model","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34756","object_id":"column-34756","name":"make","name_without_path":"make","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"fk_delivery_vehicle_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"delivery","foreign_table_show_schema":"delivery","foreign_table_verbose":"delivery","foreign_table_verbose_show_schema":"delivery","foreign_table_object_id":"t3750","primary_table":"vehicle","primary_table_show_schema":"vehicle","primary_table_verbose":"vehicle","primary_table_verbose_show_schema":"vehicle","primary_table_object_id":"t3761","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"vehicle_id","foreign_column_path":null,"foreign_column":"vehicle_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"vehicle_id","name":"vehicle_id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[],"used_by":[{"object_name":"vehicle","object_name_show_schema":"vehicle","object_type":"TABLE","object_id":"t3761","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"delivery","object_name_show_schema":"delivery","object_type":"TABLE","object_id":"t3750","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"imported_at":"2021-12-06 15:58"};