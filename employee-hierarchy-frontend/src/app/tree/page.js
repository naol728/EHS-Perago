"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading";
import Popup from "../../../components/Popup";
import { addPostion } from "../../../store/features/postionslice";
import { addPeople, setIsPopupOpen } from "../../../store/features/peopleslice";

import {
  deleteEmployee,
  fetchEmployees,
  fetchPostion,
} from "../../../service/apiservice";
import PostionsList from "../../../components/PostionsList";
import PersonsList from "../../../components/PersonsList";

export default function Tree() {
  const positions = useSelector((state) => state.postions.postionData);
  const persons = useSelector((state) => state.peoples.peopleData);
  const isPopupOpen = useSelector((state) => state.peoples.isPopupOpen);
  const popuptype = useSelector((state) => state.peoples.popuptype);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      async function fetchData() {
        setLoading(true);
        try {
          const employeedata = await fetchEmployees();
          const positiondata = await fetchPostion();
          dispatch(addPostion(positiondata.data.data));
          dispatch(addPeople(employeedata.data));
        } catch (err) {
          console.log("error while fetching data", err);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [dispatch]
  );

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      const updatedemployeedata = await fetchEmployees();
      dispatch(addPeople(updatedemployeedata.data));
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
              <PostionsList
                name={pos.name}
                description={pos.description}
                id={pos.id}
              />
              {persons
                .filter((person) => person.position_id == pos.id)
                .map((person) => (
                  <li key={person.id} className="mb-2 ml-4">
                    <PersonsList
                      name={person.name}
                      description={person.description}
                      id={person.id}
                      handleDelete={handleDelete}
                    />
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
      <Popup
        isOpen={isPopupOpen}
        onClose={() => dispatch(setIsPopupOpen(false))}
        title="Update the Data"
        type={popuptype}
      />
      {recursiveRender(null)}
    </div>
  );
}
