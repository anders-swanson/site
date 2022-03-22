import utilStyles from '../styles/utils.module.css'
import Layout from "../components/layout"
import Image from 'next/image'
import Link from 'next/link'
import { Posts } from '../lib/metadata'

export default function Post() {
    const posts = Posts()
    const favoritePost = posts.filter(e => {
        return e.title === "Glacier via Chief Mountain"
    })[0].id
    return (
        <Layout headerImage='/images/about.png'>                
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`Welcome to our page! We are a couple from the Pacific Northwest who balance our 9-5s with outdoor adventures.
                    We both work as software engineers, but have a passion for the outdoors and spend most of our weekends/vacation time
                    hiking and exploring.`}
                    <br/><br/>
                    {`You'll find posts about our hiking, backpacking, guides, and more here.
                    Most of our content is centered around the Pacific Northwest, but we often travel and post about other parts of the world.`}
                    <br/><br/>
                    {`While you're here, consider checking out our `}<Link href={'/blog' + posts[0].id}>most recent post</Link>{`, 
                    or one of `}<Link href={'/blog' + favoritePost}>our favorites</Link>{`. Happy trails!`}
                    <br/><br/>
                </div>
                <Image
                    height={600}
                    width={900}
                    alt='sunset behind the three sisters'
                    src="/images/3-sisters-sunset.jpeg"
                />
                <strong>Setting sun and clouds over the Three Sisters (Bend, OR)</strong>
            </div>      
        </Layout>
    )
}