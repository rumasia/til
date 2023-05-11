 How to delete products from  online shop  by applying MVC pattern.
In the product-model.js file write the following code
```
 async remove(){
                const productId=new mongodb.ObjectId(this.id);
                return db.getDb().collection('products').deleteOne({_id:productId});
                }

```
          
In the admin-controller.js write the following code.
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
          
         To make it available outside this file use.
   ```
  module.exports={
           deleteProduct:deleteProduct
           }
```
         
In the admin.routes.js file  add a route for delete request and write the following code
```
 router.delete('/products/:id',adminController.deleteProduct);
```
         
               
                
                
                
