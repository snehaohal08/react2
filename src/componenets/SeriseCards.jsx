export const SeriseCard=(props)=>{
    console.log(props);
    
    return(
        <li>
        <div>
            <div>
                <img src={props.currentEl.img_url} alt={props.currentEl.name} srcset="" width="40%" height="40%" />
            </div>
            <h2>Name:{props.currentEl.name}</h2>
            <h3>Rating:{props.currentEl.rating}</h3>
            <p>Summary :{props.currentEl.description} </p>
            <p>Genre:{props.currentEl.genre}</p>
            <p>Cast:{props.currentEl.cast}</p>
            {/* turniori operatore are used */}
            {/* <button>{age >=18 ? "Whatch Now":"Not Available"}</button> */}
            <a href={props.currentEl.watch_url} target="_blank">
                <button>Whatch Now</button>
            </a>
        </div>
    </li>
    )
}