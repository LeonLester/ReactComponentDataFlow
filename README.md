# How to pass variables-functions between components #

## Passing variables-functions using props ##

This is an indicative code sample, just to showcase the way the variables are passed through the props. In order to see working code please refer to the components folder.

```
function grandFather() {
    
    const [grandFatherData, setGrandFatherData] = useState('Default');

    return (
        <father 
            data = {grandFatherData} 
            stateFunction = {setGrandFatherData} 
        />
    )
}
```

The 'father' component is the child of the grandFather component.

```
function father(grandFatherProps) {
    return(
        <child 
            data = {grandFatherData.data} 
            changeStateFunction = {grandfatherProps.stateFunction}        
        />
    )
}
```

The 'child' component is the child of the father component.

```
function child(fatherProps) {
    const changeGrandFatherState = fatherProps?.changeStateFunction;

    //Here we call the grandFathers setState function.
    changeSomonesState('GrandFather new value');

    return(
       <div>
            This is my grandFather's value: {fatherProps.data}
       <div/>
    )
}
```
We pass the **grandFatherData** state variable and the **setGrandFatherData** state function from the **grandFather** component to the **father** component, then we access them by the props and pass them again to the **child** component. Now the **child** component has access to the **grandFather**'s state and the **setGrandFatherData** state function.

