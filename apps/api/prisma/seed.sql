-- UPDATE SEQUENCE
SELECT setval(pg_get_serial_sequence('"Category"', 'id'), coalesce(max(id)+1, 1), false) FROM "Category";
SELECT setval(pg_get_serial_sequence('"User"', 'id'), coalesce(max(id)+1, 1), false) FROM "User";

