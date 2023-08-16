#### In counter.js file
```
import { useSelector, useDispatch,connect } from 'react-redux';

 import classes from './Counter.module.css';
import { Component } from 'react';
 class Counter extends Component {
   incrementHandler() {
     this.props.increment();
   }

   decrementHandler() {
     this.props.decrement();
   }

   toggleCounterHandler() {}

   render() {
     return (
       <main className={classes.counter}>
         <h1>Redux Counter</h1>
         <div className={classes.value}>{this.props.counter}</div>
         <div>
           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
         </div>
         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
       </main>
     );
   }
 }

 const mapStateToProps = state => {
   return {
     counter: state.counter
   };
 }

 const mapDispatchToProps = dispatch => {
   return {
     increment: () => dispatch({ type: 'increment' }),
     decrement: () => dispatch({ type: 'decrement' }),
   }
 };

 export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```
#### In index.js file
```
// import {createStore} from 'redux'
 import { legacy_createStore } from 'redux';
const counterReducer=(state={counter:0},action)=>{
    if(action.type === 'increment'){
        return {
            counter:state.counter+1
        }
    }
       if(action.type === 'decrement'){
        return {
            counter:state.counter-1
        }
    }
 return state;
}
const store = legacy_createStore(counterReducer);
    export default store;
```
