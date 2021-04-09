# How to pass variables between components #

## Passing variables using props ##

```
function grandFather() {
    
    const [grandFatherData, setGrandFatherData] = useState('Default');

    return (
        <father data={grandFatherData} />
    )
}
```

The 'father' component is the child of the grandFather component.

```
function father(grandFatherProps) {
    return(
        <child data={grandFatherData.data} />
    )
}
```

The 'child' component is the child of the father component.

```
function child(fatherProps) {
    return(
       <div>
            This is my grandFather's value: {fatherProps.data}
       <div/>
    )
}
```
We pass the **grandFatherData** from the **grandFather** component to the **father** component, then we access it by the props and we pass it again to the **child** component. Now the **child** component has access to the **grandFather**'s state.