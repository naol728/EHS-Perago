import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { setSelectedPostion } from "../store/features/postionslice";
import { fetchPostion } from "../service/apiservice";
export default function PostionsList({
  name,
  description,
  id,
  openPopup,
  setPoptype,
}) {
  const dispatch = useDispatch();
  const handleClick = async () => {
    openPopup();
    setPoptype("postion");
    if (!id === null) {
      const selectedpostion = await fetchPostion(id);
      dispatch(setSelectedPostion(selectedpostion));
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
