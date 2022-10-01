import FeaturedPost from '../components/featuredpost'
import Layout from '../components/layout'
import LinkButton from '../components/linkbutton'
import RelatedPosts from '../components/related_posts'
import { Posts } from '../lib/metadata'
import utilStyles from '../styles/utils.module.css'
import { SocialIcon } from 'react-social-icons';
import config from '../lib/config'

export default function Links({ title, showSocial }) {
    const featuredPost = Posts()[0]
    return (
        <Layout
            headerImage='/images/links.JPG'
            headerText={title}
        >
            <div id='info' className={utilStyles.pageAnchor}>
                <FeaturedPost post={featuredPost}/>
            </div>
            <br/><br/>
            <div className={utilStyles.centeredRow} style={{'maxWidth': '800px'}}>
                {showSocial && 
                    <div className={utilStyles.centeredRow} style={{'marginBottom': '25px'}}>
                        <SocialIcon url={config.social.instagram}/>
                        <SocialIcon url={config.social.tiktok}/>
                        <SocialIcon url={config.social.pinterest}/>
                    </div>
                }
                <LinkButton
                    title='Shop my LTK'
                    body='Like my outfits? They’re linked here!'
                    src='https://www.shopltk.com/explore/laurengastineau'
                    animation={utilStyles.bounceAnimation}
                />
                <LinkButton
                    title='My Backpacking Gear'
                    body="Gear that's lasted me over 1000+ miles"
                    src='/blog/guides/backpacking-gear-guide'
                />
                <LinkButton
                    title='REI Hipbelt Pocket'
                    body='My Favorite Backpack Attatchment'
                    src='https://bit.ly/3KkMTnp'
                />
                <LinkButton
                    title='My Amazon Favorites'
                    body='Items I Know & Love!'
                    src='https://www.amazon.com/shop/laurensbigadventure'
                />
                <LinkButton
                    title='Kamo Fitness'
                    body='Support Code: "LAURENG"'
                    src='https://kamofitness.com/LAURENG'
                />
                <LinkButton
                    title='My Go to Hiking Shorts'
                    body='Use discount code "LAURENG222" to save!'
                    src='https://bit.ly/3whRpQd'
                />
            </div>
            <RelatedPosts
                text='Recommended Posts'
                metadata={{'title': ''}}
                tag="national park"
            />
        </Layout>
    )
}
