import axios from 'axios';
export const cronos = axios.create({
  baseURL: 'https://ambrosia-cors-proxy-qokytbx7hq-uc.a.run.app/https://ambrosia-cronos-ag-4axjffbidq-uc.a.run.app',
  timeout: 20000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export const atlas = axios.create({
  baseURL: 'https://ambrosia-cronos-ag-4axjffbidq-uc.a.run.app',
  timeout: 2000,
  headers: { 'X-Custom-Header': 'foobar' }
});
