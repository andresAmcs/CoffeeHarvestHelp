import {ApiCoffee} from "../config";

//Users
export const getUsers = async () => {
  const resp = await fetch(ApiCoffee+"/users", {
     method: "GET"
  })
  const json = await resp.json()
  return json;
}

export const createUser = async (data) => {
  const resp = await fetch(ApiCoffee+"/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': "application/json"
    }
  })
  const json = await resp.json();
  return json;
}





export const dataToList = (json) =>{
  const data =json.data.map(item=>({
    
    id:item.id,
    nombre:item.nombre,
    genero:item.genero,
  }))
  return data
}

//Empleados

export const createEmpleado = async (data) =>{

  const resp = await fetch(ApiCoffee+"/empleados",{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    }
  })
  const json = await resp.json();
  return json;
}

export const getEmpleados = async () =>{
  const resp = await fetch(ApiCoffee+"/empleados", {
    method: "GET"
 })
 const json = await resp.json()
 return json;
}


export const deleteEmpleado = async (id) => {
  const uri = `https://coffeharvesthelp-api.herokuapp.com/api/v1/empleados/${id}`
  
  const resp = await fetch(uri, {
    method: "DELETE",
    headers: {
      'Content-Type': "application/json"
    }
  })
  const json = await resp.json();
  return json;
}

export const getEmpleado = async (id) => {
  const uri = `https://coffeharvesthelp-api.herokuapp.com/api/v1/empleados/${id}`

  const resp = await fetch(uri, {
    method: "GET",
  });
  const json = await resp.json();
  return json;
}

export const editarEmpleado = async (data,id) => {
  const uri = `https://coffeharvesthelp-api.herokuapp.com/api/v1/empleados/${id}`
  
  const resp = await fetch(uri, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': "application/json"
    }
  })
  const json = await resp.json();
  return json;
}

//Finca

export const getFinca = async (id) => {
  const uri = `https://coffeharvesthelp-api.herokuapp.com/api/v1/fincas/${id}`

  const resp = await fetch(uri, {
    method: "GET",
  });
  const json = await resp.json();
  return json;
}

export const getFincas = async () =>{
  const resp = await fetch(ApiCoffee+"/fincas", {
    method: "GET"
 })
 const json = await resp.json()
 return json;
}

export const dataToListFinca = (json) =>{
  const data =json.data.map(item=>({
    
    id:item.id,
    nombre:item.nombreFinca,
    ubicacion:item.ubicacionFinca
  }))
  return data
}

export const createFinca = async (data) =>{

  const resp = await fetch(ApiCoffee+"/fincas",{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    }
  })
  const json = await resp.json();
  return json;
}

export const editarFinca = async (data,id) => {
  const uri = `https://coffeharvesthelp-api.herokuapp.com/api/v1/fincas/${id}`
  
  const resp = await fetch(uri, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': "application/json"
    }
  })
  const json = await resp.json();
  return json;
}

//Lote

export const getLotes = async () =>{
  const resp = await fetch(ApiCoffee+"/lotes", {
    method: "GET"
 })
 const json = await resp.json()
 return json;
}

export const getLote = async (id) => {
  const uri = `https://coffeharvesthelp-api.herokuapp.com/api/v1/lotes/${id}`

  const resp = await fetch(uri, {
    method: "GET",
  });
  const json = await resp.json();
  return json;
}

export const deleteLote = async (id) => {
  const uri = `https://coffeharvesthelp-api.herokuapp.com/api/v1/fincas/${id}`
  
  const resp = await fetch(uri, {
    method: "DELETE",
    headers: {
      'Content-Type': "application/json"
    }
  })
  const json = await resp.json();
  return json;
}

export const createLote = async (data) =>{

  const resp = await fetch(ApiCoffee+"/lotes",{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    }
  })
  const json = await resp.json();
  return json;
}

export const dataToListLote = (json) =>{
  const data =json.data.map(item=>({
    
    id:item.id,
    cantArboles:item.cantArboles,
    tipoCafe:item.tipoCafe,
  }))
  return data
}

export const editarLote = async (data,id) => {
  const uri = `https://coffeharvesthelp-api.herokuapp.com/api/v1/lotes/${id}`
  
  const resp = await fetch(uri, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': "application/json"
    }
  })
  const json = await resp.json();
  return json;
}

//Registros

export const getRegistros = async () =>{
  const resp = await fetch(ApiCoffee+"/registroActividades", {
    method: "GET"
 })
 const json = await resp.json()
 return json;
}

export const dataToListActividad = (json) =>{
  const data =json.data.map(item=>({
    
    id:item.id,
    descripcion:item.descripcion
  }))
  return data
}

export const moneyToListActividad = (json) =>{
  const data =json.data.map(item=>({
    tipoLaborId:item.tipoLaborId,
    valorTotal:item.valorTotal
  }))
  return data
}

export const deleteRegistro = async (id) => {
  const uri = `https://coffeharvesthelp-api.herokuapp.com/api/v1/registroActividades/${id}`
  
  const resp = await fetch(uri, {
    method: "DELETE",
    headers: {
      'Content-Type': "application/json"
    }
  })
  const json = await resp.json();
  return json;
}
