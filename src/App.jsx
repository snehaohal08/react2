// import Netflixserise from "./componenets/Netflixserise"
// import "./componenets/Netflix.css"
// import "./componenets/Netflix.module.css"
// import { EventHandling } from "./componenets/EventHandling"
// import { EventProps } from "./componenets/EventProps"
// import { EventPropagation } from "./componenets/EventPropagation"
import "./componenets/EV.css"
import { State } from "./componenets/hooks/State"

export const App = () => {
 // return ([<Netflixserise key="1"/>,<Netflixserise key="2"/>]
    return(
    <section className="container">
      {/* <h1 className="card-heading">List of best Netfilx Serise</h1> */}
     {/* <Netflixserise/> */}
     {/* <EventHandling/> */}
     {/* <EventPropagation/> */}
     {/* <EventProps/> */}
     <State/>
    </section>

  )
}


