import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  addPeople,
  handleChangepersondata,
  setSelectedperson,
} from "../store/features/peopleslice";

import {
  deleteEmployee,
  fetchEmployees,
  fetchPostion,
  fetchEmployee,
  updateEmployee,
} from "../service/apiservice";
export default function UpdateForm() {
  const selectedpeople = useSelector((state) => state.peoples.selectedpeople);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [btnloading, setBtnloading] = useState(false);
  const [dataloading, setDataloading] = useState(false);
  const dispatch = useDispatch();
  console.log(selectedpeople);
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setBtnloading(true);
      await updateEmployee(selectedpeople.id, selectedpeople);
      const updatedData = await fetchEmployees();
      dispatch(addPeople(updatedData.data));
      setIsPopupOpen(false);
    } catch (err) {
      console.log(err);
    } finally {
      setBtnloading(false);
    }
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={handleUpdate}>
        <label className="text-sm font-semibold mb-1">Name:</label>
        <input
          type="text"
          name="name"
          disabled={dataloading}
          value={selectedpeople?.name}
          onChange={(e) =>
            dispatch(
              handleChangepersondata({
                ...selectedpeople,
                name: e.target.value,
              })
            )
          }
          className=" p-2 mb-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
          required
        />

        <label className="text-sm font-semibold mb-1">Description:</label>
        <textarea
          name="description"
          disabled={dataloading}
          value={selectedpeople?.description}
          onChange={(e) =>
            dispatch(
              handleChangepersondata({
                ...selectedpeople,
                description: e.target.value,
              })
            )
          }
          className="border  p-2 mb-3  border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
          required
        ></textarea>

        <Button type="submit" disabled={btnloading}>
          {btnloading ? "Updating..." : "Update"}
        </Button>
      </form>
    </>
  );
}
