import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Video from '../../../components/video'

//+metadata
let metadata = { 
    "title": "McKenzie River",
    "desc": "",
    "date": "2022-03-02",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLVXZxDHctgqXuPbATiM-jc6EREPPKZX1EWEKvAZVll3-UrsXRkryL4M_jqVy1SWhb5PFoRg5VC9uM_s8w-lvgVA6uadfICSeY7vUM5oK-Md7TOAa-k0EmZozrocZoO7XYLnoZg4sEfumj_b_6O7ahcU=w1065-h1067-no?authuser=0",
    "tags": ["backpacking", "hot springs"]
}

const subText = '40.39 miles, 4458 feet gain'
const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLU9p5t9XbeUfrQAx3F8NmO4__BwwBEkTutwnv7FNXlfJu71C7p1hKRIFtVqe9OjZpZMpFFcJbHtvgI8WadtTMVQleTMJCNJXvCF8Jco_Tkhi0y7qGTAJvI4iXbGOIPAp4Hehyx8TiVydrR4qEUPe9Hn=w1597-h1067-no?authuser=0'
const jay = 'https://lh3.googleusercontent.com/pw/AM-JKLUGTYXnDg4KvfI6y0fJq7ELc2TD6HnZwfZplWhWGbN4q4p0c3cdf9SuSqvchvuXIqGSipyp0F4EK7vrikR_TzQlGy9pMwoQDFyfh2OlCg3ael6XgDS1hgCtfVMjTZdKLwABOAH4RhgY7rJD3LHAVKQF=w1597-h1067-no?authuser=0'
const falls = 'https://lh3.googleusercontent.com/pw/AM-JKLU9p5t9XbeUfrQAx3F8NmO4__BwwBEkTutwnv7FNXlfJu71C7p1hKRIFtVqe9OjZpZMpFFcJbHtvgI8WadtTMVQleTMJCNJXvCF8Jco_Tkhi0y7qGTAJvI4iXbGOIPAp4Hehyx8TiVydrR4qEUPe9Hn=w1597-h1067-no?authuser=0'
const fallsMovie = 'https://raw.githubusercontent.com/anders-swanson/data/master/data/IMG_3744.mp4'
const bluePool = 'https://lh3.googleusercontent.com/pw/AM-JKLX_GHVW0uhxXwZba4YxWSV-mcMJle5pFPkYf-KN0ZyVIxNRHv1wxWLD2bkMUaKUGIJ_bScNFfSk679PQfydx-Lcb2Wd8gOGHfriQU-CVuUM_MeGgym494lKWTCHEtGQlVaJuDkUOQvzZZ4jTzzf0qiz=w801-h1067-no?authuser=0'
const bluePool2 = 'https://lh3.googleusercontent.com/pw/AM-JKLUMAsVDY1oJFo11CULL74E_fJQh7zpzLC4pwiHXH8tLEW2_mt0OBSYQ4VQcGPcBAWxelcsd8vJMRhHjBX4qs0w1L4NAWEYAc3t8o90PiRUMYyI3ep5hxorh3CODaIahoaX0yR1oH8CoaRbdeuw-VaeE=w1597-h1067-no?authuser=0'
const clearLake = 'https://lh3.googleusercontent.com/pw/AM-JKLW5fLbW4asNmRMUAv3e0QDeorjvomy0SmksAErMpsbCRxh2ArWIQPrZxm-7qzwiK5EU8U2BgZmNnXpqyT0KV9SlpYR7KomMg5lfyyZbMiPRtbAoyz1IjPKXmABD-EZu87cXCaB96c4mEYdvrEyOVJf1=w1597-h1067-no?authuser=0'
const bigelowSprings = 'https://raw.githubusercontent.com/anders-swanson/data/master/data/IMG_3715.mp4'
export default function Post() {
    return (
        <Layout headerImage={cover} headerText={metadata.title} subText={subText}>
            <div className={utilStyles.flexGapContainer}>
                <div className={utilStyles.textBlock}>
                    {`The upper McKenzie River is a scenic section of Oregon's central cascades.The McKenzie
                    River trail follows the river for 26.5 miles from Clear Lake to McKenzie bridge, past waterfalls, pools, and hot springs. 
                    The upper section of the trail is the most scenic - we backpacked from just before Clear Lake to Bigelow Hot Springs and back.`}
                    <br/><br/>
                    {`Clear Lake is a beautiful (clear) cold water lake, the outflow of which is the McKenzie River. According to a diver we met on the trail, Clear Lake
                    hosts some of the best freshwater diving around and is home to an ancient underwater forest that's preserved by the lake's cold waters. 
                    We arrived late in the afternoon, and chose to camp here after hiking a couple miles from the 
                    trailhead. We must have camped under this Stellar Jay's tree, because he kept hopping around the entire time we were there, looking for food.`}
                </div>
                <Image
                    alt='jay'
                    height={450}
                    width={700}
                    src={jay}
                />
                <div>
                    {`South of Clear Lake, you'll arrive at a loop trail connecting Sahalie and Koosah falls. You'll hit Sahalie first, 
                    and then Koosah - Both falls are gorgeous, with vibrant hues of blue and green from the water and vegetation.`}
                    <br/><br/>
                    <div className={utilStyles.flexWrapContainer}>
                        <Video
                            src={fallsMovie}
                            height={450}
                            width={300}
                        />
                        <Image
                            alt='falls'
                            height={450}
                            width={700}
                            src={falls}
                        />
                    </div>
                    <br/>
                </div>
                <div>
                    {`Not far past the waterfalls, the McKenzie River disappears underground. This section of the river was buried around 1,500 years ago by an eruption
                    from Belknap Crater - the resulting lava flow covered the river, and it travels underground until resurfacing at Tamolitch Blue Pool.`}
                    <br/><br/>
                    {`Blue Pool is a radiantly blue pond filled with icy cold water, popular with day hikers, so don't be surprised if you see large groups of people hiking or swimming.
                    The pool is encircled by rocky cliffs, though there is a short scramble to get down to the water on the far side.`}
                </div>
                <Image
                    alt='bp'
                    src={bluePool}
                    height={450}
                    width={300}
                />
                <Image
                    alt='bp2'
                    height={450}
                    width={700}
                    src={bluePool2}
                />
                <div className={utilStyles.textBlock}>
                    {`After Blue Pool, we continued to our second campsite, Bigelow Hot Springs. Bigelow is a primitive hot springs located on a
                    tributary creek of the McKenzie River. There is a small campground near the springs, and another across the creek. 
                    The springs are pleasantly warm, not hot - note that it's pretty busy here, so visiting early is ideal`}
                    <br/><br/>
                    {`The next day we decided to skip the last 6-7 miles of the McKenzie River trail and head back to Clear Lake, about 20 miles north.
                    If you choose to continue to McKenzie Bridge, you'll have the option of visiting the Belknap Hot Springs resort. This is a developed 
                    hot springs resort, with camping and rooms available. Belknap is about 4 miles further past Bigelow Hot Springs.`}
                </div>
                <Video
                    src={bigelowSprings}
                    height={450}
                    width={300}
                />
                <Image
                    alt='clear lake'
                    src={clearLake}
                    width={1200}
                    height={750}
                />

            </div>
        </Layout>
    )
}
