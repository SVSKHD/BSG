import React from "react"
import {Helmet} from "react-helmet"
const SEO = ({title , description , keywords , ogimg ,canurl , }) =>{
    return(
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="title" content={title}/>
                <meta name ="description" content = {description}/>
                <meta name ="keywords" content={keywords}/>
                <meta name = "robots" content = "index , follow"/>
                <meta name ="image" content={ogimg}/>
                {/* seo verification */}
                <meta name = "googlebot" content = "index , follow"/>
                {/* <meta name="yandex-verification" content="" /> */}
                {/* link */}
                <link rel = "canonical" href = {canurl}/>
                {/* favicon */}
                <link rel="icon" href="../../static/images/SV.ico" />
                
                {/* og */}
                <meta property ="og:title" content = {title}/>
                <meta property ="og:description" content = {description}/>
                <meta property ="og:type" content = "website"/>
                {/* <meta property ="og:url" content = {ogurl}/>
                <meta property ="og:image" content = {ogimg}/>
                <meta property ="og:image:secure_url" content ={ogurl} /> */}
                <meta property = "og:site_name" content={`${title} | BSG - BackStreet Gamer`}/>

                {/* twitter */}

                <meta name = "twitter : site" content ="da" />
                <meta name = "twitter : card" content ="summary_large_image" />
                <meta name = "twitter : title" content ={title} />
                <meta name = "twitter : description" content ={description} />
                {/* <meta name = "twitter : image" content = {ogimg} /> */}

                {/* analytics and id */}
                {/* <meta name = "fb:app_id" content={FBID}/> */}
                {/* verification */}
                <meta name="google-site-verification" content="fn6dZdm508an_IP6yaj8ozjk5j6ZEpL7V4LwNKzqo7A" />

            </Helmet>
        </div>
    )

}
export default SEO