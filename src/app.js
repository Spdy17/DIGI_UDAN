const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
  headers: {
    accept: 'application/json', 
    'Content-Type': 'application/json',
    'X-VERIFY': '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399###1'
  },
  data: {
    request: 'ewogICJtZXJjaGFudElkIjogIk1FUkNIQU5UVUFUIiwKICAibWVyY2hhbnRUcmFuc2FjdGlvbklkIjogIk1UNzg1MDU5MDA2ODE4ODEwNCIsCiAgIm1lcmNoYW50VXNlcklkIjogIk1VSUQxMjMiLAogICJhbW91bnQiOiAxMDAwMCwKICAicmVkaXJlY3RVcmwiOiAiaHR0cHM6Ly93ZWJob29rLnNpdGUvcmVkaXJlY3QtdXJsIiwKICAicmVkaXJlY3RNb2RlIjogIlJFRElSRUNUIiwKICAiY2FsbGJhY2tVcmwiOiAiaHR0cHM6Ly93ZWJob29rLnNpdGUvY2FsbGJhY2stdXJsIiwKICAibW9iaWxlTnVtYmVyIjogIjk5OTk5OTk5OTkiLAogICJwYXltZW50SW5zdHJ1bWVudCI6IHsKICAgICJ0eXBlIjogIlBBWV9QQUdFIgogIH0KfQ=='
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
