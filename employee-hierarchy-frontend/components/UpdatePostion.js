import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { handleChangepostiondata } from "../store/features/postionslice";
import { addPostion, fetchPostion, updatePostionn } from "../service/apiservice";

export default function UpdatePostion() {
  const selectedPostion = useSelector(
    (state) => state.postions.selectedPostion
  );
  const dispatch = useDispatch();
  console.log(selectedPostion);

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const res=await updatePostionn(selectedPostion.id, selectedPostion);
      console.log(res)
      const updatedData = await fetchPostion();
      dispatch(addPostion(updatedData.data.data));
    } catch (err) {
        console.log(err)
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleUpdate}>
      <label className="text-sm font-semibold mb-1">Name:</label>
      <input
        type="text"
        name="name"
        value={selectedPostion?.name}
        onChange={(e) =>
          dispatch(
            handleChangepostiondata({
              ...selectedPostion,
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
        value={selectedPostion?.description}
        onChange={(e) =>
          dispatch(
            handleChangepostiondata({
              ...selectedPostion,
              description: e.target.value,
            })
          )
        }
        className="border  p-2 mb-3  border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
        required
      ></textarea>

      <Button type="submit" d>
        {/* {btnloading ? "Updating..." : "Update"} */}update
      </Button>
    </form>
  );
}
