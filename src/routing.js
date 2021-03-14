import React from "react"
import {Route , Switch , BrowserRouter as Router} from "react-router-dom"

import App from "./App"
import PCbuid from "./pages/pcbuild"
import Notfound from "./pages/notfound"
import Mygear from "./pages/Mygear"

const Routing = () =>(
<Router>
    <Switch>
        <Route exact path="/" component={App}/>
        <Route  path="/pcbuilds" component={PCbuid}/>
        <Route path="/mygear" component={Mygear}/>
        <Route component={Notfound}/>
    </Switch>
</Router>
)
export default Routing