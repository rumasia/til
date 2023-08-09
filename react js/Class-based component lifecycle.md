We cant use use hooks in class based components so for side effects (useEffect() hook) we have special type of methods 
### componentDidMount() 
This method is called when the component mounts (rendered)
It works just like useEffect with empty array
### componentDidUpdate()
This method is called when the component is updated(re-render)
It works just like useEffect with some dependencies in array
### componentDidUnmount()
This method is called when the component is unmounted(remove from the dom)
It works just like useEffect with cleanup funtion
