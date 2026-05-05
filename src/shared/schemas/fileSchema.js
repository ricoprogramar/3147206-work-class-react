// src/shared/schemas/fileSchema.js
import { z } from "zod";

export const fileSchemaFactory = ({ multiple, maxFiles }) =>
  z
    .array(
      z
        .instanceof(File)
        .refine((f) => f.size <= 10 * 1024 * 1024, "Máx 10MB")
        .refine(
          (f) => ["image/jpeg", "image/png", "image/webp"].includes(f.type),
          "Formato inválido",
        ),
    )
    .max(multiple ? maxFiles : 1, "Cantidad inválida");
