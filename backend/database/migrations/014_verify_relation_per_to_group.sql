SELECT
    g.group_name,
    p.permission_codename
FROM group_permissions gp
INNER JOIN groups g
    ON g.group_id = gp.group_id
INNER JOIN permissions p
    ON p.permission_id = gp.permission_id;                      