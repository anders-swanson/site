import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Slider from "../../../components/slider"
import Link from 'next/link'

//+metadata
let metadata = {
    "title": "Fairlyland Loop + Queen's Garden",
    "desc": "",
    "date": "2020-11-09",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLXNTmzYbH8y8lrcfALZxzoLC2VJiKATIqLq2hAV_WCWKj1GUN-ek_8ysi8BDcs1Y4Y6IRss1Elu0hznknd1lkV8VeFWUWEalaCofgHl4kVRnqMSJUdPn8HAFDxtHvCpTMg6EQmy4v4S2H_IGhIwko0J=w1068-h1067-no?authuser=0",
    "tags": ["hiking"]
}

const subText = '13.52 miles, 2,464 feet gain'
const trailhead = 'https://www.google.com/maps/place/Fairyland+Loop+Trail/@37.6489936,-112.1489393,17.29z/data=!4m5!3m4!1s0x873568d683d50bf7:0xfa8d2eaaafebdff4!8m2!3d37.6495899!4d-112.1475292'

const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLVjrL-cu7h1t0DlE-CSCMij787DHwEinQTdTmGLBVPc9fkoSa_uc_K6NUku4uJwW_52rfyUyLV_yfX45Daz6F38101O0wZcl8Y1r6btaQ_63kZ9_3jwx9P5Tdtk_s6mrF--KjpW7p-2sZQOtUXzliee=w1423-h1067-no?authuser=0'
const rim1 = 'https://lh3.googleusercontent.com/pw/AM-JKLU6J_r9x3GWiMF4JWoO9mM8mLhhoh80PEI3VlqGrBWNbgtywrbSxTC00Qi_QsvYxOcAwueV8lI4vXuXDq_OQod-RYPvQOJqznHYv34COk49HHaT2KWDfd9HKNI_eCqFLM1a8O4RlIzAhxQGs8Aa6U_R=w1423-h1067-no?authuser=0'
const rim2 = 'https://lh3.googleusercontent.com/pw/AM-JKLVuKPt29c3O-p9pElxstMa8nZIuuAVCcOjDOCVSrnkG0vnP7IKNjt6IHNvvnRnPO1sz4ockQl0u1zV_bTP4WBhW46XR-ucs9Ai2rfqrC-cQGcHJRlLFtFfRwPZnVtobAxYYkvDn-L-tiJfuDvThGiYf=w1423-h1067-no?authuser=0'
const tunnel = 'https://lh3.googleusercontent.com/pw/AM-JKLUohpfhXf03utiG3jdjtu2Q0lmZ0_sNV9z3lB2TNCWBSbHUWc6eFCH_Zg8e9VRot3Zgcse7mmL07vBA9cdgxwV3ArIU17ouyT8U30wDzYXq4nzyLE5P6q2nSZX9VOwAYG3VukUFosYY73TFVWifED2R=w1423-h1067-no?authuser=0'
const tunnel2 = 'https://lh3.googleusercontent.com/pw/AM-JKLVggh8NeBP8HEcUSTTh8CrGVuaOMsFH_wPs24YUl-42d_ADo-Mv6cGHsym31lzhc24B_jJOwEl14aNTmG7lus8-xFmB7lhpsVMwn5IitAO9_-_G_pWqnojPAWVOUA6DJdWCNdr7RAEGSTM4WCL-kjH0=w1423-h1067-no?authuser=0'
const thorsHammer = 'https://lh3.googleusercontent.com/pw/AM-JKLUkd-LbKaFtRjJj8FIZfYsVcTKAPcUnpaCFbm7_hppUi0MYF2-ia_LxakxXqJ-BY6TXhiezMq4iXos7mNXmLoLpZLDJli9ndrsyoGTFjR3-MMnbNXRiVN9z-q53BoLgh0QoWdTMXgVfHHtVbsd6rcu0=w1423-h1067-no?authuser=0'
const snowHoodoo = 'https://lh3.googleusercontent.com/pw/AM-JKLVFy9QJqnNGbzZszCd3rqqug3r6yLopYc4eHa_ZW4K7l9XF_8srZ3OnzFZF7j0jj09d1iBHuwm6PhY0HeYjv2bnylyGRrGR_g_eTNW0LOywRgP6U8IRC3nsU-N0WQlejPklQtX0qN0RTE_tsyYD1sBb=w1423-h1067-no?authuser=0'
const twinBridges = 'https://lh3.googleusercontent.com/pw/AM-JKLUEabm92R0DBengs_BxQzWVERsgiW-o_AS9Y5cjcsGb8kxRQpX_OYJOOOAmXJkN0cuFWcp4FwbkJYpRHLwwloIumS1zH_Orf-p_RCeGV5R95UCaNZj0Z6mxuNrZvCCEjsXx3AVLJJtBGifRuVvLEfuJ=w1423-h1067-no?authuser=0'
const towerBridge = 'https://lh3.googleusercontent.com/pw/AM-JKLUTNUdEH2F_Ulaz2gLQ5ShcjJtPozlr78XxYCHMOi4LZb5KLcLqxR9-YlCKlFuLCq2OdZrLf2Dv-l8VUFcnlSm1poOYZ5a5RqFo4NZ_XU3ge1PxJQxRwli7OXHBvBARilQuN3E5frLq8BRxXhPQegF-=w1675-h1067-no?authuser=0'


export default function Post() {
    return (
        <Layout headerImage={cover} headerText={metadata.title} subText={subText} headerColor={`black`}>
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    The Fairyland loop starts at <Link href={trailhead}>Fairyland Point</Link>{` in Bryce Canyon 
                    National Park. The loop trail itself is around 8 miles, but we added on the Queen's garden loop
                    near the end to extend the trail. This is a great trail to see Bryce's hoodoo rock
                    formations, rim views, and natural bridges.`}
                    <br/><br/>
                    {`Because of the cold weather and snow (6" had fallen the night before, and the high was 23F), 
                    there weren't too many other groups on the trail.
                    If you're thinking of hiking this after it snows, bring microspikes or crampons, there are multiple places
                    where the trail can get steep and icy.`}
                </div>
                <Slider
                        height={400}
                        width={600}
                        slides={[
                            rim1,
                            rim2
                        ]}
                />
                <div style={{'width': '1200px', 'display': 'flex'}}>                
                   {`I can't comment on how this trail is during warmer weather, but it is absolutely amazing in the snow.
                   The snow adds a beautiful layer of texture on the rock formations, which are already impressive in their
                   own right.`}
                </div>
            </div>             
            <div className={utilStyles.flexWrapContainer}>
                    <Image
                        alt='tunnel'
                        height={450}
                        width={600}
                        src={tunnel}
                   />
                   <Image
                        alt='tunnel 2'
                        height={450}
                        width={600}
                        src={tunnel2}
                   />
                   <Image
                        alt='tunnel 2'
                        height={950}
                        width={1200}
                        src={thorsHammer}
                   />
                   <Slider
                    width="1200px"
                    height="800px"
                    slides={[
                        twinBridges,
                        snowHoodoo,
                        towerBridge
                    ]}
                /> 
            </div>
        </Layout>
    )
}
