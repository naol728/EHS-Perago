import React from "react";

export default function Button({ type, onClick, children, sx }) {
  const baseStyles = " rounded-md font-semibold transition duration-300 ";

  const typeStyles = {
    update:
      baseStyles +
      " px-2 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-700 dark:hover:bg-blue-800",
    delete:
      baseStyles +
      "px-2 py-1 text-xs bg-red-500 hover:bg-red-600 text-white dark:bg-red-700 dark:hover:bg-red-800",
    submit:
      baseStyles +
      "px-3 py-2 text-md  bg-green-500  hover:bg-green-600 text-white dark:bg-green-700 dark:hover:bg-green-800",
  };

  return (
    <button onClick={onClick} style={sx} className={` ${typeStyles[type]}`}>
      {children}
    </button>
  );
}
