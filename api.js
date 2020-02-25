const axiosBase = require('axios');
const axios = axiosBase.create({
  headers: {
    'User-Agent':
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.91 Mobile/15E148 Safari/605.1'
  }
});

exports.getFunction = (url, callback, option = null) => {
  axios.get(url, option)
    .then(response => {
      const { data: docs } = response;
      callback(docs);
    })
    .catch(error => {
      console.log(error);
    });
};