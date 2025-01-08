export const SeriseCard = ({Data}) => {
    // console.log(props);
    const {id,img_url,name,rating,description,cast,genre,watch_url}=Data

    const btn_style ={
        padding:"1.2rem 2.4rem",
        border:"none",
        fontSize:"1.6rem",
        backgroundColor:"var(--bnt-hover-bg-color)",
        color:"var(--bg-color)"
    }

    return (
        <li className="card">
            <div>
                <div>
                    <img src={img_url} alt={name} srcSet="" width="40%" height="40%" />
                </div >
                <div className="card-content">
                    {/* inline css style={{margin:"1.2rem 0"}} */}
                <h2 style={{margin:"1.2rem 0"}}>Name:{name}</h2>
                <h3 style={{fontSize:"18px"}}>Rating:{rating}</h3>
                <p>Summary :{description} </p>
                <p>Genre:{genre}</p>
                <p>Cast:{cast}</p>

                <a href={watch_url} target="_blank">
                    <button style={btn_style}>Whatch Now</button>
                </a>
                </div>
            </div>
        </li>
    )
}