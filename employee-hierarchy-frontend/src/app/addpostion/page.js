"use client";
import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { addPostion, fetchPostion } from "../../../service/apiservice";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormdata,
  setPostionparent,
  setToast,
} from "../../../store/features/postionslice";
import Toast from "../../../components/Toast";

export default function AddPostion() {
  const postionparent = useSelector((state) => state.postions.postionparent);
  const toast = useSelector((state) => state.postions.toast);
  const formdata = useSelector((state) => state.postions.formdata);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormdata({ [name]: value }));
  };

  useEffect(() => {
    async function fetchpostion() {
      try {
        const data = await fetchPostion();
        dispatch(setPostionparent([...data.data.data]));
      } catch (err) {
        console.log(err);
        if (err) {
          dispatch(
            setToast({ message: "Faild to fetch the parents", type: "error" })
          );
        }
      }
    }
    fetchpostion();
  }, []);
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addPostion(formdata);
      if (res.status === 201) {
        dispatch(
          setFormdata({
            name: "",
            description: "",
            parent_id: undefined,
          })
        );
        dispatch(
          setToast({ message: "Position added successfully!", type: "success" })
        );
      }
    } catch (err) {
      dispatch(setToast({ message: "Failed to add position.", type: "error" }));
    }
  };
  return (
    <div className="flex h-[90vh] justify-center items-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        {toast.message && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast({})}
          />
        )}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-200 mb-6">
          Add Position
        </h2>
        <form className="space-y-4" onSubmit={handlesubmit}>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter position name"
              name="name"
              value={formdata.name}
              onChange={(e) => handleChange(e)}
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
              value={formdata.description}
              onChange={(e) => handleChange(e)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
              Parent Position
            </label>
            <select
              name="parent_id"
              value={formdata.parent_id}
              onChange={(e) => handleChange(e)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
            >
              <option value="option1" disabled>
                Select a Parent
              </option>
              {postionparent.map((el) => (
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
