import seriseData from "../api/seriseData.json"
import { SeriseCard } from "./SeriseCards";
const Netflixserise = () => {
    return (
        <ul>
            {
                seriseData.map((currentEl) => {
                    return <SeriseCard key={currentEl.id} currentEl={currentEl} />
                })
            }

        </ul>

    );
}
export default Netflixserise;

// export const Footer = () => {
//     return <p> dm ds,m cd,msncdskjncdskncdsncdsknfkldsncfdskmfklnkldfmds.mflds</p>
// };

// React.createElement('h1',null,"hiiii sneha ohal...")