import { useState } from "react";
import { fileSchemaFactory } from "@/shared";

export default function FileInput({
  multiple = false,
  maxFiles = 1,
  onChange,
  value = [],
}) {
  const [files, setFiles] = useState(value);
  const schema = fileSchemaFactory({ multiple, maxFiles });

  const handleFiles = (list) => {
    const arr = Array.from(list);
    const parsed = schema.safeParse(arr);
    if (!parsed.success) return alert(parsed.error.issues[0].message);
    setFiles(arr);
    onChange(arr);
  };

  return (
    <div className="file-input">
      <div className="flex gap-2">
        {files.map((f, i) => (
          <div key={i} className="group relative w-24 h-24">
            <img
              src={URL.createObjectURL(f)}
              className="object-cover w-full h-full rounded"
            />
            <button
              type="button"
              className="absolute top-1 right-1 hidden group-hover:block"
              onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
            >
              ✕
            </button>
          </div>
        ))}

        <label className="w-24 h-24 border-dashed border flex items-center justify-center cursor-pointer">
          +
          <input
            type="file"
            accept="image/*"
            multiple={multiple}
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </label>
      </div>
    </div>
  );
}
