import "./EV.css"
export const EventProps=()=>{

    const HandleWelcomeUser=(user)=>{
        alert(`hii ${user}`);
    }
    const handleHover=()=>{
        alert(`hii thanks for hover me..`);
    }

    return(
        // parrent componenet
        <>
        <WelcomeUser onClick={()=> HandleWelcomeUser("sneha")}
            onMouseEnter={handleHover}
            />
        </>
    )
}

const WelcomeUser=(props)=>{
    const {onClick,onMouseEnter}=props;
    const handleGreeting=()=>{
        console.log("hii user welcome");
        onClick();
    }
    return(
        <>
        <button className="btn" onClick={onClick}>Click me</button>
        <button  className="bt"onMouseEnter={onMouseEnter}>Hover me</button>
        <button className="btn" onClick={handleGreeting}>Greeting</button>
        </>
    )
}