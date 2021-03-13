import React from "react"
import {
    Container,
    Row,
    Col,
    Card,
    CardBody
} from "reactstrap"
import Layout from "../components/Layout/layout"
const PCbuid = () =>{
    return(
     <div>
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