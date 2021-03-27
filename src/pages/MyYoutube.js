import React from "react"
import {
    Container,
    Card,
    CardBody
} from "reactstrap"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"


const MyYoutube = () =>{
return(
    <div>
    <SEO
        title="BSG | Backstreet gamer from Tirupati | My Youtube channel "
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
        canurl="https://bsgamer.in/youtubechannel"
        ogimg="../BSG.jpg"
        />
    <div align="center">
        <Container fluid>
        <br/>
        <Layout>
            <br/>
            <Card>
            <CardBody>
            <h1 className="titletext">My Youtube Channel</h1>
            {/* youtube feed */}
            <div>
                
            </div>
            </CardBody>
            </Card>
            <br/>
        </Layout>
        </Container>
    </div>
    </div>
    )
}
export default MyYoutube