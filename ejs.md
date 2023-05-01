# ejs
ejs is a template engine which is used to create dynamic html content.
### steps
1. Run npm install ejs
2. then write the following code
```
const express=require('express');
const app=express();
app.set('views',path.join(__dirname,'views');
app.set('view engine' , 'ejs');

```
