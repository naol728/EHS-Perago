import axios from "axios";

const employeeurl = "http://localhost:8000/api/employee";
const postionurl = "http://localhost:8000/api/postion";

const fetchEmployees = async () => {
  try {
    const data = await axios.get(`${employeeurl}`);
    return data;
  } catch (err) {
    throw new Error("faild to fetch", err);
  }
};
const fetchPostion = async () => {
  try {
    const data = axios.get(`${postionurl}`);
    return data;
  } catch (err) {
    throw new Error("faild to fetch", err);
  }
};
const fetchPostionn = async (id) => {
  try {
    const data = axios.get(`${postionurl}/${id}`);
    return data;
  } catch (err) {
    throw new Error("faild to fetch", err);
  }
};

const updateEmployee = async (id, data) => {
  try {
    const res = await axios.patch(`${employeeurl}/${id}`, data);
    return res;
  } catch (err) {
    throw new Error("faild to update the data", err);
  }
};
const deleteEmployee = async (id) => {
  try {
    const res = await axios.delete(`${employeeurl}/${id}`);
    return res;
  } catch (err) {
    throw new Error("faild to delete the data", err);
  }
};
const fetchEmployee = async (id) => {
  try {
    const data = await axios.get(`${employeeurl}/${id}`);
    return data;
  } catch (err) {
    throw new Error("faild to fetch employee", err);
  }
};
const addEmployee = async (data) => {
  try {
    const res = await axios.post(`${employeeurl}`, data);
    return res;
  } catch (err) {
    if (err) {
      throw new Error("faild to add employee", err);
    }
  }
};
const addPostion = async (data) => {
  try {
    const res = await axios.post(`${postionurl}`, data);
    return res;
  } catch (err) {
     throw new Error("faild to add postion", err);
  }
};

const updatePostion = async (index, data) => {
  try {
    const res = await axios.patch(`${postionurl}/${id}`, data);
    return res;
  } catch (err) {
    throw new Error("faild to update the position", err);
  }
};
const updatePostionn = async (id, data) => {
  try {
    const res = await axios.patch(`${postionurl}/${id}`, data);
    return res;
  } catch (err) {
    throw new Error("faild to update the position", err);
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
  updatePostion,
  fetchPostionn,
  updatePostionn,
};
