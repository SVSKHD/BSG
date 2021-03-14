import React from "react"
import {Route , Switch , BrowserRouter as Router} from "react-router-dom"
import App from "./App"
import PCbuid from "./pages/pcbuild"
import Notfound from "./pages/notfound"
const Routing = () =>(
<Router>
    <Switch>
        <Route exact path="/" component={App}/>
        <Route  path="/pcbuilds" component={PCbuid}/>
        <Route component={Notfound}/>
    </Switch>
</Router>
)
export default Routing