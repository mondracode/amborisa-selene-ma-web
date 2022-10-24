import rest from "./rest";

const cronosGetRequest = () => rest.get('/users', {
  headers: {},
  params: {},
}).then(() => {

});
