import { postRequest, getRequest, deleteRequest, putRequest } from '../utils/ajax';

export const getAllGoods = (data, callback) => {
  const url = 'http://localhost:8080/goods/getAllGoods';
  getRequest(url, data, callback);
};

export const getGoodsByGoodsId = (data, callback) => {
  const url = 'http://localhost:8080/goods';
  getRequest(url, data, callback);
};

export const getGoodsByGoodsType = (data, callback) => {
  const url = 'http://localhost:8080/goods/getGoodsByGoodsType';
  getRequest(url, data, callback);
};

export const getGoodsByName = (data, callback) => {
  const url = 'http://localhost:8080/goods/getGoodsByName';
  getRequest(url, data, callback);
};

export const getPopularGoods = (data, callback) => {
  const url = 'http://localhost:8080/goods/getPopularGoods';
  getRequest(url, data, callback);
};

export const getAllAuctions = (data, callback) => {
  const url = 'http://localhost:8080/goods/getAllAuctions';
  getRequest(url, data, callback);
};

export const getAuctionByAuctionId = (data, callback) => {
  const url = 'http://localhost:8080/goods/getAuctionByAuctionId';
  getRequest(url, data, callback);
};

export const updateAuction = (data, callback) => {
  const url = 'http://localhost:8080/goods/updateAuction';
  postRequest(url, data, callback);
};

export const deleteGoodsByGoodsId = (data, callback) => {
  const url = 'http://localhost:8080/goods/deleteGoodsByGoodsId';
  deleteRequest(url, data, callback);
};

export const addAuction = (data, callback) => {
  const url = 'http://localhost:8080/goods/addAuction';
  postRequest(url, data, callback);
};

export const editGoods = (data, callback) => {
  const url = 'http://localhost:8080/goods/editGoods';
  postRequest(url, data, callback);
};

export const deleteAuctionByAuctionId = (data, callback) => {
  const url = 'http://localhost:8080/goods/deleteAuctionByAuctionId';
  deleteRequest(url, data, callback);
};

export const editAuction = (data, callback) => {
  const url = 'http://localhost:8080/goods/editAuction';
  postRequest(url, data, callback);
};
