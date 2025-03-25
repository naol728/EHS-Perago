import React from "react";
import Button from "./Button";
import { fetchEmployee } from "../service/apiservice";
import {
  setIsPopupOpen,
  setSelectedperson,
  setPopuptype,
} from "../store/features/peopleslice";
import { useDispatch } from "react-redux";

export default function PersonsList({ name, description, id, handleDelete }) {
  const dispatch = useDispatch();
  const handleClick = async () => {
    dispatch(setPopuptype("persons"));
    dispatch(setIsPopupOpen(true));
    try {
      const selecteddata = await fetchEmployee(id);
      dispatch(setSelectedperson(selecteddata.data[0]));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="text-light-accent dark:text-dark-accent">
        {name}
        <div className="flex space-x-3 mt-1">
          <Button type="update" onClick={handleClick}>
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
