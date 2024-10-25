import './App.css';
import ComponentC from "./ComponentC";


function ComponentB(props) {

    return (
        <div className="box">
            <h2>componentB</h2>
            <ComponentC userNameC= {props.userNameB} userFamilyC={props.userFamilyB}/>
        </div>
    )
}

export default ComponentB