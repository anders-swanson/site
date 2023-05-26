import Image from "next/image";
import links from "../../lib/links";
import TabLink from "../tablink";
import utilStyles from "../../styles/utils.module.css";

export default function WTPHiking({
  clothing = true,
  food = true,
  filterSystem = true,
  bugs = true,
}) {
  return (
    <>
      <h1>What To Pack Hiking</h1>
      {`This is the gear I personally use for every day hike, having tested it over thousands of miles and multiple years.`}
      <div>
        {clothing && (
          <>
            <h3>Hiking Essentials</h3>
            {`For all but the shortest of day hikes, I bring my daypack, food & water, sturdy boots, and my cute bear socks.`}
            <ul>
              <li>
                <TabLink
                  href={links.hiking.trailPack}
                  text="Spacious daypack"
                />
              </li>
              <li>
                <TabLink
                  href={links.clothing.waterproofHikingBoots}
                  text="Waterproof hiking boots"
                />
              </li>
              <li>
                <TabLink
                  href={links.clothing.merrellBoot}
                  text="Merrell Hiking boots"
                />
              </li>
              <li>
                <TabLink
                  href={links.clothing.bearSocks}
                  text="Cute and comfy bear socks"
                />
              </li>
              <li>
                <TabLink
                  href={links.hiking.nalgeneWaterBottle}
                  text="Water Bottle(s) - always bring plenty of water, event for short hikes."
                />
              </li>
              <li>
                <TabLink href={links.hiking.firstAidKit} text="First Aid Kit" />
              </li>
            </ul>
          </>
        )}
        <div className={utilStyles.centered}>
          <Image
            alt="Lauren at Blue Lake, wearing a purple backpack with in-season larches in the background"
            src="https://lh3.googleusercontent.com/pw/AJFCJaWlAkjHHcvu-QzVxAs53aVtvSnz6alZ0AITy3lawFf9Si4aIr4fVpvBa_BPXe7WMusBvPGrR4sjILhMDnotiz6nAXYWcp2ik0LzmsG82QIKPlwNXrz_nlUO0u2ksWzJn8taZdaJnkOApKDSYqtqTnGF=w800-h800-s-no?authuser=0"
            height={500}
            width={500}
          />
        </div>

        {food && (
          <>
            <h3>Trail Food</h3>
            {`On any hike
                longer than 1-2 hours, I'm packing snacks, lunch, and extras - Being active and outdoors consumes a lot of calories.
                Most importantly what you like to eat, and enough of it to keep you fueled throughout the day. Always pack more food and water than you think you'll need. `}

            <br />
            <br />
            {`My favorites for the trail:`}
            <ul>
              <li>Homemade Sandwiches</li>
              <li>Fresh or dried fruit</li>
              <li>Bars, muffins, baked goods</li>
              <li>Nuts, crackers, chips, jerky, and other salty food</li>
              <li>Plenty of chocolate and sweets</li>
            </ul>
          </>
        )}
        {filterSystem && (
          <>
            <h3>Water Filter System</h3>
            <div>
              {`For longer day hikes, it's a game changer to bring your water filtration system. Having a reliable water filter
                     will let you stay out longer, and pack less water, reducing your pack weight.`}
              <br />
              <br />
              {`On any day hike over 8 miles, I bring my filter system to refill throughout the day. While there are many ways to filter
              water, I prefer squeeze bottles with screw top filters for their ease-of-use and rapid filtering.`}
            </div>
            <ul>
              <li>
                <TabLink
                  href={links.misc.squeezeBottle}
                  text="Squeeze bottle for filter system"
                />
              </li>
              <li>
                <TabLink
                  href={links.hiking.waterFilter}
                  text="Screw top water filter"
                />
              </li>
              <li>
                <TabLink
                  href={links.misc.buoyElectrolytes}
                  text="Replenishing electrolytes"
                />
              </li>
            </ul>
          </>
        )}

        {bugs && (
          <>
            <h3>Insect Repellent and Relief</h3>
            <div>
              {`In areas with high bug populations, packing an effective repellent is absolutely critical. 
                When using DEET, apply it thoroughly to your skin and clothing, avoiding your mouth and eyes.`}
              <br />
              <br />
              {`Covering exposed skin is also an effective way to prevent bug bites. Thick long sleeve shirts, pants, and mesh netted hats
                with full head cover can be as effective or better at stopping bugs from bothering you.`}
            </div>
            <ul>
              <li>
                <TabLink
                  href={links.hiking.bugSpray}
                  text="98% DEET Bug Spray"
                />
              </li>
              <li>
                <TabLink
                  href={links.hiking.afterbite}
                  text="Cortizone Cream after bite relief"
                />
              </li>
            </ul>
          </>
        )}

        <div>
          {`Pack accordingly to the hike and current conditions. If you're tackling a rugged, steep trail, bring sturdy shoes with plenty of tread.
        If the weather forcast is cold, or there's potential for precipitation, throw in some extra layers and suitable raingear. Or, if its hot and sunny,
        make sure you have extra water, electrolytes, and sunscreen.`}
        </div>
      </div>
    </>
  );
}
