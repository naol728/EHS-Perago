"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Button";
import Loading from "../../../components/Loading";
import Popup from "../../../components/Popup";
import { addPostion } from "../../../store/features/postionslice";
import {
  addPeople,
  handleChangepersondata,
  setSelectedperson,
} from "../../../store/features/peopleslice";

import {
  deleteEmployee,
  fetchEmployees,
  fetchPostion,
  fetchEmployee,
  updateEmployee
} from "../../../service/apiservice";

export default function Tree() {
  const positions = useSelector((state) => state.postions.postionData);
  const persons = useSelector((state) => state.peoples.peopleData);
  const selectedpeople = useSelector((state) => state.peoples.selectedpeople);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [btnloading, setBtnloading] = useState(false);
  const [dataloading, setDataloading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const employeedata = await fetchEmployees();
        const positiondata = await fetchPostion();

        dispatch(addPostion(positiondata.data));
        dispatch(addPeople(employeedata.data));
      } catch (err) {
        console.log("error while fetching data", err);
      } finally {
        console.log("fetched succesfully");
        setLoading(false);
      }
    }
    fetchData();
  }, [dispatch]);

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
  const openPopup = async (id) => {
    setIsPopupOpen(true);
    try {
      setDataloading(true);
      const selecteddata = await fetchEmployee(id);
      dispatch(setSelectedperson(selecteddata.data[0]));
    } catch (err) {
      console.log(err);
    } finally {
      setDataloading(false);
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      const updatedData = await fetchEmployees();
      dispatch(addPeople(updatedData.data));
    } catch (err) {
      console.log(err);
    }
  };

  const recursiveRender = (parentId) => {
    return (
      <ul className="ml-4 border-l-2 border-gray-400 pl-4">
        {positions
          .filter((pos) => pos.parent_id == parentId)
          .map((pos) => (
            <div key={pos.id}>
              <li className="mb-2">
                <div className="font-bold text-light-primary dark:text-dark-primary">
                  {pos.name}
                </div>
                <div className="text-sm text-light-secondary dark:text-dark-secondary">
                  {pos.description}
                </div>
              </li>
              {persons
                .filter((person) => person.position_id == pos.id)
                .map((person) => (
                  <li key={person.id} className="mb-2 ml-4">
                    <div className="text-light-accent dark:text-dark-accent">
                      {person.name}
                      <div className="flex space-x-3 mt-1">
                        <Button
                          type="update"
                          onClick={() => openPopup(person.id)}
                        >
                          update
                        </Button>
                        <Button
                          type="delete"
                          onClick={() => handleDelete(person.id)}
                        >
                          delete
                        </Button>
                      </div>
                    </div>
                    <div className="text-xs mt-1 text-gray-500">
                      {person.description}
                    </div>
                  </li>
                ))}
              {recursiveRender(pos.id)}
            </div>
          ))}
      </ul>
    );
  };

  if (loading) return <Loading />;

  return (
    <div className="p-6 mt-5 max-w-3xl mx-auto bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Employee Hierarchy
      </h2>
      {recursiveRender(null)}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Update the Data"
      >
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
      </Popup>
    </div>
  );
}
