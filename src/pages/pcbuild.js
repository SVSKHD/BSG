import React from "react"
import {
    Container,
    Card,
    CardBody
} from "reactstrap"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const PCbuid = () =>{
    return(
     <div>
        <SEO
        title="BSG | Backstreet gamer from Tirupati | My Pc Gear"
        description="All about Gamer from Tirupati with regular live gaming feed and every entertaining feed is seen here
        just subscribe and watch the show"
        keywords="
        Gamer from Tirupati , 
        Tirupati , 
        Console Gamer , 
        BSG-Backstreet gamer,
        PC Gaming gear,
        Total gear unlock,
        "
        canurl="https://bsgamer.in/pcbuilds"
        ogimg="../BSG.jpg"
        />
       <Container fluid>
       <br/>
    
       <Layout>
           <br/>
           <Card>
           <CardBody>
           <div align="center">
           <h1 className="titletext">PC-Builds</h1>
           <hr/>
           </div>
           </CardBody>
           </Card>
           <br/>
       </Layout>

       </Container>
     </div>
    )
}
export default PCbuid