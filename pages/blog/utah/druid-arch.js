import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Slider from "../../../components/slider"
import Link from 'next/link'
import RelatedPosts from '../../../components/related_posts'

//+metadata
let metadata = {
    "title": "Druid Arch",
    "date": "2022-03-20",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLVYkpYYWiI4ZlOWasAHvsytICWO3KWORDCcKfNHRNUoH7fIGbZBN0lOLI-8oZBqY7ccnqaK5SIyZ39J_gdrTVh1nVGwHMBiudzKDjU6Ko9aItjDRKcIO4WEkP1DTaJeCTeMyJ2Z2wpqDsP1FwPwIZkR=s1067-no?authuser=0",
    "tags": ["hiking", "national park", "utah"]
}

const subText = '15.91 miles, 1,932 feet gain'
const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLV4Uskh-TDkQaIWBSCzOsuI25vUD_FYrbr2KLojGuzr3BCbQvPHjfw7xQ9pkg2zvwYwmCMuE3M4Pkom5kTKlQwsH3it-IWj4WLc9uCbA2giElUuG9ER13XIuzEBhGwhFX0SGN0Ogbs5D8X0m5EBkXxb=w1851-h1067-no?authuser=0'

const needles = 'https://www.google.com/maps/place/The+Needles+District+Campground/@38.1505356,-109.7884323,15z/data=!4m12!1m6!3m5!1s0x8737ef418486a001:0x40cebc4e101c9459!2sDruid+Arch!8m2!3d38.0884622!4d-109.8316832!3m4!1s0x8737f9c128b461c3:0xb2d1b837cb5e9a9a!8m2!3d38.1484794!4d-109.8019552'
const clnp = 'https://www.nps.gov/cany/index.htm'

export default function Post() {
    return (
        <Layout
            headerImage={cover}
            headerText={metadata.title}
            subText={subText}
            description={`Find a towering, stonehenge-esque arch in the heart of the Canyonland's jaw-dropping Needles district.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`All the way out in Southeastern Utah you'll find the `}<Link href={needles}>Needles</Link>{`, a district of `}
                    <Link href={clnp}>Canyonlands National Park</Link>{`. This is a gorgeous area to explore, and I specifically recommend
                    the Druid Arch hike.`}
                    <br/>
                    {`This hike is about 10-15 miles depending on your starting point (Elephant hill is the closest, Needles Campground
                    is the farthest), and guides you through colorful sandstone spires and canyons to a massive, jaw-dropping, stonehenge-esque arch.`}
                    <br/><br/>
                    <Slider
                        slides={[
                            'https://lh3.googleusercontent.com/pw/AM-JKLXX2iRKiCIZwUQxxMuSjCCliIQCNfRwz7zQG3GyqL9SM0-p5hur1auKe_VOpz0kMzSoYo0l4QuZP5jlp5mtumfGUBnE1bOW6PYKx2zTH6dpH5oRsQ1gjTSEb6YAZgl51QWmkB5jIsczoY3diY0c2D5Z=w1423-h1067-no?authuser=0',
                            'https://lh3.googleusercontent.com/pw/AM-JKLXrOavwYa--l0VD5PY5Dj7FeQoguECZsG2AIxmnxVo_9khfyqbXXOkRbhFdGluInTb-qHnCuy-CX-Cx9KVWz_QFrZ04dbPTpowQOFBIwoOb2atZsQZxFNrh_mRMb92RTndTSK2_VHm9OeTV-SDyEj8D=w1423-h1067-no?authuser=0',
                            'https://lh3.googleusercontent.com/pw/AM-JKLWWLy1o271Hew_bLkYcPja2bVAWNI4CudUceeFo7XFDQbQtBR79p0UPdhreahvfIqTpQ5wq31fOWw3ZIEsy0QSnPpeBrVYinbFym0vGtjnUob0WY3df_lc_J-EXa9q26u5ky3tTdXhQc2LqrJ4XpBrg=w1423-h1067-no?authuser=0'
                        ]}
                        width={1200}
                        height={750}
                    />
                    <br/><br/>
                    {`This hike involves strenuous scrambling over sandstone, and can get deadly hot in the summer. Remember to be prepared, and bring plenty of
                    water. Do note that in the last 1/4 mile towards Druid Arch, there's a tough scramble up a steep wash. It's doable, but difficult - We ended up
                    using a backpack strap as a pseudo-rope to hoist up.`}
                    <br/><br/>
                    {`The canyon leading up to Druid arch is truly spectacular. I was astounded by the beauty of the sandstone pinnacles, and the wavy floes of red rock`}
                    <br/>
                    {`The final section of the out-and-back is the best, and you'll be rewarded with the towering 450' Druid Arch.`}
                    <br/><br/>
                    <Image
                        alt='druid arch trail'
                        src='https://lh3.googleusercontent.com/pw/AM-JKLW8uheYsKSUsHFmE3FjotKgn-l2nqrm6QQ4x776ciLK_bxYXwfug2MOU1MyF6NRWXMvEUtOtHxFPCEpVth4rSx6C-3bBJELZSobIXpPsdR_UgTdJi7rG2pDnMVxDaLBRmVnJ2O66AWop_OVHoIhP_Zr=w1423-h1067-no?authuser=0'
                        width={1200}
                        height={750}
                    />
                    <br/><br/>
                    {`The Druid Arch hike was one of the highlights of visiting Utah, it's worth exploring the Needles (and Canyonlands) further 
                    if you have the time, as you could easily spend multiple days on different hikes here.`}
                    <br/>
                    {`There's camping nearby both within and just outside Canyonlands National park, or you could try backcountry camping 
                    (this might be difficult, as there's no damn water).`}
                    <br/>
                    
                    <br/><br/>
                    <Image
                        alt='druid arch trail'
                        src='https://lh3.googleusercontent.com/pw/AM-JKLWf_riOhczyw1FHQ_Dli7IUNYl4F8hncIu7dr7zzZv6ZpL7oCIZnryM1-7RNLDT1P9zx6pZAJ4OJCric0mPulHyKFVF1_Eg5eaNsl6wLI2VUYPIXDAfWmMDl-GN2UspTPg7W_SHYzZ2Ppx81rCiOvGZ=w1423-h1067-no?authuser=0'
                        width={1200}
                        height={833}
                    />
                </div>

            </div>             
            <RelatedPosts
                metadata={metadata}
                tag="national park"
            />
        </Layout>
    )
}
