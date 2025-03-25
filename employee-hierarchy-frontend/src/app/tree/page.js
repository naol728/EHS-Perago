"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Button";
import Loading from "../../../components/Loading";
import Popup from "../../../components/Popup";
import {
  addPostion,
  setSelectedPostion,
} from "../../../store/features/postionslice";
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
  updateEmployee,
} from "../../../service/apiservice";
import UpdateForm from "../../../components/UpdatePersons";
import PostionsList from "../../../components/PostionsList";
import PersonsList from "../../../components/PersonsList";

export default function Tree() {
  const positions = useSelector((state) => state.postions.postionData);
  const persons = useSelector((state) => state.peoples.peopleData);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [dataloading, setDataloading] = useState(false);
  const [poptype, setPoptype] = useState("");
  const dispatch = useDispatch();

  useEffect(
    function () {
      async function fetchData() {
        setLoading(true);
        try {
          const employeedata = await fetchEmployees();
          const positiondata = await fetchPostion();
          console.log(positiondata.data.data);
          console.log(employeedata.data);
          dispatch(addPostion(positiondata.data.data));
          dispatch(addPeople(employeedata.data));
        } catch (err) {
          console.log("error while fetching data", err);
        } finally {
          console.log("fetched succesfully");
          setLoading(false);
        }
      }
      fetchData();
    },
    [dispatch]
  );

  const openPopup = async () => {
    setIsPopupOpen(true);
    // try {
    //   setDataloading(true);
    //   const selecteddata = await fetchEmployee(id);
    //   dispatch(setSelectedperson(selecteddata.data[0]));
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   setDataloading(false);
    // }
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
              <PostionsList
                name={pos.name}
                description={pos.description}
                id={pos.id}
                openPopup={openPopup}
                setPoptype={setPoptype}
              />
              {persons
                .filter((person) => person.position_id == pos.id)
                .map((person) => (
                  <li key={person.id} className="mb-2 ml-4">
                    <PersonsList
                      name={person.name}
                      description={person.description}
                      id={person.id}
                      openPopup={openPopup}
                      handleDelete={handleDelete}
                      setPoptype={setPoptype}
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
        onClose={() => setIsPopupOpen(false)}
        title="Update the Data"
        type={poptype}
      />
      {recursiveRender(null)}
    </div>
  );
}
