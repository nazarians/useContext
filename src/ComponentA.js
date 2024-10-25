import './App.css';
import react , { useState } from "react";
import ComponentB from "./ComponentB";


function ComponentA () {

const [userName, setUserName] = useState("Levik");
const [userFamily, setUserFamily] = useState("Nazarians");

const onChangeName = (e) => {
    return (
        setUserName(e.target.value)
    )
}

const onChangeFamily = (e) => {
    return (
        setUserFamily(e.target.value)
    )
}
 
return (
        <div className="box">
            <input type="text" onChange={onChangeName} value={userName}></input><br></br>
            <input type="text" onChange={onChangeFamily} value={userFamily}></input>
            <h1>Hello dear {userName + " " + userFamily}</h1>
            <ComponentB userNameB= {userName} userFamilyB={userFamily} />
        </div>
    )
}

export default ComponentA