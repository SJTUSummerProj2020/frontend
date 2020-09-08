import { postRequest, getRequest, putRequest} from '../utils/ajax';

const header = 'http://ec2-100-25-4-241.compute-1.amazonaws.com:8080/';

export const login = (data, callback) => {
  const url = header + 'sso/login';
  postRequest(url, data, callback);
};

export const register = (data, callback) => {
  const url = header + 'user/register';
  postRequest(url, data, callback);
};

export const logout = (callback) => {
  const url = header + 'sso/logout';
  postRequest(url, {}, callback);
};

export const checkSession = (callback) => {
  const url = header + 'sso/checkSession';
  getRequest(url, {}, callback);
};

export const getOrdersByUserId = (data, callback) => {
  const url = header + 'order/getOrdersByUserId';
  getRequest(url, data, callback);
};

export const addOrder = (data, callback) => {
  const url = header + 'order/addOrder';
  putRequest(url, data, callback);
};

export const getAllUsers = (data, callback) => {
  const url = header + 'user/getAllUsers';
  getRequest(url, data, callback);
};

export const getAllOrders = (data, callback) => {
  const url = header + 'order/getAllOrders';
  getRequest(url, data, callback);
};

export const changeUserStatusByUserId = (data, callback) => {
  const url = header + 'user/changeUserStatusByUserId';
  postRequest(url, data, callback);
};

export const getRecommendGoods = (number, callback) => {
  const url = header + 'goods/getRecommendGoods/' + number;
  const data = {};
  getRequest(url, data, callback);
};

// export const getUsers = (data, callback) => {
//     const url = `http://localhost:8080/getUsers`;
//     postRequest(url, data, callback);
// };
//
export const editUser = (data, callback) => {
    const url = `http://localhost:8080/user/editUser`;
    postRequest(url, data, callback);
};

export const getUserById = (userId, callback) => {
  const url = `http://localhost:8080/user/getUserById/` + userId;
  const data = {};
  getRequest(url, data, callback);
};
//
// export const deleteUser = (data, callback) => {
//     const url = `http://localhost:8080/deleteUser`;
//     postRequest(url, data, callback);
// };

