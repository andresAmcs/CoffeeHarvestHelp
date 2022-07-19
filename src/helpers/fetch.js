import {ApiCoffee} from "../config";

//Finca
export const getUsers = async () => {
  const resp = await fetch(ApiCoffee+"/users", {
     method: "GET"
  })
  const json = await resp.json()
  return json;
}

export const createUser = async (data) => {
  const resp = await fetch(ApiCoffee, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': "application/json"
    }
  })
  const json = await resp.json();
  return json;
}