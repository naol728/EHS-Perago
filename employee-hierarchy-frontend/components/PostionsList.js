import React from "react";

export default function PostionsList({ name, description }) {
  return (
    <li className="mb-2">
      <div className="font-bold flex gap-2 text-light-primary dark:text-dark-primary">
        {name}
      </div>
      <div className="text-sm text-light-secondary dark:text-dark-secondary">
        {description}
      </div>
    </li>
  );
}
