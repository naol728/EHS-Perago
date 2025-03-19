import React from "react";
import Button from "../../../components/Button";

export default function AddPostion() {
  return (
    <div className="flex h-[90vh]  justify-center items-center ">
      <div className="grid place-content-center max-w-xl space-y-5 h-full  rounded-xl  px-16 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text ">
        <h2 className="text-2xl font-semibold text-center mb-4">Add Postion</h2>
        <form className="flex flex-col w-80 space-y-2 ">
          <label className="flex flex-col w-full space-y-1">
            <span className="font-semibold ">Name</span>
            <input
              type="text"
              className=" px-3 py-2 rounded-lg dark:bg-dark-secondary"
            />
          </label>
          <label className="flex flex-col w-full space-y-1">
            <span className="font-semibold ">Description</span>
            <input
              type="text"
              className=" px-3 py-2 rounded-lg dark:bg-dark-secondary"
            />
          </label>
          <label className="flex flex-col w-full space-y-1 ">
            <span className="font-semibold ">Parent Id</span>
            <select className="px-1 py-2 rounded-lg bg-light-background dark:bg-dark-secondary text-light-text dark:text-dark-text ">
              <option value="option1" className="px-1 py-2">
                option 1
              </option>
              <option value="option2" className="px-1 py-2">
                option 2
              </option>
            </select>
          </label>

          <Button type="submit">Submit </Button>
        </form>
      </div>
    </div>
  );
}
