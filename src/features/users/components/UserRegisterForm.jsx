import { useState, useEffect } from "react";
import { getDocumentTypes } from "@/features/users/services/selectService";

import {
  Input,
  Button,
  DeleteCounter,
  DeleteEffect,
  DeleteCounter2,
  Select,
} from "@/shared";

export default function UserRegisterForm() {
  const [documentTypes, setDocumentTypes] = useState([]);

  useEffect(() => {
    getDocumentTypes().then(setDocumentTypes);
  }, []);

  // Handle
  const handleNameChange = (e) => {
    console.log("Nombre: ", e.target.value);
  };

  const handleEmailBlur = (e) => {
    console.log("Email: ", e.target.value);
  };

  return (
    <div>
      <h1 className="text-text-primary text-2xl mb-6">Regitro de usuarios</h1>

      <form className="grid grid-cols-1 items-center gap-6">
        {/* Inputs */}
        <div className="grid grid-cols-2 gap-6 my-0 mx-auto ">

          <Input
            label="Nombre"
            name="userName"
            placeholder="Ingrese su nombre"
            onChange={handleNameChange}
          />

          <Input 
            label="Correo" 
            name="userEmail" 
            type="email" 
            placeholder="Ingrese su correo" 
          />

          <Input
            label="Teléfono"
            name="userPhone"
            placeholder="Ingrese su teléfono"
            type="tel"
          />

          <Select
            label="Tipo de documento"
            name="userDocumentType"
            options={documentTypes}
          />

          <Input
            label="Número de documento"
            name="userDocumentNumber"
            placeholder="Ingrese su número de documento"
          />

          <Input
            label="Contreseña"
            name="userPassword"
            placeholder="Ingrese su contraseña"
            type="password"
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
