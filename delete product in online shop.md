 How to delete products from  online shop  by applying MVC pattern.

In the <strong> product-model.js </strong> file write the following code
```
 async remove(){
                const productId=new mongodb.ObjectId(this.id);
                return db.getDb().collection('products').deleteOne({_id:productId});
                }

```
          
In the <strong> admin-controller.js </strong> write the following code.
```
 async function deleteProduct(req,res,next){
                let product;
                try{
                  product=await Product.findById(req.params.id)
                  await product.remove();
                  }catch(error){
                   return next(error);
                   }
                 res.redirect('/admin/products')   // this path leads to the all products page
                 }

```
          
     To make it   <strong> available outside this file </strong> use
   ```
  module.exports={
           deleteProduct:deleteProduct
           }
```
         
In the  <strong> admin.routes.js file  </strong>  add a route for delete request and write the following code
```
 router.delete('/products/:id',adminController.deleteProduct);
```
         
               
                
                
                
