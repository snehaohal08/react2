// using setCount we can change the value of count 
import { useState } from "react";

export const State = () => {
    // let value = 0
    // const handleButtonClick = () => {
    //     value++;
    //     console.log(value);
    // }

    // let array =useState();  
    // console.log(useState(array))
    // SYNTAX OF USE STATE =>: cont is a current value usestate is hook (0) 0 is intitial value of the count state 
    const [count, setCount] = useState(0)
    console.log("parent componenet renderd");
    const handleButtonClick = () => {
        setCount(() => count + 1)
    }

    const handleButton = () => {
        setCount(() => count - 1)
    }
    return (
        <>
            <div className="main-div">
                <h1>{count}</h1>
                <button className="bt" onClick={handleButtonClick} >Increment</button><br />
                <button className="bt" onClick={handleButton}>Decrement</button>
            </div>
            <ChildComponenet />
        </>

    )
}
function ChildComponenet() {
    console.log("child componenet renderd");
    return (
        <div className="main-div">
            <h1>child componenet</h1>
        </div>
    )
}