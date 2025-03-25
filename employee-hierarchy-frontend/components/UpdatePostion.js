import React from "react";
import { useSelector } from "react-redux";

export default function UpdatePostion() {
  const selectedPostion = useSelector(
    (state) => state.postions.selectedPostion
  );
  console.log(selectedPostion);

  return (
    <form className="flex flex-col">
      {/* <label className="text-sm font-semibold mb-1">Name:</label>
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
      </Button> */}
    </form>
  );
}
