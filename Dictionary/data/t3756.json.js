window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3756","name":"person","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Campus_Eats_Fall2020@craveoncampus.chsvosjncpze.us-east-2.rds.amazonaws.com","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"person"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34732","object_id":"column-34732","name":"person_id","name_without_path":"person_id","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34733","object_id":"column-34733","name":"person_name","name_without_path":"person_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34734","object_id":"column-34734","name":"person_email","name_without_path":"person_email","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34735","object_id":"column-34735","name":"cell","name_without_path":"cell","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"fk_F_person_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"faculty","foreign_table_show_schema":"faculty","foreign_table_verbose":"faculty","foreign_table_verbose_show_schema":"faculty","foreign_table_object_id":"t3753","primary_table":"person","primary_table_show_schema":"person","primary_table_verbose":"person","primary_table_verbose_show_schema":"person","primary_table_object_id":"t3756","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"person_id","foreign_column_path":null,"foreign_column":"person_id"}],"custom_fields":{}},{"name":"fk_O_person_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"order","foreign_table_show_schema":"order","foreign_table_verbose":"order","foreign_table_verbose_show_schema":"order","foreign_table_object_id":"t3755","primary_table":"person","primary_table_show_schema":"person","primary_table_verbose":"person","primary_table_verbose_show_schema":"person","primary_table_object_id":"t3756","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"person_id","foreign_column_path":null,"foreign_column":"person_id"}],"custom_fields":{}},{"name":"fk_S_person_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"staff","foreign_table_show_schema":"staff","foreign_table_verbose":"staff","foreign_table_verbose_show_schema":"staff","foreign_table_object_id":"t3759","primary_table":"person","primary_table_show_schema":"person","primary_table_verbose":"person","primary_table_verbose_show_schema":"person","primary_table_object_id":"t3756","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"person_id","foreign_column_path":null,"foreign_column":"person_id"}],"custom_fields":{}},{"name":"fk_St_person_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"student","foreign_table_show_schema":"student","foreign_table_verbose":"student","foreign_table_verbose_show_schema":"student","foreign_table_object_id":"t3760","primary_table":"person","primary_table_show_schema":"person","primary_table_verbose":"person","primary_table_verbose_show_schema":"person","primary_table_object_id":"t3756","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"person_id","foreign_column_path":null,"foreign_column":"person_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"person_id","name":"person_id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[],"used_by":[{"object_name":"person","object_name_show_schema":"person","object_type":"TABLE","object_id":"t3756","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"faculty","object_name_show_schema":"faculty","object_type":"TABLE","object_id":"t3753","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"order","object_name_show_schema":"order","object_type":"TABLE","object_id":"t3755","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"staff","object_name_show_schema":"staff","object_type":"TABLE","object_id":"t3759","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"student","object_name_show_schema":"student","object_type":"TABLE","object_id":"t3760","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"imported_at":"2021-12-06 15:58"};