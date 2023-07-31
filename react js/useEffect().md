## What is useEffect?
useEffect() is hook in react which is define inside functional components.

It does not render UI or show something on screen its main function is in side effects like sending http requests , store data in browser storage ,set and anage timers etc.

 It takes two parameters first parameter is function and second parameter is an an array which consist of dependencies .To execute the function parameter or not depends only on the dependencies if the dependencied change the functions executes and vice versa.

 When the component evaluates for the first time the function executes
```
import React, { useEffect} from 'react';
useEffect(()=>{} , [])
```
