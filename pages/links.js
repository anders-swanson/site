import FeaturedPost from '../components/featuredpost'
import Layout from '../components/layout'
import LinkButton from '../components/linkbutton'
import RelatedPosts from '../components/related_posts'
import { Posts } from '../lib/metadata'
import utilStyles from '../styles/utils.module.css'

export default function Links({ featuredPost }) {
    return (
        <Layout headerImage='/images/links.JPG'>
            <div id='info' className={utilStyles.pageAnchor}>
                <FeaturedPost post={featuredPost}/>
            </div>
            <br/><br/>
            <div className={`${utilStyles.centeredRow}`} style={{'maxWidth': '800px'}}>
                <LinkButton 
                    title='Shop my LTK'
                    body='Like my outfits? They’re linked here!'
                    src='https://www.shopltk.com/explore/laurengastineau'
                />
                <LinkButton
                    title='REI Hipbelt Pocket'
                    body='My Favorite Backpack Attatchment'
                    src='https://bit.ly/3KkMTnp'
                    animation={utilStyles.bounceAnimation}
                />
                <LinkButton
                    title='My Amazon Favorites'
                    body='Items I Know & Love!'
                    src='https://www.amazon.com/shop/laurensbigadventure'
                    animation={utilStyles.shakeAnimation}
                />
                <LinkButton
                    title='Senita'
                    body='Discount Code: "LAURENG" saves 15%'
                    src='https://glnk.io/r4vq/laurensbigadventure'
                />
                <LinkButton
                    title='VERB Energy Bars'
                    body='This link saves 40% on the Starter Pack!! $̶2̶4̶.̶9̶5̶ ✨$15✨'
                    src='https://bit.ly/354avy0'
                />
                <LinkButton
                    title='Kamo Fitness'
                    body='Support Code: "LAURENG"'
                    src='http://kamofitness.com/LAURENG'
                />
                <LinkButton
                    title='My Go to Hiking Shorts'
                    body='Discount Code: "LAURENG222"'
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

export async function getStaticProps() {
    const posts = Posts()
    return {
      props: {
        featuredPost: posts[0]
      }
    }
  }
