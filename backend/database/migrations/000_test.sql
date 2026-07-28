-- database/migrations/update_permissions_content_type.sql
-- Corrección: asociar permisos de usuarios a users.user

UPDATE permissions
SET content_type_id = 2
WHERE permission_codename IN ('create_groups');