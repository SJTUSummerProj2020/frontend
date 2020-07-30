function parseParams(data) { //json转为URL参数
    try {
        let tempArr = [];
        for (let i in data) {
            // var key = encodeURIComponent(i);
            let value = encodeURIComponent(data[i]);
            // tempArr.push(key + '=' + value);
            tempArr.push(value);
        }
        let urlParamsStr = tempArr.join('/');
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

const fetch = require("node-fetch");
let postRequest = (url, json, callback) => {

    let opts = {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    };

    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};
export {postRequest};

let getRequest = (url, json, callback) => {

    let opts = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include",
        mode: 'cors',
        cache: 'default',
    };
    // console.log("参数",url+"?"+parseParams(json));

    fetch(url+"/"+parseParams(json),opts)
        .then((response) => {
            // json=response.json();
            return response.json();
        })
        .then((data) => {
            callback(data);
            // console.log("data!!!",data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export {getRequest};

let deleteRequest = (url, json, callback) => {

    let opts = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include",
        mode: 'cors',
        cache: 'default',
    };
    // console.log("参数",url+"?"+parseParams(json));

    fetch(url+"/"+parseParams(json),opts)
        .then((response) => {
            // json=response.json();
            return response.json();
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};
export {deleteRequest};

let putRequest = (url, json, callback) => {

    let opts = {
        method: "PUT",
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    };

    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};
export {putRequest};