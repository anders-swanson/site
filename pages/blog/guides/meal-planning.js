import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import Link from "next/link";
import links from "../../../lib/links";
import Video from "../../../components/video";
import Pinnable from "../../../components/pinit";
import Contact from "../../../components/contact";

//+metadata
let metadata = {
  title: "Planning Backpacking Meals",
  date: "2022-10-11",
  image:
    "https://lh3.googleusercontent.com/pw/AL9nZEV5m8JAnqzOje7KyO-67a02LkfLX-vNWYvAhg15S5hW84KYrPUaYByT3rPelgYZ1kieHRdEm3IhvbYeAAMGA-Pezdyux8XExnRFrh6vD5721iQQbYJgPlxyBfwRSSG-Q35A2vzCgR8rcUAsMmDxJ1Rh=s800-no?authuser=0",
  tags: ["backpacking", "guides"],
};

const pageURI = "/blog/guides/meal-planning";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      description={`Learn how to plan tasty, filling meals for your next trip to the backcountry.`}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "guides",
      }}
    >
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`So, you're planning your first backcountry trip but aren't sure what kind of food to bring:
                    you'll have lots of questions: How much food to pack, what kind of food, and more!`}
          <br />
          <br />
          {`Meal planning is a crucial part of any backcountry adventure, so whether you're brand new to backpacking, or just 
                    looking for some tasty inspiration, this guide has the answers to your questions!`}
        </div>

        <div className={utilStyles.centered}>
          <Video
            height={600}
            width={338}
            src="https://raw.githubusercontent.com/anders-swanson/data/master/data/IMG_9102.mp4"
          />
        </div>

        <h1 className={utilStyles.justifyCenter} id="basics">
          Food and Water Basics
        </h1>
        <div>
          {`Getting enough food while backpacking can make or break any trip - if you aren't eating enough calories,
                    you'll feel sluggish, unmotivated, and emotionally drained. Besides calories, you'll also have to consider the weight of the food carry:
                    Favor foods that are lightweight, but also calorically dense. It's also extremely important to pack food that you
                    know you'll enjoy eating. You don't want to be hungry, but still dreading having to eat what you've packed!`}
          <br />
          <br />
          {`When you're on the trail, you'll need access to safe drinking water. Investing in a quality water filtration system is essential for gathering drinking water
                    from streams and rivers. I use a `}
          <Link href={links.hiking.waterFilter}>
            Katadyn BeFree water filters
          </Link>
          {` combined with a `}
          <Link href={links.misc.squeezeBottle}>compatible squeeze bottle</Link>
          {`. This filter combination has served me well for years, and
                    I love how quickly it's able to fill my 1.5 liter bottle. I prefer camping near a water source, 
                    so water is easily accessible when I'm cooking or relaxing at camp.
                    Before any trip, research available water sources on your route, such as streams, lakes, or caches. Depending on where you hike, you
                    may need to pack more or less water. Hikes in arid, desert regions can require packing `}
          <b>all</b>
          {` your water.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Backcountry coffee brewed with water filtered from an alpine lake"
              src="https://lh3.googleusercontent.com/pw/AL9nZEXpsimNoMDv981nPmAkR9PF9I6iF5GlI2xEsh_yGIB5QaEER7o1ajY_xrLSwpc4kYOshiZOBb0YfAmlNfqazItU9teESLwTyVu1USmtAZg4Pnh7MHT9dDtyh2RPL3i5rEKGhHU9-U4KjBhS9jP8Y-fn=w533-h800-no?authuser=0"
              width={533}
              height={800}
            />
          </div>
        </div>

        <h1 className={utilStyles.justifyCenter} id="what-to-bring">
          What Kind of Food to Bring
        </h1>
        <div>
          {`Choose food that's something you like to eat 
                    (or can at least tolerate) that packs light, and is simple to prepare. Typically, this means dry, dehydrated, or freeze dried meals.`}
          <br />
          <br />
          {`While not strictly necessary, it's highly recommend to bring a `}
          <Link href={links.hiking.msrStoveKit}>stove kit</Link>
          {` so you
                    can cook
                     a hot meal. My first few backpacking trips consisted of only cold meals, and I would never willingly subject myself to that again.
                    My backpacking stove kit is comes on `}
          <i>every</i>
          {` multi-day hike.`}
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
                    to look forward to. Most of these items can be enhanced by adding packaged tuna, `}
          <Link href={links.misc.tvp}>TVP</Link>
          {`, or other mix-ins.`}
          <ul>
            <li>Pasta mixes/Mac n Cheese</li>
            <li>
              {`Ramen - try adding peanut butter if you're `}
              <i>truly</i> adventurous
            </li>
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
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Oatmeal with Granola at Ramona Falls"
              src="https://lh3.googleusercontent.com/pw/AL9nZEWZfLMoTTE1mc2Emrrq5BkUvU6sdzxXn2efyALd-ttvKQThKxwnPkcWfXySwNi0xnD5oFHN4itWdIa02jKeNdiZh7ed13rwHicV6cziI_zNQK_op0EvMMaRgl7XZl4awGDHqTNwEj3yvCz3vLkKxC3m=w450-h600-no?authuser=0"
              width={450}
              height={600}
            />
          </div>
          <br />
          <br />
        </div>

        <h1 className={utilStyles.justifyCenter} id="food-storage">
          How to Pack and Store Your Food
        </h1>
        <div>
          {`Packing your food properly will reduce your pack size and weight. Repackage store-bought food into baggies or smaller containers:
                    for example, if you are bringing a box of Mac & Cheese,
                    recycle the cardboard box and place the noodles into a small plastic bag. Stuff sacks are useful for consolidating your meals to
                    one section of your pack.`}
          <br />
          <br />
          {`It can be difficult to estimate how much food to bring at first, so
                    I recommend starting with short backpacking trips that'll give you an idea of what you need to eat day-to-day. As an example,
                    I like to pack at least a breakfast, lunch, and dinner, plus 4-5 snacks from the previous section for each day I'm on the trail.`}
          <br />
          <br />
          {`Depending on where you backpack, you may also need to protect your food from animals. Small rodents like rats or mice are attracted to the scent
                    of human food, but can be keep out by storing food in hard plastic containers with screw top lids. If you are traveling through bear country,
                    it's imperative that you store your food in a `}
          <Link href={links.hiking.bearVault}>bear safe container</Link>
          {`. When camping in areas with
                    bear populations, cook and store your food at least 100 yards from your camp. You should also familiarize yourself with `}
          <Link href={links.hiking.bearSafety}>
            how to handle bear encounters
          </Link>
          {`.`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Rummaging through a bear container while making dinner"
              src="https://lh3.googleusercontent.com/pw/AL9nZEWT1pWQYMGFfOuypOHmiiOwX2ftIqTpHY3nwHxbzGJ1ah22dc76hbTveUOomWBo9ptnmzl93FfsnF4qPQa5B8h5mnIUXGCw0LjYhYj0uj8Aqzo0vnhQDXZjp55Eb9iDr3nW1IxrjKn0sTr6YA8RUlI9=w828-h1067-no?authuser=0"
              width={450}
              height={600}
            />
          </div>
          <br />
          <br />
          <Contact />
        </div>
      </div>
    </Layout>
  );
}
