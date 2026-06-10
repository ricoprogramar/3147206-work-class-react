// ./features/users/user.controller.js
// CORRECCIÓN: agregar debug específico de booleanos

import { userService } from "./user.service.js";

export const userController = {
  async create(req, res) {
    try {
      const data = {
        ...req.body,

        isStaff: req.body.isStaff === "true",
        isActive: req.body.isActive === "true",
        isSuperUser: req.body.isSuperUser === "true",

        // archivos
        userImage: req.files || [],
      };

      const user = await userService.createUser(data);

      res.status(201).json({
        message: "Usuario creado correctamente",
        userId: user.id,
      });
    } catch (err) {
      console.error("ERROR BACKEND:", err);
      res.status(500).json({ error: err.message });
    }
  },
};
