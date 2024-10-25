import './App.css';


function ComponentC(props) {

    return (
        <div className="box">
            <h2>componentC</h2>
            <h3>bye dear {props.userNameC} {props.userFamilyC}</h3>
        </div>
    )
}

export default ComponentC