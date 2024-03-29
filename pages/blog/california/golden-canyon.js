import Image from "next/image";
import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";
import Link from "next/link";

//+metadata
let metadata = {
  title: "Golden Canyon",
  date: "2021-12-31",
  image:
    "https://lh3.googleusercontent.com/pw/AM-JKLV3jc6L3YxPH7Nv1BA4tPYYCPJF9aMReUSFvE6UvRK-qmUJSiiMamjLoDfOTPszrGebRi5SfC_MEuZ8HVsE753uQv4VE9mkmWnWZEQkDt_BUzwylu-pc5DPlAbrN5XX2ZCujhA1j57gnkq3Er1oO6XP=w1076-h1075-no?authuser=1",
  tags: ["hiking", "national park", "california"],
};

const trailhead =
  "https://www.google.com/maps/place/Golden+Canyon+Trailhead/@36.4226602,-116.8415294,14.96z/data=!4m5!3m4!1s0x80c73e8ab49dc8e7:0x81181ab2667c4455!8m2!3d36.4207027!4d-116.8467738";
const subText = "6.23 miles, 1,158 feet gain";
const image1 =
  "https://lh3.googleusercontent.com/pw/AM-JKLXqi60E2GTFcqT04LkTsO2Fs8jSDUYZB6WcSQs6cHSaUaqfhFanF5ZjIUhupd7BlttYMKgqmVsS016ezvykuZXhORxt86g_iAzgfmW4LoDwHTiZn46TxbA-7Db8Drv9K8InSSk2ZpsukeG8YZDL-2Tg=w1609-h1075-no?authuser=1";
const image2 =
  "https://lh3.googleusercontent.com/pw/AM-JKLWrBiV_o8cu2DZrtVmWPddA_ClS4zqXazcM6U08Tg5gAsRujoNlHtvYHK90wVUFsHTHPt0i8vuA8KWsvrGQsLci7VsgRElR2UatBTjiMi48vvbtdUjuija0ZHOIiRP8vfxuIAT1U53FRA9igmJhtdFM=w1609-h1075-no?authuser=1";
const image3 =
  "https://lh3.googleusercontent.com/pw/AM-JKLWvkekWOWQyNYt0uVDEcJpQlCc7Iq24axJh0qNw5uWX9f19Ou7p6z8a708fudQvPXvEQTTQelJE6glKY4qC6xan1BZcr1e0PbjYdLLlyyrkhfkN0yJWzvZ0nrwQ7VrZ9igVNaUsJMoKUTPQEstoChSh=w1609-h1075-no?authuser=1";
const image4 =
  "https://lh3.googleusercontent.com/pw/AM-JKLWXU-xtn9EZHieV08Dg89sAbJ-M7EV_p0C5ATeO55Y_KduDuuhnd4xLYJ33Cd8XXdXLN2MSEaEkVHebLAvcNavwcJLgm8ZppqztUmos8NgYsqH6Mu4vnS5IBvOfQyoMyf0ZfmyvHWXH2Ij2xClZC1i1=w807-h1075-no?authuser=1";
const image5 =
  "https://lh3.googleusercontent.com/pw/AM-JKLXeB-3oi-Fi6v5n90ciq-aSp-ySivha83dO-e7hiRXuKB1ZZE6pZ0yfL1UoxgQ_CTa9gGxG3G9bwbjZU7poW2wNYy5dlzm1HAe8LkIncS3ByElTvDSUqI9wA5tS33fByjkkZiU_LZjkPOuR1HYe4h-1=w1609-h1075-no?authuser=1";

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      subText={subText}
      description={`Explore dramatic yellow-gold canyons under the scorching sun of Death Valley.`}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "national park",
      }}
    >
      <div className={utilStyles.flexGapContainer}>
        <div className={utilStyles.textBlock}>
          <Link href={trailhead}>Golden Canyon</Link> is a popular hiking trail
          in Death Valley national park, just a few minutes from Furnace Creek.
          <br />
          {`A shorter out-and-back to Red Cathedral can be hiked on this trail, or you can make a longer loop that 
                    should be around 7 miles. If you have time, you can also add on the Zabriskie Point hike, which is reachable from
                    the Golden Canyon trail`}
          <br />
          <br />
          {`The Golden Canyon trail is home to colorful canyons that vary from light yellow to ruddy or dark brown. Near Red Cathedral (a 1/2 mile
                    spur trail), tall sandstone cliffs take on a deep, reddish hue.`}
        </div>
        <Image
          alt="Hiking Golden Canyon in Death Valley National Park"
          height={450}
          width={700}
          src={image1}
        />
        <div className={utilStyles.textBlock}>
          {`As you climb up and around the loop, the trail exits the wash and follows a series of marker posts. 
                    Near Manly Beacon (the high point on the trail), there are panoramic views of the canyons, and the salt flats below.
                    To complete the loop back to Golden Canyon trailhead, the trail rejoins a wash and descends to Gower Gulch.`}
          <br />
          <br />
          {`If you hike this in the warm season (why would you, unless you like suffering), bring plenty of water and dress
                    appropriately. There wont be much shade during the summer months, and the heat can quickly become intolerable in the canyon.`}
        </div>

        <Image
          alt="Hiking through the wash of Golden Canyon, Death Valley National Park"
          height={450}
          width={700}
          src={image2}
        />
        <div>
          {`Golden Canyon can be tied in with other trails and destinations along the Badwater Basin road (the road that runs south
                    from Furnace Creek). 
                    On the same day, we were able to visit Artist's Palette, Devil's Golf Course, the Badwater Basin salt flats, and Room Canyon
                    before heading back to camp near Stovepipe Wells.`}
        </div>
        <div className={utilStyles.flexWrapContainer}>
          <Image
            alt="Overlooking geologic formations in Golden Canyon, Death Valley National Park"
            height={750}
            width={1200}
            src={image3}
          />
          <Image
            height={550}
            width={400}
            alt="Sunlight illuminating Golden Canyon, Death Valley National Park"
            src={image4}
          />
          <Image
            height={550}
            width={800}
            alt="Red Cathedral, Death Valley National Park"
            src={image5}
          />
        </div>
      </div>
    </Layout>
  );
}
