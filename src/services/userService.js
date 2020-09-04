import { postRequest, getRequest,putRequest} from '../utils/ajax';

export const login = (data, callback) => {
  const url = 'http://localhost:8080/sso/login';
  postRequest(url, data, callback);
};

export const register = (data, callback) => {
  const url = 'http://localhost:8080/user/register';
  postRequest(url, data, callback);
};

export const logout = (callback) => {
  const url = 'http://localhost:8080/sso/logout';
  postRequest(url, {}, callback);
};

export const checkSession = (callback) => {
  const url = 'http://localhost:8080/sso/checkSession';
  getRequest(url, {}, callback);
};

export const getOrdersByUserId = (data, callback) => {
  const url = 'http://localhost:8080/order/getOrdersByUserId';
  getRequest(url, data, callback);
};

export const addOrder = (data, callback) => {
  const url = 'http://localhost:8080/order/addOrder';
  putRequest(url, data, callback);
};

export const getAllUsers = (data, callback) => {
  const url = 'http://localhost:8080/user/getAllUsers';
  getRequest(url, data, callback);
};

export const getAllOrders = (data, callback) => {
  const url = 'http://localhost:8080/order/getAllOrders';
  getRequest(url, data, callback);
};

export const changeUserStatusByUserId = (data, callback) => {
  const url = 'http://localhost:8080/user/changeUserStatusByUserId';
  postRequest(url, data, callback);
};

export const getRecommendGoods = (data, callback) => {
  const url = 'http://localhost:8080/goods/getRecommendGoods';
  getRequest(url, data, callback);
};

// export const getUsers = (data, callback) => {
//     const url = `http://localhost:8080/getUsers`;
//     postRequest(url, data, callback);
// };
//
export const editUser = (data,callback) => {
    const url = `http://localhost:8080/user/editUser`;
    postRequest(url, data, callback);
};

export const getUserById = (userId,callback) => {
  const url = `http://localhost:8080/user/getUserById/` + userId;
  const data = {};
  getRequest(url, data, callback);
};
//
// export const deleteUser = (data, callback) => {
//     const url = `http://localhost:8080/deleteUser`;
//     postRequest(url, data, callback);
// };

