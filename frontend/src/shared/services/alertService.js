// src/shared/services/alertService.js

  // Swal es el objeto principal que exporta SweetAlert2
import Swal from "sweetalert2";

export function showSuccessAlert({
  title = "Éxito",
  text = "",
  confirmButtonText = "Aceptar",
}) {
  // Swal.fire() crea el modal.
  return Swal.fire({
    icon: "success",
    title,
    text,
    confirmButtonText,
  });
}

// Implementación
// await showAlert({
//   icon: "success",
//   title: "Usuario creado",
//   text: "El registro fue exitoso",
// });