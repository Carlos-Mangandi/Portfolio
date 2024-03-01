
interface InputProps {
  label: string;
  type: string;
  name: string;
}

function Input({ label, type, name }: InputProps) {
  return (
    <>
      <div className="relative z-0">
        <input
          required
          type={type}
          id={name}
          name={name}
          className="block py-2.5 pl-2 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-400 peer dark:focus:border-emerald-500"
          placeholder=" "
        />
        <label
          htmlFor={name}
          className="absolute text-lg pl-2 text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-400 dark:peer-focus:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
        >
          {label}
        </label>
      </div>
    </>
  );
}

export { Input };
