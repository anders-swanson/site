import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import { ImagePathBuilder } from "../../../lib/common"
import Link from 'next/link'
import Image from 'next/image'
import RelatedPosts from '../../../components/related_posts'

//+metadata
let metadata = {
    "title": "Willow Creek Hot Springs",
    "date": "2021-07-05",
    "image": "/images/oregon/willow-creek/thumbnail.jpg",
    "tags": ["camping", "hot springs", "steens"]
}

const image = ImagePathBuilder('/images/oregon/willow-creek')
const campground = 'https://www.google.com/maps/place/Willow+Creek+Campground/@42.3379617,-118.2464641,11z/data=!4m12!1m6!3m5!1s0x54b4152dfdcec47f:0x797819d31a0932a1!2sWillow+Creek+Hot+Springs!8m2!3d42.2755785!4d-118.2653128!3m4!1s0x0:0xe03ae29c68b15dcd!8m2!3d42.2751892!4d-118.2656014'

export default function Post() {
    return (
        <Layout
            headerImage={image('cover.jpg')}
            headerText={metadata.title}
            subText={`1 night camping`}
            description={`Secluded hot spring deep in Southeastern Oregon.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                Willow Creek hot springs is a remote springs on BLM land, located at a basic, walk-up, 
                <Link href={campground}> free-to-use campground</Link>. Willow Creek is about an hour drive
                east from the town of Fields - the roads were in good condition in 2021.
                <br/><br/>
               {`The springs are divided into two sections, for hot and cool pools. The area is quiet,
                being so remote, though we did chat up some locals from McDermitt while soaking at the spring 
                (they were incredibly friendly).`}
                </div>
                <Image
                        alt='campsite'
                        height={450}
                        width={300}
                        src={image('springs.jpg')}
                />
                <div className={utilStyles.textBlock}>
                    {`There are about six spots at the campground, which you'll probably have all to yourself. 
                    The springs is situated right next to the parking lot, and there is a pit toilet maintained 
                    by the BLM. The campground is otherwise very basic.`}
                    <br/><br/>
                    {`Take caution if you are driving here after or during heavy rain, as you will probably get stuck
                    in the mud, which for some reason is incredibly sticky here.`}
                    <br/><br/>
                    {`If you are passing through the town of Fields, definitely stop for one of their famous milkshakes.
                    Fields is also the only place for food or gas within a few hours drive.`}
                </div>
                <Image
                    alt='campsite'
                    height={450}
                    width={300}
                    src={image('tent.jpg')}
                />
                <Image
                    alt='sunset'
                    height={600}
                    width={900}
                    src={image('cover.jpg')}
                />     
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="steens"
            />
        </Layout>
    )
}
