import Layout from '../components/layout'
import LinkButton from '../components/linkbutton'
import utilStyles from '../styles/utils.module.css'

export default function Post() {
    return (
        <Layout headerImage='/images/links.JPG'>
            <div className={`${utilStyles.centeredRow}`} style={{'maxWidth': '800px'}}>
                <LinkButton title='My Amazon Favorites' body='Items I Know & Love!' src='https://www.amazon.com/shop/laurensbigadventure'/>
                <LinkButton title='✨ Newest Blog Post  ✨' body='Oregon’s Best Wildflower Hikes 🌻' src='https://www.laurensbigadventure.com/blog/oregon/crg-wildflowers'/>
                <LinkButton title='VERB Energy Bars' body='This link saves 40% on the Starter Pack!! $̶2̶4̶.̶9̶5̶ ✨$15✨' src='https://bit.ly/354avy0'/>
                <LinkButton title='Kamo Fitness' body='Support Code: "LAURENG"' src='http://kamofitness.com/LAURENG'/>
                <LinkButton title='Senita' body='Discount Code: "LAURENG" saves 15%' src='https://glnk.io/r4vq/laurensbigadventure'/>
                <LinkButton title='My Go to Hiking Shorts' body='Discount Code: "LAURENG222"' src='https://bit.ly/3whRpQd'/>
                <LinkButton title='Story Jewelry' body='Discount Code: "LAURENG15" saves 15%' src='https://bit.ly/3vu9eep'/>
            </div>
        </Layout>
    )
}