import Layout from '../components/layout'
import LinkButton from '../components/linkbutton'
import RelatedPosts from '../components/related_posts'
import { Posts } from '../lib/metadata'
import utilStyles from '../styles/utils.module.css'

export default function Post() {
    const latestPost = Posts()[0]
    return (
        <Layout headerImage='/images/links.JPG'>
            <div className={utilStyles.centered}>
                {`This page may contain affiliate links. By clicking on a link and purchasing an item, I'll receive an affiliate commission 
                at no additional cost to you. This helps supports my accounts and adventures. Thank you!`}
            </div>
            <br/>
            <br/>
            <div className={`${utilStyles.centeredRow}`} style={{'maxWidth': '800px'}}>
                <LinkButton title='Shop my LTK' body='Like my outfits? They’re linked here!' src='https://www.shopltk.com/explore/laurengastineau'/>
                <LinkButton title='REI Hipbelt Pocket' body='My Favorite Backpack Attatchment ' src='https://bit.ly/3KkMTnp'/>
                <LinkButton title='My Amazon Favorites' body='Items I Know & Love!' src='https://www.amazon.com/shop/laurensbigadventure'/>
                <LinkButton title='✨ Newest Blog Post  ✨' body={latestPost.title} src={'/blog/' + latestPost.id}/>
                <LinkButton title='Senita' body='Discount Code: "LAURENG" saves 15%' src='https://glnk.io/r4vq/laurensbigadventure'/>
                <LinkButton title='VERB Energy Bars' body='This link saves 40% on the Starter Pack!! $̶2̶4̶.̶9̶5̶ ✨$15✨' src='https://bit.ly/354avy0'/>
                <LinkButton title='Kamo Fitness' body='Support Code: "LAURENG"' src='http://kamofitness.com/LAURENG'/>
                <LinkButton title='My Go to Hiking Shorts' body='Discount Code: "LAURENG222"' src='https://bit.ly/3whRpQd'/>
            </div>
            <RelatedPosts
                text='Suggested Posts'
                metadata={{'title': ''}}
                tag="national park"
            />
        </Layout>
    )
}
