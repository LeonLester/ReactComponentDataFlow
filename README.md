# How to pass variables-functions between components #

## Passing variables-functions using props ##

This is an indicative code sample, just to showcase the way the variables are passed through the props. In order to see working code please refer to the components/withoutContext folder.

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




## Passing variables-functions using Context ##

This is an indicative code sample, just to showcase the way the variables are passed through **Context**. In order to see working code please refer to the components/withContext folder.




Keep in mind that with **Context** we don't need to pass props to every inner component because **Context** is automaticaly accessible by all child components. 

First we need to import **createContext**.
```
import {createContext} from 'react'
```



Then we need to create the **Context** variable, and provide it to all the inner components of the page using **Context.Provider** together with the value that we wish to provide to all the inner components. 
```
export const MyContext = createContext();

function grandFather() {
    
    const [grandFatherData, setGrandFatherData] = useState('Default');

    return (
        <MyContext.Provider value={grandData}>
            <father 
                state = {grandFatherData} 
                stateFunction = {setGrandFatherData} 
            />
        </MyContext.Provider>    
    )
}
```



The **father** component is the child of the **grandFather** component. 

In order to gain access to the **Context** first we need to import  the **useContext** Hook like so.

```
import {useContext} from 'react';
```
Then we use this command to get the value of the **Context**.
```
function father() {

    const context = useContext(MyContext); //Getting the value of Context

    return(
        <div>
            This is the context value: {context}

            <child 
                data = {grandFatherData.data} 
                changeStateFunction = {grandfatherProps.stateFunction}        
            />
        </div>
    )
}
```



The **child** component is the **child** of the father component. We do the same thing in **child** component to access the context

```
import {useContext} from 'react';

function child() {

    //Here we call the grandFathers setState function.
    context.stateFunction('GrandFather new value');

    return(
       <div>
            This is my grandFather's value: {context.state}
       <div/>
    )
}
```




We pass the **grandFatherData** state variable and the **setGrandFatherData** state function from the **grandFather** component to **Context.Provider**. Now every sub component of the **grandFather** commponect has direct access to the **Context** value.

In our case which we have only three components, its not as important to use Context as it would be if we had 10 or 20 components. 


