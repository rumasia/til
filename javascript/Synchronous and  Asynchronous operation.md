### Synchronous
means the operation must be completed before the following opertion (code) can be started and executed.
### Asynchronous
means the operation can be completed simultaneously with other operations.It does not block the execution of the following code.

```
 let fileData;
 fileData=fs.readFileSync('data-text);
 
 ```
