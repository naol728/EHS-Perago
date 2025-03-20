"use client";
import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { addEmployee, fetchPostion } from "../../../service/apiservice";
import axios from "axios";
import Toast from "../../../components/Toast";

export default function AddEmploye() {
  const [employeeparent, setEmployeeparent] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    description: "",
    position_id: undefined,
  });
  const [toast, setToast] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addEmployee(formdata);
      if (res.status === 201) {
        console.log("added succesfuly");
        setToast({ message: "Position added successfully!", type: "success" });
        setFormdata({
          name: "",
          description: "",
          position_id: undefined,
        });
      }
    } catch (err) {
      console.log("faild to add data", err);
      setToast({ message: "Failed to add position.", type: "error" });
    }
  };

  useEffect(() => {
    async function fetchpostion() {
      try {
        const data = await fetchPostion();
        setEmployeeparent([...data.data]);
      } catch (err) {
        console.log("faild to fetch", err);
      }
    }
    fetchpostion();
  }, []);
  return (
    <div className="flex h-[90vh] justify-center items-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-200 mb-6">
          Add Employe
        </h2>
        {toast.message && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast({})}
          />
        )}
        <form className="space-y-4" onSubmit={handlesubmit}>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter position name"
              name="name"
              onChange={(e) => handleChange(e)}
              value={formdata.name}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
              Description
            </label>
            <textarea
              type="text"
              placeholder="Enter description"
              name="description"
              onChange={(e) => handleChange(e)}
              value={formdata.description}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
              Parent Position
            </label>
            <select
              name="position_id"
              value={formdata.position_id}
              onChange={(e) => handleChange(e)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
            >
              <option value="option1" disabled>
                Select a Parent
              </option>
              {employeeparent.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}
