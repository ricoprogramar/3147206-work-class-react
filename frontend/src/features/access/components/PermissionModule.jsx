// // frontend/src/features/access/components/PermissionModule.jsx

// import { Checkbox, Select, Switch, Button, Input } from "@/shared";

// export default function PermissionModule({
//   groupPermissions }) {

//   return (
//     <section className="border rounded-lg p-6">
//       <h2 className="text-lg font-semibold mb-4">Gestión usuarios</h2>

//       <div className="flex flex-wrap gap-6">
//         <Checkbox
//           id="create_user"
//           name="create_user"
//           label="Crear usuarios"
//           checked={groupPermissions.some(
//             (permission) => permission.permission_codename === "create_user",
//           )}
//           onChange={() => {}}
//         />

//         <Checkbox
//           id="list_user"
//           name="list_user"
//           label="Listar usuarios"
//           checked={groupPermissions.some(
//             (permission) => permission.permission_codename === "list_user",
//           )}
//           onChange={() => {}}
//         />
//       </div>
//     </section>
//   );
// }

// frontend/src/features/access/components/PermissionModule.jsx
// Corrección: se usa estado global desde AccessPage

import { Checkbox, Button, IconButton } from "@/shared";
import { Pencil } from "lucide-react";

export default function PermissionModule({
  // selectedGroup,
  selectedGroupName,
  allPermissions,
  isEditing,
  permissionsDraft,
  setPermissionsDraft,
  onEdit,
  onCancel,
  onSave,
}) {
  const hasPermission = (codename) => {
    return permissionsDraft.some(
      (permission) => permission.permission_codename === codename,
    );
  };

  // const handlePermissionChange = (codename, checked) => {
  //   if (!checked) {
  //     setPermissionsDraft((prev) =>
  //       prev.filter(
  //         (permission) => permission.permission_codename !== codename,
  //       ),
  //     );

  //     return;
  //   }

  //   const permissionsMap = {
  //     create_user: {
  //       permission_id: 2,
  //       permission_name: "Crear usuarios",
  //       permission_codename: "create_user",
  //     },
  //     list_user: {
  //       permission_id: 1,
  //       permission_name: "Listar usuarios",
  //       permission_codename: "list_user",
  //     },
  //   };

  //   setPermissionsDraft((prev) => [...prev, permissionsMap[codename]]);
  // };

  const handlePermissionChange = (permission, checked) => {
    if (!checked) {
      setPermissionsDraft((prev) =>
        prev.filter((item) => item.permission_id !== permission.permission_id),
      );

      return;
    }

    setPermissionsDraft((prev) => [...prev, permission]);
  };

  return (
    <section className="border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-neutral-500">Grupo</p>

          <h2 className="text-lg font-semibold">
            {selectedGroupName || "Seleccione un grupo"}
          </h2>
        </div>

        {!isEditing && selectedGroupName && (
          <IconButton ariaLabel="Editar permisos" onClick={onEdit}>
            <Pencil size={20} />
          </IconButton>
        )}
      </div>

      <div className="space-y-8">
        <div className="border-b-2 pb-6">
          <h3 className="font-medium mb-4">Módulo Usuarios</h3>

          {/* <div className="flex flex-wrap gap-6">
            <Checkbox
              id="create_user"
              name="create_user"
              label="Crear usuarios"
              checked={hasPermission("create_user")}
              disabled={!isEditing}
              onChange={(e) =>
                handlePermissionChange("create_user", e.target.checked)
              }
            />

            <Checkbox
              id="list_user"
              name="list_user"
              label="Listar usuarios"
              checked={hasPermission("list_user")}
              disabled={!isEditing}
              onChange={(e) =>
                handlePermissionChange("list_user", e.target.checked)
              }
            />
          </div> */}
          <div className="flex flex-wrap gap-6">
            {allPermissions.map((permission) => (
              <Checkbox
                key={permission.permission_id}
                id={permission.permission_codename}
                name={permission.permission_codename}
                label={permission.permission_name}
                checked={hasPermission(permission.permission_codename)}
                disabled={!isEditing}
                onChange={(e) =>
                  handlePermissionChange(permission, e.target.checked)
                }
              />
            ))}
          </div>
        </div>

        {/* Otros módulos */}
        <div>
          <h3 className="font-medium mb-4">Otros módulos</h3>
        </div>
      </div>

      {isEditing && (
        <div className="flex justify-end gap-3 mt-8">
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>

          <Button type="button" variant="primary" onClick={onSave}>
            Guardar
          </Button>
        </div>
      )}
    </section>
  );
}
