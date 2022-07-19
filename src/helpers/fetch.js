import {ApiCoffee} from "../config";

//Finca
export const getDataFinca = async (data,id) => {
    const url = `https://coffeharvesthelp-api.herokuapp.com/api/v1/fincas/${id}`
    const resp = await fetch(url, {
        method: "GET",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': "application/json"
        }})
    const json = await resp.json();
    return json;
  }