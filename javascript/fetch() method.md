There are different ways to send ajax request from frontend to the server.One great way is using fetch method.
The first parameter in the fetch function should be the url of the server to which the request is send and second parameter is an object which contain properties like method,body.By dafault the method is get and a get request is 
sent.
Body contains the data which we sent with the request.
      
      
```
 fetch('Url of the sever to which the request is send ', {
       method:'..',
       body:'..' 
       });

```
      
    
   
