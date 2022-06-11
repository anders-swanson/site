import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Slider from "../../../components/slider"
import RelatedPosts from '../../../components/related_posts'
import Link from 'next/link'

//+metadata
let metadata = {
    "title": "Classic Hikes in the Columbia River Gorge",
    "date": "2022-01-24",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLXQvu4P9AMp_zEBWEPl5pko0vJHNNGVO5xhR3lrWLMmdZ3yPl-tMgDATjWqNttYm8RHlxVU2cLxq9PQtrj2XM9O8LYvVzK7hAg00kDOeLKdebZXNIX7IovMT3LVKgRJ1x1EbnQA3WcufZn0qJHItZTV=s1067-no?authuser=0",
    "tags": ["hiking", "guide", "crg"]
}

const hamilton1 = 'https://lh3.googleusercontent.com/pw/AM-JKLUVOemRvAGA8Nlxdhr_yhTK4HuQOENbAvI4E7e6OmOJCmpChtgfg5kFCYqD7YEFGy0sotPzv27hewXWwiukmvYVv83znU4cfdooGRIJFnZ-jauMN-AwpOnvVi19HnOJWqPuCaOFOaI1qdDFeXteohFU=w1912-h1075-no?authuser=0'
const hamilton2 = 'https://lh3.googleusercontent.com/pw/AM-JKLXsofKgOfQR_zGJBBi9HvY-EbWIptBHEoHE5TUSbcXsx65KafDzOAYvyeAWrfXTHl0_yaNmO2_dsvvnVxHxZL0rbF6Npz4DHZh5x9ZfQhHTDRpiMeaJ-m64sAWuprBgJLHM9GnhHrZC97HQxHzLLEG8=w1912-h1075-no?authuser=0'
const table1 = 'https://lh3.googleusercontent.com/pw/AM-JKLVq-74p75G-Jw8gCZ7O0ahSBMeNlhHbabo7QclRLGT2qDsGD43Pu32HOeCLSNm0ml7iMQ37kHJfNCrOQD7ZRcNA_RgpUS_JxNR1oFtnxyKD4h7RH5Uk2XCKzCOtJ2xiiVeSyq8tnjl5F2XLC5Sng0mn=w1912-h1075-no?authuser=0'
const table2 = 'https://lh3.googleusercontent.com/pw/AM-JKLXkW7bZGe5Wj2ojKFqS10NbFLbg1wVPud3amS1-91wYHjPObM9rL2XDoY9HcJf1lJ6G8k8rzM_zvrmENYKq9HLSZshm3l6tWPHLPBcQdvYEWzvJuYhwI_RIOb2IhDcdzrgtAGLJCcUTKGHfVQzKhyr9=w1609-h1075-no?authuser=1'
const table3 = 'https://lh3.googleusercontent.com/pw/AM-JKLV6p2wtw5-t_wDnzbM0uDyDk5yLirOiz_H6ko-luLA1fW3OEu1iNuim94cLJpRaHpCiIXcG2GW6xxzktc5r4b8VF3Kit5wGKkw3V1rhWDs38e6SOtodpM2ycvfYZPhnxk8_yOCx8KTrTc29TkrIOjYb=w1609-h1075-no?authuser=1'
const tunnelfalls = 'https://lh3.googleusercontent.com/pw/AM-JKLU4b0RnfgUxz74m6hx6_652cQB3CWd0D96uaRBKuUWHiRQSwG9FWH646d3JclbjPn_CL35X4K37kSJGtvswgianW-UNEt9yGFkVuoZOH6ABSXaUUlyvsH8snIMEsL_f-2fxvGBCYMN8uKnndIpP8ceY=w1609-h1075-no?authuser=1'
const punchbowl = 'https://lh3.googleusercontent.com/pw/AM-JKLU4j4PmuwGb33KHyH94hkGZcIIEgEcSxmZ_fQAkhXh7_O-5klooUsV-MxeBnazpiPkcXKniXoSAJtizEcVRQd9QLfCWOWsrH14pPwNGtUvUWgNMxQ4ISwrQp2ysNOjJogP-BtLc7Hx7m7ht51uIJ9qR=w1609-h1075-no?authuser=1'
const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLU4j4PmuwGb33KHyH94hkGZcIIEgEcSxmZ_fQAkhXh7_O-5klooUsV-MxeBnazpiPkcXKniXoSAJtizEcVRQd9QLfCWOWsrH14pPwNGtUvUWgNMxQ4ISwrQp2ysNOjJogP-BtLc7Hx7m7ht51uIJ9qR=w1609-h1075-no?authuser=1'

const equestrianTH = 'https://www.google.com/maps/place/Equestrian+Trailhead/@45.6347414,-122.0182306,15.5z/data=!4m5!3m4!1s0x5495e9b638181129:0x5f33b879c1e99b3a!8m2!3d45.6412843!4d-122.0324582'
const hamiltonTH = 'https://www.google.com/maps/place/Hamilton+Mountain+Trailhead/@45.6347414,-122.0182306,15.5z/data=!4m5!3m4!1s0x5495e9ca4e5a2d5d:0x98cef5ae4083eb6!8m2!3d45.6327992!4d-122.020139'

const northBonnevilleTH = 'https://www.google.com/maps/place/Parking+lot,+North+Bonneville,+WA+98648/@45.6509299,-121.9324613,17.5z/data=!4m5!3m4!1s0x5495e7c6efbe4257:0x623dc591efff77e2!8m2!3d45.6501388!4d-121.9337817'
const rockCreekPassTH = 'https://www.google.com/maps/place/Rock+Creek+Pass+Trailhead/@45.7407168,-122.0130367,13.83z/data=!4m5!3m4!1s0x5495dbf96647c491:0x8419efe5bdeb97c5!8m2!3d45.74929!4d-122.0433'

const eagleCreekTH = 'https://www.google.com/maps/place/Eagle+Creek+Trailhead/@45.6375551,-121.9187509,15.87z/data=!4m5!3m4!1s0x5495a7b3fcbd403f:0x7e7ddf075caddc4c!8m2!3d45.6367645!4d-121.9196042'

export default function Post() {
    return (
        <Layout
            headerImage={cover}
            headerText={metadata.title}
            description={`Uncover three classic hikes in Oregon's scenic and beautiful Columbia River Gorge.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`The hikes listed here (in no particular order) are some of my favorite in the Columbia River Gorge. With the aid of a map and proper planning,
                    it's possible to hike these routes in a variety of different ways, with options to hike out-and-backs or loops. Spots for backcountry camping
                    are plentiful around Eagle Creek and Table Mountain, making these hikes easy to backpack.`}
                    <br/><br/>
                </div>

                <h1>Hamilton Mountain</h1>
                <div className={utilStyles.flexWrapContainer}>
                    <div>
                        {`There are two main starting points for Hamilton mountain, from the `}<Link href={equestrianTH}>Equestrian Trailhead</Link>{`, 
                        or the `}<Link href={hamiltonTH}>Hamilton Mountain Trailhead</Link>{`. The latter is heavily used, and you will likely have 
                        competition for parking after 8AM on weekends with nice weather. The Equestrian Trailhead is less used, but still active.
                        Both trailheads offer access to Hamilton Mountain, with the route being a little longer from the Equestrian Trailhead.`}
                        <br/><br/>
                        {`A popular route from the main trailhead is to do an out-and-back to Hamilton Mountain's summit, or to add another 1-2 miles 
                        for a nice loop via the Hamilton Mountain Saddle. This is an excellent hike for wildflowers in season, and views of the columbia river gorge. Hamilton Mountain is a 
                        beautiful example of towering Columbia River basalt cliffs.`}
                        <br/><br/>
                        {`If you decide to start from the Equestrian Trailhead, you can hike a longer loop (somewhere around 13+ miles), that 
                        includes a side trail up to Hardy Ridge. Apart from the section on Hamilton Mountain, this trail will be much quieter.
                        This route is worth it if you don't mind the extra mileage, as you get to see the same sights as the main trailhead, and more.`}
                        <br/>
                    </div>
                    <Slider
                        slides={[
                            hamilton2,
                            hamilton1
                        ]}
                        width={1200}
                        height={700}
                    /> 
                </div>

                <h1>Table Mountain</h1>
                <div className={utilStyles.flexWrapContainer}>
                    <div>
                        {`A grueling, steep trek with gorgeous views from the summit, Table mountain can be approached from both the south and the north.
                        The south trailhead is located in `}<Link href={northBonnevilleTH}>North Bonneville</Link>{` and provides the easiest route to Table
                        Mountain. From the south trailhead, you'll have about a 16 mile round trip, with an extremely steep scramble towards the top of Heartbreak Ridge
                        (you'll know it from the signs). The rock field scramble is about 1/2 mile from the summit, but it is doable if you are in decent shape.`}
                        <br/><br/>
                        {`There are a couple of options for the north trailhead, the most accessible of which is probably `}<Link href={rockCreekPassTH}>Rock Creek Pass Trailhead</Link>
                        {`. This route is considerably longer, at around 24 miles, with a longer drive as well. The last 10 miles of the drive to the trailhead are on a decent gravel road.
                        To reach Table Mountain from the north, you'll travel south along the Pacific Crest trail (make sure to head the right direction from Rock Creek Pass).
                        Along the way you'll get beautiful views, and lots of wildflowers if they are in season.`}
                        <br/><br/>
                        {`The last leg of the trail to the summit is seriously steep, but doable. Be sure to wear solid footwear on this trail, as it's nice to have near the top.
                        If you are interested in camping out here, it's easy to find campsites along the Pacific Crest Trail, which most of the route follows. These sites are all
                        primitive.`}
                    </div>
                    <Slider
                        slides={[
                            table1,
                            table3,
                            table2
                        ]}
                        width={1200}
                        height={700}
                    /> 
                </div>                

                <h1 className={utilStyles.justifyCenter} id='eagle-creek'>Eagle Creek to Tunnel Falls</h1>
                <div>
                    {`In my opinion, Eagle Creek is truly `}<b>the</b>{` definitive gorge hike, standing out with its amazing waterfalls
                    and cliffs. The `}<Link href={eagleCreekTH}>trailhead at Eagle Creek</Link>{` fills up fast almost every day (even week days),
                    so I recommend getting here before 8AM, and before 7AM on a clear, warm morning. This trail has one of the finest collections
                    of waterfalls in the Columbia River Gorge, and boasts a spectacular trail that is cut into the rocky canyon walls.`}
                    <br/>
                    {`I've lost track of exactly how many times I've hiked on this trail, but it has to be at least 15 times. It honestly never
                    disappoints, and there is plenty to see on repeat trips with the changing of the seasons.`}
                    <br/><br/>
                    {`Eagle creek is popular for a couple of out-and-backs, such as Punchbowl Falls (4.7 miles) and Tunnel Falls (13.0 miles). 
                    More adventures hikers can complete loops around Tanner Butte (27 miles) or Wahtum Lake via the Pacific Crest Trail (25 miles).`}
                    <br/><br/>
                    {`If you're hiking in the winter, do bring crampons. Much of a trail is along a slim, rocky precipice which ices over easily on cold days.
                    If you can get over the slippage factor, winter is one the best times to hike Eagle Creek, as the waterfalls will be bursting with rain. 
                    In winter, creek crossings can become more hazardous, especially after heavy rain. Take caution on stream crossings, and don't be afraid to
                    get your feet wet - it's totally worth it.`}
                </div>
                <Slider
                        slides={[
                            tunnelfalls,
                            punchbowl
                        ]}
                        width={1200}
                        height={700}
                    />
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="crg"
            />
        </Layout>
    )
}
