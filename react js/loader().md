A <B>loader</B> is a function in javascript defined inside react router and this function is executed by react router when you visit the route or just before the component function is rendered.loader function is executing on browser-site .we cannot use react hooks in loader function
### Advantage
It is useful in cases where we want to fetch data from backend before the component function get rendered
#### useLoaderData hook
useLoaderData  is a special type of hook which is imported from react-router-dom which helps you to get access to closest loader data.
In router we cannot use loader function in higher level <B>BUT</B> can be available in lower or same level.
### where loader function is stored?
It is better to use loader function in the page where we need this function.
### Returning responses in loader()
we can return any type of data in loader function it can be number,object,string and most importantly new response object by instantiating response constructor function (which takes two parameters first is any data of your choice and second argument is an object)
```
const res = new Response()
```
react router passes  an object to loader function which contain two important pieces of data 
```
export function loader({request,params})
```
through params we can get access to route parameters
#### useRouteLoaderData hook
It works almost same as useLoaderData hook but it takes route id as argument


