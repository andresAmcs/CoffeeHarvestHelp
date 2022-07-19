import {ApiCoffee} from "../config";

//Finca
export const getUsers = async () => {
  const resp = await fetch(ApiCoffee, {
     method: "GET"
  })
  const json = await resp.json()
  return json;
}