// backend/src/features/auth/auth.repository.js

import { pool } from "../../config/db.js";

// Repositorio encargado de consultar la información de autenticación del usuario.
export const authRepository = {
  // Busca un usuario por correo electrónico y devuelve solo los campos necesarios para validar el inicio de sesión.
  async findByEmail(userEmail) { 
    const query = `
      SELECT id, user_email, password, is_active
      FROM users
      WHERE user_email = $1
      LIMIT 1;
    `;

    // Usa parámetros preparados para evitar inyección SQL y delegar el escape de valores al driver.
    const result = await pool.query(query, [userEmail]); 

    // Si no existe un usuario con ese correo, retorna undefined.
    return result.rows[0];
  }
}
