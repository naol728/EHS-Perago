import React from "react";
import Button from "./Button";

export default function PersonsList({
  name,
  description,
  id,
  handleDelete,
  openPopup,
}) {
  return (
    <>
      <div className="text-light-accent dark:text-dark-accent">
        {name}
        <div className="flex space-x-3 mt-1">
          <Button type="update" onClick={() => openPopup(id)}>
            update
          </Button>
          <Button type="delete" onClick={() => handleDelete(id)}>
            delete
          </Button>
        </div>
      </div>
      <div className="text-xs mt-1 text-gray-500">{description}</div>
    </>
  );
}
