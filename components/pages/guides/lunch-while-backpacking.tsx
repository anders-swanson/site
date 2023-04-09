import utilStyles from "../../../styles/utils.module.css";
import Pinnable from "../../pinit";
import ReadMoreLink, { ReadMoreHeader } from "../../read_more_link";
import Contact from "../../contact";
import ChocolateDates from "../../snippets/chocolate-dates";

const pageURI = "/blog/guides/lunch-while-backpacking";

//+metadata
export const metadata = {
  title: "What should you have for lunch while backpacking?",
  date: "2023-03-17",
  image:
    "https://lh3.googleusercontent.com/pw/AMWts8AtHF89VDzcFXO89O39jWXKxDvbz_FTSRr-UkscOsl13kor45kRVRNxgHxObOpSI_dvZknyYWsdrPHCQd7LHoNQAQPIyCWNlSk_htWtlPRi--9WimrVlFaat4WMVjfyE3qmq1lecN_2ThrDoF97AAah=w653-h653-s-no?authuser=0",
  tags: ["guides", "backpacking"],
  preview:
    "Check out our top lunch and snack choices that'll keep you well-fed while backpacking.",
};

export default function BackpackingLunch({ readMore = false }) {
  return (
    <>
      <ReadMoreHeader enabled={readMore} metadata={metadata} />
      <div className={utilStyles.flexGapContainer}>
        <div>
          {`There's nothing quite like the feeling of embarking on a new backpacking adventure. However, with long hours of strenuous physical activity ahead, 
          it's essential to fuel your body with nutritious meals - especially at lunchtime, when a quick and satisfying break can make all the difference. 
          That's why mastering the art of meal planning is a crucial skill for any backpacker looking to make the most of their adventure.`}
          <br />
          <br />
          {`Check out our guide below to learn more about meal planning while backpacking!`}
          <br />
          <br />
          <div className={utilStyles.centered}>
            <Pinnable
              page={pageURI}
              alt="Backpacking Sandwich"
              src="https://lh3.googleusercontent.com/pw/AMWts8A8zwUIq_BK-QjFqWCMW07AbpoPYe7hGxd1A2xQT2W-7vxN13surYGteThPE7GEXlFiMqI9Q2wVPtQkwM0ol7sVlAZrq3DZbBk7e01Wk5RzK7JV0U0DIvP29ypzbzqe1jNcO-2fDMsZVeJYNPK-HLSt=w450-h600-s-no?authuser=0"
              height={600}
              width={450}
            />
          </div>
        </div>

        <ReadMoreLink
          enabled={readMore}
          text="meal planning for your next backpacking adventure"
          uri={pageURI}
        >
          <h1 className={utilStyles.justifyCenter} id="mean-planning">
            Meal Planning Basics
          </h1>
          <div>
            {`The best food for backpacking is nutrient dense, lightweight, shelf-stable, and easy to prepare. You likely won't have the tools to prepare complex meals on the trail,
          nor will you want to carry avoidable extra weight - so simple meals are important.`}
            <br />
            <br />
            {`For nutrition, expect to consume in excess of your normal daily caloric intake, typically between 2,500 to 4,000 calories. This might sound like a lot, 
          but backpacking is strenuous and you'll need the additional calories to keep your energy up.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Eating a homemade bar while backpacking on Ross Lake"
                src="https://lh3.googleusercontent.com/pw/AMWts8DcxbvylWTZdFrpXL2_oqVKHo0grH5a7Oc0M3oUM7fAwVAm83F-osX_Q-E2vau_Qejkp5t_QACNJZ83cO3ONhDf1jLRBf8nueg2uU7Bn1ghmPzoQTwk-DT9_3UIm--KuJjH5fBFPQBEpCRKiqdT1Ull=w565-h754-s-no?authuser=0"
                height={754}
                width={565}
              />
            </div>
            <br />
            <br />
            {`When choosing shelf-stable food, there's a a lot pick from, and it largely comes down to personal preference. When I'm planning my meals,
          I try to select different textures (like crispy or creamy) and flavors to help keep my palate motivated.`}
            <br />
            <br />
            {`These are a few examples of our go-to shelf-stable backpacking foods:`}
            <ul>
              <li>{`Hard cheeses and cured meats like salami, smoked salmon, or jerky.`}</li>
              <li>{`Pasta, ramen, rice, and oatmeal.`}</li>
              <li>{`Instant or freeze-dried meal packages.`}</li>
              <li>{`Energy bars or meal replacement bars.`}</li>
              <li>{`Nuts and nut butters (like peanut butter!).`}</li>
              <li>{`Packets of tuna, salmon, or chicken.`}</li>
              <li>{`Tortillas, pita bread, or bagels.`}</li>
              <li>{`Chocolate, pop tarts, and other packaged deserts.`}</li>
              <li>{`Dried fruit like apricots or apples.`}</li>
            </ul>

            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Spread of food while backpacking"
                src="https://lh3.googleusercontent.com/pw/AMWts8A0WNt8kgq5GC7mED8jb9v77h3RK4ZRoD-UaW2DxC4fBNOSCm2QJAoiM-qH4pF4bxo-VSTZ9A5l9BXIaN1xgNgg8zOCLC70jvLF3lDbeoDy9Hocx3116uoB5QsyyZEuchY3nDywR3FbaqQ3_bEBlA2j=w450-h600-s-no?authuser=0"
                height={800}
                width={610}
              />
            </div>
            <br />
            <div>
              {`When picking your  backpacking food, it's also important to choose food that `}
              <i>You</i>
              {` know you'll enjoy eating.`}
              <br />
              <br />
              {`Even if you've selected the "ideal" backpacking food according to some list or article
          (like this one), if you don't enjoy the food you've brought, you'll be less than happy at mealtime.`}
              <br />
              <br />
              {`When meal planning, we balance tastiness with how "backpackable" something is. For example, we like to bring large home-made deli sandwiches for the first day's lunch: they're not lightweight, but
          definitely taste amazing!`}
            </div>
          </div>

          <h1 className={utilStyles.justifyCenter} id="meal-ideas">
            Ideas for Lunches and Snacks
          </h1>
          <div>
            <h3>{`Mac & Cheese`}</h3>
            {`Mac & Cheese is lightweight, tastes great, and has a lot of variety depending on how you choose to prepare it. 
            Take your favorite brand of store-bought mac & cheese (or use plain pasta), and level it up by adding your favorite mix-ins.`}
            <br />
            <br />
            {`Potential mix-ins for prepackaged Mac & Cheese:`}
            <ul>
              <li>{`Dried Jalapeños.`}</li>
              <li>{`Salami or other cured meats.`}</li>
              <li>{`Powdered milk.`}</li>
              <li>{`Bacon bits.`}</li>
              <li>{`Shelf stable cheeses like cheddar.`}</li>
            </ul>
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Prepping lunch at Tank Lakes"
                src="https://lh3.googleusercontent.com/pw/AMWts8APL617fwFHuhi3LHRo-tEzexB8eQCRgjgJqJMpoQNEBMK_0wBFC76aPTfR5MM2MG_vdnGU-T-EhT1zg68hSB3fOEHlW_xYNfRCCZeuUEBoOMU4enNjRY3hAhaCNY8q_ivW5X2SwazZPTWyHZHN_N5x=w817-h1067-s-no?authuser=0"
                height={800}
                width={610}
              />
            </div>
            <h3>{`Tortilla and Pita Wraps`}</h3>
            {`Tortilla and Pita bread wraps make a good base for a backpacking lunch, as they are lightweight, quick to assemble, and versatile.`}
            <br />
            <br />
            {`Check out our favorite wrap fillings, or use your imagination to pick what's right for you!`}
            <ul>
              <li>{`Peanut butter, crumbled Oreos/Poptarts, and banana chips.`}</li>
              <li>{`Cheddar or cream cheese, tuna/salmon packets, and hot sauce.`}</li>
              <li>{`Instant or freeze dried meals.`}</li>
              <li>{`Literally anything combined with peanut butter. We seriously love peanut butter for backpacking!`}</li>
            </ul>
            <h3></h3>
            <h3>{`Oatmeal`}</h3>
            {`The incredible thing about Oatmeal is how customizable it is. With the right combination of mix-ins, plain oats transforms into
          something magically delicious. Experiment with nuts, dried fruit, coconut, chocolate, peanut butter, or fresh-picked berries off the trail!`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Oatmeal made on the trail"
                src="https://lh3.googleusercontent.com/pw/AMWts8AG1NPX7c3UVMoL_kXAdSSHwv5HN4Sc_j6Fbc5AICOZKWBF2nezKujejy506ekolO7GMAvL-tO1U45R0bKJKxoSExY4yZx8eRmJQyoiq7i-zGr_MZ4c-oGuDmKjIxs5vNu1NHE9ZpO2gt6iiZuZXEDT=w565-h754-s-no?authuser=0"
                height={754}
                width={565}
              />
            </div>
            <h3>{`Chocolate-covered peanut butter dates`}</h3>
            <ChocolateDates />
            <h3>{`Cheese & Crackers`}</h3>
            {`We'll eat cheese and crackers as a midday snack, topping each bite with cured meat like salami. Hard cheeses and cured meats are shelf stable, 
          and should remain fresh during a backpacking trip.`}

            <h3>{`"Trail Curry"`}</h3>
            {`"Trail Curry" is our go-to backpacking meal: a simple mixture of minute rice, prepackaged curry, and tuna. Cook the minute rice, stir in the curry, top with tuna, and serve!`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Trail Curry"
                src="https://lh3.googleusercontent.com/pw/AMWts8DaCsYr26gQcrCSML9lWqUq6yOQ5EcXIgP3aghumpoP70IznXZqcGITFgPiqbG0CpUL3U-3IcguvOzpAn0WG0vz_RVUCLqG894AKyICXWew5QAzfBqYMZiIWgWb6D_dTDKk1FmbkXnFHOayLXIwfio8=w565-h754-s-no?authuser=0"
                height={754}
                width={565}
              />
            </div>
            <br />
            <br />
            <h3>{`Sandwiches`}</h3>
            {`While not the lightest on the list, we love to prepare homemade sandwiches to eat within the first or second day of a backpacking trip.
          Homemade sandwiches are always shelf-stable (depending on your ingredients), so we generally eat these pretty quickly.`}
            <br />
            <br />
            {`Sandwiches made with ingredients like peanut butter, nutella, and honey will last longer and may be kept wrapped for several days, or prepared on the trail.`}
            <br />
            <br />
            <div className={utilStyles.centered}>
              <Pinnable
                page={pageURI}
                alt="Homemade backpacking sandwich"
                src="https://lh3.googleusercontent.com/pw/AMWts8DNgdmpZcjSwFFbAunYD2Fb4dQjfxXcb97o9GDtHokI4dw5ViOGWaYO-gum11VZCRCDKobjsBUw-cW3jEdB9zbASXXdU0Bvh5Ih4r_vl23bha3XVvQdNbd2R8iSKovPFUZ9PEc8uqp8_JLa9amlSbM3=w800-h800-s-no?authuser=0"
                height={450}
                width={450}
              />
            </div>
          </div>

          <h1 className={utilStyles.justifyCenter} id="other-tips">
            Other Tips
          </h1>
          <div>
            <ul>
              <li>{`When possible, lunch near streams, rivers, or lakes. Having a water source nearby is useful for cooking and refilling water.`}</li>
              <li>{`Try to balance protein, fat, and carbohydrates in your meals, so they are more sustaining and filling.`}</li>
              <li>{`Packing hot sauce, spices, and other condiments adds much-needed flavor to food that would be otherwise bland and boring.`}</li>
              <li>{`Plan to eat your heaviest food first instead than saving it for later. Lightening your pack early on will make the longer miles easier.`}</li>
            </ul>
          </div>

          <br />
          <Contact />
        </ReadMoreLink>
      </div>
    </>
  );
}
