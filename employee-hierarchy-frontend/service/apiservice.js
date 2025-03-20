import axios from "axios";
const fetchEmployees = async () => {
  try {
    const data = await axios.get("http://localhost:8000/api/employee");
    return data;
  } catch (err) {
    throw new Error("faild to fetch", err);
  }
};
const fetchPostion = async () => {
  try {
    const data = axios.get("http://localhost:8000/api/postion");
    return data;
  } catch (err) {
    throw new Error("faild to fetch", err);
  }
};

const updateEmployee = async (id, data) => {
  try {
    const res = await axios.patch(
      `http://localhost:8000/api/employee/${id}`,
      data
    );
    return res;
  } catch (err) {
    throw new Error("faild to update the data", err);
  }
};
const deleteEmployee = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:8000/api/employee/${id}`);
    return res;
  } catch (err) {
    throw new Error("faild to delete the data", err);
  }
};
const fetchEmployee = async (id) => {
  try {
    const data = await axios.get(`http://localhost:8000/api/employee/${id}`);
    return data;
  } catch (err) {
    throw new Error("faild to fetch employee", err);
  }
};
const addEmployee = async (data) => {
  try {
    const res = await axios.post("http://localhost:8000/api/employee", data);
    return res;
  } catch (err) {
    throw new Error("faild to add employee", err);
  }
};
const addPostion = async (data) => {
  try {
    const res = await axios.post("http://localhost:8000/api/postion", data);
    return res;
  } catch (err) {
    throw new Error("faild to add postion", err);
  }
};

export {
  fetchEmployees,
  fetchPostion,
  updateEmployee,
  deleteEmployee,
  fetchEmployee,
  addPostion,
  addEmployee,
};
