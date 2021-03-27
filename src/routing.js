import React, { useState } from "react"
import {Route , Switch , BrowserRouter as Router} from "react-router-dom"

import App from "./App"
import PCbuid from "./pages/pcbuild"
import Notfound from "./pages/notfound"
import Mygear from "./pages/Mygear"
import MyYoutube from "./pages/MyYoutube"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

import {UserContext} from "./context/UserContext"
import firebaseConfig from "./config/firebaseConfig"
import firebase from "firebase/app"
import "firebase/auth"
// firebase
firebase.initializeApp(firebaseConfig)

const Routing = () =>{
const [user , setUser] = useState(null)
return(
<Router>
    <UserContext.Provider value={{user , setUser}}>
    <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/pcbuilds" component={PCbuid}/>
        <Route exact path="/mygear" component={Mygear}/>
        <Route exact path="/youtubechannel" component={MyYoutube}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="*" component={Notfound}/>
    </Switch>
    </UserContext.Provider>
</Router>
)
}
export default Routing