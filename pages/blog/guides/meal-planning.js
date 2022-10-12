import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Link from 'next/link'
import links from '../../../lib/links'
import Video from "../../../components/video"
import RelatedPosts from '../../../components/related_posts'
import Pinnable from '../../../components/pinit'

//+metadata
let metadata = {
    "title": "Planning Backpacking Meals",
    "date": "2022-10-11",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLVPvvDopK4LEy8vh-6RYP7G4pZxu8W2gbDSiBjXeFETMOat9i4INw8lXKv8rhqb6Baqf1MCoPKnsy9vd432BliVf1Hk5xquM85ZQeCSuDSxD2f0tp6u-PHaYh0SIPb7_7X7EymaRdQwgMMK6B3J9V2H=s450-no?authuser=0",
    "tags": ["backpacking", "guides"]
}

const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLXXcf1K4hJmKGMYeeh4mEo1RunikoWbFKynQaEqZnUXA3bnuerQ2Rba3aTFMdM68SBqSLI0MyLAHyM5-kNFrAgFzLMJlbn-4_Iwws4twiM35I6ImoiYNLV1n-ccMYhnlACnipIVaZaVUF6qOmyE23qk=w1920-h955-no?authuser=1'
const pageURI = '/blog/guides/backpacking-meals'
const tvp = 'https://www.bobsredmill.com/tvp-textured-veg-protein.html'

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`Backpacking meals don't have to be bland or leave you hungry - We've combined our favorite trail meals in this post!`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`So, you're planning your first backcountry trip but aren't sure what kind of food to bring:
                    you'll have lots of questions: How much food to pack, what kind of food, and more!`}
                    <br/><br/>
                    {`Meal planning is a crucial part of any backcountry adventure, so whether you're brand new to backpacking, or just 
                    looking for some tasty inspiration, this guide has the answers to your questions!`}
                </div>

                <h1 className={utilStyles.justifyCenter} id='basics'>Food and Water Basics</h1>
                <div>
                    {`Getting enough food while backpacking can make or break any trip - if you aren't eating enough calories,
                    you'll feel sluggish, unmotivated, and emotionally drained. Besides calories, you'll also have to consider the weight of the food carry:
                    Favor foods that are lightweight, but also calorically dense. It's also extremely important to pack food that you
                    know you'll enjoy eating. You don't want to be hungry, but still dreading having to eat what you've packed!`}
                    <br/><br/>
                    {`When you're on the trail, you'll need access to safe drinking water. Investing in a quality water filtration system is essential for gathering drinking water
                    from streams and rivers. I use a `}<Link href={links.hiking.waterFilter}>
                       Katadyn BeFree water filters
                    </Link>{` combined with a `}<Link href={links.misc.squeezeBottle}>compatible squeeze bottle</Link>{`. This filter combination has served me well for years, and
                    I love how quickly it's able to fill my 1.5 liter bottle. I prefer camping near a water source, 
                    so water is easily accessible when I'm cooking or relaxing at camp.
                    Before any trip, research available water sources on your route, such as streams, lakes, or caches. Depending on where you hike, you
                    may need to pack more or less water. Hikes in arid, desert regions can require packing `}<b>all</b>{` your water.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                    <Video
                        height={600}
                        width={338}
                        src='https://raw.githubusercontent.com/anders-swanson/data/master/data/IMG_7056.mp4'
                    />
                    </div>
                </div>

                <h1 className={utilStyles.justifyCenter} id='what-to-bring'>What Kind of Food to Bring</h1>
                <div>
                    {`Choose food that's something you like to eat 
                    (or can at least tolerate) that packs light, and is simple to prepare. Typically, this means dry, dehydrated, or freeze dried meals.`}
                    <br/><br/>
                    {`While not strictly necessary, it's highly recommend to bring a `}<Link href={links.hiking.msrStoveKit}>stove kit</Link>{` so you
                    can cook
                     a hot meal. My first few backpacking trips consisted of only cold meals, and I would never willingly subject myself to that again.
                    My backpacking stove kit is comes on `}<i>every</i>{` multi-day hike.`}
                    <h3>Breakfast</h3>
                    {`I'm a huge oatmeal lover, so breakfast is almost always oatmeal.
                    There's a lot of ways to prepare oatmeal, but my favorite is to mix 1 cup old fashioned oats with
                    brown sugar, dried/freeze dried fruit, milk powder and chia seeds. If you're not into oatmeal (or like variety), muesli or rehydrated grits
                    are also good.`}
                    <h3>Lunch</h3>
                    {`I love packing homemade sandwiches the first day of my hike, which are filling and delicious. The rest of the lunches I eat while out hiking are
                    typically a mix of the following:`}
                    <ul>
                        <li>{`Tortilla Wraps: I like to fill these with some combination of peanut butter, nuts, dried fruit, Oreos and/or pop tarts`}</li>
                        <li>{`Peanut butter bagels with Oreos`}</li>
                        <li>{`Bread with cheese, salami, and/or other shelf-stable cold cuts`}</li>
                        <li>{`Mac n Cheese`}</li>
                        <li>{`Homemade sandwiches: while not the most space efficient, these are so tasty and you can make them however you want`}</li>
                    </ul>
                    <h3>Dinner</h3>
                    {`Cooking a hot, filling dinner is an excellent way to end your day of hiking. Your body will be tired and hungry, and it gives you something
                    to look forward to. Most of these items can be enhanced by adding packaged tuna, `}<Link href={links.misc.tvp}>TVP</Link>{`, or other mix-ins.`}
                    <ul>
                        <li>Pasta mixes/Mac n Cheese</li>
                        <li>{`Ramen - try adding peanut butter if you're `}<i>truly</i> adventurous</li>
                        <li>Instant rice mixes, I like to add curry packets to these</li>
                        <li>{`Prepackaged freeze dried meals: these are on the expensive side, but they're good eating`}</li>
                    </ul>
                    <h3>Snacks</h3>
                    {`When I'm backpacking I snack throughout the day to keep my calories up. I like to store my snacks in an easily accessible
                    part of my pack, so I can quickly reach them when taking a break. These are some of my go-tos, but snacks are usually up to personal preference.`}
                    <ul>
                        <li>{`Pop Tarts (yes, these aren't healthy, but they're tasty)`}</li>
                        <li>{`Homemade Bars or Condition One Bars (my go-to packaged bar)`}</li>
                        <li>{`Jerky/meat sticks`}</li>
                        <li>{`Dried Fruit - apricots, dates, and apples are my favorite`}</li>
                        <li>{`Mixed nuts or trail mixes`}</li>
                        <li>{`Sour gummy candy`}</li>
                        <li>{`Pretzels or other chip snacks.`}</li>
                        <li>{`Hard-boiled eggs`}</li>
                        <li>{`Oreos, I love these with peanut butter`}</li>
                    </ul>
                    {`Above all, pack something that you want to eat. Sometimes this means making a compromise between a food's weight and its tastiness factor.`}
                    <br/>
                    <br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='pc 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLVjdRG6C3PnRGty28IgF4z1-MVEx-SnV8wZMbCvTRZYty2JF8UxA4YxnUGmIK7W6HAO4F1lBe7w-G-ab22JYJ-_-Q58ld-AW0owzOlvNs5OWcE0rQyRAK5LK_Nhzz4tGN8RsSOIgk51kk8CWud7CHgb=w450-h600-no?authuser=0'
                            width={450}
                            height={600}
                        />
                    </div>
                    <br/><br/>
                </div>

                <h1 className={utilStyles.justifyCenter} id='food-storage'>How to Pack and Store Your Food</h1>
                <div>
                    {`Packing your food properly will reduce your pack size and weight. Repackage store-bought food into baggies or smaller containers:
                    for example, if you are bringing a box of Mac & Cheese,
                    recycle the cardboard box and place the noodles into a small plastic bag. Stuff sacks are useful for consolidating your meals to
                    one section of your pack.`}
                    <br/><br/>
                    {`It can be difficult to estimate how much food to bring at first, so
                    I recommend starting with short backpacking trips that'll give you an idea of what you need to eat day-to-day. As an example,
                    I like to pack at least a breakfast, lunch, and dinner, plus 4-5 snacks from the previous section for each day I'm on the trail.`}
                    <br/><br/>
                    {`Depending on where you backpack, you may also need to protect your food from animals. Small rodents like rats or mice are attracted to the scent
                    of human food, but can be keep out by storing food in hard plastic containers with screw top lids. If you are traveling through bear country,
                    it's imperative that you store your food in a `}<Link href={links.hiking.bearVault}>bear safe container</Link>{`. When camping in areas with
                    bear populations, cook and store your food at least 100 yards from your camp. You should also familiarize yourself with `}
                    <Link href={links.hiking.bearSafety}>how to handle bear encounters</Link>{`.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Pinnable
                            page={pageURI}
                            alt='bagel 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLVqB0TJ9iQ4RuZpN9lOIhTTfG0XSJimyIeJK8MGmwNCWDA54GMX_CRk1ILCZWNUOKlkCdCW2XQYxW9wDn4l1tqKW-zIBs1hRyHnUmh8lCU84GEfA0vwIjKrox6ZHPIbLF2vXZn0KFemk6AcXJqNWKR9=w450-h600-no?authuser=0'
                            width={450}
                            height={600}
                        /> 
                    </div>
                    <br/><br/>
                    <div>
                        {`Still have questions? `}<Link href='/contact'>Send me a message</Link>{` and I'll be happy to help you out!`}
                    </div>
                </div>
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="guides"
            />
        </Layout>
    )
}
