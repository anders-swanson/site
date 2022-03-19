import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import { rawData } from "../../../lib/common"
import Link from 'next/link'
import Video from '../../../components/video'
import RelatedPosts from '../../../components/related_posts'

//+metadata
let metadata = {
    "title": "Six Lakes Loop",
    "date": "2021-06-26",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLXT2d7H6qWU-mdFP8v5it4P0veMSt044d91QS7NTLRPYq647GSQ48JFxwFUMZ7fr6YPIIKurTsEvN33ekGpdyCKTm5Og1t52BDAuyXZh2d77ThcBUjcWi6tbjg4F1PXI89FNQX2HNLGjeBPJl44Irqe=w1068-h1067-no?authuser=0",
    "tags": ["backpacking", "lakes", "sisters"]
}

const subText = '20.87 miles, 2,218 feet gain, 1 night'
const trailhead = 'https://www.google.com/maps/place/Six+Lakes+Trailhead/@43.9511829,-121.7962771,14.67z/data=!4m5!3m4!1s0x54b8a971aa2baa5f:0x7aa495dccceb6d66!8m2!3d43.9531277!4d-121.8009068'

const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLX_QJhgpCS8BTGTzhifJZh5Ocan9WzyBL4A562LpohU6iHThZ1smPeY-qVkJtvc_gwoh3phQ6O3q5NJtlmk_ooII_OJsK70-IFtIxTypWy7XUZ95rKyNkYBB3MDshs5LrqRsk4MOGQUpeAOubY17xWv=w1600-h413-no?authuser=0'
const tent = 'https://lh3.googleusercontent.com/pw/AM-JKLWSMWDy6WI9ACHvXejKUTIIaTRPUwE63YcRvbEwsaIRqtgohEEG8vYIulpu1_JiXBRnnOXy4e65VKYuzBEX-lVG_QLInLpOkSCXJGoMbh2JlTPZxlWLdfochNYp4WQpab850axpBaU2FNP55RmeWkbu=w801-h1067-no?authuser=0'
const i1 = 'https://lh3.googleusercontent.com/pw/AM-JKLX5NBC9p8CVnpfpaHMBtci3BEGIqIDjvjSpaXQiCPHhQX3sEjo3Uoe39GrfkmUXbYKKu7XRBn7EZ2WRzNCnvPvXhr3sGyz9yZnWQ8PEpAMzxqf_wGnJGvYMAQ1xCpyB9qFTUo7U70L1m2pqXhIr-XDD=w801-h1067-no?authuser=0'
const i2 = 'https://lh3.googleusercontent.com/pw/AM-JKLWmjWCORBybZACWEhCRCbdVSY72LyQ1VmZ0l4Y7IXuqfmBpHlAG9l70swn3AhFS_r0PTOPWcehSVF43AV530L08mDT7WmPagWNx2MC7eGY7ehpnw4Bs0n9wZ5bZD_jMqQ4PoPKYdYyNkukJoJh26L9n=w801-h1067-no?authuser=0'
const i3 = 'https://lh3.googleusercontent.com/pw/AM-JKLXGlgXe4fvqn-HRM3ymNLR5Pv3jCXSl0o7PEeQo1UTJb-rvhE-OPH1RnPGrSy0Ourf_Of5-36i8fkPtypB_dOIG1nRzIg8mkifzLUtAzfZqobwAYShrFR5fhjFo2ok7OUrAP3i6Z8K6Hp0_UDaCRuiB=w801-h1067-no?authuser=0'
const i4 = 'https://lh3.googleusercontent.com/pw/AM-JKLVPtAklTK5fJQ_FEpFMhDyBP53XAIt3hLQPufLexTlCXcERFSMi5xQoueK5FK7rfNPltvyhHyeC8WSiE77nRldb5Ag7Kewu6C-AhuEfc0zi-qPfxwxumPd5lnV1hZXJqxo7jBBQ27cn0uEqrK0v5sPc=w1597-h1067-no?authuser=0'

export default function Post() {
    return (
        <Layout headerImage={cover} headerText={metadata.title} subText={subText}>
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    We backpacked this loop over one night from the <Link href={trailhead}>Six Lakes Trailhead</Link>, camping
                    at Mink lake, the largest lake in the Six Lakes basin. There are countless lakes of varying size here, some
                     with designated trails, others that require bushwhacking. Most of the lakes are worth visiting, some have 
                    fingerling trout, and absolutely <b>all</b> of them will be swarming with mosquitos until mid-late summer. I
                    think we counted 15 lakes during our trip.
                    <br/><br/>
                    {`Overall, it was difficult to enjoy this trip due to one overriding factor: This place is infested with the worst
                    mosquitos I have encountered, anywhere, anytime. We're talking thick clouds of mosquitos that follow you day and night,
                    requiring regular dousings of DEET to prevent being completely devoured. Thankfully, the mosquitos didn't come 
                    near the our campsite at Mink lake, but there were omnipresent at all other locations of the trail.`}
                </div>
                <Image
                        alt='campsite'
                        height={450}
                        width={300}
                        src={tent}
                />
                <div className={utilStyles.textBlock}>
                    {`After camping at Mink Lake we booked it back to the trailhead, shortening our loop at avoid to get back to the car
                    quicker. I don't think we stopped on the way back except to re-apply DEET.`}
                    <br/><br/>
                    {`I recommend visiting in late summer or early fall, before snowfall closes down the Cascade Lakes highway. You might
                    have better luck with the mosquitos then. Aside from that, the lakes are beautiful, good for swimming, and you'll enjoy 
                    relative solitude out here. Being in the Three Sisters Wilderness, a permit is required for overnight travel.`}
                </div>
                <Video
                    height={450}
                    width={300}
                    src={rawData('i1.mp4')}
                />                
            </div>
            <div className={utilStyles.flexWrapContainer}>
                {`Day 1: 11.89 miles, Day 2: 8.98 miles.`}
            </div>
            <hr/>
            <div className={utilStyles.flexWrapContainer}>
                <Image
                        alt='mink lake'
                        height={450}
                        width={300}
                        src={i1}
                />
                <Image
                    height={450}
                    width={300}
                    alt='wilderness'
                    src={i2}
                />
                <Image
                    height={450}
                    width={300}
                    alt='wilderness'
                    src={i3}
                />
                <Image
                    height={600}
                    width={900}
                    alt='lake'
                    src={i4}
                />
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="sisters"
            />
        </Layout>
    )
}
