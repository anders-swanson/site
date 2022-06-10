import utilStyles from '../../../styles/utils.module.css'
import Layout from "../../../components/layout"
import Image from 'next/image'
import Link from 'next/link'
import Video from "../../../components/video"
import RelatedPosts from '../../../components/related_posts'

//+metadata
let metadata = {
    "title": "Backpacking Meal Ideas",
    "date": "2022-06-09",
    "image": "https://lh3.googleusercontent.com/pw/AM-JKLVPvvDopK4LEy8vh-6RYP7G4pZxu8W2gbDSiBjXeFETMOat9i4INw8lXKv8rhqb6Baqf1MCoPKnsy9vd432BliVf1Hk5xquM85ZQeCSuDSxD2f0tp6u-PHaYh0SIPb7_7X7EymaRdQwgMMK6B3J9V2H=s450-no?authuser=0",
    "tags": ["backpacking", "guide"]
}

const cover = 'https://lh3.googleusercontent.com/pw/AM-JKLXXcf1K4hJmKGMYeeh4mEo1RunikoWbFKynQaEqZnUXA3bnuerQ2Rba3aTFMdM68SBqSLI0MyLAHyM5-kNFrAgFzLMJlbn-4_Iwws4twiM35I6ImoiYNLV1n-ccMYhnlACnipIVaZaVUF6qOmyE23qk=w1920-h955-no?authuser=1'

const tvp = 'https://www.bobsredmill.com/tvp-textured-veg-protein.html'

export default function Post() {
    return (
        <Layout 
            headerImage={cover}
            headerText={metadata.title}
            description={`Meal inspiration for your next backpacking trip!`}
            ogImage={metadata.image}
        >
            <div className={utilStyles.flexGapContainer}>
                <div>
                    {`Packing legitimately tasty food on a backpacking trip is a challenge - you'll often be choosing between prepacked/dry food, or other even
                    more unappetizing options like freeze-dried dinners. With a little inspiration, you can whip up a decent meal on the trail, using simple and 
                    lightweight ingredients. Check below for some of my favorite meals to make while backpacking!`}
                </div>

                <h1 className={utilStyles.justifyCenter} id='oatmeal'>Oatmeal</h1>
                <br/>
                <div>
                    {`Oatmeal is the centerpiece of every breakfast (Yes, I mean `}<i>every</i>{` breakfast), and can be prepared. Don't even think about 
                    bringing prepackaged oatmeal - Those little packets are barely 160 calories. Homemade oatmeal packets are filling, nutritious, and if prepared
                    correctly, pretty damn tasty.`}
                    <br/>
                    {`Our simple recipe is as follows (portion for one person)`}
                    <ul>
                        <li>1 cup old fashioned oats or instant oatmeal</li>
                        <li>1-2 tablespoons instant milk powder</li>
                        <li>Dash of cinnamon</li>
                    </ul>
                    {`Add the ingredients to a ziplock bag for storage until preparation. Cook on camp stove using enough water to fully cover the oats.
                    Service with your favorite toppings - Some of mine include
                    peanut butter (crunchy of course), granola, dried fruit, nuts, and `}<Link href={tvp}>TVP</Link>{`. You can put TVP on literally anything. 
                    Instant milk powder gives the oatmeal a creamy, sweet flavor without needing to pack real milk.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                    <Video
                        height={600}
                        width={338}
                        src='https://raw.githubusercontent.com/anders-swanson/data/master/data/IMG_7056.mp4'
                    />
                    </div>
                    <br/><br/>
                    {`Enjoy these tantalizing oatmeal shots as further inspriation.`}
                    <br/><br/>
                </div>
                <br/><br/>
                <div className={utilStyles.centered}>
                    <Image
                        alt='oats 1'
                        src='https://lh3.googleusercontent.com/pw/AM-JKLWL5hr2Ghx32lGffuZGyc8ZGNBIkQ_kjEU5krh-voXoN_MmRNRUy2U-DUXvAtadpi9CpLxUpfua1BPqAZJ4qLv7pG-k7SRsUrL85iapJz2hs1fUMmZUksaQ5KqbUb48Df9EjT8AgCr9-Khiraj-ZVaw=w450-h600-no?authuser=0'
                        width={450}
                        height={600}
                    /> 
                </div>
                <div className={utilStyles.centered}>
                    <Image
                        alt='oats 2'
                        src='https://lh3.googleusercontent.com/pw/AM-JKLX6L6UpIAcWu59G4QjeGgRwSsTSCMLK9VVRxlZsa_HAkVongR2OeJ6Qe-sNRiVyBdNhV8tCW3fbVprGl9gfonppyNQuPnlN9UfCSGT8Lq_OzSWwTWZLd5sKtydYU-GVjRloXWDLYXeeI6mI9fL3E5qC=w450-h600-no?authuser=0'
                        width={450}
                        height={600}
                    /> 
                </div>

                <h1 className={utilStyles.justifyCenter} id='pasta-and-couscous'>Pasta or Couscous</h1>
                <br/>
                <div>
                    {`Lightweight carbs like dry pasta or couscous are perfect trail meals, once they've been spiced up a little. By themselves,
                    this type of food is extremely bland and boring - no one wants to eat plain pasta if they don't have to.
                    Pasta and couscous preparation is fairly interchangeable on the trail, and can be mixed similarly. `}
                    <br/>
                    {`I like to add at least a few different mixins to spice these dishes up - here's a list of my favorites!`}
                    <br/><br/>
                    <ul>
                        <li>Powdered cheese blends - you can buy these in bulk or use prepackaged mac boxes like Kraft</li>
                        <li>Tuna Packets - literally add these to anything for extra protein and some calories</li>
                        <li>TVP - almost goes without saying, and gives a nice crunch</li>
                        <li>Powdered gravy mixes - found in the soup isle of your grocery store</li>
                        <li>If you want to get crazy with it, a basic peanut sauce can be whipped up with peanut butter and soy sauce - Only for advanced adventurers</li>
                    </ul>
                    {`The pasta or couscous can also be swapped out for minute rice or instant mashed potatoes - both are good carbohydrate substitutes.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='pc 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLVjdRG6C3PnRGty28IgF4z1-MVEx-SnV8wZMbCvTRZYty2JF8UxA4YxnUGmIK7W6HAO4F1lBe7w-G-ab22JYJ-_-Q58ld-AW0owzOlvNs5OWcE0rQyRAK5LK_Nhzz4tGN8RsSOIgk51kk8CWud7CHgb=w450-h600-no?authuser=0'
                            width={450}
                            height={600}
                        />
                    </div>
                    <br/><br/>
                </div>

                <h1 className={utilStyles.justifyCenter} id='pb-oreo-bagels'>Peanut Butter Oreo Bagels</h1>
                <br/>
                <div>
                    {`A recent lunchtime favorite, schmear your favorite bagel with peanut butter and top accordingly with crumbled Oreos. 
                    The absolute best bagel I've had for this is My Favorite Muffin, but the bagels made by Dave's Killer Bread are a suitable 
                    substitute.`}
                    <br/><br/>
                    {`Spice up your backpacking bagel even further with dried banana chips or granola. These are super good with Oreos though!`}
                    <br/>
                    {`A tip for the first day's lunch: pack a premade sandwich from home. Premade sandwiches won't last overnight without refrigeration,
                    but they make a great lunch on the first day of your trip.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='bagel 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLVqB0TJ9iQ4RuZpN9lOIhTTfG0XSJimyIeJK8MGmwNCWDA54GMX_CRk1ILCZWNUOKlkCdCW2XQYxW9wDn4l1tqKW-zIBs1hRyHnUmh8lCU84GEfA0vwIjKrox6ZHPIbLF2vXZn0KFemk6AcXJqNWKR9=w450-h600-no?authuser=0'
                            width={450}
                            height={600}
                        /> 
                    </div>
                    <br/><br/>
                </div>

                <h1 className={utilStyles.justifyCenter} id='seafood-curry'>Seafood Curry</h1>
                <br/>
                <div>
                    {`A choice dinner option - our seafood curry is sure to amaze. To prepare, cook minute rice in your camp stove before adding a packet of premade curry,
                    and optionally a packet of tuna for additional flavor and protein. Premade curry packets can be found in most grocery stores, and are an extremely
                    tasty addition to a trail meal. These packets are a little heavier than the other items on this list (because they contain a decent amount of water)
                    but they are so damn tasty I can't help but bring them on almost every backpacking trip.`}
                    <br/>
                    {`For this recipe, I use 2 cups of minute rice per packet of curry and tuna, which serves up to two people.
                    You can portion the rice ahead time into individual ziplock bags, or pack a bigger bag ahead of time for longer trips.`}
                    <br/><br/>
                    <div className={utilStyles.centered}>
                        <Image
                            alt='curry 1'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLVBBORDEPtBsdwamsOgzq_udxqHY6p2sTNY1KqEE7GuHWX7tl8j56yMELUzJ85Oi7q-1dZi1FItJDxvOdZH7RsExwjhROtgDRn_UMSwxKx1XlgQZC1z0_QZJ0EZfDaZQzraHW3CKyEy5RpappLBKurZ=w450-h600-no?authuser=0'
                            width={450}
                            height={600}
                        />
                    </div>
                    <br/><br/>
                    {`Look how happy I am to be eating trail curry - you can't even see the suffering from a 90+ degree day and dozens of mosquito bites.`}
                    <div className={utilStyles.centered}>
                        <Image
                            alt='curry 2'
                            src='https://lh3.googleusercontent.com/pw/AM-JKLXn3awARUCE01NlHbZl2YzvfnjzqkKUlqV7SY1K5jhHbMf8AUNG5XA1xXRsz923taELhOdvlP5dqjm8xPSV0g2IQnDtkWcWS34pp8TybAaCZ27RrPXyvJjS60Qt002MRPXN6z-7I9jydVNm8irmYmtd=w800-h535-no?authuser=0'
                            width={800}
                            height={535}
                        />
                    </div>
                    <br/><br/>
                    {`An example meal plan for two people on a 2-night backpacking trip inspired by the suggestions in this post could look something like this`}
                    <ul>
                        <li><b>Day 1, Lunch:</b> Prepared sandwiches from home.</li>
                        <li><b>Day 1, Dinner:</b> 2 cups dry pasta with a powdered cheese blend and TVP.</li>
                        <li><b>Day 2, Breakfast:</b> 2 cups oatmeal with 2 Tablespoons instant milk powder, served with peanut butter and granola.</li>
                        <li><b>Day 2, Lunch:</b> Peanut butter bagels topped with oreos, supplemented with dried fruit and nuts.</li>
                        <li><b>Day 2, Dinner:</b> 2 cups minute rice with curry and tuna packets.</li>
                        <li><b>Day 3, Breakfast:</b> repeat oatmeal, mix up toppings (chocolate chunks, dried banana chips, peanut butter).</li>
                        <li><b>Day 3, Lunch:</b> Crackers (such as Triscuits) with cheese and dry salami, or repeat peanut butter bagels. Supplement lunch with remaining snacks, fruit, and nuts.</li>
                    </ul>
                    {`If you are allergic to peanut butter... Better luck next time.`}
                </div>
                <br/><br/>
            </div>
            <RelatedPosts
                metadata={metadata}
                tag="guide"
            />
        </Layout>
    )
}
