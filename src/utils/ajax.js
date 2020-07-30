function parseParams (data) { // json转为URL参数
  try {
    const tempArr = [];
    for (const i in data) {
      // var key = encodeURIComponent(i);
      const value = encodeURIComponent(data[i]);
      // tempArr.push(key + '=' + value);
      tempArr.push(value);
    }
    const urlParamsStr = tempArr.join('/');
    return urlParamsStr;
  } catch (err) {
    return '';
  }
}

// function getParams(url) {  //URL参数转为json
//     try {
//         var index = url.indexOf('?');
//         url = url.match(/\?([^#]+)/)[1];
//         var obj = {}, arr = url.split('&');
//         for (var i = 0; i < arr.length; i++) {
//             var subArr = arr[i].split('=');
//             var key = decodeURIComponent(subArr[0]);
//             var value = decodeURIComponent(subArr[1]);
//             obj[key] = value;
//         }
//         return obj;
//
//     } catch (err) {
//         return null;
//     }
// }

const fetch = require('node-fetch');

const postRequest = (url, json, callback) => {

  const opts = {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  };

  fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export { postRequest };

const getRequest = (url, json, callback) => {

  const opts = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors',
    cache: 'default'
  };
    // console.log("参数",url+"?"+parseParams(json));

  fetch(url + '/' + parseParams(json), opts)
    .then((response) =>
    // json=response.json();
      response.json())
    .then((data) => {
      callback(data);
      // console.log("data!!!",data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getRequest };

const deleteRequest = (url, json, callback) => {

  const opts = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors',
    cache: 'default'
  };
    // console.log("参数",url+"?"+parseParams(json));

  fetch(url + '/' + parseParams(json), opts)
    .then((response) =>
    // json=response.json();
      response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export { deleteRequest };

const putRequest = (url, json, callback) => {

  const opts = {
    method: 'PUT',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  };

  fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export { putRequest };
