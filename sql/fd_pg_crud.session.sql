CREATE TABLE things(
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL CHECK (description != ''),
    create_at TEXT NOT NULL DEFAULT current_timestamp,
    update_at TEXT NOT NULL DEFAULT current_timestamp
) -- create
INSERT INTO things(description)
VALUES ('test thing');
-- read
SELECT *
FROM thing
WHERE id = 12;
-- update
UPDATE things
SET description = 'updated test thing',
    update_at = current_timestamp
WHERE id = 12;
--delete
DELETE FROM things
WHERE id = 12
RETURNING *;