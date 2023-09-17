const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
  headers: {
    accept: 'application/json', 
    'Content-Type': 'application/json',
    'X-VERIFY': 'd9e8b9fac784811a5dbd7f5e72f6f83e5688e1785c891e3b2fb2d36c33805653###1'
  },
  data: {
    request: 'ewogICJtZXJjaGFudElkIjogIlBHVEVTVFBBWVVBVDEzOSIsCiAgIm1lcmNoYW50VHJhbnNhY3Rpb25JZCI6ICJNVDc4NTA1OTAwNjgxODgxMDQiLAogICJtZXJjaGFudFVzZXJJZCI6ICJNVUlEMTIzIiwKICAiYW1vdW50IjogMTAwMDAsCiAgInJlZGlyZWN0VXJsIjogImh0dHBzOi8vd2ViaG9vay5zaXRlL3JlZGlyZWN0LXVybCIsCiAgInJlZGlyZWN0TW9kZSI6ICJQT1NUIiwKICAiY2FsbGJhY2tVcmwiOiAiaHR0cHM6Ly93ZWJob29rLnNpdGUvY2FsbGJhY2stdXJsIiwKICAicGF5bWVudEluc3RydW1lbnQiOiB7CiAgICAidHlwZSI6ICJQQVlfUEFHRSIKICB9Cn0='
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
