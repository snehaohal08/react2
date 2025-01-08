import Netflixserise from "./componenets/Netflixserise"
import "./componenets/Netflix.css"

export const App = () => {
 // return ([<Netflixserise key="1"/>,<Netflixserise key="2"/>]
    return(
    <section className="container">
      <h1 className="card-heading">List of best Netfilx Serise</h1>
     <Netflixserise/>
    </section>

  )
}


