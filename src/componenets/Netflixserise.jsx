import seriseData from "../api/seriseData.json"
const Netflixserise = () => {
    return (
        <ul>
            <li>
                <div>
                    <div>
                        <img src={seriseData[0].img_url} alt="net1.jpg" srcset="" width="40%" height="40%" />
                    </div>
                    <h2>Name:{seriseData[0].name}</h2>
                    <h3>Rating:{seriseData[0].rating}</h3>
                    <p>Summary :{seriseData[0].description} </p>
                    <p>Genre:{seriseData[0].genre}</p>
                    <p>Cast:{seriseData[0].cast}</p>
                    {/* turniori operatore are used */}
                    {/* <button>{age >=18 ? "Whatch Now":"Not Available"}</button> */}
                    <a href={seriseData[0].watch_url} target="_blank">
                        <button>Whatch Now</button>
                    </a>
                </div>
            </li>
            <li>
                <div>
                    <div>
                        <img src={seriseData[1].img_url} alt="net1.jpg" srcset="" width="41%" height="41%" />
                    </div>
                    <h2>Name:{seriseData[1].name}</h2>
                    <h3>Rating:{seriseData[1].rating}</h3>
                    <p>Summary :{seriseData[1].description} </p>
                    <p>Genre:{seriseData[1].genre}</p>
                    <p>Cast:{seriseData[1].cast}</p>
                    {/* turniori operatore are used */}
                    {/* <button>{age >=18 ? "Whatch Now":"Not Available"}</button> */}
                    <a href={seriseData[1].watch_url} target="_blank">
                        <button>Whatch Now</button>
                    </a>
                </div>
            </li>
        </ul>

    );
}
export default Netflixserise;

// export const Footer = () => {
//     return <p> dm ds,m cd,msncdskjncdskncdsncdsknfkldsncfdskmfklnkldfmds.mflds</p>
// };

// React.createElement('h1',null,"hiiii sneha ohal...")