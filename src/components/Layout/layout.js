import Footer from "./footer"
import Header from "./Header"
import NAVB from "./NAVB"

const Layout = (props) =>{
    return(
     <div>
         <NAVB/>
         <br/>
         <Header/>
          {props.children}
         <Footer/>
     </div>
    )
}
export default Layout