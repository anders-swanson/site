import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import { ImagePathBuilder } from "../../../lib/common"
import Slider from "../../../components/slider"
import Link from 'next/link'

//+metadata
let metadata = {
    "title": "Goblin Valley",
    "desc": "",
    "date": "2020-11-06",
    "image": "/images/utah/goblin-valley/thumbnail.jpg",
    "tags": ["hiking"]
}

const subText = '7.91 miles, 1,191 feet gain'
const image = ImagePathBuilder('/images/utah/goblin-valley')
const trailhead = 'https://www.google.com/maps/place/Goblin+Overlook/@38.5670356,-110.705913,16.54z/data=!4m13!1m7!3m6!1s0x8749a2b4c60051bb:0x3d0ce33fdda3dbb6!2sGoblin+Valley+Rd,+Utah!3b1!8m2!3d38.6080852!4d-110.6837684!3m4!1s0x8749bd7b2b723b91:0xcc4f51d8ca254352!8m2!3d38.564315!4d-110.7036055'

export default function Post() {
    return (
        <Layout headerImage={image('cover.jpg')} headerText={metadata.title} subText={subText}>
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    <Link href={trailhead}>Goblin Valley</Link>{` is a state park in Utah ($20 entry fee for day use), containing
                    unique sandstone formations that may or may not look like Goblins. The main defined trail from the parking lot
                    loops around the back of the valley, and leads to a couple of caves known as the lair of the goblin. These caves
                    are definitely interesting, but the main attraction is exploring the sandstone formations in the valley itself.
                    There's no official trail in the valley, but a multitude of social trails and offshoots. You can wander as you see
                    fit - exploring up side canyons and washes. If you climb the central feature of the valley, a grey stone hill, you
                    are granted a sweeping view of the goblins.`}                                           
                </div>
                <Image
                        alt='three sisters'
                        height={400}
                        width={600}
                        src={image('3-sisters.jpg')}
                />
                <div className={utilStyles.textBlock}>                
                    If you are thinking about making the trip to Goblin Valley - do it. This place is seriously amazing and has some of
                    the most unqiue and accessible sandstone formations around.
                    <br/><br/>
                    {`Camping at the state park is available for a fee, but you can drive a bit further down the road away from the
                    highway to dispersed camp sites (there's a few areas with dispersed sites along the road). These dispersed campgrounds are
                    unimproved.`}
                    <br/><br/>
                    {`If you want to continue to explore the area, there are several slot canyons a couple miles from Goblin Valley.`}
                </div>
                <Image
                        alt='goblins'
                        height={400}
                        width={600}
                        src={image('gob1.jpg')}
                />
                <div className={utilStyles.textBlock}>
                   
                </div>
            </div>
            <div className={utilStyles.flexWrapContainer}>
                <Slider
                    width="1200px"
                    height="800px"
                    slides={[
                        image('cover.jpg'),
                        image('gob2.jpg'),
                        image('gob3.jpg')
                    ]}
                /> 
            </div>
            
            <hr/>
            <div className={utilStyles.flexWrapContainer}>
                    A goblin in its lair. Hanging from goblin noses not recommended.
            </div>
            <div className={utilStyles.flexWrapContainer}>
                    <Image
                        alt='goblin in its lair'
                        height={600}
                        width={450}
                        src={image('lair.jpg')}
                   />
                   <Image
                        alt='goblin nose'
                        height={600}
                        width={450}
                        src={image('gob4.jpg')}
                   />
            </div>
        </Layout>
    )
}
//2448 3264