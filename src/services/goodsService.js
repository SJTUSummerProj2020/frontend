import { postRequest, getRequest, deleteRequest, putRequest } from '../utils/ajax';

const header = 'https://ec2-100-25-4-241.compute-1.amazonaws.com:8080/';
export const getAllGoods = (data, callback) => {
  const url = header + 'goods/getAllGoods';
  getRequest(url, data, callback);
};

export const getGoodsByGoodsId = (data, callback) => {
  const url = header + 'goods';
  getRequest(url, data, callback);
};

export const getGoodsByGoodsType = (data, callback) => {
  const url = header + 'goods/getGoodsByGoodsType';
  getRequest(url, data, callback);
};

export const getGoodsByName = (data, callback) => {
  const url = header + 'goods/search';
  getRequest(url, data, callback);
};

export const getPopularGoods = (data, callback) => {
  const url = header + 'goods/getPopularGoods';
  getRequest(url, data, callback);
};

export const getAllAuctions = (data, callback) => {
  const url = header + 'goods/getAllAuctions';
  getRequest(url, data, callback);
};

export const getAuctionByAuctionId = (data, callback) => {
  const url = header + 'goods/getAuctionByAuctionId';
  getRequest(url, data, callback);
};

export const updateAuction = (data, callback) => {
  const url = header + 'goods/updateAuction';
  postRequest(url, data, callback);
};

export const deleteGoodsByGoodsId = (goodsId, callback) => {
  const url = header + 'goods/delete/' + goodsId;
  const data = {};
  deleteRequest(url, data, callback);
};

export const addAuction = (data, callback) => {
  const url = header + 'goods/addAuction';
  putRequest(url, data, callback);
};

export const editGoods = (data, callback) => {
  const url = header + 'goods/editGoods';
  postRequest(url, data, callback);
};

export const deleteAuctionByAuctionId = (data, callback) => {
  const url = header + 'goods/deleteAuctionByAuctionId';
  deleteRequest(url, data, callback);
};

export const editAuction = (data, callback) => {
  const url = header + 'goods/editAuction';
  postRequest(url, data, callback);
};
