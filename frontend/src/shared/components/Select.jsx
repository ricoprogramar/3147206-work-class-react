export default function Select({
    label,
    name,
    error,
    value,
    onChange,
    options = [],
}){
    return (
      <div className="w-full">
        {label && (
          <label className="block text-caption mb-1 text-text-secondary place-self-start">
            {label}
          </label>
        )}

        <select
          name={name}
          value={value}
          onChange={onChange}
          className="
            w-full
            h-12
            rounded-md
            border
            border-border
            px-4

            hover:border
            hover:border-2
            hover:border-focus-border
            
            "
        >
          <option value="">Seleccione una opción</option>

          {options.map((opt) => (
            <option 
              key={opt.value} 
              value={opt.value}
            >
            {opt.label}
            </option>
          ))}
        </select>


        {/* Feedback */}
        {error && (
          <p className="text-caption text-red-800 place-self-start">{error}</p>
        )}
      </div>
    );
}