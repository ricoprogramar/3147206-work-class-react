// backend/src/features/permissions/permissions.service.js
// Corrección: agregado getAll()

import { permissionsRepository } from "./permissions.repository.js";

export const permissionsService = {
  async getAll() {
    return await permissionsRepository.getAll();
  },
};
