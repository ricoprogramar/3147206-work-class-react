import { useState, useEffect } from "react";
import { getDocumentTypes } from "../services/selectService";
import { userSchema } from "../schemas/userSchema";

import { Input, Button, DeleteCounter2, Select, Checkbox } from "@/shared";

export default function UserRegisterForm() {
  const [documentTypes, setDocumentTypes] = useState([]);
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userDocumentType: "",
    userDocumentNumber: "",
    userPassword: "",

    // Flags booleanos
    isStaff: false,
    isActive: true,
    isSuperUser: false,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getDocumentTypes().then(setDocumentTypes);
  }, []);

  // ======================================
  //            Handle Genérico
  // ======================================
  /**
   * Función que se ejecuta cada vez que cambia el valor de un input del formulario
   */
  const handleChange = (e) => {
    // Se obtiene el nombre del campo y su valor
    const { name, value, type, checked} = e.target;

    setFormData((prev) => ({
      // Se copian todos los valores anteriores del estado
      ...prev,

      // Se actualiza unicamente lo que cambió
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ======================================
  //            Handle Submit
  // ======================================
  /**
   * Función que se ejecuta cuando se envía el formulario
   */

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = userSchema.safeParse(formData);

    if (!result.success) {
      // Objeto donde se almacenarán
      const fieldErrors = {};

      // Zod devuelve los errores en un arreglo llamado issues
      // Se recorren para asociar cada error a su campo correspondiente
      result.error.issues.forEach((issue) => {
        // contiene la ruta del campo que falló
        const field = issue.path[0];
        // Se guarda el mensaje de error en el objeto
        fieldErrors[field] = issue.message;
      });

      setErrors(fieldErrors);
      // Se detiene la ejecución porque el formulario tiene errores
      return;
    }

    setErrors({});
    console.log("Usuario válido:", result.data);
  };

  return (
    <div>
      <h1 className="text-text-primary text-2xl mb-6">Regitro de usuarios</h1>

      <form 
        className="grid grid-cols-1 items-center gap-6"
        onSubmit={handleSubmit}
        >
        
        {/* Inputs */}
        <div className="grid grid-cols-2 gap-6 my-0 mx-auto ">
          <Input
            label="Nombre"
            name="userName"
            placeholder="Ingrese su nombre"
            value={formData.userName}
            onChange={handleChange}
            error={errors.userName}
          />

          <Input
            label="Correo"
            name="userEmail"
            type="email"
            placeholder="Ingrese su correo"
            value={formData.userEmail}
            onChange={handleChange}
            error={errors.userEmail}
          />

          <Input
            label="Teléfono"
            name="userPhone"
            placeholder="Ingrese su teléfono"
            type="tel"
            value={formData.userPhone}
            onChange={handleChange}
            error={errors.userPhone}
          />

          <Select
            label="Tipo de documento"
            name="userDocumentType"
            options={documentTypes}
            value={formData.userDocumentType}
            onChange={handleChange}
            error={errors.userDocumentType}
          />

          <Input
            label="Número de documento"
            name="userDocumentNumber"
            placeholder="Ingrese su número de documento"
            value={formData.userDocumentNumber}
            onChange={handleChange}
            error={errors.userDocumentNumber}
          />

          <Input
            label="Contreseña"
            name="userPassword"
            placeholder="Ingrese su contraseña"
            type="password"
            value={formData.userPassword}
            onChange={handleChange}
            error={errors.userPassword}
          />

          <Checkbox
            id="isStaff"
            name="isStaff"
            label="Es staff"
            checked={formData.isStaff}
            onChange={handleChange}
          />
          <Checkbox
            id="isActive"
            name="isActive"
            label="Activo"
            checked={formData.isActive}
            onChange={handleChange}
          />
          <Checkbox
            id="isSuperUser"
            name="isSuperUser"
            label="Es super usuario"
            checked={formData.isSuperUser}
            onChange={handleChange}
          />

          {/* Actions */}
          <div className="flex items-end justify-end gap-12">
            <Button variant="secondary" size="sm">
              Cancelar
            </Button>

            <Button variant="primary" size="md">
              Guardar
            </Button>
          </div>
        </div>
      </form>

      {/* <DeleteCounter /> */}

      {/* Uso del useEffect */}
      {/* <DeleteEffect /> */}

      <DeleteCounter2 />
    </div>
  );
}
