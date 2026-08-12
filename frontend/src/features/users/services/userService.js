// ../services/userService.js
// CORRECCIÓN: eliminar duplicados y controlar boolean

// const API_URL = "http://localhost:4000/api/users";

import { API_URL } from "@/features/config";

const USERS_API_URL = `${API_URL}/users`;

export async function createUser(userData) {
  const formData = new FormData();
  const token = sessionStorage.getItem("token");

  // SOLO UNA PASADA CONTROLADA
  formData.append("userName", userData.userName);
  formData.append("userEmail", userData.userEmail);
  formData.append("userPhone", userData.userPhone);
  formData.append("userDocumentType", userData.userDocumentType);
  formData.append("userDocumentNumber", userData.userDocumentNumber);
  formData.append("userPassword", userData.userPassword);

  // CLAVE: stringify correcto
  formData.append("isStaff", userData.isStaff ? "true" : "false");
  formData.append("isActive", userData.isActive ? "true" : "false");
  formData.append("isSuperUser", userData.isSuperUser ? "true" : "false");

  // archivos
  if (userData.userImage?.length) {
    userData.userImage.forEach((file) => {
      formData.append("userImage", file);
    });
  }

  const response = await fetch(USERS_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });


  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Error al crear usuario");
  }

  return response.json();
}
