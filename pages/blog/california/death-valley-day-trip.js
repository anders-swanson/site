import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Image from 'next/image'
import Link from 'next/link'
import RelatedPosts from '../../../components/related_posts'

//+metadata
let metadata = {
    "title": "Death Valley Daytrip",
    "date": "2022-05-12",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLXX4KUeANa8UgRPMRt5w8B2us0LxHTwrnO6T0g2Y6x6qrVQPjjOdiU6IVyAFBxuzZWMGOm0OrMPeecNSnCvND2G0edZKCElc5lY91i-TH4CmiAihJGF0gz_l6DBY_LwtZzIyL91b3bQj8Idqa_IfTB3nQ=w1069-h1067-no?authuser=1",
    "tags": ["hking", "national park"]
}

const sidewinderCanyon = 'https://www.google.com/maps/place/Sidewinder+Canyon/@36.0649766,-116.7884058,12.42z/data=!4m5!3m4!1s0x80c6e6ff3be5d46b:0x3fece4316e04be2!8m2!3d36.064642!4d-116.7447889'
const mosaicCanyon = 'https://www.google.com/maps/place/Mosaic+Canyon+Trail/@36.5720878,-117.1465007,17z/data=!3m1!4b1!4m5!3m4!1s0x80c7529e7e4ac211:0x6eacc1b52b409905!8m2!3d36.5720835!4d-117.144312'
const mesquiteDunes = 'https://www.google.com/maps/place/Mesquite+Flat+Sand+Dunes/@36.6151258,-117.1153331,17z/data=!3m1!4b1!4m5!3m4!1s0x80c7440000000001:0xcfa4dc5d128efa34!8m2!3d36.6151215!4d-117.1131444'

const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLXeItgnO2-8UQCyUHEjGne0cFAqc-9-fqjFgF8zsjpmEEk6CkX4XbLA_q1XGzOLS9glza3nNk5HeiUr9fasN0K00ZidqtW8NFx8PYblTGQhwz8mi2xu61j-AS0POGp2_wb1LV7l5wIclcyz44XFJjA7hg=w1597-h1067-no?authuser=1'

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`A daytrip in Death Valley National Park.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`Inspired by one of the days we spent in Death Valley National Park, this guide visits Sidewinder Canyon, Mosiac Canyon, Mesquite Dunes, and optionally Badwater Basin.
                    There's lots to see in Death Valley - if you make the trip out here, it's not hard to plan several days of activities. It's best to visit this park 
                    in any season except summer, when temperatures are lower (i.e., not deadly hot). Winter and spring are the ideal seasons to visit, with
                    spring being the most popular. You'll see less crowds in winter but will encounter colder weather, and persistent snow at high elevations.`}
                </div>

                <h1 className={utilStyles.justifyCenter} id='sidewinder-canyon'>Sidewinder Canyon</h1>
                <br/>
                <div>
                    {`Our main destination for the morning was `}<Link href={sidewinderCanyon}>Sidewinder Canyon</Link>{`, a unique slot canyon 32.3 miles south of Furnace Creek.
                    The main canyon hike is a 4-mile out and back, but there are many forks and side canyons to explore. We explored each side canyon as far as we could go without
                    needing to climb up any walls higher than 4-5 feet, and clocked over 10 miles by the time we got back to the car. The trail is fairly steep from the get-go, and
                    you'll need to do some small scrambles to pass various slots. None of the scrambles were too difficult, so unless you have small children you should be fine.`}
                    <br/><br/>
                    {`I recommend to explore the upper side canyons if you have the time (you can skip the first few you past, which are short and unremarkable). 
                    You'll find small hoodoos, natural doorways/bridges, and deep passageways on the upper forks.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                      <Image
                            alt='sw 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLUQuESicHIiuvOit0UWZLCuNWDf_ZRggEUQUjGpxwS2_HlJV5k975U-uUCHSQDw7oAFNtMz0zzWfVLC640mOpcDkVbwEj8SrMBfxYsI9xfAFOrDZ5DL0UfJwzhk4t-_SB0Il2SVrBv_XPxss9_xGtt-VA=w801-h1067-no?authuser=1'
                            width={400}
                            height={600}
                        />
                        <Image
                            alt='sw 2'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLXz2DQMVrnjmKTbly8EVJktfcJP6zXMYwm602NFwVgTqNDZsU3kQQSPGb9ysNhkaoQ6mEyT8yQW-ZUgiGyqRDIY47y1irR0pAGp7enqzQ5ARhU0qaIy3erTeQdpv7YSlMtm6mWZcKnk43I6IdeBfALNaA=w714-h1067-no?authuser=1'
                            width={400}
                            height={600}
                        />
                    </div>
                    <br/><br/>
                    {`Towards the end of the main wash, the trail becomes rougher, eventually ending at a large rockfall. If you're into canyoneering, you could climb further,
                    but we opted to turn around. On the way back we found our favorite fork of the hike, a tight walkway that passes through several doorways of sedimentary rock,
                    interspersed with domed rooms. I recommend bringing a GPS loaded with topo-trail maps to help navigate the canyons. GPS helped out a lot on this hike,
                    leting us estimate the length of each side canyon, and stay on the main wash when there were multiple forks. That said, we `}<b>never</b>{` felt like we were getting lost,
                    because it's a short and simple return hike to the parking lot.`}
                    <br/>
                    {`It can be a little dark in some of the deeper slot canyons. If you're hiking later in the afternoon, consider brining a headlamp. We didn't have much issue with lighting
                    in the morning.`}
                    <br/><br/>
                    {`This was one of my favorite hikes during our entire trip to Death Valley (not just the day). We saw hardly anyone else the entire hike, and the views in the 
                    canyon are absolutely gorgeous (if you like slot canyons!)`}.
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='sw 3'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLUYxabBUA9moTFfDNZesuke1ydq7AJ5yXQWVwBXTqXN8HzSgGRAFTuA48TnYbdZtALGEadMWOgmlTvXKJ1rN7zC3t7gIhTfcg90HqV17HmBTvDgBRnG3Ggcqc8U0UuWi7Paakfl6AMgCt2Tut4Cecuyxg=w1597-h1067-no?authuser=1'
                            width={800}
                            height={500}
                        />
                    </div>
                </div>

                <h1 className={utilStyles.justifyCenter} id='mosaic-canyon'>Mosaic Canyon</h1>
                <br/>
                <div>
                    {`A 2.3 mile of gravel drive from Stovepipe Wells (any passenger car can make it) is `}<Link href={mosaicCanyon}>Mosaic Canyon</Link>
                    {`, a beautiful 3.5 mile canyon hike. The hike follows a wash as it winds uphill through varying narrow and wide passages. There are some
                    slippery scrambles past the first 1/4 mile, but none too difficult. It can be helpful to have a buddy on this hike to boost or pull you
                    up some of the steeper slides. While not very high, the slides are formed of slippery rock - wear shoes with good traction and be confident in
                    pulling your bodyweight up ~2-3 feet vertically if you're planning to hike the entire canyon.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='mosaic 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLVboWcSoBqPez-ozlCim2hUfRAxojgAa0NIkNp2db1OFM2LFbpj9UziMCRftdgI12E-gjTHg0qGzOUtAhNZXPCoJkfLQuw_nbk7wxx76ItGQZUtPwkx29IAhluLsKM3QRlwnLtDXILyoo8l1jcBJm2AqA=w801-h1067-no?authuser=1'
                            width={450}
                            height={600}
                        />
                    </div>
                    <br/><br/>
                    {`When the trail breaks out into a wide wash, you'll find a 1/4 mile side trail to the left that leads up to a viewpoint looking down on Stovepipe Wells. 
                    Past the wide wash, the trail becomes more narrow and the amount of slides/scrambles increases. If you continue up the canyon, you'll eventually 
                    reach a 30-foot dryfall that marks the end of the trail.`}
                    <br/><br/>
                    {`This is one of the more popular trails in the area, so you'll run into crowds during peak hours - especially at the trailhead.
                    Most people seem to turn back before the first few scrambles, making it generally quieter towards the end of the trail.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='mosaic 2'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLX2BDtY7gS7becXjk3tuxgmH4jeNoBfHAkI9biFgIxC6NS__o6cz3SNYFYUrGJLc07PpHi6tK7xgrvNuXJ859OdxO1z_92vv4AT7mp7zh0MvQjqLVwkhw2NSm_CtvNuu3z-RqF5-N5If_2p04Q7ZV6Rlg=w714-h1067-no?authuser=1'
                            width={450}
                            height={600}
                        />
                    </div>
                </div>

                <h1 className={utilStyles.justifyCenter} id='mesquite-dunes'>Mesquite Flat Sand Dunes</h1>
                <br/>
                <div>
                    {`Just a few minutes drive from Stovepipe Wells, `}<Link href={mesquiteDunes}>Mesquite Flat Sand Dunes</Link>
                    {` is an astounding area of rolling golden sand dunes, best experienced
                    at sunrise or sunset, when the light illuminates the sand. When we visited Mesquite Dunes, we were camping at Stovepipe Wells
                    and decided to walk directly there from our campsite after dinner (prime rib on a campstove, because it was New Years Eve!). 
                    If you walk from the campground, it's about 2 miles round trip - but most people drive, and there's a parking lot right by the dunes
                    that's shortly off the highway.`}
                    <br/><br/>
                    {`Once you're at the dunes, it's basically a giant playground. You're free to roam where you like, scaling the dunes for beautiful views.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='mequite 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLU5-iojMxh-O7xF8Fh-lsLLzDFLj9NZYbCNEBOpcICr0E5Zsr9gO0pUJoA_VDzSv-7-fcbCtZaS6PFqBPHjU1wTnaCrHpq16kAklMoFanq6aij7ySZUHolykH2lX6PmcY_7y-WMyypkXI7ohSI4b7O-HQ=w1597-h1067-no?authuser=1'
                            width={800}
                            height={500}
                        />
                    </div>
                    <br/><br/>
                    {`The entire Mequite Dunes area is decently large, and it's fun to wander about - being surrounded by the towering dunes is an otherwordly experience.`}
                    <br/>
                    {`The majority of visitors here stick near the parking lot, so if you hike past the first ridge or loop around to the rear of the dunes you're likely to 
                    be alone. Walking from Stovepipe Wells, we came up to the dunes from the back and didn't see anyone else until we got near to the parking lot (there were 
                    a lot of people there!).`}
                    <br/><br/>
                    {`If you love dunes, Death Valley has several other locations, but Mesquite is the most popular and most easily accessible.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='mequite 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLUVeYKPC-ZPP65mHnXPNTPi5PkBaPDryGNMYw2u7PJdaQM5dlqYiqemRD71bGhankAfM-T8Zsha0Gl1hvrQxZd7ElKBFbJnIN5IZ-_HtC-orkO2cqJhklcRtDVdceD-rmvfBSn6qZk35PBWmePBmDsXkA=w1597-h1067-no?authuser=1'
                            width={800}
                            height={500}
                        />
                    </div>
                </div>

                <h1 className={utilStyles.justifyCenter} id='badwater-basin'>Badwater Basin</h1>
                <br/>
                <div>
                    {`Badwater Basin is a popular pullout between Sidewinder Canyon and Furance Creek, strongly consider stopping if you have time.
                    Badwater Basin is one of the more crowded spots in the park, but you get a good view of the salt flats. Once you're fully out
                    on the flats, there's plenty of space to spread out and look around (there's only salt to see here).`}
                    <br/><br/>
                    {`A one mile walk will take you from the parking lot to center of the salt flats, a favorite picture spot for many. There are other salt flats
                    in the park, mostly accessible by pulling off the highway. Badwater Basin has the distinction of being developed with a clear trail and parking lot.`}
                </div>
                <br/><br/>
                <div className={utilStyles.centered}>
                    <Image
                        alt='mequite 1'
                        src='https://lh3.googleusercontent.com/pw/AM-JKLU4zGtJ1SJ3p00gnEQ3tRkKwrBOGGqQS0qJCpV1XpgErTBi8bvw0CkeDy29_ycVqMGRDD5tKKx3PXXhOgbhjPgHoOtTrQv5QXw5Sg9mBvCN1hFSOg8ABAJ5kYd1nce8mZs0VP9REEsUSbOuOg_98kLgeA=w801-h1067-no?authuser=1'
                        width={450}
                        height={600}
                    />
                </div>
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="guide"
            />
        </Layout>
    )
}
