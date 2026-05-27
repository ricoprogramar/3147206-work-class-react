import { DataTable } from "@/shared/";
import { userColumns } from "../table/userColumns";
import { users } from "../data/users";

export default function ListUserPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Usuarios</h1>

      <DataTable data={users} columns={userColumns} />
    </div>
  );
}
