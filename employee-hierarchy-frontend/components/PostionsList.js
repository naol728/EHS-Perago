import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { setSelectedPostion } from "../store/features/postionslice";
import { fetchPostionn } from "../service/apiservice";
export default function PostionsList({
  name,
  description,
  id,
  setIsPopupOpen,
  setPoptype,
}) {
  const dispatch = useDispatch();
  const handleClick = async () => {
    setIsPopupOpen(true);
    setPoptype("postion")
    if (id) {
      const selectedpostion = await fetchPostionn(id);
      dispatch(setSelectedPostion(selectedpostion.data[0]));
    }
  };
  return (
    <li className="mb-2">
      <div className="font-bold flex gap-2 text-light-primary dark:text-dark-primary">
        {name}
        <div className="flex mt-1">
          <Button type="update" onClick={handleClick}>
            Update
          </Button>
        </div>
      </div>
      <div className="text-sm text-light-secondary dark:text-dark-secondary">
        {description}
      </div>
    </li>
  );
}
