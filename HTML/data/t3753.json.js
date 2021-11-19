window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3753","name":"faculty","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Campus_Eats_Fall2020@craveoncampus.chsvosjncpze.us-east-2.rds.amazonaws.com","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"faculty"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34713","object_id":"column-34713","name":"faculty_id","name_without_path":"faculty_id","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34714","object_id":"column-34714","name":"person_id","name_without_path":"person_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3756","name":"person","name_show_schema":"person"}]},{"id":"column-34715","object_id":"column-34715","name":"title","name_without_path":"title","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34716","object_id":"column-34716","name":"degree_college","name_without_path":"degree_college","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34717","object_id":"column-34717","name":"highest_degree","name_without_path":"highest_degree","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"fk_F_person_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"faculty","foreign_table_show_schema":"faculty","foreign_table_verbose":"faculty","foreign_table_verbose_show_schema":"faculty","foreign_table_object_id":"t3753","primary_table":"person","primary_table_show_schema":"person","primary_table_verbose":"person","primary_table_verbose_show_schema":"person","primary_table_object_id":"t3756","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"person_id","foreign_column_path":null,"foreign_column":"person_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"faculty_id","name":"faculty_id"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-11-18 23:58"};