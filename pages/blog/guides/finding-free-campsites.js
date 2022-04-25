import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Image from 'next/image'
import Link from 'next/link'
import RelatedPosts from '../../../components/related_posts'

//+metadata
let metadata = {
    "title": "Finding Free Campsites",
    "date": "2022-01-20",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLVooI0kgLGMI0IBWJ7MLlQVv91otMikeyds_Ouuk_jkBuQvytB07HjrYPKI-XGRtLc-8G-NTJV92zze-1hqTDldOtwuWuD4ISHSX-7T2A0nsEU0tZjZC9DBTyffU8Xm8cw5auqgIqt6UFeqj6-ueca6=s1075-no?authuser=1",
    "tags": ["camping", "guide"]
}

const tent1 = 'https://lh3.googleusercontent.com/pw/AM-JKLXt2H_cG1Gi1b6fVuaUny7D25pufXWBUEJFjz5dt4bSFXTWZAMKhYVMQDIlAb98OQWMTMvqS5iPpWhQGh_7n7eRJPG32xXzo2Rs5IKqDAZvcCGHel5-BwI_zZrpPdbmlUeniX27DIomCZzklExEnPtb=w807-h1075-no?authuser=1'
const tent2 = 'https://lh3.googleusercontent.com/pw/AM-JKLUGp0OaLjXgmnr7iJsYoRDbqKnQtOdtvk3lqTlySAg1tJlkPoaZnH027tCaKToTniVpYE_KAVU48ph67SIcDzFYzs_FxKKb408H4xzS_zPgkGKQL9FwgLvEermQLbE3MUTHZ3_yoH_8tBASCN3ihAeA=w807-h1075-no?authuser=1'
const tent3 = 'https://lh3.googleusercontent.com/pw/AM-JKLX93LbV7GeXS8ZNI6u0gSEQnUXP95Fe4wIf40iqCkMjkAuLJBoRMzcIgmGPWYRrNPRIxEgL4vP1VrF7-JC-UdXxQSFG2GwMLdgHQvrwrgWmZ2nRxni01TU4A2vr9YdcRvHEZQOjul2HkYX0FRfh79-R=w807-h1075-no?authuser=1'
const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLVCuN0XZmybg8YX_z9owTEDco9SLDjYtk248PcljRwtKgLbhaVmSShbON0xwzYftzcECY2NrJgidepu2N-RU2Ri1YIWuXuYKpl7IIwu9qzmumRTkb5rCKhuxS9MzBgNWQb1xj0lY52s_YvztXEz-gOp=w1759-h1075-no?authuser=1'

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`How to find and secure free campsites in the western U.S.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`If you don't mind camping without facilities and services, and like to stay in places that are more remote 
                    and/or quiet, there are plenty of campsites that you can stay in for absolutely free - all it takes is a little
                    research to find the right spot. This guide is most applicable to the natural areas of the western U.S., as 
                    other countries and places may have differing land-use laws.`}
                    <br/><br/>
                    {`When camping in the backcountry or other dispersed zones, please remember the key principles of `}
                    <Link href='https://lnt.org/why/7-principles/'>Leave No Trace</Link>{`, so our natural areas may continue to be 
                    enjoyed by all.`}
                    <br/><br/>
                </div>

                <h1 id='finding-campsites'>Finding a Good Campsite</h1>
                <div className={utilStyles.justifyCenter}>
                        {`When searching for a dispersed campsite, you'll want to keep in mind a few things.`}
                </div>
                <div className={utilStyles.flexWrapContainer}>
                    <div className={utilStyles.textBlock}>
                        <b>{`1. Make sure dispersed camping is allowed`}</b>
                        <br/>
                        {`Check local rules and regulations for the place your travelling. Laws around camping vary from state to state,
                        and it's important to verify if camping is allowed where you'll be visiting.`}
                        <br/><br/>
                        <b>{`2. Find a relatively flat, open spot`}</b>
                        <br/>
                        {`An open area is crucial for pitching your tent, and makes for much nicer campsites. Try to find spots
                        that have minimal vegetation, so you will not damage any plants.`}
                        <br/>
                        {`How you find your campsite is going to differ whether you're car camping or backpacking. If you're car camping,
                        you'll have access to much larger area, and can check side roads or old logging roads for spots. You may also be
                        able to camp in sno-parks, if it is posted.`}
                        <br/><br/>
                        <b>{`3. Plan ahead`}</b>
                        <br/>
                        {`Dispersed camping areas can be found by looking at maps, researching online, and by word of mouth. If you're planning
                        to camp on public lands, it's a lot easier to have a spot picked out ahead of time than to search for one in the dark.`}
                    </div>
                    <Image
                        alt='tent1'
                        src={tent1}
                        width={400}
                        height={600}
                    /> 
                </div>

                <h1 className={utilStyles.justifyCenter} id='blm-camping'>BLM/National Forest Camping</h1>
                <br/>
                    <div className={utilStyles.textBlock}>
                        {`BLM land offers some of the best, and easily accessible free campsites. Much of the western U.S. is public land,
                        with a large portion of that being BLM land or National Forest. Unless otherwise specified, camping is almost always 
                        allowed on our public lands. `}
                        <Link href='https://blm-egis.maps.arcgis.com/apps/View/index.html?appid=a6b1bc529b344e36a1d9d4d729bc03f7'>
                            Publicly provided maps
                        </Link>{` are a great resource to find available recreation sites.`}
                        <br/><br/>
                        {`The BLM maintains a number of primitive campgrounds, most of which are often free-to-use. If you want to find dispersed
                        camping on BLM land, You can have luck by driving on side roads and looking for flat areas or trailheads. Depending on
                        the trailhead, overnight parking/camping may or may not be allowed.`}
                        <br/><br/>
                        {`BLM land often intersects with private property, so please be mindful of others rights when you are camping. Property 
                        owners are generally good about fencing off their land, and post signage on property boundaries.`}
                    </div>
                    <Image
                        alt='tent2'
                        src={tent2}
                        width={400}
                        height={600}
                    /> 
                

                <h1 className={utilStyles.justifyCenter} id='wilderness-camping'>Wilderness Camping</h1>
                <br/>
                <div className={utilStyles.textBlock}>
                    {`Regulations in Wilderness areas vary from place to place. By checking ahead, you can likely figure out if, and where,
                    dispersed camping is allowed. It's important to look for regulations specific to the wilderness you will be visiting
                    due to their variability.`}
                    <br/><br/>
                    {`Aside from regulations, finding a campsite in designated Wilderness is similar to BLM land. Wilderness areas are often
                    contained, well mapped, and documented online. Occasionally, Wilderness areas may be tightly regulated and only
                    allow camping for valid permit holders. This is common when the area gets a high amount of traffic, such as the Three 
                    Sisters Wilderness in Central Oregon.`}
                </div>
                <Image
                        alt='tent3'
                        src={tent3}
                        width={400}
                        height={600}
                />
                <h1>National and State Parks</h1>
                <br/>
                <div>
                    {`Generally, dispersed camping is prohibited in National and State parks. There may be some exceptions to this rule,
                    but usually you are required to have a permit, and camp in designated sites. Often (in the case of National Parks), 
                    backcountry permits are highly competitive due to their popularity.`}
                </div>
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="guide"
            />
        </Layout>
    )
}
