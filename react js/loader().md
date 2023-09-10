A <B>loader</B> is a function in javascript defined inside react router and this function is executed by react router when you visit the route or just before the component function is rendered.
### Advantage
It is useful in cases where we want to fetch data from backend before the component function get rendered
#### useLoaderData 
useLoaderData  is a special type of hook which is imported from react-router-dom which helps you to get access to closest loader data.
In router we cannot use loader function in higher level <B>BUT</B> can be available in lower or same level.
### where loader function is stored?
It is better to use loader function in the page where we need this function
