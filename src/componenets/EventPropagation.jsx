import "./EV.css";
export const EventPropagation =()=>{
    const handleGrandParent=()=>{
        console.log("GrandParent Clicked");
    };
    const handleParentClick=()=>{
        console.log("Parent Clicked");
    };
    const handleChildClick=(event)=>{
        console.log(event);
        event.stopPropagation();
        console.log("child  Clicked");
    };
    return(
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="btn" onClickCapture={handleChildClick}>
                        Child div
                    </button>
                </div>
            </div>

        </section>
    );
};