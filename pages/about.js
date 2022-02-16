import utilStyles from '../styles/utils.module.css'
import Layout from "../components/layout"
import Image from 'next/image'

export default function Post() {
    return (
        <Layout headerImage='/images/about.png'>                
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    {`Welcome to our page - We are a couple from the Pacific Northwest who enjoy spending time outdoors.`}
                    <br/><br/>
                    {`On this page you'll find hiking/backpacking/camping trips, guides, and more.
                    Most of the content here is focused on the Pacific Northwest, 
                    but we often travel and post about other parts of the world.`}
                    <br/><br/>
                    {`Happy trails!`}
                    <br/><br/>
                    <strong>Setting sun and clouds over the Three Sisters (Bend, OR)</strong>
                </div>
                <Image
                    height={450}
                    width={600}
                    alt='sunset behind the three sisters'
                    src="/images/3-sisters-sunset.jpeg"
                />
            </div>        
            <hr/>        
        </Layout>
    )
}