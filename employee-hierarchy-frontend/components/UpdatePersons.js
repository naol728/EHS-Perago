import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  addPeople,
  handleChangepersondata,
} from "../store/features/peopleslice";

import { fetchEmployees, updateEmployee } from "../service/apiservice";
export default function UpdateForm() {
  const selectedpeople = useSelector((state) => state.peoples.selectedpeople);
  const dispatch = useDispatch();
  const [btnloading, setBtnloading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setBtnloading(true);
      await updateEmployee(selectedpeople.id, selectedpeople);
      const updatedData = await fetchEmployees();
      dispatch(addPeople(updatedData.data));
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
