import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Image from 'next/image'
import Link from 'next/link'
import RelatedPosts from '../../../components/related_posts'

//+metadata
let metadata = {
    "title": "Exploring Steens Mountain",
    "date": "2022-06-01",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLWWJgfi_5SEW_Z1NGMGCA72m1-eVKoxRb6oTnkS-sDwpKEtHtgdXU-n8AnMkbch4AHcxJg8yHYWuIpFQ1OUZX0ZMRqcMoPkfObO2AhtElXjo6yj2CoM-swfhVPQ80UxktL_e494CkmUawdHActV9OZ9=s535-no?authuser=0",
    "tags": ["guide", "steens", "hot springs"]
}

const steensBLM = 'https://www.blm.gov/programs/recreation/recreation-activities/oregon-washington/steens-mountain'
const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLV-YPvyN7EIn-p_83V-JctdfhPoNDH01ubsoCLchDFwIsr70inJNQLqSAtc3IHbgORLvoJsDMXiLyGt7sNLIp1RRolIZPwLqd8uY2hWMhi4rYk_tDRmQ7Nmvy-d1racBUF6TQiWDi3y--dym_4NAiBG=w800-h600-no?authuser=0'

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`Exploring Steens Mountain in Southeast Oregon.`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`Oregon's southeastern high desert is home to Steens Mountain: a fault-block mountain wilderness featuring 
                    beautiful hiking trails, glacier-carved gorges, hot springs, and playa desert. The western side of Steens has multiple campgrounds, many
                    hiking trails, and several lakes. To the east, Steens Mountain towers some 5,000 feet over the Alvord Desert,
                    a playa type desert suitable for camping with several nearby hot springs.`}
                    <br/>
                    {`I've loved every trip I've taken to the the Steens wilderness -
                    there's something special about it that feels very unique. The diverse terrain of mountains, desert, and glacial gorges is remarkable in its beauty.`}
                    <br/><br/>
                    {`Steens Mountain is fairly remote, so plan accordingly. The closest town is Frenchglen, hosting basic services including a gas station, general store, and
                    historic hotel. The small, adjoining towns of Burns and Hines are over an hour to the north, and have more services.`}
                </div>

                <div className={utilStyles.centered}>
                        <Image
                            alt='canyon'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLVT0_5mKVscRRCCLhGQEKzCX7w2QdTPIsdmABiBuUANgpgmaecrOLhUn1IPP0nGKra-5FQJA7oiplUNnv7PRu_YekTpVYWRo8My7-aTc17Ej34S6q5G2IYLg-jhWuGpfpa8NUEXc8FrVqo2Sv1gSlxW=w800-h600-no?authuser=0'
                            width={800}
                            height={600}
                        />
                </div>

                <h1 className={utilStyles.justifyCenter} id='getting-there'>Getting There and Camping</h1>
                <br/>
                <div>
                    {`Steens Mountain is mainly accessed by the Steens Backcountry Byway - a 66 mile gravel road that starts at Frenchglen and climbs nearly to the mountains summit.
                    There's a small parking lot below the summit, with the byway looping south to return near its starting point at Frenchglen.
                    The scenic byway road provides access to many campgrounds and trailheads, and offers great views of the wilderness. On the drive you'll 
                    see glacial canyons, the mountain's fault-block uplift, and the occasional wild horse. The road is gravel and well graded, passable by all passenger
                    vehicles. Winter closures prevent the road from fully opening until June or July. If you are unsure of the road's status, call in to the `}
                    <Link href={steensBLM}>Burns BLM Office</Link>
                    {` for the opening date.`}
                    <br/><br/>
                    {`There are five primary developed campgrounds in the wilderness - The South Steens Campground is typically my choice for its proximity to the Little Blitzen
                    and Big Indian gorge trailheads. Camping on the north loop is also nice, particularly at Fish Lake, but take note that these northern campgrounds can be 
                    mosquito ridden earlier in the season.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='steens 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLV-YPvyN7EIn-p_83V-JctdfhPoNDH01ubsoCLchDFwIsr70inJNQLqSAtc3IHbgORLvoJsDMXiLyGt7sNLIp1RRolIZPwLqd8uY2hWMhi4rYk_tDRmQ7Nmvy-d1racBUF6TQiWDi3y--dym_4NAiBG=w800-h600-no?authuser=0'
                            width={800}
                            height={600}
                        />
                    </div>
                </div>

                <h1 className={utilStyles.justifyCenter} id='big-indian-gorge'>Big Indian Gorge</h1>
                <br/>
                <div>
                    {`The Big Indian Gorge trail starts at the back of the South Steens Mountain Campground, and is an eight mile out-and-back hike that with valley views
                    and wildflowers. The hike follows the Big Indian Creek as it winds its way up a beautiful U-shaped gorge, ending at a former glacial headwall (no ice remains 
                    here anymore, and snow usually melts out by May/June). There are three stream crossings in the first three miles - in summer, these are no more than ankle to 
                    calf deep, but can be difficult to cross earlier in the year or after a storm (the water is incredibly cold and fast moving).`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='big indian 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLXZog65DUqPmWPvxZem6ollOAv1pGac-ELpmBtzD32Po9IVurtVo1abcD5HFGVnpft8wWOEMDdTsjFdo7RHG2uI4ebuOntvlN7_sxT_ct0FB-e5P5B3MYe0taYHl6bD3GAChddEoF9De_qOrwok-YoP=w800-h535-no?authuser=0'
                            width={800}
                            height={535}
                        />
                    </div>
                    <br/><br/>
                    {`At the end of the main trail, there is a light footpath zigzagging up the canyon wall. If you want to shuttle this hike or connect it with the Little Blitzen
                    trail, you can follow this path for two miles until it connects with the Steens Mountain Byway on the canyon rim. This trail is incredibly steep and 
                    unmaintained, so take caution if you are considering on extending your hike.`}
                    <br/>
                    {`Big Indian Gorge is a great trail to backpack - you can hike the eight miles in, camp near the headwall, and make your way out the next day.`}
                </div>

                <h1 className={utilStyles.justifyCenter} id='wildhorse-lake'>Wildhorse Lake</h1>
                <br/>
                <div>
                    {`Wildhorse lake is nestled in a glacial cirque below the summit of Steens Moutain. Short (3 miles), steep, and extremely rewarding, this is the trail I would recommend
                    if you are only have time for a single hike around Steens Mountain - The views here are unparalleled in the entire wilderness.`}
                    <br/><br/>
                    {`If you are thinking of hiking this trail, take note that the upper section is dangerously steep and not recommended for small children or those
                    with poor mobility. It's not incredibly difficult, but definitely be confident in your abilities if you decide to hike down to the lake.`}
                    <br/>
                    {`For more details, check out our previous post about `}
                    <Link href='/blog/oregon/wildhorse-lake'>Wildhorse Lake</Link>.
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='wildhorse 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLU_eq1hvRr7Rv4siJQHUF_0Q2OuKYp5KquN-poxPHvg32SuwA3SrSZsZkfjbcVH8iu9SmAgfrZwX9AvLB2g25Qf0N7uGcsfPGSJ6AvKvm5AEqdHUWwlKvhD7hchVE0K162LowWTB8zWjYgMsUa7mofz=w800-h600-no?authuser=0'
                            width={800}
                            height={600}
                        />
                    </div>
                </div>

                <h1 className={utilStyles.justifyCenter} id='little-blitzen'>Little Blitzen Gorge</h1>
                <br/>
                <div>
                    {`The Little Blitzen trail begins across the road from the South Steens Campground and shares similar features to the Big Indian Gorge trail (though I think
                    the Little Blitzen is the better trail). Traversing an old glacial valley (almost perfectly U-shaped) you'll pass many small waterfalls and fields of
                    wildflowers before the trail ends at a massive headwall. It's slightly over 20 miles to hike the Little Blitzen as an out-and-back, but its absolutely worth
                    it to hike all the way - the Little Blitzen is probably my favorite hike around Steens.`}
                    <br/>
                    {`Consider backpacking this trail, or make it an epic day trip if you have the stamina for 20+ miles.`}
                    <br/><br/>
                    {`Adventurous hikers can combine the Little Blitzen and Big Indian Gorge trails in a 25 mile loop that requires no small amount of scrambling and route finding.
                    Only attempt this route if you are an experienced hiker who is comfortable in on difficult terrain.`}
                    <br/>
                    {`Hiking the Little Blitzen is covered greater depth in one of my previous posts, so `}
                    <Link href='/blog/oregon/little-blitzen'>Click Here</Link>
                    {` to read more!`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='blitzen 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLV45Gtk0TppqygLv5Aojd-VjZlWO2tIotMgVccqn1c9uzeS_6DamdGMQjinThVdZbJ8PcPaz6ha4nOVDgbVm8uP6vO1CLDV2kPGYghoSxLk71fPwcVot9TuY2Ywjey1FaJ-JFn7ff7gt0uH0T7HXnNV=w800-h535-no?authuser=0'
                            width={800}
                            height={535}
                        />
                    </div>
                </div>

                <h1 className={utilStyles.justifyCenter} id='alvord-desert'>Alvord Desert</h1>
                <br/>
                <div>
                    {`East of Steens Mountain is the Alvord Desert, a playa-type desert that features hot springs and vastly different terrain. Visiting the playa is
                    an amazing experience - driving your car on the seemingly endless expanse of flat white sand feels like you're on another planet.
                    You can camp near the playa for free, or at the Alvord Hot springs for a free (The Alvord Hot springs is a privately owned hot springs,
                    and requires a fee to camp or use the springs). The gate to the playa at Alvord Hot Springs requires a code from the hot springs owners,
                    but you can drive further south to find public access roads. Do not drive on the playa if it has rained recently, or if you see any standing water:
                    you do not want to get your vehicle stuck in playa mud.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='alvord 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLVrHZmc8gemNKXCEgwbzYijIKY1Kf7O2anuPNG-35Y7X2Iwk63gKP28-8d_nQB-NTmn879qdgjtiJRtxQw3PbAsMPzgKuosTb_uQX1_LDkR-pRekQyqSXveIU_XhweJwSvxSCzHKlg3VD48oSUqDf-m=w800-h600-no?authuser=0'
                            width={800}
                            height={600}
                        />
                        <Image
                            alt='alvord 2'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLUXQikiJVc7pmCCCLtHBfAJVkDpMNSPMTk9V8Y0AwSzfaoGyR6mcQvbz8s_tJB0Y8UBXGrsq_mQuOs3UeJegZWzYgM74RL9QCXHtQ569MkN2tty6RctxYTktO0DYDOPgOhwQl-T_aMR_Jvtoqkc-F3u=w800-h600-no?authuser=0'
                            width={800}
                            height={600}
                        />
                    </div>
                    <br/><br/>
                    {`Just north of Alvord Hot Springs is the Pike Creek trail. The Pike Creek trail cilmbs up a ravine towards Steens Mountain, and shows the changing 
                    landscape from the Alvord Desert to the high country of the Steens. You can hike as short or as long as you like on this trail, which has excellent
                    wilderflowers in the spring/early summer.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='alvord 2'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLXaB51X9bsutjgz7ujskdwKygu9-AmvJXgfaDV5AiJ0hLlyBwwjELUWdNUeVBopyeWgI5SPRHbK3DJc1y1k9QbvofjEnOWDPVV1R9QASOJrSWsxvVRMBcawEyLLhuR8bEtC_epXYh0JqCgkvpKh_nMH=w800-h600-no?authuser=0'
                            width={800}
                            height={600}
                        />
                    </div>
                    <br/><br/>
                    {`After climbing up and out of the ravine, you'll find an abandoned mine and several vistas looking out on the Alvord Desert below. The trails fork and meander here,
                    but it's hard to get lost given how open the area is. If you're camping at or near the Alvord Hot Springs, definitely consider this hike - it's totally gorgeous
                    and worth visiting.`}
                    <br/><br/>
                    {`Further south past the Alvord Desert is Willow Creek Hot Springs. These springs are on public (BLM) land, adjoining a primitive campground. On the way south to 
                    Willow Creek Hot Springs you'll pass through the town of Fields, home to the best and probably only milkshakes you can find in 150 miles. Seriously,
                    stop for a milkshake at Fields Station, you absolutely won't regret it.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='milkshakes 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLXFlcT_nuZXD8QA5IqlZ03mJTtO0FrVHCg_zEb8rZLrZSTllb2rmsTYsRi_Wtx7YkUvNY1ul7mEjmNImges-p6Sh0GGgYtlTMMbgsJAzm8lA6PtDz8P-Z8rG423HLDm1TwU0M25INOHKxxMCv9UuQXq=w600-h800-no?authuser=0'
                            width={600}
                            height={800}
                        />
                    </div>
                    <br/><br/>
                    {`Willow Creek Hot Springs is 1.5-2 hours from Frenchglen or the Alvord Desert Hot Springs. Most of the road is well graded gravel,
                    but do not drive it if there has been heavy rain. The dirt road close to Willow Creek turns into some of the stickiest muck ever, and your vehicle
                    can easily get stuck.`}
                    <br/><br/>
                    {`You can camp at Willow Creek for free in the BLM managed campground. The campground is pretty basic, with a vault toilet and fire rings. The hot springs
                    has a split pool, with hot and warm sides. To read more about Willow Creek, check our post `}
                    <Link href='/blog/oregon/willow-creek'>Here</Link>.
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='willow creek 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLU52QdOEPmxeueHSx-A7btmPNsdJQ6hlvJyXBi1taoZP9PI7AEgYzvKBnozDe51uasCxNxZN0f6-vs94p5d-mNKtoh_2rZuE8HLy-3a3zwCk8kUDYhA60PcJi_1uSoM7OpWwoTRiLrNPrEb1i_g-FRN=w600-h800-no?authuser=0'
                            width={600}
                            height={800}
                        />
                    </div>
                </div>
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="guide"
            />
        </Layout>
    )
}
