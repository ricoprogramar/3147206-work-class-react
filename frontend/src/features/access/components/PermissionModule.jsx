// frontend/src/features/access/components/PermissionModule.jsx

import { Checkbox, Select, Switch, Button, Input } from "@/shared";


export default function PermissionModule({   
  groupPermissions }) {

  return (
    <section className="border rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Gestión usuarios</h2>

      <div className="flex flex-wrap gap-6">
        <Checkbox
          id="create_user"
          name="create_user"
          label="Crear usuarios"
          checked={groupPermissions.some(
            (permission) => permission.permission_codename === "create_user",
          )}
          onChange={() => {}}
        />

        <Checkbox
          id="list_user"
          name="list_user"
          label="Listar usuarios"
          checked={groupPermissions.some(
            (permission) => permission.permission_codename === "list_user",
          )}
          onChange={() => {}}
        />
      </div>
    </section>
  );
}
