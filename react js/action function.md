Just like loader function helps in loading data action function helps in fetching data like loader it runs on browser site.
In the form make sure that all inputs have name attributes next replace form with Form imported from react-router-dom this Form makesure omitting browser deault behaviour of sending request to backend this request is not sent to backend but to your action.Pass request and params to your action function and call formData() method on requset store it in data object and then call get() on data 
```
export async function action ({request,params}){
const data=request.formData();
const listData={
title:data.get('title'),
description:data.get('description'),
summary:data.get('summary'),
}
const response=await fetch('',{method:'post',headers:{'Content-Type':'application/json},body:JSON.stringify(listData)})

```
