import Footer from "./footer"
import Header from "./Header"

const Layout = (props) =>{
    return(
     <div>
         <Header/>
          {props.children}
         <Footer/>
     </div>
    )
}
export default Layout