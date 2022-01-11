import utilStyles from '../styles/utils.module.css'
import Layout from "../components/layout"
import Image from 'next/image'

export default function Post() {
    return (
        <Layout headerImage='/images/about.png'>                
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    {`Hi - we are a couple from the Pacific Northwest who enjoy all aspects of the outdoors. 
                    On this page you'll find hiking + backpacking trips, camping excursions, guides, and more.
                    We mostly post about Oregon, where we live, but often travel outside the state to visit parks,
                    mountains, and other natural areas. Maybe we'll see you on the trail!`}

                    <br/><br/>
                    Setting sun and clouds over the Three Sisters (Bend, OR)
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