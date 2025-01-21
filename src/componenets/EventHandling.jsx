import "./EV.css"
export const EventHandling =()=>{

    // function handleButtonClick(){
    //     alert("hey i am click event...")
    // }
const handleButtonClick  =(event)=>{
    console.log(event);
    console.log(event.target)
    console.log(event.type)
    alert("hey i am onclick event...")

    }
    const handleWelcomUser=(user)=>{
        console.log(`hii ${user}, welcome to event handler..`);
}
    return(
        <>
        {/* function component with named function */}
        <button  className="btn" onClick={handleButtonClick}>Click me</button>
        <br />
        {/* fat arrow function asel tar ch function la call karaych  ex handleButtonClick() */}
        <button  className="btn" onClick={(event)=>handleButtonClick(event)}>Click me 2</button>
        <br />
        <button className="btn" onClick={(event)=> console.log(event)}>inline function</button>
         <br />
        {/* function componenet with inline arrow function */}
        <button className="btn" onClick={()=> alert("hii i am inline arrow funtion")}>Inline arr fun </button>
        <br />
        {/* <button  className="bt" onClick={handleWelcomUser("sneha")}>Click me</button> */}
        <button  className="bt" onClick={ ()=>handleWelcomUser("sneha")}>Click me</button>
        <button  className="bt" onClick={ ()=>handleWelcomUser("mosin")}>Click me</button>

        </>
    )
}